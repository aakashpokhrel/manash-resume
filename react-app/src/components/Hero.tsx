import { about, personal } from '../data/resume'
import { Container } from './Container'
import { MapPinIcon } from './icons'

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_theme(colors.brand.100),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_theme(colors.brand.900),_transparent_60%)]"
      />

      <Container className="flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
        <div className="flex-1 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Welcome, I&apos;m
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-600 dark:text-slate-300">{personal.title}</p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:mx-0">
            {about.yearsOfExperience}+ years of business leadership experience, now focused on
            technical SEO, WordPress, and data-driven digital marketing.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 md:justify-start">
            <MapPinIcon className="h-4 w-4 shrink-0" />
            <span>{personal.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Get in touch
            </button>
            <button
              type="button"
              onClick={() => scrollTo('experience')}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              View experience
            </button>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="mx-auto h-48 w-48 overflow-hidden rounded-full shadow-xl ring-4 ring-white dark:ring-slate-900 sm:h-56 sm:w-56">
            <img
              src="/profile.jpg"
              alt={`Portrait of ${personal.name}`}
              className="h-full w-full object-cover"
              width={224}
              height={224}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
