import Image from 'next/image'
import { Rich } from '@/components/Rich'

export default function HypotheseSection({ content = {} }: { content?: Record<string, string> }) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'transparent' }}>

      {/* Hintergrund-Gitter — oben und unten weich ausgeblendet */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid-hyp" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.11)" strokeWidth="1" />
          </pattern>
          <pattern id="diagonal-hyp" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(201,168,76,0.055)" strokeWidth="1" />
          </pattern>
          <linearGradient id="grid-fade-hyp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="38%" stopColor="white" stopOpacity="1" />
            <stop offset="62%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fade-mask-hyp">
            <rect width="100%" height="100%" fill="url(#grid-fade-hyp)" />
          </mask>
        </defs>
        <g mask="url(#fade-mask-hyp)">
          <rect width="100%" height="100%" fill="url(#grid-hyp)" />
          <rect width="100%" height="100%" fill="url(#diagonal-hyp)" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">

        <div className="animate-fade-up flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">

          {/* Left: Titel + Text */}
          <div className="flex-1 min-w-0">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {content.wahrheit_label || 'Die Wahrheit'}
            </p>

            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-10" style={{ color: '#E6E8EB' }}>
              {content.wahrheit_title_1 || 'Warum deine Ansätze bisher'}<br className="hidden md:block" /> {content.wahrheit_title_2 || 'keine Ergebnisse lieferten'}
            </h2>

            <div
              className="mb-10"
              style={{ height: 1, background: 'linear-gradient(to right, rgba(201,168,76,0.4), transparent)' }}
            />

            <Rich as="p" className="font-inter text-base md:text-lg leading-relaxed" style={{ color: '#A6B0BA' }} html={content.wahrheit_body || 'Leistungsorientierte Menschen wollen ihr Problem mit mehr Disziplin lösen, weil sie das aus ihrem beruflichen Leben gewohnt sind. Dadurch wählen sie radikale Ansätze, die zu Heißhunger und Jo-Jo-Effekt führen — und dann entsteht Frustration, die sich durch mehr Stress und damit ein hormonelles Ungleichgewicht (Testosteron sinkt usw.) äußert. Die meisten lassen dann einige Monate vergehen und fangen mit dem nächsten Motivationsschub und noch mehr Disziplin wieder von vorne an…'} />

          </div>

          {/* Right: Kreislauf-Grafik */}
          <div className="w-full lg:w-[460px] flex-shrink-0">
            <Image
              src="/images/Waage transparent2.png"
              alt="Der Teufelskreis: Mehr Disziplin, radikale Ansätze, Heißhunger, Jo-Jo-Effekt, Frustration, Mehr Stress"
              width={717}
              height={717}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
          </div>

        </div>

        {/* Zitatmodul (testweise aus der Lösungssektion übernommen) — transparenter Hintergrund */}
        <div
          className="relative rounded-2xl animate-fade-up flex flex-col md:flex-row md:items-end mt-16 md:mt-24 bg-[#0D1829] md:bg-transparent"
          style={{
            border: '1px solid rgba(201,168,76,0.45)',
            boxShadow: '0 0 30px rgba(201,168,76,0.28), 0 0 12px rgba(201,168,76,0.2), inset 0 0 30px rgba(201,168,76,0.05)',
            overflow: 'visible',
          }}
        >
          {/* Quote */}
          <div className="relative flex flex-col md:flex-1 md:justify-center px-8 py-8 md:px-10 md:py-8 md:pr-[280px]">
            <span
              className="font-barlow font-bold text-7xl leading-none select-none mb-2"
              style={{ color: '#C9A84C', opacity: 0.35, lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <Rich
              as="p"
              className="font-barlow font-bold text-2xl md:text-3xl leading-snug mb-6"
              style={{ color: '#E8D49A' }}
              html={content.wahrheit_quote || 'Wir nutzen die uns zur Verfügung stehenden Ressourcen, um neben Job, Familie und Alltag das Beste rauszuholen.'}
            />
            <div>
              <p className="font-barlow font-bold text-base" style={{ color: '#E6E8EB' }}>{content.wahrheit_quote_author || 'Fabian Schönle'}</p>
              <p className="font-inter text-sm" style={{ color: '#7B8792' }}>{content.wahrheit_quote_role || 'Performance Coach · PhD Chemie'}</p>
            </div>
          </div>

          {/* Fabian portrait — Mobile */}
          <div
            className="md:hidden relative flex-shrink-0 self-center mx-auto"
            style={{ width: 200, height: 240, marginTop: 8, marginBottom: 8 }}
          >
            <Image
              src="/images/FS-Bild-Zitatsektion.png"
              alt="Fabian Schönle"
              fill
              className="object-contain object-top"
              sizes="200px"
            />
          </div>

          {/* Fabian portrait — Desktop (ragt oben aus dem Kasten) */}
          <div
            className="hidden md:block absolute"
            style={{ width: 260, height: 330, right: 24, bottom: 0 }}
          >
            <Image
              src="/images/FS-Bild-Zitatsektion.png"
              alt="Fabian Schönle"
              fill
              className="object-contain object-bottom"
              sizes="280px"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
