'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'
import { BEWERTUNGEN } from '@/lib/bewertungen'
import { Rich } from '@/components/Rich'

const saeulen = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Körper/Silhouette */}
        <circle cx="18" cy="8" r="5" fill="currentColor"/>
        <path d="M8 34 L8 20 C8 15 12 12 18 12 C24 12 28 15 28 20 L28 34" fill="currentColor"/>
        <rect x="6" y="19" width="5" height="14" rx="2.5" fill="currentColor"/>
        <rect x="25" y="19" width="5" height="14" rx="2.5" fill="currentColor"/>
      </svg>
    ),
    label: 'Körperlich',
    farbe: '#4A8FE7',
    punkte: [
      'Deutlicher Fettabbau — vor allem am Bauch',
      'Mehr Muskeldefinition ohne exzessives Training',
      'Schlaf, der wirklich erholt',
      'Energie, die den ganzen Tag stabil bleibt',
      'Blutwerte, die sich messbar verbessern',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gehirn */}
        <path d="M18 4 C11 4 6 9 6 15 C6 19 8 22 11 24 L11 28 L25 28 L25 24 C28 22 30 19 30 15 C30 9 25 4 18 4Z" fill="currentColor"/>
        <path d="M20 10 L15 18 L19 18 L16 26 L22 16 L18 16 L20 10Z" fill="#060E1F" opacity="0.3"/>
      </svg>
    ),
    label: 'Mental',
    farbe: '#E0574C',
    punkte: [
      'Klarer Kopf — auch unter hoher Belastung',
      'Stabilere Stimmung, weniger Schwankungen',
      'Mehr Antrieb und Entscheidungsfreude',
      'Kein Nachmittagstief mehr',
      'Das Gefühl, wieder Kontrolle zu haben',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Blitz / Energie */}
        <path d="M22 3 L10 20 L17 20 L14 33 L26 16 L19 16 L22 3Z" fill="currentColor"/>
      </svg>
    ),
    label: 'Beruflich',
    farbe: '#46B06A',
    punkte: [
      'Höhere Leistungsfähigkeit über den gesamten Tag',
      'Bessere Präsenz in Meetings und Gesprächen',
      'Weniger Reaktivität, mehr strategisches Denken',
      'Das Selbstbild passt wieder zum eigenen Anspruch',
    ],
  },
]

function Check({ color = '#C9A84C' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5">
      <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill={color} />
    </svg>
  )
}

