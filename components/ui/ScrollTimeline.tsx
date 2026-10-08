'use client'

import { useEffect, useRef, useState } from 'react'

const GOLD_TEXT = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

export type Station = {
  /** Kurzes Schlagwort links der Linie, z. B. „Davor“ */
  kicker: string
  titel: string
  text: string
}

/**
 * Zeitleiste, die beim Scrollen mitläuft: Die Verbindungsstriche füllen sich,
 * und jede Station schaltet von matt auf aktiv, sobald sie die Bildschirmmitte
 * passiert. Dieselbe Rechnung wie bei den Ablauf-Schritten der Kontaktsektion.
 *
 * Die Seite, die das einbindet, bleibt eine Server-Komponente.
 */
export default function ScrollTimeline({ eintraege }: { eintraege: Station[] }) {
  const ref = useRef<HTMLOListElement>(null)
  const [fills, setFills] = useState<number[]>([])
  const [aktive, setAktive] = useState<boolean[]>([])

  useEffect(() => {
    const update = () => {
      const container = ref.current
      if (!container) return
      const anchor = window.innerHeight * 0.55

      const segs = container.querySelectorAll<HTMLElement>('[data-seg]')
      const next = Array.from(segs).map((seg) => {
        const r = seg.getBoundingClientRect()
        return Math.max(0, Math.min(1, (anchor - r.top) / r.height))
      })
      setFills((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next
      )

      const dots = container.querySelectorAll<HTMLElement>('[data-dot]')
      const an = Array.from(dots).map((d) => d.getBoundingClientRect().top < anchor)
      setAktive((prev) =>
        prev.length === an.length && prev.every((v, i) => v === an[i]) ? prev : an
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <ol ref={ref} className="flex flex-col list-none">
      {eintraege.map((station, i) => {
        const an = aktive[i] ?? false
        return (
          <li key={i} className="grid grid-cols-[auto_auto_1fr] gap-x-4 md:gap-x-6">
            {/* Schlagwort links der Linie */}
            <span
              className="font-inter text-[11px] md:text-xs font-semibold uppercase tracking-widest text-right pt-1 whitespace-nowrap"
              style={an ? GOLD_TEXT : { color: '#5B6773' }}
            >
              {station.kicker}
            </span>

            {/* Punkt und Verbindungsstrich */}
            <div className="flex flex-col items-center">
              <span
                data-dot
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 18,
                  height: 18,
                  marginTop: '0.15rem',
                  border: `2px solid ${an ? '#C9A84C' : 'rgba(201,168,76,0.25)'}`,
                  background: an ? 'rgba(201,168,76,0.12)' : 'transparent',
                  boxShadow: an ? '0 0 12px rgba(201,168,76,0.5)' : 'none',
                  transition: 'border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease',
                }}
              >
                <span
                  className="rounded-full"
                  style={{
                    width: 7,
                    height: 7,
                    background: an ? '#E8D49A' : 'rgba(201,168,76,0.3)',
                    transition: 'background 0.35s ease',
                  }}
                />
              </span>

              {i < eintraege.length - 1 && (
                <div
                  data-seg
                  className="relative flex-1 my-2 rounded-full"
                  style={{ width: 2, background: 'rgba(201,168,76,0.13)', minHeight: 80 }}
                >
                  <div
                    className="absolute top-0 left-0 w-full rounded-full"
                    style={{
                      height: `${(fills[i] ?? 0) * 100}%`,
                      background: 'linear-gradient(to bottom, #E8D49A, #C9A84C)',
                      boxShadow: '0 0 10px rgba(201,168,76,0.7)',
                    }}
                  />
                </div>
              )}
            </div>

            {/* text-left: die globale Mobil-Zentrierung wuerde den Fliesstext neben
                der Zeitleiste mittig setzen. */}
            <div className={`text-left ${i < eintraege.length - 1 ? 'pb-20' : ''}`}>
              <h3
                className="font-barlow font-bold text-lg md:text-xl leading-snug mb-2"
                style={{ color: an ? '#E6E8EB' : '#8A929C', transition: 'color 0.35s ease' }}
              >
                {station.titel}
              </h3>
              <p
                className="font-inter text-base md:text-lg leading-relaxed"
                style={{ color: an ? '#A6B0BA' : '#5B6773', transition: 'color 0.35s ease' }}
              >
                {station.text}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
