'use client'

import Image from 'next/image'
import KontaktFormular, { type KontaktFormularProps } from '@/components/ui/KontaktFormular'

/**
 * Abschluss der Werbelandingpage: links das Formular, rechts die Argumente.
 *
 * Die Eingabemaske selbst steht in KontaktFormular — sie wird auch im Popup
 * der vorgeschalteten Seite gebraucht.
 */

type LandingFormularProps = KontaktFormularProps & {
  /** Anker fuer einen Knopf weiter oben auf der Seite */
  id?: string
  titel?: string
  intro?: string
}

const punkte = [
  <>Du erfährst, <strong>was deine Leistungsfähigkeit gerade begrenzt</strong> — auf Basis deiner Werte, nicht auf Verdacht.</>,
  <>Du bekommst <strong>die zwei, drei Hebel</strong>, die bei dir zählen, statt einer Liste mit zwanzig Baustellen.</>,
  <>Du gehst mit <strong>konkreten nächsten Schritten</strong> heraus — unabhängig davon, ob wir zusammenarbeiten.</>,
  <>Kein Verkaufsgespräch, kein Vertrag. <strong>20 Minuten, kostenlos.</strong></>,
]

const kunden = [
  { src: '/images/kunde-gregory.png', name: 'Gregory' },
  { src: '/images/kunde-axel.png', name: 'Axel' },
  { src: '/images/kunde-hansherbert.png', name: 'Hans-Herbert' },
  { src: '/images/kunde-matthias.png', name: 'Matthias' },
]

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

export default function LandingFormular({
  id,
  titel = 'Sichere dir deine kostenlose Performance-Analyse',
  intro = '20 Minuten mit mir persönlich, in denen wir anschauen, woran es bei dir gerade hakt — und was die nächsten sinnvollen Schritte sind.',
  ...formular
}: LandingFormularProps = {}) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 scroll-mt-8">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
          {titel}
        </h2>
        <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
          {intro}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* Formular */}
        <div className="leistung-card rounded-2xl p-7 md:p-10">
          <KontaktFormular {...formular} />
        </div>

        {/* Argumente und Vertrauen */}
        <div>
          <ul className="flex flex-col gap-6 mb-10">
            {punkte.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <Haken id={`formular-haken-${i}`} />
                <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
                  {p}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex">
              {kunden.map((k, i) => (
                <span
                  key={k.src}
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: 42,
                    height: 42,
                    marginLeft: i === 0 ? 0 : -12,
                    border: '2px solid #0B1525',
                    // Ring nach innen, damit die Reihe buendig mit dem Knopf darueber steht:
                    // ein aeusserer Schatten zaehlt nicht zum Layout und ragte daher heraus.
                    boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.35)',
                    zIndex: kunden.length - i,
                  }}
                >
                  <Image src={k.src} alt={`${k.name} — Klient von Fabian Schönle`} width={160} height={160} className="w-full h-full object-cover" />
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="#C9A84C">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </div>
              <p className="font-inter text-sm" style={{ color: '#C6CDD5' }}>
                <span className="font-semibold" style={{ color: '#E8D49A' }}>40+</span> zufriedene Kunden
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
