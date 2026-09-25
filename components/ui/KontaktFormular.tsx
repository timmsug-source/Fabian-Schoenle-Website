'use client'

import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

/**
 * Die eigentliche Eingabemaske: Name, E-Mail, Einwilligung.
 *
 * Zwei Schritte in einem: Die Angaben gehen an /api/contact, damit die Anfrage
 * auch dann ankommt, wenn danach niemand mehr weiterklickt. Erst anschliessend
 * geht es weiter — zum Kalender oder zur naechsten Seite.
 *
 * Schlaegt der Versand fehl, fuehrt der Weg trotzdem weiter: Ein Termin ist
 * mehr wert als eine Fehlermeldung, und im Gespraech ist die Adresse ohnehin
 * bekannt.
 *
 * Steht sowohl in der Formularsektion der Landingpage als auch im Popup der
 * vorgeschalteten Seite — deshalb eine eigene Komponente.
 */

const feldStil = {
  background: 'rgba(6,14,31,0.6)',
  border: '1px solid rgba(201,168,76,0.28)',
  color: '#E6E8EB',
} as const

export type KontaktFormularProps = {
  /** Kleine Zeile über der Überschrift */
  kartenLabel?: string
  kartenTitel?: string
  knopfLabel?: string
  /** Ziel nach dem Absenden — Kalender oder eine Seite der Website */
  weiterLeitungZu?: string
  /** Steht so in der Benachrichtigungsmail und zeigt, woher die Anfrage kam */
  quelle?: string
}

export default function KontaktFormular({
  kartenLabel = 'Angaben machen & Termin wählen',
  kartenTitel = 'In zwei Schritten zum Termin',
  knopfLabel = 'Absenden & Termin wählen',
  weiterLeitungZu = CALENDLY_URL,
  quelle = 'Performance-Analyse (Werbeanzeige)',
}: KontaktFormularProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefon, setTelefon] = useState('')
  const [consent, setConsent] = useState(false)
  const [sendet, setSendet] = useState(false)
  const [fehler, setFehler] = useState<string | null>(null)

  async function absenden(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) { setFehler('Bitte gib deinen Namen an.'); return }
    if (!/.+@.+\..+/.test(email)) { setFehler('Bitte gib eine gültige E-Mail-Adresse an.'); return }
    // Nur zaehlen, ob genug Ziffern da sind: Schreibweisen wie +49 170 1234567
    // oder 0170/1234567 sind alle in Ordnung, eine strengere Pruefung wuerde
    // nur gueltige Nummern abweisen.
    if ((telefon.match(/\d/g) ?? []).length < 6) { setFehler('Bitte gib deine Telefonnummer an.'); return }
    if (!consent) { setFehler('Bitte stimme der Datenschutzerklärung zu.'); return }

    setFehler(null)
    setSendet(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, telefon, schwerpunkt: quelle }),
      })
    } catch {
      // bewusst ignoriert — der Termin ist wichtiger, siehe Kommentar oben
    }
    window.location.href = weiterLeitungZu
  }

  return (
    <>
      <div className="flex justify-center mb-5">
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" aria-hidden="true">
          <rect x="5" y="6" width="22" height="22" rx="3" />
          <path d="M5 12h22M11 3v5M21 3v5" strokeLinecap="round" />
          <path d="M11 19l3.5 3.5L22 15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="font-inter text-xs font-semibold uppercase tracking-widest text-center mb-3" style={{ color: '#7B8792' }}>
        {kartenLabel}
      </p>
      <h3 className="font-barlow font-bold text-2xl md:text-3xl text-center mb-8" style={{ color: '#E6E8EB' }}>
        {kartenTitel}
      </h3>

      <form onSubmit={absenden} className="flex flex-col gap-4" noValidate>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setFehler(null) }}
          placeholder="Dein Name"
          autoComplete="name"
          className="w-full rounded-xl px-5 py-4 font-inter text-sm md:text-base outline-none focus:border-[rgba(201,168,76,0.65)] transition-colors"
          style={feldStil}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setFehler(null) }}
          placeholder="Deine E-Mail-Adresse"
          autoComplete="email"
          className="w-full rounded-xl px-5 py-4 font-inter text-sm md:text-base outline-none focus:border-[rgba(201,168,76,0.65)] transition-colors"
          style={feldStil}
        />

        <input
          type="tel"
          value={telefon}
          onChange={(e) => { setTelefon(e.target.value); setFehler(null) }}
          placeholder="Deine Telefonnummer"
          autoComplete="tel"
          inputMode="tel"
          className="w-full rounded-xl px-5 py-4 font-inter text-sm md:text-base outline-none focus:border-[rgba(201,168,76,0.65)] transition-colors"
          style={feldStil}
        />

        <label className="flex items-start gap-3 cursor-pointer select-none mt-1">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setFehler(null) }}
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#C9A84C]"
          />
          <span className="font-inter text-xs leading-relaxed text-left" style={{ color: '#7B8792' }}>
            Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden.
            Weitere Infos in der{' '}
            <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#A6B0BA' }}>
              Datenschutzerklärung
            </a>.
          </span>
        </label>

        {fehler && (
          <p className="font-inter text-sm" style={{ color: '#E0916F' }} role="alert">
            {fehler}
          </p>
        )}

        <button
          type="submit"
          disabled={sendet}
          className="cta-metal inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-inter font-semibold text-sm md:text-base transition-transform mt-2 disabled:opacity-70"
        >
          {sendet ? 'Einen Moment …' : knopfLabel}
          {!sendet && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </form>
    </>
  )
}
