#!/usr/bin/env python3
"""내레이션 길이에 맞춰 영상 타임라인을 다시 잡고, 음성을 얹는다.

  python3 mix.py vo            # vo/01.mp3 ... vo/09.mp3 를 읽는다

내레이션 클립 하나가 장면 하나에 대응한다. 클립 길이를 재서 scene.html 의
DUR 배열을 다시 쓰고, 영상을 다시 렌더한 뒤 같은 타임라인 위에 음성을 배치한다.
그래서 어떤 TTS 엔진을 쓰든 그림과 말이 어긋나지 않는다.
"""
import json, math, os, re, subprocess, sys

SRC       = sys.argv[1] if len(sys.argv) > 1 else 'vo'
TEMPO     = 1.15   # 낭독 속도 보정
PAD       = 0.85   # 말이 끝나고 다음 장면으로 넘어가기 전 여백
OFFSET    = 0.30   # 장면이 뜨고 나서 말이 시작되기까지
MIN_BEAT  = 3.8
HERE      = os.path.dirname(os.path.abspath(__file__))


def run(cmd, **kw):
    return subprocess.run(cmd, check=True, capture_output=True, text=True, **kw)


def duration(path):
    out = subprocess.run(['ffmpeg', '-i', path], capture_output=True, text=True).stderr
    m = re.search(r'Duration: (\d+):(\d+):([\d.]+)', out)
    h, mnt, s = m.groups()
    return int(h) * 3600 + int(mnt) * 60 + float(s)


def main():
    clips = sorted(f for f in os.listdir(SRC) if f.endswith(('.mp3', '.wav')))
    if not clips:
        sys.exit(f'{SRC}/ 에 음성 파일이 없습니다.')

    # 1) 속도 보정본을 만들고 길이를 잰다
    proc = os.path.join(SRC, 'proc')
    os.makedirs(proc, exist_ok=True)
    durs = []
    for c in clips:
        dst = os.path.join(proc, os.path.splitext(c)[0] + '.wav')
        run(['ffmpeg', '-y', '-loglevel', 'error', '-i', os.path.join(SRC, c),
             '-filter:a', f'atempo={TEMPO}', '-ar', '48000', '-ac', '2', dst])
        durs.append(duration(dst))
    print('내레이션 길이:', ' '.join(f'{d:.2f}' for d in durs), f'(합 {sum(durs):.1f}s)')

    # 2) 장면 길이를 음성 길이에 맞춘다
    dur_beats = [max(MIN_BEAT, round(OFFSET + d + PAD, 2)) for d in durs]
    scene = os.path.join(HERE, 'scene.html')
    html = open(scene, encoding='utf-8').read()
    html = re.sub(r'const DUR  = \[[^\]]*\];',
                  'const DUR  = [' + ','.join(str(d) for d in dur_beats) + '];', html)
    open(scene, 'w', encoding='utf-8').write(html)
    print('장면 길이:', dur_beats)

    lead = float(re.search(r'const LEAD = ([\d.]+);', html).group(1))
    starts, acc = [], lead
    for d in dur_beats:
        starts.append(acc)
        acc += d
    total = acc + 0.6

    # 3) 영상 다시 렌더
    out_dir = os.path.join(HERE, 'out')
    run(['node', os.path.join(HERE, 'shoot.js'), 'record', out_dir], cwd=HERE)
    silent = os.path.join(out_dir, 'format-principle.mp4')

    # 4) 같은 타임라인 위에 음성을 배치
    args = ['ffmpeg', '-y', '-loglevel', 'error', '-i', silent]
    for c in clips:
        args += ['-i', os.path.join(proc, os.path.splitext(c)[0] + '.wav')]
    chains = [f'[{i+1}:a]adelay={int((starts[i]+OFFSET)*1000)}:all=1[a{i}]'
              for i in range(len(clips))]
    mix = ''.join(f'[a{i}]' for i in range(len(clips)))
    chains.append(f'{mix}amix=inputs={len(clips)}:normalize=0:dropout_transition=0[m]')
    chains.append(f'[m]apad,atrim=0:{total:.2f},loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000[out]')

    final = os.path.join(out_dir, 'format-principle-narrated.mp4')
    args += ['-filter_complex', ';'.join(chains), '-map', '0:v', '-map', '[out]',
             '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
             '-movflags', '+faststart', '-shortest', final]
    run(args)
    print('완성 ->', final, f'({total:.1f}s)')


if __name__ == '__main__':
    main()
