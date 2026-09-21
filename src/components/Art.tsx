import type { ArtKind } from '../data/types'

/* Small illustrations for the project cards. They are drawings of the kind of
   screen each project has, not screenshots. To use a real screenshot, replace
   <Art /> in ProjectCard.tsx with an <img>. */

const line = 'fill-[#4B4680]'
const paper = 'fill-[#ECE9FF] stroke-bg'

function Receipt() {
  return (
    <>
      <rect x="30" y="12" width="180" height="24" rx="12" className={paper} strokeWidth={2.5} />
      <circle cx="46" cy="24" r="5" className="fill-none stroke-bg" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M50 28.5l4 4" className="stroke-bg" strokeWidth={2.5} strokeLinecap="round" />
      <rect x="62" y="21" width="70" height="6" rx="3" className={line} />
      <g className="art-receipt">
        <path
          className={paper}
          strokeWidth={2.5}
          strokeLinejoin="round"
          d="M52 46 H188 V150 L180 158 L172 150 L164 158 L156 150 L148 158 L140 150 L132 158 L124 150 L116 158 L108 150 L100 158 L92 150 L84 158 L76 150 L68 158 L60 150 L52 158 Z"
        />
        <rect x="68" y="60" width="60" height="9" rx="4.5" className="fill-accent" />
        {[82, 98, 114].map((y, i) => (
          <g key={y}>
            <rect x="68" y={y} width={[72, 56, 80][i]} height="6" rx="3" className={line} />
            <rect x="150" y={y} width="22" height="6" rx="3" className={line} />
          </g>
        ))}
        <rect x="68" y="132" width="40" height="9" rx="4.5" className="fill-bg" />
        <rect x="140" y="132" width="32" height="9" rx="4.5" className="fill-accent" />
      </g>
    </>
  )
}

function Rings() {
  const rings = [
    { r: 58, dash: '255 364.4', cls: 'art-ring-a stroke-accent' },
    { r: 42, dash: '145 263.9', cls: 'art-ring-b stroke-ink' },
    { r: 26, dash: '131 163.4', cls: 'art-ring-c stroke-accent opacity-50' },
  ]
  return (
    <>
      {rings.map((g) => (
        <circle key={g.r} cx="88" cy="90" r={g.r} className="fill-none stroke-[#332F5C]" strokeWidth={11} />
      ))}
      <g transform="rotate(-90 88 90)">
        {rings.map((g) => (
          <circle
            key={g.r}
            cx="88"
            cy="90"
            r={g.r}
            className={`fill-none ${g.cls}`}
            strokeWidth={11}
            strokeLinecap="round"
            strokeDasharray={g.dash}
          />
        ))}
      </g>
      <circle cx="168" cy="56" r="6" className="fill-accent" />
      <rect x="181" y="53" width="38" height="6" rx="3" className={line} />
      <circle cx="168" cy="90" r="6" className="fill-ink" />
      <rect x="181" y="87" width="30" height="6" rx="3" className={line} />
      <circle cx="168" cy="124" r="6" className="fill-accent opacity-35" />
      <rect x="181" y="121" width="34" height="6" rx="3" className={line} />
    </>
  )
}

function Chart() {
  const bars = [
    { x: 30, y: 112, h: 38 },
    { x: 60, y: 90, h: 60 },
    { x: 90, y: 104, h: 46 },
    { x: 120, y: 68, h: 82 },
    { x: 150, y: 82, h: 68 },
    { x: 180, y: 48, h: 102 },
  ]
  const dots: Array<[number, number]> = [[41, 98], [71, 76], [101, 90], [131, 54], [161, 68], [191, 36]]
  return (
    <>
      <rect x="24" y="16" width="56" height="9" rx="4.5" className="fill-ink" />
      <rect x="24" y="30" width="34" height="6" rx="3" className={line} />
      {bars.map((b, i) => (
        <rect
          key={b.x}
          x={b.x}
          y={b.y}
          width="22"
          height={b.h}
          rx="4"
          className={`art-bar ${i === bars.length - 1 ? 'fill-accent' : line}`}
        />
      ))}
      <path
        d="M41 98 L71 76 L101 90 L131 54 L161 68 L191 36"
        pathLength={1}
        className="art-trend fill-none stroke-ink"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {dots.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4.5" className={paper} strokeWidth={2.5} />
      ))}
      <rect x="22" y="154" width="196" height="2.5" rx="1.25" className="fill-ink" />
    </>
  )
}

export default function Art({ kind }: { kind: ArtKind }) {
  return (
    <svg
      viewBox="0 0 240 180"
      aria-hidden="true"
      focusable="false"
      className="block h-[82%] w-auto transition-transform duration-500 ease-out group-hover:-rotate-[1.5deg] group-hover:scale-105 motion-reduce:transition-none"
    >
      {kind === 'receipt' && <Receipt />}
      {kind === 'rings' && <Rings />}
      {kind === 'chart' && <Chart />}
    </svg>
  )
}
