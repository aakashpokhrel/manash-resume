import { achievements } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { StarIcon } from './icons'

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Achievements" title="Milestones" />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <StarIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{a.title}</h3>
                {a.description && (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{a.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
