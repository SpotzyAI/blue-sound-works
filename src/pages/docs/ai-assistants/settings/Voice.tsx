import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { Phone } from "lucide-react";
import { parseAndRenderMDX } from "@/lib/mdx-utils";
import rawContent from "@/content/docs/ai-assistants/settings/voice.mdx?raw";

const Voice = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    parseAndRenderMDX(rawContent).then(({ html }) => {
      setContent(html);
    });
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/ai-assistants/settings/voice">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Voice Configuration</h1>
            <p className="text-muted-foreground m-0">
              Configure your assistant's voice settings
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

export default Voice;
