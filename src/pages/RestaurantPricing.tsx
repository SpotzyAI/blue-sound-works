import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown, ArrowRight, Hotel, UtensilsCrossed, Settings } from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const RestaurantPricing = () => {
  const plans = [
    {
      name: "LITE",
      icon: Sparkles,
      description: "Perfect for small hotels & restaurants",
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
      description: "Ideal for hotel chains & restaurant groups",
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
      description: "Built for large hospitality operations",
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
        <title>Hospitality AI Solutions Pricing - Hotels & Restaurants | SpotzyAI</title>
        <meta name="description" content="Flexible pricing plans for hospitality AI voice assistants. Perfect for hotels, restaurants, and hospitality groups. From single locations to enterprise chains." />
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
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Hotel className="h-12 w-12 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <UtensilsCrossed className="h-12 w-12 text-primary" />
                </motion.div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hospitality AI Solutions
                <span className="block bg-gradient-accent bg-clip-text text-transparent mt-2">
                  We Build It For You
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive AI voice assistant solutions for hotels and restaurants. 
                From setup to training, we handle everything so you can focus on your guests.
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

            {/* Setup Costs Section */}
            <motion.section 
              className="container mx-auto px-6 mt-20 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold">Setup Costs</h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* LITE Setup */}
                  <Card className="glass-card p-8">
                    <h3 className="text-2xl font-bold mb-6">LITE</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">€300 <span className="text-lg text-muted-foreground">+ VAT</span></div>
                        <p className="text-muted-foreground">(one-time)</p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground">€100 per additional language</p>
                      </div>
                      <div className="glass-card p-4 rounded-lg bg-primary/5 mt-6">
                        <p className="font-semibold text-primary">Free Training Included</p>
                      </div>
                    </div>
                  </Card>

                  {/* GROUP Setup */}
                  <Card className="glass-card p-8">
                    <h3 className="text-2xl font-bold mb-6">GROUP</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">€200 <span className="text-lg text-muted-foreground">+ VAT</span></div>
                        <p className="text-muted-foreground">(one-time)</p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground">per assistant | €150 per additional language</p>
                      </div>
                      <div className="glass-card p-4 rounded-lg bg-primary/5 mt-6">
                        <p className="font-semibold text-primary">Free Training Included</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.section>

            {/* Additional Info */}
            <motion.div 
              className="max-w-4xl mx-auto mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">What's Included in Every Plan</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Free Booking System Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly connect with your existing reservation and PMS systems
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Complete Training & Customisation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We train your AI assistant to match your brand's unique personality and service standards
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Real-Time Availability Updates
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Keep guests informed with live room and table availability across all properties
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      24/7 Support & Monitoring
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock assistance to ensure smooth operations and guest satisfaction
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Multi-Language Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Serve international guests in their preferred language with natural conversations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      SMS Automations
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Automated confirmations, reminders, and follow-ups to reduce no-shows
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
