import Image from 'next/image'

const LINKEDIN_URL = 'https://www.linkedin.com/in/fabian-sch%C3%B6nle-a273a8363/'
const INSTAGRAM_URL = 'https://www.instagram.com/fuelbyfabian/'

const instaImages = [
  '/images/Fabian-Schönle-Medaillie.jpg',
  '/images/IMG_1537.JPG',
  '/images/Fabian-Schönle-ohne-Hintergrund.png',
]

export default function SocialSection() {
  return (
    <section style={{ background: '#101C28' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">

        {/* Header */}
        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#4A6741' }}>
            Folg mir
          </p>
          <h2 className="font-barlow font-bold text-2xl md:text-3xl mb-3" style={{ color: '#E6E8EB' }}>
            Täglich Insights zu Performance, Ernährung und Mindset
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl" style={{ color: '#5B6773' }}>
            Auf LinkedIn und Instagram teile ich regelmäßig, was wirklich funktioniert — aus der Praxis, nicht aus dem Lehrbuch. Kein Motivationsspam. Sondern konkrete Impulse für Männer, die mehr aus ihrem Körper herausholen wollen.
          </p>
        </div>

        {/* Zwei Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* LinkedIn */}
          <div
            className="flex flex-col rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
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
                „Die meisten Männer ab 30 trainieren nicht zu wenig — sie trainieren am falschen Hebel. Was dein Blutbild dir über dein Training verrät, was kein Trainer jemals misst."
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

          {/* Instagram */}
          <div
            className="flex flex-col rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #182A3A 0%, #0D1F2D 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </span>
              <div>
                <p className="font-inter font-semibold text-sm" style={{ color: '#E6E8EB' }}>@fuelbyfabian</p>
                <p className="font-inter text-xs" style={{ color: '#5B6773' }}>instagram.com/fuelbyfabian</p>
              </div>
            </div>

            {/* Bild-Kacheln */}
            <div className="grid grid-cols-3 gap-2 flex-1 mb-5">
              {instaImages.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Fabian Schönle Instagram ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-80"
              style={{
                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                color: '#FFFFFF',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Auf Instagram folgen
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
