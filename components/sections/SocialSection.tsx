import { txt } from '@/lib/cms-text'
import Image from 'next/image'

// Aus den Konstanten, damit Profil-URLs und die `sameAs`-Angaben der
// strukturierten Daten nicht auseinanderlaufen können.
import { LINKEDIN_URL, YOUTUBE_URL } from '@/lib/constants'

const YOUTUBE_CHANNEL_ID = 'UC6pwxF5Ngw8kYbJgjd-eqMg'

interface YTVideo {
  id: string
  title: string
}

async function getLatestVideos(): Promise<YTVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const xml = await res.text()
    const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g))
    return entries.slice(0, 2).map((m) => {
      const idMatch = m[1].match(/<yt:videoId>([^<]+)<\/yt:videoId>/)
      const titleMatch = m[1].match(/<title>([^<]+)<\/title>/)
      return {
        id: idMatch?.[1] ?? '',
        title: titleMatch?.[1] ?? '',
      }
    }).filter((v) => v.id)
  } catch {
    return []
  }
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="flex items-center justify-center rounded-full"
        style={{ width: 76, height: 76, background: 'rgba(255,255,255,0.92)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#C9A84C"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </div>
  )
}

const MEDIA_FRAME = {
  border: '1.5px solid rgba(201,168,76,0.35)',
  boxShadow: '0 0 60px rgba(201,168,76,0.14)',
}

export default async function SocialSection({ content = {} }: { content?: Record<string, string> }) {
  const youtubeUrl = txt(content, 'social_youtube_url', YOUTUBE_URL)
  const linkedinUrl = txt(content, 'social_linkedin_url', LINKEDIN_URL)
  const videos = await getLatestVideos()
  const latest = videos[0]

  return (
    <section style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 flex flex-col gap-16 md:gap-24">

        {/* Header */}
        <div className="text-center animate-fade-up">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-4" style={{ backgroundImage: 'linear-gradient(#C9A84C, #E8D49A)', backgroundSize: '100% 1.2em', backgroundRepeat: 'repeat-y', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {txt(content, 'social_label', 'Social Media')}
          </p>
          <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight" style={{ color: '#E6E8EB' }}>
            {txt(content, 'social_title', 'Folg mir für mehr')}
          </h2>
        </div>

        {/* ── YouTube ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
              {txt(content, 'social_youtube_titel', 'YouTube')}
            </h2>
            <p className="font-inter text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: '#A6B0BA' }}>
              {txt(content, 'social_youtube_text', 'Auf meinem YouTube-Kanal siehst du regelmäßig wertvolle Studieneinblicke und Diskussionen rund um das Thema Gesundheit & Ernährung.')}
            </p>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {txt(content, 'social_youtube_button', 'Jetzt abonnieren')}
            </a>
          </div>

          {/* Media — Video-Thumbnail */}
          <a
            href={latest ? `https://www.youtube.com/watch?v=${latest.id}` : youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl animate-fade-up"
            style={{ ...MEDIA_FRAME, aspectRatio: '16/9' }}
          >
            {/*
              Bewusst ohne `unoptimized`: Das Vorschaubild laeuft dadurch ueber
              den eigenen Server (remotePatterns in next.config.mjs). Vorher lud
              der Browser es direkt bei img.youtube.com — dabei ging bei jedem
              Seitenaufruf die IP des Besuchers an Google, ungefragt.
            */}
            {latest ? (
              <Image
                src={`https://img.youtube.com/vi/${latest.id}/maxresdefault.jpg`}
                alt={latest.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #16213A 0%, #0D1829 100%)' }} />
            )}
            <PlayOverlay />
          </a>
        </div>

        {/* ── LinkedIn ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <h2 className="font-barlow font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#E6E8EB' }}>
              {txt(content, 'social_linkedin_titel', 'LinkedIn')}
            </h2>
            <p className="font-inter text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: '#A6B0BA' }}>
              {txt(content, 'social_linkedin_text', 'Auf LinkedIn teile ich regelmäßig, was in der Praxis wirklich funktioniert — konkrete Impulse zu Performance, Ernährung und Mindset. Kein Motivationsspam.')}
            </p>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-metal inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-inter font-semibold text-sm transition-transform"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {txt(content, 'social_linkedin_button', 'Jetzt vernetzen')}
            </a>
          </div>

          {/* Media — LinkedIn Profil-Screenshot */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl animate-fade-up"
            style={MEDIA_FRAME}
          >
            <Image
              src="/images/Bildschirmfoto 2026-07-08 um 21.51.53.png"
              alt="Fabian Schönle auf LinkedIn"
              width={1568}
              height={880}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </a>
        </div>

      </div>
    </section>
  )
}
