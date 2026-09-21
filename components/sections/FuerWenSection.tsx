import SectionLabel from '@/components/ui/SectionLabel'

type FuerWenSectionProps = {
  label?: string
  headline: string
  /** Zweiter Teil der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  /** Überschrift der linken Spalte */
  fuerTitel?: string
  fuer: string[]
  /** Überschrift der rechten Spalte */
  nichtTitel?: string
  /** Optional — ohne Gegenliste steht nur die Passung */
  nicht?: string[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

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

function Kreuz() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1" aria-hidden="true">
      <path d="M7 7l10 10M17 7L7 17" stroke="#6B7684" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Passt das Coaching zu dir? Links die Punkte, bei denen es passt, rechts die,
 * bei denen es das nicht tut.
 *
 * Die rechte Spalte ist bewusst dabei und bewusst leise gestaltet: Wer sich dort
 * wiedererkennt, soll nicht buchen. Das spart beiden Seiten das Erstgespräch.
 */
export default function FuerWenSection({
  label,
  headline,
  headlineAccent,
  intro,
  fuerTitel = 'Für dich, wenn …',
  fuer,
  nichtTitel = 'Nicht das Richtige, wenn …',
  nicht,
}: FuerWenSectionProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 animate-fade-up">
        {/* Passung — hervorgehoben wie die eigene Spalte im Vergleich */}
        <div
          className="rounded-2xl p-7 md:p-9"
          style={{
            background: 'rgba(13,24,41,0.85)',
            border: '1px solid rgba(201,168,76,0.5)',
            boxShadow: '0 0 40px rgba(201,168,76,0.12), inset 0 1px 0 rgba(232,212,154,0.05)',
          }}
        >
          <p className="font-barlow font-bold text-xl md:text-2xl mb-6" style={goldText}>
            {fuerTitel}
          </p>
          <ul className="flex flex-col gap-4">
            {fuer.map((p, i) => (
              <li key={p} className="flex items-start gap-3">
                <Haken id={`fuerwen-haken-${i}`} />
                <span className="font-inter text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {nicht && nicht.length > 0 && (
          <div
            className="rounded-2xl p-7 md:p-9"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="font-barlow font-bold text-xl md:text-2xl mb-6" style={{ color: '#7B8792' }}>
              {nichtTitel}
            </p>
            <ul className="flex flex-col gap-4">
              {nicht.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Kreuz />
                  <span className="font-inter text-base leading-relaxed" style={{ color: '#8A929C' }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
