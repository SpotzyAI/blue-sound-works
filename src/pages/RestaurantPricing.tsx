import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hotel, UtensilsCrossed, Clock, Globe, Users, Star, TrendingDown, Zap } from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const RestaurantPricing = () => {
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
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Comprehensive AI voice assistant solutions for hotels and restaurants. 
                From setup to training, we handle everything so you can focus on your guests.
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
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

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="/contact">
                    Get Custom Pricing
                  </a>
                </Button>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RestaurantPricing;
