/**
 * Einwilligungsverwaltung — bewusst klein gehalten, kein externer Dienst.
 *
 * Es gibt genau zwei Kategorien:
 *   notwendig  — immer an, nicht abwählbar (nur der Einwilligungs-Cookie selbst)
 *   statistik  — Google Analytics
 *
 * „Externe Medien" braucht es nicht: Calendly und die YouTube-Videos laden erst
 * auf Klick, das YouTube-Vorschaubild kommt über den eigenen Server. Damit ist
 * vor der Entscheidung kein Drittanbieter im Spiel.
 */

export type Einwilligung = {
  statistik: boolean
  /** ISO-Zeitstempel der Entscheidung — Nachweispflicht. */
  zeitpunkt: string
  /** Bei neuen Diensten hochzählen, dann wird erneut gefragt. */
  version: number
}

/** Hochzählen, sobald ein Dienst dazukommt oder sich der Zweck ändert. */
export const CONSENT_VERSION = 1

const COOKIE_NAME = 'fs_consent'
const EIN_JAHR = 60 * 60 * 24 * 365

/** Wird bei jeder Änderung ausgelöst, damit z. B. Analytics sofort reagiert. */
export const CONSENT_EVENT = 'fs-consent-changed'

/** Klick-Ziel zum erneuten Öffnen der Einstellungen (Widerruf). */
export const CONSENT_OEFFNEN_ATTRIBUT = 'data-cookie-einstellungen'

export function leseEinwilligung(): Einwilligung | null {
  if (typeof document === 'undefined') return null
  const treffer = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
  if (!treffer) return null
  try {
    const wert = JSON.parse(decodeURIComponent(treffer.slice(COOKIE_NAME.length + 1)))
    // Aeltere Fassung? Dann gilt sie nicht mehr — es wird erneut gefragt.
    if (wert?.version !== CONSENT_VERSION) return null
    return { statistik: Boolean(wert.statistik), zeitpunkt: String(wert.zeitpunkt ?? ''), version: CONSENT_VERSION }
  } catch {
    return null
  }
}

export function speichereEinwilligung(statistik: boolean): Einwilligung {
  const wert: Einwilligung = {
    statistik,
    zeitpunkt: new Date().toISOString(),
    version: CONSENT_VERSION,
  }
  const sicher = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : ''
  document.cookie =
    `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(wert))}` +
    `; Path=/; Max-Age=${EIN_JAHR}; SameSite=Lax${sicher}`
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: wert }))
  return wert
}

/**
 * Loescht die von Google Analytics gesetzten Cookies. Wird beim Widerruf
 * aufgerufen — ohne das blieben _ga und _ga_<ID> bis zu zwei Jahre liegen,
 * obwohl der Besucher die Einwilligung zurueckgezogen hat.
 */
export function loescheAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const namen = document.cookie
    .split('; ')
    .map((c) => c.split('=')[0])
    .filter((n) => n === '_ga' || n.startsWith('_ga_') || n === '_gid' || n.startsWith('_gat'))

  // Auch auf der uebergeordneten Domain loeschen — dort setzt gtag sie.
  const domains = [location.hostname, `.${location.hostname}`, `.${location.hostname.split('.').slice(-2).join('.')}`]
  for (const name of namen) {
    for (const domain of domains) {
      document.cookie = `${name}=; Path=/; Domain=${domain}; Max-Age=0`
    }
    document.cookie = `${name}=; Path=/; Max-Age=0`
  }
}
