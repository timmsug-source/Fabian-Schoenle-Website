/**
 * X/Twitter nutzt dasselbe Vorschaubild wie OpenGraph. Next.js überträgt die
 * opengraph-image-Datei nicht automatisch auf twitter:image — daher diese
 * Wiederverwendung statt einer zweiten Bildbeschreibung.
 */
export { default, alt, size, contentType } from './opengraph-image'
