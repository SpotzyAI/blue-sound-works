import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, X, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Comparison = () => {
  const comparisons = [
    {
      category: "Deployment Speed",
      traditional: "Weeks to months of setup and configuration",
      spotzy: "Deploy in minutes with no-code platform",
      advantage: "spotzy"
    },
    {
      category: "Technical Skills Required",
      traditional: "Requires developers and AI specialists",
      spotzy: "Zero technical knowledge needed",
      advantage: "spotzy"
    },
    {
      category: "Cost Structure",
      traditional: "High upfront costs ($50,000+) + monthly fees",
      spotzy: "Pay-as-you-go starting at $19.99/month",
      advantage: "spotzy"
    },
    {
      category: "Language Support",
      traditional: "Limited languages (typically 5-10)",
      spotzy: "36 languages with native accents",
      advantage: "spotzy"
    },
    {
      category: "Real-Time Availability",
      traditional: "Check availability after call ends",
      spotzy: "Instant real-time availability during call",
      advantage: "spotzy"
    },
    {
      category: "Concurrent Call Capacity",
      traditional: "Limited by hardware (typically 50-100)",
      spotzy: "1000+ concurrent calls on Ultimate plan",
      advantage: "spotzy"
    },
    {
      category: "Customization",
      traditional: "Requires custom development for changes",
      spotzy: "Visual editor for instant customization",
      advantage: "spotzy"
    },
    {
      category: "Integration Complexity",
      traditional: "Complex API setup requiring developers",
      spotzy: "Pre-built integrations with 1-click setup",
      advantage: "spotzy"
    },
    {
      category: "Maintenance",
      traditional: "Ongoing technical maintenance required",
      spotzy: "Fully managed - no maintenance needed",
      advantage: "spotzy"
    },
    {
      category: "Scalability",
      traditional: "Manual scaling with additional costs",
      spotzy: "Auto-scaling included at no extra cost",
      advantage: "spotzy"
    },
    {
      category: "Training Time",
      traditional: "Weeks of training for staff and system",
      spotzy: "Pre-trained AI ready to use immediately",
      advantage: "spotzy"
    },
    {
      category: "Analytics & Insights",
      traditional: "Basic call logs and reports",
      spotzy: "Comprehensive analytics with AI insights",
      advantage: "spotzy"
    }
  ];

  return (
    <>
      <Helmet>
        <title>SpotzyAI vs Traditional Voice Systems | AI Voice Assistant Comparison</title>
        <meta name="description" content="Compare SpotzyAI with traditional voice systems. See why businesses choose our no-code AI voice assistant platform with 36 languages, real-time availability, and instant deployment." />
        <link rel="canonical" href="https://spotzyai.lovable.app/comparison" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background">
              <div className="absolute inset-0 bg-gradient-glass" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
              <motion.div 
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  SpotzyAI vs <span className="text-primary">Traditional Systems</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  See how SpotzyAI revolutionizes voice automation compared to traditional phone systems and outdated AI solutions
                </p>
              </motion.div>
            </div>
          </section>

          {/* Quick Comparison */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Traditional */}
                  <motion.div 
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Traditional Approach</h2>
                    <div className="space-y-4">
                      {[
                        "High upfront investment ($50k+)",
                        "Requires technical team",
                        "Weeks/months to deploy",
                        "Limited to business hours",
                        "Manual scaling needed",
                        "Complex maintenance",
                        "Limited languages",
                        "Rigid workflows"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* SpotzyAI */}
                  <motion.div 
                    className="glass-card p-8 rounded-2xl bg-primary/5 border-2 border-primary relative"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Recommended
                    </div>
                    <h2 className="text-2xl font-bold mb-6">With SpotzyAI</h2>
                    <div className="space-y-4">
                      {[
                        "Start at $19.99/month",
                        "No technical skills needed",
                        "Deploy in minutes",
                        "24/7 automated availability",
                        "Auto-scaling included",
                        "Zero maintenance",
                        "36 languages supported",
                        "Flexible customization"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Detailed <span className="text-primary">Comparison</span>
                  </h2>
                </motion.div>

                <div className="glass-card rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-3 gap-4 p-6 border-b border-border bg-muted/30">
                    <div className="font-bold">Feature</div>
                    <div className="font-bold text-center">Traditional Systems</div>
                    <div className="font-bold text-center text-primary">SpotzyAI</div>
                  </div>

                  {/* Rows */}
                  {comparisons.map((item, index) => (
                    <motion.div
                      key={index}
                      className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="font-semibold">{item.category}</div>
                      <div className="text-center text-sm text-muted-foreground flex items-center justify-center">
                        <span>{item.traditional}</span>
                      </div>
                      <div className="text-center text-sm font-medium flex items-center justify-center text-primary">
                        <span>{item.spotzy}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ROI Comparison */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Return on <span className="text-primary">Investment</span>
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl font-bold mb-6">Traditional System (Year 1)</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Upfront Setup</span>
                        <span className="font-semibold">$50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Development</span>
                        <span className="font-semibold">$30,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Fees (×12)</span>
                        <span className="font-semibold">$12,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maintenance</span>
                        <span className="font-semibold">$15,000</span>
                      </div>
                      <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                        <span>Total Year 1</span>
                        <span className="text-destructive">$107,000</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass-card p-8 rounded-2xl bg-primary/5 border-2 border-primary"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-6">SpotzyAI (Year 1)</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Upfront Setup</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Development</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pro Plan (×12)</span>
                        <span className="font-semibold">$1,199</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maintenance</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                        <span>Total Year 1</span>
                        <span className="text-primary">$1,199</span>
                      </div>
                      <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                        <p className="text-center font-bold text-primary text-xl">
                          Save $105,801 in Year 1
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-6">
              <motion.div 
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Make the Smart Choice for Your Business
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Join thousands of businesses saving time and money with SpotzyAI
                </p>
                <a 
                  href="https://platform.spotzyai.com" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Comparison;
