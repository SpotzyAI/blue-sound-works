import { Lightbulb } from "lucide-react";
import { ReactNode } from "react";

interface TipProps {
  children: ReactNode;
}

export const Tip = ({ children }: TipProps) => {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
      <Lightbulb className="h-5 w-5 shrink-0 text-yellow-600 dark:text-yellow-500 mt-0.5" />
      <div className="flex-1 text-sm text-foreground [&_p]:m-0">{children}</div>
    </div>
  );
};
