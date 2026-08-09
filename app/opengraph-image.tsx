import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SITE_NAME } from '@/lib/constants'

/**
 * Social-Vorschaubild (1200×630) für alle Seiten.
 *
 * Wird zur Build-Zeit einmal gerendert. Vorher zeigte die Metadata auf
 * /images/og-image.jpg — diese Datei existierte nie, jede geteilte URL lieferte
 * also eine leere Vorschau. Das Logo liegt nur in 180×180 vor und wird deshalb
 * in Originalgröße gesetzt statt hochskaliert; die Schrift rendert vektorscharf.
 */
export const alt = `${SITE_NAME} — Datenbasiertes Performance Coaching`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), 'public/images/apple-touch-icon-180x180.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 90px',
          background: 'linear-gradient(135deg, #182A3A 0%, #0D1721 55%, #060E1F 100%)',
        }}
      >
        {/* Goldene Haarlinie oben — greift die Trennlinien der Website auf */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(to right, #8A5D1F, #C9A84C, #F2D27A, #C9A84C, #8A5D1F)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={180} height={180} alt="" style={{ borderRadius: 28 }} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 26,
                letterSpacing: 6,
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: 14,
              }}
            >
              {SITE_NAME}
            </div>
            <div style={{ fontSize: 74, fontWeight: 700, color: '#E6E8EB', lineHeight: 1.05 }}>
              Fabian Schönle
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 38,
            color: '#AEB5BE',
            marginTop: 54,
            lineHeight: 1.35,
            maxWidth: 960,
          }}
        >
          Datenbasiertes Performance Coaching — auf Basis von Blut- und DNA-Analyse.
        </div>
      </div>
    ),
    size,
  )
}
