'use client';

import { Circle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { navSections } from '@/lib/data';

export function SideNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <aside className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <nav aria-label="Section navigation">
        <ul className="flex flex-col items-end gap-3">
          {navSections.map((section) => (
            <li key={section.id}>
              <Link
                href={`/#${section.id}`}
                className="group flex items-center gap-2 text-sm text-brand-ink transition-all"
                onMouseEnter={() => setActiveId(section.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <span className="opacity-0 transition-opacity group-hover:opacity-100">
                  {section.label}
                </span>
                {activeId === section.id ? (
                  <Circle className="h-4 w-4" fill="black" />
                ) : (
                  <Circle className="h-4 w-4" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
