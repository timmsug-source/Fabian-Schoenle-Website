'use client'

const paragraphs = [
  'Mehr Disziplin. Strengere Diät. Noch ein Fitnessprogramm. Noch eine App. Für Selbstständige und Unternehmer ab 30 ist das der typische Weg — und er führt fast immer in dieselbe Sackgasse.',
  'Kurzfristig passiert etwas. Mittelfristig stagniert alles wieder. Und irgendwann entsteht der Glaube, dass der eigene Körper einfach nicht mehr so funktioniert wie früher.',
  'Das stimmt nicht.',
  'Das eigentliche Problem ist nicht fehlende Disziplin — es ist, dass die meisten Ansätze auf Annahmen basieren, nicht auf Daten. Ein Ernährungsplan, der für den Durchschnitt gemacht wurde. Ein Trainingsprogramm, das nicht weiß, wie dein Hormonsystem gerade steht. Supplements, die vielleicht helfen — oder vielleicht auch nicht.',
  'Wenn Stoffwechsel, Hormone, Schlaf und Stresssystem nicht sauber zusammenspielen, kämpft dein Körper gegen dich — egal wie viel Aufwand du betreibst.',
]

export default function HypotheseSection() {
  return (
    <section style={{ background: '#101C28' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="animate-fade-up flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-24">

          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#C99A3D' }}>
              Die Wahrheit
            </p>

            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-10" style={{ color: '#E6E8EB' }}>
              Die meisten probieren mehr —<br className="hidden md:block" /> und kommen trotzdem nicht weiter
            </h2>

            <div
              className="mb-10"
              style={{ height: 1, background: 'linear-gradient(to right, rgba(201,154,61,0.4), transparent)' }}
            />

            <div className="flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`font-inter leading-relaxed ${p === 'Das stimmt nicht.' ? 'font-semibold text-lg md:text-xl' : 'text-base md:text-lg'}`}
                  style={{ color: p === 'Das stimmt nicht.' ? '#E6E8EB' : '#8A96A3' }}
                >
                  {p}
                </p>
              ))}
            </div>

          </div>

          {/* Right: System Pyramid */}
          <div className="flex flex-col items-center w-full lg:w-96 flex-shrink-0">
            {/* Gold top box */}
            <div
              className="w-full rounded-2xl px-6 py-6 text-center mb-3"
              style={{
                background: 'linear-gradient(135deg, #D4A84B 0%, #8A5D1F 100%)',
                boxShadow: '0 0 40px rgba(201,154,61,0.35), 0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <p className="font-barlow font-bold text-2xl tracking-wide" style={{ color: '#0D1721' }}>Dein System</p>
              <p className="font-inter text-sm mt-1 font-medium" style={{ color: 'rgba(13,23,33,0.6)' }}>Das eigentliche Fundament</p>
            </div>

            {/* Connector line */}
            <div className="flex flex-col items-center mb-3">
              <div style={{ width: 2, height: 20, background: 'linear-gradient(to bottom, rgba(201,154,61,0.6), rgba(201,154,61,0.2))' }} />
            </div>

            {/* Blue component boxes */}
            <div className="w-full flex flex-col flex-1 justify-between gap-2">
              {[
                { label: 'Hormone', sub: 'Testosteron, Cortisol, Schilddrüse' },
                { label: 'Stoffwechsel', sub: 'Insulinsensitivität, Glukose' },
                { label: 'Schlaf & Regeneration', sub: 'Tiefschlaf, HRV, Erholung' },
                { label: 'Stresssystem', sub: 'Cortisol-Rhythmus, Nervensystem' },
                { label: 'Ernährung', sub: 'Mikronährstoffe, Makros, Timing' },
                { label: 'Training', sub: 'Reiz, Volumen, Belastungssteuerung' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
                    border: '1px solid rgba(201,154,61,0.15)',
                  }}
                >
                  <p className="font-barlow font-semibold text-lg" style={{ color: '#E6E8EB' }}>{item.label}</p>
                  <p className="font-inter text-sm leading-relaxed mt-0.5" style={{ color: '#5B6773' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
