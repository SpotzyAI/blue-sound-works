import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Mic } from "lucide-react";
// Force re-import of updated background image
import heroBackground from "@/assets/hero-background.jpg";
import AIWaveform from "@/components/AIWaveform";
import { motion } from "framer-motion";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay - Animated */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={{
          backgroundPosition: ['center', '60% center', 'center'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* AI Microphone Icon with Glass Effect */}
          <motion.div 
            className="mb-8 inline-flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-accent blur-2xl opacity-30 rounded-full" />
              <div className="relative glass-strong p-6 rounded-full">
                <Mic className="h-12 w-12 text-primary" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Build Intelligent <span className="bg-gradient-accent bg-clip-text text-transparent">Voice</span> <span className="bg-gradient-accent bg-clip-text text-transparent">Assistants</span> in Minutes
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            Create production-ready AI voice agents with enterprise-grade capabilities. 
            No code required. Deploy at scale.
          </motion.p>

          {/* AI Waveform Animation */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          >
            <AIWaveform />
          </motion.div>

          <motion.a 
            href="https://platform.spotzyai.com" 
            className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full mb-10 cursor-pointer group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            whileHover={{ 
              y: -4, 
              boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25), 0 0 40px hsl(220 88% 45% / 0.3)"
            }}
          >
            <span className="text-lg font-semibold bg-gradient-accent bg-clip-text text-transparent">Create Your First Assistant For FREE</span>
            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          >
            <motion.div whileHover={{ y: -4, boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25)" }}>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://platform.spotzyai.com">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -4 }}>
              <Button variant="glass" size="lg" className="group" asChild>
                <a href="/contact">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>;
};
export default Hero;