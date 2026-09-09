'use client'

import Image from 'next/image'
import { useState } from 'react'

/**
 * Videoplatz der Landingpage. Zeigt dauerhaft das Vorschaubild; die Videodatei
 * wird erst nach einem Klick geladen — bei 40 MB und mehr sonst ein spürbarer
 * Datenverbrauch für jeden, der die Seite nur überfliegt.
 *
 * `src` ist noch nicht gesetzt: Das Video für die Werbekampagne kommt später.
 * Sobald es unter public/videos liegt, hier den Pfad eintragen — der Knopf
 * schaltet dann von "kommt in Kürze" auf den Player um.
 */
const VIDEO_SRC: string | null = null
const POSTER_SRC = '/images/vsl-poster.jpg'

export default function LandingVideo() {
  const [geladen, setGeladen] = useState(false)

  return (
    <div
      className="relative aspect-video rounded-xl overflow-hidden"
      style={{ background: '#0B1525', border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 0 34px rgba(201,168,76,0.12)' }}
    >
      {geladen && VIDEO_SRC ? (
        <video className="absolute inset-0 w-full h-full object-cover" src={VIDEO_SRC} poster={POSTER_SRC} controls autoPlay playsInline />
      ) : (
        <>
          <Image src={POSTER_SRC} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          <div className="absolute inset-0" style={{ background: 'rgba(6,14,31,0.45)' }} />

          <button
            type="button"
            onClick={() => VIDEO_SRC && setGeladen(true)}
            disabled={!VIDEO_SRC}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 group"
            aria-label={VIDEO_SRC ? 'Video abspielen' : 'Video folgt in Kürze'}
          >
            <span
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D49A)' }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#0B1525" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            {!VIDEO_SRC && (
              <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: '#E8D49A' }}>
                Video folgt in Kürze
              </span>
            )}
          </button>
        </>
      )}
    </div>
  )
}
