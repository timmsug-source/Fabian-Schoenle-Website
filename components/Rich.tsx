import type { CSSProperties, ElementType } from 'react'

/**
 * Rendert einen CMS-Textwert als HTML (erlaubt <strong>, <em> usw.) statt als
 * escapeten Text. className + style werden durchgereicht, damit das Layout
 * identisch bleibt.
 */
export function Rich({
  html,
  as: Tag = 'span',
  className,
  style,
}: {
  html?: string
  as?: ElementType
  className?: string
  style?: CSSProperties
}) {
  return <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: html ?? '' }} />
}
