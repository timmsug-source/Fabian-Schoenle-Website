'use client'

import { useEffect, useRef } from 'react'

/**
 * Für Fenster, die einmal im Layout hängen und sich über Schaltflächen auf der
 * ganzen Seite öffnen (Anfrageformular, Calendly-Fenster).
 *
 * Die Schaltflächen sind Links auf einen Anker (z. B. `#anfrage`) und tragen
 * ein Attribut (z. B. `data-open-form`). Nach dem Laden fängt der Klick-
 * Abfänger sie ab. Wer klickt, bevor das JavaScript bereit ist (auf dem Handy
 * oft die ersten Sekunden), setzt nur den Anker in der Adresse. Den greift
 * `ankerPruefen` beim Start auf, ebenso einen Direktlink wie /#anfrage.
 *
 * Früher waren die Schaltflächen Calendly-Links mit Abfänger. Wer zu früh
 * klickte, landete dadurch bei Calendly statt im Formular.
 */
export function useOeffnenPerKlick(
  attribut: string,
  anker: string,
  oeffnen: (ausloeser: HTMLElement | null) => void,
) {
  const oeffnenRef = useRef(oeffnen)
  oeffnenRef.current = oeffnen

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(`[${attribut}]`)
      if (!el) return
      e.preventDefault()
      oeffnenRef.current(el)
    }
    function ankerPruefen() {
      if (window.location.hash !== anker) return
      // Anker wieder entfernen, sonst bliebe er nach dem Schließen in der
      // Adresse stehen und ein erneuter Klick löste kein hashchange mehr aus.
      history.replaceState(history.state, '', window.location.pathname + window.location.search)
      oeffnenRef.current(null)
    }
    ankerPruefen()
    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', ankerPruefen)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', ankerPruefen)
    }
  }, [attribut, anker])
}
