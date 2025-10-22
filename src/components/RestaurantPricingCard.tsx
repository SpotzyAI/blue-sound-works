import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

const RestaurantPricingCard = () => {
  const setupCosts = [
    { item: "Project Configuration & Setup", cost: "€2,500" },
    { item: "AI Voice Assistant Training", cost: "€1,500" },
    { item: "Reservation Dashboard", cost: "FREE", highlight: true },
    { item: "System Integration", cost: "€800" },
    { item: "Testing & Quality Assurance", cost: "€500" }
  ];

  const plans = [
    {
      name: "LITE",
      icon: Sparkles,
      monthlyPrice: 290,
      description: "Perfect for small restaurants",
      recommended: "20-40 covers",
      popular: false,
      features: [
        "Up to 800 calls/month",
        "1 AI voice assistant",
        "60 confirmation messages",
        "60 reminder messages",
        "Real-time availability checking",
        "Free reservation dashboard",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "GROUP",
      icon: Zap,
      monthlyPrice: 590,
      description: "Ideal for restaurant groups",
      recommended: "2-5 locations",
      popular: true,
      features: [
        "Up to 2,000 calls/month",
        "2 AI voice assistants",
        "120 confirmation messages",
        "120 reminder messages",
        "30 follow-up messages",
        "Real-time availability checking",
        "Free reservation dashboard",
        "Advanced analytics",
        "Priority support",
        "Multi-location support"
      ]
    },
    {
      name: "ENTERPRISE",
      icon: Crown,
      monthlyPrice: 990,
      description: "Built for large chains",
      recommended: "5+ locations",
      popular: false,
      features: [
        "Up to 5,000 calls/month",
        "5 AI voice assistants",
        "200 confirmation messages",
        "200 reminder messages",
        "100 follow-up messages",
        "50 birthday reminders",
        "Real-time availability checking",
        "Free reservation dashboard",
        "Premium analytics & reporting",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
        "White-label options"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              One-time setup cost + monthly partnership fee
            </p>
          </div>

          {/* Setup Costs Table */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">One-Time Setup Costs</h3>
              <Card className="overflow-hidden border-2">
                <div className="divide-y divide-border">
                  {setupCosts.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between items-center p-4 ${
                        item.highlight
                          ? "bg-primary/10 border-l-4 border-l-primary"
                          : "bg-card"
                      }`}
                    >
                      <span className={item.highlight ? "font-bold" : ""}>{item.item}</span>
                      <span
                        className={`text-lg font-bold ${
                          item.highlight ? "text-primary" : ""
                        }`}
                      >
                        {item.cost}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-4 bg-muted font-bold text-lg">
                    <span>Total Setup Investment</span>
                    <span>€5,300</span>
                  </div>
                </div>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Dashboard value (€2,000) included FREE with all monthly plans
              </p>
            </div>
          </div>

          {/* Monthly Pricing Plans */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Monthly Partnership Plans</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`p-8 relative transition-all duration-300 ${
                    plan.popular
                      ? "border-primary border-2 shadow-glow scale-105"
                      : "hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-soft">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <plan.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{plan.name}</h4>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-2">{plan.description}</p>
                  <p className="text-sm text-primary font-semibold mb-6">
                    Best for: {plan.recommended}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">
                        €{plan.monthlyPrice}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full mb-6 group"
                    size="lg"
                  >
                    Contact Us for Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Note */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 bg-muted/50 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Extra SMS Automations</h4>
                  <p className="text-sm text-muted-foreground">
                    Need more messages beyond your package limits? Add extra SMS automations for only{" "}
                    <span className="font-bold text-foreground">€20/month per 100 messages</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantPricingCard;
