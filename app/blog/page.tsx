import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { SITE_NAME } from '@/lib/constants'
import { alleArtikel, BLOG_ROBOTS } from '@/lib/blog'
import ArtikelKarte from '@/components/blog/ArtikelKarte'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  ...buildMetadata({
    title: `Ratgeber: Energie, Körperkomposition und Regeneration | ${SITE_NAME}`,
    description:
      'Fundierte Artikel zu Blutwerten, Energie, Körperkomposition und Schlaf. Für Männer ab 30, die verstehen wollen, was in ihrem Körper passiert.',
    slug: 'blog',
  }),
  robots: BLOG_ROBOTS,
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Uebersicht aller Ratgeber: der neueste Artikel gross oben, die uebrigen im
 * Raster darunter. Artikel kommen aus lib/blog.tsx.
 */
export default function BlogPage() {
  const [neuester, ...weitere] = alleArtikel()

  return (
    <div style={{ background: '#060E1F' }}>
      {/* Kopf mit Gitter und Lichtschein wie die Heros der übrigen Seiten */}
      <section className="relative overflow-hidden" style={{ paddingTop: 120 }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <pattern id="blog-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
            </pattern>
            <radialGradient id="blog-glow" cx="20%" cy="20%" r="55%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.16)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <linearGradient id="blog-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="blog-mask">
              <rect width="100%" height="100%" fill="url(#blog-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-grid)" mask="url(#blog-mask)" />
          <rect width="100%" height="100%" fill="url(#blog-glow)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-12 md:pb-16">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={goldText}>
            Ratgeber
          </p>
          <h1 className="font-barlow font-bold text-5xl md:text-7xl leading-[1.05] mb-6 max-w-3xl" style={{ color: '#E6E8EB' }}>
            Verstehen, was in deinem <span style={goldText}>Körper</span> passiert
          </h1>
          <p className="font-inter text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#A6B0BA' }}>
            Artikel zu Energie, Blutwerten, Körperkomposition und Regeneration. Ohne Mythen und ohne
            Fitness-Versprechen, dafür mit dem, was im Alltag eines vollen Kalenders tatsächlich
            umsetzbar ist.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {neuester && <ArtikelKarte artikel={neuester} gross />}

        {weitere.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
            {weitere.map((a) => (
              <ArtikelKarte key={a.slug} artikel={a} />
            ))}
          </div>
        )}
      </section>

      <CTABanner
        headline="Wissen ist der Anfang. Deine Werte sind der nächste Schritt."
        body="In der kostenlosen Performance-Analyse schauen wir auf deinen Alltag und klären, welche Hebel bei dir am meisten bringen."
        note="20 Minuten · online · kostenlos"
      />
    </div>
  )
}
