import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

export const Frame = ({ children, className }: FrameProps) => {
  return (
    <div className={cn("my-6 overflow-hidden rounded-lg border bg-muted/30", className)}>
      {children}
    </div>
  );
};
