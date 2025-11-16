import type { ReactNode } from 'react';
import Link from 'next/link';
import { companyLinks } from './data';

/**
 * Parses text and replaces company names with links
 */
export function parseTextWithLinks(text: string): ReactNode[] {
  // Sort company names by length (longest first) to avoid partial matches
  const companies = Object.keys(companyLinks).sort(
    (a, b) => b.length - a.length,
  );

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // Find all company matches and their positions
  const matches: Array<{ start: number; end: number; company: string }> = [];

  for (const company of companies) {
    const regex = new RegExp(
      `\\b${company.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`,
      'gi',
    );
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        company: match[0], // Preserve original casing
      });
    }
  }

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Remove overlapping matches (keep the first one)
  const nonOverlapping: typeof matches = [];
  for (const match of matches) {
    const overlaps = nonOverlapping.some(
      (existing) =>
        (match.start >= existing.start && match.start < existing.end) ||
        (match.end > existing.start && match.end <= existing.end) ||
        (match.start <= existing.start && match.end >= existing.end),
    );
    if (!overlaps) {
      nonOverlapping.push(match);
    }
  }

  // Build the parts array
  for (const match of nonOverlapping) {
    // Add text before the match
    if (match.start > lastIndex) {
      parts.push(text.slice(lastIndex, match.start));
    }

    // Add the link
    const companyName = match.company;
    const href = companyLinks[companyName as keyof typeof companyLinks];
    if (href) {
      parts.push(
        <Link
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold no-underline decoration-2 underline-offset-2 transition-all hover:text-brand-600 hover:underline"
        >
          {companyName}
        </Link>,
      );
    } else {
      parts.push(companyName);
    }

    lastIndex = match.end;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no matches found, return the original text
  if (parts.length === 0) {
    return [text];
  }

  return parts;
}
