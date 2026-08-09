type FAQItem = {
  question: string
  answer: string
}

/**
 * Antworten dürfen aus dem CMS Auszeichnungen wie <strong> enthalten. Im Schema
 * gehört reiner Text — Google erwartet dort den Antworttext, nicht das Markup.
 */
function alsText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

export default function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: alsText(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: alsText(item.answer),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
