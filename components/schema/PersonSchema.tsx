export default function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fabian Schönle',
    url: 'https://fabianschoenle.de',
    jobTitle: 'Performance Coach',
    description:
      'Fabian Schönle ist Performance Coach mit PhD-Hintergrund in Chemie. Er spezialisiert sich auf metabolische Optimierung für Männer ab 30.',
    image: 'https://fabianschoenle.de/images/fabian-portrait.jpg',
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
