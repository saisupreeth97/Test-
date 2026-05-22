import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { num: '5+',   label: 'Years Experience' },
  { num: '3',    label: 'Companies' },
  { num: '3.84', label: 'MS GPA' },
  { num: '10+',  label: 'Certifications' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-40 bg-warm overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[#c94f00]/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">About</span>
          <h2 className="display text-5xl md:text-7xl font-bold leading-[1.05] text-cream">
            Engineer who turns
            <br />
            <span className="text-[#c94f00]">complex ideas</span>
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-[#c94f00]/10 blur-2xl" />
              <div className="relative h-full border border-[rgba(240,224,204,0.08)] bg-[#1a1410] flex items-center justify-center overflow-hidden">
                {/* Geometric rings */}
                <div className="absolute inset-8 rounded-full border border-[rgba(240,224,204,0.07)]" />
                <div className="absolute inset-16 rounded-full border border-[rgba(201,79,0,0.12)]" />
                <div className="absolute inset-24 rounded-full border border-[rgba(240,224,204,0.07)]" />

                {/* Initials */}
                <div className="relative w-36 h-36 rounded-full bg-[#c94f00] flex items-center justify-center text-6xl font-black text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
                  SS
                </div>

                {/* Location badge */}
                <div className="absolute bottom-6 left-6 px-3 py-1.5 border border-[rgba(240,224,204,0.15)] bg-[rgba(240,224,204,0.04)] text-[rgba(240,224,204,0.7)] text-xs font-medium backdrop-blur-md">
                  📍 Fullerton, CA
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — scrolling content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-2xl md:text-3xl text-cream leading-snug font-light mb-6">
                I'm a <span className="font-semibold text-cream">Backend &amp; Full Stack Developer</span> with 5+ years building
                production-grade systems across e-commerce, hospitality tech, and education.
              </p>
              <p className="text-lg text-[rgba(240,224,204,0.55)] leading-relaxed">
                Master's in Computer Science from <span className="text-cream font-medium">CSUF</span> (GPA 3.84),
                Bachelor's in Information Science from B.M.S. College of Engineering. I love solving complex backend
                challenges, designing clean APIs, and mentoring others.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[rgba(240,224,204,0.08)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="display text-4xl md:text-5xl font-bold text-cream mb-1">{num}</p>
                  <p className="text-[rgba(240,224,204,0.4)] text-xs font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a href="mailto:saisupreeth97@gmail.com" className="btn-primary" data-cursor="hover">
                Email Me →
              </a>
              <a
                href="https://www.linkedin.com/in/sai-supreeth"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                data-cursor="hover"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
