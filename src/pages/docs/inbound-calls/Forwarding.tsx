import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { PhoneForwarded } from "lucide-react";

const Forwarding = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("@/content/docs/inbound-calls/forwarding.mdx?raw").then(
      (module) => {
        setContent(module.default);
      }
    );
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/inbound-calls/forwarding">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <PhoneForwarded className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Call Forwarding</h1>
            <p className="text-muted-foreground m-0">
              Configure call forwarding and transfers
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

export default Forwarding;
