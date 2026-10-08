import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import BildHero from '@/components/sections/BildHero'
import VideoSektion from '@/components/sections/VideoSektion'
import ErgebnisStreifen from '@/components/ui/ErgebnisStreifen'
import ComparisonTable from '@/components/sections/ComparisonTable'
import KontaktSection from '@/components/sections/KontaktSection'
import SocialSection from '@/components/sections/SocialSection'
import FAQ from '@/components/sections/FAQ'
import FAQSchema from '@/components/schema/FAQSchema'
import ProblemStapel from '@/components/sections/ProblemStapel'
import SolutionSection from '@/components/sections/SolutionSection'
import VideoTestimonials from '@/components/sections/VideoTestimonials'

export const metadata: Metadata = buildMetadata({
  title: 'Abnehmcoaching für Männer ab 30 | FS Performance Lab',
  description:
    'Abnehmcoaching für Männer ab 30: Bauchfett loswerden auf Basis deiner Blut- und DNA-Werte statt mit der nächsten Diät. Online begleitet, Erstgespräch kostenlos.',
  slug: 'abnehmcoaching',
})

/**
 * Fragen zum Abnehmcoaching. Stehen sichtbar in der FAQ und als FAQPage-Schema.
 * Zahlen nur, wo sie schon auf der Website stehen (12 kg im Schnitt in 16
 * Wochen, Startseite) — keine Preise, keine Garantien.
 */
const faqItems = [
  {
    question: 'Für wen ist das Abnehmcoaching gedacht?',
    answer:
      'Für Männer ab 30 mit vollem Kalender: Unternehmer, Führungskräfte, Selbstständige. Meistens haben sie schon einiges ausprobiert und gemerkt, dass es im Alltag nicht hält. Nicht passend ist es, wenn du 10 Kilo in 6 Wochen willst oder eine Radikaldiät suchst.',
  },
  {
    question: 'Wie viel verliere ich in 16 Wochen?',
    answer:
      'Das hängt von deiner Ausgangslage ab. Im Schnitt verlieren meine Klienten in 16 Wochen rund 12 kg. Wichtiger als die Zahl ist mir, dass es Körperfett ist und nicht Muskulatur, und dass das Ergebnis nach dem Coaching bleibt.',
  },
  {
    question: 'Muss ich auf bestimmte Lebensmittel verzichten?',
    answer:
      'Nein, es gibt keine Verbotsliste. Der Plan baut auf dem auf, was du gern isst und realistisch umsetzen kannst, auch im Restaurant und auf Geschäftsreisen. Verzicht hält selten länger als ein paar Wochen, Struktur schon.',
  },
  {
    question: 'Wozu brauche ich die Blut- und DNA-Analyse?',
    answer:
      'Sie zeigt, was dein Körper gerade macht: Hormonstatus, Blutzucker, Entzündungswerte und Nährstoffe. Damit arbeiten wir an den Ursachen statt zu raten. Die Analysen macht ein externes Partnerlabor, der Test kommt zu dir nach Hause. Ich bin Chemiker, kein Arzt, und stelle keine Diagnosen.',
  },
  {
    question: 'Wie viel Zeit kostet mich das im Alltag?',
    answer:
      'Weniger, als du denkst. Mahlzeiten eintragen, Gewicht notieren und einmal pro Woche den Check-In ausfüllen, das sind meist keine zehn Minuten am Tag. Das Training wird so geplant, dass es in deine Woche passt, nicht umgekehrt.',
  },
  {
    question: 'Wie läuft die Betreuung ab?',
    answer:
      'Alles läuft online. Deinen Plan findest du in der Coaching-App, jede Woche bekommst du nach deinem Check-In ein persönliches Video von mir mit Rückblick und Anpassungen. Dazwischen erreichst du mich direkt in der App.',
  },
  {
    question: 'Ist das Erstgespräch wirklich kostenlos?',
    answer:
      'Ja. 20 Minuten, online, unverbindlich. Wir schauen auf deinen Alltag und klären, woran es bisher gehakt hat. Wenn es passt, zeige ich dir, wie eine Zusammenarbeit aussehen würde. Entscheiden kannst du danach in Ruhe.',
  },
]

/**
 * Abnehmcoaching: Hero mit Foto, Ergebnis-Streifen, Video, Problem,
 * Video-Testimonials, Lösung, Vergleich, Ablauf & Kontakt, Socials, FAQ.
 * Ausser im Hero bewusst ohne Kicker ueber den Ueberschriften.
 */
