import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import OnlineHero from '@/components/sections/OnlineHero'
import LeistungenSection from '@/components/sections/LeistungenSection'
import OnlineProblemSection from '@/components/sections/OnlineProblemSection'
import VideoTestimonials from '@/components/sections/VideoTestimonials'
import CoachingAppSection from '@/components/sections/CoachingAppSection'
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
        label="Personal Coaching online"
        headline1="Mehr Klarheit."
        headline2="Mehr Energie."
        headlineAccent="Messbare Ergebnisse."
        subheadline="Datenbasiertes 1:1 Coaching für Selbstständige und Unternehmer — komplett online. DNA-Analyse, Blutbild und ein Plan, der zu deinem Alltag passt."
        ctaLabel="Performance Analyse buchen"
        imageSrc="/images/Fabian-Schoenle-Blick-Kamera.webp"
        imageAlt="Fabian Schönle — Performance Coach"
        features={[
          {
            icon: 'ziel',
            titel: 'Klarheit statt Raten',
            text: 'Über 50 Blut- und DNA-Marker zeigen, welche Hebel bei dir zählen.',
          },
          {
            icon: 'kurve',
            titel: 'Mehr Performance',
            text: 'Stabile Energie, besserer Schlaf, klarer Kopf über den ganzen Tag.',
          },
          {
            icon: 'diamant',
            titel: 'Nachhaltige Ergebnisse',
            text: 'Ein eingestelltes System, das bleibt — kein kurzfristiger Effekt.',
          },
        ]}
        zitat="Dein Erfolg ist nur so stabil wie dein System. Ich helfe dir, es"
        zitatAkzent="richtig einzustellen."
        trust={[
          { icon: 'monitor', titel: '100 % online', text: 'Flexibel & ortsunabhängig' },
          { icon: 'person', titel: '1:1 Coaching', text: 'Individuell & auf Augenhöhe' },
          { icon: 'schloss', titel: 'Vertraulich', text: 'Deine Daten bleiben deine' },
        ]}
      />

      <OnlineProblemSection
        grafik="menschen"
        label="Häufige Probleme"
        headline="Warum Personal Coaching online"
        headlineAccent="meistens nicht funktioniert."
        intro="Online zu arbeiten ist kein Nachteil — schlecht gemachtes Online-Coaching schon. Das sind die drei Punkte, an denen es in der Regel scheitert."
        zitat="Die meisten Online-Coachings können gar nicht individuell auf dich eingehen — ihnen fehlen schlicht die Daten dafür."
        probleme={[
          {
            titel: 'Ein Plan von der Stange',
            text: 'Dasselbe PDF für jeden, unabhängig davon, wie dein Körper arbeitet und wie dein Alltag aussieht. Was bei einem funktioniert, geht beim nächsten ins Leere.',
          },
          {
            titel: 'Niemand, der wirklich hinschaut',
            text: 'Betreuung per App und Standardnachricht. Wenn es hakt, sitzt niemand auf der anderen Seite, der deine Situation kennt.',
          },
          {
            titel: 'Geraten statt gemessen',
            text: 'Empfehlungen auf Verdacht, ohne dass je ein Blutwert auf dem Tisch lag. Damit bleibt offen, ob überhaupt an der richtigen Stelle gedreht wird.',
          },
        ]}
        videoId="L0IFQexW1Ss"
        videoPosterSrc="/images/video-thumb-L0IFQexW1Ss.jpg"
        videoTitle="Metabolische Flexibilität: Warum dein Körper zwischen Fett- und Zuckerverbrennung wechseln muss — Video von Fabian Schönle"
        videoLabel="Das steckt dahinter"
        videoHeadline="Warum dein Körper zwischen Fett und Zucker wechseln können muss."
        videoBody="Metabolische Flexibilität entscheidet mit, ob du nachmittags einbrichst oder durchziehst — und ob dein Körper an die eigenen Fettreserven kommt. Ich erkläre dir, was dahintersteckt und woran du erkennst, dass es bei dir gerade nicht funktioniert."
        videoPoints={[
          'Was metabolische Flexibilität im Alltag konkret bedeutet',
          'Welche Anzeichen dafür sprechen, dass dein Stoffwechsel festhängt',
          'Warum sich das nur mit Daten statt mit Vermutungen klären lässt',
        ]}
      />

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

      <VideoTestimonials
        label="Echte Ergebnisse"
        headline="So sieht Abnehmen mit einem"
        headlineAccent="online Personal Coaching aus"
        intro="Zwei Klienten, die ich komplett remote begleitet habe — beide mit vollem Terminkalender."
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
              'Ab 20 Uhr keine Energie mehr',
              'Den ganzen Tag Energielevel niedrig',
              'Im eigenen Körper unwohl gefühlt',
            ],
            nachher: [
              '13,5 kg weniger in 10 Wochen',
              'Volle Energie von früh bis abends',
              'Ernährung der ganzen Familie hat sich mitverändert',
            ],
          },
        ]}
      />

      <CoachingAppSection
        label="Deine Begleitung"
        headline="Was das Coaching bei mir"
        headlineAccent="ausmacht."
        intro="Personal Coaching online heißt bei mir nicht, dass du zwischen unseren Gesprächen allein läufst. In der App liegt alles an einer Stelle — und ich sehe, was bei dir passiert, ohne dass du Listen führen musst."
        bloecke={[
          {
            src: '/images/app-dashboard-checkin.png',
            alt: 'Dashboard der Coaching-App mit wöchentlichem Check-In, Kalorien- und Makroübersicht',
            breite: 1320,
            hoehe: 2868,
            icon: 'rezept',
            titel: 'Dein Tag, ohne Zettelwirtschaft',
            text: 'Mahlzeiten, Makros, Wasser — alles an einer Stelle statt in drei Apps und einer Notiz. Die hinterlegten Rezepte passen zu deinen Werten und zu dem, was du realistisch kochst.',
            punkte: [
              'Rezepte passend zu deinen Werten und deinem Alltag',
              'Kalorien und Makros ohne Kopfrechnen',
              'Kein Wiegen nach Vorschrift',
            ],
          },
          {
            src: '/images/app-gewichtstracking.png',
            alt: 'Gewichtsverlauf der letzten zehn Tage als Kurve, daneben der Reiter für Check-Ins',
            breite: 1320,
            hoehe: 2868,
            icon: 'waage',
            titel: 'Verlauf statt Momentaufnahme',
            text: 'Ein einzelner Wert auf der Waage sagt wenig — die Richtung über Wochen sagt alles. Dazu ein kurzer Fragebogen pro Woche, in dem steht, was die Zahlen nicht zeigen.',
            punkte: [
              'Gewichtskurve statt Tagesform',
              'Wöchentliche Check-Ins zu Schlaf, Energie und Stress',
              'Muster werden sichtbar, bevor sie zum Problem werden',
            ],
          },
          {
            src: '/images/app-trainingsplan.png',
            alt: 'Trainingsplan der Woche mit drei Einheiten und Angabe der nächsten Ausführung',
            breite: 1320,
            hoehe: 2868,
            icon: 'training',
            titel: 'Trainingsplan mit Tracking',
            text: 'Deine Einheiten liegen in der App, samt Gewichten und Wiederholungen. Du siehst deinen Fortschritt schwarz auf weiß — und ich sehe, ob der Plan noch zu deiner Woche passt.',
            punkte: [
              'Einheiten mit Gewichten und Wiederholungen',
              'Fortschritt über Wochen nachvollziehbar',
              'Anpassung, sobald sich dein Alltag ändert',
            ],
          },
          {
            src: '/images/FS-Ablauf-Mockup-Neu.webp',
            alt: 'Fabian Schönle im Video-Call — so sieht dein wöchentlicher Rückblick aus',
            breite: 1536,
            hoehe: 1024,
            quer: true,
            icon: 'video',
            titel: 'Jede Woche ein Video von mir',
            text: 'Auf deinen Check-In bekommst du keinen Standardtext, sondern einen persönlichen Rückblick per Loom — was gut lief, woran es hakte und was wir in der kommenden Woche anders machen. Den Teil kann dir keine App abnehmen.',
          },
        ]}
        kennzahl={{
          label: 'Dein Zeitaufwand pro Tag',
          wert: '10 Min',
          text: 'Wenn es hoch kommt. Mahlzeit eintragen, Gewicht notieren, einmal pro Woche den Check-In ausfüllen — mehr verlangt das System nicht von dir. Das Auswerten ist mein Teil.',
        }}
      />

      <Testimonials
        label="Rezensionen"
        headline="Was Kunden über die Zusammenarbeit mit mir schreiben."
        bewertungsGrid
      />

      {/* Über mich: gleiche Sektion und dieselben CMS-Texte wie auf der Startseite */}
      <UeberMichSection content={content} />

      {/* Ablauf & Kontakt: gleiche Sektion wie auf der Startseite und in Karlsruhe */}
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
