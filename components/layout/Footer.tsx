import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#060E1F', borderTop: '1px solid rgba(201, 168, 76, 0.25)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/images/FS-Logo-60x60.png"
            alt="FS Performance Lab"
            width={44}
            height={44}
            className="rounded-lg object-contain"
          />
          <div>
            <p className="font-barlow font-semibold text-base tracking-wide mb-1" style={{ color: '#E6E8EB' }}>
              Fabian Schönle
            </p>
            <p className="text-xs font-inter" style={{ color: '#7B8792' }}>Karlsruhe, Deutschland</p>
          </div>
        </div>
        {/* Verweise auf die Unterseiten. Vorher führten von jeder Seite nur
            Impressum und Datenschutz weiter — der Header besteht aus
            Sprungmarken, die Suchmaschinen nicht als Links zu anderen Seiten
            werten. Die Unterseiten waren dadurch nur über die Sitemap
            auffindbar (Seobility: zu wenige interne Links). */}
        <nav aria-label="Seiten" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-inter" style={{ color: '#7B8792' }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6 text-sm font-inter" style={{ color: '#7B8792' }}>
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">
            Datenschutz
          </Link>
          {/* Widerruf muss so einfach erreichbar sein wie die Erteilung —
              das Attribut oeffnet die Auswahl erneut (siehe ConsentBanner). */}
          <button type="button" data-cookie-einstellungen className="hover:text-white transition-colors">
            Cookie-Einstellungen
          </button>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(201, 168, 76, 0.15)' }}>
        <p className="max-w-7xl mx-auto px-4 md:px-8 py-4 text-xs font-inter" style={{ color: '#7B8792' }}>
          © {year} {SITE_NAME} — Fabian Schönle
        </p>
      </div>
    </footer>
  )
}
