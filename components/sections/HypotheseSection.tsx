import Image from 'next/image'

const paragraphs = [
  'Mehr Disziplin. Strengere Diät. Noch ein Fitnessprogramm. Noch eine App. Für Selbstständige und Unternehmer ab 30 ist das der typische Weg — und er führt fast immer in dieselbe Sackgasse.',
  'Kurzfristig passiert etwas. Mittelfristig stagniert alles wieder. Und irgendwann entsteht der Glaube, dass der eigene Körper einfach nicht mehr so funktioniert wie früher.',
  'Das stimmt nicht.',
  'Das eigentliche Problem ist nicht fehlende Disziplin — es ist, dass die meisten Ansätze auf Annahmen basieren, nicht auf Daten. Ein Ernährungsplan, der für den Durchschnitt gemacht wurde. Ein Trainingsprogramm, das nicht weiß, wie dein Hormonsystem gerade steht. Supplements, die vielleicht helfen — oder vielleicht auch nicht.',
  'Wenn Stoffwechsel, Hormone, Schlaf und Stresssystem nicht sauber zusammenspielen, kämpft dein Körper gegen dich — egal wie viel Aufwand du betreibst.',
]

export default function HypotheseSection() {
  return (
    <section style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="animate-fade-up flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-24">

          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Die Wahrheit
            </p>

            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-10" style={{ color: '#E6E8EB' }}>
              Warum deine Ansätze bisher<br className="hidden md:block" /> keine Ergebnisse lieferten
            </h2>

            <div
              className="mb-10"
              style={{ height: 1, background: 'linear-gradient(to right, rgba(201,168,76,0.4), transparent)' }}
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

          {/* Right: Kreislauf-Grafik + Text */}
          <div className="flex flex-col justify-center w-full lg:w-[460px] flex-shrink-0">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ border: '1.5px solid rgba(201,168,76,0.35)', boxShadow: '0 0 60px rgba(201,168,76,0.18)' }}
            >
              <Image
                src="/images/FS-Kreislauf.png"
                alt="Der Teufelskreis: Mehr Disziplin, radikale Ansätze, Heißhunger, Jo-Jo-Effekt, Frustration, Stress und hormonelle Disbalance"
                width={1254}
                height={1254}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>

            <div
              className="mt-6 rounded-2xl px-6 py-6"
              style={{
                background: 'linear-gradient(135deg, rgba(13,24,41,0.82) 0%, rgba(11,21,37,0.76) 100%)',
                border: '1.5px solid rgba(201,168,76,0.3)',
                boxShadow: '0 0 40px rgba(201,168,76,0.1)',
              }}
            >
              <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#8A96A3' }}>
                Leistungsorientierte Menschen wollen ihr Problem mit mehr Disziplin lösen, weil sie das aus
                ihrem beruflichen Leben gewohnt sind. Dadurch wählen sie radikale Ansätze, die zu Heißhunger
                und Jo-Jo-Effekt führen — und dann entsteht Frustration, die sich durch mehr Stress und damit
                ein hormonelles Ungleichgewicht (Testosteron sinkt usw.) äußert. Die meisten lassen dann einige
                Monate vergehen und fangen mit dem nächsten Motivationsschub und noch mehr Disziplin wieder von
                vorne an…
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
