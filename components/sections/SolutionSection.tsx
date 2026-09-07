import { Fragment } from 'react'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import ZitatModul from '@/components/ui/ZitatModul'

/**
 * Verbindungspfeil zwischen zwei Schritten — waagerecht ab md, darunter senkrecht.
 * Gleiche Form wie die Pfeile bei den Video-Bulletpoints in der Problemsektion,
 * nur größer skaliert.
 */
function Pfeil() {
  return (
    <svg width="34" height="23" viewBox="0 0 18 12" fill="none" className="rotate-90 md:rotate-0">
      <path
        d="M1 6h13M10.5 1.5L16 6l-5.5 4.5"
        stroke="#C9A84C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Symbole für die Leistungsbausteine. Gleiche Machart wie die Icons im
 * OnlineHero: 32er-Raster, goldene Linien, keine Flächen.
 */
export type LeistungIcon =
  | 'blut'
  | 'dna'
  | 'ernaehrung'
  | 'training'
  | 'schlaf'
  | 'tracking'

const LEISTUNG_ICONS: Record<LeistungIcon, React.ReactNode> = {
  blut: (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M16 3c0 0-9 10-9 16a9 9 0 1 0 18 0c0-6-9-16-9-16z" strokeLinejoin="round" />
      <path d="M11.5 19a4.5 4.5 0 0 0 4.5 4.5" strokeLinecap="round" />
    </svg>
  ),
  dna: (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M11 4c0 7 10 8 10 12s-10 5-10 12" strokeLinecap="round" />
      <path d="M21 4c0 7-10 8-10 12s10 5 10 12" strokeLinecap="round" />
      <path d="M13 8h6M11.5 12.5h9M11.5 19.5h9M13 24h6" strokeLinecap="round" />
    </svg>
  ),
  ernaehrung: (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M16 11c-2-2.5-6-2.5-8-.5s-1.5 7 .5 11 4.5 7 7.5 7 5.5-3 7.5-7 2.5-9 .5-11-6-2-7.5.5z" strokeLinejoin="round" />
      <path d="M16 11V7c0-2 1.5-3.5 3.5-3.5" strokeLinecap="round" />
    </svg>
  ),
  training: (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M10 16h12" strokeLinecap="round" />
      <rect x="6" y="10.5" width="4" height="11" rx="1.2" />
      <rect x="22" y="10.5" width="4" height="11" rx="1.2" />
      <rect x="2.5" y="13.5" width="3.5" height="5" rx="1" />
      <rect x="26" y="13.5" width="3.5" height="5" rx="1" />
    </svg>
  ),
  schlaf: (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <path d="M26 19.5A11.5 11.5 0 0 1 12.5 6 11.5 11.5 0 1 0 26 19.5z" strokeLinejoin="round" />
    </svg>
  ),
  tracking: (
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="2.5" />
      <path d="M14.5 6h3" strokeLinecap="round" />
      <path d="M12.5 21l3.5-4.5 3 2.5 4-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

type Step = {
  /** Nummer für Abfolgen. Entfällt, wenn stattdessen ein Symbol gesetzt ist. */
  number?: string
  /** Symbol statt Nummer — für Aufzählungen ohne Reihenfolge. */
  icon?: LeistungIcon
  headline: string
  body: string
}

type SolutionSectionProps = {
  label?: string
  headline: string
  intro?: string
  steps: Step[]
  /** Schritte als Karten mit Goldrahmen statt als schlichte Spalten */
  karten?: boolean
  /**
   * Karten im Raster statt in einer Reihe — für Aufzählungen, die keine
   * Abfolge sind. Anders als `karten` ohne Verbindungspfeile, und die Karten
   * brechen nach drei Spalten um.
   */
  kartenGrid?: boolean
  /** Zitatkasten unter den Schritten */
  zitat?: string
  zitatAutor?: string
  zitatRolle?: string
  /** Vollflächiges Hintergrundbild der Sektion */
  hintergrundBild?: string
}

export default function SolutionSection({
  label,
  headline,
  intro,
  steps,
  karten,
  kartenGrid,
  zitat,
  zitatAutor,
  zitatRolle,
  hintergrundBild,
}: SolutionSectionProps) {
  // In der Kartenvariante steht der Kopf zentriert über den Spalten
  const kopf = karten ? 'text-center max-w-3xl mx-auto' : ''

  return (
    <section className="relative overflow-hidden">
      {hintergrundBild && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src={hintergrundBild}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Oben und unten weich in den Seitenhintergrund auslaufen lassen */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #060E1F 0%, rgba(6,14,31,0.62) 20%, rgba(6,14,31,0.62) 80%, #060E1F 100%)',
            }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className={karten ? `${kopf} mb-12 md:mb-16` : ''}>
        {label && (
          <div className="mb-4">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold font-barlow mb-6" style={{ color: '#E6E8EB' }}>
          {headline}
        </h2>
        {intro && (
          <p
            className={`text-base md:text-lg font-inter leading-relaxed ${karten ? '' : 'mb-12 max-w-2xl'}`}
            style={{ color: '#A6B0BA' }}
          >
            {intro}
          </p>
        )}
      </div>

      <ol
        className={
          karten
            ? 'flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0'
            : kartenGrid
              ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
              : 'grid md:grid-cols-3 gap-8'
        }
      >
        {steps.map((step, i) => (
          <Fragment key={step.number ?? step.headline}>
          <li
            className={`flex flex-col gap-3 ${
              karten ? 'leistung-card rounded-2xl p-7 md:flex-1' : ''
            }${kartenGrid ? 'leistung-card rounded-2xl p-7' : ''}`}
          >
            {step.icon ? (
              <span className="block">{LEISTUNG_ICONS[step.icon]}</span>
            ) : (
              <span
                className="text-5xl font-bold font-barlow"
                style={{
                  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
                  backgroundSize: '100% 1.2em',
                  backgroundRepeat: 'repeat-y',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {step.number}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-semibold font-barlow" style={{ color: '#E6E8EB' }}>
              {step.headline}
            </h3>
            <p className="font-inter leading-relaxed" style={{ color: '#A6B0BA' }}>{step.body}</p>
          </li>

          {/* Pfeil zwischen den Schritten — auf Mobil nach unten gedreht */}
          {karten && i < steps.length - 1 && (
            <li aria-hidden="true" className="flex items-center justify-center flex-shrink-0 md:px-4">
              <Pfeil />
            </li>
          )}
          </Fragment>
        ))}
      </ol>

      {zitat && (
        <div className="mt-16 md:mt-24">
          <ZitatModul zitat={zitat} autor={zitatAutor} rolle={zitatRolle} patternId="ansatz-zitat-grid" />
        </div>
      )}
      </div>
    </section>
  )
}
