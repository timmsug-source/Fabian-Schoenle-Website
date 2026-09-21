'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import ScrollUnterstrich from '@/components/ui/ScrollUnterstrich'

export type LandingFallstudie = {
  /** Steht in der Kopfleiste der Karte und über den Ergebnissen */
  name: string
  /** Zeile unter dem Namen, z. B. „42 Jahre · Projektleiter“ */
  rolle: string
  /** Das Ergebnis in einer Zeile, z. B. „−14 kg in 5 Monaten“ */
  ueberschrift: string
  /** Rundes Porträt neben dem Namen */
  portrait: string
  /** LinkedIn-Profil — macht die Person überprüfbar */
  link?: string
  video?: string
  bild?: string
  /** Was am Ende herausgekommen ist */
  ergebnisse: string[]
  /** Optional: Wo die Person gestartet ist — ein kurzer Absatz */
  ausgangspunkt?: string
  /** Optional: Was wir daraus gemacht haben — ein kurzer Absatz */
  prozess?: string
  /** Optional: Gewicht vorher und nachher fuer das Zahlen-Panel, z. B. „103 kg" */
  gewichtVon?: string
  gewichtNach?: string
  /** Optional: Zitat der Person, samt Quelle („LinkedIn-Empfehlung") */
  zitat?: string
  zitatQuelle?: string
  /** Optional: Einordnung statt Zitat, wenn keine schriftliche Aussage vorliegt */
  notiz?: { label: string; text: string }
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/** „92,5 kg" → 92.5. Ohne lesbare Zahl bleibt der Balken aus. */
function zahl(wert?: string): number | undefined {
  const treffer = wert?.replace(',', '.').match(/[\d.]+/)
  return treffer ? Number(treffer[0]) : undefined
}

/**
 * Das Ergebnis als Zahl: Ausgangsgewicht, Zielgewicht und der Balken dazwischen.
 * Steht dort, wo sonst das Video sitzt — die Zahl ist auf dieser Seite der
 * Beweis, das Video kommt in der Sektion darunter.
 */
function ZahlenPanel({ von, nach }: { von: string; nach: string }) {
  const a = zahl(von)
  const b = zahl(nach)
  const anteil = a && b ? Math.round((b / a) * 100) : undefined

  return (
    <div className="px-6 py-7 md:px-8 md:py-9">
      <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#7B8792' }}>
        Körpergewicht
      </p>

      <div className="flex items-end gap-4 mb-7">
        <span className="font-barlow font-bold text-4xl md:text-5xl leading-none" style={{ color: '#7B8792' }}>
          {von}
        </span>
        <svg width="26" height="14" viewBox="0 0 22 12" fill="none" aria-hidden="true" className="mb-1.5 flex-shrink-0" style={{ color: '#C9A84C' }}>
          <path d="M1 6h18M14.5 1.5L20 6l-5.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-barlow font-bold text-4xl md:text-5xl leading-none" style={goldText}>
          {nach}
        </span>
      </div>

      {/* Balken: die volle Breite ist das Ausgangsgewicht, der goldene Teil das
          heutige. Kein Diagramm, nur das Verhaeltnis — alles andere waere
          Ausschmueckung um zwei Zahlen herum. */}
      {anteil && (
        <div className="flex flex-col gap-4">
          {[
            { label: 'Vorher', breite: 100, farbe: 'rgba(255,255,255,0.14)', schein: undefined },
            { label: 'Danach', breite: anteil, farbe: 'linear-gradient(90deg, #B8832A, #F2D27A)', schein: '0 0 14px rgba(201,168,76,0.35)' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col gap-1.5">
              <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: '#7B8792' }}>
                {b.label}
              </span>
              <span className="block h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <span className="block h-full rounded-full" style={{ width: `${b.breite}%`, background: b.farbe, boxShadow: b.schein }} />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Fallstudien in der Kurzfassung: je Karte links die Ergebnisse, rechts das
 * Video. Wer die Person ist, steht in der Kopfleiste der Karte.
 *
 * Bewusst ohne Problem-Ziel-Lösung wie auf der Startseite. Wer über eine
 * Anzeige kommt, liest keine drei Absätze pro Person — hier zählt, was am Ende
 * herauskam.
 */

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [laeuft, setLaeuft] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)' }}>
      {/*
        #t=0.1 ist ein Media-Fragment: Der Browser springt beim Laden der
        Metadaten auf Sekunde 0.1 und zeichnet diesen Frame — sonst bliebe die
        Fläche schwarz, weil es zu den Videos keine Poster-Bilder gibt.
      */}
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        className="absolute inset-0 w-full h-full object-cover"
        controls={laeuft}
        playsInline
        preload="metadata"
      />
      {!laeuft && (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => { videoRef.current?.play(); setLaeuft(true) }}
          aria-label="Video abspielen"
        >
          <span
            className="flex items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              width: 58,
              height: 58,
              background: 'rgba(12,20,36,0.4)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.45)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.22)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#F2E0A7" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

function Haken({ id }: { id: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
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

export default function LandingFallstudien({
  label,
  headline,
  headlineAccent,
  intro,
  fallstudien,
}: {
  /** Mit Label steht die Ueberschrift im Stil der uebrigen Sektionen, ohne im Stil der Landingpage */
  label?: string
  headline?: string
  headlineAccent?: string
  intro?: string
  fallstudien: LandingFallstudie[]
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Rastermuster wie in der Fallstudien-Sektion der Startseite. Die Maske
          blendet es oben und unten aus, damit es in den Seitenhintergrund
          uebergeht statt hart abzubrechen. */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="lf-bg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="lf-bg-diag" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <linearGradient id="lf-bg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="14%" stopColor="white" stopOpacity="1" />
            <stop offset="86%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="lf-bg-fade-mask">
            <rect width="100%" height="100%" fill="url(#lf-bg-fade)" />
          </mask>
        </defs>
        <g mask="url(#lf-bg-fade-mask)">
          <rect width="100%" height="100%" fill="url(#lf-bg-grid)" />
          <rect width="100%" height="100%" fill="url(#lf-bg-diag)" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {headline && (label || headlineAccent || intro ? (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
            {label && (
              <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={goldText}>
                {label}
              </p>
            )}
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
              {headline}
              {headlineAccent && (
                <>
                  {' '}
                  <span style={goldText}>{headlineAccent}</span>
                </>
              )}
            </h2>
            {intro && (
              <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
                {intro}
              </p>
            )}
          </div>
        ) : (
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-[1.35] text-center mb-12 md:mb-16" style={{ color: '#E6E8EB' }}>
            <ScrollUnterstrich>{headline}</ScrollUnterstrich>
          </h2>
        ))}

        <div className="flex flex-col gap-10">
        {fallstudien.map((fs, idx) => (
          <div
            key={fs.name}
            className="rounded-3xl overflow-hidden animate-fade-up"
            style={{
              background: '#091122',
              border: '1px solid rgba(201,168,76,0.2)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              animationDelay: `${idx * 100}ms`,
            }}
          >
            {/* Kopfleiste */}
            <div
              className="px-6 md:px-8 py-3.5 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', background: 'rgba(201,168,76,0.04)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C' }} />
              <p
                className="font-inter text-xs font-semibold uppercase tracking-widest"
                style={{
                  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
                  backgroundSize: '100% 1.2em',
                  backgroundRepeat: 'repeat-y',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Fallstudie: {fs.name}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:items-center">

              {/* Links: die Ergebnisse */}
              <div className="lg:col-span-6">
                {/* Das Ergebnis in einer Zeile — die Zahl, die haengen bleibt,
                    bevor die Einzelheiten darunter folgen. */}
                <h3 className="font-barlow font-bold text-2xl md:text-4xl leading-[1.35] mb-7" style={{ color: '#E6E8EB' }}>
                  {/* Fester Strich, ohne Scroll-Effekt: Er steht dreimal
                      untereinander, mitlaufende Animationen wuerden unruhig wirken. */}
                  <span className="unterstrich-fest">{fs.ueberschrift}</span>
                </h3>

                {(fs.ausgangspunkt || fs.prozess) && (
                  <div className="flex flex-col gap-5 mb-8">
                    {[
                      { label: 'Ausgangspunkt', text: fs.ausgangspunkt },
                      { label: 'Der Weg dahin', text: fs.prozess },
                    ].map(({ label, text }) =>
                      text ? (
                        <div key={label}>
                          <p className="font-barlow font-bold text-sm uppercase tracking-wider mb-1.5" style={goldText}>
                            {label}:
                          </p>
                          <p className="font-inter text-sm md:text-base leading-relaxed" style={{ color: '#A6B0BA' }}>
                            {text}
                          </p>
                        </div>
                      ) : null
                    )}
                    <p className="font-barlow font-bold text-sm uppercase tracking-wider -mb-2" style={goldText}>
                      Ergebnis:
                    </p>
                  </div>
                )}

                <ul className="flex flex-col gap-5">
                  {fs.ergebnisse.map((e, i) => (
                    <li key={e} className="flex items-start gap-4">
                      <Haken id={`fallstudie-${idx}-haken-${i}`} />
                      <span className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
                        {e}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Wer hinter den Zahlen steht. Der Verweis auf LinkedIn macht
                    die Angaben überprüfbar — bei Zahlen wie diesen der
                    entscheidende Unterschied zu einem beliebigen Zitat. */}
                <div className="flex items-center gap-4 mt-8">
                  <span
                    className="relative rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      width: 58,
                      height: 58,
                      border: '2px solid rgba(201,168,76,0.5)',
                      boxShadow: '0 0 18px rgba(201,168,76,0.2)',
                    }}
                  >
                    <Image src={fs.portrait} alt={fs.name} width={320} height={320} className="w-full h-full object-cover" />
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <p className="font-barlow font-bold text-xl md:text-2xl" style={{ color: '#E6E8EB' }}>
                        {fs.name}
                      </p>
                      {fs.link && (
                        <a
                          href={fs.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex transition-colors hover:text-white"
                          style={{ color: '#7B8792' }}
                          aria-label={`${fs.name} auf LinkedIn ansehen`}
                        >
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            {/* Gleicher Pfad wie in den Video-Testimonials */}
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="font-inter text-sm" style={{ color: '#7B8792' }}>
                      {fs.rolle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rechts: Video und Profil */}
              <div className="lg:col-span-6">
                <div
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(201,168,76,0.5)',
                    boxShadow: '0 0 40px rgba(201,168,76,0.25), 0 0 12px rgba(201,168,76,0.15)',
                  }}
                >
                  {fs.video ? (
                    <VideoPlayer src={fs.video} />
                  ) : fs.bild ? (
                    <div className="relative aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={fs.bild} alt={fs.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 22%' }} />
                    </div>
                  ) : fs.gewichtVon && fs.gewichtNach ? (
                    <ZahlenPanel von={fs.gewichtVon} nach={fs.gewichtNach} />
                  ) : null}

                  {fs.zitat && (
                    <blockquote
                      className="px-6 py-6 md:px-8"
                      style={{ borderTop: '1px solid rgba(201,168,76,0.18)' }}
                    >
                      <p className="font-inter italic text-base leading-relaxed" style={{ color: '#D4D9DF' }}>
                        &bdquo;{fs.zitat}&ldquo;
                      </p>
                      {fs.zitatQuelle && (
                        <footer className="font-inter text-xs uppercase tracking-widest mt-3" style={{ color: '#7B8792' }}>
                          {fs.zitatQuelle}
                        </footer>
                      )}
                    </blockquote>
                  )}

                  {fs.notiz && (
                    <div className="px-6 py-6 md:px-8" style={{ borderTop: '1px solid rgba(201,168,76,0.18)' }}>
                      <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#7B8792' }}>
                        {fs.notiz.label}
                      </p>
                      <p className="font-inter text-base leading-relaxed" style={{ color: '#D4D9DF' }}>
                        {fs.notiz.text}
                      </p>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
