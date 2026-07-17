import { MoonIcon, SunIcon } from './icons'

export function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'dark'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  )
}
