import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Datenschutz | FS Performance Lab',
  description: 'Datenschutzerklärung von Fabian Schönle — Coaching mit FuelByFabian.',
  slug: 'datenschutz',
})

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-barlow font-bold text-xl md:text-2xl mt-10 mb-3" style={{ color: '#E6E8EB' }}>{children}</h2>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-inter text-sm md:text-base leading-relaxed mb-4" style={{ color: '#A6B0BA' }}>{children}</p>
)

export default function DatenschutzPage() {
  return (
    <main style={{ background: '#060E1F', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8" style={{ paddingTop: 140, paddingBottom: 120 }}>
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Rechtliches
        </p>
        <h1 className="font-barlow font-bold text-4xl md:text-5xl mb-8" style={{ color: '#E6E8EB' }}>Datenschutz</h1>

        <H2>1. Allgemeine Hinweise</H2>
        <P>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </P>

        <H2>2. Verantwortliche Stelle</H2>
        <P>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Zur Wahrnehmung von Datenschutzrechten ist sich direkt bei ihm zu melden.
        </P>

        <H2>3. Wie erfassen wir Ihre Daten?</H2>
        <P>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </P>
        <P>
          Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten. Die Datenverarbeitung erfolgt auf Basis von Art. 6 DSGVO.
        </P>

        <H2>4. Wofür nutzen wir Ihre Daten?</H2>
        <P>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden.
        </P>

        <H2>5. Welche Daten erfassen wir?</H2>
        <P>
          Technische Daten: IP-Adresse, Browsertyp, Besuchszeit (automatisch durch den Server erfasst).
          Daten, die du uns gibst: Name, E-Mail-Adresse (z. B. bei Kontaktformularen).
        </P>

        <H2>6. Cookies und Einwilligung</H2>
        <P>
          Diese Website setzt von sich aus nur ein einziges Cookie: Es speichert deine Entscheidung
          über die Cookie-Leiste, damit du nicht bei jedem Besuch erneut gefragt wirst. Es enthält
          deine Auswahl, den Zeitpunkt und eine Versionsnummer, ist ein Jahr gültig und technisch
          notwendig (Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG).
        </P>
        <P>
          Alle weiteren Cookies werden ausschließlich mit deiner Einwilligung gesetzt (Art. 6 Abs. 1
          lit. a DSGVO, § 25 Abs. 1 TTDSG). Du kannst deine Entscheidung jederzeit über den Link
          „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen — der Widerruf wirkt für die
          Zukunft. Lehnst du ab, bleibt die Website vollständig nutzbar.
        </P>

        <H2>7. Google Analytics</H2>
        <P>
          Zur Reichweitenmessung nutze ich Google Analytics 4, einen Dienst der Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland. Analytics wird{' '}
          <strong>erst geladen, nachdem du in die Kategorie „Statistik“ eingewilligt hast</strong>.
          Ohne Einwilligung wird kein Google-Skript geladen und keine Verbindung zu Google
          hergestellt.
        </P>
        <P>
          Erhoben werden dabei unter anderem aufgerufene Seiten, Verweildauer, ungefährer Standort,
          Gerätetyp und Herkunftsquelle. Google kürzt IP-Adressen innerhalb der EU vor jeder
          weiteren Verarbeitung. Eine Übermittlung in die USA lässt sich nicht ausschließen; Google
          stützt sich hierfür auf das EU-US Data Privacy Framework. Rechtsgrundlage ist deine
          Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Mit Google besteht ein
          Vertrag zur Auftragsverarbeitung.
        </P>
        <P>
          Widerrufst du die Einwilligung über die Cookie-Einstellungen, werden die von Google
          gesetzten Cookies gelöscht und es findet keine weitere Messung statt.
        </P>

        <H2>8. Terminbuchung über Calendly</H2>
        <P>
          Für die Terminvereinbarung nutze ich Calendly (Calendly LLC, 271 17th St NW, Atlanta, GA
          30363, USA). Der Kalender wird <strong>nicht automatisch geladen</strong>: Auf der Seite
          siehst du zunächst nur einen Platzhalter. Erst wenn du auf „Kalender laden“ klickst, wird
          eine Verbindung zu Calendly aufgebaut und dabei deine IP-Adresse übertragen. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertragsverhältnisses) beziehungsweise
          deine durch den Klick erklärte Einwilligung.
        </P>

        <H2>9. Videos von YouTube</H2>
        <P>
          Eingebundene Videos stammen von YouTube (Google Ireland Limited). Sie werden im erweiterten
          Datenschutzmodus über youtube-nocookie.com ausgeliefert und ebenfalls erst nach einem Klick
          geladen. Die Vorschaubilder liegen auf meinem eigenen Server — beim bloßen Aufruf der Seite
          entsteht dadurch keine Verbindung zu Google.
        </P>

        <H2>10. Kontaktformular</H2>
        <P>
          Wenn du mir über das Formular schreibst, werden Name, E-Mail-Adresse, gegebenenfalls
          Telefonnummer und deine Angaben zur Anfrage verarbeitet, um dir antworten zu können. Der
          Versand läuft über Resend (Resend, Inc., USA) als Auftragsverarbeiter. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald sie für die Beantwortung
          nicht mehr erforderlich sind.
        </P>

        <H2>11. Deine Rechte</H2>
        <P>Du hast das Recht auf:</P>
        <ul className="font-inter text-sm md:text-base leading-relaxed mb-4 list-disc pl-6 flex flex-col gap-1" style={{ color: '#A6B0BA' }}>
          <li>Auskunft über deine gespeicherten Daten</li>
          <li>Löschung deiner Daten, falls sie nicht mehr benötigt werden</li>
          <li>Widerspruch gegen die Nutzung deiner Daten</li>
        </ul>
      </div>
    </main>
  )
}
