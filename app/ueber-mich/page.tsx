import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import PersonSchema from '@/components/schema/PersonSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Über Fabian Schönle — Performance Coach & Chemiker | FS-Performance',
  description:
    'Fabian Schönle verbindet wissenschaftliche Präzision mit praktischer Umsetzung. Erfahre, wie sein Ansatz entstanden ist und für wen er gemacht ist.',
  slug: 'ueber-mich',
})

export default function UeberMichPage() {
  return (
    <>
      <PersonSchema />

      <Hero
        label="Über mich"
        headline="Wissenschaft trifft Praxis."
        body="Fabian Schönle ist Performance Coach mit PhD-Hintergrund in Chemie. Er spezialisiert sich auf metabolische Optimierung für Männer ab 30 — datenbasiert, individuell, ohne Hype."
        ctaLabel="Erstgespräch vereinbaren"
      />

      {/* TODO: Biografie-Sektion mit Foto */}
      {/* TODO: Methodik-Sektion */}
      {/* TODO: Ausbildung / Credentials */}

      <CTASection
        label="Zusammenarbeiten"
        headline="Klingt das nach dem richtigen Ansatz für dich?"
        body="Im Erstgespräch erkläre ich dir genau, wie die Zusammenarbeit aussieht und ob mein Ansatz zu deiner Situation passt."
      />
    </>
  )
}
