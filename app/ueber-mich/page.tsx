import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import PersonSchema from '@/components/schema/PersonSchema'
import { CALENDLY_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Über Fabian Schönle — Performance Coach & Chemiker | FS-Performance',
  description:
    'Fabian Schönle verbindet wissenschaftliche Präzision mit praktischer Umsetzung. Erfahre, wie sein Ansatz entstanden ist und für wen er gemacht ist.',
  slug: 'ueber-mich',
})

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
    {children}
  </p>
)

const qualifikationen = [
  { zahl: 'M.Sc', label: 'Chemie', text: 'Wissenschaftliche Denkweise — ich analysiere komplexe Systeme, statt zu raten.' },
  { zahl: '10+', label: 'Jahre', text: 'am eigenen System geforscht, getestet und optimiert — lange bevor daraus ein Coaching wurde.' },
  { zahl: '1', label: 'Transformation', text: 'die ich selbst durchlebt habe. Ich weiß, wie sich der Punkt anfühlt, an dem nichts mehr reagiert.' },
]

const stimmen = [
  {
    zitat: 'Zum ersten Mal hatte ich das Gefühl, dass jemand wirklich versteht, was in meinem Körper los ist — statt mir einfach den nächsten Plan zu geben.',
    name: 'Gregory N.',
    beruf: 'Wealth Management',
  },
  {
    zitat: 'Fabian erklärt Zusammenhänge so, dass sie Sinn ergeben. Kein Druck, keine Dogmen — sondern echtes Verständnis für meinen Alltag.',
    name: 'Matthias K.',
    beruf: 'Director Global Aftermarket',
  },
  {
    zitat: 'Endlich jemand, der nicht mit Willenskraft argumentiert, sondern mit Daten. Das hat für mich alles verändert.',
    name: 'Robert R.',
    beruf: 'Geschäftsführer',
  },
]

