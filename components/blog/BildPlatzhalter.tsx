/**
 * Steht anstelle des Artikelbilds, solange ein Artikel keins hat. Fuellt den
 * umgebenden Rahmen (absolute inset-0), genau wie ein Bild mit `fill`.
 */
export default function BildPlatzhalter() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="platzhalter-gitter" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#platzhalter-gitter)" />
      </svg>

      <svg className="relative" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-9 9" />
      </svg>
      <span className="relative font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.6)' }}>
        Bild folgt
      </span>
    </div>
  )
}
