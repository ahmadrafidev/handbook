import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'devbook',
  description: "An opinionated developer's handbook.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        {/* Simple Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Developer's Handbook
          </h1>
          <p className="text-lg text-fd-muted-foreground leading-relaxed">
            My personal collection of notes, learnings, and references as I build and grow as a developer.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/docs"
            className="group flex items-center justify-between rounded-lg border border-fd-border bg-fd-card p-4 transition-colors hover:bg-fd-accent"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-fd-muted-foreground" />
              <div>
                <div className="font-medium">Browse Notes</div>
                <div className="text-sm text-fd-muted-foreground">
                  Explore my dev notes and learnings
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
