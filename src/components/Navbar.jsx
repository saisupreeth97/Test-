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
      scrolled
        ? 'bg-[#0e0b09]/85 backdrop-blur-2xl border-b border-[rgba(240,224,204,0.06)] py-4'
        : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-[12px] font-bold tracking-[0.4em] uppercase text-cream"
          data-cursor="hover"
        >
          SSK
        </a>

        <ul className="hidden md:flex gap-10">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-[rgba(240,224,204,0.45)] hover:text-cream transition-colors duration-200"
                data-cursor="hover"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:saisupreeth97@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase border border-[rgba(240,224,204,0.25)] text-cream hover:bg-[rgba(240,224,204,0.05)] hover:border-[rgba(240,224,204,0.45)] transition-all duration-200"
          data-cursor="hover"
        >
          Let's Talk
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-200 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#0e0b09] border-t border-[rgba(240,224,204,0.06)] px-6 py-6 flex flex-col gap-6">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="text-[12px] font-medium tracking-[0.2em] uppercase text-[rgba(240,224,204,0.55)] hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:saisupreeth97@gmail.com" className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#c94f00]">
            Let's Talk →
          </a>
        </div>
      </div>
    </nav>
  )
}
