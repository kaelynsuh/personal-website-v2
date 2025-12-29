import type { Metadata } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import Link from 'next/link';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

export const metadata: Metadata = {
  title: 'Portfolio | Kaelyn Suh',
  description: 'Browse open source projects by Kaelyn Suh.',
};

async function getRepositories(): Promise<Repo[]> {
  try {
    const response = await fetch(
      'https://api.github.com/users/kaelynsuh/repos?per_page=100',
      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 60 * 60 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as Repo[];
    return repos
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      );
  } catch (error) {
    console.error('Error fetching repositories', error);
    return [];
  }
}

export default async function PortfolioPage() {
  const repositories = await getRepositories();

  return (
    <AppShell>
      <div className="flex w-full flex-col gap-10">
        <header className="rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 text-center shadow-sm md:px-12">
          <h1 className="text-3xl font-semibold text-brand-ink">
            Open Source Portfolio
          </h1>
          <p className="mt-4 text-brand-ink/75">
            Collection of open source projects I&apos;ve worked on, fetched live
            from GitHub.
          </p>
        </header>

        {repositories.length === 0 ? (
          <div className="rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 text-center shadow-sm md:px-12">
            <p className="text-brand-ink/75">
              There was an issue fetching projects from GitHub. Please try again
              later.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {repositories.map((repo) => (
              <article
                key={repo.id}
                className="flex h-full flex-col rounded-3xl border border-brand-100 bg-brand-50 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-brand-ink">
                      {repo.name}
                    </h2>
                    {repo.language && (
                      <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand-ink/60">
                        {repo.language}
                      </p>
                    )}
                  </div>
                  <time
                    dateTime={repo.pushed_at}
                    className="text-xs uppercase tracking-[0.25em] text-brand-ink/50"
                  >
                    Updated{' '}
                    {new Date(repo.pushed_at).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>

                {repo.description && (
                  <p className="mt-4 flex-1 text-sm text-brand-ink/75">
                    {repo.description}
                  </p>
                )}

                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-300 px-5 py-2 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  View on GitHub
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
