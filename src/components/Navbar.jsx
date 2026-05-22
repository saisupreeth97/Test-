import { useState, useEffect } from 'react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#050510]/80 backdrop-blur-2xl border-b border-white/5 py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-black tracking-tight"
          data-cursor="hover"
        >
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">SSK</span>
          <span className="text-violet-400">.</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                data-cursor="hover"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-violet-400 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:saisupreeth97@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-slate-100 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
          data-cursor="hover"
        >
          Let's Talk
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)}>
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#0a0a1f] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="text-left text-slate-300 font-medium hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="mailto:saisupreeth97@gmail.com" className="text-violet-400 font-semibold">Let's Talk →</a>
        </div>
      </div>
    </nav>
  )
}
