'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const punkte = [
  {
    icon: '✅',
    titel: 'Kostenlos & unverbindlich',
    text: 'Kein Druck, keine versteckten Kosten. Du entscheidest danach, ob wir zusammenarbeiten.',
  },
  {
    icon: '⏱',
    titel: '30 Minuten — kein Stunden-Call',
    text: 'Respekt für deine Zeit. Wir kommen schnell auf den Punkt.',
  },
  {
    icon: '🌐',
    titel: 'Online — von überall',
    text: 'Kein Anfahrtsweg. Kein Termin vor Ort. Einfach buchen und fertig.',
  },
]

export default function KontaktSection() {
  const [widgetHeight, setWidgetHeight] = useState(500)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === 'calendly.page_height') {
        const h = parseInt(e.data.payload?.height)
        if (!isNaN(h) && h > 0) setWidgetHeight(h)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <section className="relative" style={{ background: '#0D1721' }}>
      {/* Subtiler Gold-Glow oben */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,154,61,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Linke Spalte — Text + Trust */}
          <div className="animate-fade-up lg:sticky lg:top-28 lg:self-start">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C99A3D' }}>
              Jetzt starten
            </p>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
              Finde heraus, was dein System gerade limitiert.
            </h2>
            <p className="font-inter text-base md:text-lg leading-relaxed mb-4" style={{ color: '#5B6773' }}>
              Kein Verkaufsgespräch. Kein Vertrag. Nur 30 Minuten, in denen wir gemeinsam analysieren, wo der Hebel bei dir liegt.
            </p>
            <p className="font-inter text-sm leading-relaxed mb-10" style={{ color: '#5B6773' }}>
              Der erste Schritt ist eine kostenlose Performance-Analyse. Du bekommst danach Klarheit darüber, warum dein Körper gerade nicht so reagiert wie du es willst — und was konkret dagegen getan werden kann.
            </p>

            {/* Einwand-Punkte */}
            <div className="flex flex-col gap-3 mb-10">
              {punkte.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div>
                    <p className="font-inter text-sm font-semibold" style={{ color: '#E6E8EB' }}>{p.titel}</p>
                    <p className="font-inter text-xs leading-relaxed mt-0.5" style={{ color: '#5B6773' }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90 mb-4"
              style={{
                background: 'linear-gradient(135deg, #8A5D1F 0%, #C99A3D 50%, #F2D27A 100%)',
                color: '#0D1721',
                boxShadow: '0 4px 24px rgba(201,154,61,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Jetzt kostenloses Erstgespräch buchen
            </a>

            {/* Vertrauensanker */}
            <p className="font-inter text-xs block" style={{ color: '#3A4A5A' }}>
              🔒 Deine Daten werden vertraulich behandelt. Kein Spam, kein Newsletter.
            </p>
          </div>

          {/* Rechte Spalte — Calendly Widget */}
          <div
            className="rounded-2xl overflow-hidden animate-fade-up"
            style={{
              border: '1px solid rgba(255,255,255,0.07)',
              animationDelay: '80ms',
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0D1721&text_color=E6E8EB&primary_color=4A6741`}
              style={{ minWidth: 320, height: widgetHeight }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
