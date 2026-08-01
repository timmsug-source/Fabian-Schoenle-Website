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

type Step = {
  number: string
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
            : 'grid md:grid-cols-3 gap-8'
        }
      >
        {steps.map((step, i) => (
          <Fragment key={step.number}>
          <li
            className={`flex flex-col gap-3 ${karten ? 'leistung-card rounded-2xl p-7 md:flex-1' : ''}`}
          >
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
