import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, useLocation } from "react-router-dom";
import { docsConfig } from "@/config/docs-config";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
              <div className="space-y-6">
                {docsConfig.map((section) => (
                  <div key={section.title}>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const isActive = location.pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                                isActive
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              {Icon && <Icon className="h-4 w-4" />}
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;
