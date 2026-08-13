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
        statNumber="40+"
        statText="Selbstständige & Unternehmer bereits erfolgreich begleitet"
      />

      {/* Rezensionen */}
      <ReviewsSection />

      {/* 2 — Das Problem mit klassischer Ernährungsberatung */}
      <ProblemSection
        label="Das Problem"
        headline="Warum die meisten Ernährungspläne"
        headlineAccent="scheitern."
        intro="Es liegt nicht an deiner Disziplin. Es liegt daran, dass generische Pläne deine Hormone ignorieren – und dein Hormonhaushalt entscheidet mit, was Training und Ernährung bei dir überhaupt bewirken können."
        points={[
          {
            wrong: 'Kalorien',
            right: 'Hormone',
            body: 'Die meisten Pläne rechnen nur mit Kalorien. Aber dein Hormonstatus entscheidet mit, wie dein Körper mit diesen Kalorien umgeht. Wenn Testosteron, Cortisol und Schilddrüsenwerte nicht stimmen, kannst du das Defizit noch so sauber einhalten – der Fortschritt bleibt trotzdem aus.',
          },
          {
            wrong: 'Symptome',
            right: 'Ursachen',
            body: 'Wenig Antrieb, hartnäckiges Bauchfett, kaum Muskelaufbau trotz Training: Das sind Symptome. Die meisten Beratungen schrauben genau daran herum. Was deine Blutwerte über die Ursache sagen, sieht sich niemand an.',
          },
          {
            wrong: 'Härter',
            right: 'Klüger',
            body: 'Mehr Training und weniger essen klingt nach der logischen Antwort. Für dein Hormonsystem ist es zusätzlicher Stress – und Stress wirkt sich langfristig negativ auf deine Hormone aus. Du arbeitest dann gegen genau den Mechanismus, den du eigentlich brauchst.',
          },
        ]}
        videoId="_ZjzTAVAj8Q"
        videoPosterSrc="/images/video-thumb-_ZjzTAVAj8Q.jpg"
        videoTitle="Testosteron: Wie es Fokus und Bauchfett steuert — Video von Fabian Schönle"
        videoHeadline="Was Testosteron mit deinem Fokus zu tun hat."
        videoBody="Testosteron beeinflusst mehr als Muskelaufbau: Antrieb, Konzentration, Schlaf und die Fettverteilung hängen mit daran. Ich erkläre dir, welche Rolle es wirklich spielt – und welche Hebel du selbst in der Hand hast."
        videoPoints={[
          'Welche Faktoren im Alltag deinen Hormonhaushalt beeinflussen',
          'Was deine Blut- und DNA-Werte darüber verraten',
          'Wie daraus eine Strategie wird, die zu deinem Alltag passt',
        ]}
      />

      {/* 3 — Dein Ansatz: Ernährung trifft Biologie */}
      <SolutionSection
        label="Dein Ansatz"
        headline="Ernährung trifft Biologie."
        intro="So sieht Ernährungsberatung in Karlsruhe bei mir aus: erst messen, dann planen. Deine Werte geben die Richtung vor – auch dann, wenn sie unauffällig sind."
        karten
        zitat="Ich rate nicht, was dein Körper braucht. Ich messe es – und stelle danach die drei bis vier Hebel ein, die bei dir wirklich etwas verändern."
        zitatAutor="Fabian Schönle"
        zitatRolle="Performance Coach · M.Sc. Chemie"
        hintergrundBild="/images/Hintergrund-Ergebnisse.webp"
        steps={[
          {
            number: '01',
            headline: 'Blut- und DNA-Analyse',
            body: 'Bevor irgendein Plan entsteht, schauen wir in deine Werte: Hormonstatus, Mikronährstoffe, Entzündungsmarker – und deine genetische Veranlagung für Kohlenhydrate, Fette und Stress. Die Analyse läuft über ein professionelles Labor, ich bin kein Arzt und gebe sie deshalb dorthin, wo sie hingehört. Du musst dich um nichts kümmern.',
          },
          {
            number: '02',
            headline: 'Auswertung und Priorisierung',
            body: 'Aus über 50 Markern filtere ich die drei bis vier Hebel heraus, die bei dir tatsächlich zählen. Manchmal sind das die Hormone. Manchmal ist es der Schlaf, ein Nährstoffmangel oder schlicht die Verteilung deiner Mahlzeiten. Das entscheiden die Daten – nicht eine Vermutung.',
          },
          {
            number: '03',
            headline: 'Plan statt Präparat',
            body: 'Am Ende steht kein Katalog mit Streichlisten und kein Rezept. Sondern eine datenbasierte Strategie aus Ernährung, Bewegung und Regeneration, die sich in deinen Arbeitstag einfügt – und die angepasst wird, sobald sich deine Werte verändern.',
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
            rolle: '42 Jahre · Projektleiter, nebenbei Finanzberatung · spielt Squash',
            linkedin: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
            badgeVon: '98',
            badgeNach: '84 kg',
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
            rolle: '36 Jahre · Gründer · Familienvater von zwei Kindern',
            linkedin: 'https://www.linkedin.com/in/richard-mueller/',
            badgeVon: '106',
            badgeNach: '92,5 kg',
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
        imageSrc="/images/FS-Bild-Hemd-blau.webp"
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
      <VergleichSection
        intro="Du bekommst keinen Standardplan aus der Schublade – sondern eine Strategie, die auf deinen eigenen Werten aufbaut."
        spalten={{
          generic: ['Klassische', 'Ernährungs-', 'beratung'],
          online: ['Ernährungs-', 'App'],
          selbst: ['Hausarzt /', 'Standard-', 'Check'],
        }}
        zeilen={[
          { feature: 'Individuelle DNA-/Bluttests',          fs: true, generic: false, online: false, selbst: false },
          { feature: 'Hormonstatus wird mitgemessen',        fs: true, generic: false, online: false, selbst: false },
          { feature: 'Über 50 Marker statt Standardwerte',   fs: true, generic: false, online: false, selbst: false },
          { feature: 'Datenbasierte Strategie',              fs: true, generic: false, online: false, selbst: false },
          { feature: 'Individuelle Ernährungsstrategie',     fs: true, generic: true,  online: false, selbst: false },
          { feature: 'Kontinuierliche Strategieoptimierung', fs: true, generic: false, online: true,  selbst: false },
          { feature: 'Persönlicher Ansprechpartner',         fs: true, generic: true,  online: false, selbst: true  },
          { feature: '24/7 Chatsupport',                     fs: true, generic: false, online: false, selbst: false },
        ]}
      />

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
