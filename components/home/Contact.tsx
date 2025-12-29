import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { contactLinks } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Mail,
  FileText,
  Linkedin,
  Github,
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 shadow-sm md:px-12"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-brand-ink">Contact Me</h2>
      </header>

      <p className="mb-8">✨ Open to opportunities & collaborations ✨</p>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          {contactLinks.map(({ label, icon, href }) => {
            const Icon = iconMap[icon];
            return (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-3 rounded-full border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
