import type { Metadata } from 'next'
import Image from 'next/image'
import { buildMetadata } from '@/lib/metadata'
import PersonSchema from '@/components/schema/PersonSchema'
import SocialSection from '@/components/sections/SocialSection'
import ZitatModul from '@/components/ui/ZitatModul'
import { CALENDLY_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Über Fabian Schönle — Performance Coach & Chemiker | FS Performance Lab',
  description:
    'Ich verbinde wissenschaftliche Präzision mit praktischer Umsetzung. Erfahre, wie mein Ansatz entstanden ist und für wen er gemacht ist.',
  slug: 'ueber-mich',
})

/* ---------------------------------------------------------------------------
   Bausteine der Startseite, hier eins zu eins übernommen, damit die Unterseite
   nicht wie eine fremde Seite wirkt: Goldlabel, Goldverlauf im Text und der
   Rasterhintergrund aus der Über-mich-Sektion der Startseite.
   --------------------------------------------------------------------------- */

const GOLD_TEXT = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={GOLD_TEXT}>
    {children}
  </p>
)

const Gold = ({ children }: { children: React.ReactNode }) => (
  <span style={GOLD_TEXT}>{children}</span>
)

/** Raster- und Diagonalmuster, oben und unten weich auslaufend. `id` muss je Sektion eindeutig sein. */
const Raster = ({ id }: { id: string }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id={`${id}-grid`} width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.095)" strokeWidth="1" />
      </pattern>
      <pattern id={`${id}-diag`} width="60" height="60" patternUnits="userSpaceOnUse">
        <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.055)" strokeWidth="1" />
      </pattern>
      <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="20%" stopColor="white" stopOpacity="1" />
        <stop offset="80%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask id={`${id}-mask`}>
        <rect width="100%" height="100%" fill={`url(#${id}-fade)`} />
      </mask>
    </defs>
    <g mask={`url(#${id}-mask)`}>
      <rect width="100%" height="100%" fill={`url(#${id}-grid)`} />
      <rect width="100%" height="100%" fill={`url(#${id}-diag)`} />
    </g>
  </svg>
)

/* --- Symbole der Profilzeile. Dieselben wie in der Über-mich-Sektion der Startseite. --- */

