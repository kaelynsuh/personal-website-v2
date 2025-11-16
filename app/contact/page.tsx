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
        <ContactSection />
      </div>
    </AppShell>
  );
}
