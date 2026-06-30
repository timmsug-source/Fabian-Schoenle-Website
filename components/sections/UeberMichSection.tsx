import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

const credentials = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="uc0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <path d="M18 4 L4 11 L18 18 L32 11 Z" fill="url(#uc0)"/>
        <path d="M8 15 L8 24 C8 24 12 29 18 29 C24 29 28 24 28 24 L28 15" stroke="url(#uc0)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="32" y1="11" x2="32" y2="22" stroke="url(#uc0)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="24" r="2.5" fill="url(#uc0)"/>
      </svg>
    ),
    text: 'PhD-Hintergrund in Chemie',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="uc1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <rect x="2" y="30" width="32" height="3" rx="1.5" fill="url(#uc1)"/>
        <rect x="2" y="4" width="3" height="26" rx="1.5" fill="url(#uc1)"/>
        <rect x="7" y="20" width="5" height="10" rx="2" fill="url(#uc1)"/>
        <rect x="15" y="13" width="5" height="17" rx="2" fill="url(#uc1)"/>
        <rect x="23" y="7" width="5" height="23" rx="2" fill="url(#uc1)"/>
      </svg>
    ),
    text: 'Datenbasierte Methode — entwickelt aus Wissenschaft und eigener Erfahrung',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="uc2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <circle cx="13" cy="12" r="6" fill="url(#uc2)"/>
        <circle cx="26" cy="14" r="4.5" fill="url(#uc2)"/>
        <path d="M2 30 C2 22 8 18 13 18 C18 18 24 22 24 30" fill="url(#uc2)"/>
        <path d="M24 20 C27 20 32 23 32 30" stroke="url(#uc2)" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
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
    <section id="ueber-mich" className="relative" style={{ background: '#060E1F' }}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Label */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4 animate-fade-up" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Wer steckt dahinter?
        </p>

        {/* Haupt-Grid: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">

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
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0">
                    {c.icon}
                  </span>
                  <p className="font-inter text-sm leading-relaxed" style={{ color: '#8A96A3' }}>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Abschluss-Statement */}
            <div
              className="mt-8 rounded-2xl px-6 py-5"
              style={{
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderLeft: '3px solid rgba(201,168,76,0.6)',
              }}
            >
              <p className="font-inter text-sm leading-relaxed" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Ich arbeite nicht mit jedem. Aber wenn du weißt, dass dein Körper mehr kann als er gerade zeigt — dann lass uns herausfinden, was ihn aufhält.
              </p>
            </div>

            {/* CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{
                background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
                color: '#060E1F',
                boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
              }}
            >
              Performance Analyse buchen
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Rechte Spalte — Bild */}
          <div className="relative animate-fade-up lg:sticky lg:top-28 lg:self-start" style={{ animationDelay: '120ms' }}>
          <div className="relative lg:ml-auto" style={{ maxWidth: 434, width: '100%', paddingBottom: 14, paddingRight: 14 }}>

            {/* Hintergrund-Glow */}
            <div
              className="absolute rounded-3xl blur-3xl"
              style={{ inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)' }}
            />

            {/* Versetzter äußerer Gold-Akzentrahmen — gleiche Größe wie Bild, 14px nach unten-rechts verschoben */}
            <div
              className="absolute rounded-3xl"
              style={{
                top: 14,
                left: 14,
                right: 0,
                bottom: 0,
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'transparent',
                zIndex: 0,
              }}
            />

            {/* Haupt-Bildcontainer */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: '100%',
                maxWidth: 420,
                aspectRatio: '3/4',
                border: '1px solid rgba(201,168,76,0.25)',
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                zIndex: 1,
              }}
            >
              <Image
                src="/images/Fabian-Schönle-Farbe-Triathlon.JPG"
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
      </div>
    </section>
  )
}
