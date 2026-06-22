import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fabianschoenle.de'

  return [
    { url: base,                                        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/ueber-mich`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ernaehrungsberatung-karlsruhe`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/personal-coaching-online`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/abnehmcoaching`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
