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
    <section className="relative" style={{ background: '#060E1F', paddingTop: 120 }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28">
        {label && (
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
            background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
            color: '#060E1F',
            boxShadow: '0 4px 24px rgba(201,168,76,0.25)',
          }}
        >
          {ctaLabel ?? 'Performance Analyse buchen'}
        </a>
      </div>
    </section>
  )
}
