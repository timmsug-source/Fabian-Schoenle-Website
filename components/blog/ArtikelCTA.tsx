import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'
import { kastenStil } from '@/components/blog/Bausteine'

/**
 * CTA neben dem Artikel: wer schreibt, und der naechste Schritt. Bewusst
 * leise formuliert, wer einen Ratgeber liest, will zuerst lesen.
 */
export default function ArtikelCTA() {
  return (
    <div className="rounded-2xl p-6 text-left" style={{ ...kastenStil, border: '1px solid rgba(201,168,76,0.45)' }}>
      <div className="flex items-center gap-3 mb-4">
        <span className="relative rounded-full overflow-hidden flex-shrink-0" style={{ width: 48, height: 48, border: '2px solid rgba(201,168,76,0.5)' }}>
          <Image src="/images/fabian-rund.jpg" alt="Fabian Schönle" width={96} height={96} className="w-full h-full object-cover" />
        </span>
        <div>
          <p className="font-barlow font-semibold text-lg leading-tight" style={{ color: '#E6E8EB' }}>
            Fabian Schönle
          </p>
          <p className="font-inter text-xs" style={{ color: '#7B8792' }}>
            M.Sc. Chemie · Performance Coach
          </p>
        </div>
      </div>

      <p className="font-barlow font-bold text-2xl leading-snug mb-2" style={{ color: '#E6E8EB' }}>
        Was heißt das für dich?
      </p>
      <p className="font-inter text-sm leading-relaxed mb-5" style={{ color: '#A6B0BA' }}>
        In der kostenlosen Performance-Analyse schauen wir auf deinen Alltag und klären, welche
        Hebel bei dir am meisten bringen.
      </p>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-metal flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-inter font-semibold text-sm transition-transform"
      >
        Performance-Analyse buchen
      </a>
      <p className="font-inter text-xs text-center mt-3" style={{ color: '#7B8792' }}>
        20 Minuten · online · kostenlos
      </p>
    </div>
  )
}
