import { motion } from 'framer-motion'

const jobs = [
  {
    company: 'HotelKey',
    role: 'Technical Product Manager / Senior Backend Developer',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    color: 'violet',
    bullets: [
      'Leading backend development and product management for hotel technology platform',
      'Driving technical decisions, architecture, and product roadmap as Senior Backend Developer',
    ],
  },
  {
    company: 'HotelKey',
    role: 'Intern PM / Backend Developer',
    period: 'Oct 2024 – Dec 2024',
    type: 'Internship',
    color: 'purple',
    bullets: [
      'Contributed to backend development and product delivery workflows',
      'Gained hands-on experience managing product requirements and engineering tasks',
    ],
  },
  {
    company: 'California State University, Fullerton',
    role: 'Teaching Associate',
    period: 'Jan 2024 – May 2024',
    type: 'Part-time',
    color: 'cyan',
    bullets: [
      'Instructed undergraduates in CSPC 449 (Web Backend Engineering): RESTful APIs, Flask, server-side scripting, and database management',
      'Designed and graded assignments, exams, and projects',
      'Provided student support and constructive feedback to improve learning outcomes',
    ],
  },
  {
    company: 'DIGICLIPS INC',
    role: 'Software Developer',
    period: 'Oct 2023 – Apr 2024',
    type: 'Full-time',
    color: 'violet',
    bullets: [
      'Migrated search engine frontend from Angular 14 → 15 → 16',
      'Led full migration of test automation framework from Protractor to Cypress',
      'Identified and resolved critical security vulnerabilities in frontend and backend',
      'Architected Node.js and Express.js servers on AWS for deployment of search engine app',
    ],
  },
  {
    company: 'JCPenney',
    role: 'Engineer 1',
    period: 'Jul 2019 – Jul 2022',
    type: 'Full-time',
    color: 'cyan',
    bullets: [
      'Built a new API endpoint for CCPA compliance enabling users to update personal data',
      'Developed features: Delete Account (iOS), Date of Birth, Duplicate Address Removal, Lookup by Phone for e-commerce platform',
      'Executed tech debt upgrades: Gradle, Config Layering, Spring Boot 1.5x → 2.2x',
      'Built a PII validation framework using factory design pattern across 5 teams',
      'Maintained 85% code coverage with JUnit and Mockito',
      'Worked in Agile using Git, Splunk, Bitbucket, Jenkins, and Jira',
    ],
  },
]

const colorMap = {
  violet: { dot: 'bg-violet-500', border: 'border-violet-500/20', bg: 'bg-violet-500/5', tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20', role: 'from-violet-400 to-purple-400' },
  purple: { dot: 'bg-purple-500', border: 'border-purple-500/20', bg: 'bg-purple-500/5', tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20', role: 'from-purple-400 to-violet-400' },
  cyan:   { dot: 'bg-cyan-500',   border: 'border-cyan-500/20',   bg: 'bg-cyan-500/5',   tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',     role: 'from-cyan-400 to-blue-400'   },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#050510]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-10">
            {jobs.map((job, i) => {
              const c = colorMap[job.color]
              return (
                <motion.div
                  key={`${job.company}-${i}`}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {/* Dot */}
                  <div className={`absolute left-4 top-5 w-4 h-4 rounded-full ${c.dot} ring-4 ring-[#050510] -translate-x-1/2`} />

                  {/* Card */}
                  <div className={`rounded-2xl border ${c.border} ${c.bg} p-6 hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-white font-bold text-lg">{job.company}</p>
                        <p className={`font-semibold text-sm bg-gradient-to-r ${c.role} bg-clip-text text-transparent`}>
                          {job.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${c.tag}`}>
                          {job.type}
                        </span>
                        <span className="text-slate-500 text-xs font-medium">{job.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                          <span className="text-violet-400 mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
