import { CALENDLY_URL } from '@/lib/constants'

const andereItems = [
  {
    titel: 'Generische Ernährungspläne',
    text: 'Gleiche Makros für jeden Kunden — ohne Rücksicht auf Hormonstatus, Genetik oder Lebensalltag.',
  },
  {
    titel: 'Training nach Schema F',
    text: '3×10 Wiederholungen, wöchentlich wiederholt. Kein Bezug zu deiner Regenerationsfähigkeit oder deinem Cortisolspiegel.',
  },
  {
    titel: 'Keine Diagnostik',
    text: 'Annahmen statt Daten. Was für den einen funktioniert, soll auch für dich funktionieren — wird aber meistens nicht.',
  },
  {
    titel: 'Stagnation nach 4–6 Wochen',
    text: 'Kurzfristige Effekte durch Reizüberflutung. Sobald der Körper sich angepasst hat, geht nichts mehr weiter.',
  },
  {
    titel: 'Kein System, nur Tipps',
    text: 'Einzelne Maßnahmen ohne Verbindung zueinander. Schlaf, Training, Ernährung werden isoliert betrachtet.',
  },
]

const ichItems = [
  {
    titel: 'Blut- & DNA-Analyse als Basis',
    text: 'Bevor wir irgendetwas ändern, verstehen wir, wie dein biologisches System gerade wirklich funktioniert.',
  },
  {
    titel: 'Training nach Hormonsystem',
    text: 'Reiz, Volumen und Frequenz werden auf deinen Testosteronspiegel, deine HRV und deine Regeneration abgestimmt.',
  },
  {
    titel: 'Individuelle Ernährungsstrategie',
    text: 'Basierend auf deiner Insulinsensitivität, deinen Mikronährstoffdefiziten und deinem genetischen Stoffwechseltyp.',
  },
  {
    titel: 'Kontinuierliches Tracking',
    text: 'Über eine App behalten wir deine wichtigsten Parameter im Blick. Was funktioniert, wird verstärkt — der Rest angepasst.',
  },
  {
    titel: 'Das ganze System gleichzeitig',
    text: 'Schlaf, Stresssystem, Hormone, Ernährung und Training greifen ineinander — kein blinder Fleck, kein isolierter Tipp.',
  },
]

function XIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
      style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 2l6 6M8 2l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
      style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.35)' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function VergleichSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#101C28' }}>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C99A3D' }}>
            Der Unterschied
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            Andere verkaufen dir einen Plan.<br className="hidden md:block" /> Ich stelle dein System ein.
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-xl" style={{ color: '#5B6773' }}>
            Was High-Performance Coaching von klassischem Fitness-Coaching unterscheidet.
          </p>
        </div>

        {/* Karten-Duo */}
        <div className="flex flex-col lg:flex-row lg:items-stretch animate-fade-up" style={{ animationDelay: '80ms' }}>

          {/* ── Linke Karte: Andere ── */}
          <div
            className="relative flex-1 rounded-2xl flex flex-col p-8 md:p-10"
            style={{
              background: 'rgba(15,15,20,0.7)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <h3 className="font-barlow font-bold text-2xl text-center mb-8" style={{ color: '#6B7280' }}>
              Klassisches Fitness-Coaching
            </h3>

            <ul className="flex flex-col gap-6 flex-1">
              {andereItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XIcon />
                  <div>
                    <p className="font-inter font-semibold text-sm mb-0.5" style={{ color: '#D1D5DB' }}>{item.titel}</p>
                    <p className="font-inter text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Rechte Karte: Fabian Schönle ── */}
          <div
            className="relative flex-1 rounded-2xl flex flex-col p-8 md:p-10 mt-4 lg:mt-0 lg:-ml-4 lg:z-10"
            style={{
              background: 'linear-gradient(135deg, #1A2E40 0%, #0F2030 100%)',
              border: '1px solid rgba(52,211,153,0.25)',
              boxShadow: '0 0 60px rgba(52,211,153,0.08), 0 24px 60px rgba(0,0,0,0.5)',
              transform: 'scale(1.03)',
              transformOrigin: 'right center',
            }}
          >
            {/* Badge oben rechts */}
            <div
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center z-20"
              style={{
                background: 'linear-gradient(135deg, #34D399, #059669)',
                boxShadow: '0 4px 20px rgba(52,211,153,0.4)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="font-barlow font-bold text-2xl text-center mb-8" style={{ color: '#E6E8EB' }}>
              FS-Performance Methode
            </h3>

            <ul className="flex flex-col gap-6 flex-1">
              {ichItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <p className="font-inter font-semibold text-sm mb-0.5" style={{ color: '#F9FAFB' }}>{item.titel}</p>
                    <p className="font-inter text-sm leading-relaxed" style={{ color: '#8A96A3' }}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Footer */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #8A5D1F 0%, #C99A3D 50%, #F2D27A 100%)',
                color: '#0D1721',
                boxShadow: '0 4px 24px rgba(201,154,61,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Jetzt Erstgespräch buchen
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
