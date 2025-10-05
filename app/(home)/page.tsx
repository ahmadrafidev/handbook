import Link from 'next/link';
import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'devbook',
  description: "An opinionated developer's handbook.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-xl md:text-3xl font-bold tracking-tight">
            devbook - an opinionated handbook
          </h1>
          <p className="text-fd-muted-foreground">
            my personal collection of notes, learnings, and references in software engineering.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.rafiwirana.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-sm transition-colors hover:bg-fd-accent"
          >
            Personal Website
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/ahmadrafidev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-sm transition-colors hover:bg-fd-accent"
          >
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://linkedin.com/in/ahmadrafiwirana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-sm transition-colors hover:bg-fd-accent"
          >
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 pt-2">
          <Link
            href="/docs"
            className="group flex items-center justify-between rounded-lg border border-fd-border bg-fd-card p-4 transition-colors hover:bg-fd-accent"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-fd-muted-foreground" />
              <div>
                <div className="font-medium">Browse Notes</div>
                <div className="text-sm text-fd-muted-foreground">
                  Explore notes and learnings
                </div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-fd-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
