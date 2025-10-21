import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { Phone } from "lucide-react";

const CallQuality = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("@/content/docs/troubleshooting/call-quality.mdx?raw").then(
      (module) => {
        setContent(module.default);
      }
    );
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/troubleshooting/call-quality">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Call Quality Issues</h1>
            <p className="text-muted-foreground m-0">
              Troubleshoot and optimize call quality, latency, and connection issues
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

export default CallQuality;
