import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const openToRoles = ['Software Engineer', 'Full Stack', 'Backend', 'AI / ML Engineer']
const stats = [
  { num: '5+',   label: 'Years Experience' },
  { num: '3',    label: 'Companies' },
  { num: '3.84', label: 'MS GPA' },
  { num: '10+',  label: 'Certifications' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-40 bg-[#050510] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-6">
            About
          </span>
          <h2 className="display text-5xl md:text-7xl font-black leading-[1.05]">
            Engineer who turns
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              complex ideas
            </span>
            {' '}into clean code.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — sticky visual */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            style={{ y: visualY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Avatar with glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/40 via-purple-600/30 to-cyan-500/40 blur-2xl" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-violet-900/40 via-[#0a0a1f] to-cyan-900/30 backdrop-blur-xl flex items-center justify-center">
                {/* Decorative rings */}
                <div className="absolute inset-8 rounded-full border border-violet-500/20" />
                <div className="absolute inset-16 rounded-full border border-cyan-500/20" />
                <div className="absolute inset-24 rounded-full border border-violet-400/30" />

                {/* Initials */}
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-7xl font-black text-white shadow-[0_0_80px_rgba(124,58,237,0.6)]">
                  SS
                </div>

                {/* Floating badges */}
                <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
                </div>
                <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-200 text-xs font-semibold backdrop-blur-md">
                  📍 Fullerton, CA
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — scrolling content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-2xl md:text-3xl text-white leading-snug font-light mb-6">
                I'm a <span className="font-semibold text-white">Backend &amp; Full Stack Developer</span> with 5+ years building
                production-grade systems across e-commerce, hospitality tech, and education.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Master's in Computer Science from <span className="text-white font-medium">CSUF</span> (GPA 3.84),
                Bachelor's in Information Science from B.M.S. College of Engineering. I love solving complex backend
                challenges, designing clean APIs, and mentoring others.
              </p>
            </motion.div>

            {/* Open to roles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Open to Roles</p>
              <div className="flex flex-wrap gap-3">
                {openToRoles.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500/15 to-cyan-500/15 border border-violet-500/30 text-violet-200 hover:from-violet-500/25 hover:to-cyan-500/25 transition-all"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-4xl md:text-5xl font-black bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent mb-1">
                    {num}
                  </p>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a href="mailto:saisupreeth97@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-slate-200 transition-all hover:-translate-y-0.5">
                Email Me →
              </a>
              <a href="https://www.linkedin.com/in/sai-supreeth" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/15 text-white/90 hover:bg-white/5 transition-all hover:-translate-y-0.5">
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
