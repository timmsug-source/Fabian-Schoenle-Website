import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import OnlineHero from '@/components/sections/OnlineHero'
import ErgebnisStreifen from '@/components/ui/ErgebnisStreifen'
import LeistungenSection from '@/components/sections/LeistungenSection'
import ProgrammVorteile from '@/components/sections/ProgrammVorteile'
import OnlineStattStudio from '@/components/sections/OnlineStattStudio'
import OnlineFallstudien from '@/components/sections/OnlineFallstudien'
import CoachingAppSection from '@/components/sections/CoachingAppSection'
import VergleichSection from '@/components/sections/VergleichSection'
import ZeitaufwandKarte from '@/components/sections/ZeitaufwandKarte'
import Testimonials from '@/components/sections/Testimonials'
import KontaktSection from '@/components/sections/KontaktSection'
import SocialSection from '@/components/sections/SocialSection'
import UeberMichSection from '@/components/sections/UeberMichSection'
import { getSiteContent } from '@/lib/cms'
import FAQ from '@/components/sections/FAQ'
import FAQSchema from '@/components/schema/FAQSchema'

// CMS-Änderungen erscheinen automatisch (ISR, alle 60s) — die Über-mich-Sektion
// bezieht ihre Texte aus derselben Quelle wie die Startseite.
export const revalidate = 60

export const metadata: Metadata = buildMetadata({
  title: 'Personal Coaching online für Männer ab 30 | FS Performance Lab',
  description:
    'Datenbasiertes Personal Coaching online — DNA-Analyse, Blutbild, individueller Plan. Ort spielt keine Rolle. Ergebnisse schon.',
  slug: 'personal-coaching-online',
})

