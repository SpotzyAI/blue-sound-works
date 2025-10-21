import { useEffect, useState } from "react";
import { parseAndRenderMDX } from "@/lib/mdx-utils";

export const useMDXContent = (mdxPath: string) => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    import(`@/content/docs/${mdxPath}.mdx?raw`)
      .then(async (module) => {
        const { html } = await parseAndRenderMDX(module.default);
        setContent(html);
      })
      .catch((error) => {
        console.error(`Error loading MDX file: ${mdxPath}`, error);
        setContent("<p>Content not available</p>");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [mdxPath]);

  return { content, isLoading };
};
