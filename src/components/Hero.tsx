import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Mic } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import AIWaveform from "@/components/AIWaveform";
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
          {/* AI Microphone Icon with Glass Effect */}
          <div className="mb-8 inline-flex items-center justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent blur-2xl opacity-30 rounded-full" />
              <div className="relative glass-strong p-6 rounded-full">
                <Mic className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Build Intelligent <span className="bg-gradient-accent bg-clip-text text-transparent">Voice Assistants</span> in Minutes
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Create production-ready AI voice agents with enterprise-grade capabilities. 
            No code required. Deploy at scale.
          </p>

          {/* AI Waveform Animation */}
          <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.25s' }}>
            <AIWaveform />
          </div>

          <a href="https://platform.spotzyai.com" className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full mb-10 animate-scale-in hover-lift animate-glow cursor-pointer group" style={{
          animationDelay: '0.3s'
        }}>
            <span className="text-lg font-semibold bg-gradient-accent bg-clip-text text-transparent">Create Your First Assistant For FREE</span>
            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="hero" size="lg" className="group hover-lift animate-glow" asChild>
              <a href="https://platform.spotzyai.com">
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button variant="glass" size="lg" className="group hover-lift" asChild>
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