export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-widest text-accent font-inter">
      {children}
    </span>
  )
}
