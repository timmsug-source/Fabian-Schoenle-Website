'use client'

import { txt } from '@/lib/cms-text'
import { useId, useState } from 'react'
import { Rich } from '@/components/Rich'
import { FAQS, type FaqEintrag } from '@/lib/faq'

type FAQSectionProps = {
  content?: Record<string, string>
  /** Eigene Fragen — z. B. auf Unterseiten. Ohne Angabe greifen die Fragen der Startseite. */
  items?: FaqEintrag[]
  label?: string
  title1?: string
  title2?: string
}

/**
 * Baut die Fragen aus dem CMS: faq1_frage/_antwort, faq2_… Die Anzahl ist NICHT
 * begrenzt, eine im CMS angelegte Frage erscheint automatisch. Vorher bestimmte
 * die Länge der Standardliste, wie viele Fragen gezeigt wurden — eine achte im
 * CMS wäre nie sichtbar geworden.
 *
 * Einträge ohne Frage werden übersprungen; fehlt eine Antwort, greift die aus
 * der Standardliste.
 */
function cmsFaqs(content: Record<string, string>, standard: FaqEintrag[]): FaqEintrag[] {
  const nummern: number[] = []
  for (const k of Object.keys(content)) {
    const m = k.match(/^faq(\d+)_frage$/)
    if (m && !nummern.includes(Number(m[1]))) nummern.push(Number(m[1]))
  }
  if (nummern.length === 0) return standard

  return nummern
    .sort((a, b) => a - b)
    .map((n) => ({
      frage: content[`faq${n}_frage`]?.trim() || standard[n - 1]?.frage || '',
      antwort: content[`faq${n}_antwort`]?.trim() || standard[n - 1]?.antwort || '',
    }))
    .filter((f) => f.frage)
}

export default function FAQSection({ content = {}, items, label, title1, title2 }: FAQSectionProps) {
  // Eigene Fragen haben Vorrang. Die CMS-Felder (faq1_frage …) gehören zur
  // Startseite und dürfen seitenspezifische Fragen nicht überschreiben.
  const eintraege = items ?? cmsFaqs(content, FAQS)
  const [offen, setOffen] = useState<number | null>(null)
  const bereichId = useId()
  const [formOffen, setFormOffen] = useState(false)
  const [nachricht, setNachricht] = useState('')
  const [email, setEmail] = useState('')
  const [gesendet, setGesendet] = useState(false)
  const [sendet, setSendet] = useState(false)
  const [fehler, setFehler] = useState<string | null>(null)

  /**
   * Vorher setzte der Button nur `gesendet` auf true — die Nachricht wurde nie
   * irgendwohin geschickt. Der Absender sah eine Bestätigung, während seine
   * Frage verloren ging. Jetzt geht sie über dieselbe Route wie das große
   * Anfrageformular.
   */
  async function absenden() {
    setSendet(true)
    setFehler(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nachricht }),
      })
      if (!res.ok) {
        const daten = await res.json().catch(() => null)
        throw new Error(daten?.error || 'Senden fehlgeschlagen.')
      }
      setGesendet(true)
    } catch (e) {
      setFehler(e instanceof Error ? e.message : 'Senden fehlgeschlagen. Bitte versuche es später erneut.')
    } finally {
      setSendet(false)
    }
  }

  return (
    <section id="faq" className="relative" style={{ background: '#060E1F' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {label || txt(content, 'faq_label', 'Häufige Fragen')}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            {title1 || txt(content, 'faq_title_1', 'Fragen, die in der')}
            {(title2 || !title1) && (
              <>
                <br className="hidden md:block" /> {title2 || txt(content, 'faq_title_2', 'Vergangenheit gestellt wurden')}
              </>
            )}
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: '60ms' }}>
          {eintraege.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)',
                border: `1px solid ${offen === i ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}`,
                boxShadow: offen === i ? '0 0 24px rgba(201,168,76,0.08)' : 'none',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <button
                onClick={() => setOffen(offen === i ? null : i)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
                aria-expanded={offen === i}
                aria-controls={`${bereichId}-antwort-${i}`}
              >
                <span
                  className="font-inter font-semibold text-base leading-snug flex-1"
                  style={{ color: offen === i ? '#E6E8EB' : '#BBC1CA' }}
                >
                  {faq.frage}
                </span>

                {/* Gold Plus/Minus */}
                <span className="flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 38 38" fill="none">
                    {offen === i ? (
                      <line x1="8" y1="19" x2="30" y2="19" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
                    ) : (
                      <>
                        <line x1="19" y1="8" x2="19" y2="30" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
                        <line x1="8" y1="19" x2="30" y2="19" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" />
                      </>
                    )}
                  </svg>
                </span>
              </button>

              {/*
                Antwort steht immer im HTML und wird nur auf- und zugeklappt.
                Vorher wurde sie bedingt gerendert — dadurch stand keine einzige
                Antwort im ausgelieferten Markup, obwohl das FAQPage-Schema sie
                auszeichnet.

                Das Auf-/Zuklappen läuft über grid-template-rows (0fr → 1fr), weil
                das ohne feste Höhenangabe auskommt. Bewusst ohne Transition auf
                dieser Eigenschaft: Chrome löst `1fr` dann nicht mehr auf und die
                Antwort bleibt auf 0 px stehen. Weich eingeblendet wird stattdessen
                die Opazität des Inhalts.
              */}
              <div
                id={`${bereichId}-antwort-${i}`}
                role="region"
                className="grid"
                style={{ gridTemplateRows: offen === i ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div
                    className="px-5 pb-5 transition-opacity duration-200"
                    style={{ opacity: offen === i ? 1 : 0 }}
                  >
                    <Rich as="p" className="font-inter text-sm leading-relaxed" style={{ color: '#A6B0BA' }} html={faq.antwort} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Finaler Mini-CTA */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '120ms' }}>
          <p className="font-inter text-sm mb-3" style={{ color: '#7B8792' }}>
            Deine Frage ist nicht dabei?
          </p>
          <button
            onClick={() => setFormOffen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-opacity hover:opacity-80"
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#E8D49A',
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
            onClick={() => { setFormOffen(false); setGesendet(false); setFehler(null) }}
          >
            <div
              className="relative w-full max-w-md rounded-2xl p-7"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: '1px solid rgba(201,168,76,0.25)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Schließen */}
              <button
                onClick={() => { setFormOffen(false); setGesendet(false); setFehler(null) }}
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ background: 'rgba(255,255,255,0.07)', color: '#7B8792' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {!gesendet ? (
                <>
                  <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-2" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Direkte Nachricht</p>
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
                    {fehler && (
                      <p className="font-inter text-sm" style={{ color: '#E0916F' }}>{fehler}</p>
                    )}
                    <button
                      onClick={absenden}
                      disabled={!email || !nachricht || sendet}
                      className="cta-metal w-full py-3 rounded-xl font-inter font-semibold text-sm transition-transform disabled:opacity-40"
                    >
                      {sendet ? 'Wird gesendet …' : 'Frage absenden'}
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
                  <p className="font-inter text-sm" style={{ color: '#7B8792' }}>Ich melde mich in der Regel innerhalb von 24 Stunden.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
