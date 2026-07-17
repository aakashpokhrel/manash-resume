import { education } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { GraduationCapIcon } from './icons'

export function Education() {
  return (
    <section id="education" className="bg-slate-50 py-20 dark:bg-slate-900/40 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.credential}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{edu.credential}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.institution}</p>
                {edu.board && <p className="text-sm text-slate-500 dark:text-slate-400">{edu.board}</p>}
                <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
