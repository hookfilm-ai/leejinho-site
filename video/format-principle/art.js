/* 일러스트 세트 — 플랫 블루 스티커 스타일. 모든 viewBox 0 0 440 380 */
const NAVY = '#12235B', BLUE = '#2B57E6', BLUE2 = '#5A85F7', LAV = '#B9C7F2', LAV2 = '#DCE3FA', W = '#FFFFFF';

const ART = {};

/* 01 — 밤늦게 혼자 만드는 사람 */
ART.night = `
<g>
  <circle cx="360" cy="86" r="46" fill="${LAV2}" stroke="${NAVY}" stroke-width="9"/>
  <path d="M360 58 V88 L382 100" stroke="${NAVY}" stroke-width="9" stroke-linecap="round" fill="none"/>
  <rect x="52" y="286" width="342" height="16" rx="8" fill="${NAVY}"/>
  <g>
    <rect x="62" y="168" width="168" height="112" rx="12" fill="${NAVY}"/>
    <rect x="76" y="182" width="140" height="84" rx="6" fill="${LAV2}"/>
    <rect x="90" y="198" width="86" height="10" rx="5" fill="${BLUE2}"/>
    <rect x="90" y="220" width="112" height="10" rx="5" fill="${LAV}"/>
    <rect x="90" y="242" width="64" height="10" rx="5" fill="${LAV}"/>
  </g>
  <g>
    <path d="M232 286 q6-74 62-74 t62 74 z" fill="${BLUE}"/>
    <circle cx="294" cy="176" r="40" fill="${W}" stroke="${NAVY}" stroke-width="9"/>
    <path d="M256 168 q10-46 44-44 t42 44 q-18-16-44-14 t-42 14z" fill="${NAVY}"/>
    <circle cx="281" cy="182" r="5" fill="${NAVY}"/><circle cx="309" cy="182" r="5" fill="${NAVY}"/>
    <path d="M282 202 q12 6 24 0" stroke="${NAVY}" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M236 286 q-16-30 4-46" stroke="${NAVY}" stroke-width="9" stroke-linecap="round" fill="none"/>
  </g>
  <g>
    <rect x="300" y="252" width="92" height="14" rx="4" fill="${W}" stroke="${NAVY}" stroke-width="7"/>
    <rect x="306" y="238" width="92" height="14" rx="4" fill="${W}" stroke="${NAVY}" stroke-width="7"/>
    <rect x="298" y="224" width="92" height="14" rx="4" fill="${W}" stroke="${NAVY}" stroke-width="7"/>
  </g>
  <rect x="56" y="252" width="30" height="30" rx="6" fill="${BLUE}"/>
  <path d="M86 260 q14 6 0 16" stroke="${NAVY}" stroke-width="7" fill="none"/>
</g>`;

/* 02 — 매번 지키는 뼈대 (프로그램 틀) */
ART.frame = `
<g>
  <rect x="128" y="34" width="212" height="312" rx="30" fill="${W}" stroke="${NAVY}" stroke-width="10"/>
  <rect x="150" y="60" width="168" height="58" rx="12" fill="${LAV2}"/>
  <rect x="168" y="80" width="60" height="10" rx="5" fill="${BLUE2}"/>
  <rect x="168" y="98" width="100" height="8" rx="4" fill="${LAV}"/>
  <rect x="150" y="130" width="168" height="122" rx="12" fill="${BLUE}"/>
  <circle cx="234" cy="180" r="26" fill="${W}"/>
  <path d="M226 168 l22 12 -22 12z" fill="${BLUE}"/>
  <rect x="176" y="220" width="116" height="10" rx="5" fill="${W}" opacity=".85"/>
  <rect x="150" y="264" width="168" height="54" rx="12" fill="${LAV2}"/>
  <rect x="168" y="284" width="88" height="10" rx="5" fill="${BLUE2}"/>
  <g>
    <path d="M352 150 c40 6 40 76 0 82" stroke="${BLUE}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M362 218 l-20 14 20 16z" fill="${BLUE}"/>
  </g>
  <g>
    <rect x="30" y="132" width="72" height="52" rx="14" fill="${BLUE2}" stroke="${NAVY}" stroke-width="9"/>
    <rect x="44" y="204" width="72" height="52" rx="14" fill="${LAV}" stroke="${NAVY}" stroke-width="9"/>
    <path d="M78 274 c34 8 34 44 0 50" stroke="${BLUE}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M86 314 l-20 14 20 16z" fill="${BLUE}"/>
  </g>
</g>`;

