const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/** Stunden einer Woche — Bezugsgröße für beide Balken */
const WOCHE = 168
/** Obergrenze von „1–2 Std.“, damit der kurze Balken nicht kleiner wirkt als nötig */
const MIT_TRAINER = 2

/**
 * Online statt Studio: links die Überschrift, rechts eine Karte, die das
 * Argument in Zahlen zeigt — 166 von 168 Wochenstunden bist du ohne Personal
 * Trainer, mit Online-Coaching ist die Begleitung die ganze Woche da.
 *
 * Die Balken sind maßstabsgetreu zur Woche: Der kurze ist mit 2 von 168
 * Stunden wirklich nur ein Strich. Gerade das macht den Unterschied sichtbar.
 */
export default function OnlineStattStudio({
  label = 'Online statt Studio',
  headline = 'Warum dir Online-Personal-Coaching',
  headlineAccent = 'mehr Zeit und Energie lässt',
  intro = 'Ein Personal Trainer sieht dich ein bis zwei Stunden pro Woche. Deine Ergebnisse entstehen in den übrigen 166.',
}: {
  label?: string
  headline?: string
  headlineAccent?: string
  intro?: string
}) {
  return (
    <section className="relative" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="animate-fade-up grid grid-cols-1 lg:grid-cols-[1.23fr_1fr] gap-10 lg:gap-14 xl:gap-16 lg:items-center">

          {/* Spalten und Schrift so abgestimmt, dass die Überschrift ab 1280 px
              wie in der Vorlage bricht: „Warum dir Online-Personal-“ /
              „Coaching mehr Zeit und Energie“ / „lässt“. */}
          <div>
            <p className="font-inter text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5 md:mb-6" style={goldText}>
              {label}
            </p>

            <h2
              className="font-barlow font-bold text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] leading-[1.1] mb-6 md:mb-8"
              style={{ color: '#E6E8EB' }}
            >
              {headline} <span style={goldText}>{headlineAccent}</span>
            </h2>

            <p className="font-inter text-base md:text-xl leading-relaxed max-w-2xl" style={{ color: '#C6CDD5' }}>
              {intro}
            </p>
          </div>

          {/* Linksbündig auch auf dem Handy: Beschriftung links und Wert rechts
              gehören in eine Zeile, zentriert fiele das auseinander. */}
          <div
            className="rounded-2xl p-6 md:p-8 text-left"
            style={{
              background: 'linear-gradient(160deg, #0F1B30 0%, #0B1525 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 50px rgba(0,0,0,0.3)',
            }}
          >
            <p className="font-barlow font-bold text-5xl md:text-6xl leading-none mb-3" style={goldText}>
              {WOCHE - MIT_TRAINER} von {WOCHE}
            </p>
            <p className="font-inter text-sm md:text-base mb-8" style={{ color: '#AEB5BE' }}>
              Stunden pro Woche bist du ohne Personal Trainer
            </p>

            <div className="flex flex-col gap-6">
              <Balken
                beschriftung="Mit Personal Trainer"
                wert="1–2 Std."
                anteil={MIT_TRAINER / WOCHE}
              />
              <Balken
                beschriftung="Mit Online-Personal-Coaching"
                wert="die ganze Woche"
                anteil={1}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Balken({ beschriftung, wert, anteil }: { beschriftung: string; wert: string; anteil: number }) {
  return (
    <div>
      {/* Passt beides nicht in eine Zeile (schmale Handys), rutscht der Wert
          darunter, statt dass die Beschriftung mitten im Wort umbricht. */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-2.5 font-inter text-sm md:text-base" style={{ color: '#AEB5BE' }}>
        <span className="whitespace-nowrap">{beschriftung}</span>
        <span className="whitespace-nowrap">{wert}</span>
      </div>
      <div
        className="h-3.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.07)' }}
        role="img"
        aria-label={`${beschriftung}: ${wert}`}
      >
        {/* Mindestbreite 6 px, damit der kurze Balken als Strich sichtbar bleibt */}
        <div
          className="h-full rounded-full"
          style={{
            width: `max(6px, ${anteil * 100}%)`,
            background: 'linear-gradient(90deg, #C9A84C, #E8D49A)',
          }}
        />
      </div>
    </div>
  )
}
