import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import LocalHero from '@/components/sections/LocalHero'
import ReviewsSection from '@/components/sections/ReviewsSection'
import ProblemSection from '@/components/sections/ProblemSection'
import LeistungenSection from '@/components/sections/LeistungenSection'
import SolutionSection from '@/components/sections/SolutionSection'
import VideoTestimonials from '@/components/sections/VideoTestimonials'
import CTABanner from '@/components/sections/CTABanner'
import ErgebnisKartenSection from '@/components/sections/ErgebnisKartenSection'
import VergleichSection from '@/components/sections/VergleichSection'
import FAQSection from '@/components/sections/FAQSection'
import KontaktSection from '@/components/sections/KontaktSection'
import SocialSection from '@/components/sections/SocialSection'
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema'
import FAQSchema from '@/components/schema/FAQSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Ernährungsberatung Karlsruhe — datenbasiert & individuell | FS Performance Lab',
  description:
    'Ernährungsberatung in Karlsruhe basierend auf deinen Blutwerten — kein generischer Diätplan, sondern ein System das zu deiner Biologie passt.',
  slug: 'ernaehrungsberatung-karlsruhe',
})

const faqItems = [
  {
    question: 'Findet die Ernährungsberatung in Karlsruhe vor Ort statt?',
    answer:
      'Die Zusammenarbeit läuft komplett online — Erstgespräch, Auswertung und laufende Betreuung. Für dich heißt das: kein Anfahrtsweg und kein fester Termin vor Ort. Weil der Ansatz auf deinen Blut- und DNA-Werten basiert, spielt der Ort ohnehin keine Rolle.',
  },
  {
    question: 'Übernimmt die Krankenkasse die Kosten?',
    answer:
      'Nein. Ich habe keine Kassenzulassung, die Kosten werden also weder von der AOK noch von einer anderen gesetzlichen Kasse erstattet. Der Grund: Bezuschusst werden nur standardisierte Beratungskonzepte nach § 20 SGB V. Mein Ansatz basiert auf deinen individuellen Blut- und DNA-Werten und passt bewusst nicht in dieses Raster. Wenn dir eine Abrechnung über die Kasse wichtig ist, bist du bei einer zertifizierten Ernährungsfachkraft mit Kassenzulassung besser aufgehoben.',
  },
  {
    question: 'Wie unterscheidet sich datenbasierte Ernährungsberatung von klassischer?',
    answer:
      'Klassische Beratung gibt allgemeine Empfehlungen. Datenbasierte Beratung wertet dein individuelles Blutbild aus und leitet daraus ab, was dein Körper spezifisch braucht.',
  },
  {
    question: 'Welche Qualifikation bringst du mit?',
    answer:
      'Ich habe Chemie studiert und einen M.Sc. in Chemie. Daraus kommt das Handwerk, das meine Arbeit trägt: komplexe Systeme analysieren und Laborwerte richtig lesen. Dazu über 200 begleitete Klienten und die eigene Praxis als Triathlet. Wichtig zur Einordnung: Ich bin kein Diätassistent und keine Ernährungsfachkraft mit Kassenzulassung, sondern auf datenbasierte Optimierung für Selbstständige und Unternehmer spezialisiert.',
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
  {
    question: 'Wie bereite ich mich auf das Erstgespräch vor?',
    answer:
      'Gar nicht — du musst nichts ausfüllen und nichts mitbringen. Wenn du aktuelle Blutwerte zur Hand hast, kannst du sie gern bereithalten, nötig ist das aber nicht. Hilfreich ist nur, wenn du dir vorher kurz überlegst, was dich am meisten stört: Energie, Gewicht, Schlaf oder Konzentration. Alles Weitere klären wir in den 20 Minuten gemeinsam.',
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
        subheadline="Datenbasiert wieder in Bestform – auf Basis deiner Blut- und DNA-Werte. Ohne Verbotskatalog und ohne das Gefühl, auf Diät zu sein."
        ctaLabel="Performance Analyse sichern"
        ctaNote="Call mit mir persönlich · 20 Minuten · unverbindlich"
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
        intro="Es liegt nicht an deiner Disziplin. Es liegt daran, dass generische Pläne deine individuelle Biologie ignorieren – und damit raten müssen, was dein Körper wirklich braucht."
        points={[
          {
            wrong: 'Durchschnitt',
            right: 'Individuell',
            body: 'Standard-Empfehlungen basieren auf Mittelwerten aus großen Gruppen. Dein Stoffwechsel ist aber kein Mittelwert. Was bei deinem Kollegen funktioniert, kann bei dir genau der falsche Hebel sein – ohne dass du je erfährst, warum.',
          },
          {
            wrong: 'Symptome',
            right: 'Ursachen',
            body: 'Die meisten Beratungen arbeiten mit dem, was du spürst: Müdigkeit, Heißhunger, kein Fortschritt. Was deine Blutwerte tatsächlich zeigen, sieht sich niemand an. Also wird am Symptom geschraubt, während die Ursache bleibt.',
          },
          {
            wrong: 'Willenskraft',
            right: 'System',
            body: 'Wer nur auf Verzicht setzt, kämpft gegen den eigenen Körper. Das hält ein paar Wochen, dann kommt der Jo-Jo-Effekt – und mit ihm die Enttäuschung über den nächsten gescheiterten Versuch. Ein richtig eingestelltes System braucht diesen Kampf nicht.',
          },
        ]}
        videoId="8EiIoNZQ42A"
        videoPosterSrc="/images/video-thumb-8EiIoNZQ42A.jpg"
        videoTitle="Fabian Schönle — Ernährungsberatung Karlsruhe"
        videoHeadline="Wie es stattdessen funktioniert."
        videoBody="Ich erkläre dir, warum Diäten immer wieder am selben Punkt scheitern – und was du stattdessen brauchst. Hier erfährst du, was hinter dem datenbasierten Ansatz steckt."
        videoPoints={[
          'Warum radikale Ansätze zwangsläufig im Jo-Jo-Effekt enden',
          'Was deine Blut- und DNA-Werte über deinen Stoffwechsel verraten',
          'Wie daraus eine Strategie wird, die zu deinem Alltag passt',
        ]}
      />

      {/* 3 — Dein Ansatz: Ernährung trifft Biologie */}
      <SolutionSection
        label="Dein Ansatz"
        headline="Ernährung trifft Biologie."
        intro="So sieht Ernährungsberatung in Karlsruhe bei mir aus: erst messen, dann planen. Deine Werte geben die Richtung vor."
        karten
        zitat="Ich rate nicht, was dein Körper braucht. Ich messe es – und stelle danach die drei bis vier Hebel ein, die bei dir wirklich etwas verändern."
        zitatAutor="Fabian Schönle"
        zitatRolle="Performance Coach · M.Sc. Chemie"
        hintergrundBild="/images/Hintergrund-Ergebnisse.webp"
        steps={[
          {
            number: '01',
            headline: 'Blutanalyse zuerst',
            body: 'Bevor irgendein Plan entsteht, schauen wir in deine Werte: Hormonstatus, Mikronährstoffe, Entzündungsmarker. Erst danach wird entschieden – nicht vorher geraten.',
          },
          {
            number: '02',
            headline: 'DNA als Grundlage',
            body: 'Deine Genetik bestimmt, wie dein Körper auf Kohlenhydrate, Fette und Stress reagiert. Daraus ergibt sich, welche Nährstoffe du tatsächlich brauchst – und in welcher Menge.',
          },
          {
            number: '03',
            headline: 'Plan statt Verbotsliste',
            body: 'Am Ende steht kein Katalog mit Streichlisten, sondern eine datenbasierte Strategie für deine Biologie, die sich in deinen Arbeitstag einfügt.',
          },
        ]}
      />

      {/* 4 — Video-Testimonials im Hochformat */}
      <VideoTestimonials
        label="Echte Ergebnisse"
        headline="Zwei Selbstständige, die ihre"
        headlineAccent="Energie zurückhaben."
        intro="Kein Skript, keine Werbeaussagen. Beide hatten volle Kalender und wenig Spielraum – und trotzdem funktioniert hat, was zu ihrem Alltag passt."
        videos={[
          {
            src: '/videos/Robert_Testimonial_final.mp4',
            name: 'Robert',
            rolle: 'Geschäftsführer, 42',
            badgeVon: '98',
            badgeNach: '84 kg',
            zitat:
              'Nach der Blutanalyse war plötzlich klar, warum ich nachmittags immer eingebrochen bin. Heute habe ich stabile Energie ohne Koffein — und einen klaren Kopf bis in den Abend.',
            vorher: [
              '14 kg zugenommen, Bauchfett trotz Sport',
              'Permanent erschöpft trotz 7 Stunden Schlaf',
              'Konzentration bricht nachmittags komplett ein',
            ],
            nachher: [
              '−14 kg Körpergewicht in 5 Monaten',
              'Stabile Energie ohne Koffein-Spitzen',
              'Klarer Kopf bis in den Abend',
            ],
          },
          {
            src: '/videos/Richard_Testimonial_kurz.mp4',
            name: 'Richard',
            rolle: 'Gründer',
            badgeVon: '106',
            badgeNach: '92,5 kg',
            zitat: 'Innerhalb von 10 Wochen 13,5 kg abgenommen',
            vorher: [
              'Ab 20 Uhr war die Energie komplett weg — Familienzeit fiel dadurch aus',
              'Ausgeprägtes Mittagstief, Energielevel den ganzen Tag niedrig',
              'Hohe mentale Belastung durch die Gründungsphase, im eigenen Körper nicht mehr wohlgefühlt',
            ],
            nachher: [
              '13,5 kg weniger in 10 Wochen — von 106 auf 92,5 kg',
              'Volle Energie von früh bis abends, Mittagstief verschwunden',
              'Umsetzbar trotz Gründungsphase und Familie',
              'Die Ernährung der ganzen Familie hat sich mitverändert',
            ],
          },
        ]}
      />

      {/* 5 — Was ich konkret bekomme */}
      <LeistungenSection
        label="Was du bekommst"
        headline="Was in der Zusammenarbeit konkret enthalten ist."
        intro="Keine ellenlange Leistungsliste – sondern genau die Punkte, die den Unterschied machen."
        imageSrc="/images/Fabian-Schoenle-Blick-Kamera.webp"
        imageAlt="Fabian Schönle — Performance Coach aus Karlsruhe"
        name="Fabian Schönle"
        role="M.Sc. Chemie · Triathlet · Karlsruhe"
        items={[
          {
            headline: 'Umfassende Blut- und DNA-Analyse',
            body: 'Über 50 Marker, weit über den Standard hinaus: Hormonstatus, Mikronährstoffe, Entzündungswerte und deine genetische Veranlagung. Danach reden wir nicht mehr über Durchschnittswerte, sondern über deinen Körper.',
          },
          {
            headline: 'Individueller Ernährungsplan auf Basis deiner Werte',
            body: 'Kein Musterplan aus der Schublade. Deine Strategie wird aus den realen Laborwerten abgeleitet – so arbeiten wir an der Ursache statt am Symptom. Und sie passt zu deinem Terminkalender, nicht umgekehrt.',
          },
          {
            headline: 'Konkrete Nährstoff- und Supplement-Strategie',
            body: 'Nur das, was dein Körper messbar braucht. Kein Verbotskatalog, keine pauschalen Streichlisten. Ein richtig eingestelltes System kommt ohne ständigen Kampf gegen dich selbst aus.',
          },
          {
            headline: 'Laufende Anpassung statt starrem Plan',
            body: 'Dein Körper verändert sich – deine Strategie auch. Sobald sich deine Werte bewegen, justieren wir nach. Alles kompakt in einer App, ohne nerviges Tracken.',
          },
          {
            headline: 'Direkter Draht zu mir',
            body: 'Persönliche Betreuung statt einer App, die dich allein lässt. Du schreibst mir, wenn etwas nicht passt – und bekommst eine Antwort von mir, nicht von einem Support-Team.',
          },
        ]}
      />

      {/* 6 — CTA-Streifen unter den Leistungen */}
      <CTABanner
        headline="Klingt nach dem, was du suchst?"
        body="Im kostenlosen Erstgespräch schauen wir uns deine Situation an — unverbindlich und ohne Druck."
        buttonLabel="Performance Analyse sichern"
        note="20 Minuten · persönlich mit mir"
      />

      {/* 7 — Ergebnisse: Karten mit Popup */}
      <ErgebnisKartenSection
        label="Ergebnisse"
        headline="Was sich verändert, wenn dein System"
        headlineAccent="richtig eingestellt ist."
        intro="Kein kurzfristiger Effekt auf der Waage. Sondern Veränderungen, die du im Alltag merkst – körperlich, mental und im Job."
        karten={[
          {
            label: 'Energie',
            icon: 'energie',
            teaser: 'Der Nachmittag ist kein Loch mehr, durch das du dich mit Kaffee schleppst.',
            punkte: [
              'Kein Nachmittagstief mehr',
              'Energie, die über den ganzen Tag stabil bleibt',
              'Schlaf, der dich wirklich erholt',
              'Abends noch Kraft für die Menschen, die dir wichtig sind',
            ],
          },
          {
            label: 'Körper',
            icon: 'koerper',
            teaser: 'Sichtbare Veränderung – und Werte, die sie bestätigen.',
            punkte: [
              'Durchschnittlich 12 kg weniger Körpergewicht – vor allem am Bauch',
              'Sichtbar mehr Muskeldefinition, ohne exzessives Training',
              'Blutwerte, die sich messbar verbessern',
              'Kürzere Regeneration nach Training, Stress und Infekten',
            ],
          },
          {
            label: 'Kopf',
            icon: 'kopf',
            teaser: 'Klarer denken, gelassener entscheiden – auch wenn der Tag voll ist.',
            punkte: [
              'Ein klarer Kopf, auch unter hoher Belastung',
              'Mehr Antrieb und Entscheidungsfreude',
              'Stabilere Stimmung über die Woche hinweg',
              'Das Gefühl, wieder Kontrolle über deinen Körper zu haben',
            ],
          },
        ]}
        bruecke1="Das sind keine Versprechen."
        bruecke2="Das sind echte Bewertungen."
        bewertungsGrid
      />

      {/* 8 — Vergleich: gleiche Sektion wie auf der Startseite */}
      <VergleichSection />

      {/* 9 — Ablauf & Kontakt: gleiche Sektion wie auf der Startseite */}
      <KontaktSection
        label="Ernährungsberatung in Karlsruhe starten"
        title="Finde heraus, was deine Ernährung gerade limitiert."
        intro1="Kein Verkaufsgespräch. Kein Vertrag. Nur 20 Minuten, in denen wir gemeinsam anschauen, warum deine bisherigen Ernährungsansätze nicht gehalten haben."
        intro2="Der erste Schritt ist eine kostenlose Analyse deiner Ausgangslage. Du bekommst danach Klarheit darüber, welche Hebel bei dir wirklich zählen — und wie eine Ernährung aussieht, die zu deinem Arbeitstag passt." />

      {/* 10 — Socials: gleiche Sektion wie auf der Startseite */}
      <SocialSection />

      {/* 11 — FAQ: lokale Fragen im Design der Startseite */}
      <FAQSection
        label="Häufige Fragen"
        title1="Fragen zur Ernährungsberatung"
        title2="in Karlsruhe"
        items={faqItems.map((f) => ({ frage: f.question, antwort: f.answer }))}
      />
    </>
  )
}
