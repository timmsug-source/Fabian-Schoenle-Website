'use client'

import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const faqs = [
  {
    frage: 'Ich habe schon vieles probiert — warum sollte das hier anders sein?',
    antwort: 'Weil wir nicht raten. Bevor wir irgendetwas verändern, analysieren wir über Blut- und DNA-Werte, was dein System gerade wirklich limitiert. Kein generischer Plan, der für den Durchschnitt gemacht wurde — sondern eine Strategie, die auf deine Biologie abgestimmt ist. Das ist der Unterschied.',
  },
  {
    frage: 'Ich habe kaum Zeit. Funktioniert das trotzdem?',
    antwort: 'Ja — und genau dafür ist dieser Ansatz gemacht. Die Zielgruppe sind Selbstständige und Unternehmer mit hoher Belastung und wenig Zeit. Ernährung, Training und Alltag werden so aufgebaut, dass sie in dein Leben passen — nicht umgekehrt.',
  },
  {
    frage: 'Muss ich komplett auf etwas verzichten?',
    antwort: 'Nein. Es geht nicht um Verbote oder Einschränkungen, sondern darum, zu verstehen, was dein Körper braucht. Wer weiß, wie sein System funktioniert, muss nicht auf Genuss verzichten — er trifft einfach bessere Entscheidungen.',
  },
  {
    frage: 'Wie schnell sehe ich erste Ergebnisse?',
    antwort: 'Die meisten Kunden spüren innerhalb der ersten 4–6 Wochen eine spürbare Veränderung bei Energie und Fokus. Sichtbare Veränderungen in der Körperkomposition entstehen typischerweise innerhalb von 2–4 Monaten — abhängig von Ausgangslage und Konsequenz in der Umsetzung.',
  },
  {
    frage: 'Was kostet das Coaching?',
    antwort: 'Das lässt sich pauschal nicht beantworten — weil der Aufwand von deiner Ausgangslage, deinen Zielen und der gewünschten Betreuungsintensität abhängt. Im kostenlosen Erstgespräch besprechen wir, was für dich sinnvoll ist und was es kostet.',
  },
  {
    frage: 'Ist das auch online möglich?',
    antwort: 'Ja. Die gesamte Zusammenarbeit läuft online ab — Erstgespräch, Analysen, Check-ins, Tracking. Du brauchst nichts außer einem Laptop oder Smartphone und die Bereitschaft, die Analyse-Kits zu nutzen.',
  },
  {
    frage: 'Was passiert nach dem Erstgespräch?',
    antwort: 'Du bekommst eine ehrliche Einschätzung deiner Situation — und einen klaren Vorschlag, wie eine Zusammenarbeit aussehen würde. Kein Druck, keine Verpflichtung. Du entscheidest danach in Ruhe.',
  },
]

export default function FAQSection() {
  const [offen, setOffen] = useState<number | null>(null)
  const [formOffen, setFormOffen] = useState(false)
  const [nachricht, setNachricht] = useState('')
  const [email, setEmail] = useState('')
  const [gesendet, setGesendet] = useState(false)

  return (
    <section id="faq" className="relative" style={{ background: '#0D1721' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,154,61,0.3), transparent)' }}
      />

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C99A3D' }}>
            Häufige Fragen
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            Was Männer wie du<br className="hidden md:block" /> vorher wissen wollen
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y animate-fade-up" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', divideColor: 'rgba(255,255,255,0.07)', animationDelay: '60ms' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              <button
                onClick={() => setOffen(offen === i ? null : i)}
                className="w-full flex items-center gap-4 py-5 text-left"
              >
                {/* Plus/Minus */}
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background: offen === i ? 'rgba(201,154,61,0.15)' : 'rgba(255,255,255,0.05)',
                    border: offen === i ? '1px solid rgba(201,154,61,0.4)' : '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke={offen === i ? '#C99A3D' : '#5B6773'} strokeWidth="1.5" strokeLinecap="round"
                      style={{ transform: offen === i ? 'rotate(45deg)' : 'none', transformOrigin: 'center', transition: 'transform 0.2s' }}
                    />
                  </svg>
                </span>

                <span
                  className="font-inter font-semibold text-base leading-snug flex-1"
                  style={{ color: offen === i ? '#E6E8EB' : '#A0A8B4' }}
                >
                  {faq.frage}
                </span>
              </button>

              {/* Antwort */}
              {offen === i && (
                <div className="pb-5 pl-10">
                  <p className="font-inter text-sm leading-relaxed" style={{ color: '#8A96A3' }}>
                    {faq.antwort}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Finaler Mini-CTA */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '120ms' }}>
          <p className="font-inter text-sm mb-3" style={{ color: '#5B6773' }}>
            Deine Frage ist nicht dabei?
          </p>
          <button
            onClick={() => setFormOffen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-opacity hover:opacity-80"
            style={{
              background: 'rgba(201,154,61,0.06)',
              border: '1px solid rgba(201,154,61,0.4)',
              color: '#C99A3D',
            }}
          >
            Schreib mir direkt
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Popup-Modal */}
        {formOffen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => { setFormOffen(false); setGesendet(false) }}
          >
            <div
              className="relative w-full max-w-md rounded-2xl p-7"
              style={{
                background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
                border: '1px solid rgba(201,154,61,0.25)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Schließen */}
              <button
                onClick={() => { setFormOffen(false); setGesendet(false) }}
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ background: 'rgba(255,255,255,0.07)', color: '#5B6773' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {!gesendet ? (
                <>
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C99A3D' }}>Direkte Nachricht</p>
                  <h3 className="font-barlow font-bold text-2xl mb-6" style={{ color: '#E6E8EB' }}>Stell deine Frage</h3>
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder="Deine E-Mail-Adresse"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl font-inter text-sm outline-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#E6E8EB' }}
                    />
                    <textarea
                      placeholder="Deine Frage..."
                      value={nachricht}
                      onChange={e => setNachricht(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl font-inter text-sm outline-none resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#E6E8EB' }}
                    />
                    <button
                      onClick={() => setGesendet(true)}
                      disabled={!email || !nachricht}
                      className="w-full py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-40"
                      style={{ background: 'linear-gradient(135deg, #8A5D1F 0%, #C99A3D 50%, #F2D27A 100%)', color: '#0D1721' }}
                    >
                      Frage absenden
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-barlow font-bold text-xl mb-2" style={{ color: '#E6E8EB' }}>Nachricht erhalten</p>
                  <p className="font-inter text-sm" style={{ color: '#5B6773' }}>Ich melde mich in der Regel innerhalb von 24 Stunden.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
