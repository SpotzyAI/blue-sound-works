import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold">VoiceAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-foreground/80 hover:text-primary transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-foreground/80 hover:text-primary transition-colors">
              Documentation
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="hero" size="default">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
