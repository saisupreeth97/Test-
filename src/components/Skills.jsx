import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Backend',
    icon: '⚡',
    color: 'violet',
    skills: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring MVC', 'Microservices', 'Python', 'Flask', 'Node.js', 'Express.js', 'Zuul API Gateway', 'Eureka', 'Hystrix'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'cyan',
    skills: ['Angular', 'TypeScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'blue',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Git', 'Bitbucket', 'Agile / Scrum', 'Jira', 'Splunk'],
  },
  {
    title: 'Databases & Big Data',
    icon: '🗄️',
    color: 'emerald',
    skills: ['Cassandra', 'Apache Spark', 'SQL', 'NoSQL'],
  },
  {
    title: 'Testing',
    icon: '🧪',
    color: 'orange',
    skills: ['JUnit', 'Mockito', 'Cypress', 'Protractor', 'TDD'],
  },
  {
    title: 'Other',
    icon: '🛠️',
    color: 'pink',
    skills: ['REST APIs', 'GraphQL', 'Factory Design Pattern', 'CCPA Compliance', 'MiniKube', 'Product Management'],
  },
]

const colorMap = {
  violet:  { card: 'border-violet-500/20 bg-violet-500/5',  icon: 'bg-violet-500/15 text-violet-400', skill: 'bg-violet-500/10 text-violet-300 border-violet-500/20', title: 'text-violet-400' },
  cyan:    { card: 'border-cyan-500/20 bg-cyan-500/5',      icon: 'bg-cyan-500/15 text-cyan-400',     skill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',       title: 'text-cyan-400'   },
  blue:    { card: 'border-blue-500/20 bg-blue-500/5',      icon: 'bg-blue-500/15 text-blue-400',     skill: 'bg-blue-500/10 text-blue-300 border-blue-500/20',       title: 'text-blue-400'   },
  emerald: { card: 'border-emerald-500/20 bg-emerald-500/5',icon: 'bg-emerald-500/15 text-emerald-400',skill:'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',title:'text-emerald-400'},
  orange:  { card: 'border-orange-500/20 bg-orange-500/5',  icon: 'bg-orange-500/15 text-orange-400', skill: 'bg-orange-500/10 text-orange-300 border-orange-500/20', title: 'text-orange-400' },
  pink:    { card: 'border-pink-500/20 bg-pink-500/5',      icon: 'bg-pink-500/15 text-pink-400',     skill: 'bg-pink-500/10 text-pink-300 border-pink-500/20',       title: 'text-pink-400'   },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/30 bg-violet-500/10 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                className={`rounded-2xl border ${c.card} p-6 hover:scale-[1.02] transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${c.icon}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-bold text-base ${c.title}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${c.skill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
