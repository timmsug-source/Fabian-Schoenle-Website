import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import LocalHero from '@/components/sections/LocalHero'
import KurzStimmen from '@/components/sections/KurzStimmen'
import SymptomGrid from '@/components/sections/SymptomGrid'
import HypotheseSection from '@/components/sections/HypotheseSection'
import ComparisonTable from '@/components/sections/ComparisonTable'
import LandingFallstudien from '@/components/sections/LandingFallstudien'
import ReviewsSection from '@/components/sections/ReviewsSection'
import VideoTestimonials from '@/components/sections/VideoTestimonials'
import LeistungenSection from '@/components/sections/LeistungenSection'
import FuerWenSection from '@/components/sections/FuerWenSection'
import KontaktSection from '@/components/sections/KontaktSection'
import FAQSection from '@/components/sections/FAQSection'
import FAQSchema from '@/components/schema/FAQSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Abnehmcoaching für Männer ab 30 | FS Performance Lab',
  description:
    'Abnehmcoaching für Männer ab 30: Bauchfett loswerden auf Basis deiner Blut- und DNA-Werte statt mit der nächsten Diät. Online begleitet, Erstgespräch kostenlos.',
  slug: 'abnehmcoaching',
})

const faqItems = [
  {
    question: 'Wie schnell sehe ich beim Abnehmcoaching Ergebnisse?',
    answer:
      'Die meisten Klienten berichten nach 4–6 Wochen von stabilerer Energie und besserem Schlaf — das merkst du zuerst. Auf der Waage und an der Körperkomposition wird es nach 8–12 Wochen deutlich sichtbar. Richard hat in 10 Wochen 13,5 kg verloren, bei Robert waren es über den gesamten Zeitraum 16 kg. Wie es bei dir läuft, hängt von deiner Ausgangslage ab — deshalb schauen wir uns die zuerst an.',
  },
  {
    question: 'Muss ich auf alles verzichten, was ich gerne esse?',
    answer:
      'Nein. Verzicht als Strategie hält niemand dauerhaft durch, und genau daran scheitern die meisten Versuche. Wir arbeiten mit dem, was du ohnehin isst, und justieren nach: Zusammensetzung, Timing und die zwei bis drei Stellschrauben, die bei dir laut Blutwerten wirklich etwas bewegen. Restaurant, Geschäftsreise und Familienessen sind Teil des Plans, nicht sein Feind.',
  },
  {
    question: 'Was kostet das Abnehmcoaching?',
    answer:
      'Die Zusammenarbeit ist individuell und richtet sich nach Umfang und Zieldefinition. Den konkreten Rahmen besprechen wir transparent im kostenlosen Erstgespräch — dort erfährst du genau, was auf dich zukommt, bevor du dich entscheidest.',
  },
  {
    question: 'Was ist der Unterschied zu einem klassischen Diätplan?',
    answer:
      'Ein Diätplan gibt dir vor, was du essen sollst — und geht davon aus, dass dein Stoffwechsel wie jeder andere funktioniert. Wir drehen das um: Zuerst zeigen Blutbild und DNA-Analyse, warum dein Körper gerade Fett speichert, etwa über Insulin, Cortisol, Schilddrüse oder Testosteron. Daraus entsteht eine Strategie für deinen Körper und deinen Alltag, die wir laufend an deine Werte anpassen. Deshalb bleibt das Ergebnis auch nach dem Coaching bestehen.',
  },
  {
    question: 'Kann ich das neben meinem Job umsetzen?',
    answer:
      'Ja — genau dafür ist es gebaut. Meine Klienten sind Unternehmer, Führungskräfte und Projektleiter mit 50- bis 60-Stunden-Wochen. Robert hat das Coaching komplett auf Montage umgesetzt, Richard mitten in der Gründungsphase mit zwei Kindern. Der Aufwand liegt bei wenigen Minuten am Tag, weil die Strategie um deinen Terminkalender herum gebaut wird und nicht umgekehrt.',
  },
  {
    question: 'Funktioniert das Abnehmcoaching auch online?',
    answer:
      'Ja, die Zusammenarbeit läuft vollständig online: Erstgespräch, Auswertung und die laufende Betreuung per Videocall und Chat. Blut- und DNA-Analyse machst du über ein Partnerlabor oder deinen Arzt in deiner Nähe, die Auswertung übernehme ich. Als online Abnehmcoach begleite ich Männer in ganz Deutschland, Österreich und der Schweiz — ein Anfahrtsweg kostet dich nur Zeit, die du nicht hast.',
  },
]

