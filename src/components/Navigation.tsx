import { Button } from "@/components/ui/button";
import { Menu, Sparkles, Zap, Building2, Heart, ShoppingCart, Home, Briefcase, Utensils, Scale, Car, DollarSign, BookOpen, FileText, Mail, Clock } from "lucide-react";
import spotzyLogo from "@/assets/spotzy-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const solutionItems = [
    {
      icon: Sparkles,
      title: "Features",
      description: "Explore powerful AI voice capabilities",
      href: "/#features",
    },
    {
      icon: Zap,
      title: "Use Cases",
      description: "See how businesses leverage our platform",
      href: "/#use-cases",
    },
  ];

  const industryItems = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Automating phone calls in the medical field",
      href: "/industries/healthcare",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Improve e-commerce customer service with AI voice",
      href: "/industries/ecommerce",
    },
    {
      icon: Building2,
      title: "Call center",
      description: "AI voice agents for call center phone calls",
      href: "/industries/call-center",
    },
    {
      icon: Home,
      title: "Real estate",
      description: "Automate real estate phone calls with AI voice agents",
      href: "/industries/real-estate",
    },
    {
      icon: Briefcase,
      title: "Services",
      description: "AI voice agents for service industry phone calls",
      href: "/industries/services",
    },
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Automated phone ordering and reservations",
      href: "/industries/restaurant",
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Automated legal client communication",
      href: "/industries/legal",
    },
    {
      icon: Car,
      title: "Car Dealership",
      description: "Automated auto sales and service communication",
      href: "/industries/car-dealership",
    },
  ];

  const resourceItems = [
    {
      icon: BookOpen,
      title: "Languages",
      description: "Explore 100+ languages and voices",
      href: "/languages",
    },
    {
      icon: FileText,
      title: "Integrations",
      description: "Connect with your favorite tools",
      href: "/integrations",
    },
    {
      icon: Mail,
      title: "Contact",
      description: "Get in touch with our team",
    },
    {
      icon: Clock,
      title: "Documentation",
      description: "Learn how to use our platform",
      href: "https://docs.spotzyai.com",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={spotzyLogo} alt="SpotzyAI Logo" className="h-10" />
          </a>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solution</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6">
                    <h3 className="text-sm font-semibold text-primary mb-4">Explore Our Platform</h3>
                    <div className="grid gap-3">
                      {solutionItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">{item.title}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-6">
                    <h3 className="text-sm font-semibold text-primary mb-4">Industries we serve</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {industryItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex flex-col items-start gap-2 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground mb-1">{item.title}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6">
                    <h3 className="text-sm font-semibold text-primary mb-4">Resources & Support</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {resourceItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex flex-col items-start gap-2 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground mb-1">{item.title}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
