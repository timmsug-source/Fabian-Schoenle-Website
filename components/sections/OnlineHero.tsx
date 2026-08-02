import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

type FeatureIcon = 'ziel' | 'kurve' | 'diamant'
type TrustIcon = 'monitor' | 'person' | 'schloss'

type OnlineHeroProps = {
  label?: string
  /** Drei Zeilen — die dritte steht im Goldverlauf */
  headline1: string
  headline2: string
  headlineAccent: string
  subheadline?: string
  ctaLabel?: string
  imageSrc?: string
  imageAlt?: string
  features: { icon: FeatureIcon; titel: string; text: string }[]
  /** Zitatzeile in der Leiste unten; der Akzentteil steht in Gold */
  zitat?: string
  zitatAkzent?: string
  zitatEnde?: string
  trust: { icon: TrustIcon; titel: string; text: string }[]
  /** Beschriftungen im Performance-Kreis, im Uhrzeigersinn ab oben */
  kreis?: [string, string, string, string]
  kreisMitte?: string
}

const goldGradient = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/* ---------- Icons ---------- */

const FEATURE_ICONS: Record<FeatureIcon, React.ReactNode> = {
  ziel: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4">
      <circle cx="15" cy="17" r="10" />
      <circle cx="15" cy="17" r="5.5" />
      <circle cx="15" cy="17" r="1.6" fill="#C9A84C" stroke="none" />
      <path d="M15 17L27 5" strokeLinecap="round" />
      <path d="M22 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  kurve: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4">
      <path d="M4 27h24" strokeLinecap="round" />
      <rect x="7" y="18" width="4.5" height="9" rx="1" />
      <rect x="14" y="13" width="4.5" height="14" rx="1" />
      <rect x="21" y="8" width="4.5" height="19" rx="1" />
      <path d="M6 11l6-5 5 4 8-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 4h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  diamant: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.4">
      <path d="M16 28L3 12l4.5-8h17L29 12 16 28z" strokeLinejoin="round" />
      <path d="M3 12h26M11 12l5-8M21 12l-5-8M16 28l-5-16M16 28l5-16" strokeLinejoin="round" />
    </svg>
  ),
}

const TRUST_ICONS: Record<TrustIcon, React.ReactNode> = {
  monitor: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 20.5h8" />
      <path d="M10.5 8.5l4.5 2.5-4.5 2.5V8.5z" fill="#C9A84C" stroke="none" />
    </svg>
  ),
  person: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20.5v-1a5.5 5.5 0 0 1 5.5-5.5h3a5.5 5.5 0 0 1 5.5 5.5v1" />
    </svg>
  ),
  schloss: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.5" y="10" width="15" height="10.5" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.2" r="1.4" fill="#C9A84C" stroke="none" />
    </svg>
  ),
}

/** Kreisgrafik über dem Bild — vier Begriffe um einen Mittelpunkt */
function PerformanceKreis({ labels, mitte }: { labels: [string, string, string, string]; mitte: string }) {
  const zeilen = mitte.split(' ')
  return (
    /*
      Breiter Rahmen mit kleinem Ring: So bleiben die vier Beschriftungen
      außerhalb des Rings und kollidieren nicht mit dem Text in der Mitte.
    */
    <svg width="360" height="260" viewBox="0 0 360 260" fill="none" aria-hidden="true">
      <circle cx="180" cy="130" r="64" stroke="rgba(201,168,76,0.45)" strokeWidth="1" />
      {[
        [180, 66],
        [244, 130],
        [180, 194],
        [116, 130],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.6" fill="#C9A84C" />
      ))}

      <text x="180" y="46" textAnchor="middle" fill="#E6E8EB" fontSize="11" letterSpacing="2" className="font-inter">
        {labels[0]}
      </text>
      <text x="258" y="134" textAnchor="start" fill="#E6E8EB" fontSize="11" letterSpacing="2" className="font-inter">
        {labels[1]}
      </text>
      <text x="180" y="222" textAnchor="middle" fill="#E6E8EB" fontSize="11" letterSpacing="2" className="font-inter">
        {labels[2]}
      </text>
      <text x="102" y="134" textAnchor="end" fill="#E6E8EB" fontSize="11" letterSpacing="2" className="font-inter">
        {labels[3]}
      </text>

      {zeilen.map((z, i) => (
        <text
          key={i}
          x="180"
          y={130 - (zeilen.length - 1) * 8 + i * 16}
          textAnchor="middle"
          fill="#C9A84C"
          fontSize="12"
          letterSpacing="1.2"
          className="font-barlow"
          fontWeight="700"
        >
          {z}
        </text>
      ))}
    </svg>
  )
}

