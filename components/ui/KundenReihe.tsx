import Image from 'next/image'

/**
 * Vier Kundengesichter, leicht ueberlappend, daneben die Zahl.
 *
 * Die Bilder stammen aus den LinkedIn-Empfehlungen, die ohnehin im
 * Bewertungsraster der Seite stehen — es sind also echte Klienten, keine
 * Symbolfotos. Der weisse Ring setzt sie voneinander ab, `zIndex` legt den
 * ersten nach vorn, damit sie sich von links nach rechts staffeln.
 */
export default function KundenReihe() {
  const kunden = [
    { src: '/images/kunde-gregory.png', name: 'Gregory' },
    { src: '/images/kunde-axel.png', name: 'Axel' },
    { src: '/images/kunde-hansherbert.png', name: 'Hans-Herbert' },
    { src: '/images/kunde-matthias.png', name: 'Matthias' },
  ]

  return (
    <div className="flex items-center gap-4">
      <div className="flex">
        {kunden.map((k, i) => (
          <span
            key={k.src}
            className="relative rounded-full overflow-hidden"
            style={{
              width: 42,
              height: 42,
              marginLeft: i === 0 ? 0 : -12,
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
      <p className="font-inter text-sm" style={{ color: '#C6CDD5' }}>
        <span className="font-semibold" style={{ color: '#E8D49A' }}>40+</span> zufriedene Kunden
      </p>
    </div>
  )
}
