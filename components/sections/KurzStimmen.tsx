import Image from 'next/image'

export type KurzStimme = {
  /** Ein Satz aus der Bewertung — wörtlich, nicht zusammengefasst */
  zitat: string
  name: string
  /** Beruf oder Rolle, wie in der Bewertung angegeben */
  beruf: string
  /** Das Ergebnis in wenigen Worten, z. B. „−16 kg Körpergewicht" */
  ergebnis: string
  /** Rundes Porträt; ohne Bild stehen die Initialen */
  bild?: string
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/** „Robert Raschkov" → „RR". Fällt ein, wenn kein Porträt vorliegt. */
function initialen(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((t) => t[0])
    .join('')
}

/**
 * Vier kurze Stimmen direkt unter dem Hero: je ein Satz, das Ergebnis und wer
 * das sagt. Bewusst knapp — an dieser Stelle liest niemand einen Absatz, hier
 * geht es nur darum, dass die Überschrift darüber nicht allein steht.
 *
 * Die ausführlichen Bewertungen stehen weiter unten auf der Seite.
 */
export default function KurzStimmen({ stimmen }: { stimmen: KurzStimme[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4 md:pt-14 md:pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 animate-fade-up">
        {stimmen.map((s) => (
          <figure
            key={s.name}
            className="rounded-2xl p-5 md:p-6 flex flex-col"
            style={{
              background: 'linear-gradient(135deg, rgba(13,24,41,0.75) 0%, rgba(11,21,37,0.6) 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(232,212,154,0.05), 0 0 24px rgba(201,168,76,0.12)',
            }}
          >
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={goldText}>
              {s.ergebnis}
            </p>

            <blockquote className="flex-1">
              <p className="font-inter text-sm leading-relaxed" style={{ color: '#D4D9DF' }}>
                &bdquo;{s.zitat}&ldquo;
              </p>
            </blockquote>

            <figcaption
              className="flex items-center gap-3 mt-5 pt-4"
              style={{ borderTop: '1px solid rgba(201,168,76,0.18)' }}
            >
              <span
                className="relative flex items-center justify-center rounded-full overflow-hidden flex-shrink-0"
                style={{
                  width: 38,
                  height: 38,
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.45)',
                }}
              >
                {s.bild ? (
                  <Image src={s.bild} alt={s.name} width={320} height={320} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-barlow font-bold text-sm" style={{ color: '#E8D49A' }}>
                    {initialen(s.name)}
                  </span>
                )}
              </span>

              <span className="min-w-0">
                <span className="block font-barlow font-bold text-base leading-tight" style={{ color: '#E6E8EB' }}>
                  {s.name}
                </span>
                <span className="block font-inter text-xs leading-snug" style={{ color: '#7B8792' }}>
                  {s.beruf}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
