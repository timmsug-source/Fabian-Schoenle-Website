import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SolutionSection from '@/components/sections/SolutionSection'
import ComparisonTable from '@/components/sections/ComparisonTable'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import FAQSchema from '@/components/schema/FAQSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Abnehmcoaching für Männer | Kein Jo-Jo, kein Verzicht | FS-Performance',
  description:
    'Abnehmcoaching das wirklich funktioniert — weil es auf deiner Biologie basiert, nicht auf Willenskraft. Für Männer ab 30 mit Bauchfett und Energieproblemen.',
  slug: 'abnehmcoaching',
})

const faqItems = [
  {
    question: 'Warum funktionieren klassische Ansätze bei mir nicht?',
    answer:
      'Weil sie deine individuelle Biologie ignorieren. Hormonelle Dysbalancen, Insulinresistenz oder spezifische Nährstoffmängel lassen sich nicht mit einem generischen Kaloriendefizit lösen.',
  },
  {
    question: 'Muss ich auf alles verzichten?',
    answer:
      'Nein. Verzicht als Strategie scheitert langfristig immer. Das Ziel ist ein System, das deinen Stoffwechsel so einstellt, dass du deinen Körper dauerhaft veränderst — ohne permanenten Kampf gegen Heißhunger.',
  },
  {
    question: 'Wie schnell verliere ich Körperfett?',
    answer:
      'Das ist individuell. Im Schnitt berichten Klienten von 0,5–1 kg Körperfettreduktion pro Woche ohne Jo-Jo-Effekt, da die Ursache systemisch adressiert wird.',
  },
]

export default function AbnehmcoachingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      <Hero
        label="Abnehmcoaching"
        headline="Kein Jo-Jo. Kein Verzicht. Ein System."
        subheadline="Körperfettreduktion für Männer ab 30 — datenbasiert."
        body="Das Problem ist nicht fehlende Disziplin. Bauchfett bei Männern ab 30 hat biologische Ursachen — hormonell, metabolisch, oft messbar. Wer diese Ursachen kennt, kann sie beheben."
        ctaLabel="Abnehmcoaching anfragen"
      />


      <SolutionSection
        label="Der Unterschied"
        headline="Körperfettreduktion, die dauerhaft hält."
        steps={[
          {
            number: '01',
            headline: 'Ursachen finden',
            body: 'Blutbild und DNA zeigen, warum dein Körper Fett speichert — Insulinresistenz, Schilddrüse, Cortisol, Testosteron.',
          },
          {
            number: '02',
            headline: 'System einstellen',
            body: 'Ernährung, Timing und Supplementierung werden präzise auf dein Profil abgestimmt — nicht geraten.',
          },
          {
            number: '03',
            headline: 'Dauerhaft halten',
            body: 'Weil die Ursache adressiert ist, bleibt das Ergebnis. Kein Rückfall in alte Muster.',
          },
        ]}
      />

      <ComparisonTable
        label="Vergleich"
        headline="Warum klassisches Abnehmcoaching scheitert."
        rows={[
          {
            criterion: 'Ansatz',
            standard: 'Kaloriendefizit & Verzicht',
            fsPerformance: 'Metabolisches System optimieren',
          },
          {
            criterion: 'Grundlage',
            standard: 'Allgemeine Empfehlungen',
            fsPerformance: 'Dein Blutbild & DNA',
          },
          {
            criterion: 'Heißhunger',
            standard: 'Willenskraft',
            fsPerformance: 'Hormonal reguliert',
          },
          {
            criterion: 'Nachhaltigkeit',
            standard: 'Jo-Jo nach Programmende',
            fsPerformance: 'Dauerhaft, da systemisch',
          },
        ]}
      />

      <FAQ
        label="Häufige Fragen"
        headline="Fragen zum Abnehmcoaching."
        items={faqItems}
      />

      <CTASection
        label="Nächster Schritt"
        headline="Bereit, die Ursache zu beheben?"
        body="Im kostenlosen Erstgespräch analysieren wir deine Situation und klären, warum dein Körper bisher nicht reagiert hat — und was wir dagegen tun können."
        ctaLabel="Kostenloses Erstgespräch buchen"
      />
    </>
  )
}
