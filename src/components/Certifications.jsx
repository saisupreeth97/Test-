import { motion } from 'framer-motion'

const certs = [
  { name: 'Java OOP Concepts',    issuer: 'Simplilearn', icon: '☕' },
  { name: 'HTML Fundamentals',    issuer: 'Simplilearn', icon: '🌐' },
  { name: 'CSS Fundamentals',     issuer: 'Simplilearn', icon: '🎨' },
  { name: '+ 6 More Credentials', issuer: 'Various Platforms', icon: '✦', more: true },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 md:py-40 bg-[#0e0b09]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="display text-5xl md:text-7xl font-bold leading-[1.05] text-cream">
            Always{' '}
            <span className="text-[#c94f00]">learning.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(240,224,204,0.06)]">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative p-8 bg-[#0e0b09] transition-all duration-300 ${
                cert.more
                  ? 'border border-dashed border-[rgba(201,79,0,0.3)]'
                  : 'hover:bg-[#1a1410]'
              }`}
              data-cursor="hover"
            >
              <div className="text-3xl mb-5 opacity-80">{cert.icon}</div>
              <p className={`font-semibold text-sm mb-1 leading-snug ${cert.more ? 'text-[#c94f00]' : 'text-cream'}`}>
                {cert.name}
              </p>
              <p className="text-[rgba(240,224,204,0.35)] text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
