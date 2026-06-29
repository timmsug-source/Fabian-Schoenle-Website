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
    <svg width="22" height="22" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5">
      <defs>
        <linearGradient id="x-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E8D49A" />
        </linearGradient>
      </defs>
      <path d="M8 8L30 30M30 8L8 30" stroke="url(#x-gold)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5">
      <defs>
        <linearGradient id="check-gold-v" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill="url(#check-gold-v)" />
    </svg>
  )
}

export default function VergleichSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
              className="btn-shine mt-8 flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90"
              style={{
                background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
                color: '#060E1F',
                boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Performance Analyse buchen
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
