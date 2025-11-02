import { Phone, MessageSquare, Calendar, ShoppingBag, HeadphonesIcon, Briefcase, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Real-time reservation management with AI voice agents",
    link: "/industries/restaurant",
  },
  {
    icon: HeadphonesIcon,
    title: "Call center",
    description: "AI voice agents for call center phone calls",
    link: "/industries/call-center",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Improve e-commerce customer service with AI voice",
    link: "/industries/ecommerce",
  },
  {
    icon: Briefcase,
    title: "Services",
    description: "AI voice agents for service industry phone calls",
    link: "/industries/services",
  },
  {
    icon: Phone,
    title: "Healthcare",
    description: "Automating phone calls in the medical field",
    link: "/industries/healthcare",
  },
  {
    icon: MessageSquare,
    title: "Hospitality",
    description: "AI voice automation for hotels, restaurants & resorts",
    link: "/industries/hospitality",
  },
  {
    icon: Calendar,
    title: "Real estate",
    description: "Automate real estate phone calls with AI voice agents",
    link: "/industries/real-estate",
  },
];

const UseCases = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="use-cases" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Subtle glass overlay */}
      <div className="absolute inset-0 bg-gradient-glass opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored AI voice assistants for every sector
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={useCase.link}
                className="group block h-full"
              >
                <motion.div 
                  className="p-8 glass-card rounded-2xl h-full relative overflow-hidden"
                  whileHover={{ 
                    y: -6,
                    boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25)"
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
                        boxShadow: "0 0 30px hsl(220 88% 45% / 0.4)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <useCase.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{useCase.description}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
