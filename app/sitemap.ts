import { MetadataRoute } from 'next'
import { FREIGEGEBENE_UNTERSEITEN, SITE_URL, UNTERSEITEN_NOINDEX } from '@/lib/constants'

const unterseiten: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/ueber-mich`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${SITE_URL}/ernaehrungsberatung-karlsruhe`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${SITE_URL}/personal-coaching-online`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${SITE_URL}/abnehmcoaching`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    // Unterseiten auf noindex gehören nicht in die Sitemap — die Search Console
    // meldet das sonst als Fehler. Einzeln freigegebene stehen schon drin.
    ...unterseiten.filter(
      (s) => !UNTERSEITEN_NOINDEX || FREIGEGEBENE_UNTERSEITEN.includes(s.url.replace(`${SITE_URL}/`, '')),
    ),
  ]
}
