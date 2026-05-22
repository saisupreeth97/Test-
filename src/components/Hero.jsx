import { Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050510_80%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050510] pointer-events-none z-10" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 mb-8 backdrop-blur-md">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
              <span className="relative rounded-full w-2 h-2 bg-emerald-400" />
            </span>
            Available for Hire
          </span>
        </motion.div>

        <motion.p
          className="text-slate-400 text-lg md:text-xl mb-4 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="display text-[clamp(3rem,12vw,9rem)] font-black leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block bg-gradient-to-br from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
            Sai Supreeth
          </span>
          <span className="block bg-gradient-to-br from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Kolaparthy.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-medium text-slate-300 mb-3 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          Backend &amp; Full Stack Engineer
        </motion.p>

        <motion.p
          className="text-slate-500 mb-12 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Building scalable systems · MS Computer Science, CSUF
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 rounded-full shadow-[0_8px_40px_rgba(124,58,237,0.4)] group-hover:shadow-[0_8px_60px_rgba(124,58,237,0.6)] transition-shadow" />
            <span className="relative">View My Work</span>
            <svg className="relative w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/90 border border-white/15 backdrop-blur-md hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500 text-[10px] tracking-[0.3em] uppercase z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <span>Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  )
}
