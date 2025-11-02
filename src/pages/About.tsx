import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Zap, Globe, Award, Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { OrganizationSchema } from "@/components/StructuredData";

const About = () => {
  const stats = [
    { icon: Globe, value: "36", label: "Languages Supported" },
    { icon: Zap, value: "1000+", label: "Concurrent Calls" },
    { icon: Shield, value: "100%", label: "Enterprise Security" },
    { icon: Award, value: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make prioritizes our customers' success and satisfaction"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge AI voice technology"
    },
    {
      icon: Heart,
      title: "Accessibility",
      description: "Enterprise-grade technology should be accessible to businesses of all sizes"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and data protection"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About SpotzyAI - AI Voice Assistant Platform | Our Mission & Technology</title>
        <meta name="description" content="Learn about SpotzyAI's mission to democratize AI voice technology. Founded to transform business communications with no-code voice assistants supporting 36 languages." />
        <link rel="canonical" href="https://spotzyai.lovable.app/about" />
      </Helmet>
      
      <OrganizationSchema />
      
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
                  About <span className="text-primary">SpotzyAI</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Revolutionizing business communications with intelligent AI voice assistants
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  className="glass-card p-12 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    SpotzyAI was founded with a clear mission: to democratize enterprise-grade AI voice technology and make it accessible to businesses of all sizes. We believe that every business, from small restaurants to large enterprises, deserves the power to automate phone communications with intelligent, human-like voice assistants.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Traditional voice AI solutions required massive investments, technical expertise, and complex integrations. We changed that. With our no-code platform, businesses can deploy sophisticated AI voice agents in minutes, not months, and at a fraction of the traditional cost.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-6">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-8 rounded-2xl text-center"
                    whileHover={{ y: -8, boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25)" }}
                  >
                    <div className="w-16 h-16 glass-strong rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* What Makes Us Different */}
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
                    What Makes Us <span className="text-primary">Different</span>
                  </h2>
                </motion.div>

                <div className="space-y-6">
                  <motion.div 
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl font-bold mb-3">Real-Time Availability Checking</h3>
                    <p className="text-muted-foreground">
                      We're the only platform that offers real-time table availability checking during restaurant reservation calls. Unlike competitors who check availability after the call, our AI verifies and confirms bookings instantly, providing a seamless customer experience.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-3">True No-Code Platform</h3>
                    <p className="text-muted-foreground">
                      Build sophisticated voice agents without writing a single line of code. Our intuitive dashboard lets you configure conversation flows, set up integrations, and deploy AI agents in minutes. Technical complexity is our problem, not yours.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-3">36 Languages, Native Accents</h3>
                    <p className="text-muted-foreground">
                      Support customers in their native language with our 36-language capability. Our AI understands regional accents, cultural nuances, and can seamlessly switch languages mid-conversation, ensuring every customer feels heard and understood.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-3">Enterprise Scale</h3>
                    <p className="text-muted-foreground">
                      From startups to enterprises, we scale with you. Our Ultimate plan handles 1000+ concurrent calls simultaneously without any degradation in quality. Built on enterprise-grade infrastructure with 99.9% uptime guarantee.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-6">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Core <span className="text-primary">Values</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-8 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25)" }}
                  >
                    <div className="w-14 h-14 glass-strong rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div 
                className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business Communications?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of businesses already using SpotzyAI
                </p>
                <a 
                  href="https://platform.spotzyai.com" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-hero text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Start Building Free
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

export default About;
