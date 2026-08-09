'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CONSENT_EVENT, leseEinwilligung } from '@/lib/consent'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/** Solange der Platzhalter aus .env.example drinsteht, bleibt alles aus. */
const ID_GUELTIG = Boolean(GA_ID) && /^G-[A-Z0-9]+$/.test(GA_ID ?? '') && !GA_ID?.includes('XXXX')

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Bindet Google Analytics ein — aber erst, wenn die Statistik-Einwilligung
 * vorliegt. Vor dem Ja wird kein Skript geladen und keine Verbindung zu Google
 * aufgebaut; es gibt bewusst keinen Consent Mode, der schon vorher sendet.
 *
 * Bewusst clientseitig: Die Einwilligung serverseitig aus dem Cookie zu lesen
 * wuerde `cookies()` erfordern und damit jede Seite dynamisch machen — die
 * statische Auslieferung waere dahin.
 */
export default function Analytics() {
  const [erlaubt, setErlaubt] = useState(false)
  const pfad = usePathname()

  useEffect(() => {
    const pruefen = () => setErlaubt(leseEinwilligung()?.statistik === true)
    pruefen()
    window.addEventListener(CONSENT_EVENT, pruefen)
    return () => window.removeEventListener(CONSENT_EVENT, pruefen)
  }, [])

  // Seitenaufrufe bei clientseitiger Navigation nachmelden. Ohne das zaehlt
  // GA nur den ersten Aufruf, weil der App Router die Seite nicht neu laedt.
  useEffect(() => {
    if (!erlaubt || !ID_GUELTIG || !window.gtag) return
    window.gtag('config', GA_ID as string, { page_path: pfad })
  }, [pfad, erlaubt])

  if (!erlaubt || !ID_GUELTIG) return null

  return (
    <>
      <Script
        id="ga-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
