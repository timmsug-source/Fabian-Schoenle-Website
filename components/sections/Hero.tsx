'use client'

import Image from 'next/image'

const tickerItems = [
  { name: 'Markus R.', role: 'Unternehmer', result: '−11 kg Körperfett in 10 Wochen' },
  { name: 'Stefan K.', role: 'Geschäftsführer', result: 'Energie endlich wieder stabil den ganzen Tag' },
  { name: 'Jonas M.', role: 'Selbstständiger', result: '+7 kg Muskelmasse in 4 Monaten' },
  { name: 'Tobias W.', role: 'Führungskraft', result: 'Bauchfett weg, das seit Jahren da war' },
  { name: 'Felix B.', role: 'Unternehmer', result: 'Schlafen besser als mit 25' },
  { name: 'Daniel H.', role: 'CEO', result: 'Testosteron auf Optimalniveau gebracht' },
  { name: 'Michael S.', role: 'Selbstständiger', result: '−9 kg in 8 Wochen ohne Verzicht' },
  { name: 'Lukas P.', role: 'Geschäftsführer', result: 'Mentale Klarheit auf einem neuen Level' },
]

const bullets = [
  {
    headline: 'DNA- & Blutanalyse statt Bauchgefühl',
    body: 'Wir messen exakt, was dein System gerade limitiert, und bauen darauf eine Strategie, die wirklich zu dir passt.',
  },
  {
    headline: 'Individueller Plan, kein generisches Programm',
    body: 'Ernährung, Training und Regeneration werden präzise auf deine Biologie abgestimmt, nicht auf einen Durchschnittswert.',
  },
  {
    headline: 'Ergebnisse in Monaten, nicht Jahren',
    body: 'Weil wir nicht raten, sondern am richtigen Hebel ansetzen und Fortschritt kontinuierlich tracken.',
  },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden">

      {/* Hintergrund-Gitter + Glows */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,154,61,0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="diagonal" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,154,61,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="glow-left" cx="20%" cy="20%" r="55%">
            <stop offset="0%" stopColor="rgba(201,154,61,0.18)" />
            <stop offset="60%" stopColor="rgba(201,154,61,0.05)" />
            <stop offset="100%" stopColor="rgba(201,154,61,0)" />
          </radialGradient>
          <radialGradient id="glow-right" cx="85%" cy="10%" r="40%">
            <stop offset="0%" stopColor="rgba(201,154,61,0.1)" />
            <stop offset="100%" stopColor="rgba(201,154,61,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#diagonal)" />
        <rect width="100%" height="100%" fill="url(#glow-left)" />
        <rect width="100%" height="100%" fill="url(#glow-right)" />
      </svg>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-36 pb-0">

        {/* H1 + Subheadline — volle Breite */}
        <div className="mb-8 md:mb-16">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#C99A3D' }}>
            High-Performance Coaching
          </p>
          <h1
            className="font-barlow font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ color: '#E6E8EB' }}
          >
            Dein Körper läuft nicht schlechter,{' '}
            <br className="hidden md:block" />
            weil du älter bist —
            <br />
            <span style={{
              background: 'linear-gradient(to top, #8A5D1F 0%, #C99A3D 35%, #F2D27A 70%, #C99A3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              sondern weil dein System es zulässt.
            </span>
          </h1>
          <p
            className="font-inter text-lg md:text-xl leading-relaxed max-w-3xl"
            style={{ color: '#A1A9B3' }}
          >
            Ich helfe Selbstständigen und Unternehmern ab 30, ihr metabolisches System so einzustellen,
            dass Fettabbau, stabile Energie und mentale Klarheit keine Frage der Disziplin mehr sind —
            sondern das Ergebnis der richtigen Daten.
          </p>
        </div>

        {/* Video links — Bullets rechts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* VSL Placeholder */}
          <div className="relative w-full rounded-xl overflow-hidden" style={{ border: '1px solid rgba(201, 154, 61, 0.25)', minHeight: '300px' }}>
            <Image
              src="/images/vsl-placeholder.png"
              alt="Fabian Schönle – Performance Coaching"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(13, 23, 33, 0.35)' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ border: '1px solid rgba(201, 154, 61, 0.6)', background: 'rgba(13, 23, 33, 0.5)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C99A3D">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bullet Points + CTA */}
          <div className="flex flex-col">
            <ul className="flex flex-col gap-4 md:gap-6">
              {bullets.map((item, i) => (
                <li key={i} className="flex gap-3 md:gap-4 items-start">
                  <span className="mt-1 flex-shrink-0">
                    <svg width="32" height="32" className="md:w-[38px] md:h-[38px]" viewBox="0 0 38 38" fill="none">
                      <defs>
                        <linearGradient id={`gold-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8A5D1F" />
                          <stop offset="45%" stopColor="#C99A3D" />
                          <stop offset="75%" stopColor="#F2D27A" />
                          <stop offset="100%" stopColor="#C99A3D" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
                        fill={`url(#gold-${i})`}
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-barlow font-semibold text-xl md:text-2xl mb-1 md:mb-2" style={{ color: '#E6E8EB' }}>
                      {item.headline}
                    </p>
                    <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A1A9B3' }}>
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button — eingerückt wie Bullet-Text */}
            <div className="mt-8 md:pl-[54px]">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-barlow font-semibold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #8A5D1F 0%, #C99A3D 50%, #F2D27A 100%)',
                  color: '#0D1721',
                  boxShadow: '0 4px 24px rgba(201,154,61,0.25)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 32px rgba(201,154,61,0.4)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(201,154,61,0.25)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Kostenloses Erstgespräch buchen
              </a>
              <p className="mt-3 font-inter text-xs" style={{ color: '#5B6773' }}>
                Kein Risiko · Keine Verpflichtung · 30 Minuten
              </p>
            </div>
          </div>

        </div>

        {/* Testimonial Ticker — innerhalb des Hero-Hintergrunds */}
        <div className="mt-16 -mx-4 md:-mx-8 relative overflow-hidden py-5"
          style={{
            borderTop: '1px solid rgba(201,154,61,0.07)',
            borderBottom: '1px solid rgba(201,154,61,0.07)',
            background: 'linear-gradient(to bottom, rgba(201,154,61,0.03), transparent)',
          }}
        >
          {/* Fade links */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0D1721, transparent)' }} />
          {/* Fade rechts */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0D1721, transparent)' }} />

          <div className="flex gap-12 whitespace-nowrap animate-ticker">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <span style={{ color: '#C99A3D', fontSize: '14px' }}>◆</span>
                <span className="font-barlow font-semibold text-base" style={{ color: '#E6E8EB' }}>
                  {item.name}
                </span>
                <span className="font-inter text-sm" style={{ color: '#5B6773' }}>
                  {item.role}
                </span>
                <span className="font-inter text-sm" style={{ color: '#C99A3D' }}>
                  — {item.result}
                </span>
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-ticker {
              animation: ticker 20s linear infinite;
            }
            .animate-ticker:hover {
              animation-play-state: paused;
            }
            @media (min-width: 768px) {
              .animate-ticker {
                animation-duration: 35s;
              }
            }
          `}</style>
        </div>

      </section>

      {/* Smooth Fade zum nächsten Abschnitt */}
      <div
        className="pointer-events-none h-20"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #0D1721 100%)' }}
      />
    </div>
  )
}
