import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Video, FileText, Code, Headphones, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Resources = () => {
  const resources = [
    {
      icon: Rocket,
      title: "Getting Started Guide",
      description: "Step-by-step guide to deploy your first AI voice assistant in minutes",
      link: "https://docs.spotzyai.com/getting-started",
      category: "Tutorial"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch comprehensive video guides on every feature",
      link: "https://docs.spotzyai.com/videos",
      category: "Video"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete technical documentation and API references",
      link: "https://docs.spotzyai.com",
      category: "Documentation"
    },
    {
      icon: Code,
      title: "API Reference",
      description: "RESTful API docs and SDKs in 8 programming languages",
      link: "https://docs.spotzyai.com/api",
      category: "Technical"
    },
    {
      icon: FileText,
      title: "Best Practices",
      description: "Learn proven strategies to optimize your voice agents",
      link: "https://docs.spotzyai.com/best-practices",
      category: "Guide"
    },
    {
      icon: Headphones,
      title: "Support Center",
      description: "Get help from our dedicated support team",
      link: "/contact",
      category: "Support"
    }
  ];

  const guides = [
    {
      title: "Restaurant Reservation System Setup",
      description: "Complete guide to implementing real-time reservation management",
      time: "15 min read"
    },
    {
      title: "Multi-Language Configuration",
      description: "How to set up voice agents for 36 different languages",
      time: "10 min read"
    },
    {
      title: "CRM Integration Guide",
      description: "Connect SpotzyAI with Salesforce, HubSpot, and other CRMs",
      time: "20 min read"
    },
    {
      title: "Advanced Conversation Flows",
      description: "Build sophisticated conversation logic without code",
      time: "25 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources - SpotzyAI Documentation, Tutorials & Support | AI Voice Assistant</title>
        <meta name="description" content="Access SpotzyAI resources including documentation, video tutorials, API references, and getting started guides for building AI voice assistants." />
        <link rel="canonical" href="https://spotzyai.lovable.app/resources" />
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
                  Resources & <span className="text-primary">Documentation</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Everything you need to build, deploy, and optimize your AI voice assistants
                </p>
              </motion.div>
            </div>
          </section>

          {/* Resource Cards */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources.map((resource, index) => (
                    <motion.a
                      key={index}
                      href={resource.link}
                      target={resource.link.startsWith('http') ? '_blank' : undefined}
                      rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="glass-card p-8 rounded-2xl group block"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, boxShadow: "0 20px 60px -10px hsl(220 88% 35% / 0.25)" }}
                    >
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <div className="w-14 h-14 glass-strong rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <resource.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {resource.description}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Guides */}
          <section className="py-20 bg-gradient-subtle">
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
                    Popular <span className="text-primary">Guides</span>
                  </h2>
                </motion.div>

                <div className="space-y-6">
                  {guides.map((guide, index) => (
                    <motion.a
                      key={index}
                      href="https://docs.spotzyai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-6 rounded-2xl flex items-start gap-6 group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      <div className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {guide.description}
                        </p>
                        <span className="text-xs text-primary">{guide.time}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
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
                  <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">For Developers</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://docs.spotzyai.com/api" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            API Documentation →
                          </a>
                        </li>
                        <li>
                          <a href="https://docs.spotzyai.com/sdks" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            SDKs & Libraries →
                          </a>
                        </li>
                        <li>
                          <a href="https://docs.spotzyai.com/webhooks" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Webhooks Guide →
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">For Business Users</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://docs.spotzyai.com/getting-started" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Quick Start Guide →
                          </a>
                        </li>
                        <li>
                          <a href="https://docs.spotzyai.com/tutorials" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Video Tutorials →
                          </a>
                        </li>
                        <li>
                          <a href="/faq" className="text-primary hover:underline">
                            FAQ →
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
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
                  Need Help Getting Started?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Our team is here to help you succeed
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="https://platform.spotzyai.com" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/20 rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300"
                  >
                    Start Building Free
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
