import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { UserPlus } from "lucide-react";
import { parseAndRenderMDX } from "@/lib/mdx-utils";
import rawContent from "@/content/docs/leads/creating.mdx?raw";

const Creating = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    parseAndRenderMDX(rawContent).then(({ html }) => {
      setContent(html);
    });
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/leads/creating">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <UserPlus className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Creating Leads</h1>
            <p className="text-muted-foreground m-0">
              How to create individual leads in Spotzy.ai
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

export default Creating;
