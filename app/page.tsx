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
import { getSiteContent } from '@/lib/cms'

// CMS-Änderungen erscheinen automatisch (ISR, alle 60s)
export const revalidate = 60

export default async function HomePage() {
  const content = await getSiteContent()
  return (
    <>
      <Hero content={content} />
      <MusterCheck content={content} />
      <HypotheseSection content={content} />
      <ErgebnisSection content={content} />
      <LoesungsSection content={content} />
      <FallstudienSection content={content} />
      <VergleichSection content={content} />
      <UeberMichSection content={content} />
      <KontaktSection content={content} />
      <SocialSection />
      <FAQSection content={content} />
    </>
  )
}
