import type { CSSProperties, ElementType } from 'react'

/**
 * Rendert einen CMS-Textwert als HTML (erlaubt <strong>, <em> usw.) statt als
 * escapeten Text. className + style werden durchgereicht, damit das Layout
 * identisch bleibt. `cms` markiert das Element für den visuellen Editor im
 * Website-Hub (siehe CMS-VISUELL.md). `cmsArt="feld"` nur, wenn der Wert vor dem
 * Rendern umgewandelt wurde und daher nicht direkt im Text bearbeitbar ist.
 */
export function Rich({
  html,
  as: Tag = 'span',
  className,
  style,
  cms,
  cmsArt = 'html',
}: {
  html?: string
  as?: ElementType
  className?: string
  style?: CSSProperties
  cms?: string
  cmsArt?: 'html' | 'feld'
}) {
  const markierung = cms ? { 'data-cms': cms, 'data-cms-art': cmsArt } : {}
  return <Tag className={className} style={style} {...markierung} dangerouslySetInnerHTML={{ __html: html ?? '' }} />
}