export default function ErgebnisSection({ content = {} }: { content?: Record<string, string> }) {
  const [alleZeigen, setAlleZeigen] = useState(false)
  return (
    <section id="ergebnisse" className="relative" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {content.ergebnis_label || 'Ergebnisse'}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
            {content.ergebnis_title_1 || 'Ergebnisse, die wirklich einen'}<br className="hidden md:block" /> {content.ergebnis_title_2 || 'Unterschied machen!'}
          </h2>
          <Rich as="p" className="font-inter text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#7B8792' }} html={content.ergebnis_intro || 'Kein kurzfristiger Effekt. Sondern eine Verschiebung, die du in jedem Bereich deines Lebens spürst.'} />
        </div>

        {/* Drei Säulen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 animate-fade-up" style={{ animationDelay: '80ms' }}>
          {saeulen.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl p-7"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: `1px solid ${s.farbe}59`,
                boxShadow: `0 0 30px ${s.farbe}1f, 0 20px 60px rgba(0,0,0,0.4)`,
                animationDelay: `${i * 60 + 80}ms`,
              }}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0" style={{ color: s.farbe }}>
                  {s.icon}
                </span>
                <h3 className="font-barlow font-bold text-xl" style={{ color: '#E6E8EB' }}>
                  {content[`ergebnis_col${i + 1}_label`] || s.label}
                </h3>
              </div>

              {/* Punkte */}
              <ul className="flex flex-col gap-3">
                {s.punkte.map((p, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check />
                    <Rich className="font-inter text-base leading-relaxed" style={{ color: '#A6B0BA' }} html={content[`ergebnis_col${i + 1}_punkt${j + 1}`] || p} />
                  </li>
                ))}
              </ul>

              {/* Farbstreifen oben */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{ background: `linear-gradient(to right, transparent, ${s.farbe}99, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Abschluss-Statement */}
        <div
          className="relative rounded-2xl flex flex-col md:flex-row md:items-end animate-fade-up"
          style={{
            background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            boxShadow: '0 0 40px rgba(201,168,76,0.08), inset 0 0 30px rgba(201,168,76,0.04)',
            animationDelay: '240ms',
            overflow: 'visible',
          }}
        >
          {/* Grid-Hintergrund (in eigenem, gerundetem Clip) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
              <defs>
                <pattern id="es-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#es-grid)" />
            </svg>
          </div>

          {/* Text */}
          <div className="relative flex-1 flex flex-col justify-center px-8 py-8 md:px-10 md:py-8 md:pr-[280px]">
            <span
              className="font-barlow font-bold text-7xl leading-none select-none mb-2"
              style={{ color: '#C9A84C', opacity: 0.35, lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <Rich
              as="p"
              className="font-barlow font-bold text-2xl md:text-3xl leading-snug mb-6"
              style={{ color: '#E8D49A' }}
              html={content.ergebnis_quote || 'Das Ziel ist nicht nur ein besserer Körper. Das Ziel ist, dass du wieder auf dem Niveau performst, das du von dir selbst erwartest.'}
            />
            <div className="mt-5">
              <p className="font-barlow font-bold text-base" style={{ color: '#E6E8EB' }}>{content.ergebnis_quote_author || 'Fabian Schönle'}</p>
              <p className="font-inter text-sm" style={{ color: '#7B8792' }}>{content.ergebnis_quote_role || 'Performance Coach · PhD Chemie'}</p>
            </div>
          </div>

          {/* Bild — Mobile */}
          <div className="md:hidden relative flex-shrink-0 self-center" style={{ width: 200, height: 240 }}>
            <Image
              src="/images/FS-Bild-Zitatsektion-2.png"
              alt="Fabian Schönle"
              fill
              className="object-contain object-top"
              sizes="200px"
            />
          </div>

          {/* Bild — Desktop (ragt oben aus dem Kasten) */}
          <div className="hidden md:block absolute" style={{ width: 294, height: 420, right: 24, bottom: 0 }}>
            <Image
              src="/images/FS-Bild-Zitatsektion-2.png"
              alt="Fabian Schönle"
              fill
              className="object-contain object-bottom"
              sizes="280px"
            />
          </div>
        </div>

        {/* Bewertungen */}
        <div className="mt-28 md:mt-36 mb-10 text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
          <p className="font-barlow font-bold text-2xl md:text-3xl" style={{ color: '#E6E8EB' }}>
            {content.ergebnis_reviews_line1 || 'Das sind keine Versprechen.'}
          </p>
          <p className="font-barlow font-bold text-2xl md:text-3xl" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {content.ergebnis_reviews_line2 || 'Das sind echte Bewertungen.'}
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 animate-fade-up" style={{ animationDelay: '360ms' }}>
          {BEWERTUNGEN.map((src, i) => (
            <div
              key={i}
              className={`break-inside-avoid mb-4 rounded-2xl overflow-hidden ${i > 2 && !alleZeigen ? 'hidden sm:block' : ''}`}
              style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <img
                src={src}
                alt={`Bewertung ${i + 1}`}
                className="w-full h-auto block"
              />
            </div>
          ))}

          {/* CTA-Kachel — läuft im Grid mit */}
          <div
            className="break-inside-avoid mb-4 rounded-2xl overflow-hidden px-6 py-7 text-center"
            style={{
              background: 'linear-gradient(155deg, #16213A 0%, #0D1829 60%, #091122 100%)',
              border: '1px solid rgba(201,168,76,0.5)',
              boxShadow: '0 0 0 1px rgba(201,168,76,0.25), 0 0 24px rgba(201,168,76,0.3), 0 0 48px rgba(201,168,76,0.15), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex justify-center mb-4">
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                <defs><linearGradient id="es-cta" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
                <circle cx="18" cy="18" r="16" fill="url(#es-cta)"/>
                <rect x="10" y="11" width="16" height="14" rx="2" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="22" y1="9" x2="22" y2="13" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="9" x2="14" y2="13" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="17" x2="26" y2="17" stroke="#060E1F" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="font-barlow font-bold text-xl leading-snug mb-2" style={{ color: '#E6E8EB' }}>
              {content.ergebnis_cta_title || 'Werde die nächste Bewertung.'}
            </p>
            <Rich as="p" className="font-inter text-sm leading-relaxed mb-6" style={{ color: '#A6B0BA' }} html={content.ergebnis_cta_body || 'Im kostenlosen Erstgespräch finden wir heraus, was dein System gerade limitiert — unverbindlich und ohne Druck.'} />
            <a
              href={CALENDLY_URL}
              data-open-form="true"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center gap-2 px-6 py-3 rounded-xl font-inter font-semibold text-sm transition-transform"
            >
              {content.ergebnis_cta_button || 'Performance Analyse buchen'}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mehr ansehen — nur Mobile */}
        {!alleZeigen && (
          <div className="sm:hidden mt-6 flex justify-center">
            <button
              onClick={() => setAlleZeigen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.4)', color: '#E8D49A' }}
            >
              Mehr Bewertungen ansehen
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
