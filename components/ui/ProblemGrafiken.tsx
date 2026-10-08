/**
 * Die drei Grafiken der Problem-Sektion, je eine pro Fehler.
 *
 * Sie kommen aus public/animations (01-hormone, 02-ursachen, 03-strategie) und
 * stehen hier direkt im Markup statt in einem eingebetteten Rahmen: So laedt
 * die Seite keine zusaetzliche Datei, die Zeichnung skaliert mit der Karte und
 * bleibt bei jeder Bildschirmgroesse scharf.
 *
 * Der eigene dunkle Grund der Vorlagen ist entfernt: In der Karte wirkten die
 * Zeichnungen sonst wie eingesetzte Bildschirmfotos statt wie Zeichnungen.
 *
 * Jede Zeichnung gibt es zweimal: `unscharf` legt einen Weichzeichner ueber den
 * goldenen Teil — das ist die Fassung fuer die Problemsektion, wo die Loesung
 * schon da, aber noch nicht zu erkennen ist. Scharf steht sie in der
 * Loesungssektion.
 *
 * Die Filter brauchen je Zeichnung eigene Namen: Auf der Seite stehen beide
 * Fassungen untereinander, und gleiche Namen wuerden sich gegenseitig
 * ueberschreiben.
 */

/** Weichzeichner und Schein, unter einem Namen, der nur einmal vorkommt. */
function Filter({ id }: { id: string }) {
  return (
    <defs>
      <filter id={`${id}-blur`} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="7" />
      </filter>
      <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}

/** Klammert den goldenen Teil ein und zeichnet ihn bei Bedarf weich. */
function Gold({ id, unscharf, children }: { id: string; unscharf: boolean; children: React.ReactNode }) {
  return unscharf ? (
    <g filter={`url(#${id}-blur)`} opacity="0.75">
      {children}
    </g>
  ) : (
    <>{children}</>
  )
}

export type ProblemGrafikName = 'hormone' | 'ursachen' | 'strategie'

const SCHRIFT = 'ui-monospace, Menlo, monospace'
const GOLD_SCHEIN = { filter: 'drop-shadow(0 0 8px rgba(227,192,106,.5))' }

/** Hormone statt Kalorien: vier Regler, nur der erste ohne Ausschlag. */
function Hormone({ id, unscharf }: { id: string; unscharf: boolean }) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vier Regler: Kalorien ohne Ausschlag, daneben Testosteron, Cortisol und Schilddrüse auf unterschiedlichen Ständen"
      className="w-full h-auto block"
      fontFamily={SCHRIFT}
    >
      <Filter id={id} />
      <line x1="115" y1="32" x2="115" y2="220" stroke="#1E2C40" strokeDasharray="3 5" />

      <rect x="56" y="40" width="6" height="160" rx="3" fill="#1E2C40" />
      <rect x="41" y="112" width="36" height="16" rx="5" fill="#2A3950" />
      <text x="59" y="238" textAnchor="middle" fontSize="13" fill="#56657B">kcal</text>
      <line x1="38" y1="234" x2="80" y2="234" stroke="#E5634D" strokeWidth="1.5" />

      <Gold id={id} unscharf={unscharf}>
        <rect x="167" y="40" width="6" height="160" rx="3" fill="#1E2C40" />
        <rect x="167" y="72" width="6" height="128" rx="3" fill="#E3C06A" />
        <rect x="152" y="64" width="36" height="16" rx="5" fill="#E3C06A" style={GOLD_SCHEIN} />
        <text x="170" y="238" textAnchor="middle" fontSize="13" fill="#C9D3E0">Testo</text>

        <rect x="257" y="40" width="6" height="160" rx="3" fill="#1E2C40" />
        <rect x="257" y="162" width="6" height="38" rx="3" fill="#E3C06A" />
        <rect x="242" y="154" width="36" height="16" rx="5" fill="#E3C06A" style={GOLD_SCHEIN} />
        <text x="260" y="238" textAnchor="middle" fontSize="13" fill="#C9D3E0">Cortisol</text>

        <rect x="337" y="40" width="6" height="160" rx="3" fill="#1E2C40" />
        <rect x="337" y="104" width="6" height="96" rx="3" fill="#E3C06A" />
        <rect x="322" y="96" width="36" height="16" rx="5" fill="#E3C06A" style={GOLD_SCHEIN} />
        <text x="340" y="238" textAnchor="middle" fontSize="13" fill="#C9D3E0">Schilddr.</text>
      </Gold>
    </svg>
  )
}

