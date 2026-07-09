import Link from 'next/link'

const unterseiten = [
  { href: '/ueber-mich', title: 'Über mich', sub: 'Wer hinter FS-Performance steckt', bild: '/images/Fabian-Schoenle-Blick-Kamera.webp', pos: 'center 20%' },
  { href: '/ernaehrungsberatung-karlsruhe', title: 'Ernährungsberatung Karlsruhe', sub: 'Datenbasiert & individuell', bild: '/images/FS-Waage.png', pos: 'center' },
  { href: '/personal-coaching-online', title: 'Personal Coaching online', sub: 'Ort spielt keine Rolle', bild: '/images/Fabian-Schoenle-Mockup-Ablauf.webp', pos: 'center' },
  { href: '/abnehmcoaching', title: 'Abnehmcoaching', sub: 'Ohne Jo-Jo, ohne Verzicht', bild: '/images/FS-Kreislauf.png', pos: 'center' },
]

const rezensionen = [
  '/images/FS-Rezension-Gregory.jpg',
  '/images/FS-Rezension-Matthias.jpg',
  '/images/FS-Rezension-Robert.jpg',
]

export default function NotFound() {
  return (
    <main className="relative overflow-hidden" style={{ background: '#060E1F', minHeight: '100vh' }}>

      {/* Hintergrund-Gitter + Glows (wie im Hero) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="nf-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="nf-diagonal" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="nf-glow-left" cx="20%" cy="15%" r="55%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
            <stop offset="60%" stopColor="rgba(201,168,76,0.05)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <radialGradient id="nf-glow-right" cx="85%" cy="8%" r="40%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.1)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <linearGradient id="nf-grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="55%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="nf-fade-mask">
            <rect width="100%" height="100%" fill="url(#nf-grid-fade)" />
          </mask>
        </defs>
        <g mask="url(#nf-fade-mask)">
          <rect width="100%" height="100%" fill="url(#nf-grid)" />
          <rect width="100%" height="100%" fill="url(#nf-diagonal)" />
        </g>
        <rect width="100%" height="100%" fill="url(#nf-glow-left)" />
        <rect width="100%" height="100%" fill="url(#nf-glow-right)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8" style={{ paddingTop: 160, paddingBottom: 120 }}>

        {/* 404 */}
        <div className="text-center">
          <h1
            className="font-barlow font-bold leading-none"
            style={{
              fontSize: 'clamp(6rem, 20vw, 12rem)',
              backgroundImage: 'linear-gradient(180deg, #FFF7D8 0%, #E8D49A 35%, #C9A84C 70%, #9F7622 100%)',
              backgroundSize: '100% 1em',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </h1>
          <h2 className="font-barlow font-bold text-2xl md:text-4xl mt-2 mb-4" style={{ color: '#E6E8EB' }}>
            Diese Seite gibt es nicht
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: '#5B6773' }}>
            Der Link ist veraltet oder die Seite wurde verschoben. Kein Problem — hier geht&rsquo;s direkt weiter.
          </p>

          {/* Zur Startseite */}
          <Link
            href="/"
            className="cta-metal inline-flex items-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform hover:-translate-y-0.5"
          >
            Zur Startseite
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>

        {/* Unterseiten */}
        <div className="mt-20">
          <h3 className="font-barlow font-bold text-2xl md:text-3xl mb-6 text-center" style={{ color: '#E6E8EB' }}>
            Vielleicht suchst du das
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unterseiten.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="symptom-card group relative block overflow-hidden rounded-2xl"
                style={{ aspectRatio: '16/10' }}
              >
                {/* Bild füllt die Karte */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={u.bild}
                  alt={u.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: u.pos }}
                />
                {/* Verlauf für Lesbarkeit */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,14,31,0.92) 0%, rgba(6,14,31,0.5) 35%, rgba(6,14,31,0.1) 65%, transparent 100%)' }} />
                {/* Text-Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-barlow font-bold text-xl leading-snug mb-1" style={{ color: '#FFFFFF' }}>
                    {u.title}
                  </h3>
                  <p className="font-inter text-xs leading-relaxed mb-3" style={{ color: '#C8CDD4' }}>
                    {u.sub}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold" style={{ color: '#E8D49A' }}>
                    Ansehen
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Rezensionen */}
        <div className="mt-20">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Echte Bewertungen
          </p>
          <h2 className="font-barlow font-bold text-2xl md:text-3xl text-center mb-8" style={{ color: '#E6E8EB' }}>
            Das sagen meine Kunden
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {rezensionen.map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-4 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Bewertung ${i + 1}`} className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
