import type { ReactNode } from 'react';
import { MainNav } from './main-nav';
import { SiteFooter } from './site-footer';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-50/40 text-brand-ink">
      <MainNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:px-8 md:py-16">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
