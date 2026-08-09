import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export function buildMetadata({
  title,
  description,
  slug,
}: {
  title: string
  description: string
  slug?: string
}): Metadata {
  const url = slug ? `${SITE_URL}/${slug}` : SITE_URL

  // Next.js vererbt app/opengraph-image.tsx nicht an untergeordnete Routen — ohne
  // diesen Verweis hätten alle Unterseiten wieder gar kein Vorschaubild. Die Route
  // liefert dasselbe zur Build-Zeit erzeugte Bild aus.
  const vorschaubild = {
    url: `${SITE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} — Datenbasiertes Performance Coaching`,
  }

  return {
    // `absolute` schaltet die Title-Vorlage aus dem Root-Layout ab. Die Titel hier
    // tragen den Markennamen bereits selbst — ohne das Flag hängt Next.js ihn ein
    // zweites Mal an ("… | FS-Performance | FS-Performance").
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
      images: [vorschaubild],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [vorschaubild],
    },
  }
}
