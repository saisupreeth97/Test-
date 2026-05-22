import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Data Spark Analysis',
    period: 'Jan – May 2023',
    tag: 'Big Data',
    description: 'Large-scale e-commerce data analysis pipeline. Apache Spark for distributed processing, Cassandra for NoSQL storage, Kubernetes for orchestration.',
    tech: ['Apache Spark', 'Cassandra', 'Kubernetes', 'MiniKube', 'Python'],
    num: '01',
  },
  {
    title: 'CCPA Compliance API',
    period: 'JCPenney · 2020',
    tag: 'Backend',
    description: 'REST API endpoint at JCPenney enabling users to exercise CCPA rights — update, view, delete their personal data. Factory-pattern PII validation across teams.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'JUnit', 'Mockito'],
    num: '02',
  },
  {
    title: 'Search Engine Migration',
    period: 'DIGICLIPS · 2023–24',
    tag: 'Full Stack',
    description: 'Migrated frontend Angular 14 → 16, replaced Protractor with Cypress, patched security vulnerabilities, architected Node.js servers on AWS.',
    tech: ['Angular', 'TypeScript', 'Cypress', 'Node.js', 'AWS'],
    num: '03',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40 bg-[#0e0b09] overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#c94f00]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="display text-5xl md:text-7xl font-bold leading-[1.05] text-cream">
            Things I've
            <br />
            <span className="text-[#c94f00]">brought to life.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-[rgba(240,224,204,0.08)] py-10 grid md:grid-cols-12 gap-6 md:gap-10 hover:bg-[rgba(240,224,204,0.02)] transition-colors duration-300 -mx-6 px-6"
              data-cursor="hover"
            >
              {/* Number + tag */}
              <div className="md:col-span-2 flex items-start gap-4 md:flex-col md:gap-2">
                <span className="text-[rgba(240,224,204,0.2)] text-sm font-mono">{p.num}</span>
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c94f00] border border-[rgba(201,79,0,0.3)] px-2.5 py-1">
                  {p.tag}
                </span>
              </div>

              {/* Title + description */}
              <div className="md:col-span-6">
                <h3 className="display text-2xl md:text-3xl font-bold text-cream mb-3 leading-tight group-hover:text-cream transition-colors">
                  {p.title}
                </h3>
                <p className="text-[rgba(240,224,204,0.5)] text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[11px] font-medium border border-[rgba(240,224,204,0.1)] text-[rgba(240,224,204,0.4)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Period + arrow */}
              <div className="md:col-span-4 flex md:justify-end items-start gap-4">
                <p className="text-[rgba(240,224,204,0.3)] text-xs tracking-wider">{p.period}</p>
                <svg
                  className="w-5 h-5 text-[rgba(240,224,204,0.2)] group-hover:text-[#c94f00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[rgba(240,224,204,0.08)]" />
        </div>
      </div>
    </section>
  )
}
