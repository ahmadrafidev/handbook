import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { toolsSource } from '@/lib/source';

export default function ToolsLayout({ children }: LayoutProps<'/tools'>) {
  return (
    <DocsLayout tree={toolsSource.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}

