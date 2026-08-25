import SectionLabel from '@/components/ui/SectionLabel'
import VideoPlayerBox from '@/components/ui/VideoPlayerBox'

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
  /** Optionales Video im selben Panel — YouTube-ID */
  videoId?: string
  /** Lokales Vorschaubild zum Video */
  videoPosterSrc?: string
  videoTitle?: string
  /** Text links neben dem Video */
  videoLabel?: string
  videoHeadline?: string
  videoBody?: string
  videoPoints?: string[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

export default function ProblemSection({
  label,
  headline,
  headlineAccent,
  intro,
  points,
  videoId,
  videoPosterSrc,
  videoTitle,
  videoLabel,
  videoHeadline,
  videoBody,
  videoPoints,
}: ProblemSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* SVG Rastermuster — wie in der Fallstudien-Sektion */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="ps-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="ps-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <linearGradient id="ps-bg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="14%" stopColor="white" stopOpacity="1" />
            <stop offset="86%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="ps-bg-fade-mask">
            <rect width="100%" height="100%" fill="url(#ps-bg-fade)" />
          </mask>
        </defs>
        <g mask="url(#ps-bg-fade-mask)">
          <rect width="100%" height="100%" fill="url(#ps-bg-grid)" />
          <rect width="100%" height="100%" fill="url(#ps-bg-diag)" />
        </g>
      </svg>

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

          {/* Video im selben Panel — Text links, Video rechts */}
          {videoId && videoPosterSrc && (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center p-6 md:p-8"
              style={{ borderTop: '1px solid rgba(201,168,76,0.14)' }}
            >
              <div>
                {videoLabel && (
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={goldText}>
                    {videoLabel}
                  </p>
                )}
                {videoHeadline && (
                  <h3 className="font-barlow font-bold text-xl md:text-2xl leading-tight mb-3" style={{ color: '#E6E8EB' }}>
                    {videoHeadline}
                  </h3>
                )}
                {videoBody && (
                  <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#98A4B1' }}>
                    {videoBody}
                  </p>
                )}

                {videoPoints && videoPoints.length > 0 && (
                  <ul className="flex flex-col gap-2.5 mt-5">
                    {videoPoints.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        {/* Pfeil statt Haken: die Punkte sind Themen des Videos, keine Vorteile */}
                        <span className="flex-shrink-0 flex items-center h-6">
                          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                            <path
                              d="M1 6h13M10.5 1.5L16 6l-5.5 4.5"
                              stroke="#C9A84C"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#98A4B1' }}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <VideoPlayerBox videoId={videoId} posterSrc={videoPosterSrc} title={videoTitle} />
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
