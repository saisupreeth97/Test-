import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

const openToRoles = ['Software Engineer', 'Full Stack Developer', 'Backend Developer', 'AI / ML Engineer']

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '3', label: 'Companies' },
  { num: '3.84', label: 'MS GPA' },
  { num: '10+', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left — text */}
          <div>
            <motion.p
              className="text-slate-300 text-lg leading-relaxed mb-5"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            >
              I'm a <strong className="text-white">Backend &amp; Full Stack Developer</strong> with 5+ years of experience building
              scalable, production-grade systems across e-commerce, hospitality tech, and education.
            </motion.p>
            <motion.p
              className="text-slate-400 leading-relaxed mb-8"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            >
              I hold a Master's in Computer Science from California State University, Fullerton (GPA 3.84)
              and a Bachelor's in Information Science from B.M.S. College of Engineering. I love solving
              complex backend challenges, designing clean APIs, and mentoring others.
            </motion.p>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            >
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Open to Roles</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {openToRoles.map(role => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 border border-violet-500/30 text-violet-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="flex gap-4 flex-wrap"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
            >
              <a
                href="mailto:saisupreeth97@gmail.com"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all hover:shadow-lg hover:shadow-violet-500/30"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/sai-supreeth"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                LinkedIn →
              </a>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          >
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-violet-500/15 bg-violet-500/5 p-6 text-center hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 glow-violet"
              >
                <p className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {num}
                </p>
                <p className="text-slate-400 text-sm font-medium">{label}</p>
              </div>
            ))}

            {/* Education card */}
            <div className="col-span-2 rounded-2xl border border-cyan-500/15 bg-cyan-500/5 p-6 hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Education</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white text-sm">MS Computer Science</p>
                  <p className="text-slate-400 text-xs">California State University, Fullerton · 2022–2024 · GPA 3.84</p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <p className="font-semibold text-white text-sm">BE Information Science</p>
                  <p className="text-slate-400 text-xs">B.M.S. College of Engineering · 2015–2019</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
