import { Zap, Shield, Code, BarChart3, Globe, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-low latency responses for natural conversations. Deploy AI agents that respond in milliseconds.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance. SOC 2 Type II certified with full data sovereignty.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "RESTful APIs, SDKs in 8 languages, and comprehensive documentation for seamless integration.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time monitoring, conversation insights, and performance metrics in one dashboard.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 36 languages with native accent recognition and cultural adaptation.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated technical support team available around the clock for enterprise customers.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Build <span className="text-primary">Powerful Voice AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade features that scale with your business
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="group p-8 glass-card rounded-2xl relative overflow-hidden"
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.2)"
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-glass rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 glass-strong rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px hsl(220 88% 45% / 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
