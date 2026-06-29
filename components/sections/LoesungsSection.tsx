'use client'

import React, { useRef, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const pillars = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="lg0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Bluttropfen */}
        <path d="M18 4 C18 4 8 16 8 22 C8 28 12.5 32 18 32 C23.5 32 28 28 28 22 C28 16 18 4 18 4Z" fill="url(#lg0)"/>
        <path d="M18 26 C15 26 13 24 13 22" stroke="#060E1F" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
    headline: 'Blutanalyse',
    body: 'Wir schauen rein, was wirklich passiert — Hormonstatus, Mikronährstoffe, Entzündungsmarker. Keine Vermutungen, sondern Fakten.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* DNA-Helix */}
        <path d="M12 4 C16 8 20 10 24 8 C20 12 16 14 12 12 C16 16 20 18 24 16 C20 20 16 22 12 20 C16 24 20 26 24 24 C20 28 16 30 12 28" stroke="url(#lg1)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M24 4 C20 8 16 10 12 8 C16 12 20 14 24 12 C20 16 16 18 12 16 C16 20 20 22 24 20 C20 24 16 26 12 24 C16 28 20 30 24 28" stroke="url(#lg1)" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),
    headline: 'DNA-Analyse',
    body: 'Deine Genetik bestimmt, wie dein Körper auf Ernährung, Training und Stress reagiert. Wir nutzen das als Grundlage — nicht als Ausrede.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Teller mit Besteck */}
        <circle cx="18" cy="20" r="12" fill="url(#lg2)"/>
        <circle cx="18" cy="20" r="8" fill="#060E1F" opacity="0.2"/>
        <rect x="11" y="4" width="3" height="12" rx="1.5" fill="url(#lg2)"/>
        <path d="M16 4 L16 10 Q16 13 19 13 L19 4" fill="url(#lg2)"/>
        <rect x="21" y="4" width="3" height="12" rx="1.5" fill="url(#lg2)"/>
      </svg>
    ),
    headline: 'Ernährung',
    body: 'Kein Verbotskatalog. Kein Kalorienrechner. Sondern ein Ernährungsansatz, der auf deinen Stoffwechsel, deinen Alltag und deine Ziele abgestimmt ist.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="lg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Hantel */}
        <rect x="13" y="15" width="10" height="6" rx="3" fill="url(#lg3)"/>
        <rect x="5" y="11" width="10" height="14" rx="4" fill="url(#lg3)"/>
        <rect x="21" y="11" width="10" height="14" rx="4" fill="url(#lg3)"/>
        <rect x="1" y="13" width="6" height="10" rx="3" fill="url(#lg3)"/>
        <rect x="29" y="13" width="6" height="10" rx="3" fill="url(#lg3)"/>
      </svg>
    ),
    headline: 'Training',
    body: 'Wie viel, wie oft, welche Reize — abgestimmt auf dein Hormonsystem und deine Regenerationsfähigkeit. Nicht mehr als nötig, aber genau das Richtige.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="lg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Mond + Sterne */}
        <path d="M22 6 C14 6 8 12 8 20 C8 27 14 32 22 32 C26 32 29 30 31 27 C27 28 21 26 18 22 C15 18 15 12 18 8 C19 7 20.5 6.2 22 6Z" fill="url(#lg4)"/>
        <circle cx="28" cy="9" r="2.5" fill="url(#lg4)"/>
        <circle cx="32" cy="16" r="1.8" fill="url(#lg4)"/>
        <circle cx="27" cy="5" r="1.2" fill="url(#lg4)"/>
      </svg>
    ),
    headline: 'Schlaf & Regeneration',
    body: 'Schlechter Schlaf sabotiert alles andere. Wir identifizieren, was deine Regeneration blockiert — und beheben es systematisch.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="lg5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Aufsteigendes Chart */}
        <rect x="2" y="30" width="32" height="3" rx="1.5" fill="url(#lg5)"/>
        <rect x="2" y="4" width="3" height="26" rx="1.5" fill="url(#lg5)"/>
        <rect x="7" y="20" width="5" height="10" rx="2" fill="url(#lg5)"/>
        <rect x="15" y="14" width="5" height="16" rx="2" fill="url(#lg5)"/>
        <rect x="23" y="8" width="5" height="22" rx="2" fill="url(#lg5)"/>
        <path d="M9.5 20 L17.5 14 L25.5 8" stroke="#FFF3B3" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    headline: 'Tracking & Anpassung',
    body: 'Über eine App verfolgen wir kontinuierlich deine wichtigsten Parameter. Was funktioniert, wird verstärkt. Was nicht funktioniert, wird angepasst.',
  },
]

