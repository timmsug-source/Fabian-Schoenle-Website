'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    let els = Array.from(document.querySelectorAll<HTMLElement>('.animate-fade-up'))
    let ticking = false

    const reveal = () => {
      ticking = false
      const trigger = window.innerHeight * 0.88
      els = els.filter((el) => {
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add('in-view')
          return false
        }
        return true
      })
      if (els.length === 0) cleanup()
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(reveal)
      }
    }

    function cleanup() {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }

    reveal() // sofort für alles, was schon sichtbar ist
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return cleanup
  }, [pathname])

  return null
}
