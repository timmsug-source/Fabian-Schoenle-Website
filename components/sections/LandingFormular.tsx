'use client'

import Image from 'next/image'
import KundenReihe from '@/components/ui/KundenReihe'
import { CALENDLY_URL } from '@/lib/constants'

/**
 * Abschluss der Werbelandingpage: links der Weg zum Termin, rechts die
 * Argumente.
 *
 * Kein Formular mehr an dieser Stelle: Wer hier ankommt, hat seine Angaben auf
 * der vorgeschalteten Seite schon gemacht. Ein zweites Mal danach zu fragen
 * kostet nur einen Schritt zwischen Entschluss und Termin.
 *
 * Auch kein eingebetteter Kalender, sondern ein Verweis: So wird beim
 * Seitenaufruf nichts von Calendly geladen, es geht also keine Anfrage dorthin
 * ohne Zutun des Besuchers.
 */

type LandingFormularProps = {
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

        {/* Weg zum Termin: Calendly, in einem neuen Tab */}
        <div className="leistung-card rounded-2xl px-7 py-10 md:px-10 md:py-14 flex flex-col items-center text-center">
          {/* Das Logo zeigt vor dem Klick, wo der Termin landet. Die
              mitgelieferte Datei hatte einen weissen Grund mit eingebackenem
              Karomuster — beides ist herausgerechnet, damit es auf dem dunklen
              Kasten steht. */}
          <Image
            src="/images/calendly-logo.png"
            alt="Calendly"
            width={296}
            height={72}
            className="h-9 md:h-10 w-auto mb-7"
          />

          <p className="font-barlow font-bold text-2xl md:text-3xl leading-snug mb-3" style={{ color: '#E6E8EB' }}>
            Such dir deinen Termin aus
          </p>
          <p className="font-inter text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: '#A6B0BA' }}>
            Du siehst meine freien Zeiten und buchst in unter einer Minute. Bestätigung kommt
            sofort per E-Mail.
          </p>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-metal flex w-full max-w-[420px] items-center justify-center gap-3 px-6 py-4 rounded-xl font-barlow font-semibold text-lg transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Kostenlose Performance-Analyse sichern
          </a>

          <p className="font-inter text-xs mt-4" style={{ color: '#7B8792' }}>
            Öffnet Calendly in einem neuen Tab · 20 Minuten · kostenlos
          </p>
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

          <KundenReihe sterne />
        </div>

      </div>
    </section>
  )
}
