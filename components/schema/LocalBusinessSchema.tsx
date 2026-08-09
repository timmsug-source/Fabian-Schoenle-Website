import { SITE_NAME, SITE_URL } from '@/lib/constants'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
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
