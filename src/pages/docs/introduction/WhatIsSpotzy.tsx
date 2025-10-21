import DocsLayout from "@/components/DocsLayout";
import { DocContent } from "@/components/docs/DocContent";
import { BookOpen } from "lucide-react";
import { useMDXContent } from "@/hooks/use-mdx-content";

const WhatIsSpotzy = () => {
  const { content } = useMDXContent("introduction/what-is-spotzy");

  return (
    <DocsLayout>
      <DocContent currentPath="/docs/introduction/what-is-spotzy">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold m-0">What is Spotzy.ai?</h1>
            <p className="text-muted-foreground m-0">
              Learn about Spotzy.ai's AI-powered voice assistant platform
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

export default WhatIsSpotzy;
