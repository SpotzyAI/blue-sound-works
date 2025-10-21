import { Phone, MessageSquare, Calendar, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Phone,
    title: "Customer Support",
    description: "Automate customer inquiries with intelligent voice assistants that understand context and provide accurate responses.",
    stats: "90% Resolution Rate",
  },
  {
    icon: MessageSquare,
    title: "Sales & Lead Qualification",
    description: "Engage prospects 24/7, qualify leads, and schedule meetings automatically with human-like conversations.",
    stats: "3x More Conversions",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Let AI handle booking, rescheduling, and reminders across time zones with seamless calendar integration.",
    stats: "85% Time Saved",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Assistant",
    description: "Guide customers through purchases, answer product questions, and handle order tracking with voice.",
    stats: "40% Higher AOV",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your <span className="text-primary">Business Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy AI voice agents across your entire customer journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {useCase.stats}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {useCase.description}
                </p>
                
                <Button variant="ghost" className="group/btn text-primary hover:text-primary-foreground hover:bg-primary">
                  Learn More
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Explore All Use Cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
