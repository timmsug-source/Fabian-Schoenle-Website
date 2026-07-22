export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-inter text-xs font-semibold uppercase tracking-widest"
      style={{
        backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
        backgroundSize: '100% 1.2em',
        backgroundRepeat: 'repeat-y',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  )
}
