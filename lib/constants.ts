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

/**
 * VORÜBERGEHEND AUS: Solange der Mailversand nicht steht (goneo lässt den
 * MX-Eintrag für Resend nicht zu), führen alle CTAs direkt zu Calendly, statt
 * das Anfrageformular zu öffnen. Ein Formular, dessen Nachrichten nirgends
 * ankommen, ist schlimmer als kein Formular.
 *
 * Auf `true` setzen, sobald der Versand funktioniert — dann greifen wieder alle
 * Elemente mit `data-open-form`, und die Direktnachricht in der FAQ erscheint.
 * Alle betroffenen Schaltflächen haben ohnehin Calendly als Ziel hinterlegt;
 * ohne die Abfangfunktion verhalten sie sich einfach als normale Links.
 */
export const ANFRAGE_FORMULAR_AKTIV = false

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
