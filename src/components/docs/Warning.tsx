import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

interface WarningProps {
  children: ReactNode;
}

export const Warning = ({ children }: WarningProps) => {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
      <AlertTriangle className="h-5 w-5 shrink-0 text-orange-500 mt-0.5" />
      <div className="flex-1 text-sm text-foreground [&_p]:m-0">{children}</div>
    </div>
  );
};
