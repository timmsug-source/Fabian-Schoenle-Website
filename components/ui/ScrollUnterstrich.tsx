'use client'

import { useEffect, useRef } from 'react'

/**
 * Unterstreicht seinen Inhalt, wobei die Länge des Strichs am Scrollfortschritt
 * hängt: Je weiter die Zeile durch das Bild wandert, desto weiter ist der Strich
 * gezogen. Er läuft also nicht einmalig ab, sondern folgt der Bewegung — auch
 * rückwärts, wenn wieder nach oben gescrollt wird.
 *
 * Gemessen wird die Oberkante der Zeile: Bei `START` (Anteil der Fensterhöhe von
 * oben) beginnt der Strich, bei `ENDE` ist er vollständig. Der Wert geht als
 * CSS-Variable an `.unterstrich::after` in globals.css.
 *
 * Der Inhalt selbst bleibt immer sichtbar — bewusst ohne `animate-fade-up`,
 * damit die Überschrift nicht erst eingeblendet werden muss.
 */
const START = 0.9
const ENDE = 0.45

export default function ScrollUnterstrich({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--unterstrich', '1')
      return
    }

    let angefordert = false

    const rechnen = () => {
      angefordert = false
      const oben = el.getBoundingClientRect().top
      const hoehe = window.innerHeight
      const anteil = (START * hoehe - oben) / ((START - ENDE) * hoehe)
      el.style.setProperty('--unterstrich', String(Math.min(1, Math.max(0, anteil))))
    }

    // Über requestAnimationFrame gebündelt: Das Scroll-Ereignis feuert oft
    // häufiger, als der Bildschirm neu zeichnet.
    const onScroll = () => {
      if (angefordert) return
      angefordert = true
      requestAnimationFrame(rechnen)
    }

    rechnen()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <span ref={ref} className="unterstrich">
      {children}
    </span>
  )
}
