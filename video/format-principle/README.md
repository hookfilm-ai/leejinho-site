# 포맷의 원리 — 세로 영상 (1080×1920)

『포맷의 기초』의 핵심 원리를 42초 세로 영상으로 정리한 것입니다.
가로로 이어지는 하나의 캔버스를 카메라가 훑고 지나가는 구성이라, 지나온 장면이 사라지지 않고
파란 실 한 줄로 계속 이어집니다.

## 구성

| # | 챕터 | 핵심 문장 |
|---|------|-----------|
| 1 | 출발점 | 열심히 만드는데, 왜 기억엔 안 남을까요. |
| 2 | 정의 | 포맷은 매번 똑같이 지키는 뼈대입니다. |
| 3 | 오해 | 반찬은 매일 달라도, '엄마 밥'은 늘 엄마 밥이죠. |
| 4 | 원리 | 사람은 예상이 되는 쪽에 마음을 놓습니다. |
| 5 | 알고리즘 | 알고리즘도 또렷한 계정부터 알아봅니다. |
| 6 | 시그니처 | 매번 반복되는 한 장면이 사람을 각인시킵니다. |
| 7 | 첫걸음 | 나는 어떤 걸 매일 해도 안 질릴까? |
| 8 | 정리 | 오늘 손에 쥘 건 딱 세 가지입니다. |
| 9 | 아웃트로 | 포맷은 타고나는 게 아니라, 배워서 만드는 것이에요. |

## 파일

- `scene.html` — 장면 데이터 · 레이아웃 · 타임라인. 문구를 고치려면 `BEATS` 배열만 손보면 됩니다.
- `art.js` — 일러스트 세트(인라인 SVG). 플랫 블루 스티커 스타일.
- `shoot.js` — Chromium으로 프레임을 한 장씩 찍어 ffmpeg으로 인코딩.
- `narration.json` — 장면별 내레이션 대본과 목소리 설정.
- `mix.py` — 내레이션 길이에 맞춰 장면 길이를 다시 잡고 음성을 얹습니다.
- `format-principle.mp4` — 무음본. 30fps · 42.2초 · H.264.
- `format-principle-narrated.mp4` — 내레이션본. 63.3초.

## 내레이션

`narration.json`의 아홉 줄이 아홉 장면에 하나씩 대응합니다. 목소리는 Holden
(`3c9d6053-6334-592c-8997-4e325286af3f`)으로 지정해 두었습니다.

```bash
# vo/01.mp3 ... vo/09.mp3 를 준비한 뒤
python3 mix.py vo
```

`mix.py`는 클립 길이를 재서 `scene.html`의 `DUR` 배열을 다시 쓰고, 영상을 렌더한 다음
같은 타임라인 위에 음성을 배치합니다. 그래서 어떤 TTS 엔진을 쓰든, 낭독 속도가 달라져도
그림과 말이 어긋나지 않습니다. 다른 목소리로 바꾸려면 `vo/`의 파일만 갈아 끼우고 다시
돌리면 됩니다.

현재 커밋된 `format-principle-narrated.mp4`는 지정한 Holden 목소리가 아니라 대체 엔진으로
만든 임시본입니다(생성 시점에 Higgsfield 크레딧이 없었습니다). 톤·속도·자막 싱크를 확인하는
용도로만 쓰고, 배포본은 위 절차로 다시 뽑는 것을 전제로 합니다.

## 다시 렌더링하기

Pretendard 폰트가 시스템에 설치되어 있어야 합니다.

```bash
npm pack pretendard && tar xzf pretendard-*.tgz
sudo cp package/dist/public/static/Pretendard-{Regular,Medium,SemiBold,Bold,ExtraBold,Black}.otf \
       /usr/share/fonts/pretendard/ && fc-cache -f

node shoot.js record ./out                       # 전체 렌더 → out/format-principle.mp4
node shoot.js preview ./prev 2.8 7.4 21.2        # 특정 시점만 스틸로 확인
```

프레임은 디스크를 거치지 않고 ffmpeg로 바로 흘려보내며, 타임라인이 `__render(t)` 한 함수로만
결정되기 때문에 몇 번을 돌려도 결과가 같습니다.
