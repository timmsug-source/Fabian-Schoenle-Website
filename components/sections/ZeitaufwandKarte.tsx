const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/** Punkt auf dem Kreis um (240|240); 0 Grad = 12 Uhr, im Uhrzeigersinn */
function punkt(radius: number, grad: number) {
  const rad = ((grad - 90) * Math.PI) / 180
  return { x: 240 + radius * Math.cos(rad), y: 240 + radius * Math.sin(rad) }
}

/**
 * Ziffernblatt einer Stunde mit 60 Minutenstrichen. Der goldene Bogen ist
 * maßstabsgetreu: 5 von 60 Minuten, also 30 Grad ab 12 Uhr — der Aufwand
 * soll auf einen Blick klein wirken, weil er es ist.
 */
function Ziffernblatt() {
  const RING = 196
  const bogenStart = punkt(RING, 0)
  const bogenEnde = punkt(RING, 30)

  return (
    <svg viewBox="0 0 480 480" fill="none" className="w-full h-auto" aria-hidden="true">
      <defs>
        <radialGradient id="za-innen" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.035)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="za-bogen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E8D49A" />
        </linearGradient>
      </defs>

      {/* Minutenstriche außen */}
      {Array.from({ length: 60 }, (_, i) => {
        const innen = punkt(218, i * 6)
        const aussen = punkt(230, i * 6)
        return (
          <line
            key={i}
            x1={innen.x}
            y1={innen.y}
            x2={aussen.x}
            y2={aussen.y}
            stroke="rgba(174,181,190,0.32)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )
      })}

      <circle cx="240" cy="240" r={RING} fill="url(#za-innen)" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />

      <path
        d={`M ${bogenStart.x} ${bogenStart.y} A ${RING} ${RING} 0 0 1 ${bogenEnde.x} ${bogenEnde.y}`}
        stroke="url(#za-bogen)"
        strokeWidth="10"
        strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 8px rgba(232,212,154,0.55))' }}
      />
    </svg>
  )
}

/**
 * Zeitaufwand als Karte: links ein Ziffernblatt mit „< 5 Min pro Tag“, rechts
 * die Aussage dazu. Steht auf /personal-coaching-online direkt unter dem
 * App-Rahmen von „Deine Begleitung“ (CoachingAppSection, nachRahmen) und
 * beantwortet die Frage, die bei einer App mit Tracking als Nächstes kommt:
 * Wie viel Arbeit macht mir das?
 *
 * Kartenoptik (leistung-card, Raster) wie die Kennzahl-Karte, die vorher an
 * dieser Stelle stand.
 */
export default function ZeitaufwandKarte({
  label = 'Dein Aufwand',
  headline = 'Unter 5 Minuten am Tag,',
  headlineAccent = 'um auf Kurs zu bleiben.',
  text = 'Du kümmerst dich um deinen Alltag. Ich behalte im Blick, dass deine Ergebnisse kommen.',
}: {
  label?: string
  headline?: string
  headlineAccent?: string
  text?: string
}) {
  return (
    <div className="animate-fade-up leistung-card relative rounded-2xl overflow-hidden p-8 md:p-12">
      {/* Gleiches Raster wie im App-Rahmen darüber */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="za-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="za-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#za-grid)" />
        <rect width="100%" height="100%" fill="url(#za-diag)" />
      </svg>

      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8 lg:gap-16">

        <div className="relative mx-auto w-[260px] md:w-[320px]">
          {/* Lichtschein hinter dem Ziffernblatt */}
          <div
            className="absolute inset-[-15%] pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0) 65%)' }}
          />
          <Ziffernblatt />
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <span className="font-barlow font-bold text-[3.5rem] md:text-7xl leading-none" style={goldText}>
              &lt;&nbsp;5&nbsp;Min
            </span>
            <span className="font-inter text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mt-3 md:mt-4" style={{ color: '#8A94A0' }}>
              pro Tag
            </span>
          </div>
        </div>

        <div>
          <p className="font-inter text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5 md:mb-6" style={goldText}>
            {label}
          </p>
          <h3
            className="font-barlow font-bold text-4xl md:text-5xl xl:text-[3.25rem] leading-[1.1] mb-6 max-w-[580px]"
            style={{ color: '#E6E8EB' }}
          >
            {headline} <span style={goldText}>{headlineAccent}</span>
          </h3>
          <p className="font-inter text-base md:text-xl leading-relaxed max-w-2xl" style={{ color: '#C6CDD5' }}>
            {text}
          </p>
        </div>

      </div>
    </div>
  )
}
