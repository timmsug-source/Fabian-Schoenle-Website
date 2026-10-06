/**
 * Die drei Zeichnungen der Begleitungs-Sektion: App, Gewichtsverlauf,
 * Trainingsplan.
 *
 * Sie kommen aus public/animations (01-alles-in-einer-app, 02-verlauf,
 * 03-trainingsplan) und stehen hier direkt im Markup statt in einem
 * eingebetteten Rahmen: So laedt die Seite keine zusaetzlichen Dateien und die
 * Zeichnungen bleiben bei jeder Groesse scharf.
 *
 * Sie ersetzen die Bildschirmfotos aus der App — die zeigten echte Oberflaechen
 * mit Daten einzelner Klienten.
 */

export type BegleitungGrafikName = 'app' | 'verlauf' | 'trainingsplan'

const SCHRIFT = 'ui-monospace, Menlo, monospace'

/** Weichzeichner-Schein, je Zeichnung unter eigenem Namen. */
function Schein({ id }: { id: string }) {
  return (
    <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="b" />
      <feMerge>
        <feMergeNode in="b" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  )
}

/* Die vier Sinnbilder der App-Bereiche, einmal definiert und mehrfach benutzt. */
const SYMBOLE = (
  <>
    <symbol id="bg-i-food" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3v18M4.5 3v5a2.5 2.5 0 0 0 5 0V3M17 21V3c-2.5 1.5-3.5 4.5-3.5 8H17" />
    </symbol>
    <symbol id="bg-i-dumb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 9.5v5M6.5 6.5v11M17.5 6.5v11M21 9.5v5M6.5 12h11" />
    </symbol>
    <symbol id="bg-i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 19v-6M12 19V6M18 19v-9M3 21h18" />
    </symbol>
    <symbol id="bg-i-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M4 5h16v11H10l-6 4z" />
    </symbol>
  </>
)

/** Alles in einer App: vier Bereiche, die in einem Handy zusammenlaufen. */
function App() {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ernährung, Training, Auswertung und Nachrichten laufen in einer App zusammen"
      className="w-full h-auto block"
      fontFamily={SCHRIFT}
    >
      <defs>
        <Schein id="bg-app-glow" />
        {SYMBOLE}
      </defs>

      <line x1="98" y1="70" x2="160" y2="72" stroke="#E3C06A" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.7" />
      <circle cx="70" cy="70" r="26" fill="#13223A" stroke="#2A3950" />
      <use href="#bg-i-food" x="58" y="58" width="24" height="24" style={{ color: '#7F8EA3' }} />

      <line x1="302" y1="70" x2="240" y2="72" stroke="#E3C06A" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.7" />
      <circle cx="330" cy="70" r="26" fill="#13223A" stroke="#2A3950" />
      <use href="#bg-i-dumb" x="318" y="58" width="24" height="24" style={{ color: '#7F8EA3' }} />

      <line x1="98" y1="190" x2="160" y2="188" stroke="#E3C06A" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.7" />
      <circle cx="70" cy="190" r="26" fill="#13223A" stroke="#2A3950" />
      <use href="#bg-i-chart" x="58" y="178" width="24" height="24" style={{ color: '#7F8EA3' }} />

      <line x1="302" y1="190" x2="240" y2="188" stroke="#E3C06A" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.7" />
      <circle cx="330" cy="190" r="26" fill="#13223A" stroke="#2A3950" />
      <use href="#bg-i-chat" x="318" y="178" width="24" height="24" style={{ color: '#7F8EA3' }} />

      {/* Das Handy in der Mitte */}
      <rect x="160" y="28" width="80" height="204" rx="16" fill="#0A1628" stroke="#E3C06A" strokeWidth="1.5" filter="url(#bg-app-glow)" />
      <rect x="188" y="38" width="24" height="4" rx="2" fill="#2A3950" />

      <rect x="170" y="76" width="26" height="26" rx="7" fill="rgba(227,192,106,0.14)" stroke="#E3C06A" strokeWidth="1" />
      <use href="#bg-i-food" x="175" y="81" width="16" height="16" style={{ color: '#E3C06A' }} />
      <rect x="204" y="76" width="26" height="26" rx="7" fill="rgba(227,192,106,0.14)" stroke="#E3C06A" strokeWidth="1" />
      <use href="#bg-i-dumb" x="209" y="81" width="16" height="16" style={{ color: '#E3C06A' }} />
      <rect x="170" y="112" width="26" height="26" rx="7" fill="rgba(227,192,106,0.14)" stroke="#E3C06A" strokeWidth="1" />
      <use href="#bg-i-chart" x="175" y="117" width="16" height="16" style={{ color: '#E3C06A' }} />
      <rect x="204" y="112" width="26" height="26" rx="7" fill="rgba(227,192,106,0.14)" stroke="#E3C06A" strokeWidth="1" />
      <use href="#bg-i-chat" x="209" y="117" width="16" height="16" style={{ color: '#E3C06A' }} />

      <rect x="170" y="152" width="60" height="8" rx="4" fill="#1E2C40" />
      <rect x="170" y="152" width="38" height="8" rx="4" fill="#E3C06A" />
      <rect x="170" y="168" width="60" height="8" rx="4" fill="#1E2C40" />
      <rect x="170" y="168" width="24" height="8" rx="4" fill="#E3C06A" opacity="0.7" />
    </svg>
  )
}