const IconGruender = (
  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="um-i1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C" /><stop offset="100%" stopColor="#E8D49A" /></linearGradient></defs>
    <circle cx="18" cy="15" r="9" stroke="url(#um-i1)" strokeWidth="3" />
    <path d="M12 22 L9 33 L18 29 L27 33 L24 22" stroke="url(#um-i1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconChemie = (
  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="um-i2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C" /><stop offset="100%" stopColor="#E8D49A" /></linearGradient></defs>
    <path d="M18 4 L4 11 L18 18 L32 11 Z" fill="url(#um-i2)" />
    <path d="M8 15 L8 24 C8 24 12 29 18 29 C24 29 28 24 28 24 L28 15" stroke="url(#um-i2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="32" y1="11" x2="32" y2="22" stroke="url(#um-i2)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="24" r="2.5" fill="url(#um-i2)" />
  </svg>
)

const IconPerformance = (
  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="um-i3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C" /><stop offset="100%" stopColor="#E8D49A" /></linearGradient></defs>
    <rect x="2" y="30" width="32" height="3" rx="1.5" fill="url(#um-i3)" />
    <rect x="2" y="4" width="3" height="26" rx="1.5" fill="url(#um-i3)" />
    <rect x="7" y="20" width="5" height="10" rx="2" fill="url(#um-i3)" />
    <rect x="15" y="13" width="5" height="17" rx="2" fill="url(#um-i3)" />
    <rect x="23" y="7" width="5" height="23" rx="2" fill="url(#um-i3)" />
  </svg>
)

const IconTriathlet = (
  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="um-i4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C" /><stop offset="100%" stopColor="#E8D49A" /></linearGradient></defs>
    <path d="M2 20 L9 20 L13 8 L19 30 L23 16 L26 22 L34 22" stroke="url(#um-i4)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const profil = [
  { icon: IconGruender,    text: 'Gründer von FS Performance Lab' },
  { icon: IconChemie,      text: 'M.Sc. Chemie' },
  { icon: IconPerformance, text: 'Performance-Experte' },
  { icon: IconTriathlet,   text: 'Triathlet' },
]

/* --- Sektion 1: die drei Aufnahmen im Hero --- */

const heroBilder = [
  // Freisteller: 'contain', sonst wuerde die Figur an den Kachelraendern abgeschnitten
  { src: '/images/FS-Bild-Zitatsektion.webp',         alt: 'Fabian Schönle im weißen Hemd',                       pos: 'center bottom', gross: false, contain: true },
  { src: '/images/Fabian-Schoenle-Blick-Kamera.webp', alt: 'Fabian Schönle — Performance Coach',                  pos: 'center 15%', gross: true  },
  { src: '/images/FS-Bild-Triathlon.webp',            alt: 'Fabian Schönle mit der Medaille des Ironman 70.3',    pos: 'center 42%', gross: false },
]

/* --- Sektion 2: Über FS Performance Lab. Aus den frueheren Zeitleisten-
       Stationen zu Fliesstext zusammengezogen. --- */

const ueberLab = [
  'Meine Ausgangslage sah alles andere als gut aus: Ich habe geraucht, meine Gesundheit für selbstverständlich gehalten und Sport als Quälerei empfunden. Kein guter Start.',
  'Irgendwann kam die Frage, die mich seitdem nicht mehr losgelassen hat: Wie verschiebe ich meine körperlichen und mentalen Grenzen, um das Beste aus meinem Leben herauszuholen? Aus echter Begeisterung für das Thema Leistungsfähigkeit — nicht aus Zwang.',
  'Über zehn Jahre habe ich mir daraufhin Expertise in Ernährung, Training und ganzheitlicher Gesundheit aufgebaut. Erst am eigenen Körper, dann bei meinen Kunden. Heute laufen Promotion in Chemie, mein eigenes Coaching-Business und die Vorbereitung auf meinen ersten Ironman parallel — ich weiß also ziemlich genau, wie sich ein voller Kalender anfühlt.',
  'Keine Sorge: Du musst dich jetzt nicht für einen Ironman anmelden. Ich will dir nur zeigen, was möglich ist — egal, wo du gerade stehst.',
]

/* --- Sektion 3: Expertise. Links die Haltung, rechts die Zahlen —
       Aufbau nach der Design-Vorlage. --- */

/** Drei Punkte mit Symbol, links neben der Zahlenkachel. */
const haltung = [
  {
    icon: IconChemie,
    titel: 'Datenbasiert',
    text: 'Als Wissenschaftler arbeite ich mit Daten. Kein Rätselraten, sondern die Hebel nutzen, auf die es wirklich ankommt.',
  },
  {
    icon: IconGruender,
    titel: 'Bewährt',
    text: 'Meine Strategien haben sich bereits bei über 40 Kunden bewährt und ihnen zu langfristigen Resultaten verholfen.',
  },
  {
    icon: IconPerformance,
    titel: 'Kontinuierlich entwickelt',
    text: 'Ich lese regelmäßig aktuelle Studien, um meine Methoden am Stand der Wissenschaft zu orientieren.',
  },
]

/** Die Zahlenkachel — zwei mal zwei Felder, durch feine Linien getrennt. */
const kennzahlen = [
  { icon: IconGruender,    wert: '40+',   text: 'Menschen begleitet' },
  { icon: IconPerformance, wert: '10+',   text: 'Jahre Erfahrung' },
  { icon: IconChemie,      wert: '50+',   text: 'Blut- und DNA-Marker' },
  { icon: IconTriathlet,   wert: '4,9/5', text: 'durchschnittliche Bewertung' },
]

/* --- Sektion 4: Mein Ansatz --- */

/** Was in der Analyse gemessen wird. */
const messwerte = ['Hormonstatus', 'Mikronährstoffe', 'Entzündungsmarker', 'Genetische Veranlagung']

/** Die drei Schritte, nebeneinander durch feine Linien getrennt. */
const ablauf = [
  {
    nr: '01',
    titel: 'Daten sammeln',
    text: 'Über 50 Blut- und DNA-Marker, weit über den Standard hinaus: Hormonstatus, Mikronährstoffe, Entzündungswerte und deine genetische Veranlagung.',
  },
  {
    nr: '02',
    titel: 'Muster erkennen',
    text: 'Aus den Werten lese ich heraus, was zusammenhängt — warum die Energie einbricht, warum sich trotz Training nichts bewegt, wo dein System aus dem Takt ist.',
  },
  {
    nr: '03',
    titel: 'Strategie ableiten',
    text: 'Daraus entsteht ein Plan mit drei bis vier Hebeln, der in deinen Kalender passt — und der angepasst wird, sobald sich deine Werte verändern.',
  },
]

/** Die Grundsaetze, nach denen die Strategie gebaut wird. */
const ansaetze = [
  { titel: 'Kein Verbotskatalog', text: 'Es geht um Menge, Verteilung und Timing — nicht um Verzicht.' },
  { titel: 'Keine Diäten',        text: 'Nichts, was du durchhalten musst. Was nach vier Wochen endet, war nie eine Lösung.' },
  { titel: 'Kein Standardplan',   text: 'Deine Strategie entsteht aus deinen Werten, nicht aus einem Durchschnitt.' },
  { titel: 'Keine Excelsheets',   text: 'Kein Tracken bis auf die Nachkommastelle. Die Zahlen liefert das Labor, nicht dein Alltag.' },
]

export default function UeberMichPage() {
  return (
    <>
      <PersonSchema />

      {/* ================= 1 — Hero ================= */}
      <section className="relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.09)" strokeWidth="1" />
            </pattern>
            <pattern id="hero-diag" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
            </pattern>
            <radialGradient id="hero-glow-l" cx="20%" cy="18%" r="55%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.18)" />
              <stop offset="60%" stopColor="rgba(201,168,76,0.05)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <radialGradient id="hero-glow-r" cx="85%" cy="10%" r="40%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.1)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="hero-mask"><rect width="100%" height="100%" fill="url(#hero-fade)" /></mask>
          </defs>
          <g mask="url(#hero-mask)">
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <rect width="100%" height="100%" fill="url(#hero-diag)" />
          </g>
          <rect width="100%" height="100%" fill="url(#hero-glow-l)" />
          <rect width="100%" height="100%" fill="url(#hero-glow-r)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-36 pb-20 md:pb-28">

          {/* Kopf — wie auf der Startseite über die volle Breite zentriert */}
          <div className="text-center mb-14 md:mb-20 animate-fade-up">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-5" style={GOLD_TEXT}>
              Über mich
            </p>
            <h1 className="font-barlow font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6" style={{ color: '#E6E8EB' }}>
              Ich bin Fabian Schönle —<br className="hidden md:block" />{' '}
              <Gold>Performance Coach aus Karlsruhe</Gold>
            </h1>
            <p className="font-inter text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#AEB5BE' }}>
              M.Sc. in Chemie, über zehn Jahre Erfahrung in Ernährung und Training & über 40 erfolgreich begleitete Kunden. Ich helfe leistungsorientierten Menschen dabei, auf Basis individueller Blutwerte trotz vollem Alltag in ihre körperliche und mentale Bestform zu kommen – ohne Diäten, Verzicht und stundenlanges Training.
            </p>
          </div>

          {/* Drei Aufnahmen nebeneinander — die mittlere groesser, die aeusseren
              etwas zurueckgesetzt. Der Rahmen ist derselbe wie bei den Bildern
              der Startseite: gerundet, duenne Goldkante, Schein dahinter. */}
          <div className="relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '80ms' }}>
            <div
              className="absolute pointer-events-none rounded-full blur-3xl"
              style={{ inset: '-8% -4%', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.14) 0%, transparent 70%)' }}
            />
            <div className="relative grid grid-cols-[1fr_1.3fr_1fr] gap-3 md:gap-6 items-center">
              {heroBilder.map((b) => (
                <div
                  key={b.src}
                  className={`relative overflow-hidden rounded-xl md:rounded-2xl ${b.gross ? 'md:-my-8' : ''}`}
                  style={{
                    aspectRatio: '3/4',
                    border: b.gross ? '1px solid rgba(201,168,76,0.45)' : '1px solid rgba(201,168,76,0.22)',
                    background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                    boxShadow: b.gross
                      ? '0 0 40px rgba(201,168,76,0.18), 0 20px 50px rgba(0,0,0,0.45)'
                      : '0 0 20px rgba(201,168,76,0.08), 0 12px 30px rgba(0,0,0,0.35)',
                  }}
                >
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    priority={b.gross}
                    className={b.contain ? 'object-contain' : 'object-cover'}
                    style={{ objectPosition: b.pos }}
                    sizes={b.gross ? '(max-width: 768px) 40vw, 420px' : '(max-width: 768px) 30vw, 320px'}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Profilzeile unter den Bildern */}
          <ul className="flex flex-wrap justify-center gap-2.5 md:gap-3 mt-10 md:mt-14 animate-fade-up" style={{ animationDelay: '160ms' }}>
            {profil.map((p, i) => (
              <li key={i} className="symptom-pill rounded-full px-4 py-2.5 flex items-center gap-2.5">
                <span className="flex-shrink-0">{p.icon}</span>
                <span className="font-inter text-xs md:text-sm font-medium" style={{ color: '#C8D0D9' }}>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= 2 — Über FS Performance Lab =================
           Text links, Bild rechts. Der goldene Balken links am Text greift das
           Muster der Vorlage auf. */}
      <section id="ueber-lab" className="relative overflow-hidden" style={{ background: '#060E1F' }}>
        <Raster id="wende" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-stretch">

            {/* Text */}
            <div className="animate-fade-up text-left">
              <Label>Über FS Performance Lab</Label>
              <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-8" style={{ color: '#E6E8EB' }}>
                Wieso ich heute <Gold>Menschen coache.</Gold>
              </h2>

              <div className="flex flex-col gap-5 pl-6" style={{ borderLeft: '2px solid rgba(201,168,76,0.35)' }}>
                {ueberLab.map((absatz, i) => (
                  <p
                    key={i}
                    className="font-inter text-base md:text-lg leading-relaxed"
                    style={{ color: i === ueberLab.length - 1 ? '#E6E8EB' : '#A6B0BA' }}
                  >
                    {absatz}
                  </p>
                ))}
              </div>
            </div>

            {/* Bild und Zitat */}
            <div className="flex flex-col gap-6 h-full animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div
                className="relative rounded-2xl overflow-hidden w-full flex-1"
                style={{
                  minHeight: 420,
                  maxWidth: 500,
                  background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                  border: '1px solid rgba(201,168,76,0.28)',
                  boxShadow: '0 0 30px rgba(201,168,76,0.1)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(70% 55% at 50% 40%, rgba(201,168,76,0.1) 0%, transparent 72%)' }}
                />
                {/* Formatfuellend. Der Wert steuert, welcher Teil des Hochformats im
                    Rahmen liegt: kleiner = weiter oben im Bild (mehr Kopffreiheit),
                    groesser = weiter unten (mehr Koerper, Kopf stoesst an). */}
                <Image
                  src="/images/FS-Bild-Über-Fabian.webp"
                  alt="Fabian Schönle — Performance Coach"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 58%' }}
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              <div
                className="rounded-2xl px-7 py-6 w-full"
                style={{
                  maxWidth: 500,
                  background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  borderLeft: '3px solid #C9A84C',
                  boxShadow: '0 0 30px rgba(201,168,76,0.08)',
                }}
              >
                <p className="font-barlow font-bold text-lg md:text-xl leading-snug" style={{ color: '#E8D49A' }}>
                  {'„Wer einmal selbst erlebt hat, wie sich ein leistungsfähiger, gesunder Körper anfühlt, tauscht ihn gegen nichts mehr ein.“'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3 — Expertise =================
           Links Haltung mit Symbolen, rechts die Zahlen in einer Kachel —
           Aufbau nach der Design-Vorlage. */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Links */}
            <div className="text-left animate-fade-up">
              <Label>Expertise</Label>
              <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-10" style={{ color: '#E6E8EB' }}>
                Jahrelange Erfahrung & <Gold>echte Ergebnisse.</Gold>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {haltung.map((h, i) => (
                  <div key={i}>
                    <span className="inline-flex mb-3">{h.icon}</span>
                    <p className="font-barlow font-bold text-base md:text-lg mb-2" style={{ color: '#E6E8EB' }}>{h.titel}</p>
                    <p className="font-inter text-sm leading-relaxed" style={{ color: '#8A929C' }}>{h.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rechts: Zahlenkachel */}
            <div
              className="rounded-2xl overflow-hidden animate-fade-up"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: '1px solid rgba(201,168,76,0.28)',
                boxShadow: '0 0 40px rgba(201,168,76,0.1)',
                animationDelay: '120ms',
              }}
            >
              <div className="grid grid-cols-2">
                {kennzahlen.map((k, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center px-5 py-10 md:px-7 md:py-12"
                    style={{
                      // Feine Linien statt Kaesten — wie in der Vorlage
                      borderRight: i % 2 === 0 ? '1px solid rgba(201,168,76,0.16)' : 'none',
                      borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.16)' : 'none',
                    }}
                  >
                    <span className="inline-flex mb-4 scale-[1.6]">{k.icon}</span>
                    <p className="font-barlow font-bold text-4xl md:text-5xl leading-none mb-2" style={GOLD_TEXT}>
                      {k.wert}
                    </p>
                    <p className="font-inter text-sm leading-snug" style={{ color: '#A6B0BA' }}>{k.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4 — Mein Ansatz =================
           Ohne umschliessendes Panel: zentrierter Kopf, darunter die Schritte
           durch feine Linien getrennt — die ruhige Optik der Vorlagen. */}
      <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>
        <Raster id="methode" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32">

          {/* Kopf */}
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <Label>Mein Ansatz</Label>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
              Aus Daten wird <Gold>ein System.</Gold>
            </h2>
            {/* Kurzer Goldstrich unter der Ueberschrift — wie in der Vorlage */}
            <span className="block mx-auto mb-6" style={{ width: 64, height: 2, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
              Individuelle Daten und Blutwerte als Basis für eine ganzheitliche und individuelle Gesundheitsstrategie.
            </p>

            {/* Was gemessen wird */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {messwerte.map((m) => (
                <span
                  key={m}
                  className="rounded-lg px-3.5 py-2 font-inter text-sm"
                  style={{ background: 'rgba(13,24,41,0.7)', border: '1px solid rgba(201,168,76,0.22)', color: '#C8D0D9' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Drei Schritte, durch senkrechte Linien getrennt */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 md:mt-20">
            {ablauf.map((a, i) => (
              <div
                key={i}
                className="px-0 md:px-8 py-8 md:py-0 animate-fade-up"
                style={{
                  borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.16)' : 'none',
                  animationDelay: `${80 + i * 70}ms`,
                }}
              >
                <p className="font-barlow font-bold text-4xl md:text-5xl leading-none mb-4" style={GOLD_TEXT}>
                  {a.nr}
                </p>
                <h3 className="font-barlow font-bold text-xl md:text-2xl mb-3" style={{ color: '#E6E8EB' }}>
                  {a.titel}
                </h3>
                <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                  {a.text}
                </p>
              </div>
            ))}
          </div>

          {/* Grundsaetze — schlichte Reihe unter einer feinen Linie */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-16 md:mt-20 pt-12"
            style={{ borderTop: '1px solid rgba(201,168,76,0.16)' }}
          >
            {ansaetze.map((a, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${120 + i * 60}ms` }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mb-3 mx-auto md:mx-0" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="rgba(201,168,76,0.45)" strokeWidth="1.5" />
                  <path d="M7.5 12.5l3 3 6-6.5" stroke="#E8D49A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-barlow font-bold text-base md:text-lg mb-2" style={{ color: '#E6E8EB' }}>{a.titel}</p>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#8A929C' }}>{a.text}</p>
              </div>
            ))}
          </div>

          {/* Kernsatz */}
          <div className="mt-16 md:mt-20 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <ZitatModul
              zitat="Wir nutzen individuelle DNA- und Blutwerte, um die drei bis vier Hebel zu identifizieren, die bei dir wirklich einen Unterschied machen – und bauen daraus eine nachhaltige Strategie, die zu deinem Terminkalender passt."
              autor="Fabian Schönle"
              rolle="Performance Coach · M.Sc. Chemie"
              patternId="methode-zitat-grid"
            />
          </div>
        </div>
      </section>

      {/* ================= Social Media ================= */}
      {/* Nebeneinander statt untereinander wie auf der Startseite. */}
      <SocialSection nebeneinander />

      {/* ================= 7 — Abschluss-CTA ================= */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
          <div className="animate-fade-up">
            <Label>Lass uns reden</Label>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
              Wenn du wissen willst, <Gold>was dich gerade limitiert</Gold> – finden wir es gemeinsam heraus.
            </h2>
          </div>

          <p
            className="font-inter text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ color: '#A6B0BA', animationDelay: '80ms' }}
          >
            Im ersten Gespräch geht es darum zu verstehen, wie dein Alltag aussieht, was du schon probiert hast und woran es bisher gescheitert ist. Kein klassisches Verkaufsgespräch, sondern echter Mehrwert. Online, 20 Minuten.
          </p>

          <a
            href={CALENDLY_URL}
            data-open-form="true"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-metal inline-flex items-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-base transition-transform animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Performance-Analyse sichern
          </a>

          <p className="font-inter text-xs mt-5 animate-fade-up" style={{ color: '#7B8792', animationDelay: '160ms' }}>
            Deine Daten bleiben vertraulich. Kein Newsletter, kein Spam.
          </p>
        </div>
      </section>
    </>
  )
}
