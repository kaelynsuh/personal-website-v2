import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/lib/data';

export function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden rounded-3xl bg-brand-50 shadow-sm"
    >
      <div className="flex flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:gap-8 md:px-12 md:py-16">
        <div className="relative flex shrink-0 items-center justify-center px-4">
          <div className="absolute inset-0 rounded-full bg-brand-300/40 blur-3xl" />
          <div className="relative aspect-square w-48 overflow-hidden rounded-full border-4 border-brand-100 shadow-lg">
            <Image
              src="/images/kae.jpg"
              alt="Kaelyn smiling"
              width={800}
              height={800}
              className="h-full w-full scale-130 object-cover object-[center_25%]"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl leading-tight text-brand-ink md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-ink/80 md:text-xl">
              {profile.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600/90"
            >
              View My Portfolio
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-brand-300 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
