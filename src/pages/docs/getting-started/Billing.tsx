import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { DollarSign } from "lucide-react";

const Billing = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("@/content/docs/getting-started/billing.mdx?raw").then(
      (module) => {
        setContent(module.default);
      }
    );
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/getting-started/billing">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Billing</h1>
            <p className="text-muted-foreground m-0">
              Understanding Spotzy.ai billing and payments
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

export default Billing;
