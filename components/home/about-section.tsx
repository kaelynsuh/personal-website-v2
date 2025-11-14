import { profile } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="rounded-3xl border border-brand-100 bg-white px-6 py-12 shadow-sm md:px-12"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-brand-ink">About Me</h2>
      </header>
      <div className="space-y-6 text-base leading-7 text-brand-ink/80 md:text-lg">
        {profile.summary.slice(0, 3).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

