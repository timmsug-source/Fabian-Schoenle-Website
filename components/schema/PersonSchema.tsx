import { SAME_AS, SITE_NAME, SITE_URL } from '@/lib/constants'

export default function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Fabian Schönle',
    url: SITE_URL,
    jobTitle: 'Performance Coach',
    description:
      'Fabian Schönle ist Performance Coach mit wissenschaftlichem Hintergrund (M.Sc Chemie). Er spezialisiert sich auf metabolische Optimierung für Männer ab 30.',
    // Vorher /images/fabian-portrait.jpg — diese Datei existiert nicht und lieferte 404.
    image: `${SITE_URL}/images/Fabian-Schoenle-Blick-Kamera.webp`,
    // Mit Namen und URL statt nur per @id: PersonSchema läuft auch auf /ueber-mich,
    // wo kein Organization-Knoten steht — ein reiner @id-Verweis liefe dort ins Leere.
    worksFor: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karlsruhe',
        addressRegion: 'Baden-Württemberg',
        addressCountry: 'DE',
      },
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
