import type { Metadata } from 'next';
import { ContactSection } from '@/components/home/contact-section';
import { AppShell } from '@/components/layout/app-shell';

export const metadata: Metadata = {
  title: 'Contact | Kaelyn Suh',
  description:
    'Get in touch with software engineer Kaelyn Suh for collaboration, opportunities, or speaking.',
};

export default function ContactPage() {
  return (
    <AppShell>
      <div className="w-full">
        <header className="mb-10 rounded-3xl border border-brand-100 bg-white px-6 py-12 text-center shadow-sm md:px-12">
          <h1 className="text-3xl font-semibold text-brand-ink">
            Let&apos;s chat
          </h1>
          <p className="mt-4 text-brand-ink/75">
            I&apos;m always open to discussing new opportunities, side projects,
            and creative collaborations.
          </p>
        </header>
        <ContactSection />
      </div>
    </AppShell>
  );
}
