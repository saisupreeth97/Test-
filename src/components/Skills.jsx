import { motion } from 'framer-motion'

const featured = [
  { name: 'Java', icon: '☕', color: 'from-orange-500/20 to-red-500/20 border-orange-500/30' },
  { name: 'Spring Boot', icon: '🌿', color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30' },
  { name: 'Python', icon: '🐍', color: 'from-blue-500/20 to-yellow-500/20 border-blue-500/30' },
  { name: 'Node.js', icon: '⬢', color: 'from-green-500/20 to-emerald-500/20 border-green-500/30' },
  { name: 'AWS', icon: '☁️', color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30' },
  { name: 'Kubernetes', icon: '⎈', color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30' },
  { name: 'Angular', icon: '🅰️', color: 'from-red-500/20 to-rose-500/20 border-red-500/30' },
  { name: 'TypeScript', icon: '𝐓𝐒', color: 'from-blue-500/20 to-sky-500/20 border-blue-500/30' },
  { name: 'Apache Spark', icon: '✨', color: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30' },
  { name: 'Cassandra', icon: '🗄️', color: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/30' },
  { name: 'Microservices', icon: '🧩', color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30' },
  { name: 'REST APIs', icon: '🔌', color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30' },
]

const row1 = ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'Spring MVC', 'Zuul API Gateway', 'Eureka', 'Hystrix', 'Factory Pattern', 'REST APIs', 'GraphQL']
const row2 = ['Python', 'Flask', 'Node.js', 'Express.js', 'Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind']
const row3 = ['AWS', 'Kubernetes', 'Docker', 'MiniKube', 'Jenkins', 'Git', 'Bitbucket', 'Jira', 'Splunk', 'Agile', 'CI/CD']
const row4 = ['Cassandra', 'Apache Spark', 'SQL', 'NoSQL', 'JUnit', 'Mockito', 'Cypress', 'Protractor', 'TDD', 'CCPA Compliance']

function Marquee({ items, reverse = false, dur = '60s' }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden mask-fade">
      <div
        className={`flex gap-3 whitespace-nowrap will-change-transform ${reverse ? 'marquee-rev' : 'marquee'}`}
        style={{ '--dur': dur, width: 'max-content' }}
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 bg-white/[0.03] text-slate-300 backdrop-blur-sm hover:border-violet-500/40 hover:text-white transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40 bg-[#050510] overflow-hidden">
      {/* Ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-violet-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="relative">
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-6">
            Tech Stack
          </span>
          <h2 className="display text-5xl md:text-7xl font-black leading-[1.05] max-w-4xl mx-auto">
            Tools I use to
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">build the future.</span>
          </h2>
        </motion.div>

        {/* Featured grid */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {featured.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className={`group relative rounded-2xl border bg-gradient-to-br ${s.color} aspect-square flex flex-col items-center justify-center gap-2 backdrop-blur-sm cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                <div className="relative text-3xl md:text-4xl">{s.icon}</div>
                <div className="relative text-[10px] md:text-xs font-semibold text-white/90 text-center px-2">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquees */}
        <div className="space-y-4">
          <Marquee items={row1} dur="60s" />
          <Marquee items={row2} dur="50s" reverse />
          <Marquee items={row3} dur="65s" />
          <Marquee items={row4} dur="55s" reverse />
        </div>
      </div>
    </section>
  )
}
