import SectionLabel from '@/components/ui/SectionLabel'

type Leistung = {
  headline: string
  body?: string
}

type LeistungenSectionProps = {
  label?: string
  headline: string
  intro?: string
  items: Leistung[]
}

export default function LeistungenSection({ label, headline, intro, items }: LeistungenSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {label && (
        <div className="mb-4">
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-barlow mb-6 max-w-3xl" style={{ color: '#E6E8EB' }}>
        {headline}
      </h2>
      {intro && (
        <p className="text-base md:text-lg font-inter leading-relaxed mb-12 max-w-2xl" style={{ color: '#A6B0BA' }}>
          {intro}
        </p>
      )}
      <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 mt-1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id={`leistung-gold-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8832A" />
                    <stop offset="45%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#F2D27A" />
                  </linearGradient>
                </defs>
                <path
                  d="M5 12.5l4.5 4.5L19 7"
                  stroke={`url(#leistung-gold-${i})`}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-barlow font-semibold text-lg md:text-xl" style={{ color: '#E6E8EB' }}>
                {item.headline}
              </span>
              {item.body && (
                <span className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                  {item.body}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
