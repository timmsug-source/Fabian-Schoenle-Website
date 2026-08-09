export type FaqEintrag = { frage: string; antwort: string }

/**
 * Die Fragen der Startseite. Liegen bewusst hier und nicht in der Komponente:
 * Die Seite (app/page.tsx) braucht dieselbe Liste, um daraus das FAQPage-Schema
 * zu bauen. Schema und sichtbarer Text müssen identisch sein — sonst zeichnet
 * die Seite Inhalte aus, die so nicht auf ihr stehen.
 *
 * Unterseiten übergeben ihre eigenen Fragen per `items`-Prop.
 */
export const FAQS: FaqEintrag[] = [
  {
    frage: 'Ich habe schon vieles probiert — warum sollte das hier anders sein?',
    antwort: 'Weil wir nicht raten. Bevor wir irgendetwas verändern, analysieren wir über Blut- und DNA-Werte, was dein System gerade wirklich limitiert. Kein generischer Plan, der für den Durchschnitt gemacht wurde — sondern eine Strategie, die auf deine Biologie abgestimmt ist. Das ist der Unterschied.',
  },
  {
    frage: 'Ich habe kaum Zeit. Funktioniert das trotzdem?',
    antwort: 'Ja — und genau dafür ist dieser Ansatz gemacht. Die Zielgruppe sind Selbstständige und Unternehmer mit hoher Belastung und wenig Zeit. Ernährung, Training und Alltag werden so aufgebaut, dass sie in dein Leben passen — nicht umgekehrt.',
  },
  {
    frage: 'Muss ich komplett auf etwas verzichten?',
    antwort: 'Nein. Es geht nicht um Verbote oder Einschränkungen, sondern darum, zu verstehen, was dein Körper braucht. Wer weiß, wie sein System funktioniert, muss nicht auf Genuss verzichten — er trifft einfach bessere Entscheidungen.',
  },
  {
    frage: 'Wie schnell sehe ich erste Ergebnisse?',
    antwort: 'Die meisten Kunden spüren innerhalb der ersten 4–6 Wochen eine spürbare Veränderung bei Energie und Fokus. Sichtbare Veränderungen in der Körperkomposition entstehen typischerweise innerhalb von 2–4 Monaten — abhängig von Ausgangslage und Konsequenz in der Umsetzung.',
  },
  {
    frage: 'Was kostet das Coaching?',
    antwort: 'Das lässt sich pauschal nicht beantworten — weil der Aufwand von deiner Ausgangslage, deinen Zielen und der gewünschten Betreuungsintensität abhängt. Im kostenlosen Erstgespräch besprechen wir, was für dich sinnvoll ist und was es kostet.',
  },
  {
    frage: 'Ist das auch online möglich?',
    antwort: 'Ja. Die gesamte Zusammenarbeit läuft online ab — Erstgespräch, Analysen, Check-ins, Tracking. Du brauchst nichts außer einem Laptop oder Smartphone und die Bereitschaft, die Analyse-Kits zu nutzen.',
  },
  {
    frage: 'Was passiert nach dem Erstgespräch?',
    antwort: 'Du bekommst eine ehrliche Einschätzung deiner Situation — und einen klaren Vorschlag, wie eine Zusammenarbeit aussehen würde. Kein Druck, keine Verpflichtung. Du entscheidest danach in Ruhe.',
  },
]

/**
 * Die tatsächlich angezeigten Fragen/Antworten der Startseite — CMS-Werte haben
 * Vorrang. Bewusst dieselbe Auswahllogik wie in FAQSection, damit das Schema nie
 * von dem abweicht, was der Besucher liest.
 */
export function faqsAusCms(content: Record<string, string>): FaqEintrag[] {
  return FAQS.map((faq, i) => ({
    frage: content[`faq${i + 1}_frage`] || faq.frage,
    antwort: content[`faq${i + 1}_antwort`] || faq.antwort,
  }))
}
