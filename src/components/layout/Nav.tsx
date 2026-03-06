'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <button
        className={`nav-burger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="nav-center">
        <Link href="#" className="nav-logo">
          <Image src="/logo.png" alt="DEOZEN" width={120} height={36} priority className="logo-img" />
        </Link>
      </div>
      <p className="nav-tagline">Натуральний крем-дезодорант · Одне нанесення</p>
      <div className={`nav-right${menuOpen ? ' open' : ''}`} id="navRight">
        <Link href="#how" className="nav-link" onClick={closeMenu}>Як діє</Link>
        <Link href="#ingredients" className="nav-link" onClick={closeMenu}>Склад</Link>
        <Link href="#reviews" className="nav-link" onClick={closeMenu}>Відгуки</Link>
        <a href="https://deozen-store.com/znizhki" target="_blank" rel="noreferrer" className="nav-link" style={{ color: 'var(--gold)' }} onClick={closeMenu}>Знижки</a>
        <Link href="#opt" className="nav-link" onClick={closeMenu}>Опт</Link>
        <Link href="#faq" className="nav-link" onClick={closeMenu}>FAQ</Link>
        <Link href="#buy" className="nav-cta js-cta" onClick={closeMenu}>Замовити — 597 грн</Link>
      </div>
    </nav>
  )
}
