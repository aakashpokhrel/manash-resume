import { useState } from 'react'
import { navLinks, personal } from '../data/resume'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { MenuIcon, XIcon } from './icons'

export function Navbar({
  theme,
  onToggleTheme,
  activeId,
}: {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  activeId: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (id: string) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavigate('home')
          }}
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {personal.name.split(' ')[0]}
          <span className="text-brand-600 dark:text-brand-400">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavigate(link.id)
              }}
              aria-current={activeId === link.id ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeId === link.id
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav aria-label="Mobile" className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigate(link.id)
                  }}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    activeId === link.id
                      ? 'bg-brand-600 text-white'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
