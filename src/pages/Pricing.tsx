import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [callsPerMonth, setCallsPerMonth] = useState([3200]);
  const [avgCallLength, setAvgCallLength] = useState([3]);
  const [humanWage, setHumanWage] = useState([25]);

  // Calculate costs
  const totalMinutes = callsPerMonth[0] * avgCallLength[0];
  const humanCost = Math.round((totalMinutes / 60) * humanWage[0]);
  const aiCost = Math.round(totalMinutes * 0.27); // $0.27 per minute estimate
  const monthlySavings = humanCost - aiCost;

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

      {/* Cost Calculator Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Calculate your savings with <span className="text-primary">AI voice assistants</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover how much you can save by automating calls with AI compared to hiring human assistants. 
                Adjust the sliders to match your needs and see real-time results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Instant 24/7 availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Scale to thousands of parallel calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">No onboarding or training costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Pay only for active calls duration</span>
                </div>
              </div>
            </div>

            {/* Right Side - Calculator */}
            <Card className="p-8 bg-card border-2">
              <h3 className="text-2xl font-bold mb-6">Cost calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Calls per month</label>
                    <span className="text-primary font-semibold">{callsPerMonth[0]}</span>
                  </div>
                  <Slider
                    value={callsPerMonth}
                    onValueChange={setCallsPerMonth}
                    min={100}
                    max={10000}
                    step={100}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Average call length (min)</label>
                    <span className="text-primary font-semibold">{avgCallLength[0]}</span>
                  </div>
                  <Slider
                    value={avgCallLength}
                    onValueChange={setAvgCallLength}
                    min={1}
                    max={15}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Human agent hourly wage ($)</label>
                    <span className="text-primary font-semibold">{humanWage[0]}</span>
                  </div>
                  <Slider
                    value={humanWage}
                    onValueChange={setHumanWage}
                    min={10}
                    max={50}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div className="pt-6 border-t grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Estimated AI cost</div>
                    <div className="text-2xl font-bold text-primary">${aiCost.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-destructive/10">
                    <div className="text-sm text-muted-foreground mb-1">Estimated human cost</div>
                    <div className="text-2xl font-bold text-destructive">${humanCost.toLocaleString()}</div>
                  </div>
                </div>

                <div className="text-center p-6 rounded-lg bg-gradient-hero">
                  <div className="text-sm text-primary-foreground/80 mb-1">Monthly savings</div>
                  <div className="text-4xl font-bold text-primary-foreground">${monthlySavings.toLocaleString()}</div>
                </div>
              </div>
            </Card>
          </div>
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
                className={`p-8 relative hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "border-primary border-2 scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
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
                  className="w-full mb-6"
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
                    <div key={idx} className="flex items-start gap-3">
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
