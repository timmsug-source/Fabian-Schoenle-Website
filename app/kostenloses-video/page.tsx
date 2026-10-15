import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import LandingOptIn from '@/components/sections/LandingOptIn'
import { GoldHervorhebung } from '@/components/ui/GoldAkzente'

/**
 * Erste Seite der Werbestrecke: Überschrift, Vorschau auf das Video, Knopf,
 * darunter, was im Video steckt, und wer dahintersteht. Wer aus einer
 * Anzeige kommt, entscheidet hier in Sekunden, ob er weiterliest. Alles Weitere
 * (Video, Fallstudien, Termin) steht auf /danke, wohin das Formular führt.
 *
 * Kein Countdown und keine Verknappung: Das Video bleibt kostenlos, ein
 * künstlicher Stichtag würde dem Ton der übrigen Seite widersprechen.
 *
 * Läuft ohne Navigation — siehe OHNE_NAVIGATION in app/layout.tsx.
 *
 * Bewusst hart auf `noindex, nofollow`, wie /danke: Werbeseiten gehören nicht
 * in den Index, sie würden der Startseite mit denselben Suchbegriffen
 * Konkurrenz machen.
 */
export const metadata: Metadata = {
  title: { absolute: `Kostenloses Video: 10 bis 20 Kilo mit vollem Kalender | ${SITE_NAME}` },
  description:
    'Wie Männer mit vollem Kalender 10 bis 20 Kilo abnehmen und wieder Energie für sich und ihre Liebsten haben. Kostenloses Video, ca. 12 Minuten.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/kostenloses-video` },
}

/**
 * Knopf und Vorschau öffnen das Formular als Popup. Erst nach dem Absenden
 * geht es auf /danke — so ist der Kontakt da, auch wenn danach niemand mehr
 * weiterklickt.
 */
const NACH_DEM_ABSENDEN = '/danke'

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

const imVideo = [
  'warum es bisher trotz Disziplin und Wissen nicht geklappt hat',
  'die FSP-Methode: wie Männer mit vollem Kalender Ernährung und Bewegung so einbauen, dass es auch in stressigen Wochen läuft',
  'warum „beim Arzt ist alles okay“ nicht heißt, dass du dich fit fühlst',
  'wie das bei dir aussehen kann, ohne Job, Freunde oder Familie zu vernachlässigen',
]

