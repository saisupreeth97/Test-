export default function Footer() {
  return (
    <footer className="border-t border-[rgba(240,224,204,0.08)] bg-[#0e0b09] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] font-bold tracking-[0.4em] uppercase text-cream">
          SSK
        </p>
        <p className="text-[rgba(240,224,204,0.3)] text-xs text-center">
          © {new Date().getFullYear()} Sai Supreeth Kolaparthy · React, Three.js &amp; Tailwind CSS
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:saisupreeth97@gmail.com"
            className="text-[rgba(240,224,204,0.35)] hover:text-cream transition-colors text-xs tracking-wider"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sai-supreeth"
            target="_blank"
            rel="noreferrer"
            className="text-[rgba(240,224,204,0.35)] hover:text-cream transition-colors text-xs tracking-wider"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
