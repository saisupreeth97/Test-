import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Data Spark Analysis',
    period: 'Jan 2023 – May 2023',
    tag: 'Big Data / Cloud',
    description:
      'Large-scale e-commerce data analysis pipeline designed to process and analyze massive datasets. Leveraged Apache Spark for distributed data processing, Cassandra for high-throughput NoSQL storage, and Kubernetes (MiniKube) for container orchestration and scalable deployment.',
    tech: ['Apache Spark', 'Cassandra', 'Kubernetes', 'MiniKube', 'Python'],
    gradient: 'from-violet-600 to-cyan-600',
    glow: 'hover:shadow-violet-500/20',
  },
  {
    title: 'CCPA Compliance API',
    period: 'JCPenney · 2020',
    tag: 'Backend / API',
    description:
      'Designed and implemented a new REST API endpoint at JCPenney enabling users to exercise CCPA rights — update, view, and delete their personal data. Built with Spring Boot, integrated across microservices, and validated with a factory-pattern PII framework.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST API', 'JUnit', 'Mockito'],
    gradient: 'from-purple-600 to-violet-600',
    glow: 'hover:shadow-purple-500/20',
  },
  {
    title: 'Search Engine Migration & Security Hardening',
    period: 'DIGICLIPS INC · 2023–2024',
    tag: 'Full Stack',
    description:
      'Led migration of frontend from Angular 14 → 16 and replaced the entire Protractor test suite with Cypress. Identified and patched critical security vulnerabilities in both frontend and backend, and architected Node.js / Express.js servers on AWS.',
    tech: ['Angular', 'TypeScript', 'Cypress', 'Node.js', 'Express.js', 'AWS'],
    gradient: 'from-cyan-600 to-blue-600',
    glow: 'hover:shadow-cyan-500/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#050510]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`group relative rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-white/15 transition-all duration-300 hover:shadow-2xl ${p.glow} flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Gradient top strip */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <span className="text-xs text-slate-600">{p.period}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
