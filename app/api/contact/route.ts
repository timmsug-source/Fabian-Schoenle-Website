import { NextResponse } from 'next/server'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

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
  const from = process.env.RESEND_FROM || `${SITE_NAME} <onboarding@resend.dev>`

  // Ohne konfigurierten Versand wird bewusst ein Fehler zurückgegeben.
  // Vorher meldete die Route in diesem Fall Erfolg — der Besucher sah "Deine
  // Nachricht ist raus", während die Anfrage nur im Serverlog landete und
  // niemand sie je gelesen hat. Ein sichtbarer Fehler ist das kleinere Übel.
  const nichtKonfiguriert = !apiKey || apiKey.includes('xxx') || !to
  if (nichtKonfiguriert) {
    console.error('[contact] RESEND_API_KEY/CONTACT_EMAIL fehlen — Anfrage NICHT versendet:\n' + zeilen.join('\n'))
    return NextResponse.json(
      { error: 'Das Formular ist gerade nicht erreichbar. Schreib mir bitte direkt per E-Mail.' },
      { status: 503 },
    )
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)
    const betreff = nachricht && !name
      ? `Frage über ${SITE_URL.replace('https://', '')}`
      : `Neue Anfrage: ${name}${schwerpunkt ? ` — ${schwerpunkt}` : ''}`

    const html =
      `<h2 style="font-family:sans-serif">Neue Anfrage über ${escapeHtml(SITE_URL.replace('https://', ''))}</h2>` +
      `<ul style="font-family:sans-serif;font-size:15px;line-height:1.6">` +
      zeilen.map((z) => `<li>${escapeHtml(z)}</li>`).join('') +
      `</ul>` +
      `<p style="font-family:sans-serif;font-size:13px;color:#666">Antworten geht direkt — die Antwortadresse ist auf ${escapeHtml(email)} gesetzt.</p>`

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: betreff,
      html,
      text: zeilen.join('\n'),
    })

    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Versand fehlgeschlagen:', err)
    return NextResponse.json({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }, { status: 502 })
  }
}
