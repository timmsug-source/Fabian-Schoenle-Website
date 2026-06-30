import Image from 'next/image'

const LINKEDIN_URL = 'https://www.linkedin.com/in/fabian-sch%C3%B6nle-a273a8363/'
const YOUTUBE_URL = 'https://www.youtube.com/@FuelByFabian'
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

export default async function SocialSection() {
  const videos = await getLatestVideos()

  return (
    <section style={{ background: '#060E1F' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">

        {/* Header */}
        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={{ background: 'linear-gradient(#C9A84C, #E8D49A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Folg mir
          </p>
          <h2 className="font-barlow font-bold text-2xl md:text-3xl mb-3" style={{ color: '#E6E8EB' }}>
            Täglich Insights zu Performance, Ernährung und Mindset
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl" style={{ color: '#5B6773' }}>
            Auf LinkedIn und YouTube teile ich regelmäßig, was wirklich funktioniert — aus der Praxis, nicht aus dem Lehrbuch. Kein Motivationsspam. Sondern konkrete Impulse für Männer, die mehr aus ihrem Körper herausholen wollen.
          </p>
        </div>

        {/* Zwei Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* LinkedIn */}
          <div
            className="flex flex-col rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                style={{ background: '#0A66C2' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <div>
                <p className="font-inter font-semibold text-sm" style={{ color: '#E6E8EB' }}>Fabian Schönle</p>
                <p className="font-inter text-xs" style={{ color: '#5B6773' }}>linkedin.com/in/fabian-schönle</p>
              </div>
            </div>

            {/* Post-Vorschau */}
            <div
              className="flex-1 rounded-xl p-4 mb-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="font-inter text-sm leading-relaxed" style={{ color: '#C8CDD4' }}>
                &bdquo;Die meisten Männer ab 30 trainieren nicht zu wenig — sie trainieren am falschen Hebel. Was dein Blutbild dir über dein Training verrät, was kein Trainer jemals misst.&ldquo;
              </p>
              <p className="font-inter text-xs mt-3" style={{ color: '#3A4A5A' }}>Beispiel-Post · LinkedIn</p>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: '#0A66C2', color: '#FFFFFF' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Auf LinkedIn folgen
            </a>
          </div>

          {/* YouTube */}
          <div
            className="flex flex-col rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #0D1829 0%, #0B1525 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                style={{ background: '#FF0000' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
              <div>
                <p className="font-inter font-semibold text-sm" style={{ color: '#E6E8EB' }}>FuelByFabian</p>
                <p className="font-inter text-xs" style={{ color: '#5B6773' }}>youtube.com/@FuelByFabian</p>
              </div>
            </div>

            {/* Video-Grid */}
            {videos.length > 0 ? (
              <div className="flex-1 grid grid-cols-2 gap-2 mb-5">
                {videos.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-lg overflow-hidden"
                    style={{ aspectRatio: '16/9' }}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                      sizes="200px"
                      unoptimized
                    />
                    {/* Play-Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(0,0,0,0.45)' }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,0,0,0.9)' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                          <polygon points="2,1 9,5 2,9" />
                        </svg>
                      </div>
                    </div>
                    {/* Titel-Tooltip am unteren Rand */}
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
                      <p className="font-inter text-[10px] leading-tight line-clamp-2" style={{ color: '#E6E8EB' }}>{video.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex-1 rounded-xl p-4 mb-5 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="font-inter text-sm" style={{ color: '#5B6773' }}>Videos werden geladen…</p>
              </div>
            )}

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: '#FF0000', color: '#FFFFFF' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Auf YouTube folgen
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
