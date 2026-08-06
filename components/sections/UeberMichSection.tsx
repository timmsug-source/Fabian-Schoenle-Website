import { txt } from '@/lib/cms-text'
import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'
import { Rich } from '@/components/Rich'

const credentials = [
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
    text: 'Performance Experte',
  },
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
    text: 'M.Sc Chemie',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="uc2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <path d="M2 20 L9 20 L13 8 L19 30 L23 16 L26 22 L34 22" stroke="url(#uc2)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Leidenschaftlicher Triathlet',
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

/**
 * Baut die Absätze aus dem CMS: uebermich_para1, _para2, … Die Anzahl ist
 * NICHT begrenzt, leere Felder werden übersprungen.
 *
 * Ein komplett in **…** gesetzter Absatz wird hervorgehoben. Vorher hing die
 * Hervorhebung an der Position (immer der dritte) und wäre verrutscht, sobald
 * jemand einen Absatz davor einfügt.
 */
function cmsAbsaetze(content: Record<string, string>) {
  const nummern: number[] = []
  for (const k of Object.keys(content)) {
    const m = k.match(/^uebermich_para(\d+)$/)
    if (m && !nummern.includes(Number(m[1]))) nummern.push(Number(m[1]))
  }

  const roh =
    nummern.length > 0
      ? nummern.sort((a, b) => a - b).map((n) => content[`uebermich_para${n}`] ?? '')
      : absaetze

  return roh
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => {
      const hervor = /^\*\*[\s\S]+\*\*$/.test(t)
      return { text: hervor ? t.slice(2, -2).trim() : t, hervor }
    })
}

export default function UeberMichSection({ content = {} }: { content?: Record<string, string> }) {
  const absaetzeListe = cmsAbsaetze(content)
  return (
    <section id="ueber-mich" className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      {/* Rasterhintergrund — oben und unten weich ein-/ausgeblendet */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="um-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.095)" strokeWidth="1" />
          </pattern>
          <pattern id="um-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.055)" strokeWidth="1" />
          </pattern>
          <linearGradient id="um-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="um-fade-mask">
            <rect width="100%" height="100%" fill="url(#um-fade)" />
          </mask>
        </defs>
        <g mask="url(#um-fade-mask)">
          <rect width="100%" height="100%" fill="url(#um-grid)" />
          <rect width="100%" height="100%" fill="url(#um-diag)" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Label */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4 animate-fade-up" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          {txt(content, 'uebermich_label', 'Über Fabian Schönle')}
        </p>

        {/* Haupt-Grid: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">

          {/* Linke Spalte — Text */}
          <div className="animate-fade-up" style={{ animationDelay: '60ms' }}>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-8" style={{ color: '#E6E8EB' }}>
              {txt(content, 'uebermich_title_1', 'Ich war selbst da,')}<br /> {txt(content, 'uebermich_title_2', 'wo du gerade stehst.')}
            </h2>

            <div className="flex flex-col gap-5">
              {absaetzeListe.map((absatz, i) => (
                <Rich
                  key={i}
                  as="p"
                  className="font-inter text-base leading-relaxed"
                  style={{
                    color: absatz.hervor ? '#E6E8EB' : '#A6B0BA',
                    fontWeight: absatz.hervor ? 600 : 400,
                  }}
                  html={absatz.text}
                />
              ))}
            </div>

            {/* CTA */}
            <a
              href={CALENDLY_URL}
              data-open-form="true"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-inter font-semibold text-sm transition-transform"
            >
              {txt(content, 'uebermich_cta_button', 'Performance Analyse buchen')}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Rechte Spalte — Bild + Credentials darunter */}
          <div className="animate-fade-up lg:sticky lg:top-28 lg:self-start" style={{ animationDelay: '120ms' }}>
          <div className="lg:ml-auto flex flex-col gap-5" style={{ maxWidth: 434, width: '100%' }}>

            {/* Bild-Wrapper mit versetztem Rahmen */}
            <div className="relative" style={{ paddingBottom: 14, paddingRight: 14 }}>

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
                  aspectRatio: '4/5',
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
                  <p className="font-inter text-xs mt-0.5" style={{ color: '#7B8792' }}>Gründer von FS Performance Lab</p>
                </div>
              </div>

            </div>

            {/* Credentials-Kachel unter dem Bild — wie bei den Testimonial-Kacheln */}
            <div
              className="rounded-2xl px-6 py-5 flex flex-col gap-4"
              style={{
                maxWidth: 420,
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 0 30px rgba(201,168,76,0.06)',
              }}
            >
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0">
                    {c.icon}
                  </span>
                  <p className="font-inter text-sm leading-relaxed" style={{ color: '#C8D0D9' }}>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
          </div>

        </div>
      </div>
    </section>
  )
}
