import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section
      id="skills"
      className="rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 shadow-sm md:px-12"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-brand-ink">Skills</h2>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-brand-50 bg-brand-50/60 p-6"
          >
            <h3 className="text-lg font-semibold text-brand-ink">{category}</h3>
            <ul className="mt-4 space-y-2 text-brand-ink/80">
              {items.map((item) => (
                <li key={item} className="text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
