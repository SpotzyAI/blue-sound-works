import { Zap, Shield, Code, BarChart3, Globe, Headphones } from "lucide-react";

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
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Build <span className="text-primary">Powerful Voice AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade features that scale with your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
