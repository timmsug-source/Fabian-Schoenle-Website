'use client'

import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'
import KlickZumLaden from '@/components/ui/KlickZumLaden'

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (optionen: { url: string; parentElement: HTMLElement }) => void }
  }
}

const KALENDER_URL = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=091122&text_color=E6E8EB&primary_color=4A6741`

/**
 * Das Calendly-Skript wird nur einmal pro Seitenaufruf geladen, auch wenn
 * mehrere Kalender auf der Seite stehen (Kontaktblock und Kalender-Fenster).
 * Ein zweites Einfügen würde das Skript erneut ausführen.
 */
let skriptLaden: Promise<void> | null = null
function ladeCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve()
  if (!skriptLaden) {
    skriptLaden = new Promise((fertig, fehler) => {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => fertig()
      script.onerror = () => { skriptLaden = null; fehler() }
      document.head.appendChild(script)
    })
  }
  return skriptLaden
}

/**
 * Calendly direkt auf der Seite, geladen erst auf Klick.
 *
 * Vorher hing das Skript bei jedem Seitenaufruf ungefragt im <head> und das
 * Widget-iframe baute eine Verbindung zu calendly.com auf — ohne Einwilligung
 * und mit unterdruecktem Hinweis (hide_gdpr_banner=1). Durch das Nachladen auf
 * Klick braucht es dafuer keine Einwilligung, und die Seite laedt spuerbar
 * schneller.
 *
 * Steht im Kontaktblock der Hauptseiten, auf /danke und im Kalender-Fenster
 * (CalendlyFenster) — deshalb eine eigene Komponente, damit Hinweistext und
 * Verhalten an allen Stellen gleich sind.
 *
 * Der Kalender wird ausdrücklich über `Calendly.initInlineWidget` eingesetzt
 * statt über die Klasse `calendly-inline-widget`. Die sucht das Skript nur
 * beim ersten Laden, ein später geöffneter zweiter Kalender bliebe leer.
 */
/**
 * `ohneTitel`: auf /danke steht die Aufforderung schon in der Überschrift der
 * Sektion („Such dir deinen Termin aus“), ein zweiter Titel im Platzhalter
 * wäre doppelt.
 */
export default function CalendlyEinbettung({ ohneTitel = false }: { ohneTitel?: boolean }) {
  const [widgetHeight, setWidgetHeight] = useState(500)
  const [kalenderGeladen, setKalenderGeladen] = useState(false)
  const ziel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!kalenderGeladen) return
    let abgebrochen = false
    ladeCalendly()
      .then(() => {
        const el = ziel.current
        if (abgebrochen || !el || el.childElementCount > 0) return
        window.Calendly?.initInlineWidget({ url: KALENDER_URL, parentElement: el })
      })
      .catch(() => { if (!abgebrochen) setKalenderGeladen(false) })
    return () => { abgebrochen = true }
  }, [kalenderGeladen])

  // Calendly meldet seine tatsaechliche Hoehe, damit das iframe nicht
  // innen scrollt. Nur die Meldungen des eigenen iframes zaehlen, sonst
  // uebernaehme ein zweiter Kalender auf der Seite dessen Hoehe.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event !== 'calendly.page_height') return
      if (e.source !== ziel.current?.querySelector('iframe')?.contentWindow) return
      const h = parseInt(e.data.payload?.height)
      if (!isNaN(h) && h > 0) setWidgetHeight(h)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return kalenderGeladen ? (
    <div ref={ziel} style={{ minWidth: 320, height: widgetHeight }} />
  ) : (
    <KlickZumLaden
      titel={ohneTitel ? undefined : 'Termin direkt im Kalender wählen'}
      hinweis="Mit dem Klick wird der Kalender von Calendly geladen. Dabei wird deine IP-Adresse an Calendly übertragen."
      knopf="Kalender laden"
      datenschutzHinweis
      onLaden={() => setKalenderGeladen(true)}
      hoehe={widgetHeight}
    />
  )
}
