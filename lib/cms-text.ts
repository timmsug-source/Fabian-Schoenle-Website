/**
 * Liest einen Text aus dem CMS.
 *
 * Warum es diese Funktion gibt: `content.foo || 'Standard'` sieht richtig aus,
 * hat aber einen Haken — ein leerer Text gilt in JavaScript als "falsch". Wird
 * ein Feld im CMS bewusst geleert, kam dadurch der Standardtext aus dem Code
 * zurück, und das Feld ließ sich nie wirklich leeren.
 *
 * Hier entscheidet stattdessen, ob das Feld im CMS überhaupt existiert:
 *   - Feld vorhanden (auch leer) → der CMS-Wert gewinnt
 *   - Feld nicht vorhanden       → der Standardtext greift
 *
 * So bleibt ein neu aufgesetztes Projekt ohne CMS-Inhalte vollständig, und ein
 * geleertes Feld bleibt geleert.
 */
export function txt(content: Record<string, string>, key: string, standard: string): string {
  return key in content ? content[key] : standard
}
