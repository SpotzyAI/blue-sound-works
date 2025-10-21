import DocsLayout from "@/components/DocsLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const DocsIndex = () => {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            📞 Automate phone calls with AI
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome to the Spotzy.ai documentation hub. Whether you're a product owner, marketer, or developer, 
            these guides will help you build, launch, and scale AI-powered voice experiences.
          </p>
          <p className="text-muted-foreground">
            Need help getting started? Jump to our{" "}
            <Link to="/docs/core-concepts" className="text-primary hover:underline">
              core concepts guide
            </Link>{" "}
            or contact support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 not-prose">
          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sign up on Spotzy.ai
              </h3>
              <p className="text-sm text-muted-foreground">
                Create your free account and access your dashboard.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Create your first AI assistant
              </h3>
              <p className="text-sm text-muted-foreground">
                Define the prompt, choose a voice, and connect any tools you need.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Start making & receiving calls
              </h3>
              <p className="text-sm text-muted-foreground">
                Test your assistant and go live in minutes.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-bold text-foreground">Explore the docs</h2>
          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Link 
              to="/docs/core-concepts"
              className="group border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Core Concepts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Understand the fundamentals of Spotzy.ai
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <Link 
              to="/docs/first-agent"
              className="group border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Creating Your First AI Agent
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guide to build your first voice agent
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <Link 
              to="/docs/integrations"
              className="group border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Integrations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with 265+ tools and services
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>

            <Link 
              to="/docs/api"
              className="group border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    API Reference
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete API documentation for developers
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocsIndex;
