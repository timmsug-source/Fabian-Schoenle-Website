const proofKarten = [
  {
    name: 'Thomas K.',
    meta: 'Unternehmer · 38 Jahre',
    bildVorher: null,
    bildNachher: null,
    kennzahl: '−14 kg',
    zeitraum: 'in 16 Wochen',
    fakten: [
      'Stabilere Energie über den Tag',
      'Bessere Blutwerte — messbar',
      'Bauchfett deutlich reduziert',
    ],
  },
  {
    name: 'Markus R.',
    meta: 'Selbstständiger · 43 Jahre',
    bildVorher: null,
    bildNachher: null,
    kennzahl: '−9 kg',
    zeitraum: 'Körperfett abgebaut',
    fakten: [
      'Fokus und Antrieb zurück',
      'Leistungsfähigkeit gestiegen',
      'Training endlich mit Wirkung',
    ],
  },
  {
    name: 'Demnächst',
    meta: 'Nächste Fallstudie folgt',
    bildVorher: null,
    bildNachher: null,
    kennzahl: null,
    zeitraum: null,
    fakten: [],
    platzhalter: true,
  },
]

const saeulen = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    label: 'Körperlich',
    farbe: '#34D399',
    punkte: [
      'Deutlicher Fettabbau — vor allem am Bauch',
      'Mehr Muskeldefinition ohne exzessives Training',
      'Schlaf, der wirklich erholt',
      'Energie, die den ganzen Tag stabil bleibt',
      'Blutwerte, die sich messbar verbessern',
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Mental',
    farbe: '#60A5FA',
    punkte: [
      'Klarer Kopf — auch unter hoher Belastung',
      'Stabilere Stimmung, weniger Schwankungen',
      'Mehr Antrieb und Entscheidungsfreude',
      'Kein Nachmittagstief mehr',
      'Das Gefühl, wieder Kontrolle zu haben',
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: 'Beruflich',
    farbe: '#C99A3D',
    punkte: [
      'Höhere Leistungsfähigkeit über den gesamten Tag',
      'Bessere Präsenz in Meetings und Gesprächen',
      'Weniger Reaktivität, mehr strategisches Denken',
      'Das Selbstbild passt wieder zum eigenen Anspruch',
    ],
  },
]

function Check({ farbe }: { farbe: string }) {
  return (
    <span
      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
      style={{ background: `${farbe}20`, border: `1px solid ${farbe}55` }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 4l2 2 4-4" stroke={farbe} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function ErgebnisSection() {
  return (
    <section id="ergebnisse" className="relative" style={{ background: '#0D1721' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C99A3D' }}>
            Ergebnisse
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: '#E6E8EB' }}>
            Was sich verändert, wenn<br className="hidden md:block" /> dein System stimmt
          </h2>
          <p className="font-inter text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#5B6773' }}>
            Kein kurzfristiger Effekt. Sondern eine Verschiebung, die du in jedem Bereich deines Lebens spürst.
          </p>
        </div>

        {/* Drei Säulen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 animate-fade-up" style={{ animationDelay: '80ms' }}>
          {saeulen.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl p-7"
              style={{
                background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
                border: `1px solid ${s.farbe}60`,
                boxShadow: `0 0 40px ${s.farbe}25, 0 0 80px ${s.farbe}10, 0 20px 60px rgba(0,0,0,0.5)`,
                animationDelay: `${i * 60 + 80}ms`,
              }}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ background: `${s.farbe}18`, color: s.farbe }}
                >
                  {s.icon}
                </span>
                <h3 className="font-barlow font-bold text-xl" style={{ color: '#E6E8EB' }}>
                  {s.label}
                </h3>
              </div>

              {/* Punkte */}
              <ul className="flex flex-col gap-3">
                {s.punkte.map((p, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check farbe={s.farbe} />
                    <span className="font-inter text-sm leading-relaxed" style={{ color: '#8A96A3' }}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Subtiler Farbstreifen oben */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{ background: `linear-gradient(to right, transparent, ${s.farbe}55, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Abschluss-Statement */}
        <div
          className="relative rounded-2xl px-8 py-10 md:px-12 text-center animate-fade-up"
          style={{
            background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
            border: '1px solid rgba(201,154,61,0.2)',
            animationDelay: '240ms',
          }}
        >
          <div
            className="absolute top-0 left-16 right-16 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,154,61,0.4), transparent)' }}
          />
          <span
            className="font-barlow font-bold text-5xl leading-none select-none"
            style={{ color: '#C99A3D', opacity: 0.3, display: 'block', lineHeight: 1, marginBottom: '-8px' }}
          >
            "
          </span>
          <p
            className="font-barlow font-bold text-xl md:text-2xl leading-snug max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(to top, #8A5D1F 0%, #C99A3D 40%, #F2D27A 75%, #C99A3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Das Ziel ist nicht nur ein besserer Körper. Das Ziel ist, dass du wieder auf dem Niveau performst, das du von dir selbst erwartest.
          </p>
          <p className="font-inter text-sm mt-5" style={{ color: '#5B6773' }}>
            Fabian Schönle · Performance Coach · PhD Chemie
          </p>
        </div>

        {/* Brücke */}
        <div className="mt-20 mb-10 text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
          <p className="font-barlow font-bold text-2xl md:text-3xl" style={{ color: '#E6E8EB' }}>
            Das sind keine Versprechen.
          </p>
          <p className="font-barlow font-bold text-2xl md:text-3xl" style={{ color: '#C99A3D' }}>
            Das sind Ergebnisse.
          </p>
        </div>

        {/* Proof Grid — 3 Karten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-up" style={{ animationDelay: '360ms' }}>
          {proofKarten.map((k, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)',
                border: k.platzhalter ? '1px dashed rgba(255,255,255,0.08)' : '1px solid rgba(52,211,153,0.25)',
                boxShadow: k.platzhalter ? 'none' : '0 0 24px rgba(52,211,153,0.1), 0 0 60px rgba(52,211,153,0.05)',
                opacity: k.platzhalter ? 0.45 : 1,
              }}
            >
              {/* Vorher / Nachher Bildbereich */}
              <div className="relative flex" style={{ height: 200 }}>
                {/* Vorher */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-2"
                  style={{ background: 'rgba(0,0,0,0.3)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>Vorher</span>
                </div>
                {/* Nachher */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-2"
                  style={{ background: 'rgba(52,211,153,0.03)' }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(52,211,153,0.2)" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(52,211,153,0.35)' }}>Nachher</span>
                </div>
                {/* Trennlinie mit Pfeil */}
                {!k.platzhalter && (
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: '#0D1721', border: '1px solid rgba(52,211,153,0.35)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Fakten */}
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <p className="font-barlow font-bold text-lg" style={{ color: '#E6E8EB' }}>{k.name}</p>
                  <p className="font-inter text-xs mt-0.5" style={{ color: '#5B6773' }}>{k.meta}</p>
                </div>

                {k.kennzahl && (
                  <div
                    className="flex items-baseline gap-2 py-2 px-3 rounded-lg"
                    style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}
                  >
                    <span className="font-barlow font-bold text-2xl" style={{ color: '#34D399' }}>{k.kennzahl}</span>
                    <span className="font-inter text-xs" style={{ color: '#5B6773' }}>{k.zeitraum}</span>
                  </div>
                )}

                {k.fakten.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {k.fakten.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-6" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-inter text-sm" style={{ color: '#8A96A3' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {k.platzhalter && (
                  <p className="font-inter text-sm text-center py-4" style={{ color: '#3A4A5A' }}>Weitere Ergebnisse folgen</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
