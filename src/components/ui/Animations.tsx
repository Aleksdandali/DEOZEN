'use client'
import { useEffect } from 'react'

export function Animations() {
  useEffect(() => {
    // Count up animation for hero stats
    function countUp(el: Element, target: number, dur = 1200) {
      const start = Date.now()
      const tick = () => {
        const p = Math.min(1, (Date.now() - start) / dur)
        const ease = 1 - Math.pow(1 - p, 3)
        el.textContent = String(Math.round(ease * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      tick()
    }

    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-count]').forEach(el => {
            countUp(el, parseInt((el as HTMLElement).dataset.count || '0'))
          })
          statsObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.5 })

    const statsEl = document.querySelector('.hero-stats')
    if (statsEl) statsObs.observe(statsEl)

    // Gland bars animation
    const glandObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.gland-fill').forEach(f => {
            ;(f as HTMLElement).style.width = getComputedStyle(f as HTMLElement).getPropertyValue('--w')
          })
          glandObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })

    const gv = document.getElementById('glandVis')
    if (gv) glandObs.observe(gv)

    // Reveal system
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const sibs = [...e.target.parentElement!.querySelectorAll('.rev')]
          const idx = sibs.indexOf(e.target)
          ;(e.target as HTMLElement).style.transitionDelay = (idx * 70) + 'ms'
          e.target.classList.add('vis')
          revObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.rev').forEach(el => revObs.observe(el))

    // Why items stagger
    const whyObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.why-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('vis'), i * 100)
          })
          whyObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })

    const whyGrid = document.querySelector('.why-grid')
    if (whyGrid) whyObs.observe(whyGrid)

    // Ingredients stagger
    const ingObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.ing-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('vis'), i * 90)
          })
          ingObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    const ingGrid = document.querySelector('.ing-grid')
    if (ingGrid) ingObs.observe(ingGrid)

    return () => {
      statsObs.disconnect()
      glandObs.disconnect()
      revObs.disconnect()
      whyObs.disconnect()
      ingObs.disconnect()
    }
  }, [])

  return null
}
