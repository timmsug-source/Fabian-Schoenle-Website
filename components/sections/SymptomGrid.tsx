import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

const GOLD = 'url(#ico-gold)'

const symptoms = [
  {
    headline: 'Hartnäckiges Bauchfett',
    icon: (
      <>
        <circle cx="14" cy="14" r="9" />
        <circle cx="14" cy="14" r="3.2" />
      </>
    ),
  },
  {
    headline: 'Fehlende Energie',
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2.5" />
        <line x1="23" y1="12" x2="23" y2="16" />
        <line x1="7" y1="11" x2="7" y2="17" />
      </>
    ),
  },
  {
    headline: 'Unerholsamer Schlaf',
    icon: (
      <>
        <path d="M20 15.5A8 8 0 0 1 10.5 6 8 8 0 1 0 20 15.5Z" />
        <path d="M20 4l0.6 1.8L22.4 6l-1.8 0.6L20 8.4l-0.6-1.8L17.6 6l1.8-0.2Z" />
      </>
    ),
  },
  {
    headline: 'Jo-Jo-Effekt',
    icon: (
      <>
        <path d="M22 5a10 10 0 1 0 2.5 8" />
        <polyline points="24.5 5 24.5 11 18.5 11" />
      </>
    ),
  },
  {
    headline: 'Langsamer Muskelaufbau',
    icon: (
      <>
        <path d="M4 10v8M8 8v12M20 8v12M24 10v8" />
        <line x1="8" y1="14" x2="20" y2="14" />
      </>
    ),
  },
  {
    headline: 'Schlechtes Körpergefühl',
    icon: (
      <>
        <rect x="8" y="3" width="12" height="17" rx="6" />
        <line x1="14" y1="20" x2="14" y2="25" />
      </>
    ),
  },
  {
    headline: 'Stimmungsschwankungen',
    icon: <path d="M2 14h4l3-8 5 16 3-10 2 4h7" />,
  },
  {
    headline: 'Brainfog',
    icon: (
      <>
        <path d="M14 4a6 6 0 0 0-6 6c-2 1-2 4 0 5v4a3 3 0 0 0 6 0" />
        <path d="M14 4a6 6 0 0 1 6 6c2 1 2 4 0 5v4a3 3 0 0 1-6 0" />
        <line x1="14" y1="4" x2="14" y2="24" />
      </>
    ),
  },
]

// Streu-Positionen der Pills rund um das Bild (Desktop)
const positions = [
  { top: '4%', left: '2%' },
  { top: '30%', left: '-2%' },
  { top: '56%', left: '-2%' },
  { top: '82%', left: '9%' },
  { top: '4%', right: '2%' },
  { top: '30%', right: '-2%' },
  { top: '56%', right: '-2%' },
  { top: '82%', right: '9%' },
]

function Pill({ item }: { item: (typeof symptoms)[0] }) {
  return (
    <div className="symptom-pill inline-flex items-center gap-3 rounded-full pl-4 pr-6 py-3">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
        {item.icon}
      </svg>
      <span className="font-barlow font-semibold text-lg md:text-xl whitespace-nowrap" style={{ color: '#E6E8EB' }}>
        {item.headline}
      </span>
    </div>
  )
}

export default function SymptomGrid() {
  return (
    <section style={{ background: 'transparent' }}>
      {/* Gemeinsamer Gold-Verlauf für alle Icons */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="ico-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E8D49A" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-24 md:pb-32">

        {/* Header */}
        <div className="mb-14 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Kennst du das?
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            Wenn dein Körper nicht mehr so<br className="hidden md:block" /> belastbar ist wie früher
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#5B6773' }}>
            Diese Symptome sind kein Zufall, sondern ein Signal deines Körpers, welches du nicht ignorieren solltest.
          </p>
        </div>

        {/* Radiales Layout — Bild mittig, Pills drumherum */}
        <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>

          {/* Desktop: absolute Streuung */}
          <div className="hidden lg:block relative mx-auto" style={{ maxWidth: 1100, height: 620 }}>
            {/* Zentrales Bild mit Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="absolute -inset-16 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0) 68%)' }} />
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ width: 500, border: '1.5px solid rgba(201,168,76,0.35)', boxShadow: '0 0 60px rgba(201,168,76,0.2)' }}
              >
                <Image
                  src="/images/FS-Waage.png"
                  alt="Die Waage des Lebens — Gleichgewicht aus Ernährung, Training und Regeneration"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  sizes="500px"
                />
              </div>
            </div>

            {/* Pills */}
            {symptoms.map((item, i) => (
              <div key={i} className="absolute" style={positions[i]}>
                <Pill item={item} />
              </div>
            ))}
          </div>

          {/* Mobile / Tablet: Bild oben, Pills als Wrap */}
          <div className="lg:hidden flex flex-col items-center gap-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-8 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0) 70%)' }} />
              <div
                className="relative overflow-hidden rounded-2xl w-full max-w-md"
                style={{ border: '1.5px solid rgba(201,168,76,0.35)', boxShadow: '0 0 40px rgba(201,168,76,0.18)' }}
              >
                <Image
                  src="/images/FS-Waage.png"
                  alt="Die Waage des Lebens"
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {symptoms.map((item, i) => (
                <Pill key={i} item={item} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 lg:mt-10 flex justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform hover:-translate-y-0.5"
            >
              Performance Analyse buchen
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
