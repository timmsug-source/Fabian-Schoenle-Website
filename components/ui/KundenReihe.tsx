import Image from 'next/image'

/**
 * Vier Kundengesichter, leicht ueberlappend, daneben die Zahl.
 *
 * Die Bilder stammen aus den LinkedIn-Empfehlungen, die ohnehin im
 * Bewertungsraster der Seite stehen — es sind also echte Klienten, keine
 * Symbolfotos. Der weisse Ring setzt sie voneinander ab, `zIndex` legt den
 * ersten nach vorn, damit sie sich von links nach rechts staffeln.
 *
 * `sterne` blendet fuenf goldene Sterne ueber der Zeile ein — dort, wo die
 * Reihe als Bewertung gelesen werden soll und nicht nur als Anzahl.
 *
 * `gross` vergroessert Gesichter und Zeile — gebraucht im Hero, wo die Reihe
 * neben dem Video steht und nicht als Randnotiz unter einem Knopf.
 */
export default function KundenReihe({ sterne = false, gross = false }: { sterne?: boolean; gross?: boolean }) {
  const kunden = [
    { src: '/images/kunde-gregory.png', name: 'Gregory' },
    { src: '/images/kunde-axel.png', name: 'Axel' },
    { src: '/images/kunde-hansherbert.png', name: 'Hans-Herbert' },
    { src: '/images/kunde-matthias.png', name: 'Matthias' },
  ]

  const kante = gross ? 64 : 42
  const ueberlappung = gross ? -18 : -12

  return (
    <div className={`flex items-center ${gross ? 'gap-5' : 'gap-4'}`}>
      <div className="flex">
        {kunden.map((k, i) => (
          <span
            key={k.src}
            className="relative rounded-full overflow-hidden"
            style={{
              width: kante,
              height: kante,
              marginLeft: i === 0 ? 0 : ueberlappung,
              border: '2px solid #0B1525',
              // Ring nach innen, damit die Reihe buendig mit dem Knopf darueber steht:
                    // ein aeusserer Schatten zaehlt nicht zum Layout und ragte daher heraus.
                    boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.35)',
              zIndex: kunden.length - i,
            }}
          >
            <Image src={k.src} alt={`${k.name} — Klient von Fabian Schönle`} width={160} height={160} className="w-full h-full object-cover" />
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
          <span className="font-semibold" style={{ color: '#E8D49A' }}>40+</span> zufriedene Kunden
        </p>
      </div>
    </div>
  )
}
