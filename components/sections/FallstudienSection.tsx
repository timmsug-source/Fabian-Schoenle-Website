'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'
import { Rich } from '@/components/Rich'

const fallstudien = [
  {
    name: 'Robert',
    alter: '42 Jahre',
    beruf: 'Geschäftsführer',
    instagram: 'Robert Raschkov',
    link: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
    video: '/videos/Robert_Testimonial_final.mp4',
    problem: 'Robert arbeitet <strong>60+ Stunden pro Woche</strong>. Sein Körper hat auf die jahrelange Kombination aus <strong>Dauerstress, schlechtem Schlaf</strong> und unregelmäßiger Ernährung reagiert: 14 kg zugenommen, permanent müde, nachmittags kaum noch handlungsfähig.',
    ziel: 'Er will wieder die <strong>Energie haben, die er mit Anfang 30 hatte</strong> — leistungsfähig durch den ganzen Tag, ohne auf Koffein angewiesen zu sein. Und er will, dass sein Körper wieder seinem eigenen Anspruch entspricht.',
    loesung: 'Blutbild und Hormonstatus zeigten <strong>deutlich erhöhte Cortisolwerte</strong> und eine beginnende Insulinresistenz. Wir haben Ernährung, Schlafprotokoll und Trainingsreize präzise auf seinen Stoffwechsel abgestimmt — ohne seinen Alltag auf den Kopf zu stellen.',
    vorher: { gewicht: '98 kg', punkte: ['Permanent erschöpft trotz 7 Stunden Schlaf', 'Konzentration bricht nachmittags komplett ein', 'Bauchfett trotz gelegentlichem Sport'] },
    nachher: { gewicht: '84 kg', punkte: ['Stabile Energie ohne Koffein-Spitzen', 'Klarer Kopf bis in den Abend', '−14 kg Körpergewicht in 5 Monaten'] },
  },
  {
    name: 'Richard',
    alter: 'PLATZHALTER',
    beruf: 'PLATZHALTER',
    instagram: 'Richard Müller',
    link: 'https://www.linkedin.com/in/richard-mueller/',
    video: '/videos/Richard_Testimonial_final.mp4',
    problem: 'PLATZHALTER — bitte Richards Ausgangssituation ergänzen.',
    ziel: 'PLATZHALTER — bitte Richards Ziel ergänzen.',
    loesung: 'PLATZHALTER — bitte Richards Lösung ergänzen.',
    vorher: { gewicht: '—', punkte: ['PLATZHALTER', 'PLATZHALTER', 'PLATZHALTER'] },
    nachher: { gewicht: '—', punkte: ['PLATZHALTER', 'PLATZHALTER', 'PLATZHALTER'] },
  },
  {
    name: 'Axel',
    alter: '38 Jahre',
    beruf: 'Selbstständiger Unternehmer',
    instagram: 'Axel Krupp',
    link: 'https://www.linkedin.com/in/axelkrupp1968/',
    bild: '/images/19d177bf-4006-4bc2-8fb4-b7e6f8c9719e.jpg',
    problem: 'Axel hat in den letzten 3 Jahren eine Firma aufgebaut. Sein Körper ist dabei auf der Strecke geblieben: <strong>Schlafprobleme, ständige Stimmungsschwankungen</strong> — und trotz regelmäßigem Training kein sichtbarer Fortschritt.',
    ziel: 'Er will verstehen, <strong>warum sein Körper nicht mehr reagiert</strong>. Und er will konkrete Ergebnisse — kein weiteres Ausprobieren, keine Diäten, kein Rätselraten.',
    loesung: 'Die DNA-Analyse zeigte, dass Axel <strong>genetisch bedingt stark auf Blutzuckerschwankungen reagiert</strong>. Gleichzeitig lag sein Testosteron im unteren Normbereich. Mit gezielter Anpassung hat der Körper wieder reagiert.',
    vorher: { gewicht: '91 kg', punkte: ['Training ohne Fortschritt seit 18 Monaten', 'Stimmung und Antrieb stark schwankend', 'Schlechte Schlafqualität, morgens nicht erholt'] },
    nachher: { gewicht: '80 kg', punkte: ['Sichtbarer Muskelaufbau und Fettverlust', 'Stabiler Antrieb und bessere Stimmung', 'Tiefer Schlaf — morgens ausgeruht'] },
  },
]

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-xl" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.4)', boxShadow: '0 0 24px rgba(201,168,76,0.1)' }}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        controls={playing}
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      {!playing && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          <div
            className="flex items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              width: 58,
              height: 58,
              background: 'rgba(12,20,36,0.4)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.45)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.22)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#F2E0A7" style={{ marginLeft: 2 }}><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FallstudienSection({ content = {} }: { content?: Record<string, string> }) {
  const [mehrGeladen, setMehrGeladen] = useState(false)

  return (
    <section id="rezensionen" className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      {/* SVG Rastermuster */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="fs-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="fs-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <linearGradient id="fs-bg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="14%" stopColor="white" stopOpacity="1" />
            <stop offset="86%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fs-bg-fade-mask">
            <rect width="100%" height="100%" fill="url(#fs-bg-fade)" />
          </mask>
        </defs>
        <g mask="url(#fs-bg-fade-mask)">
          <rect width="100%" height="100%" fill="url(#fs-bg-grid)" />
          <rect width="100%" height="100%" fill="url(#fs-bg-diag)" />
        </g>
      </svg>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-12 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {content.fallstudien_label || 'Echte Ergebnisse'}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            {content.fallstudien_title_1 || 'So fühlt es sich an, wenn man sich'}<br className="hidden md:block" /> {content.fallstudien_title_2 || 'die Kontrolle zurückholt'}
          </h2>
        </div>

        {/* ── Alle Fallstudien untereinander ── */}
        <div className="flex flex-col gap-10">
          {fallstudien.map((fs, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden animate-fade-up"
              style={{
                background: '#091122',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Card Header */}
              <div
                className="px-8 py-3.5 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', background: 'rgba(201,168,76,0.04)' }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C' }} />
                <p className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Fallstudie: {content[`fallstudien${idx + 1}_name`] || fs.name}
                </p>
              </div>

              {/* ── Obere Sektion: 7 / 5 Grid ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-10">
                {/* Linke Spalte: Story */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  {[
                    { label: 'Problem', text: content[`fallstudien${idx + 1}_problem`] || fs.problem },
                    { label: 'Ziel',    text: content[`fallstudien${idx + 1}_ziel`] || fs.ziel },
                    { label: 'Lösung',  text: content[`fallstudien${idx + 1}_loesung`] || fs.loesung },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <p className="font-barlow font-bold text-sm uppercase tracking-wider mb-1.5" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {label}:
                      </p>
                      <p
                        className="font-inter text-sm md:text-base leading-relaxed"
                        style={{ color: '#A6B0BA' }}
                        dangerouslySetInnerHTML={{ __html: text.replace(/<strong>/g, '<strong style="color:#C8D0D9;font-weight:600">') }}
                      />
                    </div>
                  ))}
                </div>

                {/* Rechte Spalte: Media & Profil */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(201,168,76,0.5)', boxShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 12px rgba(201,168,76,0.15)' }}>
                    {'video' in fs && fs.video ? (
                      <VideoPlayer src={fs.video} />
                    ) : 'bild' in fs && fs.bild ? (
                      <div className="relative aspect-video overflow-hidden rounded-t-xl" style={{ border: '1px solid rgba(201,168,76,0.4)' }}>
                        <img src={fs.bild} alt={fs.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 22%' }} />
                      </div>
                    ) : (
                      <div className="relative aspect-video overflow-hidden flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                        <div className="flex items-center justify-center rounded-full" style={{ width: 56, height: 56, background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)', backdropFilter: 'blur(4px)' }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A84C"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    )}
                    <div className="px-5 py-4 text-center flex flex-col gap-1">
                      <p className="font-barlow font-bold text-xl" style={{ color: '#E6E8EB' }}>{content[`fallstudien${idx + 1}_name`] || fs.name}</p>
                      <p className="font-inter text-sm" style={{ color: '#7B8792' }}>{content[`fallstudien${idx + 1}_alter`] || fs.alter} · {content[`fallstudien${idx + 1}_beruf`] || fs.beruf}</p>
                      {'link' in fs && fs.link ? (
                        <a href={fs.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 mt-1 transition-colors hover:text-white" style={{ color: '#7B8792' }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                          </svg>
                          <span className="font-inter text-xs font-medium">{fs.instagram}</span>
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-1.5 mt-1">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7B8792" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                          </svg>
                          <span className="font-inter text-xs font-medium" style={{ color: '#7B8792' }}>{fs.instagram}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Untere Sektion: Transformation Duo ── */}
              <div className="p-8 md:p-10 pt-0" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 relative mt-8 items-center" style={{ gap: '12px' }}>

                  {/* Ausgangssituation */}
                  <div className="p-8 md:p-10 flex flex-col gap-4 rounded-2xl" style={{ background: 'rgba(180,30,30,0.15)' }}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-barlow font-bold text-base uppercase tracking-wide" style={{ color: '#E6E8EB' }}>Ausgangssituation</span>
                      <span className="font-inter text-xs font-bold px-3 py-1 rounded-md" style={{ background: '#C0392B', color: '#fff' }}>{content[`fallstudien${idx + 1}_vorher_gewicht`] || fs.vorher.gewicht}</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {fs.vorher.punkte.map((p, i) => (
                        <li key={i} className="flex items-center gap-3 font-inter text-sm" style={{ color: '#A6B0BA' }}>
                          <svg width="24" height="24" viewBox="0 0 38 38" fill="none" className="flex-shrink-0">
                            <defs><linearGradient id={`fx-${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                            <path d="M8 8L30 30M30 8L8 30" stroke={`url(#fx-${i})`} strokeWidth="4" strokeLinecap="round"/>
                          </svg>
                          <Rich html={content[`fallstudien${idx + 1}_vorher_punkt${i + 1}`] || p} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ergebnis */}
                  <div className="ergebnis-raised p-8 md:p-10 flex flex-col gap-4 relative overflow-hidden rounded-2xl" style={{ background: '#091122', border: '1px solid rgba(52,211,153,0.7)', boxShadow: '0 0 32px rgba(52,211,153,0.10), 0 0 8px rgba(52,211,153,0.06)' }}>
                    <span className="absolute right-4 bottom-2 font-barlow font-bold select-none pointer-events-none" style={{ fontSize: 96, lineHeight: 1, color: 'rgba(255,255,255,0.04)', letterSpacing: '-2px' }}>FS</span>
                    <div className="relative flex items-center gap-3 flex-wrap">
                      <span className="font-barlow font-bold text-base uppercase tracking-wide text-white">Ergebnis</span>
                      <span className="font-inter text-xs font-bold px-3 py-1 rounded-md" style={{ background: 'rgba(52,211,153,0.15)', color: '#6EE7B7', border: '1px solid rgba(52,211,153,0.35)' }}>{content[`fallstudien${idx + 1}_nachher_gewicht`] || fs.nachher.gewicht}</span>
                    </div>
                    <ul className="relative flex flex-col gap-3">
                      {fs.nachher.punkte.map((p, i) => (
                        <li key={i} className="flex items-center gap-3 font-inter text-sm text-white/70">
                          <svg width="24" height="24" viewBox="0 0 38 38" fill="none" className="flex-shrink-0">
                            <defs><linearGradient id={`fck-${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0E9E6E"/><stop offset="45%" stopColor="#34D399"/><stop offset="75%" stopColor="#A7F3D0"/><stop offset="100%" stopColor="#34D399"/></linearGradient></defs>
                            <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill={`url(#fck-${i})`}/>
                          </svg>
                          <Rich html={content[`fallstudien${idx + 1}_nachher_punkt${i + 1}`] || p} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pfeil-Badge */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full z-10" style={{ background: '#060E1F', border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weitere Fallstudien laden — blendet Platzhalter ein */}
        <div className="mt-10 flex justify-center animate-fade-up">
          {!mehrGeladen ? (
            <button
              onClick={() => setMehrGeladen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.4)', color: '#E8D49A' }}
            >
              Weitere Fallstudien laden
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <div
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-inter text-sm"
              style={{ background: 'rgba(201,168,76,0.03)', border: '1px dashed rgba(201,168,76,0.35)', color: '#7B8792' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              Weitere Rezensionen folgen
            </div>
          )}
        </div>

        {/* CTA — volle Breite wie eine weitere Testimonial-Kachel */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div
            className="relative w-full rounded-3xl px-8 py-12 md:px-16 md:py-16 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
              border: '1px solid rgba(201,168,76,0.4)',
              boxShadow: '0 0 50px rgba(201,168,76,0.12), inset 0 0 40px rgba(201,168,76,0.05)',
            }}
          >
            {/* Goldstreifen oben */}
            <div
              className="absolute top-0 left-10 right-10 h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)' }}
            />

            {/* Logo-Lockup wie in der Navigationsbar */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <Image
                src="/images/FS-Logo-60x60-transparenter-Hintergrund.png"
                alt="FS Performance Lab"
                width={60}
                height={60}
                className="rounded-lg object-contain"
              />
              <span className="flex flex-col leading-none text-left">
                <span className="font-barlow font-semibold text-lg md:text-xl tracking-wide" style={{ color: '#E6E8EB' }}>
                  Fabian Schönle
                </span>
                <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] mt-0.5" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  FS Performance Lab
                </span>
              </span>
            </div>

            <h3 className="font-barlow font-bold text-3xl md:text-4xl leading-snug mb-8 max-w-3xl mx-auto" style={{ color: '#E6E8EB' }}>
              {content.fallstudien_cta_title_1 || 'Wir entwickeln für dich eine'}{' '}
              <span style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {content.fallstudien_cta_highlight || 'maßgeschneiderte Strategie'}
              </span>
              {content.fallstudien_cta_title_2 || ', die deine Bedürfnisse und deinen Terminkalender berücksichtigt'}
            </h3>
            <a
              href={CALENDLY_URL}
              data-open-form="true"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-inter font-semibold text-base md:text-lg transition-transform"
            >
              {content.fallstudien_cta_button || 'Kostenlose Performance-Analyse buchen'}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
