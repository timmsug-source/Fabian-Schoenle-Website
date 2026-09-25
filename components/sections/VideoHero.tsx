import SectionLabel from '@/components/ui/SectionLabel'
import VideoPlayerBox from '@/components/ui/VideoPlayerBox'
import KundenReihe from '@/components/ui/KundenReihe'
import { CALENDLY_URL } from '@/lib/constants'

type VideoHeroProps = {
  /** Kleine Zeile über der Überschrift, im Stil der übrigen Sektionen */
  label?: string
  headline: string
  /** Zweiter Teil der Überschrift, im Goldverlauf */
  headlineAccent?: string
  subheadline?: string
  /** Zeile neben den Sternen, z. B. „Ø 4,9 / 5 aus echten Rezensionen" */
  bewertung?: string
  /** YouTube-Video-ID */
  videoId: string
  /** Lokales Vorschaubild — kein Abruf bei Google beim Seitenaufruf */
  videoPosterSrc: string
  videoTitle?: string
  ctaLabel?: string
  /** Hinweiszeile unter dem Knopf */
  ctaNote?: string
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

function Sterne() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#C9A84C">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  )
}

/**
 * Hero mit Video: links die Argumentation, rechts das Video und darunter der
 * Beleg dafür, dass schon andere da waren.
 *
 * Anders als auf der Startseite kommt das Video nicht aus dem Projekt, sondern
 * von YouTube. Deshalb VideoPlayerBox — die Einbindung laedt erst nach einem
 * Klick und laeuft ueber youtube-nocookie.com.
 *
 * Die Texte stehen als Angaben in der Seite, nicht im CMS: Der Hero der
 * Startseite haengt an dessen Feldern, und dieselben Felder auf einer
 * Unterseite zu verwenden hiesse, beide Seiten aneinanderzubinden.
 */
export default function VideoHero({
  label,
  headline,
  headlineAccent,
  subheadline,
  bewertung,
  videoId,
  videoPosterSrc,
  videoTitle,
  ctaLabel = 'Performance Analyse buchen',
  ctaNote = 'Call mit mir persönlich · 20 Minuten',
}: VideoHeroProps) {
  return (
    <div className="relative overflow-hidden" style={{ background: '#060E1F' }}>

      {/* Hintergrund-Gitter und Lichtschein — dieselben Werte wie im Hero der Startseite */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="vh-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="vh-diagonal" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="vh-glow-left" cx="20%" cy="20%" r="55%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
            <stop offset="60%" stopColor="rgba(201,168,76,0.05)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <radialGradient id="vh-glow-right" cx="85%" cy="10%" r="40%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.1)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <linearGradient id="vh-grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="vh-fade-mask">
            <rect width="100%" height="100%" fill="url(#vh-grid-fade)" />
          </mask>
        </defs>
        <g mask="url(#vh-fade-mask)">
          <rect width="100%" height="100%" fill="url(#vh-grid)" />
          <rect width="100%" height="100%" fill="url(#vh-diagonal)" />
        </g>
        <rect width="100%" height="100%" fill="url(#vh-glow-left)" />
        <rect width="100%" height="100%" fill="url(#vh-glow-right)" />
      </svg>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Links: Einordnung, Überschrift, Bewertung, Aufruf */}
          <div>
            {label && (
              <div className="mb-5">
                <SectionLabel>{label}</SectionLabel>
              </div>
            )}

            <h1 className="font-barlow font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-6" style={{ color: '#E6E8EB' }}>
              {headline}
              {headlineAccent && (
                <>
                  {' '}
                  <span style={goldText}>{headlineAccent}</span>
                </>
              )}
            </h1>

            {subheadline && (
              <p className="font-inter text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#AEB5BE' }}>
                {subheadline}
              </p>
            )}

            {bewertung && (
              <div className="flex items-center gap-3 mb-7">
                <Sterne />
                <span className="font-inter text-sm md:text-base" style={{ color: '#C6CDD5' }}>
                  {bewertung}
                </span>
              </div>
            )}

            {/* Knopf wie im Hero der Startseite: Kalendersymbol, eine Zeile,
                der Hinweis darunter in Grau. */}
            <a
              href={CALENDLY_URL}
              data-open-form="true"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center gap-3 px-7 py-4 rounded-xl font-barlow font-semibold text-lg transition-transform"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {ctaLabel}
            </a>
            {ctaNote && (
              <p className="mt-3 font-inter text-xs" style={{ color: '#7B8792' }}>
                {ctaNote}
              </p>
            )}
          </div>

          {/* Rechts: Video, darunter der Beleg */}
          <div className="flex flex-col">
            <VideoPlayerBox videoId={videoId} posterSrc={videoPosterSrc} title={videoTitle} />

            <div
              className="rounded-b-xl px-6 py-6 flex justify-center"
              style={{
                background: 'rgba(13,24,41,0.85)',
                border: '1px solid rgba(201,168,76,0.3)',
                borderTop: 'none',
              }}
            >
              <KundenReihe gross />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
