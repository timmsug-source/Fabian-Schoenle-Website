'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const pillars = [
  {
    icon: '🔬',
    headline: 'Blutanalyse',
    body: 'Wir schauen rein, was wirklich passiert — Hormonstatus, Mikronährstoffe, Entzündungsmarker. Keine Vermutungen, sondern Fakten.',
  },
  {
    icon: '🧬',
    headline: 'DNA-Analyse',
    body: 'Deine Genetik bestimmt, wie dein Körper auf Ernährung, Training und Stress reagiert. Wir nutzen das als Grundlage — nicht als Ausrede.',
  },
  {
    icon: '🍽️',
    headline: 'Ernährung',
    body: 'Kein Verbotskatalog. Kein Kalorienrechner. Sondern ein Ernährungsansatz, der auf deinen Stoffwechsel, deinen Alltag und deine Ziele abgestimmt ist.',
  },
  {
    icon: '🏋️',
    headline: 'Training',
    body: 'Wie viel, wie oft, welche Reize — abgestimmt auf dein Hormonsystem und deine Regenerationsfähigkeit. Nicht mehr als nötig, aber genau das Richtige.',
  },
  {
    icon: '😴',
    headline: 'Schlaf & Regeneration',
    body: 'Schlechter Schlaf sabotiert alles andere. Wir identifizieren, was deine Regeneration blockiert — und beheben es systematisch.',
  },
  {
    icon: '📊',
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
    <section id="methode" style={{ background: '#0D1721' }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="mb-6 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C99A3D' }}>
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
            background: 'linear-gradient(to right, rgba(201,154,61,0.4), transparent)',
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
                background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
                border: '1px solid rgba(201,154,61,0.15)',
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
                    background: 'linear-gradient(to bottom, transparent, #182A3A)',
                  }}
                />
              </div>

              {/* Text unten */}
              <div className="flex flex-col gap-2 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 text-base"
                    style={{ background: 'rgba(201,154,61,0.1)', border: '1px solid rgba(201,154,61,0.2)' }}
                  >
                    {pillar.icon}
                  </div>
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
            background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
            border: '1px solid rgba(201,154,61,0.3)',
            boxShadow: '0 0 40px rgba(201,154,61,0.08), inset 0 0 30px rgba(201,154,61,0.04)',
            animationDelay: '400ms',
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
            <defs>
              <pattern id="ls-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,154,61,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ls-grid)" />
          </svg>

          {/* Quote */}
          <div className="relative flex-1 flex flex-col justify-center px-8 py-8 md:px-10 md:py-8">
            <span
              className="font-barlow font-bold text-7xl leading-none select-none mb-2"
              style={{ color: '#C99A3D', opacity: 0.35, lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <p
              className="font-barlow font-bold text-2xl md:text-3xl leading-snug mb-6"
              style={{
                background: 'linear-gradient(to top, #8A5D1F 0%, #C99A3D 40%, #F2D27A 75%, #C99A3D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Wenn alle Hebel richtig eingestellt sind, arbeitet dein Körper nicht mehr gegen dich — sondern mit dir.
            </p>
            <div>
              <p className="font-barlow font-bold text-base" style={{ color: '#E6E8EB' }}>Fabian Schönle</p>
              <p className="font-inter text-sm" style={{ color: '#5B6773' }}>Performance Coach · PhD Chemie</p>
            </div>
          </div>

          {/* Fabian portrait */}
          <div
            className="relative flex-shrink-0 self-center md:self-end mx-auto md:mx-0"
            style={{ width: 220, height: 320, marginTop: 8, marginBottom: -8 }}
          >
            <div className="md:hidden absolute inset-0" style={{ width: 220, height: 320 }}>
              <Image
                src="/images/Fabian-Schönle-ohne-Hintergrund.png"
                alt="Fabian Schönle"
                fill
                className="object-contain object-bottom"
                sizes="220px"
              />
            </div>
            <div
              className="hidden md:block absolute"
              style={{ width: 260, height: 380, marginTop: -100, marginRight: 16, bottom: 0 }}
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

      </div>
    </section>
  )
}
