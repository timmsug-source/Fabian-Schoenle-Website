import React, { Fragment } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const symptoms = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Waage — Bauchfett */}
        <rect x="16" y="4" width="4" height="20" rx="2" fill="url(#g0)"/>
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill="url(#g0)"/>
        <path d="M6 11 L2 20 Q6 24 10 20 L6 11Z" fill="url(#g0)"/>
        <path d="M30 11 L26 20 Q30 24 34 20 L30 11Z" fill="url(#g0)"/>
        <rect x="12" y="24" width="12" height="3" rx="1.5" fill="url(#g0)"/>
      </svg>
    ),
    headline: 'Bauchfett, das bleibt',
    body: 'Egal was du isst oder wie oft du trainierst — das Bauchfett sitzt hartnäckig und wächst langsam weiter.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Batterie leer */}
        <rect x="2" y="10" width="28" height="16" rx="3" fill="url(#g1)"/>
        <rect x="30" y="14" width="4" height="8" rx="2" fill="url(#g1)"/>
        <rect x="5" y="13" width="6" height="10" rx="1.5" fill="#060E1F" opacity="0.5"/>
        <rect x="13" y="13" width="6" height="10" rx="1.5" fill="#060E1F" opacity="0.5"/>
        <rect x="21" y="13" width="6" height="10" rx="1.5" fill="#060E1F" opacity="0.5"/>
      </svg>
    ),
    headline: 'Energie, die wegbricht',
    body: 'Nachmittags ist der Fokus weg. Du funktionierst — aber auf Sparflamme.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Mond */}
        <path d="M22 6 C14 6 8 12 8 20 C8 27 14 32 22 32 C26 32 29 30 31 27 C27 28 21 26 18 22 C15 18 15 12 18 8 C19 7 20.5 6.2 22 6Z" fill="url(#g2)"/>
        <circle cx="28" cy="9" r="2" fill="url(#g2)"/>
        <circle cx="32" cy="15" r="1.5" fill="url(#g2)"/>
        <circle cx="26" cy="5" r="1" fill="url(#g2)"/>
      </svg>
    ),
    headline: 'Schlaf, der nicht erholt',
    body: 'Du schläfst — aber wachst morgens nicht wirklich ausgeruht auf.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Hantel */}
        <rect x="14" y="16" width="8" height="4" rx="2" fill="url(#g3)"/>
        <rect x="6" y="12" width="8" height="12" rx="3" fill="url(#g3)"/>
        <rect x="22" y="12" width="8" height="12" rx="3" fill="url(#g3)"/>
        <rect x="2" y="14" width="6" height="8" rx="3" fill="url(#g3)"/>
        <rect x="28" y="14" width="6" height="8" rx="3" fill="url(#g3)"/>
      </svg>
    ),
    headline: 'Training ohne Fortschritt',
    body: 'Du investierst Zeit ins Training, aber der Körper reagiert kaum noch darauf.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Gehirn / Kopf mit Blitz */}
        <path d="M18 4 C11 4 6 9 6 15 C6 19 8 22 11 24 L11 28 L25 28 L25 24 C28 22 30 19 30 15 C30 9 25 4 18 4Z" fill="url(#g4)"/>
        <path d="M20 10 L15 18 L19 18 L16 26 L22 16 L18 16 L20 10Z" fill="#060E1F" opacity="0.35"/>
      </svg>
    ),
    headline: 'Mentale Leistung lässt nach',
    body: 'Konzentration, Entscheidungsfreude und Drive fühlen sich nicht mehr wie früher an.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Herzschlag-Linie / Stimmungswelle */}
        <path d="M2 20 L8 20 L11 10 L15 28 L19 14 L22 22 L26 16 L29 20 L34 20" stroke="url(#g5)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Stimmung & Antrieb schwanken',
    body: 'Manche Tage läuft es — andere nicht. Ein verlässliches Grundniveau fehlt.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Spiegel */}
        <rect x="10" y="3" width="16" height="22" rx="8" fill="url(#g6)"/>
        <rect x="12" y="5" width="12" height="18" rx="6" fill="#060E1F" opacity="0.25"/>
        <rect x="14" y="25" width="8" height="3" rx="1.5" fill="url(#g6)"/>
        <rect x="16" y="28" width="4" height="5" rx="2" fill="url(#g6)"/>
      </svg>
    ),
    headline: 'Körper fühlt sich fremd an',
    body: 'Hemden spannen, der Spiegel zeigt jemanden, der nicht dem eigenen Anspruch entspricht.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Kreisende Pfeile */}
        <path d="M18 6 C11 6 6 11 6 18" stroke="url(#g7)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M6 18 C6 25 11 30 18 30" stroke="url(#g7)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M18 30 C25 30 30 25 30 18" stroke="url(#g7)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M30 18 C30 11 25 6 18 6" stroke="url(#g7)" strokeWidth="3.5" strokeLinecap="round"/>
        <polygon points="18,2 14,8 22,8" fill="url(#g7)"/>
        <polygon points="18,34 22,28 14,28" fill="url(#g7)"/>
        <path d="M13 13 L23 23 M23 13 L13 23" stroke="url(#g7)" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    headline: 'Nichts wirkt dauerhaft',
    body: 'Du hast vieles versucht — aber kein Ansatz hat sich wirklich festgesetzt.',
  },
]

