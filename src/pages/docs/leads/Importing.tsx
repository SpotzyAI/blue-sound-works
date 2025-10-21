import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { Upload } from "lucide-react";
import { useMDXContent } from "@/hooks/use-mdx-content";

const Importing = () => {
  const { content } = useMDXContent("leads/importing");

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/leads/importing">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Importing Leads</h1>
            <p className="text-muted-foreground m-0">
              How to import leads into Spotzy.ai
            </p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </DocContent>
    </DocsLayout>
  );
};

export default Importing;
