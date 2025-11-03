import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const RestaurantPricing = () => {
  const plans = [
    {
      name: "LITE",
      icon: Sparkles,
      description: "Perfect for small restaurants",
      price: "€199",
      period: "+ VAT / month",
      additionalUsage: "€0.30 / minute",
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
      ],
      cta: "Contact Us for Demo",
      popular: false
    },
    {
      name: "GROUP",
      icon: Zap,
      description: "Ideal for restaurant groups",
      price: "€159",
      period: "+ VAT / month per assistant",
      additionalUsage: "€0.25 / minute",
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
      ],
      cta: "Contact Us for Demo",
      popular: true
    },
    {
      name: "ENTERPRISE",
      icon: Crown,
      description: "Built for large operations",
      price: "€Custom",
      period: "+ VAT",
      additionalUsage: "Contact us",
      features: [
        "11+ Assistants",
        "Tailored pricing based on call volume and features",
        "Volume discounts available",
        "Advanced analytics & reporting",
        "SLA & Dedicated Manager",
        "Contact us for a custom offer"
      ],
      cta: "Contact Us for Demo",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Restaurant AI Solutions Pricing - SpotzyAI</title>
        <meta name="description" content="Flexible pricing plans for restaurant AI voice assistants. From single locations to enterprise chains, we have a solution for you." />
        <link rel="canonical" href="https://spotzyai.lovable.app/pricing/restaurant-solutions" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="container mx-auto px-6 mb-16">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Restaurant AI Solutions
                <span className="block bg-gradient-accent bg-clip-text text-transparent mt-2">
                  We Build It For You
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive AI voice assistant solutions tailored for restaurants. 
                From setup to training, we handle everything.
              </p>
            </motion.div>
          </section>

          {/* Pricing Plans */}
          <section className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`relative p-8 h-full flex flex-col ${
                      plan.popular 
                        ? 'border-primary shadow-glow bg-gradient-to-br from-primary/5 to-primary/10' 
                        : 'glass-card'
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          MOST POPULAR
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </div>

                      <div className="mb-6">
                        <div className="text-4xl font-bold mb-1">{plan.price}</div>
                        <div className="text-sm text-muted-foreground mb-4">{plan.period}</div>
                        <div className="glass-card p-3 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Additional Usage</div>
                          <div className="text-lg font-semibold text-primary">{plan.additionalUsage}</div>
                        </div>
                      </div>

                      <Button 
                        size="lg" 
                        variant={plan.popular ? "hero" : "glass"}
                        className="w-full mb-6 group"
                        asChild
                      >
                        <a href="/contact">
                          {plan.cta}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>

                      <div className="space-y-3 flex-grow">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div 
              className="max-w-4xl mx-auto mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Free Booking System Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly connect with your existing reservation system
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Complete Training & Customisation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We train your AI assistant to match your restaurant's unique style
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Real-Time Availability Updates
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Keep your customers informed with live table availability
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      24/7 Support & Monitoring
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock assistance to ensure smooth operations
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RestaurantPricing;
