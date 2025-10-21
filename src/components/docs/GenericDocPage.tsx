import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { useMDXContent } from "@/hooks/use-mdx-content";
import { LucideIcon } from "lucide-react";

interface GenericDocPageProps {
  mdxPath: string;
  currentPath: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export const GenericDocPage = ({ mdxPath, currentPath, title, subtitle, icon: Icon }: GenericDocPageProps) => {
  const { content } = useMDXContent(mdxPath);

  return (
    <DocsLayout>
      <DocContent currentPath={currentPath}>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">{title}</h1>
            <p className="text-muted-foreground m-0">{subtitle}</p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </DocContent>
    </DocsLayout>
  );
};
