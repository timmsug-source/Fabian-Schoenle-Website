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

export default function HomePage() {
  return (
    <>
      <Hero />
      <MusterCheck />
      <HypotheseSection />
      <ErgebnisSection />
      <LoesungsSection />
      <FallstudienSection />
      <VergleichSection />
      <UeberMichSection />
      <KontaktSection />
      <SocialSection />
      <FAQSection />
    </>
  )
}
