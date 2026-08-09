'use client'

import { useState } from 'react'
import { BEWERTUNGEN } from '@/lib/bewertungen'

type BewertungsGridProps = {
  /** Optionaler Hinweistext unter dem Raster */
  hinweis?: string
}

/**
 * Masonry-Raster echter Bewertungs-Screenshots — gleiche Darstellung
 * wie im Bewertungsblock der Startseite (ErgebnisSection).
 * Auf Mobil zunächst nur drei Screenshots, der Rest auf Klick.
 */
export default function BewertungsGrid({ hinweis }: BewertungsGridProps) {
  const [alleZeigen, setAlleZeigen] = useState(false)

  return (
    <div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {BEWERTUNGEN.map((bewertung, i) => (
          <div
            key={i}
            className={`break-inside-avoid mb-4 rounded-2xl overflow-hidden ${
              i > 2 && !alleZeigen ? 'hidden sm:block' : ''
            }`}
            style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bewertung.src} alt={bewertung.alt} className="w-full h-auto block" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Nur Mobil: restliche Bewertungen nachladen */}
      {!alleZeigen && (
        <div className="sm:hidden mt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setAlleZeigen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-80"
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#E8D49A',
            }}
          >
            Mehr Bewertungen ansehen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {hinweis && (
        <p className="font-inter text-xs text-center mt-6" style={{ color: '#7B8792' }}>
          {hinweis}
        </p>
      )}
    </div>
  )
}
