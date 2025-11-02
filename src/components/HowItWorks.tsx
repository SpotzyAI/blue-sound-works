import { Settings, Mic, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      title: "Configure Your Agent",
      description: "Use our intuitive no-code dashboard to set up your AI voice assistant. Define conversation flows, integrate with your systems, and customize responses to match your brand voice.",
      step: "01"
    },
    {
      icon: Mic,
      title: "Train & Test",
      description: "Test your voice agent with sample calls. Our AI learns from every interaction, improving accuracy and conversation quality. Fine-tune responses until you're satisfied.",
      step: "02"
    },
    {
      icon: Rocket,
      title: "Deploy & Scale",
      description: "Go live in minutes. Your AI voice assistant starts handling calls immediately, scaling automatically to handle any volume. Monitor performance and optimize in real-time.",
      step: "03"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your AI voice assistant up and running in three simple steps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-accent opacity-20" style={{ width: "calc(100% - 120px)", left: "60px" }} />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="glass-card p-8 rounded-2xl relative z-10 h-full">
                  {/* Step number */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-lg shadow-glow">
                    {step.step}
                  </div>
                  
                  <div className="mt-8">
                    <motion.div 
                      className="w-14 h-14 glass-strong rounded-xl flex items-center justify-center mb-6 mx-auto"
                      whileHover={{ scale: 1.1, boxShadow: "0 0 30px hsl(220 88% 45% / 0.4)" }}
                    >
                      <step.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to transform your business communications?
          </p>
          <a 
            href="https://platform.spotzyai.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-hero text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Start Building Free
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
