import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, MessageSquare, Clock, CheckCircle, XCircle, Settings, Bell, Gift, TrendingUp, Users, Star, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RestaurantPricingCard from "@/components/RestaurantPricingCard";
import FeatureShowcase from "@/components/FeatureShowcase";

const Restaurant = () => {
  const features = [
    {
      icon: Calendar,
      title: "Reservation Management",
      items: [
        "Make new reservations with real-time availability",
        "Cancel existing reservations instantly",
        "Modify previous bookings",
        "Handle special requests & dietary requirements"
      ]
    },
    {
      icon: MessageSquare,
      title: "Automated Communications",
      items: [
        "Reservation confirmations",
        "Appointment reminders",
        "Thank you follow-ups",
        "Birthday reminders",
        "Custom automated messages"
      ],
      note: "Extra SMS automations beyond package = €20/month per 100 messages"
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      items: [
        "Provide restaurant information",
        "Answer frequently asked questions",
        "Reduce staff workload by 70%",
        "24/7 availability"
      ]
    }
  ];

  const useCases = [
    {
      title: "Peak Hours Booking",
      conversation: [
        { speaker: "Customer", message: "Hi, I need a table for 4 tonight at 7pm" },
        { speaker: "AI", message: "Let me check our real-time availability... I have 7pm or 7:30pm available. Which works better for you?" }
      ]
    },
    {
      title: "Modification Request",
      conversation: [
        { speaker: "Customer", message: "I need to change my reservation from 6 to 8 people" },
        { speaker: "AI", message: "I've verified availability and updated your reservation for 8 guests. You'll receive a confirmation SMS shortly!" }
      ]
    },
    {
      title: "Cancellation & Rebooking",
      conversation: [
        { speaker: "Customer", message: "I need to cancel my 8pm reservation" },
        { speaker: "AI", message: "Your reservation has been cancelled. The slot is now available for other guests. Would you like to rebook for another time?" }
      ]
    }
  ];

  const beforeAfter = [
    { before: "Missed calls during busy hours", after: "Never miss a reservation", icon: Phone },
    { before: "Double bookings and errors", after: "Zero booking errors", icon: Calendar },
    { before: "Staff overwhelmed with phone calls", after: "Staff focuses on guests", icon: Users },
    { before: "No availability info during calls", after: "Instant availability confirmation", icon: Clock },
    { before: "Manual reservation management", after: "Fully automated system", icon: Settings }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm text-primary font-medium">🍽️ Specialized Restaurant Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionary Real-Time <span className="text-primary">Reservation System</span> with AI Voice Assistants
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl">
              The only AI solution that checks table availability <span className="font-bold text-foreground">during the call</span> - not after
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Full project setup, maintenance, and a free reservation dashboard - all included in our B2B partnership model.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Real-time availability checking</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Fully automated management</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Free reservation dashboard</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Full project setup & maintenance</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Automated SMS confirmations</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Reminders & follow-ups</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group" asChild>
              <a href="/contact">
                Contact Us for Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Revolutionary Feature Spotlight */}
      <FeatureShowcase />

      {/* Complete Feature Set */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Complete Feature Set</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for automated reservation management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary w-fit">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.note && (
                    <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Note:</span> {feature.note}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Contract Model */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">B2B Partnership Model</h2>
              <p className="text-xl text-muted-foreground">
                We build, you benefit - Complete turnkey solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-hero text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {[
                    "Complete project setup and configuration",
                    "Custom AI voice assistant trained for your restaurant",
                    "Beautiful reservation dashboard (FREE - valued at €2,000)",
                    "Ongoing system maintenance",
                    "Regular updates and improvements",
                    "Technical support",
                    "Monthly B2B contract with full project ownership"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="text-2xl font-bold mb-6">Free Reservation Dashboard</h3>
                <div className="mb-6 p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-3xl font-bold text-primary mb-2">€2,000 Value</p>
                  <p className="text-muted-foreground">Included FREE with all plans</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Real-time reservation view",
                    "Table management",
                    "Customer database",
                    "Analytics & insights",
                    "Mobile-friendly design",
                    "Easy-to-use interface"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <RestaurantPricingCard />

      {/* Before/After Comparison */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why This Matters</h2>
              <p className="text-xl text-muted-foreground">
                Transform your restaurant operations completely
              </p>
            </div>

            <div className="space-y-6">
              {beforeAfter.map((item, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Before SpotzyAI</p>
                      <p className="font-semibold">{item.before}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">After SpotzyAI</p>
                      <p className="font-semibold">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Conversation Examples */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-xl text-muted-foreground">
                Real conversation examples showing the power of real-time availability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    {useCase.title}
                  </h3>
                  <div className="space-y-4">
                    {useCase.conversation.map((msg, msgIdx) => (
                      <div
                        key={msgIdx}
                        className={`p-4 rounded-xl ${
                          msg.speaker === "Customer"
                            ? "bg-muted"
                            : "bg-primary/10 border border-primary/20"
                        }`}
                      >
                        <p className="text-xs font-semibold mb-2 text-muted-foreground">
                          {msg.speaker}
                        </p>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to revolutionize your reservation system?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Schedule a demo and see the real-time availability system in action
            </p>
            <Button variant="secondary" size="lg" className="group" asChild>
              <a href="/contact">
                Contact Us for Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Restaurant;
