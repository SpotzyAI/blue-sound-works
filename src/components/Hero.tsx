import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fade-in hover:bg-primary/20 transition-all duration-300">
            <span className="text-sm text-primary font-medium">🚀 Next Generation Voice AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Build Intelligent <span className="text-primary bg-clip-text">Voice Assistants</span> in Minutes
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Create production-ready AI voice agents with enterprise-grade capabilities. 
            No code required. Deploy at scale.
          </p>

          <a 
            href="https://platform.spotzyai.com" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-primary rounded-full border border-primary/30 mb-10 animate-scale-in shadow-luxury hover:scale-105 transition-transform duration-300 cursor-pointer" 
            style={{
              animationDelay: '0.3s'
            }}
          >
            <span className="text-lg font-semibold" style={{ color: '#1434A4' }}>Create Your First Assistant For FREE</span>
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="hero" size="lg" className="group transition-all duration-300 hover:scale-105 hover:shadow-glow" asChild>
              <a href="https://platform.spotzyai.com">
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group transition-all duration-300 hover:scale-105 hover:shadow-luxury hover:border-primary/50" asChild>
              <a href="/contact">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>;
};
export default Hero;