'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import KontaktFormular, { type KontaktFormularProps } from '@/components/ui/KontaktFormular'

/**
 * Vorschau und Knopf der vorgeschalteten Werbeseite — beide oeffnen dasselbe
 * Formular als Popup.
 *
 * Warum Popup statt eigener Sektion: Die Seite soll kurz bleiben und beim
 * Klick nichts wegscrollen. Wer auf den Knopf drueckt, hat sich entschieden;
 * ein Sprung an eine andere Stelle der Seite kostet an dieser Stelle nur
 * Aufmerksamkeit.
 *
 * Das Popup liegt bewusst nicht im <dialog>-Element: Dessen Standardgestaltung
 * (Rand, Hintergrund, Position) muesste ohnehin ueberschrieben werden, und die
 * drei Dinge, die es mitbringt — Fokus hinein, Escape schliesst, Rest der Seite
 * nicht scrollbar — sind hier von Hand gesetzt.
 */

type LandingOptInProps = {
  bildSrc: string
  bildAlt: string
  knopfLabel: string
  knopfUnterzeile: string
  formular: KontaktFormularProps
}

export default function LandingOptIn({ bildSrc, bildAlt, knopfLabel, knopfUnterzeile, formular }: LandingOptInProps) {
  const [offen, setOffen] = useState(false)
  const kasten = useRef<HTMLDivElement>(null)
  const knopf = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!offen) return

    // Knopf merken: Beim Aufraeumen zeigt die Referenz womoeglich schon
    // woandershin, der Fokus soll aber genau hierher zurueck.
    const zurueckZu = knopf.current

    // Erstes Feld bekommt den Fokus, damit man sofort tippen kann.
    kasten.current?.querySelector('input')?.focus()

    function beiTaste(e: KeyboardEvent) {
      if (e.key === 'Escape') setOffen(false)
    }
    document.addEventListener('keydown', beiTaste)

    // Hintergrund festhalten, sonst scrollt die Seite unter dem Popup weiter.
    const vorher = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', beiTaste)
      document.body.style.overflow = vorher
      // Fokus zurueck auf den Knopf, der das Popup geoeffnet hat.
      zurueckZu?.focus()
    }
  }, [offen])

  return (
    <>
      {/* Vorschau auf das Video. Kein Player: Abgespielt wird nach dem
          Eintragen, hier zaehlt nur, dass erkennbar ein Video wartet. */}
      <button
        type="button"
        onClick={() => setOffen(true)}
        aria-label="Formular öffnen und Video ansehen"
        className="group relative block w-full aspect-video rounded-xl overflow-hidden mb-10 md:mb-12"
        style={{
          background: '#0B1525',
          border: '1px solid rgba(201,168,76,0.4)',
          boxShadow: '0 0 40px rgba(201,168,76,0.15)',
        }}
      >
        <Image src={bildSrc} alt={bildAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" priority />
        <span className="absolute inset-0" style={{ background: 'rgba(6,14,31,0.45)' }} />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span
            className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D49A)', boxShadow: '0 0 30px rgba(201,168,76,0.4)' }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#0B1525" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: '#E8D49A' }}>
            Video ansehen
          </span>
        </span>
      </button>

      <button
        ref={knopf}
        type="button"
        onClick={() => setOffen(true)}
        className="cta-metal flex w-full max-w-[560px] flex-col items-center justify-center text-center px-6 py-4 md:py-5 rounded-xl transition-transform"
      >
        <span className="font-inter font-bold text-lg md:text-xl leading-snug">{knopfLabel}</span>
        {/* Die Unterzeile steht auf derselben Goldflaeche, deshalb dieselbe
            dunkle Schrift — nur zurueckgenommen, damit sie den Satz darueber
            nicht verdraengt. Die Farbe kommt ueber die Deckkraft, weil
            .cta-metal die Schriftfarbe fest setzt. */}
        <span className="font-inter text-sm md:text-base leading-snug mt-1" style={{ opacity: 0.72 }}>
          {knopfUnterzeile}
        </span>
      </button>

      {offen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          style={{ background: 'rgba(3,8,18,0.82)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOffen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Eintragen und Video ansehen"
        >
          <div
            ref={kasten}
            className="relative w-full max-w-md rounded-2xl p-7 md:p-9 my-auto"
            style={{
              background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
              border: '1px solid rgba(201,168,76,0.45)',
              boxShadow: '0 0 60px rgba(201,168,76,0.18), 0 30px 60px rgba(0,0,0,0.5)',
            }}
          >
            <button
              type="button"
              onClick={() => setOffen(false)}
              aria-label="Schließen"
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:text-white"
              style={{ color: '#7B8792', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <KontaktFormular {...formular} />
          </div>
        </div>
      )}
    </>
  )
}
