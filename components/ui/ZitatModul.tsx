import Image from 'next/image'

type ZitatModulProps = {
  zitat: string
  autor?: string
  rolle?: string
  /** Eindeutige ID für das Rastermuster — pro Seite nur einmal vergeben */
  patternId?: string
}

/**
 * Zitatkasten mit Rasterhintergrund und freigestelltem Portrait,
 * wie in der Wahrheits- und Ergebnissektion der Startseite.
 */
export default function ZitatModul({
  zitat,
  autor = 'Fabian Schönle',
  rolle,
  patternId = 'zitat-grid',
}: ZitatModulProps) {
  return (
    <div
      className="relative rounded-2xl flex flex-col md:flex-row md:items-end"
      style={{
        background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
        border: '1px solid rgba(201,168,76,0.3)',
        boxShadow: '0 0 40px rgba(201,168,76,0.08), inset 0 0 30px rgba(201,168,76,0.04)',
        overflow: 'visible',
      }}
    >
      {/* Rasterhintergrund in eigenem, gerundetem Clip */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <pattern id={patternId} width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>

      {/* Text */}
      <div className="relative flex-1 flex flex-col justify-center px-8 py-8 md:px-10 md:py-8 md:pr-[280px]">
        <span
          className="font-barlow font-bold text-7xl leading-none select-none mb-2"
          style={{ color: '#C9A84C', opacity: 0.35, lineHeight: 1 }}
        >
          &ldquo;
        </span>
        <p className="font-barlow font-bold text-2xl md:text-3xl leading-snug mb-6" style={{ color: '#E8D49A' }}>
          {zitat}
        </p>
        <div className="mt-5">
          <p className="font-barlow font-bold text-base" style={{ color: '#E6E8EB' }}>{autor}</p>
          {rolle && <p className="font-inter text-sm" style={{ color: '#7B8792' }}>{rolle}</p>}
        </div>
      </div>

      {/* Portrait — Mobile */}
      <div className="md:hidden relative flex-shrink-0 self-center" style={{ width: 200, height: 240 }}>
        <Image
          src="/images/FS-Bild-Zitatsektion-2.png"
          alt="Fabian Schönle"
          fill
          className="object-contain object-top"
          sizes="200px"
        />
      </div>

      {/* Portrait — Desktop, ragt oben aus dem Kasten */}
      <div className="hidden md:block absolute" style={{ width: 294, height: 420, right: 24, bottom: 0 }}>
        <Image
          src="/images/FS-Bild-Zitatsektion-2.png"
          alt="Fabian Schönle"
          fill
          className="object-contain object-bottom"
          sizes="280px"
        />
      </div>
    </div>
  )
}
