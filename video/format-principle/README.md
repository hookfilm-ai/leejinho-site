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
- `format-principle.mp4` — 최종본. 30fps · 42.2초 · H.264.

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
