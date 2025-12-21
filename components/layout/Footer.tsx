'use client';

import { ArrowUp } from 'lucide-react';
import { useCallback } from 'react';

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="border-t border-brand-100 bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-brand-ink/80 md:px-8">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-full border border-brand-100 px-4 py-2 text-brand-ink transition-colors hover:border-brand-300 hover:text-brand-600"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-4 w-4" />
          Back to top
        </button>
        <p>© {new Date().getFullYear()} Kaelyn Suh</p>
      </div>
    </footer>
  );
}
