'use client'

import { useEffect, useState } from 'react'
import { kastenStil } from '@/components/blog/Bausteine'

type Eintrag = { id: string; titel: string }

/**
 * Leselinie: Hat die Ueberschrift eines Abschnitts diese Hoehe passiert, gilt
 * er als „gerade gelesen“. Gut ein Drittel des Fensters, mindestens unter dem
 * Header. Bei 160 px blieb der vorige Abschnitt markiert, obwohl man den
 * neuen laengst las.
 */
function leselinie() {
  return Math.max(160, window.innerHeight * 0.35)
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Inhaltsverzeichnis eines Artikels. Markiert den Abschnitt, in dem man gerade
 * liest: der letzte, dessen Oberkante die Leselinie passiert hat. Per Scroll
 * statt IntersectionObserver, weil kurze Abschnitte sonst uebersprungen werden
 * und lange gar nicht als aktiv gelten, solange ihre Ueberschrift ausserhalb ist.
 *
 * `mobil` rendert eine aufklappbare Box fuer die Ansicht ueber dem Text.
 */
export default function Inhaltsverzeichnis({ eintraege, mobil = false }: { eintraege: Eintrag[]; mobil?: boolean }) {
  const [aktiv, setAktiv] = useState(eintraege[0]?.id)

  useEffect(() => {
    if (mobil) return
    let rahmen = 0
    function pruefen() {
      cancelAnimationFrame(rahmen)
      rahmen = requestAnimationFrame(() => {
        const linie = leselinie()
        let aktuell = eintraege[0]?.id
        for (const e of eintraege) {
          const el = document.getElementById(e.id)
          if (el && el.getBoundingClientRect().top <= linie) aktuell = e.id
        }
        // Am Seitenende den letzten Abschnitt markieren: Ist er kurz, erreicht
        // seine Ueberschrift die Leselinie sonst nie.
        const amEnde = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
        const letzter = eintraege[eintraege.length - 1]?.id
        const letzterEl = letzter ? document.getElementById(letzter) : null
        if (amEnde && letzterEl && letzterEl.getBoundingClientRect().top < window.innerHeight) aktuell = letzter
        setAktiv(aktuell)
      })
    }
    pruefen()
    window.addEventListener('scroll', pruefen, { passive: true })
    window.addEventListener('resize', pruefen)
    return () => {
      cancelAnimationFrame(rahmen)
      window.removeEventListener('scroll', pruefen)
      window.removeEventListener('resize', pruefen)
    }
  }, [eintraege, mobil])

  const liste = (
    <ol className="flex flex-col gap-1">
      {eintraege.map((e, i) => {
        const istAktiv = !mobil && e.id === aktiv
        return (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              className="flex items-start gap-3 rounded-lg px-3 py-2 font-inter text-sm leading-snug transition-colors hover:text-white"
              style={{
                color: istAktiv ? '#E6E8EB' : '#8A95A1',
                background: istAktiv ? 'rgba(201,168,76,0.08)' : 'transparent',
                boxShadow: istAktiv ? 'inset 2px 0 0 #C9A84C' : 'none',
              }}
              aria-current={istAktiv ? 'location' : undefined}
            >
              <span className="font-barlow font-semibold text-sm tabular-nums flex-shrink-0" style={{ color: istAktiv ? '#E8D49A' : '#5B6773' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{e.titel}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )

  if (mobil) {
    return (
      <details className="rounded-2xl px-4 py-3 group" style={kastenStil}>
        <summary className="flex items-center justify-between cursor-pointer list-none px-1 py-1">
          <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={goldText}>
            Inhalt
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-open:rotate-180" style={{ color: '#C9A84C' }}>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="mt-3">{liste}</div>
      </details>
    )
  }

  return (
    <nav aria-label="Inhaltsverzeichnis" className="rounded-2xl p-5" style={kastenStil}>
      <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3 px-3" style={goldText}>
        Inhalt
      </p>
      {liste}
    </nav>
  )
}
