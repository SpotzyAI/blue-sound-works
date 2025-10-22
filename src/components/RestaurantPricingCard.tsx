import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, ArrowRight, Sparkles, Zap, Crown, Settings } from "lucide-react";

const RestaurantPricingCard = () => {
  const setupCosts = [
    { 
      plan: "LITE", 
      cost: "€300", 
      note: "€100 per additional language",
      highlight: "Free Training Included"
    },
    { 
      plan: "GROUP", 
      cost: "€200", 
      note: "per assistant | €150 per additional language",
      highlight: "Free Training Included"
    }
  ];

  const plans = [
    {
      name: "LITE",
      icon: Sparkles,
      monthlyPrice: 199,
      priceNote: "+ VAT / month",
      description: "Perfect for small restaurants",
      recommended: "For 1 Assistant",
      popular: false,
      setupCost: "€300 + VAT (one-time)",
      additionalCost: "€0.30 / minute",
      features: [
        "1 Assistant",
        "150 free minutes",
        "10 concurrent calls",
        "1 SMS Automation",
        "24/7 Availability",
        "2 Languages Included",
        "Real-Time Availability",
        "Free Booking System",
        "Free Training & Customisation"
      ]
    },
    {
      name: "GROUP",
      icon: Zap,
      monthlyPrice: 159,
      priceNote: "+ VAT / month per assistant",
      description: "Ideal for restaurant groups",
      recommended: "For 5-10 Assistants",
      popular: true,
      setupCost: "€200 + VAT per assistant (one-time)",
      additionalCost: "€0.25 / minute",
      features: [
        "5-10 Assistants",
        "150 free minutes per assistant",
        "15 concurrent calls per assistant",
        "2 SMS Automations",
        "24/7 Availability",
        "3 Languages Included",
        "Real-Time Availability",
        "Priority Support",
        "Free Booking System",
        "Free Training & Customisation"
      ]
    },
    {
      name: "ENTERPRISE",
      icon: Crown,
      monthlyPrice: "Custom",
      priceNote: "+ VAT",
      description: "Built for large operations",
      recommended: "For 11+ Assistants",
      popular: false,
      setupCost: "Contact us for custom pricing",
      additionalCost: "Contact us",
      features: [
        "11+ Assistants",
        "Tailored pricing based on call volume and features",
        "Volume discounts available",
        "Advanced analytics & reporting",
        "SLA & Dedicated Manager",
        "Contact us for a custom offer"
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

          {/* Monthly Pricing Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Monthly Partnership Plans</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`p-8 relative transition-all duration-300 ${
                    plan.popular
                      ? "border-primary bg-primary text-white border-2 shadow-glow scale-105"
                      : "hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-6 py-2 rounded-full text-sm font-bold shadow-soft">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}>
                      <plan.icon className={`h-7 w-7 ${plan.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <h4 className={`text-2xl font-bold ${plan.popular ? "text-white" : ""}`}>{plan.name}</h4>
                    </div>
                  </div>

                  <p className={`mb-6 ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-2">
                      <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-primary"}`}>
                        €{plan.monthlyPrice}
                      </span>
                    </div>
                    <div className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>{plan.priceNote}</div>
                  </div>

                  <div className={`mb-6 p-4 rounded-xl border ${plan.popular ? "bg-white/10 border-white/20" : "bg-primary/5 border-primary/20"}`}>
                    <p className={`text-xs mb-1 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>Additional Usage</p>
                    <p className={`text-sm font-semibold ${plan.popular ? "text-white" : "text-primary"}`}>{plan.additionalCost}</p>
                  </div>

                  <Button
                    variant={plan.popular ? "secondary" : "hero"}
                    className={`w-full mb-6 group ${plan.popular ? "bg-white text-primary hover:bg-white/90" : ""}`}
                    size="lg"
                  >
                    Contact Us for Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-primary"}`} />
                        <span className={`text-sm ${plan.popular ? "text-white" : ""}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Setup Costs */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <Settings className="h-6 w-6 text-muted-foreground" />
                Setup Costs
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {setupCosts.map((item, idx) => (
                  <Card key={idx} className="p-6 border-2">
                    <h4 className="text-2xl font-bold mb-4">{item.plan}</h4>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-primary mb-1">
                        {item.cost} <span className="text-sm text-muted-foreground">+ VAT</span>
                      </p>
                      <p className="text-sm text-muted-foreground">(one-time)</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.note}</p>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm font-semibold text-primary">{item.highlight}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-muted/50 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Free Booking System</h4>
                  <p className="text-sm text-muted-foreground">
                    All plans include our professional reservation dashboard at no extra cost - manage bookings, track customers, and view analytics.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-muted/50 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Free Training Included</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete customization and training for your AI assistant included with setup - no hidden costs.
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
