import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { Voicemail as VoicemailIcon } from "lucide-react";
import { parseAndRenderMDX } from "@/lib/mdx-utils";
import rawContent from "@/content/docs/outbound-calls/voicemail.mdx?raw";

const Voicemail = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    parseAndRenderMDX(rawContent).then(({ html }) => {
      setContent(html);
    });
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/outbound-calls/voicemail">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <VoicemailIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Voicemail Handling</h1>
            <p className="text-muted-foreground m-0">
              Managing voicemail detection and messages
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

export default Voicemail;
