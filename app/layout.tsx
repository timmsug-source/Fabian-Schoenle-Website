import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import AnfrageFormular from '@/components/AnfrageFormular'

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

export const metadata: Metadata = {
  title: {
    default: 'High Performance Coaching für Männer ab 30 | FS-Performance',
    template: '%s | FS-Performance',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
