'use client'

import { useId, useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { ANFRAGE_FORMULAR_AKTIV } from '@/lib/constants'

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  label?: string
  headline: string
  items: FAQItem[]
}

export default function FAQ({ label, headline, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const bereichId = useId()

  return (
    /* Aufbau wie die FAQ der Startseite: schmale, zentrierte Spalte mit
       goldener Trennlinie darüber. */
    <section id="faq" className="relative" style={{ background: '#060E1F' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="mb-12 animate-fade-up">
          {label && (
            <div className="mb-4">
              <SectionLabel>{label}</SectionLabel>
            </div>
          )}
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            {headline}
          </h2>
        </div>

        <dl className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: '60ms' }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)',
              border: `1px solid ${openIndex === i ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}`,
              boxShadow: openIndex === i ? '0 0 24px rgba(201,168,76,0.08)' : 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <dt>
              <button
                className="flex w-full items-center justify-between text-left px-5 py-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`${bereichId}-antwort-${i}`}
              >
                <span
                  className="font-inter font-semibold text-base leading-snug pr-4"
                  style={{ color: openIndex === i ? '#E6E8EB' : '#BBC1CA' }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0">
                  {/*
                    Volltonfarbe statt Farbverlauf — wie in der FAQ der Startseite.
                    Ein linearGradient rechnet standardmaessig in Einheiten der
                    Bounding-Box; bei einer waagerechten Linie ist deren Hoehe 0,
                    bei einer senkrechten die Breite. Die Box ist damit entartet,
                    der Verlauf wird nicht aufgeloest und beide Striche blieben
                    unsichtbar.
                  */}
                  <svg width="22" height="22" viewBox="0 0 38 38" fill="none">
                    {openIndex === i ? (
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
            </dt>
            {/*
              Antwort steht immer im HTML und wird nur auf- und zugeklappt — sonst
              zeichnet das FAQPage-Schema Text aus, der nirgends auf der Seite steht.
              Gleiche Lösung wie in FAQSection: grid-template-rows 0fr → 1fr, ohne
              Transition auf dieser Eigenschaft (Chrome löst `1fr` sonst nicht auf).
            */}
            <dd
              id={`${bereichId}-antwort-${i}`}
              className="grid"
              style={{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div
                  className="px-5 pb-5 font-inter text-sm leading-relaxed transition-opacity duration-200"
                  style={{ color: '#A6B0BA', opacity: openIndex === i ? 1 : 0 }}
                >
                  {item.answer}
                </div>
              </div>
            </dd>
          </div>
          ))}
        </dl>

        {/* Abschluss wie in der FAQ der Startseite. Der Knopf traegt
            data-open-form und wird dadurch vom Anfrageformular im Layout
            abgefangen — dieselbe Mechanik wie bei allen anderen CTAs.
            Steht der Versand still, entfaellt der Knopf: Eine Direktnachricht
            anzubieten, die niemanden erreicht, waere schlechter als keine. */}
        {ANFRAGE_FORMULAR_AKTIV && (
          <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '120ms' }}>
            <p className="font-inter text-sm mb-3" style={{ color: '#7B8792' }}>
              Deine Frage ist nicht dabei?
            </p>
            <button
              type="button"
              data-open-form="true"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#E8D49A',
              }}
            >
              Schreib mir direkt
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
