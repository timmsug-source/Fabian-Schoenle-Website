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
 * Steuert, ob die CTAs das Anfrageformular öffnen oder direkt zu Calendly führen.
 *
 * Stand 01.09.2026 wieder aktiv: Der Versand läuft über Resend mit der
 * Sende-Subdomain `send.fabianschoenle.de`, die Domain ist verifiziert und die
 * Variablen sind in Vercel hinterlegt. Damit greifen alle Elemente mit
 * `data-open-form`, und die Direktnachricht in der FAQ erscheint wieder.
 *
 * Zuvor war der Schalter aus, weil der MX-Eintrag für Resend fehlte — goneo
 * verlangt, dass die Sende-Subdomain zuerst im Kundencenter angelegt wird.
 *
 * Wieder auf `false` setzen, falls der Versand ausfällt: Alle betroffenen
 * Schaltflächen haben ohnehin Calendly als Ziel hinterlegt und verhalten sich
 * dann einfach als normale Links. Ein Formular, dessen Nachrichten nirgends
 * ankommen, ist schlimmer als kein Formular.
 */
export const ANFRAGE_FORMULAR_AKTIV = true

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
