import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#060E1F', borderTop: '1px solid rgba(201, 168, 76, 0.25)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-barlow font-semibold text-base tracking-wide mb-1" style={{ color: '#E6E8EB' }}>
            Fabian Schönle
          </p>
          <p className="text-xs font-inter" style={{ color: '#5B6773' }}>Karlsruhe, Deutschland</p>
        </div>
        <div className="flex gap-6 text-sm font-inter" style={{ color: '#5B6773' }}>
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(201, 168, 76, 0.15)' }}>
        <p className="max-w-7xl mx-auto px-4 md:px-8 py-4 text-xs font-inter" style={{ color: '#5B6773' }}>
          © {year} {SITE_NAME} — Fabian Schönle
        </p>
      </div>
    </footer>
  )
}
