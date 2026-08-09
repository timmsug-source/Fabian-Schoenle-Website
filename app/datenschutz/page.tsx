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

        <H2>6. Cookies</H2>
        <P>
          Unsere Website nutzt Cookies, um die Nutzung zu verbessern. Du kannst diese in den Browsereinstellungen deaktivieren.
        </P>

        <H2>7. Deine Rechte</H2>
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
