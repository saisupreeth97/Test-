import { motion } from 'framer-motion'

const certs = [
  { name: 'Java: Object-Oriented Programming Concepts', issuer: 'Simplilearn', icon: '☕' },
  { name: 'Fundamentals of HTML', issuer: 'Simplilearn', icon: '🌐' },
  { name: 'Fundamentals of CSS', issuer: 'Simplilearn', icon: '🎨' },
  { name: '+ 6 More Certifications', issuer: 'Various Platforms', icon: '🏆', more: true },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-[#0a0a1f]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
            Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={`rounded-2xl border p-5 text-center transition-all duration-300 ${
                cert.more
                  ? 'border-dashed border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10'
                  : 'border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <p className={`font-semibold text-sm mb-1 leading-snug ${cert.more ? 'text-violet-300' : 'text-white'}`}>
                {cert.name}
              </p>
              <p className="text-slate-500 text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
