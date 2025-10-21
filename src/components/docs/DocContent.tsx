import { ReactNode, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { docsConfig } from "@/config/docs-config";

interface DocContentProps {
  children: ReactNode;
  currentPath: string;
}

export const DocContent = ({ children, currentPath }: DocContentProps) => {
  const [prevPage, setPrevPage] = useState<{ title: string; href: string } | null>(null);
  const [nextPage, setNextPage] = useState<{ title: string; href: string } | null>(null);

  useEffect(() => {
    // Flatten all pages
    const allPages = docsConfig.flatMap(section => section.items);
    const currentIndex = allPages.findIndex(page => page.href === currentPath);

    if (currentIndex > 0) {
      setPrevPage(allPages[currentIndex - 1]);
    } else {
      setPrevPage(null);
    }

    if (currentIndex < allPages.length - 1 && currentIndex !== -1) {
      setNextPage(allPages[currentIndex + 1]);
    } else {
      setNextPage(null);
    }
  }, [currentPath]);

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <div className="doc-content">
        {children}
      </div>

      {/* Navigation Footer */}
      <div className="mt-12 flex items-center justify-between border-t pt-6 not-prose">
        {prevPage ? (
          <Link to={prevPage.href}>
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{prevPage.title}</div>
              </div>
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextPage && (
          <Link to={nextPage.href}>
            <Button variant="outline" className="gap-2">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{nextPage.title}</div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </article>
  );
};