/** Verlauf statt Momentaufnahme: die Kurve über Wochen, nicht der Tageswert. */
function Verlauf() {
  const kurve =
    'M40 132 C47.8 125, 71.3 90, 87 90 C102.7 90, 118.3 127, 134 132 C149.7 137, 165.3 111, 181 120 ' +
    'C196.7 129, 212.3 169, 228 186 C243.7 203, 259.3 220, 275 222 C290.7 224, 306.3 202, 322 198 ' +
    'C337.7 194, 361.2 198, 369 198'

  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Gewichtskurve über mehrere Wochen, von 88,0 auf 87,5 kg"
      className="w-full h-auto block"
      fontFamily={SCHRIFT}
    >
      <defs>
        <Schein id="bg-verlauf-glow" />
        <linearGradient id="bg-verlauf-flaeche" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3C06A" stopOpacity="0.28" />
          <stop offset="1" stopColor="#E3C06A" stopOpacity="0" />
        </linearGradient>
      </defs>

      <line x1="24" y1="80" x2="376" y2="80" stroke="#1A2638" />
      <line x1="24" y1="140" x2="376" y2="140" stroke="#1A2638" />
      <line x1="24" y1="200" x2="376" y2="200" stroke="#1A2638" />

      <path d={`${kurve} L369 224 L40 224 Z`} fill="url(#bg-verlauf-flaeche)" />
      <path d={kurve} fill="none" stroke="#E3C06A" strokeWidth="3" strokeLinecap="round" filter="url(#bg-verlauf-glow)" />

      {[
        [40, 132], [87, 90], [134, 132], [181, 120],
        [228, 186], [275, 222], [322, 198], [369, 198],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#0D1A2E" stroke="#E3C06A" strokeWidth="1.5" />
      ))}

      {/* Der gestrichelte Kasten zeigt: ein einzelner Ausschlag sagt nichts */}
      <rect x="161" y="98" width="40" height="44" rx="8" fill="none" stroke="#7F8EA3" strokeDasharray="4 4" />

      <text x="40" y="160" fontSize="13" fill="#7F8EA3">88,0</text>
      <text x="369" y="226" textAnchor="end" fontSize="15" fill="#E3C06A">87,5 kg</text>
    </svg>
  )
}

/** Trainingsplan: die Woche oben, darunter der Verlauf je Einheit. */
function Trainingsplan() {
  const tage: [number, string, boolean][] = [
    [70, 'M', true], [113, 'D', false], [156, 'M', true], [199, 'D', false],
    [242, 'F', true], [285, 'S', false],
  ]
  const zeilen: [string, number][] = [['Beine', 140], ['Push', 180], ['Pull', 220]]

  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Trainingswoche mit erledigten Einheiten und steigenden Gewichten bei Beinen, Push und Pull"
      className="w-full h-auto block"
      fontFamily={SCHRIFT}
    >
      <defs>
        <Schein id="bg-plan-glow" />
      </defs>

      {tage.map(([x, buchstabe, erledigt]) => (
        <g key={x}>
          {erledigt ? (
            <>
              <circle cx={x} cy="50" r="15" fill="#E3C06A" />
              <path d={`M${x - 6} 50 l4 4 l8 -8`} fill="none" stroke="#0D1A2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <circle cx={x} cy="50" r="15" fill="#13223A" stroke="#2A3950" />
          )}
          <text x={x} y="84" textAnchor="middle" fontSize="12" fill="#56657B">{buchstabe}</text>
        </g>
      ))}
      {/* Heute: noch offen, deshalb nur der Umriss */}
      <circle cx="328" cy="50" r="15" fill="none" stroke="#E3C06A" strokeWidth="1.5" filter="url(#bg-plan-glow)" />
      <text x="328" y="84" textAnchor="middle" fontSize="12" fill="#56657B">S</text>

      <line x1="40" y1="104" x2="360" y2="104" stroke="#1A2638" />

      {zeilen.map(([name, y]) => (
        <g key={name}>
          <text x="40" y={y} fontSize="13" fill="#C9D3E0">{name}</text>
          <rect x="230" y={y - 8} width="16" height="10" rx="3" fill="#2A3950" />
          <rect x="256" y={y - 11} width="16" height="13" rx="3" fill="#2A3950" />
          <rect x="282" y={y - 13} width="16" height="15" rx="3" fill="#2A3950" />
          <rect x="308" y={y - 17} width="16" height="19" rx="3" fill="#2A3950" />
          <rect x="334" y={y - 22} width="16" height="24" rx="3" fill="#E3C06A" />
        </g>
      ))}
    </svg>
  )
}

const GRAFIKEN: Record<BegleitungGrafikName, () => React.ReactElement> = {
  app: App,
  verlauf: Verlauf,
  trainingsplan: Trainingsplan,
}

export default function BegleitungGrafik({ name }: { name: BegleitungGrafikName }) {
  const Grafik = GRAFIKEN[name]
  return <Grafik />
}
