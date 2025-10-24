import { Phone, MessageSquare, Calendar, ShoppingCart } from "lucide-react";

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
              className="group relative p-8 glass-card rounded-2xl hover-lift animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient glow effect on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent opacity-0 blur-3xl group-hover:opacity-20 rounded-full -mr-20 -mt-20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 glass-strong rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                  <useCase.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{useCase.title}</h3>
                  <span className="px-3 py-1 glass text-primary text-sm font-semibold rounded-full">
                    {useCase.stats}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
