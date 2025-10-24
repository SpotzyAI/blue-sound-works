import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface IndustryHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  benefits: string[];
  image?: string;
}

const IndustryHero = ({ badge, title, subtitle, benefits, image }: IndustryHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background">
        <div className="absolute inset-0 bg-gradient-glass" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 glass rounded-full animate-fade-in">
            <span className="text-sm text-primary font-medium">{badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-lg glass px-4 py-2 rounded-full hover-lift">
                <div className="w-2 h-2 rounded-full bg-gradient-accent animate-pulse" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="group animate-glow hover-lift" asChild>
            <a href="https://platform.spotzyai.com">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
