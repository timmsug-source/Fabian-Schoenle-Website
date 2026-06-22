import { CALENDLY_URL } from '@/lib/constants'

type PageHeroProps = {
  label?: string
  headline: string
  subheadline?: string
  body?: string
  ctaLabel?: string
}

export default function PageHero({ label, headline, subheadline, body, ctaLabel }: PageHeroProps) {
  return (
    <section className="relative" style={{ background: '#0D1721', paddingTop: 120 }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28">
        {label && (
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C99A3D' }}>
            {label}
          </p>
        )}
        <h1 className="font-barlow font-bold text-4xl md:text-6xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          {headline}
        </h1>
        {subheadline && (
          <p className="font-inter text-lg md:text-xl leading-relaxed mb-5 max-w-2xl" style={{ color: '#8A96A3' }}>
            {subheadline}
          </p>
        )}
        {body && (
          <p className="font-inter text-base leading-relaxed mb-8 max-w-2xl" style={{ color: '#5B6773' }}>
            {body}
          </p>
        )}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-inter font-semibold text-sm"
          style={{
            background: 'linear-gradient(135deg, #8A5D1F 0%, #C99A3D 50%, #F2D27A 100%)',
            color: '#0D1721',
            boxShadow: '0 4px 24px rgba(201,154,61,0.25)',
          }}
        >
          {ctaLabel ?? 'Kostenloses Erstgespräch buchen'}
        </a>
      </div>
    </section>
  )
}
