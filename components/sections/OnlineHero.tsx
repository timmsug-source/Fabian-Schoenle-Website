import Image from 'next/image'
import { ANFRAGE_ANKER } from '@/lib/constants'

type OnlineHeroProps = {
  /** Kleine Zeile über der Überschrift */
  label?: string
  headline: string
  /** Zweiter Teil der Überschrift, im Goldverlauf */
  headlineAccent?: string
  subheadline?: string
  ctaLabel?: string
  /** Hinweiszeile unter dem Knopf */
  ctaNote?: string
  imageSrc?: string
  imageAlt?: string
  /** Ausschnitt im Rahmen, z. B. „center 20%“ */
  imagePosition?: string
}

const goldGradient = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Hero von /personal-coaching-online, nach Timms Vorlage: links Einordnung,
 * große Überschrift, ein Absatz und der Knopf, rechts das Porträt in einem
 * ruhigen Rahmen.
 *
 * Bewusst reduzierter als der Hero der Abnehmcoaching-Seite (BildHero): kein
 * Goldrahmen um das Foto, keine Sterne, keine Merkmale oder Vertrauensleiste
 * darunter. Die Überschrift trägt die Seite allein und ist deshalb größer.
 */
export default function OnlineHero({
  label,
  headline,
  headlineAccent,
  subheadline,
  ctaLabel = 'Performance-Analyse buchen',
  ctaNote,
  imageSrc = '/images/Fabian-Schoenle-Blick-Kamera.webp',
  imageAlt = 'Fabian Schönle',
  imagePosition = 'center 18%',
}: OnlineHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      {/* Weicher Lichtschein oben links, ohne Raster: Die Vorlage hat einen
          ruhigen, glatten Grund. */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 15% 20%, rgba(201,168,76,0.07), rgba(201,168,76,0) 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        {/* items-stretch: Das Foto rechts wird so hoch wie der Text links */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 xl:gap-16 lg:items-stretch">

          <div className="flex flex-col justify-center">
            {label && (
              <p className="font-inter text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5 md:mb-6" style={goldGradient}>
                {label}
              </p>
            )}

            {/* Höchstens vier Zeilen ab lg. Die Größen sind auf die
                Spaltenbreite bei 1024 und 1280 px abgestimmt. */}
            <h1
              className="font-barlow font-bold text-[2.75rem] md:text-6xl lg:text-[3.6rem] xl:text-[4.5rem] leading-[1.08] mb-7 md:mb-8"
              style={{ color: '#E6E8EB' }}
            >
              {headline}
              {headlineAccent && (
                <>
                  {' '}
                  <span style={goldGradient}>{headlineAccent}</span>
                </>
              )}
            </h1>

            {subheadline && (
              <p className="font-inter text-base md:text-lg leading-relaxed mb-9 md:mb-10 max-w-2xl" style={{ color: '#C6CDD5' }}>
                {subheadline}
              </p>
            )}

            <div>
              <a
                href={ANFRAGE_ANKER}
                data-open-form="true"
                className="cta-metal inline-flex items-center gap-3 px-8 py-4 rounded-xl font-inter font-semibold text-base md:text-lg transition-transform"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {ctaLabel}
              </a>
              {ctaNote && (
                <p className="mt-4 font-inter text-sm" style={{ color: '#8A94A0' }}>
                  {ctaNote}
                </p>
              )}
            </div>
          </div>

          {/* Porträt im ruhigen Rahmen: feine helle Kante statt Gold, das Foto
              läuft nach unten und zur Textseite hin in den Grund aus. Ab
              Desktop ohne eigenes Seitenverhältnis, damit es die Höhe der
              linken Spalte übernimmt. */}
          <div
            className="relative aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[560px] rounded-3xl overflow-hidden"
            style={{
              background: '#0B1525',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(11,21,37,0) 62%, rgba(11,21,37,0.85) 92%, #0B1525 100%), linear-gradient(to right, rgba(11,21,37,0.55) 0%, rgba(11,21,37,0) 22%)',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
