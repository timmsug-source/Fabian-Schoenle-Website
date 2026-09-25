import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import VideoHero from '@/components/sections/VideoHero'
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
      <VideoHero
        label="1:1 Online-Abnehmcoaching für Männer ab 30"
        headline="Du hast alles versucht."
        headlineAccent="Das Problem war nie deine Disziplin."
        subheadline="Hartnäckiges Bauchfett ab 30 ist kein Willensproblem, sondern ein Stoffwechsel, der falsch eingestellt ist — sichtbar in deinen Blut- und DNA-Werten. Im Video erkläre ich, woran es liegt und wie sich das in 16 Wochen ändern lässt."
        bewertung="Ø 4,9 / 5 aus echten Rezensionen"
        videoId="uTtxN9ycObQ"
        videoPosterSrc="/images/video-thumb-uTtxN9ycObQ.jpg"
        videoTitle="Warum Abnehmen für CEOs scheitert und wie du das in 16 Wochen änderst — Video von Fabian Schönle"
        ctaLabel="Performance Analyse buchen"
        ctaNote="Call mit mir persönlich · 20 Minuten · unverbindlich"
      />

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
    </>
  )
}
