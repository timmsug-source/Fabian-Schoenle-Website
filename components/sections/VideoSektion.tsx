import SectionLabel from '@/components/ui/SectionLabel'
import VideoPlayerBox from '@/components/ui/VideoPlayerBox'
import KundenReihe from '@/components/ui/KundenReihe'

type VideoSektionProps = {
  label?: string
  headline: string
  /** Zweiter Teil der Überschrift, im Goldverlauf */
  headlineAccent?: string
  intro?: string
  /** YouTube-Video-ID */
  videoId: string
  /** Lokales Vorschaubild — kein Abruf bei Google beim Seitenaufruf */
  videoPosterSrc: string
  videoTitle?: string
}

const goldText = {
  backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)',
  backgroundSize: '100% 1.2em',
  backgroundRepeat: 'repeat-y',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

/**
 * Das Video als eigene Sektion: links das Video im Rahmen, rechts Einordnung,
 * Ueberschrift, Text und darunter die Kundenreihe.
 *
 * Das Video kommt von YouTube und laedt erst nach einem Klick ueber
 * youtube-nocookie.com (VideoPlayerBox).
 */
export default function VideoSektion({ label, headline, headlineAccent, intro, videoId, videoPosterSrc, videoTitle }: VideoSektionProps) {
  return (
    <section style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Links: Video. Auf dem Handy unter dem Text, damit man zuerst weiss, worum es geht. */}
          <div
            className="lg:col-span-7 order-2 lg:order-1 rounded-2xl overflow-hidden animate-fade-up"
            style={{
              border: '1px solid rgba(201,168,76,0.35)',
              boxShadow: '0 0 40px rgba(201,168,76,0.12)',
            }}
          >
            <VideoPlayerBox videoId={videoId} posterSrc={videoPosterSrc} title={videoTitle} rahmenlos />
          </div>

          {/* Rechts: Text */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '80ms' }}>
            {label && (
              <div className="mb-4">
                <SectionLabel>{label}</SectionLabel>
              </div>
            )}
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
              {headline}
              {headlineAccent && (
                <>
                  {' '}
                  <span style={goldText}>{headlineAccent}</span>
                </>
              )}
            </h2>
            {intro && (
              <p className="font-inter text-base md:text-lg leading-relaxed mt-5" style={{ color: '#A6B0BA' }}>
                {intro}
              </p>
            )}
            <div className="mt-8 flex justify-center lg:justify-start">
              <KundenReihe />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
