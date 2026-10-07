import { Absatz, Hinweis, Liste, Unterpunkt, Zitat } from '@/components/blog/Bausteine'

/**
 * Ratgeber-Artikel. Jeder Artikel besteht aus Abschnitten; aus deren Titeln
 * entsteht das Inhaltsverzeichnis, aus der `id` der Sprunganker.
 *
 * VORLAEUFIG: Die vier Artikel sind Beispielinhalte, um Uebersicht und
 * Detailseite zu bauen. Vor dem Livegang fachlich von Fabian pruefen lassen
 * und je Artikel ein `bild` eintragen, bis dahin steht ein Platzhalter.
 */

/**
 * VORLAEUFIG: Der Blog ist fest auf noindex und nirgends verlinkt, bis Design
 * und Inhalte fertig sind. Bewusst unabhaengig von UNTERSEITEN_NOINDEX, damit
 * er nicht mit den uebrigen Unterseiten freigeschaltet wird. Zum Freigeben:
 * diesen Wert entfernen (bzw. auf index: true), Blog in die Sitemap und ins
 * Menue aufnehmen.
 */
export const BLOG_ROBOTS = { index: false, follow: true } as const

export type Abschnitt = {
  /** Sprunganker, nur Kleinbuchstaben und Bindestriche */
  id: string
  titel: string
  inhalt: React.ReactNode
}

export type Artikel = {
  slug: string
  titel: string
  /** Ein bis zwei Saetze: Teaser-Text und Meta-Description */
  beschreibung: string
  kategorie: string
  /** ISO-Datum, z. B. 2026-09-24 */
  datum: string
  /** Lesezeit in Minuten */
  lesezeit: number
  /** Ohne Bild zeigt die Seite einen Platzhalter (components/blog/BildPlatzhalter) */
  bild?: { src: string; alt: string; position?: string }
  abschnitte: Abschnitt[]
}

