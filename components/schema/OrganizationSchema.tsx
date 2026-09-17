import { SAME_AS, SITE_NAME, SITE_URL } from '@/lib/constants'

/**
 * Organization-Auszeichnung der Marke. Gehört auf die Startseite: Sie ist die
 * URL, die Google als Repräsentanz der Marke wertet, und war bisher die einzige
 * Seite ganz ohne strukturierte Daten.
 */
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/apple-touch-icon-180x180.png`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      'Datenbasiertes Performance Coaching auf Basis von Blut- und DNA-Analyse — für Männer ab 30 mit hoher beruflicher Belastung.',
    // Ohne eigene url: Derselbe Knoten (#person) steht vollständig im
    // PersonSchema daneben, dort mit der Startseite als url. Zwei verschiedene
    // Werte für dieselbe @id sind ein Widerspruch, den Validatoren anmerken.
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Fabian Schönle',
    },
    areaServed: 'DE',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karlsruhe',
      addressRegion: 'Baden-Württemberg',
      addressCountry: 'DE',
    },
    sameAs: SAME_AS,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
