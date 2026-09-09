'use client'

import { useEffect, useRef, useState } from 'react'

type Zeile = { left: number; top: number; width: number }

/**
 * Unterstreicht seinen Inhalt, wobei sich der Strich mit dem Scrollen zeichnet —
 * über mehrere Zeilen hinweg nacheinander: erst die obere ganz durch, dann die
 * nächste. Er folgt der Bewegung auch rückwärts.
 *
 * Warum das nicht mit CSS allein geht: `box-decoration-break: clone` gibt zwar
 * jeder Zeile ihren eigenen Strich, behandelt aber alle Fragmente gleich — die
 * Zeilen würden parallel wachsen. Für die Staffelung müssen die Zeilen einzeln
 * bekannt sein, und die kennt nur der Browser nach dem Umbruch.
 *
 * Deshalb misst die Komponente die Zeilenkästen des Textes (`getClientRects`)
 * und zeichnet pro Zeile einen eigenen Strich. Der Gesamtfortschritt wird auf
 * die Zeilen verteilt: Bei zwei Zeilen ist die erste bei 50 Prozent fertig,
 * dann beginnt die zweite.
 *
 * Gemessen wird nach jeder Größenänderung neu, weil sich der Umbruch mit der
 * Fensterbreite ändert.
 */
const START = 0.9
const ENDE = 0.45
const DICKE = 2

export default function ScrollUnterstrich({ children }: { children: React.ReactNode }) {
  const boxRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const stricheRef = useRef<(HTMLSpanElement | null)[]>([])
  const [zeilen, setZeilen] = useState<Zeile[]>([])

  // Zeilen ausmessen — nach dem ersten Rendern und bei jeder Größenänderung
  useEffect(() => {
    const box = boxRef.current
    const text = textRef.current
    if (!box || !text) return

    const messen = () => {
      const bezug = box.getBoundingClientRect()

      /*
        `getClientRects` liefert pro Zeile mehrere Kästen, sobald im Text ein
        eigenes Element steckt — etwa ein hervorgehobenes Wort. Ohne
        Zusammenfassung bekäme jedes Bruchstück einen eigenen Strich mit
        eigenem Fortschritt, und die Linie hätte sichtbare Absätze.

        Kästen, deren Unterkante nah beieinander liegt, gehören zur selben
        Zeile und werden zu einem Strich vereint: linkester Anfang bis
        rechtestes Ende.
      */
      const kaesten = Array.from(text.getClientRects()).filter((r) => r.width > 0)
      const gruppen: { unten: number; von: number; bis: number }[] = []

      for (const r of kaesten) {
        const treffer = gruppen.find((g) => Math.abs(g.unten - r.bottom) < r.height * 0.5)
        if (treffer) {
          treffer.von = Math.min(treffer.von, r.left)
          treffer.bis = Math.max(treffer.bis, r.right)
        } else {
          gruppen.push({ unten: r.bottom, von: r.left, bis: r.right })
        }
      }

      setZeilen(
        gruppen.map((g) => ({
          left: g.von - bezug.left,
          top: g.unten - bezug.top,
          width: g.bis - g.von,
        })),
      )
    }

    messen()
    const beobachter = new ResizeObserver(messen)
    beobachter.observe(box)
    // Schriften kommen oft erst nach dem ersten Rendern an und ändern den Umbruch
    document.fonts?.ready.then(messen).catch(() => {})
    return () => beobachter.disconnect()
  }, [children])

  // Fortschritt beim Scrollen auf die Zeilen verteilen
  useEffect(() => {
    const box = boxRef.current
    if (!box || zeilen.length === 0) return

    const ruhig = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let angefordert = false

    const zeichnen = () => {
      angefordert = false
      const oben = box.getBoundingClientRect().top
      const hoehe = window.innerHeight
      const gesamt = ruhig ? 1 : Math.min(1, Math.max(0, (START * hoehe - oben) / ((START - ENDE) * hoehe)))

      stricheRef.current.forEach((el, i) => {
        if (!el) return
        // Zeile i läuft im Abschnitt [i/n, (i+1)/n] des Gesamtfortschritts
        const anteil = Math.min(1, Math.max(0, gesamt * zeilen.length - i))
        el.style.transform = `scaleX(${anteil})`
      })
    }

    const onScroll = () => {
      if (angefordert) return
      angefordert = true
      requestAnimationFrame(zeichnen)
    }

    zeichnen()
    if (ruhig) return
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [zeilen])

  return (
    <span ref={boxRef} style={{ position: 'relative', display: 'inline-block' }}>
      <span ref={textRef}>{children}</span>

      {zeilen.map((z, i) => (
        <span
          key={i}
          ref={(el) => { stricheRef.current[i] = el }}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: z.left,
            top: z.top + 4,
            width: z.width,
            height: DICKE,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #C9A84C, #E8D49A)',
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
            pointerEvents: 'none',
          }}
        />
      ))}
    </span>
  )
}
