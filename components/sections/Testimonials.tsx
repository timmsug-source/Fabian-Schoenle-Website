import SectionLabel from '@/components/ui/SectionLabel'
import TestimonialCard from '@/components/ui/TestimonialCard'

type Testimonial = {
  quote: string
  name: string
  role?: string
  result?: string
}

type TestimonialsProps = {
  label?: string
  headline: string
  items: Testimonial[]
}

export default function Testimonials({ label, headline, items }: TestimonialsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {label && (
        <div className="mb-4">
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-barlow text-dark mb-12">
        {headline}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}
