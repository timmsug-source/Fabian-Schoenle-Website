'use client'

const testimonials = [
  { name: 'Markus R.', role: 'Unternehmer', result: '−11 kg Körperfett in 10 Wochen' },
  { name: 'Stefan K.', role: 'Geschäftsführer', result: 'Energie endlich wieder stabil den ganzen Tag' },
  { name: 'Jonas M.', role: 'Selbstständiger', result: '+7 kg Muskelmasse in 4 Monaten' },
  { name: 'Tobias W.', role: 'Führungskraft', result: 'Bauchfett weg, das seit Jahren da war' },
  { name: 'Felix B.', role: 'Unternehmer', result: 'Schlafen besser als mit 25' },
  { name: 'Daniel H.', role: 'CEO', result: 'Testosteron auf Optimalniveau gebracht' },
  { name: 'Michael S.', role: 'Selbstständiger', result: '−9 kg in 8 Wochen ohne Verzicht' },
  { name: 'Lukas P.', role: 'Geschäftsführer', result: 'Mentale Klarheit auf einem neuen Level' },
]

// Doppelt für nahtloses Looping
const items = [...testimonials, ...testimonials]

export default function TestimonialTicker() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-2">
    <div
      className="relative overflow-hidden py-5"
      style={{
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        background: 'linear-gradient(to bottom, rgba(201,168,76,0.03), transparent)',
      }}
    >
      {/* Fade-Masken links und rechts */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #060E1F, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #060E1F, transparent)' }} />

      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            {/* Gold-Punkt Trenner */}
            <span style={{ color: '#C9A84C', fontSize: '18px' }}>◆</span>
            <span className="font-barlow font-semibold text-base" style={{ color: '#E6E8EB' }}>
              {item.name}
            </span>
            <span className="font-inter text-sm" style={{ color: '#5B6773' }}>
              {item.role}
            </span>
            <span className="font-inter text-sm" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
          animation: ticker 35s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
    </div>
  )
}
