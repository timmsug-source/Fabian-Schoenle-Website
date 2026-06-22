import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

const credentials = [
  {
    icon: '🎓',
    text: 'PhD-Hintergrund in Chemie',
  },
  {
    icon: '📊',
    text: 'Datenbasierte Methode — entwickelt aus Wissenschaft und eigener Erfahrung',
  },
  {
    icon: '👥',
    text: 'Selbstständige & Unternehmer ab 30 — meine einzige Zielgruppe',
  },
]

const absaetze = [
  'Studium. Nebenjob. Leistungssport. Familie. Irgendwann kommt der Punkt, an dem du merkst: Der Körper zieht nicht mehr mit.',
  'Nicht weil du weniger diszipliniert bist. Sondern weil du irgendwann anfängst, ihn zu ignorieren — weil Business, Familie und Alltag mehr Raum einnehmen als alles andere.',
  'Genau das war mein Ausgangspunkt.',
  'Ich habe Chemie studiert — auf PhD-Niveau. Ich habe gelernt, komplexe Systeme zu analysieren, Zusammenhänge zu verstehen und Lösungen zu entwickeln, die auf Daten basieren, nicht auf Annahmen. Irgendwann habe ich angefangen, denselben Blick auf meinen eigenen Körper zu richten.',
  'Was ich dabei verstanden habe: Die meisten Menschen scheitern nicht an Disziplin. Sie scheitern daran, dass niemand je gemessen hat, was ihr System wirklich braucht. Kein Arzt. Kein Trainer. Kein Coach.',
  'Aus dieser Erkenntnis ist FS-Performance entstanden — ein High-Performance Coaching, das den Körper so behandelt, wie du dein Business behandelst: datenbasiert, strategisch und mit klarem Ziel.',
]

export default function UeberMichSection() {
  return (
    <section id="ueber-mich" className="relative" style={{ background: '#101C28' }}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Label */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4 animate-fade-up" style={{ color: '#C99A3D' }}>
          Wer steckt dahinter?
        </p>

        {/* Haupt-Grid: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Linke Spalte — Text */}
          <div className="animate-fade-up" style={{ animationDelay: '60ms' }}>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-8" style={{ color: '#E6E8EB' }}>
              Ich war selbst da,<br /> wo du gerade stehst.
            </h2>

            <div className="flex flex-col gap-5">
              {absaetze.map((text, i) => (
                <p
                  key={i}
                  className="font-inter text-base leading-relaxed"
                  style={{
                    color: i === 2 ? '#E6E8EB' : '#8A96A3',
                    fontWeight: i === 2 ? 600 : 400,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Credentials */}
            <div
              className="mt-10 rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
                border: '1px solid rgba(201,154,61,0.15)',
              }}
            >
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-base"
                    style={{ background: 'rgba(201,154,61,0.08)', border: '1px solid rgba(201,154,61,0.15)' }}
                  >
                    {c.icon}
                  </span>
                  <p className="font-inter text-sm leading-relaxed pt-2" style={{ color: '#8A96A3' }}>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Abschluss-Statement */}
            <div
              className="mt-8 rounded-2xl px-6 py-5"
              style={{
                background: 'rgba(201,154,61,0.04)',
                border: '1px solid rgba(201,154,61,0.2)',
                borderLeft: '3px solid rgba(201,154,61,0.6)',
              }}
            >
              <p className="font-inter text-sm leading-relaxed" style={{ color: '#A89060' }}>
                Ich arbeite nicht mit jedem. Aber wenn du weißt, dass dein Körper mehr kann als er gerade zeigt — dann lass uns herausfinden, was ihn aufhält.
              </p>
            </div>

            {/* CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{
                background: 'linear-gradient(135deg, #8A5D1F 0%, #C99A3D 50%, #F2D27A 100%)',
                color: '#0D1721',
                boxShadow: '0 4px 24px rgba(201,154,61,0.25)',
              }}
            >
              Kostenloses Erstgespräch buchen
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Rechte Spalte — Bild */}
          <div className="relative animate-fade-up lg:sticky lg:top-28 lg:self-start" style={{ animationDelay: '120ms' }}>
            {/* Hintergrund-Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ background: 'radial-gradient(ellipse at center, rgba(201,154,61,0.08) 0%, transparent 70%)' }}
            />

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: '100%',
                maxWidth: 420,
                aspectRatio: '3/4',
                border: '1px solid rgba(201,154,61,0.15)',
                background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
              }}
            >
              <Image
                src="/images/Fabian-Schönle-Medaillie.jpg"
                alt="Fabian Schönle — Performance Coach"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />

              {/* Gradient unten für weichen Übergang */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: '35%',
                  background: 'linear-gradient(to top, #101C28 0%, transparent 100%)',
                }}
              />

              {/* Name-Badge unten */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-barlow font-bold text-lg" style={{ color: '#E6E8EB' }}>Fabian Schönle</p>
                <p className="font-inter text-xs mt-0.5" style={{ color: '#5B6773' }}>Performance Coach · PhD Chemie</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
