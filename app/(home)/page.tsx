import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'devbook',
  description: "An opinionated developer's handbook.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="animate-spin-slow p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <Image
                src="/images/logo.png"
                alt="devbook logo"
                width={48}
                height={48}
                priority
                className="rounded-full dark:invert"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              devbook - an opinionated engineering handbook
            </h1>
            <p className="text-fd-muted-foreground">
              a highly curated collection of notes, learnings, and personal references.
            </p>
          </div>
        </div>

        {/* Grid Layout*/}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/docs"
            className="rounded-lg border border-fd-border bg-fd-card p-6 transition-colors hover:bg-fd-accent"
          >
            <h2 className="font-medium">Notes</h2>
            <p className="text-sm text-fd-muted-foreground mt-1">
              Browse notes and learnings
            </p>
          </Link>
          <Link
            href="/tools"
            className="rounded-lg border border-fd-border bg-fd-card p-6 transition-colors hover:bg-fd-accent"
          >
            <h2 className="font-medium">Tools</h2>
            <p className="text-sm text-fd-muted-foreground mt-1">
              Curated development tools
            </p>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="https://www.rafiwirana.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-sm transition-colors hover:bg-fd-accent"
          >
            About Me
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/ahmadrafidev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-sm transition-colors hover:bg-fd-accent"
          >
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://linkedin.com/in/ahmadrafiwirana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-sm transition-colors hover:bg-fd-accent"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </main>
  );
}
