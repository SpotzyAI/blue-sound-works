import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      description: "Start automating calls with voice AI agents.",
      monthlyPrice: 19.99,
      yearlyPrice: 17.99,
      originalMonthlyPrice: null,
      features: [
        "75 included minutes, then $0.20 / extra minute",
        "2 assistants",
        "1 outbound campaign",
        "3 calls in parallel",
        "1 cloned voice",
        "1000 no-code automate platform runs monthly",
      ],
      popular: false,
    },
    {
      name: "Pro",
      icon: Zap,
      description: "For small businesses automating inbound and outbound calls.",
      monthlyPrice: 90,
      yearlyPrice: 81,
      originalMonthlyPrice: null,
      features: [
        "500 included minutes, then $18.00 / extra minute",
        "10 assistants",
        "10 outbound campaigns",
        "10 calls in parallel",
        "10 cloned voices",
        "15,000 no-code automate platform runs monthly",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      icon: Crown,
      description: "Ideal for agencies scaling customer engagement with automation.",
      monthlyPrice: 220,
      yearlyPrice: 198,
      originalMonthlyPrice: null,
      features: [
        "1500 included minutes, then $0.14 / extra minute",
        "Unlimited assistants",
        "Unlimited outbound campaigns",
        "1,000 calls in parallel",
        "Unlimited cloned voices",
        "Unlimited no-code automate platform runs monthly",
        "Whatsapp 1-1 support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to start your <span className="text-primary">AI call center</span>?
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Choose the best plan for your business needs and estimate your savings with AI call assistants.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Compare our plans and choose the best one for you.
          </p>
          <Button variant="hero" size="lg" className="group">
            Sign up now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Plans that scale with your business</h2>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  billingPeriod === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs">Save 10%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-8 relative hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? "border-primary border-2 scale-105 shadow-glow" : "hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-glow">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>

                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">
                          ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        {billingPeriod === "monthly" && plan.originalMonthlyPrice && (
                          <span className="text-xl text-muted-foreground line-through mb-1">
                            ${plan.originalMonthlyPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        per month {billingPeriod === "yearly" && "(billed yearly)"}
                      </div>
                    </>
                  ) : (
                    <div className="text-3xl font-bold">Custom</div>
                  )}
                </div>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className={`w-full mb-6 transition-all duration-300 ${
                    plan.popular ? "hover:shadow-glow hover:scale-105" : "hover:shadow-luxury hover:scale-105 hover:border-primary/50"
                  }`}
                  size="lg"
                  onClick={() => {
                    if (plan.monthlyPrice) {
                      window.location.href = "https://platform.spotzyai.com/plans";
                    }
                  }}
                >
                  {plan.monthlyPrice ? "Subscribe now" : "Contact sales"}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 animate-slide-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