const artikel: Artikel[] = [
  {
    slug: 'energietief-am-nachmittag',
    titel: 'Warum dein Energietief am Nachmittag kein Zufall ist',
    beschreibung:
      'Gegen 15 Uhr lässt die Konzentration nach, der nächste Kaffee muss her. Woran das liegt und welche drei Stellschrauben bei den meisten Männern den größten Unterschied machen.',
    kategorie: 'Energie',
    datum: '2026-09-24',
    lesezeit: 6,
    abschnitte: [
      {
        id: 'signal',
        titel: 'Das Tief ist ein Signal, kein Charakterfehler',
        inhalt: (
          <>
            <Absatz>
              Fast jeder Mann, mit dem ich spreche, kennt diesen Moment: Der Vormittag läuft, das
              Mittagessen ist vorbei, und gegen 15 Uhr wird der Kopf schwer. Die Mails lesen sich
              zäher, Entscheidungen fühlen sich anstrengender an. Die übliche Reaktion ist der
              nächste Kaffee oder etwas Süßes.
            </Absatz>
            <Absatz>
              Das Problem ist dabei selten mangelnde Disziplin. Das Tief ist ein Hinweis darauf,
              dass dein metabolisches System gerade nicht stabil versorgt ist. Und das lässt sich
              in den meisten Fällen ziemlich genau eingrenzen.
            </Absatz>
          </>
        ),
      },
      {
        id: 'blutzucker',
        titel: 'Blutzucker: der häufigste Auslöser',
        inhalt: (
          <>
            <Absatz>
              Ein Mittagessen mit viel leicht verfügbaren Kohlenhydraten und wenig Eiweiß lässt den
              Blutzucker stark ansteigen. Der Körper reagiert mit Insulin, der Spiegel fällt wieder,
              oft unter das Ausgangsniveau. Genau in diesem Abfall sitzt das Tief.
            </Absatz>
            <Unterpunkt>Woran du das erkennst</Unterpunkt>
            <Liste
              punkte={[
                'Das Tief kommt ein bis zwei Stunden nach dem Essen.',
                'Du hast Heißhunger auf Süßes oder Snacks.',
                'Nach einem eiweißreichen Mittagessen ist es deutlich schwächer.',
              ]}
            />
            <Hinweis titel="Kernpunkt">
              Nicht die Menge entscheidet, sondern die Zusammensetzung. Eiweiß, Ballaststoffe und
              Gemüse zuerst, die Kohlenhydrate dazu statt allein.
            </Hinweis>
          </>
        ),
      },
      {
        id: 'schlaf-koffein',
        titel: 'Schlaf und Koffein: die Rechnung vom Vortag',
        inhalt: (
          <>
            <Absatz>
              Wer nachts schlecht schläft, startet mit einem Defizit in den Tag. Am Vormittag
              überdecken Stresshormone und Koffein das noch. Am Nachmittag lässt beides nach, und das
              Defizit wird spürbar.
            </Absatz>
            <Absatz>
              Koffein hat eine Halbwertszeit von mehreren Stunden. Der Kaffee um 16 Uhr ist abends
              also noch zur Hälfte im Körper und verschlechtert den Schlaf der nächsten Nacht. So
              entsteht ein Kreislauf, den viele Männer jahrelang mitschleppen.
            </Absatz>
            <Zitat>Der Kaffee gegen das Tief von heute ist oft die Ursache für das Tief von morgen.</Zitat>
          </>
        ),
      },
      {
        id: 'werte',
        titel: 'Was deine Werte dazu sagen können',
        inhalt: (
          <>
            <Absatz>
              Manchmal liegt die Ursache tiefer. Ein niedriger Eisenspeicher, ein Vitamin-D-Mangel
              oder eine träge Schilddrüse können sich genau so anfühlen: müde, unkonzentriert,
              wenig belastbar. Raten bringt hier nichts. Ein Blutbild zeigt, ob einer dieser Punkte
              eine Rolle spielt.
            </Absatz>
            <Absatz>
              Wichtig: Auffällige Werte gehören ärztlich abgeklärt. Ich stelle keine Diagnosen,
              sondern nutze die Werte, um Ernährung, Training und Alltag gezielt darauf abzustimmen.
            </Absatz>
          </>
        ),
      },
      {
        id: 'erste-schritte',
        titel: 'Drei Stellschrauben für die nächste Woche',
        inhalt: (
          <>
            <Liste
              punkte={[
                <><strong>Mittagessen umbauen:</strong> eine Handfläche Eiweiß, die Hälfte des Tellers Gemüse, Kohlenhydrate als Beilage.</>,
                <><strong>Koffein-Grenze:</strong> der letzte Kaffee spätestens um 13 Uhr.</>,
                <><strong>Zehn Minuten gehen</strong> nach dem Mittagessen. Das glättet den Blutzuckeranstieg messbar.</>,
              ]}
            />
            <Absatz>
              Probier das eine Woche lang konsequent aus und beobachte, wie sich der Nachmittag
              verändert. Wenn sich wenig tut, lohnt sich der Blick auf deine Werte.
            </Absatz>
          </>
        ),
      },
    ],
  },
  {
    slug: 'blutwerte-maenner-ab-30',
    titel: 'Diese Blutwerte sollten Männer ab 30 kennen',
    beschreibung:
      'Das Standard-Blutbild beim Hausarzt sagt wenig über deine Leistungsfähigkeit. Welche Werte ich mir bei meinen Klienten anschaue und warum.',
    kategorie: 'Blutanalyse',
    datum: '2026-09-10',
    lesezeit: 8,
    abschnitte: [
      {
        id: 'warum',
        titel: 'Warum das Standard-Blutbild nicht reicht',
        inhalt: (
          <>
            <Absatz>
              Das kleine Blutbild beim Hausarzt ist dafür gemacht, Krankheiten zu erkennen. Für die
              Frage, warum du trotz vernünftigem Lebensstil wenig Energie hast oder Körperfett nicht
              reduzierst, ist es zu grob.
            </Absatz>
            <Absatz>
              Dazu kommt: Ein Wert im Referenzbereich heißt nur, dass er bei den meisten Menschen so
              vorkommt. Ob er für deine Leistungsfähigkeit passt, ist eine andere Frage.
            </Absatz>
            <Hinweis titel="Zur Einordnung">
              Ich bin Chemiker, kein Arzt. Die Analysen macht ein externes Labor. Auffällige Werte
              besprichst du mit deiner Ärztin oder deinem Arzt.
            </Hinweis>
          </>
        ),
      },
      {
        id: 'stoffwechsel',
        titel: 'Stoffwechsel: HbA1c und Nüchterninsulin',
        inhalt: (
          <>
            <Absatz>
              Der HbA1c zeigt, wie hoch dein Blutzucker im Schnitt der letzten Wochen war. Das
              Nüchterninsulin verrät, wie viel Insulin dein Körper braucht, um ihn dort zu halten.
              Zusammen zeigen beide früh, ob dein Stoffwechsel anfängt, träge zu werden, oft Jahre
              bevor ein Arzt von Diabetes spricht.
            </Absatz>
          </>
        ),
      },
      {
        id: 'hormone',
        titel: 'Hormone: Testosteron und Schilddrüse',
        inhalt: (
          <>
            <Absatz>
              Testosteron beeinflusst Antrieb, Muskelaufbau und Körperfettverteilung. Bei Männern
              ab 30 sinkt es langsam, bei Schlafmangel und Dauerstress deutlich stärker.
            </Absatz>
            <Absatz>
              Die Schilddrüse (TSH, bei Bedarf fT3 und fT4) steuert, wie viel Energie dein Körper
              umsetzt. Eine leichte Unterfunktion fühlt sich an wie ständige Müdigkeit.
            </Absatz>
          </>
        ),
      },
      {
        id: 'mikronaehrstoffe',
        titel: 'Mikronährstoffe: Vitamin D, Ferritin, B12',
        inhalt: (
          <>
            <Liste
              punkte={[
                <><strong>Vitamin D:</strong> in Deutschland von Oktober bis März bei vielen zu niedrig. Wichtig für Immunsystem, Muskulatur und Stimmung.</>,
                <><strong>Ferritin:</strong> der Eisenspeicher. Zu wenig bedeutet weniger Sauerstofftransport und früher Erschöpfung.</>,
                <><strong>Vitamin B12:</strong> relevant für Nerven und Blutbildung, besonders bei wenig tierischen Lebensmitteln.</>,
              ]}
            />
          </>
        ),
      },
      {
        id: 'entzuendung',
        titel: 'Entzündung: hs-CRP',
        inhalt: (
          <>
            <Absatz>
              Der hochsensitive CRP-Wert zeigt stille, dauerhafte Entzündung im Körper. Sie entsteht
              oft durch Bauchfett, schlechten Schlaf und Stress und bremst Regeneration und
              Fettstoffwechsel.
            </Absatz>
          </>
        ),
      },
      {
        id: 'einordnen',
        titel: 'Was du mit den Werten anfängst',
        inhalt: (
          <>
            <Absatz>
              Einzelne Werte sagen wenig. Interessant wird es, wenn man sie zusammen liest und mit
              deinem Alltag abgleicht: Wie schläfst du, wie isst du, wie viel bewegst du dich?
              Daraus ergeben sich meistens zwei, drei Hebel, die mehr bringen als zwanzig
              allgemeine Tipps.
            </Absatz>
            <Absatz>
              Und: Ein Blutbild ist eine Momentaufnahme. Den eigentlichen Wert hat erst die zweite
              Messung nach einigen Monaten, weil sie zeigt, ob die Veränderungen wirken.
            </Absatz>
          </>
        ),
      },
    ],
  },
  {
    slug: 'koerperfett-reduzieren-voller-kalender',
    titel: 'Körperfett reduzieren mit vollem Kalender: Was wirklich zählt',
    beschreibung:
      'Die meisten Pläne sind für ein Leben ohne Termine gemacht. Worauf es ankommt, wenn du 50 Stunden die Woche arbeitest und trotzdem deine Körperkomposition verändern willst.',
    kategorie: 'Körperkomposition',
    datum: '2026-08-27',
    lesezeit: 7,
    abschnitte: [
      {
        id: 'warum-plaene-scheitern',
        titel: 'Warum die meisten Pläne scheitern',
        inhalt: (
          <>
            <Absatz>
              Sechs Mahlzeiten am Tag, fünf Trainingseinheiten pro Woche, alles abgewogen. Auf dem
              Papier funktioniert das. In einer Woche mit Geschäftsreise, Kinderbetreuung und
              Abendterminen hält es keine drei Tage.
            </Absatz>
            <Absatz>
              Der Plan scheitert dann nicht an dir, sondern daran, dass er deinen Alltag nicht
              kennt. Ein guter Plan richtet sich nach deinem Kalender, nicht umgekehrt.
            </Absatz>
          </>
        ),
      },
      {
        id: 'eiweiss',
        titel: 'Eiweiß zuerst',
        inhalt: (
          <>
            <Absatz>
              Wenn ich nur eine Sache ändern dürfte, wäre es die Eiweißmenge. Eiweiß sättigt am
              längsten, schützt Muskulatur, während Körperfett sinkt, und stabilisiert den
              Blutzucker.
            </Absatz>
            <Hinweis titel="Faustregel">
              Pro Mahlzeit eine Portion Eiweiß in der Größe deiner Handfläche. Das reicht für den
              Anfang und lässt sich auch im Restaurant umsetzen.
            </Hinweis>
          </>
        ),
      },
      {
        id: 'struktur',
        titel: 'Struktur statt Verzicht',
        inhalt: (
          <>
            <Absatz>
              Feste Essenszeiten und zwei, drei Standardmahlzeiten, die du ohne Nachdenken
              zusammenstellen kannst, bringen mehr als jede Verbotsliste. Entscheidungen kosten
              Energie, und davon hast du nach einem langen Arbeitstag wenig übrig.
            </Absatz>
          </>
        ),
      },
      {
        id: 'bewegung',
        titel: 'Bewegung im Alltag unterschätzt',
        inhalt: (
          <>
            <Absatz>
              Zwei Krafteinheiten pro Woche sind eine gute Basis. Mindestens genauso wichtig ist die
              Bewegung außerhalb des Trainings: Schritte, Treppen, Telefonate im Gehen. Sie macht
              über die Woche einen größeren Teil des Energieverbrauchs aus als das Training selbst.
            </Absatz>
          </>
        ),
      },
      {
        id: 'schlaf-stress',
        titel: 'Schlaf und Stress: die stillen Bremsen',
        inhalt: (
          <>
            <Absatz>
              Dauerhaft erhöhtes Cortisol und zu wenig Schlaf erhöhen den Hunger und fördern die
              Einlagerung von Bauchfett. Wer hier nichts verändert, kämpft beim Essen gegen den
              eigenen Hormonhaushalt.
            </Absatz>
          </>
        ),
      },
      {
        id: 'messen',
        titel: 'Verlauf statt Momentaufnahme',
        inhalt: (
          <>
            <Absatz>
              Das Gewicht schwankt täglich um ein bis zwei Kilo, vor allem durch Wasser. Wiege dich
              deshalb mehrmals pro Woche zur gleichen Zeit und schau auf den Wochenschnitt. Dazu
              alle zwei Wochen der Bauchumfang. Die Richtung über Wochen sagt mehr als jeder
              einzelne Wert.
            </Absatz>
          </>
        ),
      },
    ],
  },
  {
    slug: 'schlaf-als-leistungsfaktor',
    titel: 'Schlaf als Leistungsfaktor: Was nachts in deinem Körper passiert',
    beschreibung:
      'Schlaf ist die Zeit, in der dein Körper regeneriert, Hormone reguliert und Erlebtes verarbeitet. Warum sechs Stunden auf Dauer nicht reichen und wie du deinen Schlaf verbesserst.',
    kategorie: 'Regeneration',
    datum: '2026-08-13',
    lesezeit: 5,
    abschnitte: [
      {
        id: 'was-passiert',
        titel: 'Was nachts passiert',
        inhalt: (
          <>
            <Absatz>
              Im Tiefschlaf repariert der Körper Gewebe und schüttet Wachstumshormon aus. Im
              REM-Schlaf verarbeitet das Gehirn, was am Tag passiert ist. Beide Phasen wechseln sich
              in Zyklen von etwa 90 Minuten ab. Wer kürzer schläft, verliert vor allem die späten
              Zyklen.
            </Absatz>
          </>
        ),
      },
      {
        id: 'hormone',
        titel: 'Schlaf und Hormone',
        inhalt: (
          <>
            <Absatz>
              Schon wenige Nächte mit zu wenig Schlaf senken bei Männern messbar den
              Testosteronspiegel. Gleichzeitig steigen Ghrelin, das Hungerhormon, und Cortisol. Das
              Ergebnis kennst du: mehr Appetit auf Kalorienreiches, weniger Antrieb.
            </Absatz>
          </>
        ),
      },
      {
        id: 'routine',
        titel: 'Eine Abendroutine, die funktioniert',
        inhalt: (
          <>
            <Liste
              punkte={[
                'Feste Aufstehzeit, auch am Wochenende. Sie stabilisiert den Rhythmus stärker als die Zubettgehzeit.',
                'Letzte größere Mahlzeit zwei bis drei Stunden vor dem Schlafen.',
                'Eine Stunde vor dem Schlafen gedimmtes Licht und keine Mails mehr.',
                'Schlafzimmer kühl und dunkel, etwa 17 bis 19 Grad.',
              ]}
            />
            <Zitat>Guter Schlaf beginnt nicht abends, sondern mit dem Licht am Morgen.</Zitat>
          </>
        ),
      },
      {
        id: 'messen',
        titel: 'Messen, ohne verrückt zu werden',
        inhalt: (
          <>
            <Absatz>
              Wearables liefern nützliche Trends, aber keine exakten Schlafphasen. Nutze sie für den
              Verlauf über Wochen, nicht für die Bewertung einer einzelnen Nacht. Das beste Maß
              bleibt die Frage: Wie fit fühlst du dich eine Stunde nach dem Aufstehen?
            </Absatz>
          </>
        ),
      },
    ],
  },
]

/** Neueste zuerst */
export function alleArtikel(): Artikel[] {
  return [...artikel].sort((a, b) => b.datum.localeCompare(a.datum))
}

export function findeArtikel(slug: string): Artikel | undefined {
  return artikel.find((a) => a.slug === slug)
}

/** Weitere Ratgeber fuer das Ende eines Artikels: die neuesten, ohne den aktuellen */
export function weitereArtikel(slug: string, anzahl = 3): Artikel[] {
  return alleArtikel().filter((a) => a.slug !== slug).slice(0, anzahl)
}

export function formatiereDatum(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}