/* 03 — 엄마 밥상 (반찬은 매일 달라도) */
ART.meal = `
<g>
  <rect x="34" y="98" width="372" height="204" rx="34" fill="${W}" stroke="${NAVY}" stroke-width="10"/>
  <circle cx="132" cy="204" r="58" fill="${W}" stroke="${NAVY}" stroke-width="9"/>
  <path d="M84 210 q48-58 96 0z" fill="${LAV2}" stroke="${NAVY}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M78 210 h108" stroke="${NAVY}" stroke-width="9" stroke-linecap="round"/>
  <circle cx="244" cy="172" r="38" fill="${BLUE}" stroke="${NAVY}" stroke-width="9"/>
  <path d="M224 168 q20-16 40 0" stroke="${W}" stroke-width="8" fill="none" stroke-linecap="round"/>
  <circle cx="244" cy="260" r="30" fill="${LAV}" stroke="${NAVY}" stroke-width="9"/>
  <circle cx="328" cy="172" r="30" fill="${LAV2}" stroke="${NAVY}" stroke-width="9"/>
  <circle cx="328" cy="260" r="30" fill="${BLUE2}" stroke="${NAVY}" stroke-width="9"/>
  <g stroke="${NAVY}" stroke-width="9" stroke-linecap="round">
    <path d="M84 288 l72-26"/><path d="M92 306 l72-26"/>
  </g>
  <g stroke="${BLUE}" stroke-width="8" stroke-linecap="round" fill="none" opacity=".85">
    <path d="M186 78 q-12 10 0 20 q12 10 0 20"/>
    <path d="M228 62 q-12 10 0 20 q12 10 0 20"/>
    <path d="M270 78 q-12 10 0 20 q12 10 0 20"/>
  </g>
</g>`;

/* 04 — 반복 → 예상 → 신뢰 */
ART.trust = `
<g>
  <path d="M220 88 c-14-26-58-24-58 10 c0 26 34 44 58 62 c24-18 58-36 58-62 c0-34-44-36-58-10z" fill="${BLUE}"/>
  <g>
    <rect x="42" y="196" width="104" height="132" rx="18" fill="${W}" stroke="${NAVY}" stroke-width="9"/>
    <rect x="164" y="196" width="104" height="132" rx="18" fill="${W}" stroke="${NAVY}" stroke-width="9"/>
    <rect x="286" y="196" width="104" height="132" rx="18" fill="${W}" stroke="${NAVY}" stroke-width="9"/>
  </g>
  <g fill="${BLUE}">
    <circle cx="94" cy="238" r="17"/><circle cx="216" cy="238" r="17"/><circle cx="338" cy="238" r="17"/>
  </g>
  <g fill="${LAV}">
    <rect x="68" y="272" width="52" height="10" rx="5"/><rect x="190" y="272" width="52" height="10" rx="5"/><rect x="312" y="272" width="52" height="10" rx="5"/>
    <rect x="68" y="292" width="34" height="10" rx="5"/><rect x="190" y="292" width="34" height="10" rx="5"/><rect x="312" y="292" width="34" height="10" rx="5"/>
  </g>
</g>`;

/* 05 — 취향을 아는 배달부 (알고리즘) */
ART.delivery = `
<g>
  <g>
    <rect x="44" y="176" width="150" height="132" rx="16" fill="${LAV2}" stroke="${NAVY}" stroke-width="10"/>
    <rect x="104" y="176" width="30" height="132" fill="${BLUE}"/>
    <rect x="44" y="216" width="150" height="22" fill="${BLUE}" opacity=".35"/>
    <rect x="62" y="252" width="60" height="38" rx="6" fill="${W}" stroke="${NAVY}" stroke-width="7"/>
    <rect x="72" y="264" width="30" height="6" rx="3" fill="${LAV}"/>
    <rect x="72" y="276" width="20" height="6" rx="3" fill="${LAV}"/>
  </g>
  <path d="M208 272 C238 202 268 194 296 214" stroke="${BLUE}" stroke-width="11" stroke-linecap="round" fill="none"/>
  <path d="M276 200 l26 16 -22 20z" fill="${BLUE}"/>
  <g>
    <path d="M314 318 q6-58 54-58 t54 58 z" fill="${BLUE}"/>
    <circle cx="368" cy="238" r="34" fill="${W}" stroke="${NAVY}" stroke-width="9"/>
    <circle cx="357" cy="236" r="5" fill="${NAVY}"/><circle cx="381" cy="236" r="5" fill="${NAVY}"/>
    <path d="M356 254 q12 12 24 0" stroke="${NAVY}" stroke-width="7" stroke-linecap="round" fill="none"/>
  </g>
</g>`;

