import Image from 'next/image'
import Link from 'next/link'
import { formatiereDatum, type Artikel } from '@/lib/blog'
import BildPlatzhalter from '@/components/blog/BildPlatzhalter'

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Teaser eines Artikels. `gross` legt Bild und Text nebeneinander, fuer den
 * neuesten Artikel oben auf der Uebersicht. Die ganze Karte ist der Link.
 */
export default function ArtikelKarte({ artikel, gross = false }: { artikel: Artikel; gross?: boolean }) {
  return (
    <Link
      href={`/blog/${artikel.slug}`}
      className={`group leistung-card rounded-2xl overflow-hidden flex flex-col text-left ${gross ? 'lg:flex-row' : ''}`}
    >
      <div className={`relative aspect-video overflow-hidden flex-shrink-0 ${gross ? 'lg:w-[55%] lg:aspect-auto lg:min-h-[340px]' : ''}`}>
        {artikel.bild ? (
          <Image
            src={artikel.bild.src}
            alt={artikel.bild.alt}
            fill
            sizes={gross ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ objectPosition: artikel.bild.position ?? 'center' }}
          />
        ) : (
          <BildPlatzhalter />
        )}
      </div>

      <div className={`flex flex-col flex-1 p-6 md:p-7 ${gross ? 'lg:p-10 lg:justify-center' : ''}`}>
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={goldText}>
          {artikel.kategorie}
        </p>
        <h3
          className={`font-barlow font-bold leading-snug mb-3 ${gross ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}
          style={{ color: '#E6E8EB' }}
        >
          {artikel.titel}
        </h3>
        <p className={`font-inter leading-relaxed mb-6 ${gross ? 'text-base md:text-lg' : 'text-sm md:text-base'}`} style={{ color: '#A6B0BA' }}>
          {artikel.beschreibung}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4">
          <p className="font-inter text-xs" style={{ color: '#7B8792' }}>
            {formatiereDatum(artikel.datum)} · {artikel.lesezeit} Min. Lesezeit
          </p>
          <span className="inline-flex items-center gap-1.5 font-inter text-sm font-semibold" style={{ color: '#E8D49A' }}>
            Lesen
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
