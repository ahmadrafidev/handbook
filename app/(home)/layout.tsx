import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...baseOptions()}>
      {children}
      {/* Footer */}
      <footer className="mx-auto w-full max-w-2xl py-4">
        <p className="text-center text-sm text-fd-muted-foreground">
          built by{' '}
          <a
            href="https://x.com/arayyye"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline decoration-fd-muted-foreground/30 underline-offset-4 transition-colors hover:text-fd-foreground hover:decoration-fd-foreground/50"
          >
            arayyye
          </a>
        </p>
      </footer>  
    </HomeLayout>
  );
}
