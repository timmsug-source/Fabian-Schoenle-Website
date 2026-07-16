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
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {label}
          </p>
        )}
        <h1 className="font-barlow font-bold text-4xl md:text-6xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          {headline}
        </h1>
        {subheadline && (
          <p className="font-inter text-lg md:text-xl leading-relaxed mb-5 max-w-2xl" style={{ color: '#A6B0BA' }}>
            {subheadline}
          </p>
        )}
        {body && (
          <p className="font-inter text-base leading-relaxed mb-8 max-w-2xl" style={{ color: '#7B8792' }}>
            {body}
          </p>
        )}
        <a
          href={CALENDLY_URL}
          data-open-form="true"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-metal inline-flex items-center gap-2 px-7 py-4 rounded-xl font-inter font-semibold text-sm transition-transform"
        >
          {ctaLabel ?? 'Performance Analyse buchen'}
        </a>
      </div>
    </section>
  )
}
