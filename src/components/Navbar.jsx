import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050510]/95 backdrop-blur-xl border-b border-violet-500/10 py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-black tracking-tight"
        >
          <span className="gradient-text">SSK</span>
          <span className="text-violet-400">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-violet-400 transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:saisupreeth97@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)}>
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#0a0a1f] border-t border-violet-500/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-left text-slate-300 font-medium hover:text-white">
              {l}
            </button>
          ))}
          <a href="mailto:saisupreeth97@gmail.com" className="text-violet-400 font-semibold">Hire Me →</a>
        </div>
      </div>
    </nav>
  )
}
