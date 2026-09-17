import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { getSiteContent } from '@/lib/cms'
import { cms, txt } from '@/lib/cms-text'
import { Rich } from '@/components/Rich'

// CMS-Änderungen erscheinen automatisch (ISR, alle 60s)
export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent()
  return buildMetadata({
    title: txt(content, 'seo_impressum_titel', 'Impressum | FS Performance Lab'),
    description: txt(content, 'seo_impressum_beschreibung', 'Impressum und rechtliche Angaben von Fabian Schönle — Coaching mit FuelByFabian.'),
    slug: 'impressum',
  })
}

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 {...cms(id)} className="font-barlow font-bold text-2xl md:text-3xl mt-12 mb-4" style={{ color: '#E6E8EB' }}>{children}</h2>
)
const H3 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h3 {...cms(id)} className="font-barlow font-semibold text-lg md:text-xl mt-8 mb-2" style={{ color: '#E6E8EB' }}>{children}</h3>
)
/** Absatz aus dem CMS — als HTML, damit Hervorhebungen (<strong> usw.) möglich sind. */
const P = ({ id, html }: { id: string; html: string }) => (
  <Rich as="p" className="font-inter text-sm md:text-base leading-relaxed mb-4" style={{ color: '#A6B0BA' }} cms={id} html={html} />
)

export default async function ImpressumPage() {
  const content = await getSiteContent()
  const telefon = txt(content, 'impressum_telefon', '0159 01603800')
  const email = txt(content, 'impressum_email', 'coaching@fabianschoenle.de')
  // Link aus dem angezeigten Text ableiten: nur Ziffern und +, deutsche Vorwahl
  // international ("0159 …" → "+49159…"), damit der Link auch aus dem Ausland wählt.
  const telefonLink = telefon.replace(/[^\d+]/g, '').replace(/^00/, '+').replace(/^0/, '+49')

  return (
    <main style={{ background: '#060E1F', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8" style={{ paddingTop: 140, paddingBottom: 120 }}>
        <p {...cms('impressum_label')} className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          {txt(content, 'impressum_label', 'Rechtliches')}
        </p>
        <h1 {...cms('impressum_titel')} className="font-barlow font-bold text-4xl md:text-5xl mb-8" style={{ color: '#E6E8EB' }}>{txt(content, 'impressum_titel', 'Impressum')}</h1>

        <p {...cms('impressum_angaben')} className="font-inter text-sm md:text-base leading-relaxed mb-4" style={{ color: '#A6B0BA' }}>{txt(content, 'impressum_angaben', 'Angaben gemäß § 5 DDG & § 18 MStV:')}</p>

        <div className="font-inter text-sm md:text-base leading-relaxed mb-8" style={{ color: '#E6E8EB' }}>
          <p {...cms('impressum_name')} className="font-semibold">{txt(content, 'impressum_name', 'Fabian Schönle')}</p>
          <p {...cms('impressum_firma')} style={{ color: '#A6B0BA' }}>{txt(content, 'impressum_firma', 'Coaching mit FuelByFabian')}</p>
          <p {...cms('impressum_strasse')} style={{ color: '#A6B0BA' }}>{txt(content, 'impressum_strasse', 'Werderstraße 59')}</p>
          <p {...cms('impressum_ort')} style={{ color: '#A6B0BA' }}>{txt(content, 'impressum_ort', '76137 Karlsruhe')}</p>
        </div>

        <H3 id="impressum_kontakt_titel">{txt(content, 'impressum_kontakt_titel', 'Kontakt')}</H3>
        <div className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
          <p><span {...cms('impressum_telefon_label')}>{txt(content, 'impressum_telefon_label', 'Telefon:')}</span> <a {...cms('impressum_telefon')} href={`tel:${telefonLink}`} className="hover:text-white transition-colors">{telefon}</a></p>
          <p><span {...cms('impressum_email_label')}>{txt(content, 'impressum_email_label', 'E-Mail:')}</span> <a {...cms('impressum_email')} href={`mailto:${email.trim()}`} className="hover:text-white transition-colors">{email}</a></p>
        </div>

        <H2 id="impressum_haftung_titel">{txt(content, 'impressum_haftung_titel', 'Haftungsausschluss (Disclaimer)')}</H2>

        <H3 id="impressum_inhalte_titel">{txt(content, 'impressum_inhalte_titel', 'Haftung für Inhalte')}</H3>
        <P
          id="impressum_inhalte_text"
          html={txt(content, 'impressum_inhalte_text', 'Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.')}
        />

        <H3 id="impressum_links_titel">{txt(content, 'impressum_links_titel', 'Haftung für Links')}</H3>
        <P
          id="impressum_links_text"
          html={txt(content, 'impressum_links_text', 'Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.')}
        />

        <H3 id="impressum_urheberrecht_titel">{txt(content, 'impressum_urheberrecht_titel', 'Urheberrecht')}</H3>
        <P
          id="impressum_urheberrecht_text"
          html={txt(content, 'impressum_urheberrecht_text', 'Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.')}
        />
      </div>
    </main>
  )
}
