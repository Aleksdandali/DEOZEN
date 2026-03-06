'use client'
import { useState, useEffect } from 'react'

export function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero') as HTMLElement | null
    const onScroll = () => {
      const heroBot = hero ? hero.offsetHeight : 600
      setShow(window.scrollY > heroBot)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-cta${show ? ' show' : ''}`} id="stickyCta">
      <div>
        <div className="sticky-cta-price">597 грн</div>
        <div className="sticky-cta-label">6 місяців · 24 пакетики</div>
      </div>
      <button
        className="btn-order js-cta"
        style={{ flex: 1, margin: 0 }}
        onClick={() => window.open('https://deozen-store.com/zamovlennya-nalozhka', '_blank')}
      >
        <span>Замовити →</span>
      </button>
    </div>
  )
}
