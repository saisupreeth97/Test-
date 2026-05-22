import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const jobs = [
  {
    company: 'HotelKey',
    role: 'Technical PM / Sr. Backend Developer',
    period: 'Jan 2025 – Present',
    type: 'Current',
    accent: 'violet',
    bullets: [
      'Leading backend development and product management for hotel technology platform',
      'Driving technical decisions, architecture, and product roadmap',
    ],
  },
  {
    company: 'HotelKey',
    role: 'Intern PM / Backend Developer',
    period: 'Oct 2024 – Dec 2024',
    type: 'Internship',
    accent: 'purple',
    bullets: [
      'Contributed to backend development and product delivery workflows',
      'Hands-on experience managing product requirements and engineering tasks',
    ],
  },
  {
    company: 'CSU Fullerton',
    role: 'Teaching Associate — CSPC 449',
    period: 'Jan – May 2024',
    type: 'Part-time',
    accent: 'cyan',
    bullets: [
      'Instructed undergraduates in Web Backend Engineering: REST APIs, Flask, server-side scripting',
      'Designed and graded assignments, exams, and projects',
      'Provided constructive feedback to improve student outcomes',
    ],
  },
  {
    company: 'DIGICLIPS INC',
    role: 'Software Developer',
    period: 'Oct 2023 – Apr 2024',
    type: 'Full-time',
    accent: 'violet',
    bullets: [
      'Migrated search engine frontend from Angular 14 → 15 → 16',
      'Led full migration of test automation framework from Protractor to Cypress',
      'Identified and resolved critical security vulnerabilities',
      'Architected Node.js / Express servers on AWS for production deployment',
    ],
  },
  {
    company: 'JCPenney',
    role: 'Engineer 1',
    period: 'Jul 2019 – Jul 2022',
    type: 'Full-time',
    accent: 'cyan',
    bullets: [
      'Built new API endpoint for CCPA compliance enabling users to update personal data',
      'Developed: Delete Account (iOS), DOB, Duplicate Address Removal, Lookup by Phone',
      'Executed tech debt upgrades: Gradle, Config Layering, Spring Boot 1.5x → 2.2x',
      'Built PII validation framework using factory design pattern across 5 teams',
      'Maintained 85% code coverage with JUnit and Mockito',
      'Agile with Git, Splunk, Bitbucket, Jenkins, and Jira',
    ],
  },
]

const accentMap = {
  violet: { dot: 'bg-violet-500', ring: 'shadow-[0_0_30px_rgba(124,58,237,0.6)]', text: 'text-violet-400', border: 'border-violet-500/30', bg: 'from-violet-500/10', label: 'bg-violet-500/15 text-violet-300 border-violet-500/30' },
  purple: { dot: 'bg-purple-500', ring: 'shadow-[0_0_30px_rgba(168,85,247,0.6)]', text: 'text-purple-400', border: 'border-purple-500/30', bg: 'from-purple-500/10', label: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
  cyan:   { dot: 'bg-cyan-500',   ring: 'shadow-[0_0_30px_rgba(6,182,212,0.6)]',  text: 'text-cyan-400',   border: 'border-cyan-500/30',   bg: 'from-cyan-500/10',   label: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' },
}

function JobCard({ job, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.4, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0])
  const a = accentMap[job.accent]

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="relative pl-20 md:pl-24">
      {/* Timeline dot */}
      <div className={`absolute left-6 md:left-8 top-8 w-3 h-3 rounded-full ${a.dot} ${a.ring} ring-4 ring-[#050510] -translate-x-1/2`} />

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative rounded-3xl border border-white/8 bg-white/[0.02] p-7 md:p-9 backdrop-blur-sm overflow-hidden hover:border-white/15 transition-colors duration-300"
      >
        {/* Gradient hover sheen */}
        <div className={`absolute inset-0 bg-gradient-to-br ${a.bg} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border ${a.label}`}>
              {job.type}
            </span>
            <span className="text-slate-500 text-xs font-medium tracking-wider">{job.period}</span>
          </div>

          <h3 className="display text-3xl md:text-4xl font-black text-white mb-2 mt-3 leading-tight">
            {job.company}
          </h3>
          <p className={`text-base md:text-lg font-semibold ${a.text} mb-6`}>{job.role}</p>

          <ul className="space-y-3">
            {job.bullets.map((b, j) => (
              <li key={j} className="flex gap-3 text-slate-400 leading-relaxed text-sm md:text-base">
                <span className={`${a.text} mt-1.5 text-xs flex-shrink-0`}>●</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40 bg-[#050510]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-6">
            Experience
          </span>
          <h2 className="display text-5xl md:text-7xl font-black leading-[1.05]">
            A track record of
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">shipping at scale.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-purple-500/30 to-cyan-500/0" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <JobCard key={`${job.company}-${i}`} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
