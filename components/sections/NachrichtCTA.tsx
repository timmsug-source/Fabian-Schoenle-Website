'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Feld = {
  key: 'name' | 'email' | 'telefon'
  frage: string
  hint: string
  placeholder: string
  type: string
}

const felder: Feld[] = [
  { key: 'name',    frage: 'Wie heißt du?',                        hint: 'Vor- und Nachname',                 placeholder: 'Max Mustermann',   type: 'text' },
  { key: 'email',   frage: 'Wie lautet deine E-Mail-Adresse?',     hint: 'Wir senden dir die Antwort dorthin.', placeholder: 'max@beispiel.de',  type: 'email' },
  { key: 'telefon', frage: 'Unter welcher Nummer bist du erreichbar?', hint: 'Fabian meldet sich persönlich bei dir.', placeholder: '+49 151 12345678', type: 'tel' },
]

export default function NachrichtCTA() {
  const [offen, setOffen] = useState(false)
  const [step, setStep] = useState(0)
  const [werte, setWerte] = useState({ name: '', email: '', telefon: '' })
  const [gesendet, setGesendet] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => setMounted(true), [])

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

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter') { e.preventDefault(); weiter() }
  }

  return (
    <>
      {/* Zweiter CTA — sekundär */}
      <button
        onClick={() => setOffen(true)}
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-inter font-semibold text-sm transition-colors"
        style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.45)', color: '#E8D49A' }}
      >
        Kein passender Termin frei? Schreib mir direkt
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      {/* Popup — via Portal, damit fixed relativ zum Viewport ist */}
      {offen && mounted && createPortal(
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
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="#8A96A3" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>

            <div className="px-8 py-10 md:px-12 md:py-14">
              {!gesendet ? (
                <>
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Frage {step + 1} von {felder.length}
                  </p>
                  <h3 className="font-barlow font-bold text-2xl md:text-4xl leading-tight mb-2" style={{ color: '#E6E8EB' }}>
                    {aktuell.frage}
                  </h3>
                  <p className="font-inter text-sm mb-8" style={{ color: '#5B6773' }}>
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

                  <div className="mt-10 flex items-center gap-4">
                    <button
                      onClick={weiter}
                      className="cta-metal inline-flex items-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform hover:-translate-y-0.5"
                    >
                      {letzter ? 'Absenden' : 'Weiter'}
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <span className="font-inter text-xs" style={{ color: '#5B6773' }}>
                      <kbd className="px-2 py-1 rounded-md mr-1" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#8A96A3' }}>Enter</kbd>
                      {letzter ? 'zum Absenden' : 'zum Fortfahren'}
                    </span>
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
                  <p className="font-inter text-sm leading-relaxed max-w-sm mx-auto" style={{ color: '#8A96A3' }}>
                    Deine Nachricht ist raus. Fabian meldet sich persönlich bei dir — in der Regel innerhalb von 24 Stunden.
                  </p>
                  <button
                    onClick={schliessen}
                    className="cta-metal inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-inter font-semibold text-sm mt-8 transition-transform hover:-translate-y-0.5"
                  >
                    Schließen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
