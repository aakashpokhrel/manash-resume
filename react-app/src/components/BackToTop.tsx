import { useScrollTop } from '../hooks/useScrollTop'
import { ArrowUpIcon } from './icons'

export function BackToTop() {
  const isVisible = useScrollTop(400)

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition-all duration-300 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}
