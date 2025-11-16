import { education } from '@/lib/data';

export function EducationSection() {
  return (
    <section
      id="education"
      className="rounded-3xl border border-brand-100 bg-white px-6 py-12 shadow-sm md:px-12"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-brand-ink">Education</h2>
      </header>

      <div className="rounded-2xl border border-brand-50 bg-brand-50/50 p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-brand-ink">
          {education.institution}
        </h3>
        <p className="mt-1 text-brand-ink/70">{education.program}</p>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-brand-ink/60">
          {education.start} – {education.end}
        </p>
        <ul className="mt-6 space-y-3 text-brand-ink/80">
          {education.highlights.map((highlight) => (
            <li key={highlight} className="text-base leading-7">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
