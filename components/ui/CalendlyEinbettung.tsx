'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'
import KlickZumLaden from '@/components/ui/KlickZumLaden'

/**
 * Calendly direkt auf der Seite, geladen erst auf Klick.
 *
 * Vorher hing das Skript bei jedem Seitenaufruf ungefragt im <head> und das
 * Widget-iframe baute eine Verbindung zu calendly.com auf — ohne Einwilligung
 * und mit unterdruecktem Hinweis (hide_gdpr_banner=1). Durch das Nachladen auf
 * Klick braucht es dafuer keine Einwilligung, und die Seite laedt spuerbar
 * schneller.
 *
 * Steht im Kontaktblock der Hauptseiten und auf /danke — deshalb eine eigene
 * Komponente, damit Hinweistext und Verhalten an beiden Stellen gleich sind.
 */
export default function CalendlyEinbettung() {
  const [widgetHeight, setWidgetHeight] = useState(500)
  const [kalenderGeladen, setKalenderGeladen] = useState(false)

  useEffect(() => {
    if (!kalenderGeladen) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [kalenderGeladen])

  // Calendly meldet seine tatsaechliche Hoehe, damit das iframe nicht
  // innen scrollt.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === 'calendly.page_height') {
        const h = parseInt(e.data.payload?.height)
        if (!isNaN(h) && h > 0) setWidgetHeight(h)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return kalenderGeladen ? (
    <div
      className="calendly-inline-widget"
      data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=091122&text_color=E6E8EB&primary_color=4A6741`}
      style={{ minWidth: 320, height: widgetHeight }}
    />
  ) : (
    <KlickZumLaden
      titel="Termin direkt im Kalender wählen"
      hinweis="Mit dem Klick wird der Kalender von Calendly geladen. Dabei wird deine IP-Adresse an Calendly übertragen."
      knopf="Kalender laden"
      datenschutzHinweis
      onLaden={() => setKalenderGeladen(true)}
      hoehe={widgetHeight}
    />
  )
}
