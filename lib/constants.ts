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

/**
 * Unterseiten, die trotz UNTERSEITEN_NOINDEX schon indexierbar sind und in der
 * Sitemap stehen. So lassen sich Seiten einzeln freigeben, sobald sie fertig
 * sind, statt alle auf einmal. Eingetragen wird der `slug` aus buildMetadata.
 */
export const FREIGEGEBENE_UNTERSEITEN: readonly string[] = ['ueber-mich']

// Frueher calendly.com/fuelbyfabian/30min, das liefert inzwischen 404.
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/fsperformancelab/30min'

/**
 * Ziel aller Schaltflächen, die das Anfrageformular öffnen (`data-open-form`).
 *
 * Bewusst kein Calendly-Link: Früher stand hier Calendly als Rückfallebene.
 * Bis das JavaScript geladen war, führten die Knöpfe dadurch zu Calendly statt
 * ins Formular, auf dem Handy oft die ersten Sekunden. Ein Klick in dieser Zeit
 * setzt jetzt nur den Anker, AnfrageFormular öffnet sich, sobald es bereit ist.
 * Funktioniert auch als Direktlink, z. B. fabianschoenle.de/#anfrage.
 */
export const ANFRAGE_ANKER = '#anfrage'

/**
 * Ziel der Calendly-Schaltflächen (`data-open-kalender`): öffnet den Kalender
 * im Fenster auf der Seite statt calendly.com. Nur so lässt sich eine Buchung
 * an den Meta-Pixel melden, ohne den kostenpflichtigen Calendly-Tarif.
 * Nicht `#termin`, das ist auf /danke der Anker zur Kalender-Sektion.
 */
export const KALENDER_ANKER = '#kalender'

/** Profile der Marke. Werden auch als `sameAs` in den strukturierten Daten ausgegeben. */
export const LINKEDIN_URL = 'https://www.linkedin.com/in/fabian-sch%C3%B6nle-a273a8363/'
/** Meta-Pixel fuer die Facebook-/Instagram-Werbung. Laedt nur mit Einwilligung „Marketing“. */
export const META_PIXEL_ID = '1790344968532836'

// Der Kanal hiess frueher @FuelByFabian, der alte Name liefert inzwischen 404.
// Gleicher Kanal (ID UC6pwxF5Ngw8kYbJgjd-eqMg, siehe SocialSection).
export const YOUTUBE_URL = 'https://www.youtube.com/@FS-Performance-Lab'
export const SAME_AS = [LINKEDIN_URL, YOUTUBE_URL]

export const NAV_LINKS = [
  { label: 'Über mich',                  href: '/ueber-mich' },
  { label: 'Ernährungsberatung',         href: '/ernaehrungsberatung-frankfurt' },
  { label: 'Personal Coaching online',   href: '/personal-coaching-online' },
  { label: 'Abnehmcoaching',             href: '/abnehmcoaching' },
] as const
