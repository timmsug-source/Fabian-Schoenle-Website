'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CONSENT_EVENT, leseEinwilligung } from '@/lib/consent'
import { META_PIXEL_ID } from '@/lib/constants'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    /** Pfad, fuer den zuletzt ein PageView gemeldet wurde — verhindert Doppelzaehlung */
    __fsPixelPfad?: string
  }
}

/**
 * Bindet den Meta-Pixel ein, aber erst mit Einwilligung in die Kategorie
 * „Marketing“. Vorher wird kein Skript von Meta geladen und keine Verbindung
 * aufgebaut, gleiches Prinzip wie bei Analytics.tsx.
 *
 * Seitenaufrufe: Der erste kommt aus dem Init-Skript, alle weiteren bei
 * clientseitiger Navigation aus dem Effekt unten. Ohne das zaehlte der Pixel
 * nur die Einstiegsseite, weil der App Router die Seite nicht neu laedt.
 *
 * Widerruf: Das einmal geladene Skript laesst sich nicht entladen. Deshalb
 * `fbq('consent', 'revoke')` — danach sendet der Pixel nichts mehr. Die
 * Cookies loescht der Banner (loescheMetaCookies).
 */
export default function MetaPixel() {
  const [erlaubt, setErlaubt] = useState(false)
  const pfad = usePathname()

  useEffect(() => {
    const pruefen = () => {
      const ja = leseEinwilligung()?.marketing === true
      setErlaubt(ja)
      if (window.fbq) window.fbq('consent', ja ? 'grant' : 'revoke')
    }
    pruefen()
    window.addEventListener(CONSENT_EVENT, pruefen)
    return () => window.removeEventListener(CONSENT_EVENT, pruefen)
  }, [])

  useEffect(() => {
    if (!erlaubt || !window.fbq || window.__fsPixelPfad === pfad) return
    window.fbq('track', 'PageView')
    window.__fsPixelPfad = pfad
  }, [pfad, erlaubt])

  if (!erlaubt) return null

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('consent', 'grant');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
        window.__fsPixelPfad = location.pathname;
      `}
    </Script>
  )
}
