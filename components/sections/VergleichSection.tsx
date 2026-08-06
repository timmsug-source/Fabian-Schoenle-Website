import { txt } from '@/lib/cms-text'
import { Rich } from '@/components/Rich'
import Image from 'next/image'

const rows = [
  { feature: 'Individuelle DNA-/Bluttests',             fs: true,  generic: false, online: false, selbst: false },
  { feature: 'Datenbasierte Strategie',                 fs: true,  generic: false, online: false, selbst: false },
  { feature: 'Kontinuierliche Strategieoptimierung',    fs: true,  generic: false, online: false, selbst: true  },
  { feature: 'Individuelle Ernährungsstrategie',        fs: true,  generic: false, online: false, selbst: false },
  { feature: 'Alltagsoptimierte Trainingsroutine',      fs: true,  generic: true,  online: false, selbst: false },
  { feature: '24/7 Chatsupport',                        fs: true,  generic: false, online: false, selbst: false },
  { feature: 'Persönlicher Ansprechpartner',            fs: true,  generic: true,  online: false, selbst: false },
]

const FS_BG    = 'linear-gradient(170deg, #16213A 0%, #0D1829 55%, #091122 100%)'
const FS_SIDES = '1px solid rgba(201,168,76,0.55)'
const FS_GLOW  = '-12px 0 28px rgba(201,168,76,0.10), 12px 0 28px rgba(201,168,76,0.10)'
const ROW_LINE = '1px solid rgba(255,255,255,0.55)'

