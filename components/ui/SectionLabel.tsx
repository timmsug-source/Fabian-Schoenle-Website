import { cms as cmsMarkierung } from '@/lib/cms-text'

/** `cms` markiert das Label für den visuellen Editor im Website-Hub (siehe CMS-VISUELL.md). */
export default function SectionLabel({ children, cms }: { children: React.ReactNode; cms?: string }) {
  return (
    <span
      {...(cms ? cmsMarkierung(cms) : {})}
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
