import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { CALENDLY_URL } from '@/lib/constants'

type CTASectionProps = {
  label?: string
  headline: string
  body: string
  ctaLabel?: string
}

export default function CTASection({
  label,
  headline,
  body,
  ctaLabel = 'Kostenlose Performance-Analyse sichern',
}: CTASectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-2xl">
        {label && (
          <div className="mb-4">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold font-barlow text-dark mb-6">
          {headline}
        </h2>
        <p className="text-base md:text-lg font-inter leading-relaxed text-text mb-8">
          {body}
        </p>
        <Button href={CALENDLY_URL} size="lg" external>
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}
