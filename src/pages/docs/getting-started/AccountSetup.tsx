import { useEffect, useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { Settings } from "lucide-react";

const AccountSetup = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import("@/content/docs/getting-started/account-setup.mdx?raw").then(
      (module) => {
        setContent(module.default);
      }
    );
  }, []);

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/getting-started/account-setup">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">Account Setup</h1>
            <p className="text-muted-foreground m-0">
              Configure your Spotzy.ai account
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

export default AccountSetup;
