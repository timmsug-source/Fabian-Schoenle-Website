import Hero from '@/components/sections/Hero'
import SymptomGrid from '@/components/sections/SymptomGrid'
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
      <SymptomGrid />
      <HypotheseSection />
      <LoesungsSection />
      <FallstudienSection />
      <VergleichSection />
      <ErgebnisSection />
      <UeberMichSection />
      <KontaktSection />
      <SocialSection />
      <FAQSection />
    </>
  )
}
