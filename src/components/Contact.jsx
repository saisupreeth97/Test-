import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#050510]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
            Say Hello
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities in Software Engineering, Full Stack, Backend Development,
            and AI/ML roles. Whether you have a question or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href="mailto:saisupreeth97@gmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            saisupreeth97@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/sai-supreeth"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn Profile
          </a>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>
        </motion.div>
      </div>
    </section>
  )
}