export default function LoesungsSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [iframesVisible, setIframesVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframesVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleIframeLoad = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const injectStyle = (css: string) => {
      try {
        const doc = iframe.contentDocument
        if (!doc || !doc.head) return
        const style = doc.createElement('style')
        style.textContent = css
        doc.head.appendChild(style)
      } catch {}
    }

    // After bundler replaces document (~500ms): hide controls so animation fills full height
    setTimeout(() => {
      injectStyle(`
        html, body { margin: 0 !important; padding: 0 !important;
          width: 100% !important; height: 100% !important;
          overflow: hidden !important; display: block !important; }
        div[style*="rgba(20, 20, 20"] {
          display: none !important;
          height: 0 !important;
        }
      `)
    }, 800)

    // Freeze on last frame — stop JS animation loop via rAF
    setTimeout(() => {
      try {
        const win = iframe.contentWindow as (Window & typeof globalThis) | null
        if (win) win.requestAnimationFrame = () => 0
      } catch {}
      injectStyle('*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }')
    }, 4500)
  }, [])

  return (
    <section id="methode" style={{ background: '#060E1F' }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="mb-6 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            High-Performance Coaching
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            Kein Programm von der Stange —<br className="hidden md:block" /> sondern dein System, präzise eingestellt
          </h2>
          <p className="font-inter text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: '#8A96A3' }}>
            Ich analysiere, was deinen Körper gerade limitiert. Und stelle dann genau die Hebel ein, die wirklich einen Unterschied machen.
          </p>
        </div>

        <div
          className="mb-10"
          style={{
            height: 1,
            background: 'linear-gradient(to right, rgba(201,168,76,0.4), transparent)',
          }}
        />

        <p
          className="font-inter text-base md:text-lg leading-relaxed max-w-3xl mb-16"
          style={{ color: '#8A96A3' }}
        >
          Die meisten Coaching-Ansätze arbeiten mit Annahmen. Ich arbeite mit Daten. Bevor wir irgendetwas an Ernährung, Training oder Alltag verändern, verstehen wir erst, wie dein biologisches System gerade wirklich funktioniert.
        </p>

        {/* 2×3 Grid — Animation als Preview-Thumbnail oben, Text darunter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl overflow-hidden animate-fade-up"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: '1px solid rgba(201,168,76,0.15)',
                animationDelay: `${i * 60}ms`,
              }}
            >
              {/* Animation-Thumbnail oben — 16:9 iframe, dann auf ~60% Höhe gecroppt */}
              <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 180 }}>
                <iframe
                  ref={i === 0 ? iframeRef : undefined}
                  src={iframesVisible ? '/animations/Blutanalyse.html' : undefined}
                  onLoad={i === 0 ? handleIframeLoad : undefined}
                  style={{
                    display: 'block',
                    position: 'absolute', top: 0, left: 0,
                    width: '100%',
                    aspectRatio: '16/9',
                    border: 'none', pointerEvents: 'none',
                  }}
                  title={pillar.headline}
                />
                {/* Sanfter Gradient-Übergang zum Karten-Hintergrund */}
                <div
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                    background: 'linear-gradient(to bottom, transparent, #0D1829)',
                  }}
                />
              </div>

              {/* Text unten */}
              <div className="flex flex-col gap-2 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0">{pillar.icon}</span>
                  <h3 className="font-barlow font-bold text-lg" style={{ color: '#E6E8EB' }}>{pillar.headline}</h3>
                </div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#7A8898' }}>
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-2xl animate-fade-up flex flex-col md:flex-row md:items-end"
          style={{
            background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            boxShadow: '0 0 40px rgba(201,168,76,0.08), inset 0 0 30px rgba(201,168,76,0.04)',
            animationDelay: '400ms',
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
            <defs>
              <pattern id="ls-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ls-grid)" />
          </svg>

          {/* Quote */}
          <div className="relative flex-1 flex flex-col justify-center px-8 py-8 md:px-10 md:py-8">
            <span
              className="font-barlow font-bold text-7xl leading-none select-none mb-2"
              style={{ color: '#C9A84C', opacity: 0.35, lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <p
              className="font-barlow font-bold text-2xl md:text-3xl leading-snug mb-6"
              style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Wenn alle Hebel richtig eingestellt sind, arbeitet dein Körper nicht mehr gegen dich — sondern mit dir.
            </p>
            <div>
              <p className="font-barlow font-bold text-base" style={{ color: '#E6E8EB' }}>Fabian Schönle</p>
              <p className="font-inter text-sm" style={{ color: '#5B6773' }}>Performance Coach · PhD Chemie</p>
            </div>
          </div>

          {/* Fabian portrait — Mobile */}
          <div
            className="md:hidden relative flex-shrink-0 self-center mx-auto"
            style={{ width: 200, height: 240, marginTop: 8, marginBottom: 8 }}
          >
            <Image
              src="/images/Fabian-Schönle-ohne-Hintergrund.png"
              alt="Fabian Schönle"
              fill
              className="object-contain object-top"
              sizes="200px"
            />
          </div>

          {/* Fabian portrait — Desktop (original) */}
          <div
            className="hidden md:block relative flex-shrink-0 self-end"
            style={{ width: 260, height: 380, marginTop: -100, marginRight: 16 }}
          >
            <Image
              src="/images/Fabian-Schönle-ohne-Hintergrund.png"
              alt="Fabian Schönle"
              fill
              className="object-contain object-bottom"
              sizes="280px"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
