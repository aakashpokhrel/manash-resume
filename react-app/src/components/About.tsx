import { about, highlights, languages, personal } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Who I Am" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{about.summary}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-slate-500 dark:text-slate-400">Experience</dt>
                <dd className="text-lg font-semibold text-slate-900 dark:text-white">
                  {about.yearsOfExperience}+ years
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500 dark:text-slate-400">Based in</dt>
                <dd className="text-lg font-semibold text-slate-900 dark:text-white">{personal.location}</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Highlights
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
                >
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Languages
            </h3>
            <ul className="mt-4 space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{l.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
