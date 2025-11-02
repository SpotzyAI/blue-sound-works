import { Shield, Zap, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

const AboutSpotzy = () => {
  const stats = [
    { icon: Globe, value: "36", label: "Languages Supported" },
    { icon: Zap, value: "1000+", label: "Concurrent Calls" },
    { icon: Shield, value: "100%", label: "Enterprise Security" },
    { icon: Award, value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glass opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">SpotzyAI</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            SpotzyAI is a revolutionary no-code AI voice assistant platform founded to transform how businesses handle phone communications. We enable companies of all sizes to build, deploy, and manage intelligent voice agents that handle calls with human-like conversation quality.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-2xl text-center"
              whileHover={{ y: -8, boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25)" }}
            >
              <div className="w-14 h-14 glass-strong rounded-xl flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              We believe every business deserves access to enterprise-grade voice AI technology without the complexity of coding or massive upfront investments. Our platform democratizes AI voice assistance, making it accessible, affordable, and incredibly powerful.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">Key Differentiators</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Real-Time Availability:</strong> The only platform offering real-time table availability checking during restaurant reservation calls</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>No-Code Platform:</strong> Build sophisticated voice agents without writing a single line of code</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>36 Languages:</strong> Native support for 36 languages with accent recognition and cultural adaptation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Enterprise Scale:</strong> Handle 1000+ simultaneous calls on our Ultimate plan</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSpotzy;
