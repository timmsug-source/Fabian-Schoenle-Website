import SectionLabel from '@/components/ui/SectionLabel'

type ComparisonRow = {
  criterion: string
  standard: string
  fsPerformance: string
}

type ComparisonTableProps = {
  label?: string
  headline: string
  /** Zweiter Teil der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  /** Kopf der linken Vergleichsspalte */
  spalteStandard?: string
  /** Kopf der hervorgehobenen Spalte */
  spalteFs?: string
  rows: ComparisonRow[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

function Kreuz() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M7 7l10 10M17 7L7 17" stroke="#6B7684" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Haken({ id }: { id: string }) {
  return (
    /* Gleiche Form wie die Haken im Hero der Startseite */
    <svg width="22" height="22" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill={`url(#${id})`} />
    </svg>
  )
}

/**
 * Gegenüberstellung zweier Ansätze, Zeile für Zeile.
 *
 * Auf dem Handy stehen die beiden Werte untereinander: In zwei Spalten bleiben
 * bei 375 px keine 160 px pro Wert, und die Sätze brechen nach jedem Wort um.
 *
 * Auf breiten Bildschirmen ein Raster aus Kriterium, Standard und eigenem
 * Ansatz. Die rechte Spalte ist als durchgehende Bahn hervorgehoben — erste
 * Zelle oben gerundet, letzte unten, dazwischen nur seitliche Ränder. So liest
 * sich die eigene Spalte als ein Block statt als lose Kästen.
 *
 * Auf dem Handy steht das Kriterium als Zeile über beiden Werten. Die Bahn
 * würde dort von den Kriterienzeilen zerschnitten, deshalb ist jede rechte
 * Zelle dort ein eigener gerundeter Kasten.
 */
export default function ComparisonTable({
  label,
  headline,
  headlineAccent,
  intro,
  spalteStandard = 'Klassischer Ansatz',
  spalteFs = 'FS Performance Lab',
  rows,
}: ComparisonTableProps) {
  const letzte = rows.length - 1

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
        {label && (
          <div className="mb-4 flex justify-center">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          {headline}
          {headlineAccent && (
            <>
              {' '}
              <span style={goldText}>{headlineAccent}</span>
            </>
          )}
        </h2>
        {intro && (
          <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
            {intro}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[minmax(150px,210px)_1fr_1fr] gap-x-3 md:gap-x-0 gap-y-2 sm:gap-y-0 animate-fade-up" role="table">
        {/* Kopfzeile */}
        <div className="hidden md:block" role="columnheader" />
        <div role="columnheader" className="px-3 md:px-7 pb-4 flex items-end">
          <p className="font-barlow font-bold text-lg md:text-2xl leading-tight" style={{ color: '#7B8792' }}>
            {spalteStandard}
          </p>
        </div>
        <div
          role="columnheader"
          className="px-3 md:px-7 pt-4 md:pt-5 pb-4 rounded-2xl md:rounded-b-none flex items-end border border-[rgba(201,168,76,0.5)] md:border-b-0"
          style={{
            background: 'linear-gradient(180deg, rgba(201,168,76,0.12) 0%, rgba(13,24,41,0.85) 100%)',
            boxShadow: '0 -8px 30px rgba(201,168,76,0.12)',
          }}
        >
          <p className="font-barlow font-bold text-lg md:text-2xl leading-tight" style={goldText}>
            {spalteFs}
          </p>
        </div>

        {rows.map((row, i) => (
          <div key={row.criterion} role="row" className="contents">
            <div
              role="rowheader"
              className="col-span-1 sm:col-span-2 md:col-span-1 pt-6 pb-2 md:py-5 md:pr-6 flex md:items-center"
              style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(201,168,76,0.12)' }}
            >
              <p className="font-inter text-xs md:text-sm font-semibold uppercase tracking-widest" style={{ color: '#8A929C' }}>
                {row.criterion}
              </p>
            </div>
            <div
              role="cell"
              className="px-3 md:px-7 py-3 md:py-5 flex items-start gap-2.5 md:border-t"
              style={{ borderColor: i === 0 ? 'transparent' : 'rgba(201,168,76,0.12)' }}
            >
              <Kreuz />
              <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#8A929C' }}>
                {row.standard}
              </p>
            </div>
            <div
              role="cell"
              className={`px-3 md:px-7 py-3 md:py-5 flex items-start gap-2.5 rounded-xl md:rounded-none border border-[rgba(201,168,76,0.5)] md:border-t-0 ${
                i === letzte ? 'md:rounded-b-2xl' : 'md:border-b-[rgba(201,168,76,0.12)]'
              }`}
              style={{
                background: 'rgba(13,24,41,0.85)',
                boxShadow: i === letzte ? '0 12px 30px rgba(201,168,76,0.12)' : undefined,
              }}
            >
              <Haken id={`vergleich-haken-${i}`} />
              <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                {row.fsPerformance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
