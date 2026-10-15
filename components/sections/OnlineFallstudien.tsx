'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export type OnlineFallstudie = {
  name: string
  /** Zeile unter dem Namen, z. B. „36 Jahre · Gründer · …“ */
  rolle: string
  foto: string
  /** Ausschnitt im Hochformat-Rahmen, z. B. „62% center“ */
  fotoPosition?: string
  linkedin?: string
  /** Testimonial-Video, öffnet sich über den Knopf auf dem Foto */
  video?: string
  /** Gewicht vorher und nachher in kg */
  von: number
  nach: number
  /** Beschriftung am Ende der Zeitachse, z. B. „nach 10 Wochen“ */
  zeitraum: string
  /** Hervorgehobene Aussage; `akzent` steht in Gold, `akzentZuerst` stellt ihn vorne an */
  zitat: { text: string; akzent: string; akzentZuerst?: boolean }
  vorher: string[]
  nachher: string[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

const kg = (wert: number) => wert.toLocaleString('de-DE')

/**
 * Fallstudien für /personal-coaching-online: je Person eine Karte mit Foto,
 * Gewicht vorher → nachher, einer Aussage dazu, wie das Coaching online lief,
 * dem Gewichtsverlauf und den Listen Ausgangssituation / Ergebnis.
 *
 * Eigene Komponente statt VideoTestimonials: Die steht so auch auf
 * /abnehmcoaching und in Frankfurt, dort soll sich nichts ändern.
 */
export default function OnlineFallstudien({
  label,
  headline,
  headlineAccent,
  faelle,
}: {
  label?: string
  headline: string
  headlineAccent?: string
  faelle: OnlineFallstudie[]
}) {
  const [video, setVideo] = useState<{ src: string; name: string } | null>(null)

  return (
    <section className="relative" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {label && (
          <p className="font-inter text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-5 md:mb-6" style={goldText}>
            {label}
          </p>
        )}
        <h2
          className="font-barlow font-bold text-4xl md:text-5xl xl:text-6xl leading-[1.1] mb-10 md:mb-14 max-w-5xl"
          style={{ color: '#E6E8EB' }}
        >
          {headline}
          {headlineAccent && (
            <>
              {' '}
              <span style={goldText}>{headlineAccent}</span>
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {faelle.map((f) => (
            <Karte key={f.name} fall={f} onVideo={() => f.video && setVideo({ src: f.video, name: f.name })} />
          ))}
        </div>
      </div>

      {video && <VideoFenster src={video.src} name={video.name} onSchliessen={() => setVideo(null)} />}
    </section>
  )
}

function Karte({ fall: f, onVideo }: { fall: OnlineFallstudie; onVideo: () => void }) {
  return (
    /* Linksbündig auch auf dem Handy: Foto und Angaben stehen nebeneinander,
       zentriert fiele das auseinander. */
    <article
      className="animate-fade-up rounded-3xl p-6 md:p-10 text-left flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #0D1A30 0%, #0A1428 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 24px 50px rgba(0,0,0,0.3)',
      }}
    >
      {/* Kopf: Foto, Gewicht, Name */}
      <div className="flex items-center gap-5 md:gap-8">
        <div
          className="relative flex-shrink-0 w-[110px] md:w-[160px] aspect-[4/5] rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <Image
            src={f.foto}
            alt={f.name}
            fill
            sizes="160px"
            className="object-cover"
            style={{ objectPosition: f.fotoPosition ?? 'center' }}
          />
          {f.video && (
            <button
              type="button"
              onClick={onVideo}
              aria-label={`Video von ${f.name} ansehen`}
              className="group absolute inset-0 flex items-end justify-center pb-3"
              style={{ background: 'linear-gradient(to bottom, rgba(6,14,31,0) 55%, rgba(6,14,31,0.75) 100%)' }}
            >
              <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-inter text-[11px] font-semibold uppercase tracking-wider transition-transform group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D49A)', color: '#0B1525' }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 4v16l14-8z" />
                </svg>
                Video
              </span>
            </button>
          )}
        </div>

        <div className="min-w-0">
          <p
            className="inline-flex items-baseline gap-2 md:gap-3 rounded-xl px-4 md:px-5 py-2 md:py-3 mb-4 md:mb-5 font-barlow font-bold text-2xl md:text-4xl leading-none whitespace-nowrap"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span style={goldText}>{kg(f.von)}</span>
            <span className="font-inter font-normal text-lg md:text-2xl" style={{ color: '#E8D49A' }} aria-label="auf">→</span>
            <span style={goldText}>{kg(f.nach)} kg</span>
          </p>

          <div className="flex items-center gap-2.5">
            <p className="font-inter text-xs md:text-sm font-semibold uppercase tracking-[0.3em]" style={goldText}>
              {f.name}
            </p>
            {f.linkedin && (
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition-colors hover:text-white"
                style={{ color: '#7B8792' }}
                aria-label={`${f.name} auf LinkedIn ansehen`}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            )}
          </div>
          <p className="font-inter text-sm md:text-base leading-relaxed mt-1.5" style={{ color: '#A6B0BA' }}>
            {f.rolle}
          </p>
        </div>
      </div>

      {/* Aussage: wie das Coaching online lief */}
      <p
        className="rounded-xl px-5 md:px-7 py-4 md:py-5 mt-7 md:mt-9 font-inter text-base md:text-lg leading-relaxed"
        style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid #C9A84C', color: '#E6E8EB' }}
      >
        {f.zitat.akzentZuerst ? (
          <>
            <strong className="font-semibold" style={goldText}>{f.zitat.akzent}</strong> {f.zitat.text}
          </>
        ) : (
          <>
            {f.zitat.text} <strong className="font-semibold" style={goldText}>{f.zitat.akzent}</strong>
          </>
        )}
      </p>

      <Gewichtsverlauf von={f.von} nach={f.nach} zeitraum={f.zeitraum} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 pt-7 md:pt-8 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#8A94A0' }}>
            Ausgangssituation
          </p>
          <ul className="flex flex-col gap-3.5">
            {f.vorher.map((p) => (
              <li key={p} className="flex gap-3 font-inter text-base leading-snug" style={{ color: '#E6E8EB' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="#E35D50" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={goldText}>
            Ergebnis
          </p>
          <ul className="flex flex-col gap-3.5">
            {f.nachher.map((p) => (
              <li key={p} className="flex gap-3 font-inter text-base leading-snug" style={{ color: '#E6E8EB' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M4 12.5l5 5L20 6.5" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

/**
 * Gewichtsverlauf als Kurve von „vorher“ zu „nachher“. Zwischenwerte gibt es
 * nicht, die Kurve ist schematisch: anfangs steiler, zum Ende flacher, so wie
 * ein Verlauf typischerweise aussieht. Beschriftet sind nur die zwei echten
 * Werte und der Zeitraum.
 *
 * Die Kurve deckt sich von links auf, sobald die Grafik ins Bild kommt; ohne
 * Bewegungswunsch steht sie sofort.
 */
function Gewichtsverlauf({ von, nach, zeitraum }: { von: number; nach: number; zeitraum: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [sichtbar, setSichtbar] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSichtbar(true)
      return
    }
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) {
          setSichtbar(true)
          beobachter.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    beobachter.observe(el)
    return () => beobachter.disconnect()
  }, [])

  // Koordinaten im Raster 0–100 × 0–50; Start oben links, Ende unten rechts
  const kurve = 'M2 9 C 28 24, 52 37, 98 41'
  const ueberblenden = (verzoegerung: number) => ({
    opacity: sichtbar ? 1 : 0,
    transition: `opacity 0.5s ease ${verzoegerung}s`,
  })

  return (
    <div ref={ref} className="mt-7 md:mt-9 mb-7 md:mb-8">
      <div className="flex items-baseline justify-between mb-3">
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: '#8A94A0' }}>
          Gewichtsverlauf
        </p>
        <p className="font-barlow font-bold text-xl md:text-2xl leading-none" style={goldText}>
          −{kg(Math.round((von - nach) * 10) / 10)} kg
        </p>
      </div>

      <div
        className="relative h-28 md:h-32"
        role="img"
        aria-label={`Gewicht von ${kg(von)} kg auf ${kg(nach)} kg, ${zeitraum}`}
      >
        {/* Aufgedeckt wird über clip-path statt über stroke-dashoffset: Mit
            non-scaling-stroke rechnet der Browser die Strichlänge in
            Bildschirmpixeln, die Linie wäre dann gestrichelt. */}
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full overflow-visible"
          aria-hidden="true"
          style={{
            clipPath: sichtbar ? 'inset(-10% -5% -10% -5%)' : 'inset(-10% 100% -10% -5%)',
            transition: 'clip-path 1.4s cubic-bezier(0.33, 1, 0.68, 1)',
          }}
        >
          <defs>
            <linearGradient id={`gv-flaeche-${von}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,168,76,0.22)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </linearGradient>
            <linearGradient id={`gv-linie-${von}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8A94A0" />
              <stop offset="35%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#E8D49A" />
            </linearGradient>
          </defs>

          {[9, 25, 41].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.07)" strokeDasharray="1.5 1.5" vectorEffect="non-scaling-stroke" />
          ))}

          <path d={`${kurve} L 98 50 L 2 50 Z`} fill={`url(#gv-flaeche-${von})`} />
          <path
            d={kurve}
            fill="none"
            stroke={`url(#gv-linie-${von})`}
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Punkte und Werte als HTML, damit sie bei gestreckter Grafik rund bleiben */}
        <span className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ left: '2%', top: '18%', background: '#8A94A0' }} />
        <span
          className="absolute font-inter text-sm font-semibold whitespace-nowrap"
          style={{ left: '5%', top: '18%', transform: 'translateY(-130%)', color: '#AEB5BE' }}
        >
          {kg(von)} kg
        </span>

        <span
          className="absolute w-3.5 h-3.5 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ left: '98%', top: '82%', background: '#E8D49A', boxShadow: '0 0 12px rgba(232,212,154,0.7)', ...ueberblenden(1.2) }}
        />
        <span
          className="absolute font-inter text-sm font-semibold whitespace-nowrap"
          style={{ right: '3%', top: '82%', transform: 'translateY(-150%)', color: '#E8D49A', ...ueberblenden(1.2) }}
        >
          {kg(nach)} kg
        </span>
      </div>

      <div className="flex justify-between mt-2 font-inter text-xs" style={{ color: '#7B8792' }}>
        <span>Start</span>
        <span>{zeitraum}</span>
      </div>
    </div>
  )
}

/** Testimonial-Video als Overlay — Escape und Klick daneben schließen */
function VideoFenster({ src, name, onSchliessen }: { src: string; name: string; onSchliessen: () => void }) {
  useEffect(() => {
    function beiTaste(e: KeyboardEvent) {
      if (e.key === 'Escape') onSchliessen()
    }
    document.addEventListener('keydown', beiTaste)
    const vorher = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', beiTaste)
      document.body.style.overflow = vorher
    }
  }, [onSchliessen])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(3,8,18,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onSchliessen() }}
      role="dialog"
      aria-modal="true"
      aria-label={`Video von ${name}`}
    >
      <div className="relative w-full max-w-4xl">
        <button
          type="button"
          onClick={onSchliessen}
          aria-label="Schließen"
          className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:text-white"
          style={{ color: '#AEB5BE', border: '1px solid rgba(201,168,76,0.3)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <video
          src={src}
          className="w-full aspect-video rounded-2xl"
          style={{ background: '#000', border: '1px solid rgba(201,168,76,0.3)' }}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  )
}
