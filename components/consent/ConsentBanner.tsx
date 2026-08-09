'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import {
  CONSENT_OEFFNEN_ATTRIBUT,
  leseEinwilligung,
  loescheAnalyticsCookies,
  speichereEinwilligung,
} from '@/lib/consent'

const RAHMEN = {
  background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
  border: '1px solid rgba(201,168,76,0.35)',
  boxShadow: '0 -12px 40px rgba(0,0,0,0.5)',
}

/** Ablehnen und Akzeptieren teilen sich bewusst dieselbe Optik. */
const KNOPF = 'flex-1 sm:flex-none sm:min-w-[150px] px-6 py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-85'

export default function ConsentBanner() {
  const [sichtbar, setSichtbar] = useState(false)
  const [einstellungen, setEinstellungen] = useState(false)
  const [statistik, setStatistik] = useState(false)

  // Erst nach dem Mounten entscheiden — der Server kennt den Cookie nicht.
  useEffect(() => {
    const vorhanden = leseEinwilligung()
    if (!vorhanden) setSichtbar(true)
    else setStatistik(vorhanden.statistik)
  }, [])

  // Widerruf: jeder Klick auf ein Element mit data-cookie-einstellungen
  // oeffnet die Auswahl erneut. Gleiches Muster wie beim Anfrageformular.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const ziel = (e.target as HTMLElement | null)?.closest(`[${CONSENT_OEFFNEN_ATTRIBUT}]`)
      if (!ziel) return
      e.preventDefault()
      setStatistik(leseEinwilligung()?.statistik ?? false)
      setEinstellungen(true)
      setSichtbar(true)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const speichern = useCallback((mitStatistik: boolean) => {
    // Beim Widerruf die bereits gesetzten Google-Cookies entfernen.
    if (!mitStatistik) loescheAnalyticsCookies()
    speichereEinwilligung(mitStatistik)
    setStatistik(mitStatistik)
    setEinstellungen(false)
    setSichtbar(false)
  }, [])

  if (!sichtbar) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] p-3 md:p-5"
      role="dialog"
      aria-modal="false"
      aria-label="Einstellungen zu Cookies"
    >
      <div className="max-w-4xl mx-auto rounded-2xl px-5 py-5 md:px-7 md:py-6" style={RAHMEN}>
        <p
          className="font-inter text-xs font-semibold uppercase tracking-widest mb-2"
          style={{
            backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
            backgroundSize: '100% 1.2em',
            backgroundRepeat: 'repeat-y',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Datenschutz
        </p>

        {!einstellungen ? (
          <>
            <p className="font-inter text-sm leading-relaxed mb-5 text-left" style={{ color: '#A6B0BA' }}>
              Ich nutze Google Analytics, um zu verstehen, wie diese Seite genutzt wird. Das
              passiert nur mit deiner Einwilligung. Lehnst du ab, funktioniert die Seite
              vollständig weiter — es wird dann nichts gemessen. Mehr dazu in der{' '}
              <Link href="/datenschutz" className="underline" style={{ color: '#E8D49A' }}>
                Datenschutzerklärung
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setEinstellungen(true)}
                className={KNOPF}
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.16)', color: '#A6B0BA' }}
              >
                Einstellungen
              </button>
              <button
                type="button"
                onClick={() => speichern(false)}
                className={KNOPF}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.45)', color: '#E6E8EB' }}
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => speichern(true)}
                className={KNOPF}
                style={{ background: 'rgba(201,168,76,0.14)', border: '1px solid rgba(201,168,76,0.45)', color: '#E6E8EB' }}
              >
                Akzeptieren
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3 mb-5">
              <label className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <input type="checkbox" checked disabled className="mt-1 h-4 w-4 flex-shrink-0 accent-[#C9A84C]" />
                <span className="text-left">
                  <span className="block font-inter text-sm font-semibold" style={{ color: '#E6E8EB' }}>
                    Notwendig
                  </span>
                  <span className="block font-inter text-xs leading-relaxed mt-0.5" style={{ color: '#7B8792' }}>
                    Speichert ausschließlich deine Entscheidung auf dieser Leiste. Lässt sich nicht abwählen.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-xl px-4 py-3 cursor-pointer" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <input
                  type="checkbox"
                  checked={statistik}
                  onChange={(e) => setStatistik(e.target.checked)}
                  className="mt-1 h-4 w-4 flex-shrink-0 accent-[#C9A84C]"
                />
                <span className="text-left">
                  <span className="block font-inter text-sm font-semibold" style={{ color: '#E6E8EB' }}>
                    Statistik
                  </span>
                  <span className="block font-inter text-xs leading-relaxed mt-0.5" style={{ color: '#7B8792' }}>
                    Google Analytics — misst anonymisiert, welche Seiten aufgerufen werden. Setzt Cookies von Google.
                  </span>
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
              <button
                type="button"
                onClick={() => speichern(false)}
                className={KNOPF}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.45)', color: '#E6E8EB' }}
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={() => speichern(statistik)}
                className={KNOPF}
                style={{ background: 'rgba(201,168,76,0.14)', border: '1px solid rgba(201,168,76,0.45)', color: '#E6E8EB' }}
              >
                Auswahl speichern
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
