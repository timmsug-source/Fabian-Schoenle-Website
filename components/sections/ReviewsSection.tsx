import Image from 'next/image'

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

const cardGlow = {
  border: '1px solid rgba(201,168,76,0.4)',
  boxShadow: '0 0 28px rgba(201,168,76,0.18), inset 0 0 24px rgba(201,168,76,0.04)',
} as const

/* ---------- Icons (Stats) ---------- */

function IconGroup() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8D49A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="10" cy="8" r="3.2" />
      <path d="M21 20v-1a4 4 0 0 0-3-3.87" />
      <path d="M16.5 5.13A3.2 3.2 0 0 1 16.5 11" />
    </svg>
  )
}

function IconStarLine() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8D49A" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 3l2.9 6.26L22 10.27l-5 4.87 1.18 6.88L12 18.77l-6.18 3.25L7 15.14 2 10.27l7.1-1.01L12 3z" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8D49A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

/* ---------- Daten ---------- */

const reviewShots = [
  {
    src: '/images/FS-Rezension-Robert.jpg',
    alt: 'LinkedIn-Rezension von Robert Raschkov, Geschäftsführer',
  },
  {
    src: '/images/FS-Rezension-Matthias.jpg',
    alt: 'LinkedIn-Rezension von Matthias Karlin, Director Global Aftermarket',
  },
  {
    src: '/images/FS-Rezension-Trustpilot.jpg',
    alt: 'Trustpilot-Rezension: 15 kg abgenommen und volle Energie zurück',
  },
]

const stats = [
  { icon: <IconGroup />, value: '200+', label: 'Klienten', sub: 'bereits begleitet' },
  { icon: <IconStarLine />, value: '4,9 / 5', label: 'Durchschnittliche Bewertung', sub: 'auf Basis echter Rezensionen' },
  { icon: <IconShield />, value: '100 %', label: 'Individuell & datenbasiert', sub: 'keine Standardpläne' },
]

export default function ReviewsSection() {
  return (
    <section id="rezensionen" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

      {/* Kopf */}
      <div className="text-center mb-12 md:mb-16">
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={goldText}>
          Rezensionen
        </p>
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
          Ergebnisse meiner <span style={goldText}>Kunden</span>
        </h2>
      </div>

      {/* Rezensions-Screenshots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reviewShots.map((s, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={cardGlow}>
            <div className="relative w-full aspect-[1.9]" style={{ background: '#111114' }}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stats-Leiste */}
      <div
        className="mt-8 rounded-2xl px-4 py-8 md:px-8"
        style={{
          background: 'linear-gradient(135deg, rgba(13,24,41,0.6) 0%, rgba(9,17,34,0.6) 100%)',
          border: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-6 md:px-10 py-4 lg:py-0 ${i > 0 ? 'lg:border-l' : ''}`}
              style={i > 0 ? { borderColor: 'rgba(201,168,76,0.18)' } : undefined}
            >
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0"
                style={{ border: '1px solid rgba(201,168,76,0.4)' }}
              >
                {s.icon}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-barlow font-bold text-2xl md:text-3xl mb-0.5" style={goldText}>{s.value}</span>
                <span className="font-inter text-sm font-semibold" style={{ color: '#E6E8EB' }}>{s.label}</span>
                <span className="font-inter text-xs" style={{ color: '#7B8792' }}>{s.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer-Hinweis */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <span style={{ color: '#00B67A' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </span>
        <p className="font-inter text-xs text-center" style={{ color: '#7B8792' }}>
          Verifizierte Rezensionen echter Kunden von LinkedIn und Trustpilot.
        </p>
      </div>
    </section>
  )
}
