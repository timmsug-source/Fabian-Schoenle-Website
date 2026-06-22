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
      <h2 className="text-3xl md:text-5xl font-bold font-barlow text-dark mb-12">
        {headline}
      </h2>
      <dl className="max-w-3xl divide-y divide-mid">
        {items.map((item, i) => (
          <div key={i} className="py-5">
            <dt>
              <button
                className="flex w-full items-start justify-between text-left font-inter font-semibold text-text"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <span className="ml-4 text-accent text-xl leading-none">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
            </dt>
            {openIndex === i && (
              <dd className="mt-4 font-inter text-text leading-relaxed pr-8">
                {item.answer}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  )
}
