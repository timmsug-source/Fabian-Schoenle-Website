import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import LocalHero from '@/components/sections/LocalHero'
import ReviewsSection from '@/components/sections/ReviewsSection'
import ProblemSection from '@/components/sections/ProblemSection'
import LoesungsSection from '@/components/sections/LoesungsSection'
import LeistungenSection from '@/components/sections/LeistungenSection'
import Testimonials from '@/components/sections/Testimonials'
import ComparisonTable from '@/components/sections/ComparisonTable'
import CTASection from '@/components/sections/CTASection'
import FAQ from '@/components/sections/FAQ'
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
    question: 'Wie läuft die Zusammenarbeit ab?',
    answer:
      'Nach dem kostenlosen Erstgespräch folgt die Blut- und DNA-Analyse. Auf Basis der Auswertung erhältst du dein individuelles Protokoll — das wir laufend an deine Werte anpassen.',
  },
  {
    question: 'Was kostet die Ernährungsberatung in Karlsruhe?',
    answer:
      'Die Zusammenarbeit ist individuell und richtet sich nach Umfang und Zieldefinition. Den konkreten Rahmen besprechen wir transparent im kostenlosen Erstgespräch — dort erfährst du genau, was auf dich zukommt.',
  },
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer:
      'Die meisten Klienten berichten innerhalb von 4–6 Wochen von stabilerer Energie und besserem Schlaf. Die Körperkomposition verändert sich messbar nach 8–12 Wochen.',
  },
  {
    question: 'Für wen ist die Ernährungsberatung gedacht?',
    answer:
      'Für Männer ab 30 mit hoher beruflicher Belastung, die trotz wenig Zeit körperlich und mental auf Maximum performen wollen — nicht für schnelle Diäten.',
  },
]

const testimonials = [
  {
    result: '−14 kg in 5 Monaten',
    quote:
      'Nach der Blutanalyse war plötzlich klar, warum ich nachmittags immer eingebrochen bin. Heute habe ich stabile Energie ohne Koffein — und einen klaren Kopf bis in den Abend.',
    name: 'Robert',
    role: 'Geschäftsführer, 42',
  },
  {
    result: 'Muskelaufbau & −11 kg',
    quote:
      'Ich habe 18 Monate ohne Fortschritt trainiert. Erst als wir meine Werte kannten, hat mein Körper wieder reagiert — sichtbarer Muskelaufbau und endlich tiefer Schlaf.',
    name: 'Axel',
    role: 'Selbstständiger Unternehmer, 38',
  },
  {
    result: '−11 kg Körperfett in 10 Wochen',
    quote:
      'Kein Diätplan, den ich schon dreimal hatte. Zum ersten Mal ein System, das zu meinem Alltag als Unternehmer passt — und das messbar funktioniert.',
    name: 'Markus R.',
    role: 'Unternehmer',
  },
]

export default function ErnaehrungsberatungKarlsruhePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema items={faqItems} />

      {/* 1 — Hero: Text links, Foto rechts */}
      <LocalHero
        label="Ernährungsberatung Karlsruhe"
        headline="Ernährungsberatung in Karlsruhe für"
        headlineAccent="Selbstständige & Unternehmer"
        subheadline="Datenbasiert wieder in Bestform — ohne Verzicht und ohne das Gefühl, auf Diät zu sein."
        ctaLabel="Kostenloses Erstgespräch buchen"
        imageSrc="/images/IMG_1550-hero.jpg"
        imageAlt="Fabian Schönle — Performance Coach aus Karlsruhe"
        statNumber="200+"
        statText="Selbstständige & Unternehmer bereits erfolgreich begleitet"
      />

      {/* Rezensionen */}
      <ReviewsSection />

      {/* 2 — Das Problem mit klassischer Ernährungsberatung */}
      <ProblemSection
        label="Das Problem"
        headline="Warum die meisten Ernährungspläne"
        headlineAccent="scheitern."
        intro="Es liegt nicht an deiner Disziplin. Es liegt daran, dass generische Pläne deine individuelle Biologie ignorieren — und damit raten müssen, was dein Körper wirklich braucht."
        points={[
          {
            wrong: 'Allgemein',
            right: 'individuell',
            body: 'Standard-Empfehlungen basieren auf Durchschnittswerten. Dein Stoffwechsel ist aber keiner.',
          },
          {
            wrong: 'Symptome',
            right: 'Ursachen',
            body: 'Die meisten Beratungen behandeln, was du spürst — nicht, was deine Blutwerte tatsächlich zeigen.',
          },
          {
            wrong: 'Willenskraft',
            right: 'System',
            body: 'Wer nur auf Verzicht setzt, kämpft gegen den eigenen Körper. Ein eingestelltes System braucht keinen Kampf.',
          },
        ]}
      />

      {/* 3 — Ablauf/Methode: gleiche Sektion wie auf der Startseite */}
      <LoesungsSection />

      {/* 4 — Was ich konkret bekomme */}
      <LeistungenSection
        label="Was du bekommst"
        headline="Was in der Zusammenarbeit konkret enthalten ist."
        intro="Keine ellenlange Leistungsliste — die Punkte, die den Unterschied machen."
        items={[
          {
            headline: 'Individueller Ernährungsplan auf Basis deiner Blutwerte',
            body: 'Kein Musterplan. Ein Protokoll, das aus deinen realen Laborwerten abgeleitet ist.',
          },
          {
            headline: 'Umfassende Blut- und DNA-Analyse',
            body: 'Weit über den Standard hinaus — die Datengrundlage für jede Entscheidung.',
          },
          {
            headline: 'Konkrete Nährstoff- und Supplement-Strategie',
            body: 'Nur was dein Körper messbar braucht. Kein Rätselraten, keine pauschalen Verbotslisten.',
          },
          {
            headline: 'Laufende Anpassung statt starrem Plan',
            body: 'Dein System wird nachjustiert, sobald sich deine Werte verändern.',
          },
          {
            headline: 'Direkter Draht zu mir',
            body: 'Persönliche Betreuung statt einer App, die dich allein lässt.',
          },
        ]}
      />

      {/* 5 — Ergebnisse von Kunden aus der Region */}
      <Testimonials
        label="Ergebnisse"
        headline="Ergebnisse von Männern wie dir."
        items={testimonials}
      />

      {/* 6 — Warum du, nicht die Beratung von nebenan */}
      <ComparisonTable
        label="Der Unterschied"
        headline="Warum FS-Performance — und nicht die Beratung von nebenan."
        rows={[
          { criterion: 'Grundlage', standard: 'Schätzungen & Fragebögen', fsPerformance: 'Blutwerte & DNA-Analyse' },
          { criterion: 'Plan', standard: 'Ein Plan für alle', fsPerformance: 'Ein Protokoll für deine Biologie' },
          { criterion: 'Fokus', standard: 'Kurzfristige Diät', fsPerformance: 'Dauerhaft eingestelltes System' },
          { criterion: 'Betreuung', standard: 'Standard-Vorlagen', fsPerformance: 'Persönlich von mir' },
          { criterion: 'Ziel', standard: 'Zahl auf der Waage', fsPerformance: 'Körperkomposition & Energie' },
        ]}
      />

      {/* 7 — CTA: Erste Analyse buchen */}
      <CTASection
        label="Nächster Schritt"
        headline="Starte mit einer kostenlosen Erstanalyse."
        body="Im kostenlosen Erstgespräch schauen wir uns deine Situation an — und ich zeige dir, was dein Körper wirklich braucht. Unverbindlich und ohne Druck."
        ctaLabel="Kostenloses Erstgespräch buchen"
      />

      {/* 8 — FAQ: lokal relevant */}
      <FAQ
        label="Häufige Fragen"
        headline="Fragen zur Ernährungsberatung in Karlsruhe."
        items={faqItems}
      />
    </>
  )
}
