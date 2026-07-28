import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

type LocalHeroProps = {
  label?: string
  headline?: string
  headlineAccent?: string
  subheadline?: string
  ctaLabel?: string
  imageSrc?: string
  imageAlt?: string
  statNumber?: string
  statText?: string
}

/* ---------- Icons ---------- */

const goldStops = (
  <>
    <stop offset="0%" stopColor="#B8832A" />
    <stop offset="45%" stopColor="#C9A84C" />
    <stop offset="75%" stopColor="#F2D27A" />
    <stop offset="100%" stopColor="#C9A84C" />
  </>
)

function IconDNA() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gold-dna)" strokeWidth="1.7" strokeLinecap="round">
      <defs>
        <linearGradient id="icon-gold-dna" x1="0%" y1="0%" x2="100%" y2="100%">{goldStops}</linearGradient>
      </defs>
      <path d="M7 3c0 4 10 5 10 9s-10 5-10 9" />
      <path d="M17 3c0 4-10 5-10 9s10 5 10 9" />
      <path d="M8.5 5.5h7M8 8h8M8 16h8M8.5 18.5h7" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="url(#icon-gold-cal)">
      <defs>
        <linearGradient id="icon-gold-cal" x1="0%" y1="0%" x2="100%" y2="100%">{goldStops}</linearGradient>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" />
      <path d="M8 14.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 17.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 14.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 17.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16 14.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="url(#icon-gold-bolt)">
      <defs>
        <linearGradient id="icon-gold-bolt" x1="0%" y1="0%" x2="100%" y2="100%">{goldStops}</linearGradient>
      </defs>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function IconCalendarCta() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconGroup() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
      <circle cx="10" cy="8" r="3.2" />
      <path d="M21 20v-1a4 4 0 0 0-3-3.87" />
      <path d="M16.5 5.13A3.2 3.2 0 0 1 16.5 11" />
    </svg>
  )
}

const bullets = [
  {
    icon: <IconDNA />,
    headline: 'Datenbasiert statt generisch',
    body: 'Auf Basis deiner Blut- und DNA-Werte wissen wir genau, welche Hebel bei dir wirken.',
  },
  {
    icon: <IconCalendar />,
    headline: 'Für vollen Terminkalender',
    body: 'Ein System, das sich in deinen Alltag als Unternehmer einfügt — ohne Verzicht, ohne Rätselraten.',
  },
  {
    icon: <IconBolt />,
    headline: 'Dauerhaft statt Jo-Jo',
    body: 'Weniger Bauchfett und stabile Energie — Ergebnisse, die bleiben, weil sie auf deiner Biologie basieren.',
  },
]

const goldGradient = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/* ---------- Bild-Deko: Gold-Bogen + Pulslinie ---------- */

function ImageDecor() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 600 720"
      preserveAspectRatio="xMidYMid slice"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8A5D1F" stopOpacity="0" />
          <stop offset="45%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F2D27A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="pulse-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
          <stop offset="35%" stopColor="#E8D49A" stopOpacity="1" />
          <stop offset="100%" stopColor="#F2D27A" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Pulslinie rechts */}
      <path
        d="M360 300 H430 l14 -46 l16 92 l12 -60 l10 30 H600"
        fill="none"
        stroke="url(#pulse-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
    </svg>
  )
}

export default function LocalHero({
  label = 'Ernährungsberatung Karlsruhe',
  headline = 'Ernährungsberatung in Karlsruhe für',
  headlineAccent = 'Selbstständige & Unternehmer',
  subheadline = 'Datenbasiert wieder in Bestform — ohne Verzicht und ohne das Gefühl, auf Diät zu sein.',
  ctaLabel = 'Kostenloses Erstgespräch buchen',
  imageSrc = '/images/vsl-poster.jpg',
  imageAlt = 'Fabian Schönle',
  statNumber = '200+',
  statText = 'Selbstständige & Unternehmer bereits erfolgreich begleitet',
}: LocalHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>

      {/* Bild rechts — volle Höhe bis zum oberen Rand */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] xl:w-[50%]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-[42%_18%]"
          sizes="52vw"
          priority
        />
        <ImageDecor />
        {/* Fade nach links in den Hintergrund */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #060E1F 0%, rgba(6,14,31,0.5) 13%, rgba(6,14,31,0) 40%)' }}
        />
        {/* Fade unten */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #060E1F)' }}
        />

        {/* 200+ Badge */}
        <div
          className="absolute bottom-8 right-8 flex items-center gap-4 rounded-2xl px-5 py-4 max-w-[300px]"
          style={{
            background: 'linear-gradient(135deg, rgba(13,24,41,0.85) 0%, rgba(11,21,37,0.8) 100%)',
            border: '1px solid rgba(201,168,76,0.35)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.45), inset 0 0 20px rgba(201,168,76,0.05)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span style={{ color: '#C9A84C' }}>
            <IconGroup />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-barlow font-bold text-2xl" style={{ color: '#F2D27A' }}>{statNumber}</span>
            <span className="font-inter text-xs leading-snug" style={{ color: '#AEB5BE' }}>{statText}</span>
          </span>
        </div>
      </div>

      {/* Text links */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-2xl">

          {/* Bild oben — nur Mobile */}
          <div className="lg:hidden relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" sizes="100vw" priority />
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #060E1F)' }} />
          </div>

          {label && (
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-5" style={goldGradient}>
              {label}
            </p>
          )}

          <h1 className="font-barlow font-bold text-4xl md:text-6xl leading-[1.05] mb-5" style={{ color: '#E6E8EB' }}>
            {headline}{headlineAccent ? ' ' : ''}
            {headlineAccent && <span style={goldGradient}>{headlineAccent}</span>}
          </h1>

          {subheadline && (
            <p className="font-inter text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: '#AEB5BE' }}>
              {subheadline}
            </p>
          )}

          {/* 3 Bullets — horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-7 mb-10">
            {bullets.map((b, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="inline-flex">{b.icon}</span>
                <p className="font-barlow font-bold text-lg" style={{ color: '#E6E8EB' }}>{b.headline}</p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#9AA4AE' }}>{b.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={CALENDLY_URL}
            data-open-form="true"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-metal inline-flex items-center gap-3 px-7 py-4 rounded-xl font-barlow font-semibold text-lg transition-transform"
          >
            <IconCalendarCta />
            {ctaLabel}
          </a>
          <p className="mt-3 flex items-center gap-2 font-inter text-xs" style={{ color: '#7B8792' }}>
            <IconClock />
            Call mit mir persönlich · 30 Minuten · unverbindlich
          </p>

        </div>
      </div>
    </section>
  )
}
