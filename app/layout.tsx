import type { Metadata, Viewport } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { SITE_NAME } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import AnfrageFormular from '@/components/AnfrageFormular'
import CalendlyFenster from '@/components/CalendlyFenster'
import ConsentBanner from '@/components/consent/ConsentBanner'
import Analytics from '@/components/consent/Analytics'
import MetaPixel from '@/components/consent/MetaPixel'
import NurAufSeiten from '@/components/layout/NurAufSeiten'

/** Landingpages aus bezahlter Werbung laufen ohne Navigation. */
const OHNE_NAVIGATION = ['/danke', '/kostenloses-video']

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

/**
 * Dieselbe Aussage wie `color-scheme: dark` in globals.css, nur als Meta-Angabe:
 * Der Browser wertet sie schon vor dem Stylesheet aus und wendet seinen
 * automatischen Dunkelmodus dadurch gar nicht erst an. `themeColor` färbt
 * zusätzlich die Browserleiste auf Android im Seitenhintergrund ein.
 */
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#060E1F',
}

export const metadata: Metadata = {
  title: {
    default: `High Performance Coaching für Männer ab 30 | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Datenbasiertes Performance Coaching — basierend auf DNA- und Blutanalyse. Für Männer, die körperlich und mental auf Maximum performen wollen.',
  metadataBase: new URL('https://fabianschoenle.de'),
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/images/apple-touch-icon-180x180.png', sizes: '180x180' },
      { url: '/images/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/images/apple-touch-icon-120x120.png', sizes: '120x120' },
    ],
  },
  // Domain-Bestätigung für Meta (Facebook/Instagram-Werbung). Muss auf der
  // Startseite im <head> stehen, Next.js rendert `other` als <meta name content>.
  other: {
    'facebook-domain-verification': 'kfd25ye4ha1gx54zh7crg70gxful8a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">
        <ScrollReveal />
        <AnfrageFormular />
        <CalendlyFenster />
        <NurAufSeiten ausser={OHNE_NAVIGATION}>
          <Header />
        </NurAufSeiten>
        <main>{children}</main>
        <NurAufSeiten ausser={OHNE_NAVIGATION}>
          <Footer />
        </NurAufSeiten>
        <ConsentBanner />
        <Analytics />
        <MetaPixel />
        {/* Visueller Editor: lädt die Hub-Brücke nur im Vorschau-Rahmen des Website-Hubs, nie für normale Besucher */}
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{if(window.self===window.top)return;if(location.search.indexOf('cms-vorschau=')<0&&!sessionStorage.getItem('cms-vorschau'))return;var s=document.createElement('script');s.src='/cms-bruecke.js';s.defer=true;document.head.appendChild(s)}catch(e){}})();",
          }}
        />
      </body>
    </html>
  )
}
