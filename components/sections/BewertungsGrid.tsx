import { BEWERTUNGEN } from '@/lib/bewertungen'

type BewertungsGridProps = {
  /** Optionaler Hinweistext unter dem Raster */
  hinweis?: string
}

/**
 * Masonry-Raster echter Bewertungs-Screenshots — gleiche Darstellung
 * wie im Bewertungsblock der Startseite (ErgebnisSection).
 */
export default function BewertungsGrid({ hinweis }: BewertungsGridProps) {
  return (
    <div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {BEWERTUNGEN.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-4 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Bewertung ${i + 1}`} className="w-full h-auto block" loading="lazy" />
          </div>
        ))}
      </div>

      {hinweis && (
        <p className="font-inter text-xs text-center mt-6" style={{ color: '#7B8792' }}>
          {hinweis}
        </p>
      )}
    </div>
  )
}
