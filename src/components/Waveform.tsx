const N = 72
const brass = [226, 178, 92], teal = [109, 184, 203]
const bars = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1)
  const wave = Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.13))
  const h = t < 0.5 ? wave : Math.round(wave * 5) / 5 // smooth on the music side, stepped on the code side
  const c = brass.map((b, k) => Math.round(b + (teal[k] - b) * t))
  return { h: 18 + 82 * h, color: `rgb(${c.join(',')})`, d: `${1.6 + (i % 7) * 0.22}s`, dl: `${-(i % 11) * 0.17}s` }
})

export default function Waveform() {
  return (
    <div aria-hidden="true" className="flex h-36 items-center gap-[3px] md:h-44 md:gap-1">
      {bars.map((b, i) => (
        <span key={i} className="bar block flex-1 rounded-full" style={{ height: `${b.h}%`, background: b.color, ['--d' as string]: b.d, ['--dl' as string]: b.dl }} />
      ))}
    </div>
  )
}
