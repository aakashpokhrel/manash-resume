import { personal } from '../data/resume'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <Container className="flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
