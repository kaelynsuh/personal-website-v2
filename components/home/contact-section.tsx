import {
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitch,
} from 'lucide-react';
import Link from 'next/link';
import { contactLinks } from '@/lib/data';

const iconMap = {
  'file-text': FileText,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitch: Twitch,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-brand-100 bg-white px-6 py-12 shadow-sm md:px-12"
    >
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-brand-ink">Contact Me</h2>
      </header>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={contactLinks[0].href}
            className="inline-flex items-center gap-3 rounded-full border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-600 hover:text-brand-600"
          >
            <Mail className="h-4 w-4" />
            {contactLinks[0].display}
          </Link>

          {contactLinks
            .filter((link) => link.display)
            .slice(1)
            .map(({ href, icon, label, display }) => {
              const Icon = icon ? iconMap[icon as keyof typeof iconMap] : null;
              return (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-3 rounded-full border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {display}
                </Link>
              );
            })}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {contactLinks
            .filter((link) => !link.display)
            .map(({ href, icon, label }) => {
              const Icon = icon ? iconMap[icon as keyof typeof iconMap] : null;
              return (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-ink transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  {Icon ? <Icon className="h-5 w-5" /> : label}
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
