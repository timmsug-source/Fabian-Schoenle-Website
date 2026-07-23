'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { CALENDLY_URL } from '@/lib/constants'
import { Rich } from '@/components/Rich'

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/* ---------- Icons ---------- */

const IC = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const icons = {
  bauchfett: (
    <svg {...IC}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
  ),
  energie: (
    <svg {...IC}><rect x="2" y="8" width="16" height="9" rx="2" /><path d="M20 11.5v2" /><rect x="4.5" y="10.5" width="3.5" height="4" rx="0.6" fill="currentColor" stroke="none" /></svg>
  ),
  schlaf: (
    <svg {...IC}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
  ),
  muskel: (
    <svg {...IC}><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
  ),
  jojo: (
    <svg {...IC}><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></svg>
  ),
  koerpergefuehl: (
    <svg {...IC}><circle cx="12" cy="12" r="9" /><path d="M8.5 15h7" /><circle cx="9" cy="10" r="0.6" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="0.6" fill="currentColor" stroke="none" /></svg>
  ),
  stimmung: (
    <svg {...IC}><path d="M3 12h3.5l2.5 7 4-15 2.5 8H21" /></svg>
  ),
  brainfog: (
    <svg {...IC}><path d="M9.5 4a2.5 2.5 0 0 0-2.4 3.2A2.5 2.5 0 0 0 5.5 9.7a2.5 2.5 0 0 0 1 2 2.5 2.5 0 0 0 .6 3.2A2.4 2.4 0 0 0 9.5 20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /><path d="M14.5 4a2.5 2.5 0 0 1 2.4 3.2 2.5 2.5 0 0 1 1.6 2.5 2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 1-.6 3.2A2.4 2.4 0 0 1 14.5 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /></svg>
  ),
  // Cluster-Icons
  flame: (
    <svg {...IC}><path d="M12 22a7 7 0 0 0 7-7c0-4-4-6-5-11-2 3-5 4-5 8a3 3 0 0 1-2-2c-1 1-2 2.6-2 5a7 7 0 0 0 7 7z" /></svg>
  ),
  battery: (
    <svg {...IC}><rect x="2" y="8" width="16" height="9" rx="2" /><path d="M20 11.5v2" /><path d="M11 10l-2 3h3l-2 3" /></svg>
  ),
  heart: (
    <svg {...IC}><path d="M12 21s-6.5-4.3-9-8.6C1.6 9 3.2 6 6.2 6c1.8 0 3 .9 3.8 2 .8-1.1 2-2 3.8-2 3 0 4.6 3 3.2 6.4C18.5 16.7 12 21 12 21z" /></svg>
  ),
} as const

function IconCal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function Indicator({ on }: { on: boolean }) {
  return (
    <span
      className="absolute top-3 right-3 inline-flex items-center justify-center w-6 h-6 rounded-full transition-all"
      style={
        on
          ? { background: 'linear-gradient(135deg, #C9A84C, #F2D27A)', border: '1.5px solid transparent' }
          : { border: '1.5px solid rgba(201,168,76,0.35)', background: 'rgba(255,255,255,0.02)' }
      }
    >
      {on && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
      )}
    </span>
  )
}

/* ---------- Daten ---------- */

type ClusterKey = 'stoffwechsel' | 'erholung' | 'balance'

const CLUSTERS: Record<ClusterKey, { name: string; size: number; icon: React.ReactNode }> = {
  stoffwechsel: { name: 'Stoffwechsel & Körperzusammensetzung', size: 3, icon: icons.flame },
  erholung: { name: 'Erholung & Energie', size: 3, icon: icons.battery },
  balance: { name: 'Innere Balance', size: 2, icon: icons.heart },
}

// Reihenfolge = Anzeige + Tie-Priorität
const CLUSTER_ORDER: ClusterKey[] = ['stoffwechsel', 'erholung', 'balance']

const SYMPTOMS: { id: string; title: string; desc: string; cluster: ClusterKey; icon: React.ReactNode }[] = [
  { id: 'bauchfett', title: 'Hartnäckiges Bauchfett', desc: 'Egal was du isst oder wie oft du trainierst, es bleibt.', cluster: 'stoffwechsel', icon: icons.bauchfett },
  { id: 'energie', title: 'Fehlende Energie', desc: 'Nachmittags ist der Fokus weg. Du läufst auf Sparflamme.', cluster: 'erholung', icon: icons.energie },
  { id: 'schlaf', title: 'Unerholsamer Schlaf', desc: 'Du schläfst, wachst aber nicht ausgeruht auf.', cluster: 'erholung', icon: icons.schlaf },
  { id: 'muskel', title: 'Langsamer Muskelaufbau', desc: 'Du investierst Zeit im Training, doch der Körper reagiert kaum.', cluster: 'stoffwechsel', icon: icons.muskel },
  { id: 'jojo', title: 'Jo-Jo-Effekt', desc: 'Du hast vieles versucht. Kein Ergebnis hat sich gehalten.', cluster: 'stoffwechsel', icon: icons.jojo },
  { id: 'koerpergefuehl', title: 'Schlechtes Körpergefühl', desc: 'Der Spiegel zeigt jemanden, der nicht deinem Anspruch entspricht.', cluster: 'balance', icon: icons.koerpergefuehl },
  { id: 'stimmung', title: 'Stimmungsschwankungen', desc: 'Manche Tage läuft es, andere nicht. Kein verlässliches Niveau.', cluster: 'balance', icon: icons.stimmung },
  { id: 'brainfog', title: 'Brainfog', desc: 'Konzentration und Klarheit fühlen sich nicht mehr wie früher an.', cluster: 'erholung', icon: icons.brainfog },
]

