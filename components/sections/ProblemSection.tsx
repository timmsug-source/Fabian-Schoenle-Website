import SectionLabel from '@/components/ui/SectionLabel'

type ProblemPoint = {
  /** Das durchgestrichene „Falsch"-Wort */
  wrong: string
  /** Das Gold-„Fix"-Wort darunter */
  right: string
  body: string
}

type ProblemSectionProps = {
  label?: string
  headline: string
  headlineAccent?: string
  intro?: string
  points: ProblemPoint[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

export default function ProblemSection({ label, headline, headlineAccent, intro, points }: ProblemSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Gekacheltes FS-Logo als dezentes Hintergrundmuster */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/FS-Logo-60x60-transparenter-Hintergrund.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '46px 46px',
          opacity: 0.045,
          maskImage: 'linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

        {/* Kopf — zentriert */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {label && (
            <div className="mb-4">
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

        {/* Panel */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0D1829 0%, #0A1220 100%)',
            border: '1px solid rgba(224,113,90,0.5)',
            boxShadow: '0 0 26px rgba(224,113,90,0.32), 0 0 64px rgba(224,113,90,0.18), inset 0 0 32px rgba(224,113,90,0.06)',
          }}
        >
          <div className="grid md:grid-cols-3">
            {points.map((point, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l' : ''}`}
                style={i > 0 ? { borderColor: 'rgba(201,168,76,0.14)' } : undefined}
              >
                {/* Label + Fehler-Punkt */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: '#6B7684' }}>
                    Fehler 0{i + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#E0715A' }} />
                </div>

                {/* Falsch → Richtig */}
                <div className="mb-5 flex flex-col gap-1.5">
                  <span
                    className="font-barlow font-bold text-2xl md:text-3xl leading-none w-fit"
                    style={{
                      color: '#7A8592',
                      textDecorationLine: 'line-through',
                      textDecorationColor: 'rgba(224,113,90,0.9)',
                      textDecorationThickness: '2px',
                    }}
                  >
                    {point.wrong}
                  </span>
                  <span className="font-barlow font-bold text-2xl md:text-3xl leading-tight w-fit" style={goldText}>
                    {point.right}
                  </span>
                </div>

                <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#98A4B1' }}>
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          {/* Erklär-Leiste */}
          <div
            className="flex items-center gap-3 px-6 md:px-8 py-4"
            style={{ borderTop: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.045)' }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#E8D49A' }} />
            <p className="font-inter text-sm" style={{ color: '#AEB5BE' }}>
              Durchgestrichen steht, was nicht funktioniert. Darunter{' '}
              <span style={{ color: '#E8D49A', fontWeight: 600 }}>steht dein Plan.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
