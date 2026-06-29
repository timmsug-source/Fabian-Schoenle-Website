const proofKarten = [
  {
    name: 'Thomas K.',
    meta: 'Unternehmer · 38 Jahre',
    bildVorher: '/images/thomas-vorher.png',
    bildNachher: '/images/thomas-nachher.png',
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
    bildVorher: '/images/thomas-vorher.png',
    bildNachher: '/images/thomas-nachher.png',
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
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="es0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Körper/Silhouette */}
        <circle cx="18" cy="8" r="5" fill="url(#es0)"/>
        <path d="M8 34 L8 20 C8 15 12 12 18 12 C24 12 28 15 28 20 L28 34" fill="url(#es0)"/>
        <rect x="6" y="19" width="5" height="14" rx="2.5" fill="url(#es0)"/>
        <rect x="25" y="19" width="5" height="14" rx="2.5" fill="url(#es0)"/>
      </svg>
    ),
    label: 'Körperlich',
    farbe: '#C9A84C',
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
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="es1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Gehirn */}
        <path d="M18 4 C11 4 6 9 6 15 C6 19 8 22 11 24 L11 28 L25 28 L25 24 C28 22 30 19 30 15 C30 9 25 4 18 4Z" fill="url(#es1)"/>
        <path d="M20 10 L15 18 L19 18 L16 26 L22 16 L18 16 L20 10Z" fill="#060E1F" opacity="0.3"/>
      </svg>
    ),
    label: 'Mental',
    farbe: '#C9A84C',
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
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="es2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#E8D49A"/></linearGradient></defs>
        {/* Blitz / Energie */}
        <path d="M22 3 L10 20 L17 20 L14 33 L26 16 L19 16 L22 3Z" fill="url(#es2)"/>
      </svg>
    ),
    label: 'Beruflich',
    farbe: '#C9A84C',
    punkte: [
      'Höhere Leistungsfähigkeit über den gesamten Tag',
      'Bessere Präsenz in Meetings und Gesprächen',
      'Weniger Reaktivität, mehr strategisches Denken',
      'Das Selbstbild passt wieder zum eigenen Anspruch',
    ],
  },
]

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 38 38" fill="none" className="flex-shrink-0 mt-0.5">
      <defs>
        <linearGradient id="check-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill="url(#check-gold)" />
    </svg>
  )
}

export default function ErgebnisSection() {
  return (
    <section id="ergebnisse" className="relative" style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: '1px solid rgba(201,168,76,0.35)',
                boxShadow: '0 0 30px rgba(201,168,76,0.08), 0 20px 60px rgba(0,0,0,0.4)',
                animationDelay: `${i * 60 + 80}ms`,
              }}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0">
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
                    <Check />
                    <span className="font-inter text-sm leading-relaxed" style={{ color: '#8A96A3' }}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Subtiler Goldstreifen oben */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)' }}
              />
            </div>
          ))}
        </div>

        {/* Abschluss-Statement */}
        <div
          className="relative rounded-2xl px-8 py-10 md:px-12 text-center animate-fade-up"
          style={{
            background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            animationDelay: '240ms',
          }}
        >
          <div
            className="absolute top-0 left-16 right-16 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)' }}
          />
          <span
            className="font-barlow font-bold text-5xl leading-none select-none"
            style={{ color: '#C9A84C', opacity: 0.3, display: 'block', lineHeight: 1, marginBottom: '-8px' }}
          >
            &ldquo;
          </span>
          <p
            className="font-barlow font-bold text-xl md:text-2xl leading-snug max-w-3xl mx-auto"
            style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
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
          <p className="font-barlow font-bold text-2xl md:text-3xl" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
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
                background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)',
                border: k.platzhalter ? '1px dashed rgba(255,255,255,0.08)' : '1px solid rgba(201,168,76,0.25)',
                boxShadow: k.platzhalter ? 'none' : '0 0 24px rgba(201,168,76,0.08), 0 0 60px rgba(0,0,0,0.3)',
                opacity: k.platzhalter ? 0.45 : 1,
              }}
            >
              {/* Vorher / Nachher Bildbereich */}
              <div className="relative flex" style={{ height: 240 }}>
                {/* Vorher */}
                <div
                  className="flex-1 relative overflow-hidden"
                  style={{ background: 'rgba(0,0,0,0.3)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {k.bildVorher ? (
                    <>
                      <img src={k.bildVorher} alt="Vorher" className="absolute inset-0 w-full h-full object-cover object-top" />
                      <span className="absolute bottom-2 left-0 right-0 text-center font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>Vorher</span>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>Vorher</span>
                    </div>
                  )}
                </div>
                {/* Nachher */}
                <div
                  className="flex-1 relative overflow-hidden"
                  style={{ background: 'rgba(52,211,153,0.03)' }}
                >
                  {k.bildNachher ? (
                    <>
                      <img src={k.bildNachher} alt="Nachher" className="absolute inset-0 w-full h-full object-cover object-top" />
                      <span className="absolute bottom-2 left-0 right-0 text-center font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.85)' }}>Nachher</span>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span className="font-inter text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.35)' }}>Nachher</span>
                    </div>
                  )}
                </div>
                {/* Trennlinie mit Pfeil */}
                {!k.platzhalter && (
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: '#060E1F', border: '1px solid rgba(201,168,76,0.35)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <span className="font-barlow font-bold text-2xl" style={{ color: '#34D399' }}>{k.kennzahl}</span>
                    <span className="font-inter text-xs" style={{ color: '#5B6773' }}>{k.zeitraum}</span>
                  </div>
                )}

                {k.fakten.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {k.fakten.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 38 38" fill="none">
                          <defs><linearGradient id="check-gold-f" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#B8832A"/><stop offset="45%" stopColor="#C9A84C"/><stop offset="75%" stopColor="#F2D27A"/><stop offset="100%" stopColor="#C9A84C"/></linearGradient></defs>
                          <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill="url(#check-gold-f)" />
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
