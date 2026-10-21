'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { KALENDER_ANKER } from '@/lib/constants'
import { useOeffnenPerKlick } from '@/lib/useOeffnenPerKlick'
import CalendlyEinbettung from '@/components/ui/CalendlyEinbettung'

/**
 * Calendly als Fenster auf der Seite statt als externe Seite calendly.com.
 *
 * Grund: Buchungen sollen als „Schedule“ beim Meta-Pixel ankommen. Calendly
 * kann den Pixel selbst nur im kostenpflichtigen Tarif einbinden. Läuft der
 * Kalender auf der eigenen Seite, meldet er jede Buchung per postMessage, und
 * MetaPixel.tsx macht daraus das Ereignis.
 *
 * Wird einmal im Layout gemountet und öffnet sich bei Klick auf ein Element
 * mit `data-open-kalender` oder über den Anker #kalender. Im Fenster steht
 * derselbe Baustein wie im Kontaktblock, also auch derselbe Datenschutzhinweis
 * vor dem Laden.
 */
export default function CalendlyFenster() {
  const [offen, setOffen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useOeffnenPerKlick('data-open-kalender', KALENDER_ANKER, () => setOffen(true))

  useEffect(() => {
    if (!offen) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOffen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [offen])

  if (!offen || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: 'rgba(4,8,18,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={() => setOffen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Termin im Kalender wählen"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: '#091122',
          border: '1.5px solid rgba(201,168,76,0.35)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.1)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Schließen */}
        <button
          onClick={() => setOffen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}
          aria-label="Schließen"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="#A6B0BA" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>

        <CalendlyEinbettung />
      </div>
    </div>,
    document.body
  )
}
