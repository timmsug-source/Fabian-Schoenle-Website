'use client'

import React, { useRef, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

type Pillar = {
  icon: React.ReactNode
  headline: string
  body: string
  image?: string
  imgW?: number
  imgH?: number
  /** Leichtes Reinzoomen des Bildes (schneidet z. B. einen Rahmen weg) */
  zoom?: number
}

const pillars: Pillar[] = [
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
    image: '/images/Blutanalyse-Uebersicht.png', imgW: 1440, imgH: 300,
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
    image: '/images/IMG_0551.PNG', imgW: 997, imgH: 562,
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
    image: '/images/IMG_0550.PNG', imgW: 1099, imgH: 1077,
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
    image: '/images/IMG_0547.PNG', imgW: 1206, imgH: 1190,
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
    image: '/images/IMG_0548.PNG', imgW: 1206, imgH: 1071, zoom: 1.07,
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
    image: '/images/IMG_0549.PNG', imgW: 1088, imgH: 1017,
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

  const ctaKachel = (extraClass = '') => (
    <div
      className={`break-inside-avoid mb-6 rounded-2xl overflow-hidden px-6 py-8 text-center ${extraClass}`}
      style={{
        background: 'linear-gradient(155deg, #16213A 0%, #0D1829 60%, #091122 100%)',
        border: '1px solid rgba(201,168,76,0.5)',
        boxShadow: '0 0 0 1px rgba(201,168,76,0.25), 0 0 24px rgba(201,168,76,0.3), 0 0 48px rgba(201,168,76,0.15), 0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex justify-center mb-4">
        <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
          <defs><linearGradient id="ls-cta-g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
          <circle cx="18" cy="18" r="16" fill="url(#ls-cta-g)"/>
          <rect x="10" y="11" width="16" height="14" rx="2" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
          <line x1="22" y1="9" x2="22" y2="13" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
          <line x1="14" y1="9" x2="14" y2="13" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
          <line x1="10" y1="17" x2="26" y2="17" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <p className="font-barlow font-bold text-xl leading-snug mb-2" style={{ color: '#E6E8EB' }}>
        Bereit, dein System einzustellen?
      </p>
      <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: '#A6B0BA' }}>
        Im kostenlosen Erstgespräch finden wir heraus, wo bei dir der größte Hebel liegt — unverbindlich und ohne Druck.
      </p>
      <button
        type="button"
        data-open-form="true"
        className="cta-metal inline-flex items-center gap-2 px-6 py-3 rounded-xl font-inter font-semibold text-sm transition-transform"
      >
        Performance Analyse buchen
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  )

  return (
    <section id="methode" style={{ background: '#060E1F' }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="mb-16 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            High-Performance Coaching
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            Eine datenbasierte Strategie —<br className="hidden md:block" /> durch einen präzisen und individuellen Ansatz
          </h2>
          <p className="font-inter text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#A6B0BA' }}>
            Ich analysiere, was deinen Körper gerade limitiert. Und stelle dann genau die Hebel ein, die wirklich einen Unterschied machen.
          </p>
        </div>

        {/* Masonry — Bild/Animation oben, Text darunter; unterschiedliche Höhen greifen ineinander */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <React.Fragment key={i}>
            <div
              className="symptom-card break-inside-avoid mb-6 flex flex-col rounded-2xl overflow-hidden animate-fade-up"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                animationDelay: `${i * 60}ms`,
              }}
            >
              {pillar.image ? (
                /* Statisches Bild — vollständig sichtbar, natürliche Höhe */
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.headline}
                    width={pillar.imgW}
                    height={pillar.imgH}
                    className="w-full h-auto block"
                    style={pillar.zoom ? { transform: `scale(${pillar.zoom})` } : undefined}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Sanfter Gradient-Übergang zum Karten-Hintergrund */}
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{ height: 100, background: 'linear-gradient(to bottom, transparent, #0D1829)' }}
                  />
                </div>
              ) : (
                /* Animation-Thumbnail oben — 16:9 iframe, dann auf ~60% Höhe gecroppt */
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
              )}

              {/* Text unten */}
              <div className="flex flex-col gap-2 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0">{pillar.icon}</span>
                  <h3 className="font-barlow font-bold text-lg" style={{ color: '#E6E8EB' }}>{pillar.headline}</h3>
                </div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#98A4B1' }}>
                  {pillar.body}
                </p>
              </div>
            </div>
            {/* Desktop: CTA unten in der linken Spalte (nach DNA-Analyse) */}
            {i === 1 && ctaKachel('hidden md:block')}
            </React.Fragment>
          ))}

          {/* Mobil: CTA erst nach allen Lösungskarten */}
          {ctaKachel('md:hidden')}
        </div>

      </div>
    </section>
  )
}
