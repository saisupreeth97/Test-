export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050510] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xl font-black">
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">SSK</span>
          <span className="text-violet-400">.</span>
        </p>
        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} Sai Supreeth Kolaparthy · Built with React, Three.js &amp; Tailwind CSS
        </p>
        <div className="flex gap-4">
          <a href="mailto:saisupreeth97@gmail.com" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Email</a>
          <a href="https://www.linkedin.com/in/sai-supreeth" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