export default function AbnehmcoachingPage() {
  return (
    <>
      <FAQSchema items={faqItems} />

      <BildHero
        label="1:1 Online-Abnehmcoaching für Männer ab 30"
        headline="Du hast alles versucht."
        headlineAccent="Das Problem war nie deine Disziplin."
        subheadline="Hartnäckiges Bauchfett ab 30 ist kein Willensproblem, sondern ein Stoffwechsel, der falsch eingestellt ist — sichtbar in deinen Blut- und DNA-Werten. Im Video erkläre ich, woran es liegt und wie sich das in 16 Wochen ändern lässt."
        bewertung="Ø 4,9 / 5 aus echten Rezensionen"
        bildSrc="/images/FS-Bild-Über-Fabian.webp"
        bildAlt="Fabian Schönle, Performance Coach"
        bildPosition="center 62%"
        ctaLabel="Performance Analyse buchen"
        ctaNote="Call mit mir persönlich · 20 Minuten · unverbindlich"
      />

      {/* Ergebnis-Streifen wie im Hero der Startseite, gleiche Breite */}
      <div style={{ background: '#060E1F' }}>
        <div className="max-w-7xl mx-auto">
          <ErgebnisStreifen />
        </div>
      </div>

      <VideoSektion
        headline="Warum Abnehmen für CEOs scheitert"
        headlineAccent="und wie du das in 16 Wochen änderst."
        intro="Im Video erkläre ich, warum es bei Männern mit vollem Kalender so oft nicht hält, obwohl es weder an Wissen noch an Disziplin fehlt, und wie sich das in 16 Wochen ändern lässt."
        videoId="uTtxN9ycObQ"
        videoPosterSrc="/images/video-thumb-uTtxN9ycObQ.jpg"
        videoTitle="Warum Abnehmen für CEOs scheitert und wie du das in 16 Wochen änderst — Video von Fabian Schönle"
      />

      {/* Problem — Inhalt von der Karlsruher Seite, Aufbau in zwei Spalten:
          links die Einordnung, rechts die drei Punkte als Karten mit Zeichnung. */}
      <ProblemStapel
        headline="Warum die meisten Abnehmcoachings"
        headlineAccent="scheitern."
        intro="Es liegt nicht an deiner Disziplin. Es liegt daran, dass die meisten Abnehmcoachings mit Plänen von der Stange arbeiten und dabei deinen Alltag und deine individuelle Physiologie völlig ignorieren."
        intro2="Alles, was du dadurch verlierst, ist deine wertvollste Ressource — nämlich Zeit. An diesen drei Punkten scheitert es fast immer:"
        ctaLabel="Performance Analyse buchen"
        punkte={[
          {
            titel: 'Nur Kalorien gezählt',
            grafik: 'hormone',
            body: 'Die meisten Abnehmcoachings rechnen nur mit Kalorien. Was dein Hormonsystem dazu sagt, bleibt außen vor: Testosteron, Cortisol, Schilddrüse. Du hältst das Defizit sauber ein — und trotzdem bewegt sich nichts.',
          },
          {
            titel: 'Am Symptom herumgeschraubt',
            grafik: 'ursachen',
            body: 'Wenig Antrieb, hartnäckiges Bauchfett, kaum Muskelaufbau trotz Training: Daran wird herumgeschraubt. Woher es kommt, schaut sich niemand an — ein Blutwert liegt in diesen Coachings nie auf dem Tisch.',
          },
          {
            titel: 'Auf Disziplin gebaut',
            grafik: 'strategie',
            body: 'Mehr trainieren, weniger essen, mehr durchhalten — darauf läuft fast jedes Abnehmcoaching hinaus. Klappt es nicht, liegt es angeblich an dir. Dabei ist dauernder Verzicht zusätzlicher Stress, und der arbeitet gegen deine Hormone.',
          },
        ]}
      />

      <VideoTestimonials
        headline="Hör es dir von"
        headlineAccent="Robert und Richard selbst an."
        intro="Zwei Männer, die vorher schon einiges probiert hatten — und erzählen, was diesmal anders war."
        anordnung="gestapelt"
        videos={[
          {
            src: '/videos/Robert_Testimonial_final.mp4',
            name: 'Robert',
            rolle: '42 Jahre · Projektleiter · −16 kg Körpergewicht',
            linkedin: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
            ergebnisTitel: '−16 kg Körpergewicht',
            ergebnisse: [
              'Von 103 auf 87 kg, ohne Hungern oder Verzicht',
              'Volle Leistungsfähigkeit im Job zurück',
              'Alles umgesetzt trotz Montage und Überstunden',
            ],
          },
          {
            src: '/videos/Richard_Testimonial_kurz.mp4',
            name: 'Richard',
            rolle: '36 Jahre · Gründer · −13,5 kg in 10 Wochen',
            linkedin: 'https://www.linkedin.com/in/richard-mueller/',
            ergebnisTitel: '−13,5 kg in 10 Wochen',
            ergebnisse: [
              'Von 106 auf 92,5 kg, trotz Gründung und Familie',
              'Volle Energie von früh bis abends, Mittagstief verschwunden',
              'Die Ernährung der ganzen Familie hat sich mitverändert',
            ],
          },
        ]}
      />

      {/* Lösung — beantwortet die drei Punkte der Problemsektion der Reihe nach,
          der vierte Schritt hält das Ergebnis. Aufbau wie „Mein Ansatz" auf der
          Karlsruher Seite. */}
      <SolutionSection
        headline="Ein Abnehmcoaching,"
        headlineAccent="mit dem du deine Ziele erreichst."
        intro="Statt gegen deinen Stoffwechsel zu arbeiten, stellen wir ihn ein. In drei Schritten, von der Messung bis zu den Routinen, die in deinen Alltag passen."
        kartenGrid
        zitat="Wir verschwenden keine Zeit, indem wir herumrätseln, sondern bestimmen wissenschaftlich die Hebel, die bei dir wirklich den Unterschied machen."
        zitatAutor="Fabian Schönle"
        zitatRolle="Performance Coach · M.Sc. Chemie"
        steps={[
          {
            headline: 'Hormone im Blick',
            grafik: 'hormone',
            body: 'Über 50 Marker zeigen, was dein Körper gerade macht: Hormonstatus, Blutzucker, Entzündungswerte und Nährstoffe. Ab da wird nicht mehr geschätzt, sondern gemessen.',
          },
          {
            headline: 'Ursachen schwarz auf weiß',
            grafik: 'ursachen',
            body: 'Aus den Werten lesen wir ab, woran es bei dir hängt. Du bekommst die zwei, drei Hebel, die den Unterschied machen, statt einer Liste mit zwanzig Baustellen.',
          },
          {
            headline: 'Strategie statt Willenskraft',
            grafik: 'strategie',
            body: 'Ernährung und Bewegung werden um deinen Terminkalender herum gebaut, inklusive Reisen und Restaurant. Es braucht keine Disziplin, wenn die Routine ohnehin passt.',
          },
        ]}
      />

      {/* Vergleich: Wo sich das Coaching von üblichen Abnehmprogrammen unterscheidet */}
      <ComparisonTable
        headline="Standard-Abnehmcoaching"
        // Geschützte Leerzeichen: „vs. FS Performance Lab“ bricht nur als Ganzes um
        headlineAccent={'vs.\u00A0FS\u00A0Performance\u00A0Lab'}
        intro="Der Unterschied liegt nicht im Ehrgeiz, sondern im System dahinter."
        spalteStandard="Standard-Abnehmcoaching"
        spalteFs="FS Performance Lab"
        rows={[
          { criterion: 'Ausgangspunkt', standard: 'Kalorienrechner und Fragebogen', fsPerformance: 'Blut- und DNA-Analyse aus dem Labor' },
          { criterion: 'Plan', standard: 'Ernährungsplan von der Stange', fsPerformance: 'Strategie nach deinen Werten' },
          { criterion: 'Alltag', standard: 'Setzt freie Zeit und feste Abläufe voraus', fsPerformance: 'Richtet sich nach Job, Familie und Reisen' },
          { criterion: 'Training', standard: 'Standardplan, oft fünf Einheiten pro Woche', fsPerformance: 'Routine, die in deine Woche passt' },
          { criterion: 'Fokus', standard: 'Die Zahl auf der Waage', fsPerformance: 'Körperkomposition, Energie und Schlaf' },
          { criterion: 'Anpassung', standard: 'Einmal erstellt, selten angepasst', fsPerformance: 'Laufend angepasst anhand deiner Daten' },
          { criterion: 'Betreuung', standard: 'Wechselnde Ansprechpartner oder Chatbot', fsPerformance: 'Persönlich mit mir, Chat-Support im Alltag' },
          { criterion: 'Nach dem Programm', standard: 'Jo-Jo-Effekt, sobald der Plan endet', fsPerformance: 'Routinen, die bleiben' },
        ]}
      />

      {/* Ablauf & Kontakt: gleiche Sektion wie auf der Startseite und den
          übrigen Unterseiten, nur die Texte aufs Abnehmcoaching zugeschnitten */}
      <KontaktSection
        ohneKicker
        title="Finde heraus, warum es bei dir bisher nicht gehalten hat."
        intro1="Kein klassisches Verkaufsgespräch, kein Vertrag. 20 Minuten, in denen wir auf deinen Alltag schauen: Job, Familie, Essen, Bewegung, Schlaf. Und klären, woran es bisher gehakt hat."
        intro2="Du gehst mit den ein, zwei Hebeln raus, mit denen du direkt anfangen kannst. Wenn es passt, zeige ich dir, wie die 16 Wochen mit mir aussehen würden. Entscheiden kannst du danach in Ruhe."
      />

      <SocialSection ohneKicker />

      <FAQ headline="Fragen zum Abnehmcoaching." items={faqItems} />
    </>
  )
}
