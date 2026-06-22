export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FS-Performance',
    url: 'https://fabianschoenle.de',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karlsruhe',
      addressRegion: 'Baden-Württemberg',
      addressCountry: 'DE',
    },
    priceRange: '€€€',
    description: 'Datenbasiertes Performance Coaching und Ernährungsberatung in Karlsruhe.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
