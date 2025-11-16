import Link from 'next/link';

export function PortfolioCTA() {
  return (
    <section className="rounded-3xl border border-brand-100 bg-white px-6 py-12 text-center shadow-sm md:px-12">
      <Link
        href="/portfolio"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600/90"
      >
        View my portfolio
      </Link>
    </section>
  );
}
