import Link from "next/link";

export function PortfolioCTA() {
  return (
    <section className="rounded-3xl border border-brand-100 bg-white px-6 py-12 text-center shadow-sm md:px-12">
      <h2 className="text-3xl font-semibold text-brand-ink">
        Curious about my projects?
      </h2>
      <p className="mt-4 text-brand-ink/75">
        Explore open source work, side projects, and experiments I&apos;ve
        shipped over the years.
      </p>
      <Link
        href="/portfolio"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600/90"
      >
        View my portfolio
      </Link>
    </section>
  );
}

