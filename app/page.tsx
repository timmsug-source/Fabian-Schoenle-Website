import Hero from '@/components/sections/Hero'
import MusterCheck from '@/components/sections/MusterCheck'
import HypotheseSection from '@/components/sections/HypotheseSection'
import LoesungsSection from '@/components/sections/LoesungsSection'
import FallstudienSection from '@/components/sections/FallstudienSection'
import VergleichSection from '@/components/sections/VergleichSection'
import ErgebnisSection from '@/components/sections/ErgebnisSection'
import UeberMichSection from '@/components/sections/UeberMichSection'
import KontaktSection from '@/components/sections/KontaktSection'
import SocialSection from '@/components/sections/SocialSection'
import FAQSection from '@/components/sections/FAQSection'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import PersonSchema from '@/components/schema/PersonSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { getSiteContent } from '@/lib/cms'
import { faqsAusCms } from '@/lib/faq'
import { buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

// CMS-Änderungen erscheinen automatisch (ISR, alle 60s)
export const revalidate = 60

export const metadata: Metadata = buildMetadata({
  title: 'High Performance Coaching für Männer ab 30 | FS-Performance',
  description:
    'Datenbasiertes Performance Coaching — basierend auf DNA- und Blutanalyse. Für Männer, die körperlich und mental auf Maximum performen wollen.',
})

export default async function HomePage() {
  const content = await getSiteContent()
  const faqs = faqsAusCms(content)

  return (
    <>
      <OrganizationSchema />
      <PersonSchema />
      <FAQSchema items={faqs.map((f) => ({ question: f.frage, answer: f.antwort }))} />
      <Hero content={content} />
      <MusterCheck content={content} />
      <HypotheseSection content={content} />
      <ErgebnisSection content={content} />
      <LoesungsSection content={content} />
      <FallstudienSection content={content} />
      <VergleichSection content={content} />
      <UeberMichSection content={content} />
      <KontaktSection content={content} />
      <SocialSection content={content} />
      <FAQSection content={content} />
    </>
  )
}
