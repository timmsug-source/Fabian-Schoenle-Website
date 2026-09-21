'use client'

import { useEffect, useState } from 'react'

type Rest = { tage: number; stunden: number; minuten: number; sekunden: number }

/** Restzeit bis zum Stichtag. Nach Ablauf steht überall 0, nichts läuft rückwärts weiter. */
function restzeit(ziel: number): Rest {
  const ms = Math.max(0, ziel - Date.now())
  const sekundenGesamt = Math.floor(ms / 1000)
  return {
    tage: Math.floor(sekundenGesamt / 86400),
    stunden: Math.floor((sekundenGesamt % 86400) / 3600),
    minuten: Math.floor((sekundenGesamt % 3600) / 60),
    sekunden: sekundenGesamt % 60,
  }
}

const felder: { schluessel: keyof Rest; label: string }[] = [
  { schluessel: 'tage', label: 'Tage' },
  { schluessel: 'stunden', label: 'Stunden' },
  { schluessel: 'minuten', label: 'Minuten' },
  { schluessel: 'sekunden', label: 'Sekunden' },
]

/**
 * Countdown bis zu einem festen Stichtag.
 *
 * Bewusst ein fester Termin und kein Zähler, der bei jedem Besucher neu
 * startet: Ein Countdown, der sich nach dem Neuladen zurücksetzt, ist schnell
 * durchschaut und kostet mehr Vertrauen, als die Dringlichkeit einbringt.
 *
 * Die erste Anzeige kommt erst nach dem Einhängen im Browser. Auf dem Server
 * stünde dort eine andere Zeit als kurz darauf im Browser — React meldet das
 * als Abweichung. Bis dahin stehen Striche statt Zahlen.
 */
export default function LandingCountdown({
  bis,
  headline = 'Nur noch',
  hervorgehoben = 'wenige Tage',
  headlineEnde = 'kostenfrei verfügbar',
}: {
  /** Stichtag als ISO-Zeitpunkt, z. B. '2026-10-31T23:59:59+02:00' */
  bis: string
  headline?: string
  hervorgehoben?: string
  headlineEnde?: string
}) {
  const ziel = new Date(bis).getTime()
  const [rest, setRest] = useState<Rest | null>(null)

  useEffect(() => {
    setRest(restzeit(ziel))
    const uhr = setInterval(() => setRest(restzeit(ziel)), 1000)
    return () => clearInterval(uhr)
  }, [ziel])

  return (
    <div className="text-center">
      <p className="font-barlow font-bold text-3xl md:text-4xl leading-snug mb-8" style={{ color: '#E6E8EB' }}>
        {headline}{' '}
        <span className="unterstrich-fest">{hervorgehoben}</span>{' '}
        {headlineEnde}
      </p>

      <div className="flex items-start justify-center gap-3 md:gap-8">
        {felder.map(({ schluessel, label }, i) => (
          <div key={schluessel} className="flex items-start gap-3 md:gap-8">
            {i > 0 && (
              <span className="font-barlow font-bold text-4xl md:text-5xl leading-none pt-1" style={{ color: 'rgba(201,168,76,0.4)' }}>
                :
              </span>
            )}
            <div className="flex flex-col items-center" style={{ minWidth: 62 }}>
              <span className="font-barlow font-bold text-5xl md:text-6xl leading-none tabular-nums" style={{ color: '#E6E8EB' }}>
                {rest ? String(rest[schluessel]).padStart(2, '0') : '––'}
              </span>
              <span className="font-inter text-xs md:text-sm mt-2" style={{ color: '#7B8792' }}>
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
