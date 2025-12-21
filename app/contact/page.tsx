import type { Metadata } from 'next';
import { Contact } from '@/components/home/Contact';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Contact | Kaelyn Suh',
  description:
    'Get in touch with software engineer Kaelyn Suh for collaboration, opportunities, or speaking.',
};

export default function ContactPage() {
  return (
    <AppShell>
      <div className="w-full">
        <Contact />
      </div>
    </AppShell>
  );
}
