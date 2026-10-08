import SectionLabel from '@/components/ui/SectionLabel'
import ProblemGrafik, { type ProblemGrafikName } from '@/components/ui/ProblemGrafiken'
import { CALENDLY_URL } from '@/lib/constants'

type Punkt = {
  /** Eine Zeile, z. B. „Hormone statt Kalorien" */
  titel: string
  body: string
  grafik: ProblemGrafikName
}

type ProblemStapelProps = {
  label?: string
  headline: string
  /** Zweiter Teil der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  /** Zweiter Absatz, leitet zu den Karten über */
  intro2?: string
  ctaLabel?: string
  punkte: Punkt[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Problem-Sektion in zwei Spalten: links die Einordnung, rechts die Punkte als
 * hohe Karten untereinander, jede mit ihrer Zeichnung.
 *
 * Die linke Spalte bleibt beim Scrollen stehen, solange rechts die Karten
 * durchlaufen. So steht die Frage, um die es geht, die ganze Zeit neben der
 * Antwort — statt oben aus dem Bild zu wandern.
 *
 * Auf dem Handy fällt das Stehenbleiben weg und alles läuft untereinander;
 * eine festgesetzte Spalte würde dort den halben Bildschirm blockieren.
 */
export default function ProblemStapel({
  label,
  headline,
  headlineAccent,
  intro,
  intro2,
  ctaLabel,
  punkte,
}: ProblemStapelProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Links: Überschrift, Einordnung, Aufruf */}
        <div className="lg:sticky lg:top-28 animate-fade-up">
          {label && (
            <div className="mb-5">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}

          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-[1.1] mb-6" style={{ color: '#E6E8EB' }}>
            {headline}
            {headlineAccent && (
              <>
                <br />
                <span style={goldText}>{headlineAccent}</span>
              </>
            )}
          </h2>

          {intro && (
            <p className="font-inter text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{ color: '#A6B0BA' }}>
              {intro}
            </p>
          )}
          {intro2 && (
            <p className="font-inter text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#A6B0BA' }}>
              {intro2}
            </p>
          )}

          {ctaLabel && (
            <a
              href={CALENDLY_URL}
              data-open-form="true"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center gap-3 px-7 py-4 rounded-xl font-barlow font-semibold text-lg transition-transform"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Rechts: die Punkte als Karten untereinander */}
        <div className="flex flex-col gap-6 md:gap-8">
          {punkte.map((punkt, i) => (
            <article
              key={punkt.titel}
              className="rounded-3xl overflow-hidden animate-fade-up"
              style={{
                background: 'linear-gradient(180deg, #0D1829 0%, #0A1220 100%)',
                border: '1px solid rgba(201,168,76,0.25)',
                boxShadow: '0 0 30px rgba(201,168,76,0.08)',
                animationDelay: `${i * 90}ms`,
              }}
            >
              {/* Zeichnung im Kopf der Karte, mit Lichtschein dahinter */}
              <div
                className="px-6 pt-8 pb-4 md:px-10 md:pt-10"
                style={{
                  background: 'radial-gradient(120% 90% at 50% 0%, rgba(201,168,76,0.14) 0%, rgba(13,24,41,0) 72%)',
                }}
              >
                {/* Unscharf: Die Loesung steckt schon im Bild, ist an dieser
                    Stelle aber noch nicht zu erkennen. Scharf steht dieselbe
                    Zeichnung in der Loesungssektion. */}
                <ProblemGrafik name={punkt.grafik} unscharf />
              </div>

              <div className="px-6 pb-8 md:px-10 md:pb-10">
                <h3 className="font-barlow font-bold text-2xl md:text-3xl leading-tight mb-3" style={{ color: '#E6E8EB' }}>
                  {punkt.titel}
                </h3>
                <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
                  {punkt.body}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
