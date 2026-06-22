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
      <h2 className="text-3xl md:text-5xl font-bold font-barlow text-dark mb-6">
        {headline}
      </h2>
      {intro && (
        <p className="text-base md:text-lg font-inter leading-relaxed text-text mb-12 max-w-2xl">
          {intro}
        </p>
      )}
      <ol className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col gap-3">
            <span className="text-5xl font-bold font-barlow text-accent">{step.number}</span>
            <h3 className="text-xl md:text-2xl font-semibold font-barlow text-dark">
              {step.headline}
            </h3>
            <p className="font-inter text-text leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
