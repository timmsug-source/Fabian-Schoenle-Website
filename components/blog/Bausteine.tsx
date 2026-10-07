/**
 * Textbausteine fuer Ratgeber-Artikel. Statt eines Prose-Plugins: Die paar
 * Elemente, die ein Artikel braucht, im Look der Website und ohne zusaetzliche
 * Abhaengigkeit. Artikel werden in lib/blog.tsx aus diesen Bausteinen gebaut.
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
 * Kartenlook wie .leistung-card, aber ohne dessen Hover-Anheben: Fuer
 * feststehende Kaesten (Hinweis, Inhaltsverzeichnis, CTA), die man nicht
 * anklickt, waere die Bewegung irritierend.
 */
export const kastenStil = {
  background: 'linear-gradient(135deg, rgba(13,24,41,0.7) 0%, rgba(11,21,37,0.55) 100%)',
  border: '1px solid rgba(201,168,76,0.3)',
  boxShadow: 'inset 0 1px 0 rgba(232,212,154,0.05), 0 0 20px rgba(201,168,76,0.12)',
} as const

export function Absatz({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-inter text-base md:text-lg leading-relaxed mb-5" style={{ color: '#C6CDD5' }}>
      {children}
    </p>
  )
}

/** Zwischenueberschrift innerhalb eines Abschnitts (h3, nicht im Inhaltsverzeichnis) */
export function Unterpunkt({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-barlow font-semibold text-xl md:text-2xl mt-8 mb-3" style={{ color: '#E6E8EB' }}>
      {children}
    </h3>
  )
}

export function Liste({ punkte }: { punkte: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3 mb-6">
      {punkte.map((p, i) => (
        <li key={i} className="flex items-start gap-3 font-inter text-base md:text-lg leading-relaxed" style={{ color: '#C6CDD5' }}>
          <span
            className="flex-shrink-0 rounded-full mt-[0.6em]"
            style={{ width: 7, height: 7, background: 'linear-gradient(135deg, #C9A84C, #E8D49A)' }}
            aria-hidden="true"
          />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}

/** Hervorgehobener Kasten, z. B. fuer die Kernaussage eines Abschnitts */
export function Hinweis({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl px-6 py-6 md:px-8 my-8" style={kastenStil}>
      <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-2" style={goldText}>
        {titel}
      </p>
      <div className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#E6E8EB' }}>
        {children}
      </div>
    </aside>
  )
}

export function Zitat({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="font-barlow font-semibold text-2xl md:text-3xl leading-snug my-10 pl-6"
      style={{ color: '#E6E8EB', borderLeft: '3px solid #C9A84C' }}
    >
      {children}
    </blockquote>
  )
}
