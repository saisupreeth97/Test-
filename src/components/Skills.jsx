import { motion } from 'framer-motion'

const featured = [
  { name: 'Java',         icon: '☕' },
  { name: 'Spring Boot',  icon: '🌿' },
  { name: 'Python',       icon: '🐍' },
  { name: 'Node.js',      icon: '⬢' },
  { name: 'AWS',          icon: '☁️' },
  { name: 'Kubernetes',   icon: '⎈' },
  { name: 'Angular',      icon: '🅰️' },
  { name: 'TypeScript',   icon: '𝐓𝐒' },
  { name: 'Apache Spark', icon: '✦' },
  { name: 'Cassandra',    icon: '🗄️' },
  { name: 'Microservices',icon: '⬡' },
  { name: 'REST APIs',    icon: '↔' },
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
            className="px-5 py-2.5 text-sm font-medium border border-[rgba(240,224,204,0.1)] bg-[rgba(240,224,204,0.03)] text-[rgba(240,224,204,0.55)] backdrop-blur-sm hover:border-[rgba(201,79,0,0.4)] hover:text-cream transition-colors"
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
    <section id="skills" className="relative py-32 md:py-40 bg-[#0e0b09] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c94f00]/5 blur-[140px] pointer-events-none" />

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>

      <div className="relative">
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="display text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto text-cream">
            Tools I use to
            <br />
            <span className="text-[#c94f00]">build the future.</span>
          </h2>
        </motion.div>

        {/* Featured grid */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {featured.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -5, scale: 1.04 }}
                className="group relative border border-[rgba(240,224,204,0.08)] bg-[rgba(240,224,204,0.02)] aspect-square flex flex-col items-center justify-center gap-2 backdrop-blur-sm overflow-hidden hover:border-[rgba(201,79,0,0.35)] transition-colors duration-300"
                data-cursor="hover"
              >
                <div className="absolute inset-0 bg-[rgba(201,79,0,0)] group-hover:bg-[rgba(201,79,0,0.04)] transition-colors duration-300" />
                <div className="relative text-3xl md:text-4xl">{s.icon}</div>
                <div className="relative text-[10px] md:text-xs font-medium text-[rgba(240,224,204,0.7)] text-center px-2">{s.name}</div>
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
