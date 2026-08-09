import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Impressum | FS Performance Lab',
  description: 'Impressum und rechtliche Angaben von Fabian Schönle — Coaching mit FuelByFabian.',
  slug: 'impressum',
})

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-barlow font-bold text-2xl md:text-3xl mt-12 mb-4" style={{ color: '#E6E8EB' }}>{children}</h2>
)
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-barlow font-semibold text-lg md:text-xl mt-8 mb-2" style={{ color: '#E6E8EB' }}>{children}</h3>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-inter text-sm md:text-base leading-relaxed mb-4" style={{ color: '#A6B0BA' }}>{children}</p>
)

export default function ImpressumPage() {
  return (
    <main style={{ background: '#060E1F', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-4 md:px-8" style={{ paddingTop: 140, paddingBottom: 120 }}>
        <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Rechtliches
        </p>
        <h1 className="font-barlow font-bold text-4xl md:text-5xl mb-8" style={{ color: '#E6E8EB' }}>Impressum</h1>

        <P>Angaben gemäß § 5 DDG &amp; § 18 MStV:</P>

        <div className="font-inter text-sm md:text-base leading-relaxed mb-8" style={{ color: '#E6E8EB' }}>
          <p className="font-semibold">Fabian Schönle</p>
          <p style={{ color: '#A6B0BA' }}>Coaching mit FuelByFabian</p>
          <p style={{ color: '#A6B0BA' }}>Werderstraße 59</p>
          <p style={{ color: '#A6B0BA' }}>76137 Karlsruhe</p>
        </div>

        <H3>Kontakt</H3>
        <div className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
          <p>Telefon: <a href="tel:+4915901603800" className="hover:text-white transition-colors">0159 01603800</a></p>
          <p>E-Mail: <a href="mailto:coaching@fabianschoenle.de" className="hover:text-white transition-colors">coaching@fabianschoenle.de</a></p>
        </div>

        <H2>Haftungsausschluss (Disclaimer)</H2>

        <H3>Haftung für Inhalte</H3>
        <P>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        </P>

        <H3>Haftung für Links</H3>
        <P>
          Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </P>

        <H3>Urheberrecht</H3>
        <P>
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
        </P>
      </div>
    </main>
  )
}
