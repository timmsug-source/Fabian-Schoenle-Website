'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

const ANCHOR_LINKS = [
  { label: 'Methode',     href: '#methode' },
  { label: 'Rezensionen', href: '#rezensionen' },
  { label: 'Über mich',   href: '#ueber-mich' },
  { label: 'FAQ',         href: '#faq' },
]

export default function Header() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY < 80) {
        setVisible(true)
      } else {
        setVisible(currentY < lastScrollY.current)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed left-0 right-0 z-50 max-w-7xl mx-auto px-3 md:px-8 transition-all duration-300"
      style={{
        top: visible ? '16px' : '-200px',
        opacity: visible ? 1 : 0,
      }}
    >
      <header
        className="rounded-xl overflow-hidden"
        style={{
          background: '#091122',
          border: '1px solid rgba(201, 168, 76, 0.25)',
        }}
      >
        {/* Hauptzeile */}
        <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.jpeg"
              alt="FS Performance"
              width={34}
              height={34}
              className="rounded-sm object-contain"
            />
            <span className="font-barlow font-semibold text-base md:text-lg tracking-wide" style={{ color: '#E6E8EB' }}>
              Fabian Schönle
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {ANCHOR_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-sm transition-colors hover:opacity-100"
                style={{ color: '#A1A9B3' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine hidden md:flex items-center gap-2 font-inter font-semibold text-sm px-6 h-11 rounded-lg transition-opacity hover:opacity-90"
            style={{
              background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
              color: '#060E1F',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
            </svg>
            Performance Analyse buchen
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: '#C99A3D',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: '#C99A3D',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: '#C99A3D',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Menü */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? '300px' : '0',
            borderTop: menuOpen ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
          }}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {ANCHOR_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-sm py-3 transition-colors"
                style={{ color: '#A1A9B3', borderBottom: '1px solid rgba(201,168,76,0.08)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-shine mt-3 flex items-center justify-center gap-2 font-inter font-semibold text-sm h-11 rounded-lg"
              style={{
                background: 'radial-gradient(circle, #C9A84C, #E8D49A)',
                color: '#060E1F',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
              </svg>
              Performance Analyse buchen
            </a>
          </nav>
        </div>
      </header>
    </div>
  )
}
