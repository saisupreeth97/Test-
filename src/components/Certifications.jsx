import { motion } from 'framer-motion'

const certs = [
  { name: 'Java OOP Concepts', issuer: 'Simplilearn', icon: '☕' },
  { name: 'HTML Fundamentals', issuer: 'Simplilearn', icon: '🌐' },
  { name: 'CSS Fundamentals', issuer: 'Simplilearn', icon: '🎨' },
  { name: '+ 6 More', issuer: 'Various Platforms', icon: '🏆', more: true },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 md:py-40 bg-[#050510]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-6">
            Credentials
          </span>
          <h2 className="display text-5xl md:text-7xl font-black leading-[1.05]">
            Always{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">learning.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl p-7 transition-all duration-300 overflow-hidden ${
                cert.more
                  ? 'border-2 border-dashed border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10'
                  : 'border border-white/8 bg-white/[0.02] hover:border-white/15'
              }`}
              data-cursor="hover"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 to-transparent" />

              <div className="relative">
                <div className="text-4xl mb-5">{cert.icon}</div>
                <p className={`font-bold text-base mb-1 leading-snug ${cert.more ? 'text-violet-300' : 'text-white'}`}>
                  {cert.name}
                </p>
                <p className="text-slate-500 text-xs">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
