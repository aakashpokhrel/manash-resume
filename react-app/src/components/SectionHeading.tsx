export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 animate-fade-in-up">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-brand-600 dark:bg-brand-400" />
    </div>
  )
}
