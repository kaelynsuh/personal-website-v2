import { workHistory } from "@/lib/data";

export function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-3xl border border-brand-100 bg-white px-6 py-12 shadow-sm md:px-12"
    >
      <header className="mb-10">
        <h2 className="text-3xl font-semibold text-brand-ink">Work Experience</h2>
        <p className="mt-2 text-brand-ink/70">
          Highlights from roles across gaming, travel, and regulated industries.
        </p>
      </header>

      <div className="space-y-10">
        {workHistory.map((job) => (
          <article
            key={`${job.role}-${job.company}`}
            className="rounded-2xl border border-brand-50 bg-brand-50/40 px-6 py-6 shadow-inner"
          >
            <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-brand-ink">
                  {job.role}
                </h3>
                <p className="text-brand-ink/70">{job.company}</p>
              </div>
              <time className="text-sm font-medium uppercase tracking-[0.25em] text-brand-ink/60">
                {job.start} – {job.end}
              </time>
            </header>
            <ul className="mt-4 space-y-3 text-brand-ink/80">
              {job.description.map((item) => (
                <li key={item} className="text-base leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

