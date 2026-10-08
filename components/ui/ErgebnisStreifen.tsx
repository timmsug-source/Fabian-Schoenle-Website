'use client'

/**
 * Laufender Streifen mit Kundenergebnissen (Gewicht, Name, Beruf). Steht im
 * Hero der Startseite und unter dem Hero von /abnehmcoaching. Die Zahlen hier
 * muessen zu den Fallstudien passen, wer mehrere Seiten sieht, vergleicht.
 *
 * Die Liste laeuft doppelt hintereinander und wird um die Haelfte verschoben,
 * so schliesst das Ende nahtlos an den Anfang an. Hover haelt den Lauf an.
 */
const ergebnisse = [
  { name: 'Matthias K.', role: 'Director Global Aftermarket', result: '6 kg' },
  { name: 'Hagen F.', role: 'Unternehmer', result: '13 kg' },
  { name: 'Gregory N.', role: 'Wealth Management', result: '25 kg' },
  { name: 'Axel K.', role: 'Geschäftsführer', result: '4 kg' },
  { name: 'Robert R.', role: 'Unternehmer', result: '16 kg' },
  { name: 'Michael C.', role: 'Selbstständiger', result: '8 kg' },
]

export default function ErgebnisStreifen() {
  return (
    <div className="relative overflow-hidden py-6">
      {/* Fade links */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #060E1F, transparent)' }} />
      {/* Fade rechts */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #060E1F, transparent)' }} />

      <div className="flex gap-4 animate-ticker" style={{ width: 'max-content' }}>
        {[...ergebnisse, ...ergebnisse].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center gap-1.5 px-6 py-4 rounded-xl"
            style={{
              background: 'rgba(201,168,76,0.04)',
              border: '2px solid rgba(201,168,76,0.35)',
              boxShadow: '0 0 20px rgba(201,168,76,0.22)',
              minWidth: 230,
            }}
          >
            {/* Obere Zeile: Gewicht + Name */}
            <span className="flex items-center gap-2.5">
              <span className="flex items-center gap-1 font-barlow font-bold text-xl leading-none" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                {item.result}
              </span>
              <span className="w-px h-4" style={{ background: 'rgba(201,168,76,0.3)' }} />
              <span className="font-barlow font-bold text-base leading-none whitespace-nowrap" style={{ color: '#E6E8EB' }}>
                {item.name}
              </span>
            </span>
            {/* Zweite Zeile: Beruf zentriert, heller */}
            <span className="font-inter text-xs leading-tight text-center whitespace-nowrap" style={{ color: '#D2D7DD' }}>
              {item.role}
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
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
