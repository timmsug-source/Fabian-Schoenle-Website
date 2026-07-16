import Link from 'next/link'

type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
  /** Öffnet bei Klick das Calendly-Popup (statt zu navigieren) */
  popup?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
  popup = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl font-inter font-semibold transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold'

  const variants = {
    primary:   'cta-metal',
    secondary: 'border border-gold text-gold hover:bg-gold hover:text-navy-dark',
    ghost:     'text-neutral-2 hover:text-gold',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return external ? (
      <a href={href} data-open-form={popup ? 'true' : undefined} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