function Haken({ id }: { id: string }) {
  return (
    /* Gleiche Form wie die Haken im Hero der Startseite */
    <svg width="30" height="30" viewBox="0 0 38 38" fill="none" className="flex-shrink-0" aria-hidden="true">
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

/**
 * Knopf im Zuschnitt der Vorlage: eine breite, gefuellte Flaeche statt eines
 * schmalen Knopfes. Auf dem Handy laeuft er ueber die volle Breite, auf dem
 * Bildschirm bleibt er bei gut 560 Pixel stehen — daran, wie breit eine Flaeche
 * ist, misst sich auf einer Werbeseite, wie schwer sie zu uebersehen ist.
 *
 * Ohne Pfeil: Die Flaeche traegt nur den Satz, der Pfeil wuerde ihn aus der
 * Mitte schieben.
 */
export default function KostenlosesVideoPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: '#060E1F', minHeight: '100vh' }}>
      {/* Gitter, Diagonalen und Lichtschein wie auf /danke — beide Seiten sollen
          erkennbar zusammengehören. */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="d2-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
          </pattern>
          <pattern id="d2-diagonal" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="d2-glow-left" cx="20%" cy="20%" r="55%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
            <stop offset="60%" stopColor="rgba(201,168,76,0.05)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <radialGradient id="d2-glow-right" cx="85%" cy="10%" r="40%">
            <stop offset="0%" stopColor="rgba(201,168,76,0.1)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>
          <linearGradient id="d2-grid-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="82%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="d2-fade-mask">
            <rect width="100%" height="100%" fill="url(#d2-grid-fade)" />
          </mask>
        </defs>
        <g mask="url(#d2-fade-mask)">
          <rect width="100%" height="100%" fill="url(#d2-grid)" />
          <rect width="100%" height="100%" fill="url(#d2-diagonal)" />
        </g>
        <rect width="100%" height="100%" fill="url(#d2-glow-left)" />
        <rect width="100%" height="100%" fill="url(#d2-glow-right)" />
      </svg>

      {/* Kopf: nur das Logo, keine Navigation — jeder weitere Verweis wäre ein
          Ausstiegspunkt. */}
      <header className="relative pt-10 pb-2 flex justify-center">
        <div className="flex items-center gap-3">
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
            <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] mt-0.5" style={goldText}>
              {SITE_NAME}
            </span>
          </span>
        </div>
      </header>

      <section className="relative max-w-5xl mx-auto px-4 md:px-8 pt-8 pb-16 md:pt-10 md:pb-24 flex flex-col items-center text-center">
        {/* Überschrift = Titel des Videos, wortgleich auf /danke, mit derselben
            Hervorhebung an derselben Stelle. Bewusst ohne Dachzeile darüber —
            der Text folgt Fabians Vorlage wortgleich, und die hat keine.
            28 statt 30 Pixel auf dem Handy: So passt „Wie Männer mit vollem
            Kalender“ in eine Zeile, sonst stünde „Kalender“ allein. */}
        <h1 className="font-barlow font-bold text-[28px] md:text-5xl leading-[1.2] text-center max-w-5xl mx-auto mb-6" style={{ color: '#E6E8EB' }}>
          Wie Männer mit vollem Kalender <GoldHervorhebung>10 bis 20 Kilo abnehmen</GoldHervorhebung> und
          wieder Energie für sich und ihre Liebsten haben
        </h1>

        <p className="font-inter text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12" style={{ color: '#C6CDD5' }}>
          Ohne Radikaldiät, ohne 4x die Woche Gym und ohne bei Job oder Familie zurückzustecken.
        </p>

        {/* Vorschau mit dem Foto aus dem Video-Setup (Standbild aus vsl.mp4 in
            voller Auflösung — vsl-poster.jpg ist nur 720 Pixel breit). */}
        <LandingOptIn
          bildSrc="/images/lp-video-setup.jpg"
          bildAlt="Fabian Schönle am Schreibtisch in seinem Video-Setup"
          knopfLabel="Video jetzt kostenlos ansehen"
          knopfUnterzeile="Kostenlos · kein Abo notwendig"
          formular={{
            kartenLabel: 'Fast geschafft',
            kartenTitel: 'Kurz eintragen, dann startet das Video.',
            knopfLabel: 'Video ansehen',
            weiterLeitungZu: NACH_DEM_ABSENDEN,
            quelle: 'Video-Landingpage (Werbeanzeige)',
          }}
        />

        {/* Der Grund, sich einzutragen: was im Video steckt. */}
        <div className="w-full max-w-2xl mt-14 md:mt-16 text-left">
          <p className="font-barlow font-bold text-2xl md:text-3xl mb-6 text-center" style={{ color: '#E6E8EB' }}>
            Im Video erfährst du:
          </p>
          <ul className="flex flex-col gap-5">
            {imVideo.map((punkt, i) => (
              <li key={i} className="flex items-start gap-4">
                <Haken id={`im-video-haken-${i}`} />
                <span className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
                  {punkt}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Wer dahintersteht, in einer Zeile. */}
        <div className="flex items-center gap-4 mt-12 md:mt-14">
          <span
            className="relative rounded-full overflow-hidden flex-shrink-0"
            style={{ width: 52, height: 52, border: '2px solid rgba(201,168,76,0.5)' }}
          >
            <Image src="/images/fabian-rund.jpg" alt="Fabian Schönle" width={104} height={104} className="w-full h-full object-cover" />
          </span>
          <p className="font-inter text-sm md:text-base text-left" style={{ color: '#C6CDD5' }}>
            <span className="font-semibold" style={{ color: '#E6E8EB' }}>Fabian Schönle</span>
            {' · '}M.Sc. Chemie{' · '}über 30 Personen begleitet
          </p>
        </div>
      </section>

      {/* Pflichtangaben im Zuschnitt der Vorlage: untereinander und mittig,
          darunter die Klarstellung zu Meta. Sie gehoert auf jede Seite, auf die
          eine Anzeige fuehrt — sonst entsteht der Eindruck, die Werbung komme
          von Facebook selbst. */}
      <footer className="relative px-4 md:px-8 py-14" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-5">
          <Link href="/impressum" className="font-inter text-base font-semibold hover:text-white transition-colors" style={{ color: '#C6CDD5' }}>
            Impressum
          </Link>
          <Link href="/datenschutz" className="font-inter text-base font-semibold hover:text-white transition-colors" style={{ color: '#C6CDD5' }}>
            Datenschutz
          </Link>

          <p className="font-inter text-base leading-relaxed mt-4" style={{ color: '#7B8792' }}>
            Diese Seite gehört nicht zu Facebook und steht in keiner Verbindung zu Meta Platforms, Inc.
            Sie wird von Meta weder unterstützt noch geprüft. FACEBOOK ist eine Marke von Meta Platforms, Inc.
          </p>

          <p className="font-inter text-xs mt-2" style={{ color: '#5B6773' }}>
            © {new Date().getFullYear()} {SITE_NAME} — Fabian Schönle
          </p>
        </div>
      </footer>
    </div>
  )
}
