import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'E-Commerce Data Spark Analysis',
    period: 'Jan – May 2023',
    tag: 'Big Data',
    description: 'Large-scale e-commerce data analysis pipeline. Apache Spark for distributed processing, Cassandra for NoSQL storage, Kubernetes for orchestration.',
    tech: ['Apache Spark', 'Cassandra', 'Kubernetes', 'MiniKube', 'Python'],
    gradient: 'from-violet-600 via-purple-600 to-cyan-500',
    accent: 'rgba(124,58,237,0.5)',
    art: (
      <g>
        <circle cx="120" cy="120" r="50" fill="url(#g1)" opacity="0.8" />
        <circle cx="220" cy="80"  r="30" fill="url(#g2)" opacity="0.7" />
        <circle cx="280" cy="170" r="40" fill="url(#g3)" opacity="0.7" />
        <path d="M70 200 Q160 100 290 220" stroke="white" strokeOpacity="0.3" strokeWidth="2" fill="none" />
        <path d="M40 160 Q150 80 270 100"  stroke="white" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
      </g>
    ),
  },
  {
    title: 'CCPA Compliance API',
    period: 'JCPenney · 2020',
    tag: 'Backend',
    description: 'REST API endpoint at JCPenney enabling users to exercise CCPA rights — update, view, delete their personal data. Factory-pattern PII validation across teams.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'JUnit', 'Mockito'],
    gradient: 'from-purple-600 via-violet-600 to-pink-500',
    accent: 'rgba(168,85,247,0.5)',
    art: (
      <g>
        <rect x="80" y="80"  width="80"  height="80" rx="14" fill="url(#g1)" opacity="0.8" />
        <rect x="180" y="80" width="80"  height="80" rx="14" fill="url(#g2)" opacity="0.7" />
        <rect x="130" y="180" width="80" height="80" rx="14" fill="url(#g3)" opacity="0.75" />
        <line x1="120" y1="120" x2="220" y2="120" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="120" y1="160" x2="170" y2="220" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="220" y1="160" x2="170" y2="220" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
      </g>
    ),
  },
  {
    title: 'Search Engine Migration',
    period: 'DIGICLIPS · 2023–24',
    tag: 'Full Stack',
    description: 'Migrated frontend Angular 14 → 16, replaced Protractor with Cypress, patched security vulnerabilities, architected Node.js servers on AWS.',
    tech: ['Angular', 'TypeScript', 'Cypress', 'Node.js', 'AWS'],
    gradient: 'from-cyan-600 via-blue-600 to-violet-500',
    accent: 'rgba(6,182,212,0.5)',
    art: (
      <g>
        <circle cx="170" cy="170" r="80" stroke="white" strokeOpacity="0.4" strokeWidth="2" fill="none" />
        <circle cx="170" cy="170" r="50" stroke="white" strokeOpacity="0.5" strokeWidth="2" fill="none" />
        <circle cx="170" cy="170" r="25" fill="url(#g1)" opacity="0.8" />
        <line x1="220" y1="220" x2="280" y2="280" stroke="white" strokeOpacity="0.7" strokeWidth="6" strokeLinecap="round" />
      </g>
    ),
  },
]

function ProjectArt({ p }) {
  return (
    <div className="relative h-56 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
      <svg viewBox="0 0 340 280" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" style={{ transform: 'translateZ(20px)' }}>
        <defs>
          <radialGradient id="g1"><stop offset="0%" stopColor="white" stopOpacity="0.95"/><stop offset="100%" stopColor="white" stopOpacity="0.1"/></radialGradient>
          <radialGradient id="g2"><stop offset="0%" stopColor="white" stopOpacity="0.8"/><stop offset="100%" stopColor="white" stopOpacity="0.05"/></radialGradient>
          <radialGradient id="g3"><stop offset="0%" stopColor="white" stopOpacity="0.7"/><stop offset="100%" stopColor="white" stopOpacity="0.05"/></radialGradient>
        </defs>
        {p.art}
      </svg>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black/30 backdrop-blur-md text-white border border-white/20">
        {p.tag}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40 bg-[#050510] overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-6">
            Selected Work
          </span>
          <h2 className="display text-5xl md:text-7xl font-black leading-[1.05]">
            Things I've
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">brought to life.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
              data-cursor="hover"
            >
              <TiltCard className="rounded-3xl overflow-hidden border border-white/8 bg-[#0a0a1f] hover:border-white/15 transition-colors duration-500" max={8}>
                <ProjectArt p={p} />
                <div className="p-6 md:p-7" style={{ transform: 'translateZ(30px)' }}>
                  <p className="text-xs text-slate-500 mb-2 tracking-wider">{p.period}</p>
                  <h3 className="display text-2xl font-black text-white mb-3 leading-tight">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 min-h-[4.5rem]">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
