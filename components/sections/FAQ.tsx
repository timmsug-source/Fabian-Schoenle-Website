'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'

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

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {label && (
        <div className="mb-4">
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-barlow mb-12" style={{ color: '#E6E8EB' }}>
        {headline}
      </h2>
      <dl className="max-w-3xl flex flex-col gap-3">
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
              >
                <span className="font-inter font-semibold text-sm md:text-base pr-4" style={{ color: '#E6E8EB' }}>
                  {item.question}
                </span>
                <span className="flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 38 38" fill="none">
                    <defs>
                      <linearGradient id={`faq-gold-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B8832A" />
                        <stop offset="45%" stopColor="#C9A84C" />
                        <stop offset="75%" stopColor="#F2D27A" />
                        <stop offset="100%" stopColor="#C9A84C" />
                      </linearGradient>
                    </defs>
                    {openIndex === i ? (
                      <line x1="8" y1="19" x2="30" y2="19" stroke={`url(#faq-gold-${i})`} strokeWidth="3" strokeLinecap="round" />
                    ) : (
                      <>
                        <line x1="19" y1="8" x2="19" y2="30" stroke={`url(#faq-gold-${i})`} strokeWidth="3" strokeLinecap="round" />
                        <line x1="8" y1="19" x2="30" y2="19" stroke={`url(#faq-gold-${i})`} strokeWidth="3" strokeLinecap="round" />
                      </>
                    )}
                  </svg>
                </span>
              </button>
            </dt>
            {openIndex === i && (
              <dd className="px-5 pb-5 font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A1A9B3' }}>
                {item.answer}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  )
}
