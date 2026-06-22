export const SITE_URL = 'https://fabianschoenle.de'
export const SITE_NAME = 'FS-Performance'

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/fuelbyfabian/30min'

export const NAV_LINKS = [
  { label: 'Über mich',                  href: '/ueber-mich' },
  { label: 'Ernährungsberatung',         href: '/ernaehrungsberatung-karlsruhe' },
  { label: 'Personal Coaching online',   href: '/personal-coaching-online' },
  { label: 'Abnehmcoaching',             href: '/abnehmcoaching' },
] as const
