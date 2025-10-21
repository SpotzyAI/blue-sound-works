import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { FileText } from "lucide-react";

const PromptAndTools = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("@/content/docs/ai-assistants/settings/prompt-and-tools.mdx?raw").then(
      (module) => {
        setContent(module.default);
      }
    );
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/ai-assistants/settings/prompt-and-tools">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Prompt & Tools</h1>
            <p className="text-muted-foreground m-0">
              Configure assistant prompts and available tools
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

export default PromptAndTools;
