'use client'

import { useRef, useState } from 'react'

type VideoTestimonial = {
  src: string
  poster?: string
  name: string
  rolle?: string
  /** Ergebnis-Badge über dem Video: Ausgangswert und Zielwert, z. B. „98" → „84 kg" */
  badgeVon?: string
  badgeNach?: string
  zitat: string
  vorher: string[]
  nachher: string[]
}

type VideoTestimonialsProps = {
  label?: string
  headline: string
  headlineAccent?: string
  intro?: string
  videos: VideoTestimonial[]
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

function Haken({ id }: { id: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5" shapeRendering="geometricPrecision">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon
        points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
        fill={`url(#${id})`}
        stroke={`url(#${id})`}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Kreuz() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
      <path d="M6 6l12 12M18 6L6 18" stroke="#E0715A" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}

function TestimonialKarte({ video, index }: { video: VideoTestimonial; index: number }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [laeuft, setLaeuft] = useState(false)

  function abspielen() {
    ref.current?.play()
    setLaeuft(true)
  }

  return (
    <div
      className="rounded-2xl p-5 md:p-7 flex flex-col"
      style={{
        background: 'linear-gradient(135deg, rgba(13,24,41,0.75) 0%, rgba(11,21,37,0.6) 100%)',
        border: '1px solid rgba(201,168,76,0.3)',
        boxShadow: 'inset 0 1px 0 rgba(232,212,154,0.05), 0 0 24px rgba(201,168,76,0.12)',
      }}
    >
      {/* Video */}
      <div
        className="relative aspect-video rounded-xl overflow-hidden"
        style={{ background: '#060E1F', border: '1px solid rgba(201,168,76,0.28)' }}
      >
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          className="absolute inset-0 w-full h-full object-cover"
          controls={laeuft}
          playsInline
          preload="metadata"
        />

        {!laeuft && (
          <button
            type="button"
            onClick={abspielen}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label={`Video von ${video.name} abspielen`}
          >
            <span className="absolute inset-0" style={{ background: 'rgba(6,14,31,0.3)' }} />
            <span
              className="relative flex items-center justify-center w-14 h-14 rounded-full transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #F2D27A 55%, #C9A84C 100%)',
                boxShadow: '0 0 24px rgba(201,168,76,0.45)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D1829" style={{ marginLeft: 3 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}

        {(video.badgeVon || video.badgeNach) && !laeuft && (
          <span
            className="absolute top-4 left-4 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-barlow font-bold text-xl md:text-2xl leading-none"
            style={{
              background: 'rgba(9,17,34,0.85)',
              border: '1px solid rgba(201,168,76,0.5)',
              color: '#F2D27A',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span>{video.badgeVon}</span>
            {/* Pfeil als SVG statt „→": das Schriftzeichen sitzt in Barlow Condensed zu tief */}
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true" className="flex-shrink-0">
              <path
                d="M1 6h18M14.5 1.5L20 6l-5.5 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{video.badgeNach}</span>
          </span>
        )}
      </div>

      {/* Zitat */}
      <blockquote className="mt-6 pl-4" style={{ borderLeft: '2px solid rgba(201,168,76,0.5)' }}>
        <p className="font-inter italic text-base leading-relaxed" style={{ color: '#D4D9DF' }}>
          &bdquo;{video.zitat}&ldquo;
        </p>
        <footer className="mt-3">
          <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={goldText}>
            {video.name}
          </span>
          {video.rolle && (
            <span className="font-inter text-xs ml-2" style={{ color: '#7B8792' }}>
              {video.rolle}
            </span>
          )}
        </footer>
      </blockquote>

      {/* Vorher / Nachher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7">
        <div>
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6B7684' }}>
            Ausgangssituation
          </p>
          <ul className="flex flex-col gap-2.5">
            {video.vorher.map((p, i) => (
              <li key={i} className="flex gap-2.5">
                <Kreuz />
                <span className="font-inter text-sm leading-snug" style={{ color: '#98A4B1' }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6B7684' }}>
            Ergebnis
          </p>
          <ul className="flex flex-col gap-2.5">
            {video.nachher.map((p, i) => (
              <li key={i} className="flex gap-2.5">
                <Haken id={`vt-haken-${index}-${i}`} />
                <span className="font-inter text-sm leading-snug" style={{ color: '#C4CAD2' }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/**
 * Video-Testimonials: Video, Zitat und Vorher/Nachher-Vergleich je Karte.
 */
export default function VideoTestimonials({
  label,
  headline,
  headlineAccent,
  intro,
  videos,
}: VideoTestimonialsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
        {label && (
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={goldText}>
            {label}
          </p>
        )}
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          {headline}
          {headlineAccent && (
            <>
              {' '}
              <span style={goldText}>{headlineAccent}</span>
            </>
          )}
        </h2>
        {intro && (
          <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
            {intro}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 animate-fade-up">
        {videos.map((v, i) => (
          <TestimonialKarte key={i} video={v} index={i} />
        ))}
      </div>
    </section>
  )
}
