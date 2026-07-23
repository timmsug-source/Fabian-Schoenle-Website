import { createClient } from '@supabase/supabase-js'

// Öffentliche Werte (NEXT_PUBLIC / per RLS abgesichert). Als Fallback fest hinterlegt,
// damit das CMS auch ohne gesetzte Env-Vars (z. B. auf Vercel) funktioniert.
// Env-Vars haben Vorrang und können diese jederzeit überschreiben.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_HUB_SUPABASE_URL || 'https://mozhptupmycfmfojbofh.supabase.co'
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_HUB_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vemhwdHVwbXljZm1mb2pib2ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MTIxMjUsImV4cCI6MjA5OTM4ODEyNX0.nJ6rpsYIf8BeLPTuMDGaNqWNAPx2h3QTz8GGZiELfQo'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

/**
 * Lädt die Website-Texte aus dem Headless-CMS (Supabase RPC).
 * Rückgabe: flaches key→text Objekt. Bei Fehler/leer: {} (Fallbacks greifen).
 */
export async function getSiteContent(): Promise<Record<string, string>> {
  try {
    const { data } = await supabase.rpc('get_site_content', { p_slug: 'fs-performance' })
    return (data as Record<string, string>) ?? {}
  } catch {
    return {}
  }
}
