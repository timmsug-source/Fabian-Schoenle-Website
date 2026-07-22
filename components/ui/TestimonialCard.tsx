type TestimonialCardProps = {
  quote: string
  name: string
  role?: string
  result?: string
}

export default function TestimonialCard({ quote, name, role, result }: TestimonialCardProps) {
  return (
    <figure
      className="flex flex-col gap-4 p-6 rounded-xl"
      style={{
        background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)',
        border: '1px solid rgba(201,168,76,0.2)',
      }}
    >
      {result && (
        <p
          className="font-inter text-sm font-semibold uppercase tracking-widest"
          style={{
            backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
            backgroundSize: '100% 1.2em',
            backgroundRepeat: 'repeat-y',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {result}
        </p>
      )}
      <blockquote className="font-inter leading-relaxed" style={{ color: '#AEB5BE' }}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="font-inter text-sm" style={{ color: '#7B8792' }}>
        <span className="font-semibold" style={{ color: '#E6E8EB' }}>{name}</span>
        {role && <span>, {role}</span>}
      </figcaption>
    </figure>
  )
}
