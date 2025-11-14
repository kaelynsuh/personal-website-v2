import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl bg-brand-50 shadow-sm"
    >
      <div className="grid gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr] md:px-12 md:py-16">
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-ink/80 md:text-xl">
              {profile.title}
            </p>
          </div>

          <p className="max-w-xl text-base leading-7 text-brand-ink/80 md:text-lg">
            {profile.summary[0]}
          </p>

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

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-brand-300/40 blur-3xl" />
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] border border-brand-100 shadow-lg">
            <Image
              src="/images/kae.jpeg"
              alt="Kaelyn smiling"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