export default function AbnehmcoachingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      {/* 1 — Hero: Das Problem war nie die Disziplin */}
      <LocalHero
        label="Abnehmcoaching für Männer"
        headline="Du hast alles versucht."
        headlineAccent="Das Problem war nie deine Disziplin."
        subheadline="Hartnäckiges Bauchfett ab 30 ist kein Willensproblem. Es ist ein Stoffwechsel, der falsch eingestellt ist — sichtbar in deinen Blut- und DNA-Werten. Genau dort setzen wir an."
        ctaLabel="Performance Analyse buchen"
        ctaNote="Call mit mir persönlich · 20 Minuten · unverbindlich"
        imageSrc="/images/FS-Bild-Hemd-blau.webp"
        imageAlt="Fabian Schönle — Abnehmcoach für Männer ab 30"
        statNumber="+40"
        statText="Menschen bereits erfolgreich begleitet"
      />

      {/* 2 — Vier kurze Stimmen, direkt unter dem Hero */}
      <KurzStimmen
        stimmen={[
          {
            ergebnis: 'Jahresziel zur Jahresmitte',
            zitat: 'Es ging nie um Hungern, Fastenkuren oder unrealistische Programme.',
            name: 'Gregory Niagli',
            beruf: 'Wealth Management Specialist',
            bild: '/images/kunde-gregory.png',
          },
          {
            ergebnis: '−16 kg Körpergewicht',
            zitat: 'Fabian passt sein Coaching individuell an die eigenen Ziele an.',
            name: 'Robert Raschkov',
            beruf: 'Projektleiter · 42 Jahre',
            bild: '/images/kunde-robert.png',
          },
          {
            ergebnis: 'Körperfett runter, Muskeln gehalten',
            zitat: 'Keine Crashdiäten, keine kurzfristigen Extremmaßnahmen, sondern ein langfristiger Ansatz.',
            name: 'Matthias Karlin',
            beruf: 'Director Global Aftermarket',
            bild: '/images/kunde-matthias.png',
          },
          {
            ergebnis: 'Zielgewicht erreicht und gehalten',
            zitat: 'Das Coaching mit Fabian bewerte ich als vollen Erfolg.',
            name: 'Axel Krupp',
            beruf: 'Geschäftsführer · Ironman',
            bild: '/images/kunde-axel.png',
          },
        ]}
      />

      {/* 3 — Kennst du das? */}
      <SymptomGrid
        label="Kennst du das?"
        headline="Dein Körper reagiert nicht mehr"
        headlineAccent="auf das, was früher funktioniert hat"
        intro="Diese Muster haben fast alle gemeinsam, die zu mir kommen. Sie sind kein Zufall — und schon gar kein Charakterfehler."
        symptome={[
          {
            icon: 'bauchfett',
            headline: 'Bauchfett trotz Sport',
            body: 'Du trainierst regelmäßig. Am Bauch ändert sich trotzdem nichts.',
          },
          {
            icon: 'jojo',
            headline: 'Jo-Jo nach jeder Diät',
            body: 'Die Kilos kommen zurück — meist ein paar mehr als vorher.',
          },
          {
            icon: 'energie',
            headline: 'Energie bricht nachmittags ein',
            body: 'Ab 15 Uhr läuft nichts mehr ohne Kaffee.',
          },
          {
            icon: 'heisshunger',
            headline: 'Heißhunger am Abend',
            body: 'Tagsüber diszipliniert, abends holt es dich ein.',
          },
          {
            icon: 'koerpergefuehl',
            headline: 'Im eigenen Körper unwohl',
            body: 'Auf Fotos und im Spiegel erkennst du dich selbst kaum wieder.',
          },
          {
            icon: 'ratlos',
            headline: 'Du weißt nicht mehr, was helfen soll',
            body: 'Jeder rät dir etwas anderes. Nichts davon hält.',
          },
        ]}
        ctaLabel="Performance Analyse buchen"
      />

      {/* 4 — Warum die bisherigen Ansätze scheitern mussten */}
      <HypotheseSection
        label="Warum es bisher nicht funktioniert hat"
        title1="Du hast gegen ein System gearbeitet,"
        title2="das nie auf dich eingestellt war"
        body="Weniger essen, mehr bewegen. Das funktioniert — ein paar Wochen lang. Dann passt dein Körper sich an: Der Stoffwechsel fährt herunter, Heißhunger nimmt zu, und der Schlaf wird schlechter. Kommt beruflicher Dauerstress dazu, arbeitet dein Hormonsystem zusätzlich gegen dich. <strong>Cortisol, Insulin, Schilddrüse und Testosteron entscheiden mit, ob dein Körper Fett abgibt oder festhält.</strong> Ein Kaloriendefizit allein erreicht diese Ebene nicht — und genau deshalb kommt das Gewicht nach jedem Versuch zurück. Das ist keine Willensschwäche. Das ist Biologie, die niemand ausgerechnet hat."
        quote="Das Problem war nie deine Disziplin. Es war ein System, das nie auf dich eingestellt war."
        quoteAuthor="Fabian Schönle"
        quoteRole="Performance Coach · M.Sc. Chemie"
      />

      {/* 5 — Der Unterschied: System statt Diät */}
      <ComparisonTable
        label="Der Unterschied"
        headline="System"
        headlineAccent="statt Diät."
        intro="Beim klassischen Abnehmcoaching bekommst du einen Plan und sollst dich daran anpassen. Bei mir passt sich der Plan an deine Werte und deinen Alltag an."
        spalteStandard="Klassisches Abnehmcoaching"
        spalteFs="Mein Ansatz"
        rows={[
          {
            criterion: 'Grundlage',
            standard: 'Eine Kalorienformel, die für jeden gleich rechnet',
            fsPerformance: 'Deine Blut- und DNA-Werte — über 50 Marker zeigen, woran es bei dir liegt',
          },
          {
            criterion: 'Ansatz',
            standard: 'Kaloriendefizit und Verzicht, durchgehalten mit Willenskraft',
            fsPerformance: 'Dein metabolisches System so einstellen, dass dein Körper Fett wieder abgibt',
          },
          {
            criterion: 'Hormone',
            standard: 'Werden nicht betrachtet',
            fsPerformance: 'Hormonstatus, Stressregulation und Entzündungsmarker gehören zur Analyse',
          },
          {
            criterion: 'Heißhunger',
            standard: 'Gilt als Disziplinproblem',
            fsPerformance: 'Wir finden die Ursache — Blutzucker, Schlaf, Stress oder Nährstoffmangel',
          },
          {
            criterion: 'Alltag',
            standard: 'Ein Plan, an den du deinen Alltag anpassen sollst',
            fsPerformance: 'Routinen, die zu deinem Terminkalender passen — inklusive Reisen und Restaurant',
          },
          {
            criterion: 'Nach dem Programm',
            standard: 'Jo-Jo, sobald der Plan endet',
            fsPerformance: 'Du verstehst deine Hebel und hältst das Ergebnis auch ohne mich',
          },
        ]}
      />

      {/* 6 — Ergebnisse: zwei Fallstudien mit Zahlen */}
      <LandingFallstudien
        label="Echte Ergebnisse"
        headline="Zwei Männer, wenig Zeit,"
        headlineAccent="und trotzdem ein Ergebnis, das bleibt."
        intro="Beide hatten volle Arbeitswochen und schon einiges hinter sich. Hier ist, wo sie gestartet sind und was dabei herausgekommen ist."
        fallstudien={[
          {
            name: 'Robert',
            ueberschrift: '−16 kg Körpergewicht',
            rolle: '42 Jahre · Projektleiter, nebenbei Finanzberatung · spielt Squash',
            portrait: '/images/kunde-robert.png',
            link: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
            gewichtVon: '103 kg',
            gewichtNach: '87 kg',
            ausgangspunkt:
              'Roberts Tag fand im Auto, im Büro oder auf Montage statt: Start um 7 Uhr, Ende gegen 19 Uhr, danach ins Hotel. Gegessen wurde, was zwischen die Finger kam — Kaffee, belegte Brötchen, Süßkram vom Bäcker. Er ging müde zur Arbeit und konnte seine Leistung nicht mehr abrufen.',
            prozess:
              'Kein zusätzliches Programm obendrauf, sondern Anpassungen, die in seinen Tag passen: Mahlzeiten, die in fünf Minuten vorbereitet sind, Bewegung, die sich in den Montagealltag einfügt, und eine Ernährung, die ihm zeigt, was er essen kann, statt worauf er verzichten muss.',
            ergebnisse: [
              '16 kg weniger Körpergewicht — von 103 auf 87 kg',
              'Volle Leistungsfähigkeit im Job zurück',
              'Alles umgesetzt trotz Montage und Überstunden',
            ],
            zitat:
              'Zudem unterstützt er auch dabei die erreichten Ziele zu halten und Themen wie Jo-Jo-Effekt oder ähnliches vorzubeugen, so dass diese nicht eintreten.',
            zitatQuelle: 'Robert Raschkov · LinkedIn-Empfehlung',
          },
          {
            name: 'Richard',
            ueberschrift: '−13,5 kg in 10 Wochen',
            rolle: '36 Jahre · Gründer · Familienvater von zwei Kindern',
            portrait: '/images/kunde-richard.png',
            link: 'https://www.linkedin.com/in/richard-mueller/',
            gewichtVon: '106 kg',
            gewichtNach: '92,5 kg',
            ausgangspunkt:
              'Richard steckte mitten im Wechsel in die Selbstständigkeit, nach 14 Jahren als Manager. Die Gründungsphase war holprig, die mentale Belastung hoch. Ab 20 Uhr war seine Energie komplett weg — genau dann, wenn Familienzeit gewesen wäre.',
            prozess:
              'Seine Ernährung war schon solide. Deshalb ging es nicht ums Umkrempeln, sondern ums Feinjustieren in Etappen: erst die Ernährung, dann mehr Bewegung auf machbarem Niveau, ab Woche sechs gezielte Supplementierung.',
            ergebnisse: [
              '13,5 kg weniger in 10 Wochen — von 106 auf 92,5 kg',
              'Volle Energie von früh bis abends, Mittagstief verschwunden',
              'Die Ernährung der ganzen Familie hat sich mitverändert',
            ],
            notiz: {
              label: 'Sein eigentliches Ziel',
              text: 'Abnehmen stand am Anfang gar nicht im Fokus. Richard wollte abends wieder Energie für Frau und Kinder haben. Das Gewicht kam dazu, als das System wieder lief.',
            },
          },
        ]}
      />

      {/* Belege: die Bewertungen im Original */}
      <ReviewsSection />

      {/* 7 — Die beiden erzählen es selbst */}
      <VideoTestimonials
        label="Im Originalton"
        headline="Hör es dir von"
        headlineAccent="Robert und Richard selbst an."
        intro="Zwei Männer, die vorher schon einiges probiert hatten — und erzählen, was diesmal anders war."
        videos={[
          {
            src: '/videos/Robert_Testimonial_final.mp4',
            name: 'Robert',
            rolle: '42 Jahre · Projektleiter · −16 kg Körpergewicht',
            linkedin: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
            zitat: 'Fabian ist sehr zuvorkommend und passt sein Coaching individuell an die eigenen Ziele an.',
          },
          {
            src: '/videos/Richard_Testimonial_kurz.mp4',
            name: 'Richard',
            rolle: '36 Jahre · Gründer · −13,5 kg in 10 Wochen',
            linkedin: 'https://www.linkedin.com/in/richard-mueller/',
          },
        ]}
      />

      {/* 8 — Was du im Abnehmcoaching bekommst */}
      <LeistungenSection
        label="Was du bekommst"
        headline="Was du im Abnehmcoaching bekommst."
        intro="Keine Liste an Vorschriften, sondern die Punkte, an denen du den Unterschied tatsächlich merkst."
        imageSrc="/images/Fabian-Schoenle-Sektion-Problem.png"
        imageAlt="Fabian Schönle — Abnehmcoach für Männer ab 30"
        name="Fabian Schönle"
        role="M.Sc. Chemie · Triathlet · Performance Coach"
        items={[
          {
            headline: 'Das Bauchfett geht runter — und bleibt unten',
            body: 'Meine Klienten verlieren im Schnitt 12 kg, vor allem am Bauch. Weil wir die Ursache angehen statt nur die Kalorien, hält das Ergebnis auch nach dem Coaching.',
          },
          {
            headline: 'Energie, die über den ganzen Tag trägt',
            body: 'Kein Loch am Nachmittag, kein Kaffee als Krücke. Abends ist noch Kraft für die Menschen da, die dir wichtig sind.',
          },
          {
            headline: 'Ein klarer Kopf, auch unter Last',
            body: 'Stabilere Stimmung, mehr Antrieb und Entscheidungsfreude — selbst in Wochen, in denen viel gleichzeitig läuft.',
          },
          {
            headline: 'Du weißt endlich, was dein Körper braucht',
            body: 'Aus über 50 Blut- und DNA-Markern filtern wir die drei bis vier Hebel heraus, die bei dir wirklich zählen. Danach rätselst du nicht mehr.',
          },
          {
            headline: 'Begleitung, die sich deinem Alltag anpasst',
            body: 'Geschäftsreise, Restaurant, Familienessen: Wir passen die Strategie laufend an deine Situation an, statt dich an einem Plan festzuhalten, der nicht mehr passt.',
          },
        ]}
      />

      {/* 9 — Für wen das gemacht ist */}
      <FuerWenSection
        label="Passt das zu dir?"
        headline="Für wen das Abnehmcoaching"
        headlineAccent="gemacht ist."
        intro="Ich arbeite mit wenigen Klienten gleichzeitig. Damit das für beide Seiten aufgeht, sollte die Ausgangslage passen."
        fuer={[
          'Du bist Mann ab 30 und wirst das Bauchfett nicht mehr los — obwohl du dich eigentlich zusammenreißt.',
          'Du bist Unternehmer, Führungskraft oder stark eingespannt und hast keine Zeit für Programme, die deinen Tag umbauen.',
          'Du hast schon einiges probiert: Kalorien zählen, Verzicht, mehr Training. Es hat nie lange gehalten.',
          'Du willst verstehen, warum dein Körper reagiert wie er reagiert — und eine Lösung, die auch in einem Jahr noch steht.',
        ]}
        nicht={[
          'Du willst in zwei Wochen ein paar Kilo runter, egal wie — und danach weitermachen wie vorher.',
          'Du suchst einen fertigen Plan zum Alleine-Abarbeiten, ohne Analyse und ohne Austausch.',
        ]}
      />

      {/* 10 — Kostenlose Erstanalyse */}
      <KontaktSection
        label="Abnehmcoaching starten"
        title="Finde heraus, warum dein Körper gerade nicht reagiert."
        intro1="Kein Verkaufsgespräch. Kein Vertrag. Nur 20 Minuten, in denen wir gemeinsam anschauen, warum die bisherigen Versuche nicht gehalten haben."
        intro2="Du bekommst danach eine klare Einschätzung deiner Ausgangslage und weißt, welche Hebel bei dir zuerst zählen — unabhängig davon, ob wir zusammenarbeiten."
      />

      {/* 11 — Häufige Fragen zum Abnehmcoaching */}
      <FAQSection
        label="Häufige Fragen"
        title1="Fragen zum"
        title2="Abnehmcoaching"
        items={faqItems.map((f) => ({ frage: f.question, antwort: f.answer }))}
      />
    </>
  )
}
