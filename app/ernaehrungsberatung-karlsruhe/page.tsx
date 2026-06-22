import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SolutionSection from '@/components/sections/SolutionSection'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema'
import FAQSchema from '@/components/schema/FAQSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Ernährungsberatung Karlsruhe — datenbasiert & individuell | FS-Performance',
  description:
    'Ernährungsberatung in Karlsruhe basierend auf deinen Blutwerten — kein generischer Diätplan, sondern ein System das zu deiner Biologie passt.',
  slug: 'ernaehrungsberatung-karlsruhe',
})

const faqItems = [
  {
    question: 'Findet die Ernährungsberatung in Karlsruhe vor Ort statt?',
    answer:
      'Ja, du hast die Wahl: persönlich in Karlsruhe oder komplett online. Die Qualität ist identisch — weil der Ansatz datenbasiert ist, spielt der Ort keine Rolle.',
  },
  {
    question: 'Wie unterscheidet sich datenbasierte Ernährungsberatung von klassischer?',
    answer:
      'Klassische Beratung gibt allgemeine Empfehlungen. Datenbasierte Beratung wertet dein individuelles Blutbild aus und leitet daraus ab, was dein Körper spezifisch braucht.',
  },
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer:
      'Die meisten Klienten berichten innerhalb von 4–6 Wochen von stabilerer Energie und besserem Schlaf. Körperkomposition verändert sich messbar nach 8–12 Wochen.',
  },
]

export default function ErnaehrungsberatungKarlsruhePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema items={faqItems} />

      <Hero
        label="Ernährungsberatung Karlsruhe"
        headline="Keine Diät. Ein System."
        subheadline="Ernährungsberatung in Karlsruhe — basierend auf deinen Blutwerten."
        body="Generische Ernährungspläne scheitern, weil sie deine Biologie ignorieren. Die Ernährungsberatung bei FS-Performance beginnt mit einer Blutanalyse und endet mit einem Protokoll, das präzise auf dein Stoffwechselprofil abgestimmt ist."
        ctaLabel="Ernährungsberatung anfragen"
      />


      <SolutionSection
        label="Vorgehen"
        headline="So läuft die Ernährungsberatung ab."
        steps={[
          {
            number: '01',
            headline: 'Blutanalyse',
            body: 'Wir erheben ein umfassendes Blutbild — weit über den Standard hinaus. Das gibt uns präzise Einblicke in dein metabolisches System.',
          },
          {
            number: '02',
            headline: 'Auswertung',
            body: 'Fabian analysiert die Daten wissenschaftlich und identifiziert Defizite, Unverträglichkeiten und Optimierungspotenzial.',
          },
          {
            number: '03',
            headline: 'Protokoll',
            body: 'Du erhältst einen individuellen Ernährungsplan — keine allgemeinen Empfehlungen, sondern konkrete Anweisungen für deine Biologie.',
          },
        ]}
      />

      <FAQ
        label="Häufige Fragen"
        headline="Fragen zur Ernährungsberatung in Karlsruhe."
        items={faqItems}
      />

      <CTASection
        label="Nächster Schritt"
        headline="Bereit für datenbasierte Ernährungsberatung?"
        body="Im kostenlosen Erstgespräch besprechen wir deine Situation und klären, wie wir dein metabolisches System optimieren können."
        ctaLabel="Kostenloses Erstgespräch buchen"
      />
    </>
  )
}
