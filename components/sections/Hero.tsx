'use client'

import { useRef, useState } from 'react'

const tickerItems = [
  { name: 'Matthias K.', role: 'Director Global Aftermarket', result: '−6 kg + Trainingsoptimierung' },
  { name: 'Hagen F.', role: 'Unternehmer', result: '−13 kg' },
  { name: 'Gregory N.', role: 'Wealth Management', result: '−13 kg trotz 70-h-Woche' },
  { name: 'Axel K.', role: 'Geschäftsführer', result: '−4 kg + Ernährungsoptimierung für Wettkampf' },
  { name: 'Robert R.', role: 'Unternehmer', result: '−16 kg, mehr Energie & Fokus im Alltag' },
  { name: 'Michael C.', role: 'Selbstständiger', result: '−8 kg + Trainingsoptimierung' },
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    videoRef.current?.play()
    setPlaying(true)
  }

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
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="diagonal" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="glow-left" cx="20%" cy="20%" r="55%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
            <stop offset="60%" stopColor="rgba(201,168,76,0.05)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <radialGradient id="glow-right" cx="85%" cy="10%" r="40%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.1)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#diagonal)" />
        <rect width="100%" height="100%" fill="url(#glow-left)" />
        <rect width="100%" height="100%" fill="url(#glow-right)" />
      </svg>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-36 pb-0">

        {/* H1 + Subheadline — volle Breite */}
        <div className="mb-8 md:mb-16 text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
            <span style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              sondern weil dein System es zulässt.
            </span>
          </h1>
          <p
            className="font-inter text-lg md:text-xl leading-relaxed max-w-5xl mx-auto"
            style={{ color: '#A1A9B3' }}
          >
            Ich helfe Selbstständigen und Unternehmern ab 30, ihr metabolisches System so einzustellen,
            dass Fettabbau, stabile Energie und mentale Klarheit keine Frage der Disziplin mehr sind —
            sondern das Ergebnis der richtigen Daten.
          </p>
        </div>

        {/* Video links — Bullets rechts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* VSL */}
          <div className="relative rounded-xl overflow-hidden w-full aspect-video md:aspect-auto md:min-h-[400px]" style={{ border: '1px solid rgba(201, 168, 76, 0.25)', background: '#060E1F' }}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              controls={playing}
              playsInline
              preload="metadata"
            >
              <source src="/videos/vsl.mp4" type="video/mp4" />
            </video>
            {!playing && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                style={{ background: 'rgba(13, 23, 33, 0.35)' }}
                onClick={handlePlay}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                  style={{
                    border: '1.5px solid rgba(201, 168, 76, 0.7)',
                    background: 'rgba(13, 23, 33, 0.6)',
                    boxShadow: '0 0 40px rgba(201,168,76,0.2)',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9A84C">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </div>
              </div>
            )}
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
                          <stop offset="0%" stopColor="#B8832A" />
                          <stop offset="45%" stopColor="#C9A84C" />
                          <stop offset="75%" stopColor="#F2D27A" />
                          <stop offset="100%" stopColor="#C9A84C" />
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
                className="btn-shine inline-flex items-center gap-3 px-7 py-4 rounded-xl font-barlow font-semibold text-lg"
                style={{
                  background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
                  color: '#060E1F',
                  boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 32px rgba(201,168,76,0.4)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(201,168,76,0.25)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Performance Analyse buchen
              </a>
              <p className="mt-3 font-inter text-xs" style={{ color: '#5B6773' }}>
                Kein Risiko · Keine Verpflichtung · 30 Minuten
              </p>
            </div>
          </div>

        </div>

        {/* Testimonial Ticker — Mini-Karten */}
        <div className="mt-16 -mx-4 md:-mx-8 relative overflow-hidden py-6">
          {/* Fade links */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #060E1F, transparent)' }} />
          {/* Fade rechts */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #060E1F, transparent)' }} />

          <div className="flex gap-4 animate-ticker" style={{ width: 'max-content' }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div
                key={i}
                className="card-shine flex-shrink-0 flex flex-col justify-center px-5 py-4 rounded-xl"
                style={{
                  background: 'rgba(201,168,76,0.04)',
                  border: '1.5px solid rgba(201,168,76,0.28)',
                  borderLeft: '4px solid rgba(201,168,76,0.75)',
                  boxShadow: '0 0 12px rgba(201,168,76,0.12)',
                  minWidth: 220,
                  maxWidth: 260,
                }}
              >
                <p className="font-barlow font-bold text-base leading-tight mb-0.5" style={{ color: '#E6E8EB' }}>
                  {item.name}
                </p>
                <p className="font-inter text-xs mb-2" style={{ color: '#5B6773' }}>
                  {item.role}
                </p>
                <p className="font-inter text-sm font-semibold" style={{ background: 'linear-gradient(90deg, #C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {item.result}
                </p>
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-ticker {
              animation: ticker 30s linear infinite;
            }
            .animate-ticker:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

      </section>

      {/* Smooth Fade zum nächsten Abschnitt */}
      <div
        className="pointer-events-none h-20"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #060E1F 100%)' }}
      />
    </div>
  )
}
