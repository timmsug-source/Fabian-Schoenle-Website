'use client'

import Link from 'next/link'

type KlickZumLadenProps = {
  titel: string
  hinweis: string
  knopf: string
  onLaden: () => void
  /** Blendet zusätzlich den Verweis auf die Datenschutzerklärung ein. */
  datenschutzHinweis?: boolean
  hoehe?: number
}

/**
 * Platzhalter für einen Drittanbieter-Inhalt, der erst auf Klick nachgeladen
 * wird. Dasselbe Muster nutzt VideoPlayerBox bereits für YouTube.
 *
 * Der Sinn: Solange nichts geladen ist, geht keine Anfrage an den Anbieter —
 * damit braucht es dafür keine vorherige Einwilligung, und der Besucher
 * entscheidet bewusst.
 */
export default function KlickZumLaden({
  titel,
  hinweis,
  knopf,
  onLaden,
  datenschutzHinweis = false,
  hoehe = 500,
}: KlickZumLadenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-6 py-10"
      style={{ minHeight: Math.max(320, hoehe), background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)' }}
    >
      <span
        className="flex items-center justify-center w-14 h-14 rounded-full mb-5"
        style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)' }}
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8D49A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </span>

      <p className="font-barlow font-bold text-xl md:text-2xl mb-2" style={{ color: '#E6E8EB' }}>
        {titel}
      </p>
      <p className="font-inter text-sm leading-relaxed max-w-sm mb-6" style={{ color: '#7B8792' }}>
        {hinweis}
      </p>

      <button type="button" onClick={onLaden} className="cta-metal px-7 py-3.5 rounded-xl font-inter font-semibold text-sm transition-transform">
        {knopf}
      </button>

      {datenschutzHinweis && (
        <p className="font-inter text-xs mt-4" style={{ color: '#5B6773' }}>
          Details in der{' '}
          <Link href="/datenschutz" className="underline" style={{ color: '#7B8792' }}>
            Datenschutzerklärung
          </Link>
          .
        </p>
      )}
    </div>
  )
}
