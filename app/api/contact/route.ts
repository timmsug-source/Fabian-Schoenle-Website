import { NextResponse } from 'next/server'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

/**
 * Versand über den Postausgang der eigenen Domain (goneo) statt über einen
 * externen Dienst. Hintergrund: Resend verlangt einen MX-Eintrag auf einer
 * Sende-Subdomain, den goneos DNS-Verwaltung nicht zulässt, solange die
 * MX-Einträge der Domain bestehen — und die dürfen nicht weg, sonst empfängt
 * niemand mehr Mails.
 *
 * Für ein Kontaktformular mit wenigen Nachrichten am Tag, das von der eigenen
 * Domain an die eigene Domain schreibt, ist das der einfachere Weg: keine
 * zusätzlichen DNS-Einträge, SPF passt bereits, und der Absender ist dasselbe
 * Postfach, aus dem Fabian ohnehin schreibt.
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

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 465)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_EMAIL || user

  // Ohne konfigurierten Versand bewusst ein Fehler statt einer stillen
  // Erfolgsmeldung — sonst liest der Besucher "Nachricht ist raus", während
  // die Anfrage nirgendwo ankommt.
  if (!host || !user || !pass || !to) {
    console.error('[contact] SMTP nicht konfiguriert — Anfrage NICHT versendet:\n' + zeilen.join('\n'))
    return NextResponse.json(
      { error: 'Das Formular ist gerade nicht erreichbar. Schreib mir bitte direkt per E-Mail.' },
      { status: 503 },
    )
  }

  try {
    const nodemailer = (await import('nodemailer')).default
    const transport = nodemailer.createTransport({
      host,
      port,
      // 465 spricht direkt TLS, 587 startet unverschlüsselt und schaltet per
      // STARTTLS um. Beides ist verschlüsselt, nur der Ablauf unterscheidet sich.
      secure: port === 465,
      auth: { user, pass },
    })

    const domain = SITE_URL.replace('https://', '')
    const betreff = nachricht && !name
      ? `Frage über ${domain}`
      : `Neue Anfrage: ${name}${schwerpunkt ? ` — ${schwerpunkt}` : ''}`

    await transport.sendMail({
      // Absender muss das authentifizierte Postfach sein — fremde Adressen
      // weist der Server ab. Der Anzeigename darf frei gewählt werden.
      from: `${SITE_NAME} <${user}>`,
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

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Versand fehlgeschlagen:', err)
    return NextResponse.json({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }, { status: 502 })
  }
}
