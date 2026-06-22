type TestimonialCardProps = {
  quote: string
  name: string
  role?: string
  result?: string
}

export default function TestimonialCard({ quote, name, role, result }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-4 p-6 border border-mid bg-white">
      {result && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent font-inter">
          {result}
        </p>
      )}
      <blockquote className="text-text font-inter leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-sm text-gray font-inter">
        <span className="font-semibold text-text">{name}</span>
        {role && <span>, {role}</span>}
      </figcaption>
    </figure>
  )
}
