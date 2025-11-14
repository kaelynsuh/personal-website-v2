'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/components/theme-provider';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function MainNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur transition-colors duration-200">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-8 px-4 py-4 md:px-8">
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 font-medium text-brand-ink/80 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 transition-colors hover:bg-brand-100"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm lg:hidden">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 md:px-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="self-end"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col gap-3 text-lg font-medium text-brand-ink">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-1 py-1 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="mt-4 flex items-center gap-2 rounded-md px-1 py-1 text-lg font-medium text-brand-ink transition-colors hover:text-brand-600"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <>
                  <Moon className="h-5 w-5" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5" />
                  Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

