import SectionLabel from '@/components/ui/SectionLabel'

type ProblemPoint = {
  headline: string
  body: string
}

type ProblemSectionProps = {
  label?: string
  headline: string
  intro?: string
  points: ProblemPoint[]
}

export default function ProblemSection({ label, headline, intro, points }: ProblemSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Gekacheltes FS-Logo als dezentes Hintergrundmuster */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/FS-Logo-60x60-transparenter-Hintergrund.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '46px 46px',
          opacity: 0.025,
          maskImage: 'linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
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
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-6 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              <h3 className="text-lg md:text-xl font-semibold font-barlow" style={{ color: '#E6E8EB' }}>
                {point.headline}
              </h3>
              <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
