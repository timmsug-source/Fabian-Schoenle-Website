import { NextResponse } from 'next/server'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

/**
 * Versand über Resend, mit `send.fabianschoenle.de` als Sende-Subdomain.
 *
 * Warum eine eigene Subdomain und nicht die Hauptdomain: Resend verlangt für
 * die Verifizierung einen eigenen MX-Eintrag. Auf der Root würde der den
 * kompletten Posteingang bei goneo wegleiten — Fabian bekäme keine Mails mehr.
 * Auf `send` stört er nichts, weil dort sonst nichts liegt.
 *
 * goneo verlangt dafür, dass die Subdomain zuerst im Kundencenter unter
 * Domains -> Subdomains angelegt wird; ein reiner DNS-Eintrag genügt nicht.
 * Erst danach lassen sich MX, SPF und DKIM darunter setzen.
 *
 * Wichtig: In Resend ist die Domain `fabianschoenle.de` selbst angelegt, nicht
 * die Subdomain. `send` ist nur der Return-Path, über den Amazon SES die
 * Rückläufer annimmt — nicht die Absenderadresse. Der Absender (RESEND_FROM)
 * gehört deshalb auf die Hauptdomain. Antworten gehen ohnehin über `replyTo`
 * direkt an den Besucher, und die Anfrage selbst landet in CONTACT_EMAIL.
 */

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
  ))
}

export async function POST(req: Request) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const name = String(data.name ?? '').trim()
  const email = String(data.email ?? '').trim()
  const telefon = String(data.telefon ?? '').trim()
  const symptome = String(data.symptome ?? '').trim()
  const schwerpunkt = String(data.schwerpunkt ?? '').trim()
  const nachricht = String(data.nachricht ?? '').trim()

  // Zwei Absender: das mehrstufige Anfrageformular liefert einen Namen, die
  // FAQ-Direktnachricht nur E-Mail und Text. Eins von beidem muss da sein.
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: 'Bitte gib eine gültige E-Mail-Adresse an.' }, { status: 400 })
  }
  if (!name && !nachricht) {
    return NextResponse.json({ error: 'Bitte gib deinen Namen oder eine Nachricht an.' }, { status: 400 })
  }

  const zeilen = [
    name ? `Name: ${name}` : null,
    `E-Mail: ${email}`,
    telefon ? `Telefon: ${telefon}` : null,
    symptome ? `Angekreuzt: ${symptome}` : null,
    schwerpunkt ? `Schwerpunkt: ${schwerpunkt}` : null,
    nachricht ? `Nachricht: ${nachricht}` : null,
  ].filter(Boolean) as string[]

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.RESEND_FROM || `${SITE_NAME} <website@fabianschoenle.de>`

  // Ohne konfigurierten Versand bewusst ein Fehler statt einer stillen
  // Erfolgsmeldung — sonst liest der Besucher "Nachricht ist raus", während
  // die Anfrage nirgendwo ankommt.
  if (!apiKey || apiKey.includes('xxx') || !to) {
    console.error('[contact] RESEND_API_KEY/CONTACT_EMAIL fehlen — Anfrage NICHT versendet:\n' + zeilen.join('\n'))
    return NextResponse.json(
      { error: 'Das Formular ist gerade nicht erreichbar. Schreib mir bitte direkt per E-Mail.' },
      { status: 503 },
    )
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const domain = SITE_URL.replace('https://', '')
    const betreff = nachricht && !name
      ? `Frage über ${domain}`
      : `Neue Anfrage: ${name}${schwerpunkt ? ` — ${schwerpunkt}` : ''}`

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: betreff,
      text: zeilen.join('\n'),
      html:
        `<h2 style="font-family:sans-serif">Neue Anfrage über ${escapeHtml(domain)}</h2>` +
        `<ul style="font-family:sans-serif;font-size:15px;line-height:1.6">` +
        zeilen.map((z) => `<li>${escapeHtml(z)}</li>`).join('') +
        `</ul>` +
        `<p style="font-family:sans-serif;font-size:13px;color:#666">Antworten geht direkt — die Antwortadresse ist auf ${escapeHtml(email)} gesetzt.</p>`,
    })

    // Resend meldet Fehler im Rückgabewert, nicht als Ausnahme.
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Versand fehlgeschlagen:', err)
    return NextResponse.json({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }, { status: 502 })
  }
}
