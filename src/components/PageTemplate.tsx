import { PageTemplateClient, type PageTemplateClientProps } from './PageTemplateClient';
import { ClientOnly } from './ClientOnly';

export function PageTemplate(props: PageTemplateClientProps) {
  return (
    <ClientOnly>
      <PageTemplateClient {...props} />
    </ClientOnly>
  );
}