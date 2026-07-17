import { certifications } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { AwardIcon } from './icons'

export function Certifications() {
  return (
    <section id="certifications" className="bg-slate-50 py-20 dark:bg-slate-900/40 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Certifications" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <AwardIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{c.name}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.issuer}</p>
                {c.year && (
                  <span className="mt-2 inline-block text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {c.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
