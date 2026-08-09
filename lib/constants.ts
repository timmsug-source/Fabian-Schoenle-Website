export const SITE_URL = 'https://fabianschoenle.de'
export const SITE_NAME = 'FS Performance Lab'

/**
 * VORÜBERGEHEND: Alle Unterseiten werden auf `noindex, follow` gesetzt und aus
 * der Sitemap genommen. Die Startseite bleibt indexierbar.
 *
 * Zum Aufheben genügt es, diesen Wert auf `false` zu setzen — buildMetadata und
 * die Sitemap richten sich beide danach. Als Unterseite gilt alles, was
 * buildMetadata mit einem `slug` aufruft.
 *
 * Warum `follow` statt `nofollow`: Die Seiten sollen nur vorerst nicht in den
 * Suchergebnissen auftauchen. Google darf ihren Links weiterhin folgen, damit
 * beim Aufheben nichts neu aufgebaut werden muss.
 *
 * Warum zusätzlich raus aus der Sitemap: Eine eingereichte URL mit noindex
 * meldet die Search Console als Fehler („Submitted URL marked noindex").
 */
export const UNTERSEITEN_NOINDEX = true

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/fuelbyfabian/30min'

/** Profile der Marke. Werden auch als `sameAs` in den strukturierten Daten ausgegeben. */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/fabian-sch%C3%B6nle-a273a8363/'
export const YOUTUBE_URL = 'https://www.youtube.com/@FuelByFabian'
export const SAME_AS = [LINKEDIN_URL, YOUTUBE_URL]

export const NAV_LINKS = [
  { label: 'Über mich',                  href: '/ueber-mich' },
  { label: 'Ernährungsberatung',         href: '/ernaehrungsberatung-karlsruhe' },
  { label: 'Personal Coaching online',   href: '/personal-coaching-online' },
  { label: 'Abnehmcoaching',             href: '/abnehmcoaching' },
] as const
