'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-1 border-b border-transparent backdrop-blur transition-colors duration-200 h-[72px] ${
        isScrolled ? 'bg-background/80' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex justify-between max-w-5xl items-center gap-8 p-4 md:px-8">
        <div className="size-[40px] flex items-center justify-center">
          <Link href="/" aria-label="Home" onClick={handleHomeClick}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>

        <nav className="hidden h-full items-center gap-6 font-medium text-brand-ink/80 sm:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={link.href === '/' ? handleHomeClick : undefined}
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
            className="hidden sm:flex cursor-pointer rounded-md p-2 transition-colors hover:bg-brand-300"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <Popover className="relative flex sm:hidden">
            <PopoverButton
              className="p-2 cursor-pointer hover:text-brand-600"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </PopoverButton>
            <PopoverPanel
              portal
              transition
              className="fixed inset-0 z-50 flex flex-col group transition duration-300 ease-out data-closed:opacity-0"
            >
              {({ close }) => (
                <>
                  {/* Backdrop - covers entire site with opacity */}
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="absolute inset-0 bg-black/50 cursor-default"
                    onClick={() => close()}
                  />
                  {/* Drawer - slides from top to bottom on open, bottom to top on close */}
                  <div className="absolute top-0 left-0 right-0 mx-auto flex flex-col px-4 py-6 bg-background z-10 popover-drawer transition-transform duration-300 ease-out group-data-closed:-translate-y-full">
                    <button
                      type="button"
                      onClick={() => close()}
                      aria-label="Close navigation menu"
                      className="flex cursor-pointer w-full items-center justify-end p-2 hover:text-brand-600"
                    >
                      <X className="h-6 w-6" />
                    </button>

                    <nav className="flex flex-col text-lg font-medium text-brand-ink">
                      {primaryLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={(e) => {
                            if (link.href === '/') handleHomeClick(e);
                            close();
                          }}
                          className="rounded-md px-1 py-2 transition-colors hover:text-brand-600"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                    <button
                      type="button"
                      onClick={() => {
                        toggleTheme();
                        close();
                      }}
                      className="flex cursor-pointer items-center rounded-md px-1 py-2 text-lg font-medium text-brand-ink transition-colors hover:text-brand-600"
                      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                      {theme === 'light' ? (
                        <>
                          Dark Mode
                          <Moon className="h-5 w-5 ml-1" />
                        </>
                      ) : (
                        <>
                          Light Mode
                          <Sun className="h-5 w-5 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </header>
  );
}
