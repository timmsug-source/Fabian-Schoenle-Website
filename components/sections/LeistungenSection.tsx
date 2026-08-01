import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

type Leistung = {
  headline: string
  body?: string
}

type LeistungenSectionProps = {
  label?: string
  headline: string
  intro?: string
  items: Leistung[]
  imageSrc?: string
  imageAlt?: string
  /** Name im Kasten unter dem Bild */
  name?: string
  /** Zeile darunter, z. B. Abschluss oder Rolle */
  role?: string
}

export default function LeistungenSection({
  label,
  headline,
  intro,
  items,
  imageSrc,
  imageAlt,
  name,
  role,
}: LeistungenSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* SVG Rastermuster — wie in der Problemsektion */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="ls-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="ls-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <linearGradient id="ls-bg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="14%" stopColor="white" stopOpacity="1" />
            <stop offset="86%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="ls-bg-fade-mask">
            <rect width="100%" height="100%" fill="url(#ls-bg-fade)" />
          </mask>
        </defs>
        <g mask="url(#ls-bg-fade-mask)">
          <rect width="100%" height="100%" fill="url(#ls-bg-grid)" />
          <rect width="100%" height="100%" fill="url(#ls-bg-diag)" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/*
        Grid statt Flex-Zeile: Kopf steht in Zeile 1, Karten und Bild in Zeile 2.
        Dadurch entspricht die Höhe der Bildspalte genau dem Kartenblock —
        nicht der gesamten linken Spalte inklusive Überschrift.
      */}
      <div className="animate-fade-up grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-x-16 lg:gap-y-10">

        {/* Kopf — zentriert über beide Spalten */}
        <div className="text-center lg:col-span-2 lg:row-start-1">
          {label && (
            <div className="mb-4">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold font-barlow mb-6" style={{ color: '#E6E8EB' }}>
            {headline}
          </h2>
          {intro && (
            <p className="text-base md:text-lg font-inter leading-relaxed max-w-2xl mx-auto" style={{ color: '#A6B0BA' }}>
              {intro}
            </p>
          )}
        </div>

        {/* Links: Leistungs-Karten */}
        <ul className="flex flex-col gap-3 lg:col-start-1 lg:row-start-2">
          {items.map((item, i) => (
            <li key={i} className="leistung-card rounded-xl px-5 py-4 md:px-6 md:py-5 flex gap-4">
              {/* h-7 entspricht der Zeilenhöhe der Überschrift — Haken sitzt dadurch auf deren Höhe */}
              <span className="flex-shrink-0 flex items-center h-7">
                <svg
                  width="26"
                  height="26"
                  className="md:w-[30px] md:h-[30px]"
                  viewBox="0 0 38 38"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <defs>
                    <linearGradient id={`leistung-gold-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B8832A" />
                      <stop offset="45%" stopColor="#C9A84C" />
                      <stop offset="75%" stopColor="#F2D27A" />
                      <stop offset="100%" stopColor="#C9A84C" />
                    </linearGradient>
                  </defs>
                  {/* Dünne Kontur in derselben Farbe glättet die spitzen Ecken bei kleiner Darstellung */}
                  <polygon
                    points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
                    fill={`url(#leistung-gold-${i})`}
                    stroke={`url(#leistung-gold-${i})`}
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-barlow font-semibold text-lg md:text-xl" style={{ color: '#E6E8EB' }}>
                  {item.headline}
                </span>
                {item.body && (
                  <span className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                    {item.body}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Rechts: Portrait + Namenskasten — füllt genau die Höhe des Kartenblocks */}
        {imageSrc && (
          <div className="w-full flex flex-col gap-4 lg:col-start-2 lg:row-start-2">
            <div
              className="relative flex-1 min-h-[420px] lg:min-h-0 rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(201,168,76,0.3)',
                boxShadow: '0 0 30px rgba(201,168,76,0.14)',
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt ?? ''}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              {/* Verlauf nach unten, damit das Bild in den Kasten darunter läuft */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(9,17,34,0.85), transparent)' }}
              />
            </div>

            {name && (
              <div
                className="flex-shrink-0 rounded-xl px-5 py-4 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,24,41,0.7) 0%, rgba(11,21,37,0.55) 100%)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  boxShadow: '0 0 22px rgba(201,168,76,0.12)',
                }}
              >
                <p className="font-barlow font-bold text-lg md:text-xl" style={{ color: '#E6E8EB' }}>
                  {name}
                </p>
                {role && (
                  <p
                    className="font-inter text-xs font-semibold uppercase tracking-widest mt-1"
                    style={{ color: '#C9A84C' }}
                  >
                    {role}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

      </div>
      </div>
    </section>
  )
}