const GOLD = 'rgba(201,168,76,0.4)'
const GOLD_DOT = '#C9A84C'

function Card({ item, patternId }: { item: typeof symptoms[0]; patternId: string }) {
  return (
    <div
      className="relative flex flex-col gap-3 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
        border: '1px solid rgba(201,168,76,0.15)',
        padding: '24px',
        minHeight: 180,
      }}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <div className="relative flex items-center gap-3">
        <span className="flex-shrink-0">{item.icon}</span>
        <h3 className="font-barlow font-bold text-lg leading-tight" style={{ color: '#E6E8EB' }}>
          {item.headline}
        </h3>
      </div>
      <p className="relative font-inter text-sm leading-relaxed" style={{ color: '#7A8898' }}>
        {item.body}
      </p>
    </div>
  )
}

function HConnector() {
  return (
    <div className="hidden md:flex items-center flex-shrink-0" style={{ width: 28 }}>
      <div style={{ flex: 1, height: 1, background: GOLD }} />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function VConnectors() {
  return (
    <div className="hidden md:grid" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 28px 1fr 28px 1fr 28px 1fr', height: 28 }}>
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          className="flex flex-col items-center"
          style={{ gridColumn: i === 0 ? 1 : i === 1 ? 3 : i === 2 ? 5 : 7 }}
        >
          <div style={{ flex: 1, width: 1, background: GOLD }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD_DOT, flexShrink: 0 }} />
          <div style={{ flex: 1, width: 1, background: GOLD }} />
        </div>
      ))}
    </div>
  )
}

export default function SymptomGrid() {
  return (
    <section className="relative" style={{ background: 'transparent' }}>
      {/* Fade unten — Grid läuft sanft in nächste Sektion */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '30%', background: 'linear-gradient(to bottom, transparent, #060E1F)', zIndex: 1 }} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Kennst du das?
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            Wenn dein Körper nicht mehr so<br className="hidden md:block" /> reagiert wie früher
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#5B6773' }}>
            Diese Symptome begegnen mir im High-Performance Coaching immer wieder — kein Zufall, sondern Signale eines Systems, das neu kalibriert werden muss.
          </p>
        </div>

        {/* 2 × 4 verbundenes Grid */}
        <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>

          {/* Reihe 1 */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-0">
            {symptoms.slice(0, 4).map((item, i) => (
              <Fragment key={i}>
                <div className="flex-1">
                  <Card item={item} patternId={`grid-pattern-${i}`} />
                </div>
                {i < 3 && <HConnector />}
              </Fragment>
            ))}
          </div>

          {/* Reihe 2 */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-0 mt-3 md:mt-6">
            {symptoms.slice(4).map((item, i) => (
              <Fragment key={i}>
                <div className="flex-1">
                  <Card item={item} patternId={`grid-pattern-${i + 4}`} />
                </div>
                {i < 3 && <HConnector />}
              </Fragment>
            ))}
          </div>

        </div>

        {/* CTA Banner */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 md:px-8 animate-fade-up"
          style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '12px', animationDelay: '200ms' }}
        >
          <div>
            <p className="font-barlow font-semibold text-lg md:text-xl" style={{ color: '#E6E8EB' }}>Erkennst du dich wieder?</p>
            <p className="font-inter text-sm mt-0.5" style={{ color: '#5B6773' }}>Lass uns gemeinsam herausfinden, was dein System gerade limitiert.</p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-inter font-semibold text-sm"
            style={{ border: '1px solid rgba(201,168,76,0.6)', background: 'rgba(201,168,76,0.06)' }}
          >
            <span style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Performance Analyse buchen
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