export default function OnlineHero({
  label,
  headline1,
  headline2,
  headlineAccent,
  subheadline,
  ctaLabel = 'Jetzt Potenzial entfalten',
  imageSrc = '/images/Fabian-Schoenle-Blick-Kamera.webp',
  imageAlt = 'Fabian Schönle',
  features,
  zitat,
  zitatAkzent,
  zitatEnde,
  trust,
  kreis = ['KLARHEIT', 'ENERGIE', 'UMSETZUNG', 'ERGEBNISSE'],
  kreisMitte = 'DEIN PERFORMANCE KREIS',
}: OnlineHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>

      {/* Bild rechts — volle Höhe */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] xl:w-[50%]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-[55%_18%]" sizes="52vw" priority />
        {/* Verlauf nach links in den Hintergrund — schmal, damit das Motiv frei bleibt */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #060E1F 0%, rgba(6,14,31,0.5) 12%, rgba(6,14,31,0) 32%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #060E1F)' }}
        />

        {/* Performance-Kreis über dem Bild */}
        <div className="absolute top-[14%] left-[4%] hidden xl:block pointer-events-none">
          <PerformanceKreis labels={kreis} mitte={kreisMitte} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-36 md:pt-44 pb-0">
        <div className="max-w-2xl">

          {/* Bild oben — nur Mobile */}
          <div className="lg:hidden relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" sizes="100vw" priority />
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #060E1F)' }} />
          </div>

          {label && (
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={goldGradient}>
              {label}
            </p>
          )}

          <h1 className="font-barlow font-bold text-4xl md:text-6xl leading-[1.05] mb-6" style={{ color: '#E6E8EB' }}>
            {headline1}
            <br />
            {headline2}
            <br />
            <span style={goldGradient}>{headlineAccent}</span>
          </h1>

          {subheadline && (
            <p className="font-inter text-base md:text-lg leading-relaxed mb-9 max-w-lg" style={{ color: '#AEB5BE' }}>
              {subheadline}
            </p>
          )}

          <a
            href={CALENDLY_URL}
            data-open-form="true"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-metal inline-flex items-center gap-3 px-8 py-4 rounded-xl font-inter font-semibold text-sm uppercase tracking-widest transition-transform"
          >
            {ctaLabel}
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M1 6h13M10.5 1.5L16 6l-5.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Drei Merkmale mit Trennlinien */}
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-14 mb-14">
            {features.map((f, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 py-4 sm:py-0 ${i > 0 ? 'sm:pl-6 sm:border-l' : 'sm:pr-6'} ${i === 1 ? 'sm:pr-6' : ''}`}
                style={i > 0 ? { borderColor: 'rgba(201,168,76,0.22)' } : undefined}
              >
                <span className="inline-flex">{FEATURE_ICONS[f.icon]}</span>
                <p className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: '#E6E8EB' }}>
                  {f.titel}
                </p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#9AA4AE' }}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leiste unten: Zitat links, Vertrauenspunkte rechts */}
      <div
        className="relative"
        style={{ background: 'rgba(13,24,41,0.85)', borderTop: '1px solid rgba(201,168,76,0.18)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {zitat && (
            <div className="flex gap-3 flex-1 min-w-0">
              <span className="font-barlow font-bold text-3xl leading-none flex-shrink-0" style={{ color: '#C9A84C', opacity: 0.5 }}>
                &ldquo;
              </span>
              <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#D4D9DF' }}>
                {zitat}
                {zitatAkzent && <span style={goldGradient}> {zitatAkzent}</span>}
                {zitatEnde}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 flex-shrink-0">
            {trust.map((t, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 ${i > 0 ? 'sm:pl-6 sm:border-l' : ''}`}
                style={i > 0 ? { borderColor: 'rgba(201,168,76,0.18)' } : undefined}
              >
                <span className="flex-shrink-0">{TRUST_ICONS[t.icon]}</span>
                <span className="flex flex-col leading-tight">
                  <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: '#E6E8EB' }}>
                    {t.titel}
                  </span>
                  <span className="font-inter text-xs" style={{ color: '#7B8792' }}>
                    {t.text}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
