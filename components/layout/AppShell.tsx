import type { ReactNode } from 'react';
import { MainNav } from './MainNav';
import { Footer } from './Footer';

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-50/40 text-brand-ink">
      <MainNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:px-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
