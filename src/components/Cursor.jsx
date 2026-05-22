import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const sx = useSpring(mx, { damping: 30, stiffness: 350, mass: 0.5 })
  const sy = useSpring(my, { damping: 30, stiffness: 350, mass: 0.5 })

  const dx = useSpring(mx, { damping: 60, stiffness: 200, mass: 0.8 })
  const dy = useSpring(my, { damping: 60, stiffness: 200, mass: 0.8 })

  const [hover, setHover] = useState(false)
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setSupported(mq.matches)
    if (!mq.matches) return

    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    const over = (e) => {
      if (e.target.closest('a, button, [role=button], [data-cursor=hover]')) setHover(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, [role=button], [data-cursor=hover]')) setHover(false)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [mx, my])

  if (!supported) return null

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-screen"
        style={{
          x: dx, y: dy,
          width: hover ? 64 : 36,
          height: hover ? 64 : 36,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(124,58,237,0) 70%)',
        }}
        animate={{ scale: hover ? 1.4 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white"
        style={{
          x: sx, y: sy,
          width: hover ? 8 : 6,
          height: hover ? 8 : 6,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
