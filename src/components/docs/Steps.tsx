import { ReactNode } from "react";

interface StepsProps {
  children: ReactNode;
}

export const Steps = ({ children }: StepsProps) => {
  return (
    <div className="my-6 space-y-4 [counter-reset:step]">
      {children}
    </div>
  );
};

interface StepProps {
  children: ReactNode;
}

export const Step = ({ children }: StepProps) => {
  return (
    <div className="flex gap-4 [counter-increment:step] before:flex before:h-8 before:w-8 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-primary before:text-sm before:font-semibold before:text-primary-foreground before:content-[counter(step)]">
      <div className="flex-1 pt-1">{children}</div>
    </div>
  );
};
