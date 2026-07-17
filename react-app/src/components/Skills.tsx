import { skillGroups } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-900/40 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Skills" title="Core Skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600 dark:bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
