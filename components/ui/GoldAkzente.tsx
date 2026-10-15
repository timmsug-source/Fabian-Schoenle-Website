/**
 * Goldakzente der Werbestrecke (/kostenloses-video und /danke). Liegen hier
 * gemeinsam, damit beide Seiten genau gleich aussehen und als eine Strecke
 * wirken.
 */

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Hervorhebung in der Überschrift, höchstens einmal pro Seite: Goldschrift wie
 * auf der Startseite, darunter eine feine Linie, die zu den Enden ausläuft.
 *
 * Ersetzt den vollflächigen Goldbalken hinter dem Text, der Fabian zu grob war.
 * Die Linie sitzt auf dem äußeren Element, weil das innere seinen Hintergrund
 * für die Goldschrift braucht (background-clip: text schneidet jeden
 * Hintergrund auf die Buchstaben zu).
 *
 * Bricht nicht um: Die Hervorhebung ist eine Aussage („10 bis 20 Kilo
 * abnehmen“), die auseinandergerissen an Wirkung verliert. Auf dem Handy passt
 * sie bei text-3xl noch in eine Zeile.
 */
export function GoldHervorhebung({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(201,168,76,0) 0%, #C9A84C 14%, #F2D27A 50%, #C9A84C 86%, rgba(201,168,76,0) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 2px',
        backgroundPosition: '0 100%',
        paddingBottom: '0.06em',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={goldText}>{children}</span>
    </span>
  )
}

/**
 * Dachzeile über der Überschrift: gesperrte Versalien zwischen zwei feinen
 * Goldlinien, statt eines Kastens mit Rahmen.
 */
export function Dachzeile({ children }: { children: React.ReactNode }) {
  const linie = (richtung: 'left' | 'right') => (
    <span
      aria-hidden="true"
      className="w-5 md:w-12 flex-shrink-0"
      style={{
        height: 1,
        background: `linear-gradient(to ${richtung}, #C9A84C, rgba(201,168,76,0))`,
      }}
    />
  )

  return (
    <p
      className="flex items-center justify-center gap-2.5 md:gap-4 font-inter text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] md:tracking-[0.28em] mb-7 md:mb-8"
      style={{ color: '#E8D49A' }}
    >
      {linie('left')}
      <span className="whitespace-nowrap">{children}</span>
      {linie('right')}
    </p>
  )
}
