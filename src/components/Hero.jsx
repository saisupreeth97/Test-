import { Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen overflow-hidden">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0e0b09_80%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0e0b09] pointer-events-none z-10" />

      {/* Desktop: diagonal editorial layout */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 hidden lg:flex flex-col justify-end min-h-screen pb-28"
      >
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-2 gap-0 items-end">
          {/* Left column: massive name */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 className="display font-bold leading-[0.88] text-[clamp(5rem,10vw,12rem)] text-cream">
              <span className="block">Sai</span>
              <span className="block">Supreeth</span>
              <span className="block text-[#c94f00]">Kolaparthy.</span>
            </h1>
          </motion.div>

          {/* Right column: role + desc + CTA */}
          <motion.div
            className="flex flex-col justify-end pb-3 pl-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <div className="w-12 h-px bg-[rgba(240,224,204,0.25)] mb-8" />
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[rgba(240,224,204,0.45)] mb-5">
              Backend &amp; Full Stack Engineer
            </p>
            <p className="text-lg text-[rgba(240,224,204,0.6)] leading-relaxed mb-10 max-w-xs">
              Building scalable systems at the intersection of performance and craft.
              MS Computer Science, CSUF.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="btn-primary" data-cursor="hover">
                View Work
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost" data-cursor="hover">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile: stacked */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 lg:hidden flex flex-col justify-end min-h-screen pb-24 px-8"
      >
        <motion.h1
          className="display font-bold leading-[0.88] text-[clamp(4rem,15vw,8rem)] text-cream mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="block">Sai</span>
          <span className="block">Supreeth</span>
          <span className="block text-[#c94f00]">Kolaparthy.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
        >
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[rgba(240,224,204,0.4)] mb-4">
            Backend &amp; Full Stack Engineer
          </p>
          <p className="text-base text-[rgba(240,224,204,0.6)] leading-relaxed mb-8">
            Building scalable systems · MS CS, CSUF
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary" data-cursor="hover">View Work</a>
            <a href="#contact" className="btn-ghost" data-cursor="hover">Get In Touch</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-8 flex items-center gap-3 text-[rgba(240,224,204,0.3)] text-[10px] tracking-[0.35em] uppercase z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="h-px w-12 bg-[rgba(240,224,204,0.25)]" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
