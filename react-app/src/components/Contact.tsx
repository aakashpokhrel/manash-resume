import { personal } from '../data/resume'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { MailIcon, MapPinIcon, PhoneIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Contact" title="Get In Touch" />

        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
              <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-300">{personal.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Phone</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{personal.phone}</p>
            </div>
          </a>

          <div className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Location</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{personal.location}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