function Check() {
  return (
    <svg width="44" height="44" viewBox="0 0 38 38" fill="none" className="mx-auto" style={{ filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.7)) drop-shadow(0 0 16px rgba(201,168,76,0.35))' }}>
      <defs>
        <linearGradient id="chk-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill="url(#chk-g)" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mx-auto">
      <path d="M10 10 L26 26 M26 10 L10 26" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function MiniCheck({ i }: { i: number }) {
  return (
    <svg width="24" height="24" viewBox="0 0 38 38" fill="none" className="mx-auto" style={{ filter: 'drop-shadow(0 0 5px rgba(201,168,76,0.6))' }}>
      <defs>
        <linearGradient id={`mchk-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8832A" />
          <stop offset="45%" stopColor="#C9A84C" />
          <stop offset="75%" stopColor="#F2D27A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
      <polygon points="5,21 10.38,24.62 14,27.5 22.55,18.18 33,8 24.45,19.82 14,32.5 8.62,26.38" fill={`url(#mchk-${i})`} />
    </svg>
  )
}

function MiniCross() {
  return (
    <svg width="20" height="20" viewBox="0 0 36 36" fill="none" className="mx-auto">
      <path d="M10 10 L26 26 M26 10 L10 26" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function VergleichSection({ content = {} }: { content?: Record<string, string> }) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060E1F' }}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className="mb-20 animate-fade-up text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {txt(content, 'vergleich_label', 'Der Unterschied')}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            {txt(content, 'vergleich_title_1', 'Warum du')}{' '}
            <span style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {txt(content, 'vergleich_highlight', 'mit mir')}
            </span>{' '}
            {txt(content, 'vergleich_title_2', 'zusammenarbeiten solltest')}
          </h2>
          <Rich
            as="p"
            className="font-inter text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-5"
            style={{ color: '#7B8792' }}
            html={txt(
              content,
              'vergleich_intro',
              'Die meisten Ansätze arbeiten mit Vermutungen. Hier siehst du auf einen Blick, was den Unterschied ausmacht.'
            )}
          />
        </div>

        {/* Tabelle — Desktop */}
        <div className="hidden md:block w-full animate-fade-up" style={{ animationDelay: '80ms' }}>
          <table className="w-full border-separate" style={{ borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="pb-6 text-left" style={{ width: '28%' }} />

                {/* FS Performance Lab — Top der Kachel */}
                <th
                  className="text-center px-4"
                  style={{
                    width: '15%',
                    paddingTop: '1.4rem',
                    paddingBottom: '1.1rem',
                    background: FS_BG,
                    borderTop: FS_SIDES,
                    borderLeft: FS_SIDES,
                    borderRight: FS_SIDES,
                    borderRadius: '12px 12px 0 0',
                    boxShadow: `${FS_GLOW}, 0 -12px 32px rgba(201,168,76,0.14)`,
                  }}
                >
                  <span className="flex flex-col items-center gap-2">
                    <Image src="/images/FS-Logo-60x60-transparenter-Hintergrund.png" alt="FS Performance Lab" width={44} height={44} className="rounded-lg object-contain" />
                    <span className="font-inter font-semibold text-xs leading-tight" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      FS Performance<br />Lab
                    </span>
                  </span>
                </th>

                <th className="pb-6 text-center px-3" style={{ width: '15%' }}>
                  <span className="font-inter font-semibold text-base" style={{ color: '#fff' }}>Personal-<br />trainer</span>
                </th>
                <th className="pb-6 text-center px-3" style={{ width: '15%' }}>
                  <span className="font-inter font-semibold text-base" style={{ color: '#fff' }}>Gruppen-<br />coaching</span>
                </th>
                <th className="pb-6 text-center px-3" style={{ width: '15%' }}>
                  <span className="font-inter font-semibold text-base" style={{ color: '#fff' }}>AI-<br />Coach</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {/* Feature-Name */}
                  <td
                    className="py-5 pr-6"
                    style={{ borderTop: ROW_LINE, boxShadow: '0 -1px 6px rgba(255,255,255,0.04)' }}
                  >
                    <span className="font-inter text-base md:text-lg font-medium" style={{ color: '#E6E8EB' }}>
                      {txt(content, `vergleich_feature${i + 1}`, row.feature)}
                    </span>
                  </td>

                  {/* FS Performance Lab — Kachel-Körper */}
                  <td
                    className="py-5 text-center px-4"
                    style={{
                      background: FS_BG,
                      borderLeft: FS_SIDES,
                      borderRight: FS_SIDES,
                      borderTop: '1px solid rgba(201,168,76,0.25)',
                      boxShadow: FS_GLOW,
                    }}
                  >
                    {row.fs ? <Check /> : <Cross />}
                  </td>

                  <td className="py-5 text-center px-3" style={{ borderTop: ROW_LINE, boxShadow: '0 -1px 6px rgba(255,255,255,0.04)' }}>
                    {row.generic ? <Check /> : <Cross />}
                  </td>
                  <td className="py-5 text-center px-3" style={{ borderTop: ROW_LINE, boxShadow: '0 -1px 6px rgba(255,255,255,0.04)' }}>
                    {row.online ? <Check /> : <Cross />}
                  </td>
                  <td className="py-5 text-center px-3" style={{ borderTop: ROW_LINE, boxShadow: '0 -1px 6px rgba(255,255,255,0.04)' }}>
                    {row.selbst ? <Check /> : <Cross />}
                  </td>
                </tr>
              ))}

              {/* Kachel-Boden — gerundete Kante */}
              <tr>
                <td style={{ borderTop: ROW_LINE, boxShadow: '0 -1px 6px rgba(255,255,255,0.04)' }} />
                <td
                  className="px-4"
                  style={{
                    height: '1rem',
                    background: FS_BG,
                    borderLeft: FS_SIDES,
                    borderRight: FS_SIDES,
                    borderBottom: FS_SIDES,
                    borderTop: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '0 0 12px 12px',
                    boxShadow: `${FS_GLOW}, 0 16px 40px rgba(201,168,76,0.18)`,
                  }}
                />
                <td style={{ borderTop: ROW_LINE }} />
                <td style={{ borderTop: ROW_LINE }} />
                <td style={{ borderTop: ROW_LINE }} />
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kompakte Tabelle — Mobile */}
        <div className="md:hidden animate-fade-up" style={{ animationDelay: '80ms' }}>
          <table className="w-full border-separate" style={{ borderSpacing: 0, tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '34%' }} />
              <col style={{ width: '18%' }} />
              <col style={{ width: '16%' }} />
              <col style={{ width: '16%' }} />
              <col style={{ width: '16%' }} />
            </colgroup>
            <thead>
              <tr>
                <th />
                <th
                  className="text-center px-0.5 pt-3 pb-2 align-bottom"
                  style={{ background: FS_BG, borderTop: FS_SIDES, borderLeft: FS_SIDES, borderRight: FS_SIDES, borderRadius: '10px 10px 0 0', boxShadow: `${FS_GLOW}, 0 -10px 24px rgba(201,168,76,0.12)` }}
                >
                  {/* Auf Mobil nur das Logo — der Schriftzug darunter wird bei 9px unleserlich */}
                  <span className="flex flex-col items-center">
                    <Image src="/images/FS-Logo-60x60-transparenter-Hintergrund.png" alt="FS Performance Lab" width={34} height={34} className="rounded-md object-contain" />
                  </span>
                </th>
                <th className="text-center px-0.5 pb-2 align-bottom">
                  <span className="font-inter font-semibold text-[10px] leading-tight block" style={{ color: '#fff' }}>Personal-<br />trainer</span>
                </th>
                <th className="text-center px-0.5 pb-2 align-bottom">
                  <span className="font-inter font-semibold text-[10px] leading-tight block" style={{ color: '#fff' }}>Gruppen-<br />coaching</span>
                </th>
                <th className="text-center px-0.5 pb-2 align-bottom">
                  <span className="font-inter font-semibold text-[10px] leading-tight block" style={{ color: '#fff' }}>AI-<br />Coach</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const last = i === rows.length - 1
                return (
                  <tr key={i}>
                    <td className="py-3 pr-2" style={{ borderTop: ROW_LINE }}>
                      <span className="font-inter text-xs font-medium leading-snug" style={{ color: '#E6E8EB' }}>{txt(content, `vergleich_feature${i + 1}`, row.feature)}</span>
                    </td>
                    <td
                      className="py-3 text-center"
                      style={{
                        background: FS_BG,
                        borderLeft: FS_SIDES,
                        borderRight: FS_SIDES,
                        borderTop: '1px solid rgba(201,168,76,0.25)',
                        boxShadow: last ? `${FS_GLOW}, 0 12px 28px rgba(201,168,76,0.14)` : FS_GLOW,
                        ...(last ? { borderBottom: FS_SIDES, borderRadius: '0 0 10px 10px' } : {}),
                      }}
                    >
                      {row.fs ? <MiniCheck i={i} /> : <MiniCross />}
                    </td>
                    <td className="py-3 text-center" style={{ borderTop: ROW_LINE }}>{row.generic ? <MiniCheck i={i + 100} /> : <MiniCross />}</td>
                    <td className="py-3 text-center" style={{ borderTop: ROW_LINE }}>{row.online ? <MiniCheck i={i + 200} /> : <MiniCross />}</td>
                    <td className="py-3 text-center" style={{ borderTop: ROW_LINE }}>{row.selbst ? <MiniCheck i={i + 300} /> : <MiniCross />}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