/** Ursachen statt Symptome: die Spitze über Wasser, die Masse darunter. */
function Ursachen({ id, unscharf }: { id: string; unscharf: boolean }) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Eisberg: über der Wasserlinie die Symptome, darunter als größerer Teil die Blutwerte"
      className="w-full h-auto block"
      fontFamily={SCHRIFT}
    >
      <Filter id={id} />
      <rect x="0" y="92" width="400" height="168" fill="#0A1628" />

      <polygon points="160,92 188,44 212,58 240,92" fill="#2A3950" />
      <circle cx="190" cy="66" r="3.5" fill="#E5634D" />
      <circle cx="210" cy="76" r="3.5" fill="#E5634D" />
      <circle cx="178" cy="82" r="3.5" fill="#E5634D" />
      <text x="258" y="60" fontSize="13" fill="#56657B">Symptome</text>

      <line x1="16" y1="92" x2="384" y2="92" stroke="#3A4B63" strokeDasharray="6 6" />

      <Gold id={id} unscharf={unscharf}>
        <polygon
          points="150,100 250,100 312,150 290,228 200,244 104,222 84,156"
          fill="rgba(227,192,106,0.12)"
          stroke="#E3C06A"
          strokeWidth="1.5"
        />
        <path
          d="M200 138 C 200 138 184 158 184 170 A 16 16 0 0 0 216 170 C 216 158 200 138 200 138 Z"
          fill="#E3C06A"
        />
        <text x="200" y="212" textAnchor="middle" fontSize="13" fill="#E3C06A">Blutwerte</text>
      </Gold>
    </svg>
  )
}

/** Strategie statt Disziplin: Zickzack ohne Fortschritt gegen stetige Kurve. */
function Strategie({ id, unscharf }: { id: string; unscharf: boolean }) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagramm: Disziplin schwankt auf der Stelle, Strategie steigt stetig an"
      className="w-full h-auto block"
      fontFamily={SCHRIFT}
    >
      <Filter id={id} />
      <line x1="40" y1="30" x2="40" y2="216" stroke="#1E2C40" />
      <line x1="40" y1="216" x2="376" y2="216" stroke="#1E2C40" />

      <polyline
        points="40,176 80,140 112,172 148,132 184,176 220,136 256,180 292,140 328,178 356,150"
        fill="none"
        stroke="#E5634D"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <text x="356" y="200" textAnchor="end" fontSize="13" fill="#E5634D">Disziplin</text>

      <Gold id={id} unscharf={unscharf}>
        <path
          d="M40 200 C 150 196, 230 150, 356 52"
          fill="none"
          stroke="#E3C06A"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 6px rgba(227,192,106,.45))' }}
        />
        <circle cx="356" cy="52" r="6" fill="#E3C06A" />
        <text x="340" y="42" textAnchor="end" fontSize="13" fill="#E3C06A">Strategie</text>
      </Gold>
    </svg>
  )
}

const GRAFIKEN: Record<ProblemGrafikName, (p: { id: string; unscharf: boolean }) => React.ReactElement> = {
  hormone: Hormone,
  ursachen: Ursachen,
  strategie: Strategie,
}

export default function ProblemGrafik({
  name,
  unscharf = false,
}: {
  name: ProblemGrafikName
  /** Zeichnet den goldenen Teil weich — die Fassung für die Problemsektion */
  unscharf?: boolean
}) {
  const Grafik = GRAFIKEN[name]
  return <Grafik id={`grafik-${name}-${unscharf ? 'unscharf' : 'scharf'}`} unscharf={unscharf} />
}
