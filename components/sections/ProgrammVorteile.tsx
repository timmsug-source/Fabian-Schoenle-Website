type Vorteil = { titel: string; text: string }
type Vertrauen = { titel: string; text: string }

const VORTEILE: Vorteil[] = [
  { titel: 'Datenbasiert', text: 'Über 50 Blut- und DNA-Marker zeigen, welche Hebel bei dir zählen.' },
  { titel: 'Passt in deinen Kalender', text: 'Ohne Anfahrt, ohne feste Termine, auch auf Reisen.' },
  { titel: 'Feedback, wann immer nötig', text: 'Regelmäßige Feedbackschleifen mit mir persönlich.' },
]

const VERTRAUEN: Vertrauen[] = [
  { titel: '100 % online', text: 'Flexibel und ortsunabhängig' },
  { titel: '1:1 Coaching', text: 'Individuell und auf Augenhöhe' },
  { titel: 'Vertraulich', text: 'Deine Daten bleiben deine' },
]

/** Trenner innerhalb der Karte, im Gold der Kartenkante */
const LINIE = 'rgba(201,168,76,0.22)'

/** Gefüllter Gold-Haken wie bei den Karten von LeistungenSection */
function Haken({ id }: { id: string }) {
  return (
    <svg width="26" height="26" className="md:w-[30px] md:h-[30px]" viewBox="0 0 38 38" fill="none" shapeRendering="geometricPrecision" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon
        points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
        fill={`url(#${id})`}
        stroke={`url(#${id})`}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Leiste unter „Das Programm“ auf /personal-coaching-online: drei Vorteile in
 * einer Karte, darunter drei Vertrauenspunkte. Fasst zusammen, was die Liste
 * darüber im Einzelnen aufzählt.
 *
 * Gestaltung aus LeistungenSection übernommen: Karte mit Goldkante und Schein
 * (leistung-card), derselbe gefüllte Haken, Titel in Barlow SemiBold. Die
 * Vertrauenspunkte stehen im Stil der Rollenzeile unter Fabians Namen.
 */
export default function ProgrammVorteile({
  vorteile = VORTEILE,
  vertrauen = VERTRAUEN,
}: {
  vorteile?: Vorteil[]
  vertrauen?: Vertrauen[]
}) {
  return (
    <div className="animate-fade-up">
      <ul className="leistung-card rounded-xl grid grid-cols-1 md:grid-cols-3">
        {vorteile.map((v, i) => (
          <li
            key={v.titel}
            /* Trenner: auf dem Handy waagerecht (Punkte untereinander), ab md senkrecht */
            className={`flex gap-4 px-5 md:px-6 lg:px-8 py-5 md:py-7 ${i > 0 ? 'border-t md:border-t-0 md:border-l' : ''}`}
            style={{ borderColor: LINIE }}
          >
            {/* h-7 entspricht der Zeilenhöhe des Titels — Haken sitzt auf dessen Höhe */}
            <span className="flex-shrink-0 flex items-center h-7">
              <Haken id={`programm-vorteil-${i}`} />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-barlow font-semibold text-lg md:text-xl" style={{ color: '#E6E8EB' }}>
                {v.titel}
              </span>
              <span className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                {v.text}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-14 gap-y-5 mt-8 md:mt-10">
        {vertrauen.map((v) => (
          <li key={v.titel} className="text-center">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>
              {v.titel}
            </p>
            <p className="font-inter text-sm md:text-base mt-1" style={{ color: '#A6B0BA' }}>
              {v.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
