import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import BildHero from '@/components/sections/BildHero'
import VideoSektion from '@/components/sections/VideoSektion'
import ErgebnisStreifen from '@/components/ui/ErgebnisStreifen'
import ProblemStapel from '@/components/sections/ProblemStapel'
import SolutionSection from '@/components/sections/SolutionSection'
import VideoTestimonials from '@/components/sections/VideoTestimonials'

export const metadata: Metadata = buildMetadata({
  title: 'Abnehmcoaching für Männer ab 30 | FS Performance Lab',
  description:
    'Abnehmcoaching für Männer ab 30: Bauchfett loswerden auf Basis deiner Blut- und DNA-Werte statt mit der nächsten Diät. Online begleitet, Erstgespräch kostenlos.',
  slug: 'abnehmcoaching',
})

/** Die Seite wird gerade neu aufgebaut: bisher Hero und Video-Testimonials. */
export default function AbnehmcoachingPage() {
  return (
    <>
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
        label="Das Problem"
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
        label="Im Originalton"
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
        label="Die Lösung"
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
    </>
  )
}
