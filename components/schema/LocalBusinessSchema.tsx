import { SITE_NAME, SITE_URL } from '@/lib/constants'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: '',
    // VORLAEUFIG ohne Ort: Fabian zieht in die Naehe von Frankfurt, die genaue
    // Adresse steht noch nicht fest. Sobald sie da ist, addressLocality (und
    // ggf. postalCode) ergaenzen, passend zum Google-Unternehmensprofil.
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    areaServed: [
      { '@type': 'City', name: 'Frankfurt am Main' },
      { '@type': 'Place', name: 'Rhein-Main-Gebiet' },
    ],
    priceRange: '€€€',
    description: 'Datenbasiertes Performance Coaching und Ernährungsberatung in Frankfurt und Rhein-Main.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
