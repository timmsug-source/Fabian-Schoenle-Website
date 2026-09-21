import { CALENDLY_URL } from '@/lib/constants'

const GOLD = 'url(#ico-gold)'

export type SymptomIcon =
  | 'bauchfett'
  | 'energie'
  | 'schlaf'
  | 'muskel'
  | 'jojo'
  | 'koerpergefuehl'
  | 'stimmung'
  | 'brainfog'
  | 'heisshunger'
  | 'ratlos'

export type Symptom = { icon: SymptomIcon; headline: string; body: string }

const ICONS: Record<SymptomIcon, React.ReactNode> = {
  bauchfett: (
      <>
        <circle cx="14" cy="14" r="9" />
        <circle cx="14" cy="14" r="3.2" />
      </>
    ),
  energie: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2.5" />
        <line x1="23" y1="12" x2="23" y2="16" />
        <line x1="7" y1="11" x2="7" y2="17" />
      </>
    ),
  schlaf: (
      <>
        <path d="M20 15.5A8 8 0 0 1 10.5 6 8 8 0 1 0 20 15.5Z" />
        <path d="M20 4l0.6 1.8L22.4 6l-1.8 0.6L20 8.4l-0.6-1.8L17.6 6l1.8-0.2Z" />
      </>
    ),
  muskel: (
      <>
        <path d="M4 10v8M8 8v12M20 8v12M24 10v8" />
        <line x1="8" y1="14" x2="20" y2="14" />
      </>
    ),
  jojo: (
      <>
        <path d="M22 5a10 10 0 1 0 2.5 8" />
        <polyline points="24.5 5 24.5 11 18.5 11" />
      </>
    ),
  koerpergefuehl: (
      <>
        <rect x="8" y="3" width="12" height="17" rx="6" />
        <line x1="14" y1="20" x2="14" y2="25" />
      </>
    ),
  stimmung: <path d="M2 14h4l3-8 5 16 3-10 2 4h7" />,
  brainfog: (
      <>
        <path d="M14 4a6 6 0 0 0-6 6c-2 1-2 4 0 5v4a3 3 0 0 0 6 0" />
        <path d="M14 4a6 6 0 0 1 6 6c2 1 2 4 0 5v4a3 3 0 0 1-6 0" />
        <line x1="14" y1="4" x2="14" y2="24" />
      </>
    ),
  heisshunger: (
    <>
      <path d="M14 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5.5C12 11 13 11.5 14 3Z" />
    </>
  ),
  ratlos: (
    <>
      <circle cx="14" cy="14" r="10" />
      <path d="M10.8 11a3.3 3.3 0 0 1 6.4 1.1c0 2.2-3.2 2.7-3.2 4.9" />
      <line x1="14" y1="20.2" x2="14" y2="20.4" />
    </>
  ),
}

const standardSymptome: Symptom[] = [
  { icon: 'bauchfett', headline: 'Hartnäckiges Bauchfett', body: 'Egal was du isst oder wie oft du trainierst, es bleibt.' },
  { icon: 'energie', headline: 'Fehlende Energie', body: 'Nachmittags ist der Fokus weg. Du läufst auf Sparflamme.' },
  { icon: 'schlaf', headline: 'Unerholsamer Schlaf', body: 'Du schläfst, wachst aber nicht ausgeruht auf.' },
  { icon: 'muskel', headline: 'Langsamer Muskelaufbau', body: 'Du investierst Zeit im Training, doch der Körper reagiert kaum.' },
  { icon: 'jojo', headline: 'Jo-Jo-Effekt', body: 'Du hast vieles versucht. Kein Ergebnis hat sich gehalten.' },
  { icon: 'koerpergefuehl', headline: 'Schlechtes Körpergefühl', body: 'Der Spiegel zeigt jemanden, der nicht deinem Anspruch entspricht.' },
  { icon: 'stimmung', headline: 'Stimmungsschwankungen', body: 'Manche Tage läuft es, andere nicht. Kein verlässliches Niveau.' },
  { icon: 'brainfog', headline: 'Brainfog', body: 'Konzentration und Klarheit fühlen sich nicht mehr wie früher an.' },
]

function Card({ item, i }: { item: Symptom; i: number }) {
  return (
    <div className="symptom-card animate-fade-up flex items-start gap-4 rounded-2xl px-5 py-5" style={{ animationDelay: `${(i % 2) * 80}ms` }}>
      <span className="flex-shrink-0 mt-0.5">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {ICONS[item.icon]}
        </svg>
      </span>
      <div className="min-w-0">
        {/* Absatz statt Überschrift: kurze Kachel, keine Inhaltsgliederung */}
        <p className="font-barlow font-bold text-xl md:text-2xl leading-tight mb-1.5" style={{ color: '#E6E8EB' }}>
          {item.headline}
        </p>
        <p className="font-inter text-base leading-relaxed" style={{ color: '#98A4B1' }}>
          {item.body}
        </p>
      </div>
    </div>
  )
}

type SymptomGridProps = {
  label?: string
  headline?: string
  /** Zweite Zeile der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  symptome?: Symptom[]
  /** Waagen-Grafik über den Kacheln */
  mitBild?: boolean
  ctaLabel?: string
}

/**
 * Kacheln "Kennst du das?" — Spiegel des inneren Monologs der Zielgruppe.
 * Ohne Props die acht Symptome der Startseite; Unterseiten geben eigene
 * Kacheln mit den vorhandenen Symbolen mit.
 */
export default function SymptomGrid({
  label = 'Kennst du das?',
  headline = 'Wenn dein Körper nicht mehr so belastbar ist wie früher',
  headlineAccent,
  intro = 'Diese Symptome sind kein Zufall, sondern ein Signal deines Körpers, welches du nicht ignorieren solltest.',
  symptome = standardSymptome,
  mitBild = true,
  ctaLabel = 'Performance Analyse buchen',
}: SymptomGridProps) {
  return (
    <section style={{ background: 'transparent' }}>
      {/* Gemeinsamer Gold-Verlauf für alle Icons */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="ico-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E8D49A" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-24 md:pb-32">

        {/* Header */}
        <div className="mb-14 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {label}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            {headline}
            {headlineAccent && (
              <>
                <br className="hidden md:block" />{' '}
                <span style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {headlineAccent}
                </span>
              </>
            )}
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7B8792' }}>
            {intro}
          </p>
        </div>

        <div>

          {/* Bild oben — transparente Waage mit Glow */}
          {mitBild && (
          <div className="flex justify-center mb-8 md:mb-12 animate-fade-up">
            <div className="relative w-full max-w-3xl">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: '80%', height: '80%', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.28) 0%, rgba(201,168,76,0.1) 40%, transparent 72%)', filter: 'blur(30px)' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Waage transparent.svg"
                alt="Die Waage des Lebens — Gleichgewicht aus Ernährung, Training und Regeneration"
                className="relative w-full h-auto"
              />
            </div>
          </div>
          )}

          {/* Karten — 2 Spalten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {symptome.map((item, i) => (
              <Card key={i} item={item} i={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href={CALENDLY_URL}
              data-open-form="true"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {ctaLabel}
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
