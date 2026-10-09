import Image from 'next/image'

/**
 * Drei Kundengesichter, leicht ueberlappend, daneben die Zahl.
 *
 * Echte Klienten, keine Symbolfotos: Gregory, Richard und Robert, deren
 * Fallstudien auch auf /danke stehen. `zIndex` legt den ersten nach vorn,
 * damit sie sich von links nach rechts staffeln.
 *
 * `sterne` blendet fuenf goldene Sterne ueber der Zeile ein — dort, wo die
 * Reihe als Bewertung gelesen werden soll und nicht nur als Anzahl.
 *
 * `gross` vergroessert Gesichter und Zeile — gebraucht im Hero, wo die Reihe
 * neben dem Video steht und nicht als Randnotiz unter einem Knopf.
 */
export default function KundenReihe({ sterne = false, gross = false }: { sterne?: boolean; gross?: boolean }) {
  // Dieselben drei Personen und Porträts wie in den Fallstudien auf /danke.
  // Die quadratischen Ausschnitte sind 320 px gross und bleiben auch bei
  // doppelter Pixeldichte scharf (vorher 160-px-Bilder von LinkedIn).
  const kunden = [
    { src: '/images/Gregory-Portrait.jpg', name: 'Gregory' },
    { src: '/images/Richard-Portrait.jpg', name: 'Richard' },
    { src: '/images/Robert-Portrait.jpg', name: 'Robert' },
  ]

  const kante = gross ? 64 : 48
  const ueberlappung = gross ? -16 : -12

  return (
    <div className={`flex items-center ${gross ? 'gap-5' : 'gap-4'}`}>
      <div className="flex">
        {kunden.map((k, i) => (
          <span
            key={k.src}
            className="relative rounded-full overflow-hidden flex-shrink-0"
            style={{
              width: kante,
              height: kante,
              marginLeft: i === 0 ? 0 : ueberlappung,
              // Dunkler Rand trennt die ueberlappenden Gesichter, der goldene
              // Ring aussen haelt sie als Reihe zusammen. Als box-shadow, weil
              // ein Ring innen vom Bild verdeckt wuerde.
              border: '2px solid #060E1F',
              boxShadow: '0 0 0 1.5px rgba(201,168,76,0.55)',
              zIndex: kunden.length - i,
            }}
          >
            <Image src={k.src} alt={`${k.name}, Klient von Fabian Schönle`} width={160} height={160} className="w-full h-full object-cover" />
          </span>
        ))}
      </div>
      <div>
        {sterne && (
          <div className="flex gap-0.5 mb-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="#C9A84C">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
              </svg>
            ))}
          </div>
        )}
        <p className={`font-inter ${gross ? 'text-lg md:text-xl' : 'text-sm'}`} style={{ color: '#C6CDD5' }}>
          <span className="font-semibold" style={{ color: '#E8D49A' }}>Über 30</span> Personen begleitet
        </p>
      </div>
    </div>
  )
}
