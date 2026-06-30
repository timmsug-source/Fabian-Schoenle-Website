'use client'

import { useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const fallstudien = [
  {
    name: 'Robert',
    alter: '42 Jahre',
    beruf: 'Geschäftsführer',
    instagram: '@markus_ceo',
    video: '/videos/Robert_Testimonial_final.mp4',
    problem: 'Robert arbeitet <strong>60+ Stunden pro Woche</strong>. Sein Körper hat auf die jahrelange Kombination aus <strong>Dauerstress, schlechtem Schlaf</strong> und unregelmäßiger Ernährung reagiert: 14 kg zugenommen, permanent müde, nachmittags kaum noch handlungsfähig.',
    ziel: 'Er will wieder die <strong>Energie haben, die er mit Anfang 30 hatte</strong> — leistungsfähig durch den ganzen Tag, ohne auf Koffein angewiesen zu sein. Und er will, dass sein Körper wieder seinem eigenen Anspruch entspricht.',
    loesung: 'Blutbild und Hormonstatus zeigten <strong>deutlich erhöhte Cortisolwerte</strong> und eine beginnende Insulinresistenz. Wir haben Ernährung, Schlafprotokoll und Trainingsreize präzise auf seinen Stoffwechsel abgestimmt — ohne seinen Alltag auf den Kopf zu stellen.',
    vorher: { gewicht: '98 kg', punkte: ['Permanent erschöpft trotz 7 Stunden Schlaf', 'Konzentration bricht nachmittags komplett ein', 'Bauchfett trotz gelegentlichem Sport'] },
    nachher: { gewicht: '84 kg', punkte: ['Stabile Energie ohne Koffein-Spitzen', 'Klarer Kopf bis in den Abend', '−14 kg Körpergewicht in 5 Monaten'] },
  },
  {
    name: 'Stefan',
    alter: '38 Jahre',
    beruf: 'Selbstständiger Unternehmer',
    instagram: '@stefan_builds',
    problem: 'Stefan hat in den letzten 3 Jahren eine Firma aufgebaut. Sein Körper ist dabei auf der Strecke geblieben: <strong>Schlafprobleme, ständige Stimmungsschwankungen</strong> — und trotz regelmäßigem Training kein sichtbarer Fortschritt.',
    ziel: 'Er will verstehen, <strong>warum sein Körper nicht mehr reagiert</strong>. Und er will konkrete Ergebnisse — kein weiteres Ausprobieren, keine Diäten, kein Rätselraten.',
    loesung: 'Die DNA-Analyse zeigte, dass Stefan <strong>genetisch bedingt stark auf Blutzuckerschwankungen reagiert</strong>. Gleichzeitig lag sein Testosteron im unteren Normbereich. Mit gezielter Anpassung hat der Körper wieder reagiert.',
    vorher: { gewicht: '91 kg', punkte: ['Training ohne Fortschritt seit 18 Monaten', 'Stimmung und Antrieb stark schwankend', 'Schlechte Schlafqualität, morgens nicht erholt'] },
    nachher: { gewicht: '80 kg', punkte: ['Sichtbarer Muskelaufbau und Fettverlust', 'Stabiler Antrieb und bessere Stimmung', 'Tiefer Schlaf — morgens ausgeruht'] },
  },
  {
    name: 'Thomas',
    alter: '45 Jahre',
    beruf: 'Führungskraft im Management',
    instagram: '@thomas_mgmt',
    problem: 'Thomas hat alles versucht: <strong>Low Carb, Intervallfasten, Personal Trainer</strong>. Kurzfristig passierte immer etwas — aber nach wenigen Wochen stagnierte alles. Er hat aufgehört zu glauben, dass sein Körper noch veränderbar ist.',
    ziel: 'Er will einen Ansatz, der <strong>nachhaltig funktioniert</strong> — nicht der nächste Versuch, der nach 6 Wochen wieder verpufft. Und er will seinen Körper wieder als Ressource erleben.',
    loesung: 'Blutanalyse hat eine <strong>subklinische Schilddrüsenunterfunktion</strong> und erhebliche Mikronährstoffdefizite aufgedeckt — beides unerkannt. Erst nachdem diese Grundlagen stabilisiert waren, haben wir Training und Ernährung aufgebaut.',
    vorher: { gewicht: '103 kg', punkte: ['Viele gescheiterte Versuche in 5 Jahren', 'Körper reagiert kaum auf Training oder Diät', 'Ständig müde, Motivation auf dem Tiefpunkt'] },
    nachher: { gewicht: '87 kg', punkte: ['Erste nachhaltige Ergebnisse nach Wochen', '−16 kg Körpergewicht über 6 Monate', 'Energie und Drive wie mit Anfang 30'] },
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
    <div className="relative aspect-video overflow-hidden rounded-xl" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(201,168,76,0.4)', boxShadow: '0 0 24px rgba(201,168,76,0.1)' }}>
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
            style={{ width: 56, height: 56, background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)', backdropFilter: 'blur(4px)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A84C"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FallstudienSection() {
  return (
    <section id="rezensionen" className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      {/* SVG Rastermuster */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="fs-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
          </pattern>
          <pattern id="fs-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fs-bg-grid)" />
        <rect width="100%" height="100%" fill="url(#fs-bg-diag)" />
      </svg>
      {/* Goldener Radial-Glow oben mittig */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Echte Ergebnisse
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            Was passiert, wenn das System<br className="hidden md:block" /> richtig eingestellt ist
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
                <p className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Fallstudie: {fs.name}
                </p>
              </div>

              {/* ── Obere Sektion: 7 / 5 Grid ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-10">
                {/* Linke Spalte: Story */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {[
                    { label: 'Problem', text: fs.problem },
                    { label: 'Ziel',    text: fs.ziel },
                    { label: 'Lösung',  text: fs.loesung },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <p className="font-barlow font-bold text-sm uppercase tracking-wider mb-1.5" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {label}:
                      </p>
                      <p
                        className="font-inter text-sm md:text-base leading-relaxed"
                        style={{ color: '#8A96A3' }}
                        dangerouslySetInnerHTML={{ __html: text.replace(/<strong>/g, '<strong style="color:#C8D0D9;font-weight:600">') }}
                      />
                    </div>
                  ))}
                </div>

                {/* Rechte Spalte: Media & Profil */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {'video' in fs && fs.video ? (
                      <VideoPlayer src={fs.video} />
                    ) : (
                      <div className="relative aspect-video overflow-hidden flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                        <div className="flex items-center justify-center rounded-full" style={{ width: 56, height: 56, background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)', backdropFilter: 'blur(4px)' }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A84C"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    )}
                    <div className="px-5 py-4 text-center flex flex-col gap-1">
                      <p className="font-barlow font-bold text-xl" style={{ color: '#E6E8EB' }}>{fs.name}</p>
                      <p className="font-inter text-sm" style={{ color: '#5B6773' }}>{fs.alter} · {fs.beruf}</p>
                      <div className="flex items-center justify-center gap-1.5 mt-1">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5B6773" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                        <span className="font-inter text-xs font-medium" style={{ color: '#5B6773' }}>{fs.instagram}</span>
                      </div>
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
                      <span className="font-inter text-xs font-bold px-3 py-1 rounded-md" style={{ background: '#C0392B', color: '#fff' }}>{fs.vorher.gewicht}</span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {fs.vorher.punkte.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 font-inter text-sm" style={{ color: '#8A96A3' }}>
                          <svg width="18" height="18" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5">
                            <defs><linearGradient id={`fx-${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                            <path d="M8 8L30 30M30 8L8 30" stroke={`url(#fx-${i})`} strokeWidth="4" strokeLinecap="round"/>
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ergebnis */}
                  <div className="ergebnis-raised p-8 md:p-10 flex flex-col gap-4 relative overflow-hidden rounded-2xl" style={{ background: '#091122', border: '1px solid rgba(201,168,76,0.35)', boxShadow: '0 0 32px rgba(201,168,76,0.08), 0 0 8px rgba(201,168,76,0.05)' }}>
                    <span className="absolute right-4 bottom-2 font-barlow font-bold select-none pointer-events-none" style={{ fontSize: 96, lineHeight: 1, color: 'rgba(255,255,255,0.04)', letterSpacing: '-2px' }}>FS</span>
                    <div className="relative flex items-center gap-3 flex-wrap">
                      <span className="font-barlow font-bold text-base uppercase tracking-wide text-white">Ergebnis</span>
                      <span className="font-inter text-xs font-bold px-3 py-1 rounded-md" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>{fs.nachher.gewicht}</span>
                    </div>
                    <ul className="relative flex flex-col gap-3">
                      {fs.nachher.punkte.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 font-inter text-sm text-white/70">
                          <svg width="18" height="18" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5">
                            <defs><linearGradient id={`fck-${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#B8832A"/><stop offset="45%" stopColor="#C9A84C"/><stop offset="75%" stopColor="#F2D27A"/><stop offset="100%" stopColor="#C9A84C"/></linearGradient></defs>
                            <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill={`url(#fck-${i})`}/>
                          </svg>
                          {p}
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

        {/* CTA */}
        <div className="mt-10 text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-inter font-semibold text-sm"
            style={{ background: 'radial-gradient(circle, #C9A84C, #E8D49A)', color: '#060E1F', boxShadow: '0 4px 24px rgba(201,168,76,0.25)' }}
          >
            Kostenlose Performance-Analyse buchen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
