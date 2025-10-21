import { Info } from "lucide-react";
import { ReactNode } from "react";

interface NoteProps {
  children: ReactNode;
}

export const Note = ({ children }: NoteProps) => {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
      <Info className="h-5 w-5 shrink-0 text-primary mt-0.5" />
      <div className="flex-1 text-sm text-foreground [&_p]:m-0">{children}</div>
    </div>
  );
};
