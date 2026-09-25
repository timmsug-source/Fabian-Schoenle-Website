import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CALENDLY_URL, SITE_NAME, SITE_URL } from '@/lib/constants'
import LandingFallstudien from '@/components/sections/LandingFallstudien'
import LandingVideo from '@/components/sections/LandingVideo'
import ScrollUnterstrich from '@/components/ui/ScrollUnterstrich'
import LandingFormular from '@/components/sections/LandingFormular'
import KundenReihe from '@/components/ui/KundenReihe'

/**
 * Landingpage für bezahlte Werbung (Meta). Läuft ohne Navigation — siehe
 * OHNE_NAVIGATION in app/layout.tsx.
 *
 * Bewusst hart auf `noindex, nofollow`: Werbeseiten gehören nicht in den Index.
 * Sie hätten sonst dieselben Suchbegriffe wie die Startseite, ohne deren Tiefe,
 * und würden ihr Konkurrenz machen. Deshalb hier fest gesetzt und nicht über
 * buildMetadata — UNTERSEITEN_NOINDEX kann irgendwann aufgehoben werden, diese
 * Seite soll trotzdem draußen bleiben.
 */
export const metadata: Metadata = {
  title: { absolute: `Kostenlose Performance-Analyse | ${SITE_NAME}` },
  description:
    'Datenbasiertes Coaching für Männer ab 30. Sichere dir eine kostenlose Performance-Analyse und finde heraus, welche Hebel bei dir wirklich zählen.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/danke` },
}

const bausteine = [
  <>Wir schauen gemeinsam an, <strong>was deine Leistungsfähigkeit gerade begrenzt</strong>.</>,
  <>Nicht zwanzig Baustellen, sondern <strong>die zwei, drei Stellschrauben</strong>, die bei dir den Unterschied machen.</>,
  <>Du gehst mit <strong>konkreten nächsten Schritten</strong> aus dem Gespräch — unabhängig davon, ob wir zusammenarbeiten.</>,
]

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Markierung hinter einer Textstelle: ein Streifen genau so hoch wie die
 * Grossbuchstaben, im selben Goldverlauf wie die hervorgehobenen Woerter der
 * uebrigen Ueberschriften (siehe goldText).
 *
 * Der Verlauf laeuft mit 88 Prozent Deckkraft, sodass der dunkle Seitengrund
 * durchscheint — dieselben zwei Farbwerte wie goldText, nur nicht deckend.
 *
 * Die Schrift darauf bleibt weiss. Auf Gold ist das kontrastarm, weshalb ein
 * weicher dunkler Schatten die Buchstaben von der Flaeche abhebt. Die
 * Transparenz hilft hier zusaetzlich: Der abgedunkelte Ton traegt weisse
 * Schrift besser als das volle Gold.
 *
 * Hoehe und Sitz kommen ueber `backgroundSize` und `backgroundPosition` in em,
 * nicht ueber Innenabstand. Zwei Gruende: Innenabstand vergroessert die
 * Hintergrundflaeche ueber die Zeile hinaus, wodurch die Balken zweier Zeilen
 * aneinanderstossen. Und em bezieht sich auf die Schriftgroesse, sodass der
 * Streifen bei jeder Textgroesse gleich zur Schrift sitzt — auf dem Handy wie
 * auf dem Bildschirm.
 *
 * 0.86em Hoehe reicht von der Oberkante der Grossbuchstaben bis zur Grundlinie
 * von Barlow Condensed, 0.2em Abstand von oben setzt ihn dort an. Unterlaengen
 * (etwa beim Komma) stehen bewusst ueber — so macht es ein Marker auch.
 *
 * `boxDecorationBreak: clone` gibt jeder Zeile ihren eigenen Streifen statt
 * eines durchgehenden Bands ueber den Umbruch hinweg.
 */
const markerText = {
  backgroundImage: 'linear-gradient(rgba(201,168,76,0.88), rgba(232,212,154,0.88))',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 0.86em',
  backgroundPosition: '0 0.2em',
  color: '#FFFFFF',
  textShadow: '0 1px 3px rgba(6,14,31,0.5)',
  padding: '0 0.18em',
  margin: '0 -0.1em',
  boxDecorationBreak: 'clone',
  WebkitBoxDecorationBreak: 'clone',
} as const

function Haken({ id }: { id: string }) {
  return (
    /* Gleiche Form wie die Haken im Hero der Startseite */
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="flex-shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon
        points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38"
        fill={`url(#${id})`}
      />
    </svg>
  )
}

