import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { alleArtikel, BLOG_ROBOTS, findeArtikel, formatiereDatum, weitereArtikel } from '@/lib/blog'
import ArtikelKarte from '@/components/blog/ArtikelKarte'
import ArtikelCTA from '@/components/blog/ArtikelCTA'
import Inhaltsverzeichnis from '@/components/blog/Inhaltsverzeichnis'
import BildPlatzhalter from '@/components/blog/BildPlatzhalter'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return alleArtikel().map((a) => ({ slug: a.slug }))
}

/** Unbekannte Slugs gar nicht erst rendern, sondern 404 */
export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const artikel = findeArtikel(params.slug)
  if (!artikel) return {}
  return {
    ...buildMetadata({
      title: `${artikel.titel} | ${SITE_NAME}`,
      description: artikel.beschreibung,
      slug: `blog/${artikel.slug}`,
    }),
    robots: BLOG_ROBOTS,
  }
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
 * Artikelseite: Kopf mit Titelbild, darunter links Inhaltsverzeichnis und CTA
 * (mitlaufend), rechts der deutlich breitere Text. Am Ende drei weitere
 * Ratgeber.
 *
 * Alle Abschnitte tragen `text-left`: Die Website zentriert auf dem Handy jeden
 * Text in `main section` (globals.css). Fuer Fliesstext ueber mehrere Absaetze
 * waere das schwer lesbar.
 */
export default function ArtikelPage({ params }: Props) {
  const artikel = findeArtikel(params.slug)
  if (!artikel) notFound()

  const eintraege = artikel.abschnitte.map(({ id, titel }) => ({ id, titel }))
  const weitere = weitereArtikel(artikel.slug)
  const url = `${SITE_URL}/blog/${artikel.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: artikel.titel,
    description: artikel.beschreibung,
    ...(artikel.bild ? { image: `${SITE_URL}${artikel.bild.src}` } : {}),
    datePublished: artikel.datum,
    mainEntityOfPage: url,
    author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'Fabian Schönle', url: SITE_URL },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL },
  }

  return (
    <div style={{ background: '#060E1F' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Kopf */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-left" style={{ paddingTop: 120 }}>
        <div className="pt-10 md:pt-16">
          <nav aria-label="Brotkrumen" className="flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest mb-6">
            <Link href="/blog" className="transition-colors hover:text-white" style={{ color: '#7B8792' }}>
              Ratgeber
            </Link>
            <span style={{ color: '#3A4A5A' }}>/</span>
            <span style={goldText}>{artikel.kategorie}</span>
          </nav>

          <h1 className="font-barlow font-bold text-4xl md:text-6xl leading-[1.1] mb-6 max-w-4xl" style={{ color: '#E6E8EB' }}>
            {artikel.titel}
          </h1>
          <p className="font-inter text-base md:text-xl leading-relaxed mb-8 max-w-3xl" style={{ color: '#A6B0BA' }}>
            {artikel.beschreibung}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-10 md:mb-12">
            <div className="flex items-center gap-3">
              <span className="relative rounded-full overflow-hidden flex-shrink-0" style={{ width: 40, height: 40, border: '2px solid rgba(201,168,76,0.5)' }}>
                <Image src="/images/fabian-rund.jpg" alt="" width={80} height={80} className="w-full h-full object-cover" />
              </span>
              <span className="font-inter text-sm font-semibold" style={{ color: '#E6E8EB' }}>
                Fabian Schönle
              </span>
            </div>
            <span className="font-inter text-sm" style={{ color: '#7B8792' }}>
              {formatiereDatum(artikel.datum)} · {artikel.lesezeit} Min. Lesezeit
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.3)' }}>
          {artikel.bild ? (
            <Image
              src={artikel.bild.src}
              alt={artikel.bild.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
              style={{ objectPosition: artikel.bild.position ?? 'center' }}
            />
          ) : (
            <BildPlatzhalter />
          )}
        </div>
      </section>

      {/* Inhalt: links Navigation und CTA, rechts der Text */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          <aside className="lg:col-span-4">
            <div className="lg:hidden">
              <Inhaltsverzeichnis eintraege={eintraege} mobil />
            </div>
            <div className="hidden lg:flex lg:flex-col gap-6 lg:sticky lg:top-28">
              <Inhaltsverzeichnis eintraege={eintraege} />
              <ArtikelCTA />
            </div>
          </aside>

          <article className="lg:col-span-8 min-w-0">
            {artikel.abschnitte.map((a, i) => (
              <div key={a.id} id={a.id} className={`scroll-mt-28 ${i > 0 ? 'mt-12 md:mt-14' : ''}`}>
                <h2 className="font-barlow font-bold text-3xl md:text-4xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
                  {a.titel}
                </h2>
                {a.inhalt}
              </div>
            ))}

            {/* Auf dem Handy gibt es keine Seitenleiste: CTA am Ende des Texts */}
            <div className="lg:hidden mt-12">
              <ArtikelCTA />
            </div>
          </article>
        </div>
      </section>

      {/* Weitere Ratgeber */}
      {weitere.length > 0 && (
        <section className="relative" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={goldText}>
                  Weiterlesen
                </p>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
                  Weitere Ratgeber
                </h2>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center gap-2 font-inter text-sm font-semibold flex-shrink-0 transition-opacity hover:opacity-80" style={{ color: '#E8D49A' }}>
                Alle Artikel
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {weitere.map((w) => (
                <ArtikelKarte key={w.slug} artikel={w} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
