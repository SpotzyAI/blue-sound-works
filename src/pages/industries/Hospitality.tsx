import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, MessageSquare, Clock, CheckCircle, XCircle, Settings, Bell, Sparkles, TrendingUp, Users, Star, Zap, Hotel, Globe, HeadphonesIcon, Coffee, ConciergeBell, Bed, TrendingDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Hospitality = () => {
  const features = [
    {
      icon: Bed,
      title: "Reservation Management",
      items: [
        "Real-time room availability checking",
        "Handle bookings, modifications & cancellations",
        "Manage table reservations for restaurants",
        "Event space scheduling",
        "Group booking coordination"
      ]
    },
    {
      icon: ConciergeBell,
      title: "Guest Services & Concierge",
      items: [
        "24/7 virtual concierge assistance",
        "Local recommendations & directions",
        "Activity and tour bookings",
        "Transportation arrangements",
        "Special request handling"
      ]
    },
    {
      icon: MessageSquare,
      title: "Automated Communications",
      items: [
        "Booking confirmations & reminders",
        "Check-in/check-out notifications",
        "Pre-arrival communications",
        "Post-stay follow-ups & feedback",
        "Multilingual guest messaging"
      ]
    },
    {
      icon: Coffee,
      title: "Dining & Room Service",
      items: [
        "Restaurant reservations",
        "Room service orders",
        "Catering inquiries",
        "Dietary requirements handling",
        "Menu information & recommendations"
      ]
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      items: [
        "Serve international guests in 10+ languages",
        "Natural conversation flow",
        "Cultural sensitivity",
        "Accent recognition",
        "Real-time translation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Operations & Analytics",
      items: [
        "Reduce staff workload by 80%",
        "Detailed call analytics",
        "Guest preference tracking",
        "Peak time optimization",
        "Revenue enhancement insights"
      ]
    }
  ];

  const useCases = [
    {
      title: "Room Booking Inquiry",
      conversation: [
        {
          speaker: "Guest",
          message: "Hi, do you have any rooms available for next weekend?"
        },
        {
          speaker: "AI Assistant",
          message: "Let me check our availability... Yes, we have several options for next weekend. Would you prefer a standard room, deluxe suite, or ocean view?"
        },
        {
          speaker: "Guest",
          message: "Ocean view sounds perfect for two nights"
        },
        {
          speaker: "AI Assistant",
          message: "Excellent choice! I have an ocean view suite available. May I have your name and contact information to complete the reservation?"
        }
      ]
    },
    {
      title: "Concierge Request",
      conversation: [
        {
          speaker: "Guest",
          message: "I need restaurant recommendations near the hotel"
        },
        {
          speaker: "AI Assistant",
          message: "I'd be happy to help! We have several excellent options. Are you looking for fine dining, casual atmosphere, or a specific cuisine type?"
        },
        {
          speaker: "Guest",
          message: "Fine dining for our anniversary"
        },
        {
          speaker: "AI Assistant",
          message: "Perfect! I recommend La Maison, 5 minutes away - they have romantic ambiance and excellent French cuisine. Would you like me to make a reservation for you?"
        }
      ]
    },
    {
      title: "Room Service Order",
      conversation: [
        {
          speaker: "Guest",
          message: "I'd like to order breakfast to my room"
        },
        {
          speaker: "AI Assistant",
          message: "Of course! Our breakfast menu includes continental, American, and healthy options. What would you prefer?"
        },
        {
          speaker: "Guest",
          message: "American breakfast with coffee, please"
        },
        {
          speaker: "AI Assistant",
          message: "Perfect! One American breakfast with coffee will be delivered to room 302 in approximately 25 minutes. Can I get you anything else?"
        }
      ]
    }
  ];

  const beforeAfter = [
    {
      before: "Guests waiting on hold during peak times",
      after: "Instant response, zero wait time",
      icon: Phone
    },
    {
      before: "Front desk overwhelmed with calls",
      after: "Staff focuses on in-person guests",
      icon: Users
    },
    {
      before: "Limited service hours",
      after: "24/7 guest assistance",
      icon: Clock
    },
    {
      before: "Language barriers with international guests",
      after: "Seamless multilingual communication",
      icon: Globe
    },
    {
      before: "Missed booking opportunities",
      after: "Every inquiry captured and converted",
      icon: TrendingUp
    },
    {
      before: "Manual reservation coordination",
      after: "Fully automated booking system",
      icon: Settings
    }
  ];

  const propertyTypes = [
    {
      icon: Hotel,
      title: "Hotels & Resorts",
      features: ["Room reservations", "Guest services", "Event bookings", "Spa appointments"]
    },
    {
      icon: Bed,
      title: "Boutique Hotels",
      features: ["Personalized service", "Special requests", "Concierge assistance", "Dining reservations"]
    },
    {
      icon: Coffee,
      title: "Restaurants & Cafes",
      features: ["Table reservations", "Takeout orders", "Catering inquiries", "Event hosting"]
    },
    {
      icon: ConciergeBell,
      title: "Resorts & Spas",
      features: ["Activity bookings", "Treatment scheduling", "Amenity reservations", "Guest services"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistants for Hospitality Industry - Hotels & Resorts | SpotzyAI</title>
        <meta name="description" content="Transform hospitality operations with AI voice automation for hotels, resorts, and restaurants. Handle bookings, guest services, and inquiries 24/7 with intelligent AI assistants." />
        <link rel="canonical" href="https://spotzyai.lovable.app/industries/hospitality" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm text-primary font-medium">🏨 Complete Hospitality Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Elevate Guest Experience with <span className="text-primary">AI Voice Assistants</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl">
                24/7 intelligent voice automation for hotels, resorts, and restaurants - delivering exceptional hospitality at scale
              </p>

              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                Handle reservations, guest services, and inquiries seamlessly while your team focuses on creating memorable experiences.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingDown className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Reduced operational costs</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">24/7 guest assistance</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">36 languages supported</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Real-time availability</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Reduce staff workload 80%</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Enhanced guest satisfaction</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="/pricing/hospitality-pricing">
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Perfect For Every Hospitality Business</h2>
                <p className="text-xl text-muted-foreground">
                  Tailored solutions for hotels, resorts, restaurants, and more
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {propertyTypes.map((type, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow transition-all duration-300">
                    <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary w-fit">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Complete Feature Set */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Comprehensive Feature Set</h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need to deliver exceptional hospitality experiences
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Transform Your Operations</h2>
                <p className="text-xl text-muted-foreground">
                  See the dramatic improvement AI voice automation brings to hospitality
                </p>
              </div>

              <div className="space-y-6">
                {beforeAfter.map((item, idx) => (
                  <div key={idx} className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl bg-card border border-border shadow-soft">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Without AI</p>
                        <p className="font-semibold">{item.before}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">With SpotzyAI</p>
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
                  Real conversation examples showcasing natural, intelligent interactions
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
                            msg.speaker === "Guest"
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

        {/* Partnership Model */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Complete Turnkey Solution</h2>
                <p className="text-xl text-muted-foreground">
                  We handle everything - you focus on your guests
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-gradient-hero text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {[
                      "Complete project setup and configuration",
                      "Custom AI assistant trained for your property",
                      "Seamless PMS integration support",
                      "Ongoing maintenance and updates",
                      "Technical support and training",
                      "Analytics and performance reports",
                      "Dedicated account manager"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      "Zero missed booking opportunities",
                      "Consistent guest experience",
                      "Reduced operational costs",
                      "Multilingual guest support",
                      "Scalable across all properties",
                      "Data-driven insights"
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

        {/* Final CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Hospitality Operations?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join leading hotels and resorts delivering exceptional guest experiences with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="group" asChild>
                  <a href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="/pricing/hospitality-pricing">
                    View Pricing Plans
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Hospitality;