function CtaKnopf({ label = 'Kostenlose Performance-Analyse sichern' }: { label?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-metal inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-inter font-semibold text-sm md:text-base transition-transform"
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export default function DankePage() {
  return (
    <div style={{ background: '#060E1F' }}>

      <div className="relative overflow-hidden">
        {/* Gitter, Diagonalen und Lichtschein wie im Hero der Startseite. Die
            Maske blendet das Muster nach unten aus, damit es in den Seiten-
            hintergrund uebergeht statt hart abzubrechen. */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dk-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
            </pattern>
            <pattern id="dk-diagonal" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
            </pattern>
            <radialGradient id="dk-glow-left" cx="20%" cy="20%" r="55%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
              <stop offset="60%" stopColor="rgba(201,168,76,0.05)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <radialGradient id="dk-glow-right" cx="85%" cy="10%" r="40%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.1)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            {/* Blendet erst im letzten Viertel aus — bei 60 Prozent begann der
                Verlauf schon auf Höhe des Videos und das Raster war im halben
                Hero nicht mehr zu sehen. */}
            <linearGradient id="dk-grid-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="82%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="dk-fade-mask">
              <rect width="100%" height="100%" fill="url(#dk-grid-fade)" />
            </mask>
          </defs>
          <g mask="url(#dk-fade-mask)">
            <rect width="100%" height="100%" fill="url(#dk-grid)" />
            <rect width="100%" height="100%" fill="url(#dk-diagonal)" />
          </g>
          <rect width="100%" height="100%" fill="url(#dk-glow-left)" />
          <rect width="100%" height="100%" fill="url(#dk-glow-right)" />
        </svg>

      {/* Kopf: nur das Logo, keine Navigation */}
      <header className="relative pt-10 pb-2 flex justify-center">
        {/* Absichtlich ohne Verweis auf die Startseite: Auf einer Werbeseite
            ist jeder Link ein Ausstiegspunkt. */}
        <div className="flex items-center gap-3">
          {/* Freigestellte Fassung — steht direkt auf dem dunklen Grund, deshalb
              ohne Rundung. Die Datei ist nur 60x60 gross; sobald eine groessere
              vorliegt, hier tauschen. */}
          <Image
            src="/images/FS-Logo-60x60-transparenter-Hintergrund.png"
            alt=""
            width={60}
            height={60}
            className="object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-barlow font-semibold text-lg tracking-wide" style={{ color: '#E6E8EB' }}>
              Fabian Schönle
            </span>
            <span
              className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] mt-0.5"
              style={goldText}
            >
              {SITE_NAME}
            </span>
          </span>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16 md:pb-24">
        <h1 className="font-barlow font-bold text-3xl md:text-5xl leading-[1.45] text-center max-w-5xl mx-auto mb-12 md:mb-16" style={{ color: '#E6E8EB' }}>
          {/* Setzt fort, was /danke2 versprochen hat: Dort ging es um die 12 kg
              in 4 Monaten, hier kommt die Einlösung. Deshalb keine Wiederholung
              der Zusage, sondern der nächste Schritt — im selben Format und mit
              derselben Markierung. */}
          Dein Video ist freigeschaltet:{' '}
          <span style={markerText}>So funktioniert das System</span> hinter den 12 kg, und so
          sieht dein erster Schritt aus
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <LandingVideo />

          <div>
            <p className="font-inter text-base md:text-lg leading-relaxed mb-8" style={{ color: '#C6CDD5' }}>
              Schau dir das Video in Ruhe an. Wenn du danach wissen willst, welche Hebel bei dir
              konkret zählen, sicher dir deine kostenlose Performance-Analyse.
            </p>

            <CtaKnopf />

            <p className="font-inter text-sm mt-5 mb-7" style={{ color: '#7B8792' }}>
              Call mit mir persönlich · 20 Minuten · unverbindlich
            </p>

            <KundenReihe />
          </div>
        </div>
      </section>
      </div>

      {/* Was in der Analyse passiert */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight text-center mb-12 md:mb-16" style={{ color: '#E6E8EB' }}>
          <ScrollUnterstrich>
            Was du in der <span style={goldText}>Performance-Analyse</span> bekommst
          </ScrollUnterstrich>
        </h2>

        <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
          {bausteine.map((text, i) => (
            <li key={i} className="leistung-card karte-glow rounded-2xl p-7 flex items-start gap-4">
              <Haken id={`baustein-haken-${i}`} />
              <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <LandingFallstudien
        headline="Das sagen meine Kunden"
        fallstudien={[
          {
            name: 'Robert',
            ueberschrift: '−14 kg in 5 Monaten',
            rolle: '42 Jahre · Projektleiter, nebenbei Finanzberatung',
            portrait: '/images/kunde-robert.png',
            link: 'https://www.linkedin.com/in/robert-raschkov-045889230/',
            video: '/videos/Robert_Testimonial_final.mp4',
            ergebnisse: [
              'Von 98 auf 84 kg — ohne Hungern oder Verzicht',
              'Stabile Energie über den ganzen Tag, ohne Koffein-Spitzen',
              'Klarer Kopf bis in den Abend statt Einbruch am Nachmittag',
            ],
          },
          {
            name: 'Richard',
            ueberschrift: '−13,5 kg in 10 Wochen',
            rolle: '36 Jahre · Gründer · Familienvater von zwei Kindern',
            portrait: '/images/kunde-richard.png',
            link: 'https://www.linkedin.com/in/richard-mueller/',
            video: '/videos/Richard_Testimonial_kurz.mp4',
            ergebnisse: [
              'Von 106 auf 92,5 kg — trotz Familie und eigener Firma',
              'Volle Energie von früh bis abends statt Leere ab 20 Uhr',
              'Die Ernährung der ganzen Familie hat sich mitverändert',
            ],
          },
          {
            name: 'Axel',
            ueberschrift: '−11 kg und endlich wieder Muskelaufbau',
            rolle: '38 Jahre · Selbstständiger Unternehmer',
            portrait: '/images/kunde-axel.png',
            link: 'https://www.linkedin.com/in/axelkrupp1968/',
            bild: '/images/19d177bf-4006-4bc2-8fb4-b7e6f8c9719e.jpg',
            ergebnisse: [
              'Von 91 auf 80 kg — nach Jahren ohne Fortschritt',
              'Sichtbarer Muskelaufbau nach 18 Monaten ohne Fortschritt',
              'Tiefer Schlaf und stabiler Antrieb statt Stimmungsschwankungen',
            ],
          },
        ]}
      />

      <LandingFormular />

      {/* Pflichtangaben — schlank statt vollem Footer */}
      <footer className="px-4 md:px-8 py-10" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs" style={{ color: '#5B6773' }}>
            © {new Date().getFullYear()} {SITE_NAME} — Fabian Schönle
          </p>
          <div className="flex gap-6 font-inter text-xs" style={{ color: '#7B8792' }}>
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
