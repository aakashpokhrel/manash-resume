import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { BackToTop } from './components/BackToTop'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { navLinks } from './data/resume'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const sectionIds = navLinks.map((link) => link.id)

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} activeId={activeId} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
