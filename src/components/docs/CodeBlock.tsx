import { ReactNode, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = typeof children === 'string' ? children : '';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-md p-2 opacity-0 transition-opacity hover:bg-white/10 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      <pre className={cn("overflow-x-auto rounded-lg bg-muted p-4 text-sm", className)}>
        <code>{children}</code>
      </pre>
    </div>
  );
};
