'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

/**
 * Abschluss der Werbelandingpage: links das Formular, rechts die Argumente.
 *
 * Zwei Schritte in einem: Die Angaben gehen an /api/contact, damit die Anfrage
 * auch dann ankommt, wenn jemand den Kalender danach nicht mehr öffnet. Erst
 * anschliessend geht es zu Calendly. Andersherum — direkt zum Kalender — waere
 * jeder Abbruch im Buchungsschritt ein verlorener Kontakt.
 *
 * Schlaegt der Versand fehl, fuehrt der Weg trotzdem zum Kalender: Ein Termin
 * ist mehr wert als eine Fehlermeldung, und im Gespraech ist die Adresse ohnehin
 * bekannt.
 */

const punkte = [
  <>Du erfährst, <strong>was deine Leistungsfähigkeit gerade begrenzt</strong> — auf Basis deiner Werte, nicht auf Verdacht.</>,
  <>Du bekommst <strong>die zwei, drei Hebel</strong>, die bei dir zählen, statt einer Liste mit zwanzig Baustellen.</>,
  <>Du gehst mit <strong>konkreten nächsten Schritten</strong> heraus — unabhängig davon, ob wir zusammenarbeiten.</>,
  <>Kein Verkaufsgespräch, kein Vertrag. <strong>20 Minuten, kostenlos.</strong></>,
]

const kunden = [
  { src: '/images/kunde-gregory.png', name: 'Gregory' },
  { src: '/images/kunde-axel.png', name: 'Axel' },
  { src: '/images/kunde-hansherbert.png', name: 'Hans-Herbert' },
  { src: '/images/kunde-matthias.png', name: 'Matthias' },
]

function Haken({ id }: { id: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon
        points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
        fill={`url(#${id})`}
      />
    </svg>
  )
}

const feldStil = {
  background: 'rgba(6,14,31,0.6)',
  border: '1px solid rgba(201,168,76,0.28)',
  color: '#E6E8EB',
} as const

export default function LandingFormular() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [sendet, setSendet] = useState(false)
  const [fehler, setFehler] = useState<string | null>(null)

  async function absenden(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) { setFehler('Bitte gib deinen Namen an.'); return }
    if (!/.+@.+\..+/.test(email)) { setFehler('Bitte gib eine gültige E-Mail-Adresse an.'); return }
    if (!consent) { setFehler('Bitte stimme der Datenschutzerklärung zu.'); return }

    setFehler(null)
    setSendet(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, schwerpunkt: 'Performance-Analyse (Werbeanzeige)' }),
      })
    } catch {
      // bewusst ignoriert — der Termin ist wichtiger, siehe Kommentar oben
    }
    window.location.href = CALENDLY_URL
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          Sichere dir deine kostenlose Performance-Analyse
        </h2>
        <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
          20 Minuten mit mir persönlich, in denen wir anschauen, woran es bei dir gerade hakt — und
          was die nächsten sinnvollen Schritte sind.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Formular */}
        <div className="leistung-card rounded-2xl p-7 md:p-10">
          <div className="flex justify-center mb-5">
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" aria-hidden="true">
              <rect x="5" y="6" width="22" height="22" rx="3" />
              <path d="M5 12h22M11 3v5M21 3v5" strokeLinecap="round" />
              <path d="M11 19l3.5 3.5L22 15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-center mb-3" style={{ color: '#7B8792' }}>
            Angaben machen &amp; Termin wählen
          </p>
          <h3 className="font-barlow font-bold text-2xl md:text-3xl text-center mb-8" style={{ color: '#E6E8EB' }}>
            In zwei Schritten zum Termin
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

            <label className="flex items-start gap-3 cursor-pointer select-none mt-1">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setFehler(null) }}
                className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#C9A84C]"
              />
              <span className="font-inter text-xs leading-relaxed" style={{ color: '#7B8792' }}>
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
              {sendet ? 'Einen Moment …' : 'Absenden & Termin wählen'}
              {!sendet && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </form>
        </div>

        {/* Argumente und Vertrauen */}
        <div>
          <ul className="flex flex-col gap-6 mb-10">
            {punkte.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <Haken id={`formular-haken-${i}`} />
                <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
                  {p}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex">
              {kunden.map((k, i) => (
                <span
                  key={k.src}
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: 42,
                    height: 42,
                    marginLeft: i === 0 ? 0 : -12,
                    border: '2px solid #0B1525',
                    boxShadow: '0 0 0 1px rgba(201,168,76,0.35)',
                    zIndex: kunden.length - i,
                  }}
                >
                  <Image src={k.src} alt={`${k.name} — Klient von Fabian Schönle`} width={160} height={160} className="w-full h-full object-cover" />
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="#C9A84C">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </div>
              <p className="font-inter text-sm" style={{ color: '#C6CDD5' }}>
                <span className="font-semibold" style={{ color: '#E8D49A' }}>40+</span> zufriedene Kunden
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
