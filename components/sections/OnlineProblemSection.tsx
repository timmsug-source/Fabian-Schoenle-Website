import SectionLabel from '@/components/ui/SectionLabel'
import VideoPlayerBox from '@/components/ui/VideoPlayerBox'

type Problem = {
  titel: string
  text: string
}

type OnlineProblemSectionProps = {
  label?: string
  headline: string
  /** Zweite Zeile der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  probleme: Problem[]
  /** Welches Bild rechts steht. 'regler' = Standardplan-Regler, 'menschen' = drei Menschen, ein Plan. */
  grafik?: 'regler' | 'menschen'
  /** Zitat unter der Grafik — ordnet das Bild ein, bevor die Lösung folgt. */
  zitat?: string
  zitatAutor?: string
  /**
   * Optionales Video unter den Problemen — gleiche Anordnung wie in der
   * Problem-Sektion der Karlsruher Seite: Text links, Video rechts. Es steht
   * bewusst hier und nicht bei der Lösung: An dieser Stelle fragt man sich,
   * woran es liegt, und genau das beantwortet das Video.
   */
  videoId?: string
  /** Lokales Vorschaubild — kein Abruf bei Google beim Seitenaufruf */
  videoPosterSrc?: string
  videoTitle?: string
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

/**
 * Sechs Regler, die alle auf derselben Höhe einrasten — das Bild für einen
 * Plan, der für jeden gleich aussieht. Die Griffe starten versetzt und fahren
 * beim Sichtbarwerden auf eine Linie; ohne Bewegungswunsch stehen sie sofort
 * dort (siehe `.regler-griff` in globals.css).
 *
 * Bewusst dieselben sechs Spuren wie die sechs Leistungen darunter: Dort wird
 * jeder Regler einzeln eingestellt, hier steht alles auf Werkseinstellung.
 */
function ReglerPanel() {
  const spuren = [62.5, 117.5, 172.5, 227.5, 282.5, 337.5]
  // Startversatz je Griff, damit sie sichtbar auf eine Linie zusammenlaufen
  const versatz = [-46, 34, -28, 44, -38, 26]

  return (
    <svg
      viewBox="0 0 400 340"
      fill="none"
      className="w-full h-auto"
      role="img"
      aria-label="Sechs Regler eines Standardplans, die alle auf derselben Stellung stehen"
    >
      <rect
        x="1"
        y="1"
        width="398"
        height="338"
        rx="18"
        fill="rgba(13,24,41,0.55)"
        stroke="rgba(201,168,76,0.28)"
        strokeWidth="1"
      />

      <text
        x="200"
        y="46"
        textAnchor="middle"
        fill="#7B8792"
        fontSize="13"
        letterSpacing="3"
        className="font-inter"
      >
        STANDARDPLAN
      </text>

      {/* Die Linie, auf der alles einrastet */}
      <line
        x1="40"
        y1="180"
        x2="360"
        y2="180"
        stroke="rgba(201,168,76,0.3)"
        strokeWidth="1"
        strokeDasharray="4 5"
      />

      {spuren.map((x, i) => (
        <g key={x}>
          <line x1={x} y1="86" x2={x} y2="274" stroke="rgba(174,181,190,0.28)" strokeWidth="2" strokeLinecap="round" />
          <rect
            className="regler-griff"
            style={{ ['--regler-von' as string]: `${versatz[i]}px` }}
            x={x - 13}
            y="171"
            width="26"
            height="18"
            rx="4.5"
            fill="#182A3A"
            stroke="#C9A84C"
            strokeWidth="1.4"
          />
        </g>
      ))}

      <text
        x="200"
        y="308"
        textAnchor="middle"
        fontSize="13"
        letterSpacing="1.5"
        className="font-inter"
        fill="#C9A84C"
      >
        für jeden dieselbe Einstellung
      </text>
    </svg>
  )
}

/**
 * Drei verschiedene Menschen, aus denen Pfeile auf ein einziges Dokument
 * zeigen: derselbe Plan, egal wer davorsteht. Die Figuren sind bewusst
 * unterschiedlich groß, damit der Gegensatz zum einen Plan sofort auffaellt.
 */
function MenschenPanel() {
  const figuren = [
    { x: 80, kopf: 12, schulter: 17, y: 74 },
    { x: 200, kopf: 15, schulter: 22, y: 70 },
    { x: 320, kopf: 11, schulter: 15, y: 77 },
  ]

  return (
    <svg
      viewBox="0 0 400 340"
      fill="none"
      className="w-full h-auto"
      role="img"
      aria-label="Drei verschiedene Menschen erhalten denselben Plan"
    >
      <rect x="1" y="1" width="398" height="338" rx="18" fill="rgba(13,24,41,0.55)" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />

      {figuren.map((f) => (
        <g key={f.x} stroke="#AEB5BE" strokeWidth="1.6">
          <circle cx={f.x} cy={f.y} r={f.kopf} />
          <path
            d={`M${f.x - f.schulter} ${f.y + f.kopf + 22}c0-${f.schulter * 0.75} ${f.schulter * 0.45}-${f.schulter} ${f.schulter}-${f.schulter}s${f.schulter} ${f.schulter * 0.25} ${f.schulter} ${f.schulter}`}
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Pfeile, die alle auf dasselbe Dokument zeigen */}
      {/*
        Schaft und Spitze je Pfeil. Die Spitzen sind aus der Richtung des
        jeweiligen Schafts gerechnet (12 Einheiten lang, 25 Grad geoeffnet) —
        von Hand gesetzte Werte standen hier vorher schief zum Schaft.
      */}
      <g stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M92 128L154 184" />
        <path d="M149.3 172.9L154 184L142.5 180.5" />
        <path d="M200 130L200 182" />
        <path d="M205.1 171.1L200 182L194.9 171.1" />
        <path d="M308 128L246 184" />
        <path d="M257.5 180.5L246 184L250.7 172.9" />
      </g>

      {/* Der eine Plan */}
      <rect x="157" y="192" width="86" height="104" rx="7" stroke="#C9A84C" strokeWidth="1.5" fill="rgba(201,168,76,0.05)" />
      <g stroke="rgba(174,181,190,0.55)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M172 214h56M172 230h56M172 246h56M172 262h34" />
      </g>

      <text x="200" y="322" textAnchor="middle" fontSize="13" letterSpacing="1.5" className="font-inter" fill="#C9A84C">
        ein Plan für alle
      </text>
    </svg>
  )
}

export default function OnlineProblemSection({
  label,
  headline,
  headlineAccent,
  intro,
  probleme,
  grafik = 'regler',
  zitat,
  zitatAutor = 'Fabian Schönle',
  videoId,
  videoPosterSrc,
  videoTitle,
  videoLabel,
  videoHeadline,
  videoBody,
  videoPoints,
}: OnlineProblemSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="animate-fade-up flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* Links: Überschrift und die drei Probleme */}
          <div className="flex-1 min-w-0">
            {label && (
              <div className="mb-4">
                <SectionLabel>{label}</SectionLabel>
              </div>
            )}

            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
              {headline}
              {headlineAccent && (
                <>
                  <br />
                  <span style={goldText}>{headlineAccent}</span>
                </>
              )}
            </h2>

            {intro && (
              <p className="font-inter text-base md:text-lg leading-relaxed mb-10" style={{ color: '#A6B0BA' }}>
                {intro}
              </p>
            )}

            <ul className="flex flex-col gap-7">
              {probleme.map((p) => (
                <li key={p.titel} className="flex gap-4">
                  <span className="flex-shrink-0 mt-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" stroke="rgba(201,168,76,0.45)" strokeWidth="1.3" />
                      <path d="M7 7l6 6M13 7l-6 6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-barlow font-semibold text-xl md:text-2xl mb-1.5" style={{ color: '#E6E8EB' }}>
                      {p.titel}
                    </h3>
                    <p className="font-inter leading-relaxed" style={{ color: '#A6B0BA' }}>
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechts: Reglerpanel */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            {grafik === 'menschen' ? <MenschenPanel /> : <ReglerPanel />}

            {zitat && (
              <figure className="mt-7 pl-5" style={{ borderLeft: '2px solid rgba(201,168,76,0.5)' }}>
                <blockquote
                  className="font-inter text-base md:text-lg leading-relaxed"
                  style={{ color: '#C6CDD5' }}
                >
                  {zitat}
                </blockquote>
                {zitatAutor && (
                  <figcaption
                    className="font-inter text-xs font-semibold uppercase tracking-widest mt-3"
                    style={goldText}
                  >
                    {zitatAutor}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

        </div>

        {/*
          Video unter den Problemen — Text links, Video rechts.

          Der Abstand nach oben ist so gewaehlt, dass er dem Abstand nach unten
          entspricht: 96 Pixel Innenabstand dieser Sektion plus 96 der naechsten
          ergeben 192, auf dem Handy jeweils 64, also 128.
        */}
        {videoId && videoPosterSrc && (
          <div
            className="animate-fade-up relative rounded-3xl p-6 md:p-12 mt-32 md:mt-48"
            style={{
              background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(232,212,154,0.05), 0 0 24px rgba(201,168,76,0.12)',
            }}
          >
            {/* Rastermuster wie im Rahmen der App-Sektion weiter unten: feines
                Gitter plus Diagonalen, beides in Weiss. */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern id="op-video-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </pattern>
                  <pattern id="op-video-diag" width="60" height="60" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#op-video-grid)" />
                <rect width="100%" height="100%" fill="url(#op-video-diag)" />
              </svg>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
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
                  {videoPoints.map((punkt) => (
                    <li key={punkt} className="flex gap-3">
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
                        {punkt}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <VideoPlayerBox videoId={videoId} posterSrc={videoPosterSrc} title={videoTitle} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
