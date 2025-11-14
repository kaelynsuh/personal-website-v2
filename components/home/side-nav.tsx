'use client';

import { Circle, CircleDot } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { navSections } from '@/lib/data';

export function SideNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <aside className="sticky top-32 hidden h-fit rounded-full border border-brand-100 bg-white/80 px-4 py-4 shadow-sm backdrop-blur md:block lg:px-6">
      <nav aria-label="Section navigation">
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-brand-ink transition-colors hover:text-brand-600"
              onMouseEnter={() => setActiveId('home')}
              onMouseLeave={() => setActiveId(null)}
            >
              {activeId === 'home' ? (
                <CircleDot className="h-4 w-4" />
              ) : (
                <Circle className="h-4 w-4" />
              )}
              Home
            </Link>
          </li>
          {navSections.map((section) => (
            <li key={section.id}>
              <Link
                href={`/#${section.id}`}
                className="flex items-center gap-2 text-sm text-brand-ink transition-colors hover:text-brand-600"
                onMouseEnter={() => setActiveId(section.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {activeId === section.id ? (
                  <CircleDot className="h-4 w-4" />
                ) : (
                  <Circle className="h-4 w-4" />
                )}
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

