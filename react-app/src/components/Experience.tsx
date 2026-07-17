import { experience } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { BriefcaseIcon } from './icons'

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've Worked" />

        <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((job) => (
            <li key={job.organization} className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white ring-4 ring-white dark:ring-slate-950">
                <BriefcaseIcon className="h-4 w-4" />
              </span>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{job.organization}</p>

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600 dark:bg-brand-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {job.achievements && job.achievements.length > 0 && (
                  <>
                    <h4 className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Achievements
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {job.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600 dark:bg-brand-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
