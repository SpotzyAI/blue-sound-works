import { ReactNode } from "react";
import { Note } from "./Note";
import { Warning } from "./Warning";
import { Tip } from "./Tip";
import { Steps, Step } from "./Steps";
import { Frame } from "./Frame";
import { CodeBlock } from "./CodeBlock";

interface MDXProviderProps {
  children: ReactNode;
}

const components = {
  Note,
  Warning,
  Tip,
  Steps,
  Step,
  Frame,
  pre: ({ children }: { children: ReactNode }) => <CodeBlock>{children}</CodeBlock>,
};

export const MDXProvider = ({ children }: MDXProviderProps) => {
  return <div className="mdx-content">{children}</div>;
};

export { components };
