import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles, Zap, Building2, Heart, ShoppingCart, Home, Briefcase, Utensils, Scale, Car, DollarSign, BookOpen, FileText, Mail, Clock, ChefHat, X } from "lucide-react";
import spotzyLogo from "@/assets/spotzy-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    {
      icon: FileText,
      title: "Integrations",
      description: "Connect with your favorite tools",
      href: "/integrations",
    },
    {
      icon: BookOpen,
      title: "Languages",
      description: "Explore 36 languages and voices",
      href: "/languages",
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
      title: "Hospitality",
      description: "AI voice automation for hotels, restaurants & resorts",
      href: "/industries/hospitality",
    },
    {
      icon: ChefHat,
      title: "Restaurant",
      description: "Real-time reservation system with AI voice assistants",
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
      icon: Mail,
      title: "Contact",
      description: "Get in touch with our team",
      href: "/contact",
    },
    {
      icon: Clock,
      title: "Documentation",
      description: "Learn how to use our platform",
      href: "https://docs.spotzyai.com",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
            <img src={spotzyLogo} alt="SpotzyAI Logo" className="h-10" />
          </a>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solution</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6 glass-card">
                    <h3 className="text-sm font-semibold bg-gradient-accent bg-clip-text text-transparent mb-4">Explore Our Platform</h3>
                    <div className="grid gap-3">
                      {solutionItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-lg p-3 glass hover:glass-strong transition-all duration-300 hover:shadow-soft hover:translate-x-1"
                        >
                          <div className="mt-1 p-2 rounded-lg glass-strong text-primary group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</div>
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
                  <div className="w-[700px] p-6 glass-card">
                    <h3 className="text-sm font-semibold bg-gradient-accent bg-clip-text text-transparent mb-4">Industries we serve</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {industryItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex flex-col items-start gap-2 rounded-lg p-3 glass hover:glass-strong transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                        >
                          <div className="p-2 rounded-lg glass-strong text-primary group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</div>
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
                  <div className="w-[500px] p-6 glass-card">
                    <h3 className="text-sm font-semibold bg-gradient-accent bg-clip-text text-transparent mb-4">Resources & Support</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {resourceItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="group flex flex-col items-start gap-2 rounded-lg p-3 glass hover:glass-strong transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                        >
                          <div className="p-2 rounded-lg glass-strong text-primary group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</div>
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
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = "https://platform.spotzyai.com"}
            >
              Sign In
            </Button>
            <Button 
              variant="hero" 
              size="default" 
              className="hover-lift animate-glow"
              onClick={() => window.location.href = "https://platform.spotzyai.com"}
            >
              Get Started
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <nav className="flex flex-col gap-6 mt-8 pb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Solution</h3>
                    <div className="flex flex-col gap-2">
                      {solutionItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Industries</h3>
                    <div className="flex flex-col gap-2">
                      {industryItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="font-medium">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href="/pricing"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all font-medium"
                    >
                      <DollarSign className="h-5 w-5 text-primary" />
                      Pricing
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Resources</h3>
                    <div className="flex flex-col gap-2">
                      {resourceItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="font-medium">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => {
                        window.location.href = "https://platform.spotzyai.com";
                        setIsOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      variant="hero" 
                      className="w-full"
                      onClick={() => {
                        window.location.href = "https://platform.spotzyai.com";
                        setIsOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
