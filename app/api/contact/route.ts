import { NextResponse } from 'next/server'

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

  if (!name || !email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: 'Name und eine gültige E-Mail sind erforderlich.' }, { status: 400 })
  }

  const zeilen = [
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${telefon || '—'}`,
    symptome ? `Angekreuzt: ${symptome}` : null,
    schwerpunkt ? `Schwerpunkt: ${schwerpunkt}` : null,
  ].filter(Boolean) as string[]

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.RESEND_FROM || 'FS-Performance <onboarding@resend.dev>'

  // Setup-Phase: solange kein (echter) Key/Empfänger konfiguriert ist, wird die
  // Anfrage nur serverseitig geloggt (kein Versand). UI-Flow funktioniert trotzdem.
  const istPlatzhalter = !apiKey || apiKey.includes('xxx') || !to
  if (istPlatzhalter) {
    console.warn('[contact] Resend nicht konfiguriert — Anfrage NICHT versendet:\n' + zeilen.join('\n'))
    return NextResponse.json({ ok: true, delivered: false })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)
    const html =
      `<h2 style="font-family:sans-serif">Neue Anfrage über fabianschoenle.de</h2>` +
      `<ul style="font-family:sans-serif;font-size:15px;line-height:1.6">` +
      zeilen.map((z) => `<li>${escapeHtml(z)}</li>`).join('') +
      `</ul>`

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Neue Anfrage: ${name}${schwerpunkt ? ` — ${schwerpunkt}` : ''}`,
      html,
      text: zeilen.join('\n'),
    })

    if (error) throw error
    return NextResponse.json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[contact] Versand fehlgeschlagen:', err)
    return NextResponse.json({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }, { status: 502 })
  }
}
