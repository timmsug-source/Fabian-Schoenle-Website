'use client'

import { usePathname } from 'next/navigation'

/**
 * Blendet seinen Inhalt auf bestimmten Pfaden aus.
 *
 * Gebraucht für Landingpages aus bezahlter Werbung: Dort ist jeder Link, der
 * vom einzigen Ziel wegführt, ein Ausstiegspunkt. Header und Footer entfallen
 * deshalb, die Pflichtangaben stehen stattdessen schlank auf der Seite selbst.
 *
 * Warum als Hülle und nicht als Abfrage im Layout: `app/layout.tsx` ist eine
 * Server-Komponente und kennt den Pfad nicht. Header und Footer werden hier als
 * `children` durchgereicht und bleiben dadurch, was sie sind — Footer etwa
 * weiterhin eine Server-Komponente.
 */
export default function NurAufSeiten({
  ausser,
  children,
}: {
  /** Pfade, auf denen der Inhalt entfällt */
  ausser: string[]
  children: React.ReactNode
}) {
  const pathname = usePathname()
  if (ausser.includes(pathname)) return null
  return <>{children}</>
}
