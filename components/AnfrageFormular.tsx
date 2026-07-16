'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

type Feld = {
  key: 'name' | 'email' | 'telefon'
  frage: string
  hint: string
  placeholder: string
  type: string
}

const felder: Feld[] = [
  { key: 'name',    frage: 'Wie heißt du?',                        hint: 'Vor- und Nachname',                 placeholder: 'Max Mustermann',   type: 'text' },
  { key: 'email',   frage: 'Wie lautet deine E-Mail-Adresse?',     hint: 'Ich sende dir die Antwort dorthin.', placeholder: 'max@beispiel.de',  type: 'email' },
  { key: 'telefon', frage: 'Unter welcher Nummer bist du erreichbar?', hint: 'Ich melde mich persönlich bei dir.', placeholder: '+49 151 12345678', type: 'tel' },
]

/**
 * Globales interaktives 3-Schritte-Formular.
 * Wird einmal im Layout gemountet und öffnet sich bei einem Klick auf ein
 * beliebiges Element mit dem Attribut `data-open-form`.
 */
export default function AnfrageFormular() {
  const [offen, setOffen] = useState(false)
  const [step, setStep] = useState(0)
  const [werte, setWerte] = useState({ name: '', email: '', telefon: '' })
  const [gesendet, setGesendet] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => setMounted(true), [])

  // Öffnet das Formular bei Klick auf ein Element mit data-open-form
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-open-form]')
      if (!el) return
      e.preventDefault()
      setOffen(true)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const aktuell = felder[step]
  const letzter = step === felder.length - 1

  useEffect(() => {
    if (offen && !gesendet) {
      const t = setTimeout(() => inputRef.current?.focus(), 120)
      return () => clearTimeout(t)
    }
  }, [offen, step, gesendet])

  function schliessen() {
    setOffen(false)
    setTimeout(() => { setStep(0); setWerte({ name: '', email: '', telefon: '' }); setGesendet(false) }, 200)
  }

  function weiter() {
    if (!werte[aktuell.key].trim()) return
    if (letzter) {
      setGesendet(true)
      // Hier später: an Backend (Resend) senden
    } else {
      setStep(s => s + 1)
    }
  }

  function zurueck() {
    if (step > 0) setStep(s => s - 1)
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter') { e.preventDefault(); weiter() }
  }

  if (!offen || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: 'rgba(4,8,18,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={schliessen}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
          border: '1.5px solid rgba(201,168,76,0.35)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.1)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Schließen */}
        <button
          onClick={schliessen}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}
          aria-label="Schließen"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="#A6B0BA" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>

        <div className="font-inter px-8 py-10 md:px-12 md:py-14">

          {/* Branding — Logo + FS Performance Lab (wie in der Navigationsbar) */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image
              src="/images/FS-Logo-60x60-transparenter-Hintergrund.png"
              alt="FS Performance Lab"
              width={44}
              height={44}
              className="rounded-lg object-contain"
            />
            <span className="flex flex-col leading-none text-left">
              <span className="font-barlow font-semibold text-base tracking-wide" style={{ color: '#E6E8EB' }}>
                Fabian Schönle
              </span>
              <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] mt-0.5" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                FS Performance Lab
              </span>
            </span>
          </div>

          {!gesendet ? (
            <>
              <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Frage {step + 1} von {felder.length}
              </p>
              <h3 className="font-barlow font-bold text-2xl md:text-4xl leading-tight mb-2" style={{ color: '#E6E8EB' }}>
                {aktuell.frage}
              </h3>
              <p className="font-inter text-sm mb-8" style={{ color: '#7B8792' }}>
                {aktuell.hint}
              </p>

              <input
                ref={inputRef}
                type={aktuell.type}
                value={werte[aktuell.key]}
                onChange={e => setWerte(w => ({ ...w, [aktuell.key]: e.target.value }))}
                onKeyDown={onKey}
                placeholder={aktuell.placeholder}
                className="w-full bg-transparent outline-none font-barlow font-semibold text-2xl md:text-3xl pb-3"
                style={{ color: '#E6E8EB', borderBottom: '2px solid rgba(201,168,76,0.7)' }}
              />

              <div className="mt-10 flex flex-col gap-4">
                <button
                  onClick={weiter}
                  className="cta-metal flex w-full items-center justify-center gap-2 px-8 py-3 rounded-xl font-inter font-semibold text-base transition-transform"
                >
                  {letzter ? 'Absenden' : 'Weiter'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                {step > 0 && (
                  <button
                    onClick={zurueck}
                    className="inline-flex items-center justify-center gap-1.5 font-inter text-sm transition-opacity hover:opacity-70"
                    style={{ color: '#7B8792' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Zurück
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.4)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8D49A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
              </div>
              <h3 className="font-barlow font-bold text-2xl md:text-3xl mb-3" style={{ color: '#E6E8EB' }}>
                Danke, {werte.name.split(' ')[0] || 'du'}!
              </h3>
              <p className="font-inter text-sm leading-relaxed max-w-sm mx-auto" style={{ color: '#A6B0BA' }}>
                Deine Nachricht ist raus. Ich melde mich persönlich bei dir — in der Regel innerhalb von 24 Stunden.
              </p>
              <button
                onClick={schliessen}
                className="cta-metal inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-inter font-semibold text-sm mt-8 transition-transform"
              >
                Schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
