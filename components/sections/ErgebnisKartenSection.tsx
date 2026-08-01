'use client'

import { useEffect, useState } from 'react'
import BewertungsGrid from '@/components/sections/BewertungsGrid'

type IconName = 'koerper' | 'kopf' | 'energie'

type ErgebnisKarte = {
  label: string
  teaser: string
  punkte: string[]
  /** Icon und Farbe wie in der Ergebnis-Sektion der Startseite */
  icon: IconName
}

/* Icons und Farben 1:1 aus der Startseite übernommen */
const ICONS: Record<IconName, { farbe: string; svg: React.ReactNode }> = {
  koerper: {
    farbe: '#4A8FE7',
    svg: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="8" r="5" fill="currentColor" />
        <path d="M8 34 L8 20 C8 15 12 12 18 12 C24 12 28 15 28 20 L28 34" fill="currentColor" />
        <rect x="6" y="19" width="5" height="14" rx="2.5" fill="currentColor" />
        <rect x="25" y="19" width="5" height="14" rx="2.5" fill="currentColor" />
      </svg>
    ),
  },
  kopf: {
    farbe: '#E0574C',
    svg: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4 C11 4 6 9 6 15 C6 19 8 22 11 24 L11 28 L25 28 L25 24 C28 22 30 19 30 15 C30 9 25 4 18 4Z" fill="currentColor" />
        <path d="M20 10 L15 18 L19 18 L16 26 L22 16 L18 16 L20 10Z" fill="#060E1F" opacity="0.3" />
      </svg>
    ),
  },
  energie: {
    farbe: '#46B06A',
    svg: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 3 L10 20 L17 20 L14 33 L26 16 L19 16 L22 3Z" fill="currentColor" />
      </svg>
    ),
  },
}

type ErgebnisKartenSectionProps = {
  label?: string
  headline: string
  headlineAccent?: string
  intro?: string
  karten: ErgebnisKarte[]
  /** Überleitung zum Bewertungsraster — zwei Zeilen, die zweite in Gold */
  bruecke1?: string
  bruecke2?: string
  /** Hängt das Raster echter Bewertungen an dieselbe Sektion an */
  bewertungsGrid?: boolean
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

function Haken({ farbe }: { farbe: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 38 38" fill="none" shapeRendering="geometricPrecision">
      <polygon
        points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
        fill={farbe}
        stroke={farbe}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ErgebnisKartenSection({
  label,
  headline,
  headlineAccent,
  intro,
  karten,
  bruecke1,
  bruecke2,
  bewertungsGrid,
}: ErgebnisKartenSectionProps) {
  const [offen, setOffen] = useState<number | null>(null)
  const aktiv = offen !== null ? karten[offen] : null

  // Escape schließt, und solange offen ist, scrollt die Seite dahinter nicht mit
  useEffect(() => {
    if (offen === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOffen(null)
    }
    const vorher = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = vorher
      window.removeEventListener('keydown', onKey)
    }
  }, [offen])

  return (
    <section className="relative" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

      {/* Kopf */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        {label && (
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={goldText}>
            {label}
          </p>
        )}
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          {headline}
          {headlineAccent && (
            <>
              {' '}
              <span style={goldText}>{headlineAccent}</span>
            </>
          )}
        </h2>
        {intro && (
          <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
            {intro}
          </p>
        )}
      </div>

      {/* Karten */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {karten.map((k, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOffen(i)}
            className="ergebnis-karte relative rounded-2xl p-7 text-left flex flex-col overflow-hidden"
            aria-haspopup="dialog"
          >
            {/* Farbstreifen oben — wie auf der Startseite */}
            <span
              className="absolute top-0 left-6 right-6 h-px rounded-full"
              style={{ background: `linear-gradient(to right, transparent, ${ICONS[k.icon].farbe}99, transparent)` }}
            />

            <span className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0" style={{ color: ICONS[k.icon].farbe }}>
                {ICONS[k.icon].svg}
              </span>
              <span className="font-barlow font-bold text-xl md:text-2xl" style={{ color: '#E6E8EB' }}>
                {k.label}
              </span>
            </span>
            <span className="font-inter text-sm md:text-base leading-relaxed flex-1" style={{ color: '#98A4B1' }}>
              {k.teaser}
            </span>
            <span className="mt-6 inline-flex items-center gap-2 font-inter text-sm font-semibold" style={{ color: '#C9A84C' }}>
              {k.punkte.length} Ergebnisse ansehen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Überleitung zu den echten Bewertungen */}
      {(bruecke1 || bruecke2) && (
        <div className="mt-24 md:mt-32 mb-10 text-center">
          {bruecke1 && (
            <p className="font-barlow font-bold text-2xl md:text-3xl" style={{ color: '#E6E8EB' }}>
              {bruecke1}
            </p>
          )}
          {bruecke2 && (
            <p className="font-barlow font-bold text-2xl md:text-3xl" style={goldText}>
              {bruecke2}
            </p>
          )}
        </div>
      )}

      {bewertungsGrid && (
        <BewertungsGrid hinweis="Verifizierte Rezensionen echter Kunden von LinkedIn, Trustpilot und Google." />
      )}

      </div>

      {/* Popup */}
      {aktiv && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={aktiv.label}
        >
          {/* Hintergrund — Klick schließt */}
          <button
            type="button"
            onClick={() => setOffen(null)}
            aria-label="Schließen"
            className="absolute inset-0 cursor-default"
            style={{ background: 'rgba(4,9,20,0.8)', backdropFilter: 'blur(3px)' }}
          />

          <div
            className="relative w-full max-w-lg rounded-2xl p-7 md:p-8 max-h-[85vh] overflow-y-auto"
            style={{
              background: 'linear-gradient(155deg, #16213A 0%, #0D1829 60%, #091122 100%)',
              border: '1px solid rgba(201,168,76,0.5)',
              boxShadow: '0 0 0 1px rgba(201,168,76,0.2), 0 0 40px rgba(201,168,76,0.25), 0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            <button
              type="button"
              onClick={() => setOffen(null)}
              aria-label="Schließen"
              className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full transition-colors"
              style={{ border: '1px solid rgba(201,168,76,0.35)', color: '#C9A84C' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-2 pr-12">
              <span className="flex-shrink-0" style={{ color: ICONS[aktiv.icon].farbe }}>
                {ICONS[aktiv.icon].svg}
              </span>
              <h3 className="font-barlow font-bold text-2xl md:text-3xl" style={{ color: '#E6E8EB' }}>
                {aktiv.label}
              </h3>
            </div>
            <p className="font-inter text-sm md:text-base leading-relaxed mb-6" style={{ color: '#98A4B1' }}>
              {aktiv.teaser}
            </p>

            <ul className="flex flex-col gap-3">
              {aktiv.punkte.map((p, j) => (
                <li key={j} className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center h-6">
                    <Haken farbe={ICONS[aktiv.icon].farbe} />
                  </span>
                  <span className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
