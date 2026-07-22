import SectionLabel from '@/components/ui/SectionLabel'

type Step = {
  number: string
  headline: string
  body: string
}

type SolutionSectionProps = {
  label?: string
  headline: string
  intro?: string
  steps: Step[]
}

export default function SolutionSection({ label, headline, intro, steps }: SolutionSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {label && (
        <div className="mb-4">
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-barlow mb-6" style={{ color: '#E6E8EB' }}>
        {headline}
      </h2>
      {intro && (
        <p className="text-base md:text-lg font-inter leading-relaxed mb-12 max-w-2xl" style={{ color: '#A6B0BA' }}>
          {intro}
        </p>
      )}
      <ol className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col gap-3">
            <span
              className="text-5xl font-bold font-barlow"
              style={{
                backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
                backgroundSize: '100% 1.2em',
                backgroundRepeat: 'repeat-y',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {step.number}
            </span>
            <h3 className="text-xl md:text-2xl font-semibold font-barlow" style={{ color: '#E6E8EB' }}>
              {step.headline}
            </h3>
            <p className="font-inter leading-relaxed" style={{ color: '#A6B0BA' }}>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
