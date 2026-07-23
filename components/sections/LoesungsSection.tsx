'use client'

import React, { useRef, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Rich } from '@/components/Rich'

type Pillar = {
  icon: React.ReactNode
  headline: string
  body: string
  /** HTML-Animation (iframe) — „altes" Design wie bei der Blutanalyse */
  animation?: string
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
    animation: '/animations/7-blutanalyse.html',
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
    animation: '/animations/1-dna-analyse.html',
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
    animation: '/animations/2-ernaehrung.html',
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
    animation: '/animations/4-training.html',
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
    animation: '/animations/3-schlaf-regeneration.html',
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
    animation: '/animations/5-tracking-anpassung.html',
    body: 'Über eine App verfolgen wir kontinuierlich deine wichtigsten Parameter. Was funktioniert, wird verstärkt. Was nicht funktioniert, wird angepasst.',
  },
]

export default function LoesungsSection({ content = {} }: { content?: Record<string, string> }) {
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

  const handleIframeLoad = useCallback((iframe: HTMLIFrameElement | null) => {
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

    // Steuert gezielt den Grafik-Container an (fest ~760px breit, sitzt versetzt im
    // Body mit eigenem Padding) und skaliert dessen INHALTSBEREICH (ohne Padding)
    // exakt in die Karte — so bleibt oben/unten/seitlich kein Rahmen/Leerraum.
    const ZOOM = 1.03 // minimaler Overscan gegen Sub-Pixel-Kanten
    const fit = () => {
      try {
        const doc = iframe.contentDocument
        const win = iframe.contentWindow
        const wrap = iframe.parentElement
        if (!doc || !doc.body || !win || !wrap) return
        // Renderbreite fixieren, damit der 760er-Container natürlich layoutet
        iframe.style.width = '920px'
        iframe.style.height = '520px'
        const cont = Array.from(doc.body.querySelectorAll<HTMLElement>('*')).find(
          (el) => el.clientWidth >= 720 && el.clientWidth <= 800 && el.clientHeight >= 300 && el.clientHeight <= 420
        )
        if (!cont) return
        const cs = win.getComputedStyle(cont)
        const padL = parseFloat(cs.paddingLeft) || 0
        const padR = parseFloat(cs.paddingRight) || 0
        const padT = parseFloat(cs.paddingTop) || 0
        const padB = parseFloat(cs.paddingBottom) || 0
        const r = cont.getBoundingClientRect()
        const cLeft = r.left + padL
        const cTop = r.top + padT
        const cW = r.width - padL - padR
        const cH = r.height - padT - padB
        if (cW <= 0 || cH <= 0) return
        const cardW = wrap.clientWidth
        const cardH = wrap.clientHeight
        const scale = Math.max(cardW / cW, cardH / cH) * ZOOM
        const tx = -cLeft * scale + (cardW - cW * scale) / 2
        const ty = -cTop * scale + (cardH - cH * scale) / 2
        iframe.style.transformOrigin = 'top left'
        iframe.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`
      } catch {}
    }

    // Bundler-Leiste ausblenden
    setTimeout(() => {
      injectStyle(`
        html, body { margin: 0 !important; padding: 0 !important; }
        div[style*="rgba(20, 20, 20"] { display: none !important; height: 0 !important; }
      `)
    }, 800)

    // Wiederholt einpassen, bis der Content seine finale Größe erreicht hat
    let ticks = 0
    const iv = setInterval(() => {
      fit()
      if (++ticks >= 18) clearInterval(iv)
    }, 400)

    // Auf letztem Frame einfrieren + final einpassen
    setTimeout(() => {
      try {
        const win = iframe.contentWindow as (Window & typeof globalThis) | null
        if (win) win.requestAnimationFrame = () => 0
      } catch {}
      injectStyle('*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }')
      fit()
    }, 4500)

    // Responsiv nachziehen (Kartenbreite + Content-Größe)
    try {
      const wrap = iframe.parentElement
      if (wrap && 'ResizeObserver' in window) new ResizeObserver(() => fit()).observe(wrap)
      const body = iframe.contentDocument?.body
      if (body && 'ResizeObserver' in window) new ResizeObserver(() => fit()).observe(body)
    } catch {}
  }, [])

  return (
    <section id="methode" className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      {/* Rastermuster wie in der Video-Testimonial-Sektion */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <pattern id="ls-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="ls-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <linearGradient id="ls-bg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="14%" stopColor="white" stopOpacity="1" />
            <stop offset="86%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="ls-bg-fade-mask">
            <rect width="100%" height="100%" fill="url(#ls-bg-fade)" />
          </mask>
        </defs>
        <g mask="url(#ls-bg-fade-mask)">
          <rect width="100%" height="100%" fill="url(#ls-bg-grid)" />
          <rect width="100%" height="100%" fill="url(#ls-bg-diag)" />
        </g>
      </svg>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="mb-16 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {content.loesung_label || 'High-Performance Coaching'}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-4" style={{ color: '#E6E8EB' }}>
            {content.loesung_title_1 || 'Eine datenbasierte Strategie —'}<br className="hidden md:block" /> {content.loesung_title_2 || 'durch einen präzisen und individuellen Ansatz'}
          </h2>
          <Rich as="p" className="font-inter text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#A6B0BA' }} html={content.loesung_intro || 'Ich analysiere, was deinen Körper gerade limitiert. Und stelle dann genau die Hebel ein, die wirklich einen Unterschied machen.'} />
        </div>

        {/* 3-Spalten-Raster (2 Reihen) — Grafik oben, Text unten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="symptom-card h-full flex flex-col rounded-2xl overflow-hidden animate-fade-up"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                animationDelay: `${i * 60}ms`,
              }}
            >
              {pillar.animation ? (
                /* HTML-Animation (iframe) — komplett in die Grafikfläche skaliert */
                <div className="relative flex-shrink-0 overflow-hidden" style={{ aspectRatio: '640 / 280' }}>
                  <iframe
                    src={iframesVisible ? pillar.animation : undefined}
                    onLoad={(e) => handleIframeLoad(e.currentTarget)}
                    style={{
                      display: 'block',
                      position: 'absolute', top: 0, left: 0,
                      width: '100%',
                      border: 'none', pointerEvents: 'none',
                    }}
                    title={pillar.headline}
                  />
                  {/* Kleiner Übergang zum Karten-Hintergrund */}
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: 32,
                      background: 'linear-gradient(to bottom, transparent, #0D1829)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              ) : pillar.image ? (
                /* Statisches Bild (Fallback) */
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.headline}
                    width={pillar.imgW}
                    height={pillar.imgH}
                    className="w-full h-auto block"
                    style={pillar.zoom ? { transform: `scale(${pillar.zoom})` } : undefined}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{ height: 100, background: 'linear-gradient(to bottom, transparent, #0D1829)' }}
                  />
                </div>
              ) : null}

              {/* Text unten — 40% */}
              <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0">{pillar.icon}</span>
                  <h3 className="font-barlow font-bold text-xl md:text-2xl" style={{ color: '#E6E8EB' }}>{content[`loesung_pillar${i + 1}_headline`] || pillar.headline}</h3>
                </div>
                <Rich as="p" className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#98A4B1' }} html={content[`loesung_pillar${i + 1}_body`] || pillar.body} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
