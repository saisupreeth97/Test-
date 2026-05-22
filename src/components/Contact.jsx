import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[#0e0b09] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#c94f00]/6 blur-[180px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="display text-5xl md:text-8xl font-bold mb-8 leading-[1] text-cream">
            Let's build
            <br />
            <span className="text-[#c94f00]">something great.</span>
          </h2>
          <p className="text-[rgba(240,224,204,0.5)] text-lg md:text-xl leading-relaxed mb-14 max-w-2xl">
            Open to opportunities in Software Engineering, Full Stack, Backend, and AI/ML.
            <br className="hidden sm:block" />
            My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <a
            href="mailto:saisupreeth97@gmail.com"
            className="btn-primary"
            data-cursor="hover"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            saisupreeth97@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/sai-supreeth"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            data-cursor="hover"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
