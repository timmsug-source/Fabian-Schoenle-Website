import type { Metadata } from 'next'

export function buildMetadata({
  title,
  description,
  slug,
}: {
  title: string
  description: string
  slug?: string
}): Metadata {
  const base = 'https://fabianschoenle.de'
  const url = slug ? `${base}/${slug}` : base

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'FS-Performance',
      images: [{ url: `${base}/images/og-image.jpg`, width: 1200, height: 630 }],
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${base}/images/og-image.jpg`],
    },
  }
}
