'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ANFRAGE_FORMULAR_AKTIV } from '@/lib/constants'

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
  const [kontext, setKontext] = useState<{ symptome?: string; schwerpunkt?: string }>({})
  const [consent, setConsent] = useState(false)
  const [sending, setSending] = useState(false)
  const [fehler, setFehler] = useState<string | null>(null)
  const [gesendet, setGesendet] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => setMounted(true), [])

  // Öffnet das Formular bei Klick auf ein Element mit data-open-form.
  // Ist ANFRAGE_FORMULAR_AKTIV aus, wird nichts abgefangen — die Schaltflächen
  // sind dann normale Links und führen zu ihrem Ziel (Calendly).
  useEffect(() => {
    if (!ANFRAGE_FORMULAR_AKTIV) return
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-open-form]')
      if (!el) return
      e.preventDefault()
      setKontext({ symptome: el.dataset.symptome || undefined, schwerpunkt: el.dataset.schwerpunkt || undefined })
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
    setTimeout(() => {
      setStep(0)
      setWerte({ name: '', email: '', telefon: '' })
      setGesendet(false)
      setConsent(false)
      setSending(false)
      setFehler(null)
      setKontext({})
    }, 200)
  }

  function weiter() {
    if (!werte[aktuell.key].trim()) return
    if (letzter) {
      if (!consent) { setFehler('Bitte stimme der Datenschutzerklärung zu.'); return }
      void send()
    } else {
      setStep(s => s + 1)
    }
  }

  async function send() {
    setSending(true)
    setFehler(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...werte, symptome: kontext.symptome ?? '', schwerpunkt: kontext.schwerpunkt ?? '' }),
      })
      if (!res.ok) throw new Error()
      setGesendet(true)
    } catch {
      setFehler('Senden fehlgeschlagen. Bitte versuche es später erneut.')
    } finally {
      setSending(false)
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
              {kontext.symptome && (
                <div className="mb-8 rounded-xl p-4" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.28)' }}>
                  <p className="font-inter text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Deine Auswahl
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {kontext.symptome.split(', ').map((s, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-inter text-xs"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.3)', color: '#E6E8EB' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#E8D49A' }} />
                        {s}
                      </span>
                    ))}
                  </div>
                  {kontext.schwerpunkt && (
                    <p className="font-inter text-xs mt-3" style={{ color: '#7B8792' }}>
                      Schwerpunkt: <span style={{ color: '#E8D49A' }}>{kontext.schwerpunkt}</span>
                    </p>
                  )}
                </div>
              )}

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
                {letzter && (
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={e => { setConsent(e.target.checked); if (e.target.checked) setFehler(null) }}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#C9A84C]"
                    />
                    <span className="font-inter text-xs leading-relaxed" style={{ color: '#7B8792' }}>
                      Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Weitere Infos in der{' '}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#A6B0BA' }}>
                        Datenschutzerklärung
                      </a>.
                    </span>
                  </label>
                )}

                {fehler && (
                  <p className="font-inter text-sm" style={{ color: '#E0916F' }}>{fehler}</p>
                )}

                <button
                  onClick={weiter}
                  disabled={sending}
                  className="cta-metal flex w-full items-center justify-center gap-2 px-8 py-3 rounded-xl font-inter font-semibold text-base transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? 'Wird gesendet …' : letzter ? 'Absenden' : 'Weiter'}
                  {!sending && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
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