const STUFEN = [
  'Noch nichts ausgewählt',
  'Wichtigster Ansatzpunkt',
  'Mehrere Ansatzpunkte und erkennbares Potenzial',
  'Zahlreiche Ansatzpunkte und deutliches Potenzial',
]

export default function MusterCheck({ content = {} }: { content?: Record<string, string> }) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const count = selected.length
  const stufenIndex = count === 0 ? 0 : count === 1 ? 1 : count <= 3 ? 2 : 3

  const clusterCount = (c: ClusterKey) =>
    selected.filter((id) => SYMPTOMS.find((s) => s.id === id)?.cluster === c).length

  const schwerpunkt: ClusterKey | null =
    count === 0
      ? null
      : CLUSTER_ORDER.reduce((best, c) => (clusterCount(c) > clusterCount(best) ? c : best), CLUSTER_ORDER[0])

  // Für die Anfrage: markierte Symptome + Schwerpunkt an den CTA hängen
  const selectedTitles = selected
    .map((id) => SYMPTOMS.find((s) => s.id === id)?.title)
    .filter(Boolean)
    .join(', ')
  const schwerpunktName = schwerpunkt ? CLUSTERS[schwerpunkt].name : ''

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="relative mb-10 md:mb-12 text-center">
        {/* Weicher Glow hinter der Überschrift */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 'min(760px, 92%)',
            height: 300,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 42%, transparent 72%)',
            filter: 'blur(30px)',
          }}
        />
        <div className="relative">
          <SectionLabel>{content.muster_label || 'Kennst du das?'}</SectionLabel>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mt-4 mb-4" style={{ color: '#E6E8EB' }}>
            {content.muster_title_1 || 'Wenn dein Körper nicht mehr so'}<br className="hidden md:block" /> {content.muster_title_2 || 'belastbar ist wie früher'}
          </h2>
          <Rich as="p" className="font-inter text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#7B8792' }} html={content.muster_intro || 'Diese Symptome sind kein Zufall, sondern ein Signal deines Körpers. Tippe an, was auf dich zutrifft.'} />
        </div>
      </div>

      {/* Modul-Box: dünner Rahmen + Hero-Rasterhintergrund */}
      <div className="relative overflow-hidden rounded-2xl p-6 md:p-8" style={{ background: '#060E1F', border: '1px solid rgba(201,168,76,0.22)', boxShadow: '0 0 24px rgba(255,255,255,0.09), 0 0 60px rgba(255,255,255,0.04)' }}>

        {/* Rasterhintergrund (wie im Hero) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-mc" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
            </pattern>
            <pattern id="diagonal-mc" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
            </pattern>
            <radialGradient id="glow-left-mc" cx="20%" cy="20%" r="55%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.09)" />
              <stop offset="60%" stopColor="rgba(201,168,76,0.025)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <radialGradient id="glow-right-mc" cx="85%" cy="10%" r="40%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.05)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </radialGradient>
            <linearGradient id="grid-fade-mc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="fade-mask-mc">
              <rect width="100%" height="100%" fill="url(#grid-fade-mc)" />
            </mask>
          </defs>
          <g mask="url(#fade-mask-mc)">
            <rect width="100%" height="100%" fill="url(#grid-mc)" />
            <rect width="100%" height="100%" fill="url(#diagonal-mc)" />
          </g>
          <rect width="100%" height="100%" fill="url(#glow-left-mc)" />
          <rect width="100%" height="100%" fill="url(#glow-right-mc)" />
        </svg>

        <div className="relative">

      {/* Ergebnis-Bereich */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest" style={goldText}>
            {content.muster_result_label || 'Dein Muster-Check'}
          </p>
          <p className="font-barlow font-bold text-lg leading-none whitespace-nowrap">
            <span style={goldText}>{count}</span>
            <span style={{ color: '#7B8792' }}>/8</span>
          </p>
        </div>

        <h3 className="font-barlow font-bold text-2xl md:text-3xl leading-snug mt-3 mb-5" style={{ color: '#E6E8EB' }}>
          {content[`muster_stufe_${stufenIndex}`] || STUFEN[stufenIndex]}
          {schwerpunkt && (
            <>
              {content.muster_bereich_connector || ' im Bereich: '}
              <span style={goldText}>{content[`muster_cluster_${schwerpunkt}`] || CLUSTERS[schwerpunkt].name}</span>
            </>
          )}
        </h3>

        {/* Fortschrittsbalken — 3 Segmente, durchgehender Verlauf */}
        <div className="flex gap-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={
                i < stufenIndex
                  ? {
                      backgroundImage: 'linear-gradient(90deg,#C9A84C,#E8D49A)',
                      backgroundSize: '300% 100%',
                      backgroundPosition: `${i * 50}% 0`,
                    }
                  : { background: 'rgba(255,255,255,0.08)' }
              }
            />
          ))}
        </div>

        {/* Detail-Zeilen (ab 1 Auswahl) bzw. Hinweis */}
        {count === 0 ? (
          <Rich as="p" className="font-inter text-sm" style={{ color: '#AEB5BE' }} html={content.muster_hint || 'Tippe auf die Punkte, die zutreffen'} />
        ) : (
          <div className="flex flex-col gap-3">
            {CLUSTER_ORDER.map((c) => {
              const isFocus = c === schwerpunkt
              const filled = clusterCount(c)
              return (
                <div key={c} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span style={{ color: isFocus ? '#E8D49A' : '#7B8792' }} className="[&>svg]:w-[18px] [&>svg]:h-[18px] flex-shrink-0">
                      {CLUSTERS[c].icon}
                    </span>
                    <span
                      className="font-inter text-sm md:text-base font-semibold truncate"
                      style={isFocus ? goldText : { color: '#7B8792' }}
                    >
                      {content[`muster_cluster_${c}`] || CLUSTERS[c].name}
                    </span>
                  </span>
                  <span className="flex gap-1.5 flex-shrink-0">
                    {Array.from({ length: CLUSTERS[c].size }).map((_, i) => {
                      const on = i < filled
                      return (
                        <span
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: on
                              ? isFocus
                                ? '#E8D49A'
                                : '#8A93A0'
                              : isFocus
                                ? 'rgba(201,168,76,0.25)'
                                : 'rgba(255,255,255,0.1)',
                          }}
                        />
                      )
                    })}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        <Rich as="p" className="font-inter text-xs mt-5" style={{ color: '#5B6773' }} html={content.muster_disclaimer || 'Keine Diagnostik – erste Orientierung'} />
      </div>

      {/* Symptom-Karten */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SYMPTOMS.map((s) => {
          const on = selected.includes(s.id)
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => toggle(s.id)}
              aria-pressed={on}
              className="relative text-left rounded-2xl p-5 transition-all"
              style={{
                background: 'linear-gradient(135deg, #0D1829 0%, #091122 100%)',
                border: on ? '1px solid rgba(201,168,76,0.7)' : '1px solid rgba(201,168,76,0.22)',
                boxShadow: on
                  ? '0 0 26px rgba(201,168,76,0.24), inset 0 0 20px rgba(201,168,76,0.05)'
                  : '0 0 16px rgba(201,168,76,0.12)',
              }}
            >
              <Indicator on={on} />
              <span className="block mb-4" style={{ color: on ? '#E8D49A' : '#C9A84C' }}>
                {s.icon}
              </span>
              <p className="font-barlow font-bold text-base md:text-lg mb-1.5 pr-6" style={{ color: '#E6E8EB' }}>
                {content[`muster_symptom_${s.id}_title`] || s.title}
              </p>
              <Rich as="p" className="font-inter text-sm leading-relaxed" style={{ color: '#9AA4AE' }} html={content[`muster_symptom_${s.id}_desc`] || s.desc} />
            </button>
          )
        })}
      </div>

      {/* CTA — immer sichtbar, bei 0 Auswahl deaktiviert/grau */}
      <div className="mt-8">
        {count >= 1 ? (
          <a
            href={CALENDLY_URL}
            data-open-form="true"
            data-symptome={selectedTitles}
            data-schwerpunkt={schwerpunktName}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-metal inline-flex items-center gap-3 px-7 py-3 rounded-xl font-barlow font-semibold text-base transition-transform"
          >
            <IconCal />
            {content.muster_cta_button || 'Performance Analyse buchen'} ({count})
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-xl font-barlow font-semibold text-base cursor-not-allowed"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#5B6773' }}
          >
            <IconCal />
            {content.muster_cta_button || 'Performance Analyse buchen'}
          </button>
        )}
        <Rich
          as="p"
          className="mt-3 font-inter text-sm"
          style={{ color: '#7B8792' }}
          html={count >= 1
            ? (content.muster_cta_note_active || 'Wir besprechen genau die Punkte, die du markiert hast.')
            : (content.muster_cta_note_inactive || 'Markiere zuerst, was auf dich zutrifft.')}
        />
      </div>
      </div>
      </div>
    </section>
  )
}
