import { leseEinwilligung } from '@/lib/consent'

/**
 * Standard-Ereignisse von Meta, die die Seite an den Pixel meldet:
 *   Lead      — Anfrageformular oder Eintragung auf /kostenloses-video abgeschickt
 *   Schedule  — Termin über Calendly gebucht (Fenster oder eingebetteter Kalender)
 *   Contact   — Direktnachricht aus der FAQ, meist eine Frage, keine Anfrage
 *
 * Gemeldet wird nur, dass es passiert ist, nie Name, E-Mail oder Telefon.
 */
export type MetaEreignis = 'Lead' | 'Schedule' | 'Contact'

/** Ereignisse, die erst nach einer Weiterleitung gesendet werden, siehe unten. */
export const META_AUSSTEHEND = 'fs_meta_ausstehend'

function marketingErlaubt() {
  return leseEinwilligung()?.marketing === true
}

/**
 * Meldet ein Ereignis an den Pixel. Ohne Einwilligung „Marketing“ gibt es
 * keinen Pixel (MetaPixel.tsx lädt ihn erst dann), es wird also nichts gesendet.
 */
export function metaEreignis(name: MetaEreignis) {
  if (!marketingErlaubt() || !window.fbq) return
  window.fbq('track', name)
}

/**
 * Für Formulare, die direkt danach die Seite wechseln: Die Anfrage an Meta
 * würde vom Seitenwechsel abgebrochen. Das Ereignis wird deshalb vorgemerkt
 * und auf der nächsten Seite gesendet, sobald der Pixel dort startet.
 */
export function metaEreignisNachWeiterleitung(name: MetaEreignis) {
  if (!marketingErlaubt()) return
  try {
    const liste: string[] = JSON.parse(sessionStorage.getItem(META_AUSSTEHEND) ?? '[]')
    sessionStorage.setItem(META_AUSSTEHEND, JSON.stringify([...liste, name]))
  } catch {
    // Ohne sessionStorage (z. B. privater Modus) entfällt das eine Ereignis.
  }
}
