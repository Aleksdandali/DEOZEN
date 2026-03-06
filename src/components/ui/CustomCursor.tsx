'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.cssText = `left:${mx}px;top:${my}px`
      label.style.cssText = `left:${mx}px;top:${my - 44}px`
    }

    const loopRing = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.cssText = `left:${rx}px;top:${ry}px`
      raf = requestAnimationFrame(loopRing)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loopRing)

    const ctaEls = document.querySelectorAll('.js-cta')
    const linkEls = document.querySelectorAll('a, button')

    const addCta = () => document.body.classList.add('cur-cta')
    const removeCta = () => document.body.classList.remove('cur-cta')
    const addLink = () => document.body.classList.add('cur-link')
    const removeLink = () => document.body.classList.remove('cur-link')

    ctaEls.forEach(el => {
      el.addEventListener('mouseenter', addCta)
      el.addEventListener('mouseleave', removeCta)
    })

    linkEls.forEach(el => {
      if (!el.classList.contains('js-cta')) {
        el.addEventListener('mouseenter', addLink)
        el.addEventListener('mouseleave', removeLink)
      }
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="c-dot" />
      <div ref={ringRef} className="c-ring">
        <span ref={labelRef} className="c-label">Замовити</span>
      </div>
    </>
  )
}
