import { Fragment } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const symptoms = [
  { icon: '⚖️', headline: 'Bauchfett, das bleibt', body: 'Egal was du isst oder wie oft du trainierst — das Bauchfett sitzt hartnäckig und wächst langsam weiter.' },
  { icon: '⚡', headline: 'Energie, die wegbricht', body: 'Nachmittags ist der Fokus weg. Du funktionierst — aber auf Sparflamme.' },
  { icon: '😴', headline: 'Schlaf, der nicht erholt', body: 'Du schläfst — aber wachst morgens nicht wirklich ausgeruht auf.' },
  { icon: '🏋️', headline: 'Training ohne Fortschritt', body: 'Du investierst Zeit ins Training, aber der Körper reagiert kaum noch darauf.' },
  { icon: '🧠', headline: 'Mentale Leistung lässt nach', body: 'Konzentration, Entscheidungsfreude und Drive fühlen sich nicht mehr wie früher an.' },
  { icon: '📉', headline: 'Stimmung & Antrieb schwanken', body: 'Manche Tage läuft es — andere nicht. Ein verlässliches Grundniveau fehlt.' },
  { icon: '🪞', headline: 'Körper fühlt sich fremd an', body: 'Hemden spannen, der Spiegel zeigt jemanden, der nicht dem eigenen Anspruch entspricht.' },
  { icon: '🔄', headline: 'Nichts wirkt dauerhaft', body: 'Du hast vieles versucht — aber kein Ansatz hat sich wirklich festgesetzt.' },
]

const GOLD = 'rgba(201,154,61,0.4)'
const GOLD_DOT = '#C99A3D'

function Card({ item, patternId }: { item: typeof symptoms[0]; patternId: string }) {
  return (
    <div
      className="relative flex flex-col gap-3 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
        border: '1px solid rgba(201,154,61,0.15)',
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
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 text-base"
          style={{ background: 'rgba(201,154,61,0.1)', border: '1px solid rgba(201,154,61,0.2)' }}
        >
          {item.icon}
        </div>
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
    <section style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-inter text-sm font-medium"
            style={{ background: 'rgba(201,154,61,0.08)', border: '1px solid rgba(201,154,61,0.25)', color: '#C99A3D' }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C99A3D', display: 'inline-block' }} />
            Kennst du das?
          </div>
          <h2 className="font-barlow font-bold text-4xl md:text-6xl leading-tight max-w-3xl" style={{ color: '#E6E8EB' }}>
            Wenn dein Körper nicht mehr so reagiert wie früher
          </h2>
          <p className="font-inter text-base md:text-lg leading-relaxed max-w-2xl mt-5" style={{ color: '#5B6773' }}>
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
          style={{ border: '1px solid rgba(201,154,61,0.3)', borderRadius: '12px', animationDelay: '200ms' }}
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
            style={{ border: '1px solid rgba(201,154,61,0.5)', color: '#C99A3D', background: 'rgba(201,154,61,0.06)' }}
          >
            Kostenloses Erstgespräch buchen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