const faqItems = [
  {
    question: 'Wie funktioniert Personal Coaching online?',
    answer:
      'Wir starten mit einem Video-Call, in dem ich mir deine Ausgangslage ansehe. Das Blutbild läuft über ein Partnerlabor mit Heimversand, den DNA-Test bekommst du ebenfalls nach Hause — du musst dafür nirgends hin. Aus beidem baue ich deinen Plan, den du in der Coaching-App findest: Ernährung, Training, Schlaf und die Werte, die wir im Blick behalten. Danach läuft die Begleitung über wöchentliche Check-Ins und mein Video dazu. Alles, was vor Ort passieren würde, passiert hier per Call und App — bis auf den Händedruck.',
  },
  {
    question: 'Habe ich regelmäßigen Kontakt mit dir?',
    answer:
      'Ja. Jede Woche bekommst du ein persönliches Video von mir — kein Standardtext, sondern ein Rückblick auf deine Woche und was wir als Nächstes anpassen. Grundlage ist dein Check-In, den du vorher ausfüllst. Dazwischen erreichst du mich direkt in der App, wenn etwas nicht passt oder du eine Frage hast. Du wartest also nicht bis zum nächsten Termin, um etwas zu klären.',
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

export default async function PersonalCoachingOnlinePage() {
  const content = await getSiteContent()

  return (
    <>
      <FAQSchema items={faqItems} />

      <OnlineHero
        label="Online-Personal-Coaching"
        headline="Online-Personal-Coaching für Unternehmer,"
        headlineAccent="die keine Zeit fürs Studio haben."
        subheadline="Online-Personal-Coaching auf Basis deiner Blut- und DNA-Werte. In 4 Monaten zu stabiler Energie und durchschnittlich 12 kg weniger Körpergewicht, ohne Anfahrt und ohne feste Termine."
        ctaLabel="Performance-Analyse buchen"
        ctaNote="Kostenlos · 20 Minuten · online mit mir persönlich"
        imageSrc="/images/Fabian-Schoenle-Blick-Kamera.webp"
        imageAlt="Fabian Schönle — Performance Coach"
      />

      {/* Ergebnis-Streifen wie unter dem Hero von /abnehmcoaching, gleiche Breite */}
      <div style={{ background: '#060E1F' }}>
        <div className="max-w-7xl mx-auto">
          <ErgebnisStreifen />
        </div>
      </div>

      {/* Online statt Studio — ersetzt die frühere Problem-Sektion
          (OnlineProblemSection: drei Probleme und Video zur metabolischen
          Flexibilität). */}
      <OnlineStattStudio />

      {/* Vorherige Programm-Sektion — vorerst ausgeblendet, ersetzt durch
          LeistungenSection darunter. Zum Zurueckholen den Kommentar aufloesen,
          die LeistungenSection entfernen und den Import von SolutionSection
          wieder ergaenzen (wurde entfernt, weil ungenutzte Importe den Build
          abbrechen).

      <SolutionSection
        label="Das Programm"
        headline="Was das Online Coaching umfasst."
        kartenGrid
        steps={[
          {
            icon: 'blut',
            headline: 'Blutanalyse',
            body:
              'Wir schauen auf deine aktuelle Versorgung: Hormonstatus, Mikronährstoffe und Entzündungsmarker.',
          },
          {
            icon: 'dna',
            headline: 'DNA-Analyse',
            body:
              'Wir schauen auf deine genetische Ausgangslage und sehen dadurch, welche Veranlagung dein Körper für Stress, Training und bestimmte Ernährungsmuster hat.',
          },
          {
            icon: 'ernaehrung',
            headline: 'Ernährung',
            body:
              'Kein Verbotskatalog, kein Verzicht – sondern ein Ernährungsansatz, der zu deinem Stoffwechsel, deinem Alltag und deinen Zielen passt.',
          },
          {
            icon: 'training',
            headline: 'Training',
            body:
              'So aufgebaut, dass es dir Spaß macht und jederzeit an deine aktuelle Lebenssituation und Zielsetzung angepasst ist.',
          },
          {
            icon: 'schlaf',
            headline: 'Schlaf & Regeneration',
            body:
              'Schlechter Schlaf sabotiert alles andere. Deshalb schauen wir genau hin und beheben systematisch, was deine Regeneration aktuell blockiert.',
          },
          {
            icon: 'tracking',
            headline: 'Tracking & Anpassung',
            body:
              'Keine Excel-Listen, kein nerviges Tracken – sondern alles kompakt in einer App, über die wir die für dich wichtigsten Parameter im Blick behalten.',
          },
        ]}
      />

      */}

      <LeistungenSection
        label="Das Programm"
        headline="Was im Online Coaching konkret enthalten ist."
        imageSrc="/images/FS-Bild-Zitatsektion.webp"
        imageAlt="Fabian Schönle — Performance Coach"
        name="Fabian Schönle"
        role="M.Sc. Chemie · Triathlet · 100 % online"
        nachInhalt={<ProgrammVorteile />}
        items={[
          {
            headline: 'Datenbasierte Anamnese',
            body: 'Umfassende Analyse deiner aktuellen Situation mittels Daten und Blutwerten.',
          },
          {
            headline: 'Individuelle Ernährungsstrategie',
            body: 'Keine Standard-Diät, sondern eine individuelle Ernährung, die zu deinem Terminkalender und deinen Bedürfnissen passt.',
          },
          {
            headline: 'Ganzheitlicher Ansatz',
            body: 'Neben Ernährung schauen wir bei Bedarf auch auf Themen wie Training, Schlaf und Stressmanagement, um alle Bereiche von Gesundheit abzudecken.',
          },
          {
            headline: 'Persönlicher Support',
            body: 'Dein Körper und Alltag ändern sich – deshalb passen wir deine Strategie an, wann immer es nötig ist, sodass du dich mit deiner Ernährung immer wohlfühlst.',
          },
        ]}
      />

      {/* Ergebnisse: eigene Karten für diese Seite (Foto, Gewicht, wie das
          Coaching online lief, Gewichtsverlauf). Die Videos öffnen sich über
          den Knopf auf dem Foto. */}
      <OnlineFallstudien
        label="Echte Ergebnisse"
        headline="Zwei Unternehmer mit vollem Kalender,"
        headlineAccent="komplett online begleitet"
        faelle={[
          {
            name: 'Robert',
            rolle: '42 Jahre · Projektleiter, nebenbei Finanzberatung · spielt Squash',
            foto: '/images/Robert-Bild.webp',
            fotoPosition: '45% center',
            linkedin: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
            video: '/videos/Robert_Testimonial_final.mp4',
            von: 103,
            nach: 87,
            zeitraum: 'nach 5 Monaten',
            zitat: {
              text: 'Unter der Woche auf Montage und im Hotel.',
              akzent: 'Das Coaching lief trotzdem komplett über App und Video.',
            },
            vorher: [
              'Der Tag fand im Auto, im Büro oder auf Montage statt',
              'Kaffee, belegte Brötchen und Süßes vom Bäcker',
              'Müde zur Arbeit, Konzentration ließ nach',
            ],
            nachher: [
              '16 kg weniger in 5 Monaten',
              'Volle Leistungsfähigkeit im Job zurück',
              'Umgesetzt trotz Montage und Überstunden',
            ],
          },
          {
            name: 'Richard',
            rolle: '36 Jahre · Gründer · Familienvater von zwei Kindern',
            foto: '/images/Richard-Bild.webp',
            fotoPosition: '64% center',
            linkedin: 'https://www.linkedin.com/in/richard-mueller/',
            video: '/videos/Richard_Testimonial_kurz.mp4',
            von: 106,
            nach: 92.5,
            zeitraum: 'nach 10 Wochen',
            zitat: {
              akzent: 'Richard und ich haben uns nie persönlich getroffen.',
              text: 'Alles lief online, neben Gründung und Familie.',
              akzentZuerst: true,
            },
            vorher: [
              'Ab 20 Uhr keine Energie mehr, Familienzeit fiel aus',
              'Ausgeprägtes Mittagstief',
              'Im eigenen Körper nicht mehr wohlgefühlt',
            ],
            nachher: [
              '13,5 kg weniger in 10 Wochen',
              'Volle Energie von früh bis abends',
              'Die Ernährung der ganzen Familie hat sich mitverändert',
            ],
          },
        ]}
      />

      {/* Vergleich: gleiche Sektion wie auf der Startseite (Personaltrainer,
          Gruppencoaching, AI-Coach), Texte aus denselben CMS-Feldern */}
      <VergleichSection content={content} />

      <CoachingAppSection
        label="Deine Begleitung"
        headline="Was das Coaching bei mir"
        headlineAccent="ausmacht."
        intro="Personal Coaching online heißt bei mir nicht, dass du zwischen unseren Gesprächen allein läufst. In der App liegt alles an einer Stelle — und ich sehe, was bei dir passiert, ohne dass du Listen führen musst."
        stapeln
        bloecke={[
          {
            grafik: 'app',
            icon: 'rezept',
            titel: 'Dein Tag ohne Zettelwirtschaft',
            text: 'Mahlzeiten, Wasser und Gewicht an einer Stelle statt in drei Apps und einer Notiz. Die Rezepte passen zu deinen Werten und zu dem, was du realistisch kochst.',
            punkte: [
              'Eiweiß, Kohlenhydrate und Fett ohne Kopfrechnen',
              'Kein Abwiegen nach Vorschrift',
            ],
          },
          {
            grafik: 'verlauf',
            icon: 'waage',
            titel: 'Verlauf statt Momentaufnahme',
            text: 'Ein einzelner Wert auf der Waage sagt wenig. Wichtig ist die Richtung über mehrere Wochen. Dazu kommen kurze Check-ins zu Schlaf, Energie und Stress.',
            punkte: [
              'Muster werden sichtbar, bevor sie zum Problem werden',
              'Daten deiner Smartwatch fließen mit ein',
            ],
          },
          {
            grafik: 'trainingsplan',
            icon: 'training',
            titel: 'Trainingsplan mit Tracking',
            text: 'Deine Einheiten liegen in der App, samt Gewichten und Wiederholungen. Du siehst deinen Fortschritt, und ich sehe, ob der Plan noch zu deiner Woche passt.',
            punkte: [
              'Kurze Einheiten, zu Hause, im Hotel oder im Studio',
              'Anpassung, sobald sich dein Alltag ändert',
            ],
          },
          {
            src: '/images/FS-Ablauf-Mockup-Neu.webp',
            alt: 'Fabian Schönle im Video-Call — so sieht dein Rückblick per Video aus',
            breite: 1536,
            hoehe: 1024,
            quer: true,
            icon: 'video',
            titel: 'Regelmäßiges Video-Feedback',
            text: 'Wann immer es nötig ist, bekommst du einen persönlichen Rückblick per Video: was gut lief, wo es gehakt hat und was wir als Nächstes anpassen.',
            punkte: ['Dazwischen erreichst du mich jederzeit im Chat'],
          },
        ]}
        nachRahmen={<ZeitaufwandKarte />}
      />

      <Testimonials
        label="Rezensionen"
        headline="Was Kunden über die Zusammenarbeit mit mir schreiben."
        bewertungsGrid
      />

      {/* Über mich: gleiche Sektion und dieselben CMS-Texte wie auf der Startseite */}
      {/* Knopftext auf dieser Seite fest: Hier heißen alle Knöpfe
          „Performance-Analyse buchen“, im CMS steht für die Startseite
          „… sichern“. */}
      <UeberMichSection content={{ ...content, uebermich_cta_button: 'Performance-Analyse buchen' }} />

      {/* Ablauf & Kontakt: gleiche Sektion wie auf der Startseite und in Frankfurt */}
      <KontaktSection
        label="Personal Coaching online starten"
        title="Finde heraus, woran es bei dir gerade hakt."
        intro1="Kein Verkaufsgespräch. Kein Vertrag. Nur 20 Minuten, in denen wir gemeinsam anschauen, warum dein Körper nicht mehr so mitmacht wie früher."
        intro2="Der erste Schritt ist eine kostenlose Analyse deiner Ausgangslage. Du bekommst danach Klarheit darüber, welche Hebel bei dir wirklich zählen — und wie eine Begleitung aussieht, die komplett remote funktioniert." />

      <SocialSection />

      <FAQ
        label="Häufige Fragen"
        headline="Fragen zum Online Coaching."
        items={faqItems}
      />

    </>
  )
}