export default function UeberMichPage() {
  return (
    <main style={{ background: '#060E1F' }}>
      <PersonSchema />

      {/* 1 — Hero */}
      <section className="relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <pattern id="um-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
            </pattern>
            <linearGradient id="um-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="um-mask"><rect width="100%" height="100%" fill="url(#um-fade)" /></mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#um-grid)" mask="url(#um-mask)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8" style={{ paddingTop: 150, paddingBottom: 80 }}>

          {/* Kopfzeile: Headline + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
            <div>
              <Label>Über mich</Label>
              <h1 className="font-barlow font-bold uppercase text-4xl md:text-6xl leading-[0.98]" style={{ color: '#E6E8EB' }}>
                Wo Wissenschaft<br />auf{' '}
                <span style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.05em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Praxis trifft</span>
              </h1>
            </div>
            <div className="lg:pt-4">
              <p className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
                Ich bin Fabian Schönle. Ich helfe leistungsorientierten Männern ab 30, ihren Körper wieder auf das Niveau zu bringen, das sie von sich selbst erwarten — mit der Präzision, die sie aus ihrem Business kennen: datenbasiert, individuell, ohne Hype.
              </p>
            </div>
          </div>

          {/* Drei Karten */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

            {/* Karte A — Feature */}
            <div className="relative overflow-hidden rounded-2xl px-7 py-8 flex flex-col justify-between" style={{ minHeight: 340, background: 'linear-gradient(155deg, #13233E 0%, #0D1829 60%, #091122 100%)', border: '1px solid rgba(201,168,76,0.4)' }}>
              <span className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full font-inter text-[11px] font-bold uppercase tracking-wider mb-6" style={{ background: 'radial-gradient(circle, #C9A84C, #E8D49A)', color: '#060E1F' }}>
                Präzision
              </span>
              <h3 className="font-barlow font-bold uppercase text-2xl md:text-3xl leading-tight" style={{ color: '#E6E8EB' }}>
                Eine Besessenheit für messbare Ergebnisse
              </h3>
              {/* dezente Gold-Linie als Deko */}
              <svg className="absolute -bottom-6 -right-4 opacity-30" width="150" height="150" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <ellipse cx="50" cy="50" rx="42" ry="26" stroke="#C9A84C" strokeWidth="1.5" />
                <ellipse cx="50" cy="50" rx="30" ry="16" stroke="#C9A84C" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Karte B — Portrait (größer) */}
            <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: 440, border: '1.5px solid rgba(201,168,76,0.4)', boxShadow: '0 0 60px rgba(201,168,76,0.15)', background: '#0b1420' }}>
              <Image src="/images/Fabian-Schoenle-Blick-Kamera.webp" alt="Fabian Schönle — Performance Coach" fill className="object-cover" style={{ objectPosition: 'center 15%' }} sizes="(max-width: 768px) 100vw, 420px" />
            </div>

            {/* Karte C — Ironman-Foto + Siegel */}
            <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: 340, border: '1px solid rgba(201,168,76,0.4)' }}>
              <Image src="/images/Fabian-Schönle-Medaillie.jpg" alt="Fabian Schönle beim Ironman 70.3" fill className="object-cover" style={{ objectPosition: 'center 20%' }} sizes="(max-width: 768px) 100vw, 420px" />
              {/* Siegel-Badge */}
              <div className="absolute top-4 right-4 flex flex-col items-center justify-center rounded-full font-barlow font-bold text-center leading-none" style={{ width: 76, height: 76, background: 'radial-gradient(circle, #C9A84C, #E8D49A)', color: '#060E1F', boxShadow: '0 4px 16px rgba(0,0,0,0.4)', transform: 'rotate(-10deg)' }}>
                <span className="text-[11px] uppercase tracking-wide">Ironman</span>
                <span className="text-lg">70.3</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2 — Der Moment, der alles verändert hat */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-start">

            {/* Text */}
            <div>
              <Label>Der Wendepunkt</Label>
              <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-10" style={{ color: '#E6E8EB' }}>
                Der Moment, der alles verändert hat
              </h2>

              {/* Timeline */}
              <div className="relative pl-8">
                <div className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), rgba(201,168,76,0.1))' }} />
                <div className="flex flex-col gap-6 font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
                  <p className="relative">
                    <span className="absolute -left-8 top-2.5" style={{ width: 11, height: 11, borderRadius: '50%', background: 'radial-gradient(circle, #C9A84C, #E8D49A)', boxShadow: '0 0 10px rgba(201,168,76,0.5)' }} />
                    Studium. Nebenjob. Leistungssport. Familie. Alles gleichzeitig, alles auf Anschlag. Irgendwann kam der Punkt, an dem ich merkte: Der Körper zieht nicht mehr mit.
                  </p>
                  <p className="relative">
                    <span className="absolute -left-8 top-2.5" style={{ width: 11, height: 11, borderRadius: '50%', background: 'radial-gradient(circle, #C9A84C, #E8D49A)', boxShadow: '0 0 10px rgba(201,168,76,0.5)' }} />
                    Nicht, weil ich weniger diszipliniert war. Sondern weil ich anfing, ihn zu ignorieren — weil Studium, Sport und Alltag mehr Raum einnahmen als alles andere.
                  </p>
                  <p className="relative">
                    <span className="absolute -left-8 top-2.5" style={{ width: 11, height: 11, borderRadius: '50%', background: 'radial-gradient(circle, #C9A84C, #E8D49A)', boxShadow: '0 0 10px rgba(201,168,76,0.5)' }} />
                    Also habe ich das getan, was die meisten tun: mehr Disziplin, strengere Programme, das nächste System. Kurzfristig passierte etwas. Mittelfristig stagnierte alles wieder. Und mit jedem gescheiterten Versuch wuchs der Verdacht, dass mit mir etwas grundlegend nicht stimmt.
                  </p>
                </div>
              </div>

              {/* Pull-Quote */}
              <div className="mt-10 rounded-2xl px-7 py-6" style={{ background: 'rgba(201,168,76,0.05)', borderLeft: '3px solid rgba(201,168,76,0.7)', border: '1px solid rgba(201,168,76,0.2)', borderLeftWidth: 3 }}>
                <p className="font-barlow font-bold text-xl md:text-2xl leading-snug" style={{ color: '#E8D49A' }}>
                  {'„Ich war selbst da, wo du gerade stehst.“'}
                </p>
              </div>
            </div>

            {/* Bild */}
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-5 rounded-3xl blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/5' }}>
                <Image src="/images/Fabian-Schoenle-Sektion-Problem.png" alt="Fabian Schönle" fill className="object-cover" style={{ objectPosition: 'center 20%' }} sizes="(max-width: 1024px) 100vw, 460px" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 — Diagnose (eingebettet, nicht gelabelt) */}
      <section style={{ background: '#091122', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="flex flex-col gap-5 font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }}>
            <p>Was ich damals nicht verstand: Der Körper reagiert nicht plötzlich schlechter, weil man älter wird. Er reagiert schlechter, weil das System darunter aus dem Gleichgewicht gerät.</p>
            <p>Dein Stoffwechsel, deine Hormone, dein Schlaf, deine Stresslast — das spielt alles zusammen. Wenn dieses Zusammenspiel gestört ist, kämpft dein Körper gegen dich. Egal, wie viel Aufwand du betreibst. Du trainierst mehr, isst weniger, schläfst schlechter — und trotzdem passiert nichts. Weil niemand je gemessen hat, was dein System eigentlich braucht.</p>
            <p className="font-semibold text-lg md:text-xl" style={{ color: '#E6E8EB' }}>Kein Arzt. Kein Trainer. Kein Coach. Nur Annahmen — nie Daten.</p>
          </div>
        </div>
      </section>

      {/* 4 — Qualifikation */}
      <section>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <Label>Warum ich</Label>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
              Aus wissenschaftlichem Zwang,<br className="hidden md:block" /> nicht aus Trend
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualifikationen.map((q, i) => (
              <div key={i} className="symptom-card flex flex-col rounded-2xl px-7 py-8 text-center md:text-left">
                <div className="flex items-baseline gap-2 justify-center md:justify-start mb-4">
                  <span className="font-barlow font-bold text-4xl md:text-5xl" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{q.zahl}</span>
                  <span className="font-barlow font-semibold text-lg" style={{ color: '#E6E8EB' }}>{q.label}</span>
                </div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#A6B0BA' }}>{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Meine Methode in einem Satz */}
      <section style={{ background: '#091122', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center">
          <Label>Meine Methode</Label>
          <p className="font-barlow font-bold text-2xl md:text-4xl leading-snug mb-8" style={{ color: '#E6E8EB' }}>
            Ich behandle deinen Körper so, wie du dein Business behandelst:{' '}
            <span style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.15em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>datenbasiert, strategisch und mit klarem Ziel.</span>
          </p>
          <Link href="/personal-coaching-online" className="inline-flex items-center gap-2 font-inter font-semibold text-sm transition-colors hover:text-white" style={{ color: '#E8D49A' }}>
            Sieh dir an, wie ich arbeite
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      {/* 6 — Stimmen von Kunden */}
      <section>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="text-center mb-14">
            <Label>Stimmen</Label>
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
              Endlich verstanden werden
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stimmen.map((s, i) => (
              <div key={i} className="symptom-card flex flex-col rounded-2xl px-7 py-8">
                <span className="font-barlow font-bold text-5xl leading-none mb-3 select-none" style={{ color: '#C9A84C', opacity: 0.35 }}>&ldquo;</span>
                <p className="font-inter text-sm md:text-base leading-relaxed mb-6 flex-1" style={{ color: '#DCDFE4' }}>{s.zitat}</p>
                <div>
                  <p className="font-barlow font-bold text-base" style={{ color: '#E6E8EB' }}>{s.name}</p>
                  <p className="font-inter text-xs" style={{ color: '#7B8792' }}>{s.beruf}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CTA */}
      <section style={{ background: '#091122', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center">
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
            Wenn du wissen willst, was dein System gerade limitiert —
          </h2>
          <p className="font-inter text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: '#A6B0BA' }}>
            … dann lass es uns gemeinsam herausfinden. Im kostenlosen Erstgespräch schauen wir, wo bei dir der Hebel liegt — unverbindlich und ohne Druck.
          </p>
          <a
            href={CALENDLY_URL}
            data-open-form="true"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-metal inline-flex items-center gap-2 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Erstgespräch vereinbaren
          </a>
        </div>
      </section>
    </main>
  )
}
