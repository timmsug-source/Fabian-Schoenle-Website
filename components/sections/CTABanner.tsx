import Button from '@/components/ui/Button'
import { CALENDLY_URL } from '@/lib/constants'

type CTABannerProps = {
  headline: string
  body?: string
  buttonLabel?: string
  /** Hinweiszeile unter dem Button */
  note?: string
}

/**
 * Schmaler CTA-Streifen über die volle Contentbreite:
 * Text links, Button rechts — beides in einer Karte.
 */
export default function CTABanner({
  headline,
  body,
  buttonLabel = 'Performance Analyse sichern',
  note,
}: CTABannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
      <div
        className="animate-fade-up rounded-2xl px-6 py-7 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        style={{
          background: 'linear-gradient(135deg, #16213A 0%, #0D1829 60%, #091122 100%)',
          border: '1px solid rgba(201,168,76,0.45)',
          boxShadow: '0 0 30px rgba(201,168,76,0.2), inset 0 0 30px rgba(201,168,76,0.04)',
        }}
      >
        {/* Links: Text */}
        <div className="flex-1 min-w-0">
          <h2 className="font-barlow font-bold text-2xl md:text-3xl leading-tight mb-2" style={{ color: '#E6E8EB' }}>
            {headline}
          </h2>
          {body && (
            <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
              {body}
            </p>
          )}
        </div>

        {/* Rechts: Button */}
        <div className="flex-shrink-0 flex flex-col items-start md:items-center gap-2">
          {/* size="md": Bei "lg" bricht die Beschriftung auf Mobil um, weil sie breiter wird als die Karte innen */}
          <Button href={CALENDLY_URL} size="md" external popup className="whitespace-nowrap">
            {buttonLabel}
          </Button>
          {note && (
            <span className="font-inter text-xs" style={{ color: '#7B8792' }}>
              {note}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
