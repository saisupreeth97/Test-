import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const jobs = [
  {
    company: 'HotelKey',
    role: 'Technical PM / Sr. Backend Developer',
    period: 'Jan 2025 – Present',
    type: 'Current',
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

function JobRow({ job, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 40%'] })
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.3, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.35], [40, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="border-t border-[rgba(240,224,204,0.08)] pt-8 pb-8 grid md:grid-cols-12 gap-4 md:gap-8"
    >
      {/* Left: meta */}
      <div className="md:col-span-4">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[rgba(240,224,204,0.35)] block mb-3">
          {job.type}
        </span>
        <h3 className="display text-2xl md:text-3xl font-bold text-cream mb-2 leading-tight">
          {job.company}
        </h3>
        <p className="text-[rgba(240,224,204,0.5)] text-sm mb-1">{job.role}</p>
        <p className="text-[11px] text-[rgba(240,224,204,0.3)] tracking-wider">{job.period}</p>
      </div>

      {/* Right: bullets */}
      <div className="md:col-span-8">
        <ul className="space-y-3">
          {job.bullets.map((b, j) => (
            <li key={j} className="flex gap-3 text-[rgba(240,224,204,0.6)] leading-relaxed text-sm md:text-base">
              <span className="text-[#c94f00] mt-1.5 text-xs flex-shrink-0">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40 bg-[#0e0b09]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="display text-5xl md:text-7xl font-bold leading-[1.05] text-cream">
            A track record of
            <br />
            <span className="text-[#c94f00]">shipping at scale.</span>
          </h2>
        </motion.div>

        <div>
          {jobs.map((job, i) => (
            <JobRow key={`${job.company}-${i}`} job={job} index={i} />
          ))}
          <div className="border-t border-[rgba(240,224,204,0.08)]" />
        </div>
      </div>
    </section>
  )
}
