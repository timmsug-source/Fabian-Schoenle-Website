import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SITE_NAME } from '@/lib/constants'

/**
 * Social-Vorschaubild (1200×630) für alle Seiten: Logo, Name und Marke —
 * dasselbe Gespann wie in der Navigationsleiste, auf dem dunklen Grund der
 * Website.
 *
 * Wird zur Build-Zeit einmal gerendert. Vorher zeigte die Metadata auf
 * /images/og-image.jpg — diese Datei existierte nie, jede geteilte URL lieferte
 * also eine leere Vorschau.
 *
 * Die Logodatei bringt einen eigenen, flaechigen Hintergrund mit (#0A1122).
 * Genau diesen Ton hat deshalb auch die Flaeche darum — das Logo geht nahtlos
 * in sie ueber. Ein Schein dahinter wurde ausprobiert und wieder verworfen:
 * Die Datei ist deckend, der Schein endete als sichtbares Quadrat um das Logo.
 *
 * Die groesste vorliegende Logodatei misst 180×180 und steht hier auf 340
 * Pixel. In den Vorschaukaesten von LinkedIn und WhatsApp wird das Bild ohnehin
 * wieder verkleinert, dort faellt das nicht auf. Sobald eine groessere Fassung
 * oder eine SVG-Datei vorliegt, hier tauschen.
 *
 * Die Schriften liegen als Dateien im Projekt (app/fonts) und werden hier
 * mitgegeben. Der Bildgenerator kennt die Schriften der Website sonst nicht und
 * saetze alles in seiner Standardschrift — das Bild saehe dann anders aus als
 * die Navigationsleiste, die es nachbaut.
 */
export const alt = `${SITE_NAME} — Datenbasiertes Performance Coaching`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), 'public/images/apple-touch-icon-180x180.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  const barlow = readFileSync(join(process.cwd(), 'app/fonts/BarlowCondensed-SemiBold.ttf'))
  const inter = readFileSync(join(process.cwd(), 'app/fonts/Inter-SemiBold.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A1122',
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

        {/* Dasselbe Gespann wie in der Navigationsleiste: Logo, Name,
            darunter die Marke in Gold */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={340} height={340} alt="" />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Barlow Condensed', fontSize: 92, color: '#E6E8EB', lineHeight: 1.1 }}>
              Fabian Schönle
            </div>
            <div
              style={{
                fontFamily: 'Inter',
                fontSize: 26,
                letterSpacing: 7,
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginTop: 12,
              }}
            >
              {SITE_NAME}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Barlow Condensed', data: barlow, weight: 600, style: 'normal' },
        { name: 'Inter', data: inter, weight: 600, style: 'normal' },
      ],
    }
  )
}
