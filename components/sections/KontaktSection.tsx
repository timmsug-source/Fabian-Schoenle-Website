'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const punkte = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="kk0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <circle cx="18" cy="18" r="16" fill="url(#kk0)"/>
        <path d="M10 18 L15 24 L26 12" stroke="#060E1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titel: 'Kostenlos & unverbindlich',
    text: 'Kein Druck, keine versteckten Kosten. Du entscheidest danach, ob wir zusammenarbeiten.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="kk1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <circle cx="18" cy="18" r="14" stroke="url(#kk1)" strokeWidth="3.5"/>
        <path d="M18 10 L18 18 L24 22" stroke="url(#kk1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titel: '30 Minuten — kein Stunden-Call',
    text: 'Respekt für deine Zeit. Wir kommen schnell auf den Punkt.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="kk2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        <circle cx="18" cy="18" r="14" stroke="url(#kk2)" strokeWidth="3.5"/>
        <ellipse cx="18" cy="18" rx="6" ry="14" stroke="url(#kk2)" strokeWidth="2.5"/>
        <line x1="4" y1="18" x2="32" y2="18" stroke="url(#kk2)" strokeWidth="2.5"/>
      </svg>
    ),
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
    <section className="relative" style={{ background: '#060E1F' }}>
      {/* Subtiler Gold-Glow oben */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Linke Spalte — Text + Trust */}
          <div className="animate-fade-up lg:sticky lg:top-28 lg:self-start">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              High-Performance Coaching starten
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
                  <span className="flex-shrink-0 mt-0.5">{p.icon}</span>
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
              className="btn-shine inline-flex items-center gap-3 px-7 py-4 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90 mb-4"
              style={{
                background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
                color: '#060E1F',
                boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Performance Analyse buchen
            </a>

            {/* Vertrauensanker */}
            <p className="font-inter text-xs block" style={{ color: '#3A4A5A' }}>
              <svg width="12" height="12" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }}>
                <defs><linearGradient id="klock" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                <rect x="8" y="16" width="20" height="16" rx="3" fill="url(#klock)"/>
                <path d="M12 16 L12 12 C12 7.6 24 7.6 24 12 L24 16" stroke="url(#klock)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              Deine Daten werden vertraulich behandelt. Kein Spam, kein Newsletter.
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
              data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=091122&text_color=E6E8EB&primary_color=4A6741`}
              style={{ minWidth: 320, height: widgetHeight }}
            />
          </div>

        </div>

        {/* Ablauf — neues 2er Grid */}
        <div
          className="relative mt-20 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Links — Überschrift + Bild + Button */}
          <div className="flex flex-col">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-0.5 text-center" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              So läuft es ab
            </p>
            <h3 className="font-barlow font-bold text-3xl md:text-5xl leading-tight text-center" style={{ color: '#E6E8EB', marginBottom: 0 }}>
              Drei Schritte bis zu deinem Plan
            </h3>
            <img
              src="/images/Fabian-Schoenle-Mockup-Ablauf.webp"
              alt="Fabian Schönle"
              className="w-full h-auto"
              style={{ marginTop: '-7%' }}
            />
            <div style={{ marginTop: '0.5%' }} className="flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-3 px-7 py-4 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90"
                style={{
                  background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
                  color: '#060E1F',
                  boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Jetzt kostenlosen Termin sichern
              </a>
            </div>
          </div>

          {/* Rechts — 3 Schritte mit Icons */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col">
              {[
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                      <defs><linearGradient id="abl-g0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                      <circle cx="18" cy="18" r="16" fill="url(#abl-g0)"/>
                      <path d="M10 18 L15 24 L26 12" stroke="#060E1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  titel: 'Termin sichern',
                  text: 'Wähle einen freien Slot direkt im Kalender — 30 Minuten, online, ohne Vorgespräch. Kein Verkaufsgespräch, kein Smalltalk. Du buchst einen konkreten Analysetermin.',
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                      <defs><linearGradient id="abl-g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                      <circle cx="18" cy="18" r="16" fill="url(#abl-g1)"/>
                      <path d="M25 22.92v2a1.5 1.5 0 0 1-1.64 1.5 14.85 14.85 0 0 1-6.47-2.3A14.62 14.62 0 0 1 12.4 19a14.85 14.85 0 0 1-2.3-6.5A1.5 1.5 0 0 1 11.57 11h2a1.5 1.5 0 0 1 1.5 1.29c.1.72.27 1.43.52 2.11a1.5 1.5 0 0 1-.34 1.58l-.68.68a12 12 0 0 0 4.62 4.62l.68-.68a1.5 1.5 0 0 1 1.58-.34c.68.25 1.39.42 2.11.52A1.5 1.5 0 0 1 25 22.92z" stroke="#060E1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  titel: 'Analyse-Call',
                  text: 'Wir schauen gemeinsam, was dein System gerade limitiert. Keine Floskeln — echte Analyse auf Basis deiner Daten. Du redest, ich höre zu und stelle die richtigen Fragen.',
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                      <defs><linearGradient id="abl-g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                      <circle cx="18" cy="18" r="16" fill="url(#abl-g2)"/>
                      <rect x="10" y="11" width="16" height="14" rx="2" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="22" y1="9" x2="22" y2="13" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="14" y1="9" x2="14" y2="13" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="10" y1="17" x2="26" y2="17" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  titel: 'Dein individueller Plan',
                  text: 'Du bekommst Klarheit über den nächsten konkreten Schritt — und wie eine Zusammenarbeit aussehen würde. Kein Druck, keine Verpflichtung. Du entscheidest danach in Ruhe.',
                },
              ].map((schritt, i, arr) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      {schritt.icon}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 my-2" style={{ background: 'rgba(201,168,76,0.25)', minHeight: 36 }} />
                    )}
                  </div>
                  <div className={i < arr.length - 1 ? 'pb-8' : ''}>
                    <div className="flex items-center" style={{ minHeight: '3.5rem' }}>
                      <h3 className="font-barlow font-bold text-2xl md:text-3xl leading-tight" style={{ color: '#E6E8EB' }}>
                        {schritt.titel}
                      </h3>
                    </div>
                    <p className="font-inter text-base leading-relaxed mt-1" style={{ color: '#5B6773' }}>
                      {schritt.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
