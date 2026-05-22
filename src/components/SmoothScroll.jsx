import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.085,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Intercept smooth-scroll anchor clicks
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"], [data-scroll-to]')
      if (!a) return
      const target = a.getAttribute('data-scroll-to') || a.getAttribute('href').slice(1)
      const el = document.getElementById(target)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -40, duration: 1.4 })
      }
    }
    document.addEventListener('click', handler)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.removeEventListener('click', handler)
    }
  }, [])

  return null
}
