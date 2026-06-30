import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

const symptoms = [
  { headline: 'Bauchfett, das bleibt',        body: 'Hartnäckig — egal was du isst oder wie oft du trainierst.' },
  { headline: 'Energie bricht weg',            body: 'Nachmittags ist der Fokus weg. Du funktionierst auf Sparflamme.' },
  { headline: 'Schlaf erholt nicht',           body: 'Du schläfst — aber wachst morgens nicht ausgeruht auf.' },
  { headline: 'Training ohne Fortschritt',     body: 'Du investierst Zeit, aber der Körper reagiert kaum noch.' },
  { headline: 'Mentale Leistung lässt nach',   body: 'Fokus und Drive fühlen sich nicht mehr wie früher an.' },
  { headline: 'Antrieb schwankt',              body: 'Manche Tage läuft es — andere nicht. Kein verlässliches Niveau.' },
  { headline: 'Körper fühlt sich fremd an',    body: 'Der Spiegel zeigt jemanden, der nicht deinem Anspruch entspricht.' },
  { headline: 'Nichts wirkt dauerhaft',        body: 'Du hast vieles versucht — kein Ansatz hat sich festgesetzt.' },
]

export default function SymptomGrid() {
  return (
    <section style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-24 md:pb-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Kennst du das?
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            Wenn dein Körper nicht mehr so<br className="hidden md:block" /> reagiert wie früher
          </h2>
          <p className="font-inter text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#5B6773' }}>
            Diese Symptome begegnen mir im High-Performance Coaching immer wieder — kein Zufall, sondern Signale eines Systems, das neu kalibriert werden muss.
          </p>
        </div>

        {/* Split Layout — relativer Container für Hintergrund-Raster */}
        <div className="relative flex flex-col md:flex-row gap-8 animate-fade-up" style={{ animationDelay: '100ms' }}>

          {/* Hintergrund-Rastermuster — wie Hero, Wölbung zur Mitte */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
            <defs>
              <pattern id="sg-grid" width="90" height="90" patternUnits="userSpaceOnUse">
                <path d="M 90 0 L 0 0 0 90" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="1" />
              </pattern>
              <pattern id="sg-diagonal" width="90" height="90" patternUnits="userSpaceOnUse">
                <line x1="0" y1="90" x2="90" y2="0" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
              </pattern>
              {/* Radiale Maske: Mitte voll sichtbar, Ränder ausgeblendet */}
              <radialGradient id="sg-bulge" cx="50%" cy="50%" r="72%">
                <stop offset="0%"   stopColor="white" stopOpacity="1" />
                <stop offset="55%"  stopColor="white" stopOpacity="0.85" />
                <stop offset="80%"  stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="sg-mask">
                <rect width="100%" height="100%" fill="url(#sg-bulge)" />
              </mask>
              <radialGradient id="sg-glow" cx="50%" cy="50%" r="55%">
                <stop offset="0%"   stopColor="rgba(201,168,76,0.16)" />
                <stop offset="100%" stopColor="rgba(201,168,76,0)" />
              </radialGradient>
            </defs>
            <g mask="url(#sg-mask)">
              <rect width="100%" height="100%" fill="url(#sg-grid)" />
              <rect width="100%" height="100%" fill="url(#sg-diagonal)" />
            </g>
            <rect width="100%" height="100%" fill="url(#sg-glow)" />
          </svg>

          {/* 2-spaltige Kästchen links — 50% + CTA darunter */}
          <div className="w-full md:w-1/2 relative flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {symptoms.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 rounded-2xl px-5 py-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(13,24,41,0.82) 0%, rgba(11,21,37,0.76) 100%)',
                    border: '1.5px solid rgba(201,168,76,0.22)',
                    boxShadow: 'inset 0 1px 0 rgba(232,212,154,0.06)',
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <span
                    className="font-barlow font-bold text-sm"
                    style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-barlow font-bold text-lg leading-snug" style={{ color: '#E6E8EB' }}>
                    {item.headline}
                  </h3>
                  <p className="font-inter text-xs leading-relaxed" style={{ color: '#7A8898' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Gold CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center justify-center gap-2 w-full py-4 mt-2 rounded-xl font-inter font-semibold text-sm"
              style={{ background: 'radial-gradient(circle, #C9A84C, #E8D49A)', color: '#060E1F' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
              </svg>
              Performance Analyse buchen
            </a>
          </div>

          {/* Fabian-Bild rechts — etwas länger als Kästchen + CTA */}
          <div className="hidden md:block w-1/2 flex-shrink-0 relative self-stretch">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ border: '1.5px solid rgba(201,168,76,0.22)', background: '#060E1F', position: 'absolute', inset: 0 }}
            >
              <Image
                src="/images/Fabian-Schoenle-Blick-Kamera.webp"
                alt="Fabian Schönle — Performance Coach"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                sizes="50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
