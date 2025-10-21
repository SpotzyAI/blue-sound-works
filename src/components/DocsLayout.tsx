import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, FileText, Sparkles, Settings, Book, Zap, Plug, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DocSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon?: any;
  }[];
}

const docSections: DocSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "What is Spotzy.ai?", href: "/docs", icon: Book },
      { title: "Quick Start", href: "/docs/quick-start", icon: Zap },
      { title: "Key Features", href: "/docs/features", icon: Sparkles },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { title: "Core Concepts", href: "/docs/core-concepts", icon: FileText },
      { title: "Creating Your First AI Agent", href: "/docs/first-agent", icon: Sparkles },
      { title: "Voice Configuration", href: "/docs/voice-config", icon: Settings },
    ],
  },
  {
    title: "AI Agents",
    items: [
      { title: "Agent Overview", href: "/docs/agent-overview", icon: Sparkles },
      { title: "Agent Configuration", href: "/docs/agent-config", icon: Settings },
      { title: "Training Your Agent", href: "/docs/training", icon: Book },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Integration Overview", href: "/docs/integrations", icon: Plug },
      { title: "CRM Integration", href: "/docs/crm-integration", icon: Plug },
      { title: "API Reference", href: "/docs/api", icon: FileText },
    ],
  },
  {
    title: "Languages & Voices",
    items: [
      { title: "Supported Languages", href: "/docs/languages", icon: Globe },
      { title: "Voice Selection", href: "/docs/voices", icon: Settings },
    ],
  },
];

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
                {docSections.map((section) => (
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
            <article className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </article>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;