/* 06 — 시그니처 (립밤 · 반복되는 한 장면) */
ART.signature = `
<g>
  <g fill="none" stroke="${LAV}" stroke-width="9">
    <rect x="96" y="132" width="70" height="190" rx="20"/>
    <rect x="152" y="132" width="70" height="190" rx="20"/>
  </g>
  <g>
    <rect x="212" y="112" width="86" height="212" rx="24" fill="${BLUE}" stroke="${NAVY}" stroke-width="10"/>
    <path d="M212 196 h86" stroke="${NAVY}" stroke-width="10"/>
    <rect x="222" y="60" width="66" height="60" rx="14" fill="${LAV2}" stroke="${NAVY}" stroke-width="10"/>
    <path d="M238 60 q17-24 34 0" fill="${LAV}" stroke="${NAVY}" stroke-width="10" stroke-linejoin="round"/>
    <rect x="230" y="228" width="50" height="10" rx="5" fill="${W}" opacity=".8"/>
    <rect x="230" y="252" width="34" height="10" rx="5" fill="${W}" opacity=".55"/>
  </g>
  <g stroke="${BLUE}" stroke-width="9" stroke-linecap="round">
    <path d="M336 128 v30"/><path d="M322 150 h30"/>
    <path d="M356 216 v22"/><path d="M345 227 h22"/>
  </g>
</g>`;

/* 07 — 노트에 적는 질문 */
ART.note = `
<g>
  <rect x="70" y="72" width="216" height="264" rx="20" fill="${W}" stroke="${NAVY}" stroke-width="10"/>
  <rect x="70" y="72" width="34" height="264" rx="20" fill="${LAV2}"/>
  <g stroke="${NAVY}" stroke-width="8" stroke-linecap="round">
    <path d="M87 108 v-26"/><path d="M87 168 v-26"/><path d="M87 228 v-26"/><path d="M87 288 v-26"/>
  </g>
  <g fill="${LAV}">
    <rect x="128" y="200" width="126" height="12" rx="6"/>
    <rect x="128" y="232" width="96" height="12" rx="6"/>
    <rect x="128" y="264" width="118" height="12" rx="6"/>
  </g>
  <g>
    <circle cx="192" cy="140" r="42" fill="${BLUE}"/>
    <path d="M180 126 q4-18 22-14 q18 4 14 20 q-4 12-18 14 v10" stroke="${W}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <circle cx="198" cy="166" r="6" fill="${W}"/>
  </g>
  <g transform="rotate(28 344 210)">
    <rect x="326" y="96" width="36" height="180" rx="10" fill="${BLUE}" stroke="${NAVY}" stroke-width="9"/>
    <path d="M326 276 h36 l-18 40z" fill="${NAVY}"/>
    <rect x="326" y="140" width="36" height="16" fill="${NAVY}"/>
  </g>
</g>`;

/* 08 — 훜 (아웃트로) */
ART.hook = `
<g>
  <circle cx="220" cy="190" r="122" fill="${W}" stroke="${NAVY}" stroke-width="10"/>
  <path d="M220 110 v72 c0 32-26 54-56 54 -28 0-48-20-48-46 0-14 7-25 17-31"
        stroke="${BLUE}" stroke-width="22" stroke-linecap="round" fill="none"/>
  <path d="M133 159 l-24 -4" stroke="${BLUE}" stroke-width="15" stroke-linecap="round"/>
  <circle cx="220" cy="110" r="15" fill="${NAVY}"/>
</g>`;

if (typeof module !== 'undefined') module.exports = ART;
