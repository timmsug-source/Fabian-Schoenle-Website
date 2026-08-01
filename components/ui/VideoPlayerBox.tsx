'use client'

import Image from 'next/image'
import { useState } from 'react'

type VideoPlayerBoxProps = {
  /** YouTube-Video-ID, z. B. 8EiIoNZQ42A */
  videoId: string
  /** Lokal ausgeliefertes Vorschaubild — kein Abruf bei Google beim Seitenaufruf */
  posterSrc: string
  title?: string
}

/**
 * 16:9-Videokachel mit dauerhaft sichtbarem Vorschaubild. Das YouTube-iframe
 * wird erst nach einem Klick eingehängt und läuft über youtube-nocookie.com.
 */
export default function VideoPlayerBox({ videoId, posterSrc, title = 'Video' }: VideoPlayerBoxProps) {
  const [geladen, setGeladen] = useState(false)

  return (
    <div
      className="relative aspect-video rounded-xl overflow-hidden"
      style={{ background: '#060E1F', border: '1px solid rgba(201,168,76,0.3)' }}
    >
      {geladen ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setGeladen(true)}
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label="Video abspielen"
        >
          <Image src={posterSrc} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 520px" />
          <span className="absolute inset-0" style={{ background: 'rgba(6,14,31,0.3)' }} />
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex items-center justify-center w-16 h-16 rounded-full transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #F2D27A 55%, #C9A84C 100%)',
                boxShadow: '0 0 26px rgba(201,168,76,0.45)',
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#0D1829" style={{ marginLeft: 3 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span
            className="absolute inset-x-0 bottom-0 py-2 font-inter text-[11px] text-center"
            style={{ color: '#AEB5BE', background: 'linear-gradient(to top, rgba(6,14,31,0.9), transparent)' }}
          >
            Mit Klick wird das Video von YouTube geladen.
          </span>
        </button>
      )}
    </div>
  )
}
