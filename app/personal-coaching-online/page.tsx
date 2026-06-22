import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SolutionSection from '@/components/sections/SolutionSection'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import FAQSchema from '@/components/schema/FAQSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Personal Coaching online für Männer ab 30 | FS-Performance',
  description:
    'Datenbasiertes Personal Coaching online — DNA-Analyse, Blutbild, individueller Plan. Ort spielt keine Rolle. Ergebnisse schon.',
  slug: 'personal-coaching-online',
})

const faqItems = [
  {
    question: 'Wie funktioniert Personal Coaching online?',
    answer:
      'Das Coaching läuft vollständig remote — Analyse, Planung und Begleitung per Video-Call. Die Blutanalyse wird über ein Partnerlabor mit Heimversand abgewickelt.',
  },
  {
    question: 'Wie viel Zeit muss ich pro Woche einplanen?',
    answer:
      'Der Zeitaufwand ist minimal — das Protokoll integriert sich in deinen Alltag. Kein stundenlanger Aufwand, sondern präzise Interventionen an den richtigen Stellen.',
  },
  {
    question: 'Wie lange dauert ein Coaching-Programm?',
    answer:
      'Das Basis-Programm läuft über 3 Monate. In dieser Zeit sehen wir messbare Veränderungen in Körperkomposition, Energie und Schlaf.',
  },
]

export default function PersonalCoachingOnlinePage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      <Hero
        label="Personal Coaching online"
        headline="Ort spielt keine Rolle. Ergebnisse schon."
        subheadline="Datenbasiertes Personal Coaching — komplett online."
        body="DNA-Analyse, Blutbild, individueller Plan. Das gesamte Coaching-Programm läuft remote — ohne Abstriche bei der Qualität oder Präzision."
        ctaLabel="Online Coaching anfragen"
      />

      <SolutionSection
        label="Das Programm"
        headline="Was das Online Coaching umfasst."
        steps={[
          {
            number: '01',
            headline: 'DNA & Blut',
            body: 'Heim-Testkit für Blutanalyse und DNA. Auswertung durch Fabian — wissenschaftlich, nicht algorithmisch.',
          },
          {
            number: '02',
            headline: 'Individueller Plan',
            body: 'Ernährung, Supplementierung, Schlafoptimierung und Training — alles abgestimmt auf deine biologischen Daten.',
          },
          {
            number: '03',
            headline: 'Laufende Begleitung',
            body: 'Bi-wöchentliche Check-ins, Anpassung des Protokolls bei Bedarf, direkte Erreichbarkeit.',
          },
        ]}
      />

      <Testimonials
        label="Ergebnisse"
        headline="Was Klienten berichten."
        items={[
          {
            quote: 'Platzhalter Testimonial 1.',
            name: 'Name',
            role: 'Unternehmer',
            result: 'Platzhalter Ergebnis',
          },
          {
            quote: 'Platzhalter Testimonial 2.',
            name: 'Name',
            role: 'Führungskraft',
            result: 'Platzhalter Ergebnis',
          },
          {
            quote: 'Platzhalter Testimonial 3.',
            name: 'Name',
            role: 'Manager',
            result: 'Platzhalter Ergebnis',
          },
        ]}
      />

      <FAQ
        label="Häufige Fragen"
        headline="Fragen zum Online Coaching."
        items={faqItems}
      />

      <CTASection
        label="Nächster Schritt"
        headline="Starte dein Online Coaching."
        body="Im kostenlosen Erstgespräch besprechen wir, ob das Programm zu deiner aktuellen Situation passt. Kein Druck, keine Verkaufsshow."
        ctaLabel="Kostenloses Erstgespräch buchen"
      />
    </>
  )
}
