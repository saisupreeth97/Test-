import { Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050510_75%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Work
          </span>
        </motion.div>

        <motion.p
          className="text-slate-400 text-lg mb-2 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sai Supreeth
          </span>
          <br />
          <span className="text-white">Kolaparthy</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-semibold text-slate-300 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Backend &amp; Full Stack Developer
        </motion.p>

        <motion.p
          className="text-slate-500 mb-10 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          MS Computer Science, California State University Fullerton
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-1"
          >
            View My Work
          </button>
          <a
            href="mailto:saisupreeth97@gmail.com"
            className="px-8 py-3.5 rounded-full font-semibold text-violet-400 border border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-200 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
