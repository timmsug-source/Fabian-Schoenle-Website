import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

export type MerkmalIcon = 'video' | 'rezept' | 'training' | 'waage' | 'fragebogen' | 'uhr'

/** Ein Bild mit dem Text, der zu genau diesem Bild gehört. */
type Block = {
  src: string
  alt: string
  /** Echte Bildmaße — nötig, damit next/image die Fläche vorab reservieren kann. */
  breite: number
  hoehe: number
  icon: MerkmalIcon
  titel: string
  text: string
  /** Stichpunkte unter dem Text. Entfallen, wo das Bild für sich spricht. */
  punkte?: string[]
  /**
   * Querformat statt Handy-Screenshot. Solche Bilder bekommen die breitere
   * Spalte — ein Laptop-Mockup in 260 Pixern wäre nicht mehr zu erkennen.
   */
  quer?: boolean
}

type CoachingAppSectionProps = {
  label?: string
  headline: string
  /** Zweite Zeile der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  bloecke: Block[]
  /** Eigenständige Karte unter dem Rahmen — eine Zahl, die für sich steht. */
  kennzahl?: {
    label: string
    wert: string
    text: string
  }
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

const MERKMAL_ICONS: Record<MerkmalIcon, React.ReactNode> = {
  video: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <rect x="3" y="8" width="20" height="16" rx="3" />
      <path d="M23 14.5l6-3.5v10l-6-3.5" strokeLinejoin="round" />
      <path d="M11 13.5l5 2.5-5 2.5z" strokeLinejoin="round" />
    </svg>
  ),
  rezept: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H26v22H7.5A2.5 2.5 0 0 0 5 27.5z" strokeLinejoin="round" />
      <path d="M5 27.5A2.5 2.5 0 0 1 7.5 25H26v4H7.5A2.5 2.5 0 0 1 5 27.5z" strokeLinejoin="round" />
      <path d="M11 10h9M11 15h9" strokeLinecap="round" />
    </svg>
  ),
  training: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M10 16h12" strokeLinecap="round" />
      <rect x="6" y="10.5" width="4" height="11" rx="1.2" />
      <rect x="22" y="10.5" width="4" height="11" rx="1.2" />
      <rect x="2.5" y="13.5" width="3.5" height="5" rx="1" />
      <rect x="26" y="13.5" width="3.5" height="5" rx="1" />
    </svg>
  ),
  waage: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="3" />
      <path d="M8 21l5-6 4 3.5 7-8.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  uhr: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <circle cx="16" cy="17" r="12" />
      <path d="M16 10v7l4.5 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3h8" strokeLinecap="round" />
    </svg>
  ),
  fragebogen: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <rect x="6" y="5" width="20" height="24" rx="2.5" />
      <path d="M12 3h8v4h-8z" strokeLinejoin="round" />
      <path d="M11 15l2 2 4-4.5M11 22l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 15.5h2M20 22.5h2" strokeLinecap="round" />
    </svg>
  ),
}

function Haken() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1.5" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 4.5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Die Coaching-App, Bildschirm für Bildschirm: Jeder Screenshot steht neben
 * dem Text, der genau diesen Bildschirm erklärt — im Wechsel links und rechts,
 * damit die Reihe nicht zur Liste wird.
 *
 * Das Handy-Format (rund 1:2,2) ist der Grund für dieses Layout: Nebeneinander
 * bleiben die Bilder gross genug, um lesbar zu sein, während der Text die
 * breitere Spalte bekommt.
 */
export default function CoachingAppSection({
  label,
  headline,
  headlineAccent,
  intro,
  bloecke,
  kennzahl,
}: CoachingAppSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

        <div className="animate-fade-up text-center max-w-3xl mx-auto mb-14 md:mb-20">
          {label && (
            <div className="mb-4 flex justify-center">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
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

        {/*
          Ein gemeinsamer Rahmen um alle drei Bildschirme: Sie gehoeren zu
          derselben App und sollen als ein Block gelesen werden — abgesetzt von
          dem, was darunter kommt. Getrennt werden sie innen nur durch eine
          duenne Linie.
        */}
        <div
          className="animate-fade-up relative rounded-3xl p-6 md:p-12 flex flex-col"
          style={{
            background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            boxShadow: 'inset 0 1px 0 rgba(232,212,154,0.05), 0 0 24px rgba(201,168,76,0.12)',
          }}
        >
          {/*
            Rastermuster wie in den Sektionen der Startseite: feines Gitter plus
            Diagonalen, beides in Weiss. Gold war hier zuerst im Einsatz und auf
            dem dunklen Grund praktisch nicht zu sehen.
          */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="ca-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                </pattern>
                <pattern id="ca-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ca-bg-grid)" />
              <rect width="100%" height="100%" fill="url(#ca-bg-diag)" />
            </svg>
          </div>

          {bloecke.map((b, i) => (
            <div
              key={b.src}
              className={`relative flex flex-col gap-8 md:gap-14 lg:items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } ${i > 0 ? 'mt-12 md:mt-16 pt-12 md:pt-16' : ''}`}
              style={i > 0 ? { borderTop: '1px solid rgba(201,168,76,0.18)' } : undefined}
            >
              {/* Bild */}
              <div
                className={`relative flex-shrink-0 mx-auto lg:mx-0 w-full ${
                  b.quer ? 'lg:w-[46%]' : 'max-w-[260px]'
                }`}
              >
                {b.quer ? (
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={b.breite}
                    height={b.hoehe}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                ) : (
                  <div
                    className="rounded-[26px] overflow-hidden"
                    style={{
                      border: '1px solid rgba(201,168,76,0.35)',
                      boxShadow: '0 0 34px rgba(201,168,76,0.12)',
                      background: '#000',
                    }}
                  >
                    <Image
                      src={b.src}
                      alt={b.alt}
                      width={b.breite}
                      height={b.hoehe}
                      className="w-full h-auto"
                      sizes="260px"
                    />
                  </div>
                )}
              </div>

              {/* Text zum Screenshot */}
              <div className="flex-1 min-w-0">
                <span className="block mb-4">{MERKMAL_ICONS[b.icon]}</span>
                <h3 className="font-barlow font-bold text-2xl md:text-4xl mb-4" style={{ color: '#E6E8EB' }}>
                  {b.titel}
                </h3>
                <p
                  className={`font-inter text-base md:text-lg leading-relaxed ${b.punkte?.length ? 'mb-7' : ''}`}
                  style={{ color: '#A6B0BA' }}
                >
                  {b.text}
                </p>
                {b.punkte && b.punkte.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {b.punkte.map((p) => (
                      <li key={p} className="flex gap-3 font-inter" style={{ color: '#C6CDD5' }}>
                        <Haken />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {kennzahl && (
          <div
            className="animate-fade-up leistung-card relative rounded-2xl mt-8 md:mt-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          >
            {/* Gleiches Raster wie im Rahmen darüber */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern id="ca-kz-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </pattern>
                  <pattern id="ca-kz-diag" width="60" height="60" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ca-kz-grid)" />
                <rect width="100%" height="100%" fill="url(#ca-kz-diag)" />
              </svg>
            </div>

            <div className="relative flex-shrink-0 flex items-center gap-5">
              <span>{MERKMAL_ICONS.uhr}</span>
              <span className="font-barlow font-bold text-5xl md:text-7xl leading-none" style={goldText}>
                {kennzahl.wert}
              </span>
            </div>

            <div className="relative min-w-0">
              <p
                className="font-inter text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#7B8792' }}
              >
                {kennzahl.label}
              </p>
              <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
                {kennzahl.text}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
