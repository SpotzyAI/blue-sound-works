import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQPageSchema } from "@/components/StructuredData";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is SpotzyAI and how does it work?",
      answer: "SpotzyAI is a no-code AI voice assistant platform that enables businesses to build, deploy, and manage intelligent voice agents for phone calls. Simply configure your agent using our intuitive dashboard, train it with your business logic, and deploy it to handle calls automatically. Our AI understands natural conversation, supports 36 languages, and can integrate with your existing systems like calendars, CRMs, and telephony providers."
    },
    {
      question: "How is SpotzyAI different from other AI voice assistants?",
      answer: "SpotzyAI stands out with several unique features: (1) Real-time availability checking during calls - especially revolutionary for restaurants where table availability is confirmed instantly, not after the call. (2) True no-code platform - build sophisticated voice agents without writing any code. (3) Support for 36 languages with native accent recognition. (4) Enterprise-scale handling up to 1000+ concurrent calls. (5) Complete B2B partnership model for restaurants including full setup, maintenance, and a free reservation dashboard."
    },
    {
      question: "What languages does SpotzyAI support?",
      answer: "SpotzyAI supports 36 languages with native accent recognition and cultural adaptation. This includes English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Polish, Turkish, Arabic, Hebrew, Hindi, Chinese (Mandarin, Cantonese), Japanese, Korean, Thai, Vietnamese, Indonesian, Malay, Filipino, Swedish, Norwegian, Danish, Finnish, Czech, Hungarian, Romanian, Greek, and more. Our AI can seamlessly handle multilingual conversations and switch between languages as needed during a single call."
    },
    {
      question: "Can SpotzyAI integrate with my existing systems?",
      answer: "Yes! SpotzyAI offers comprehensive integration capabilities: (1) Telephony systems - connect with your existing phone infrastructure. (2) Calendars - Google Calendar, Microsoft Outlook, Apple Calendar for real-time scheduling. (3) CRMs - Salesforce, HubSpot, Zoho, and more for customer data sync. (4) Booking systems - integrate with your reservation or appointment systems. (5) Payment processors - Stripe, Square for transactions. (6) Custom APIs - use our RESTful APIs and SDKs in 8 programming languages (Python, JavaScript, Ruby, PHP, Java, C#, Go, Swift) for custom integrations. Our technical team provides full integration support."
    },
    {
      question: "How much does SpotzyAI cost?",
      answer: "SpotzyAI offers flexible pricing to suit businesses of all sizes: Starter Plan ($19.99/month) includes 100 minutes, basic features, and email support. Pro Plan ($99.99/month - Most Popular) includes 500 minutes, advanced features, priority support, and custom branding. Ultimate Plan ($599.99/month) includes 3000 minutes, 1000 concurrent calls, dedicated support, and enterprise features. Additional minutes are available at competitive rates. For restaurants, we offer specialized B2B contracts that include complete project setup, maintenance, and a free reservation dashboard - contact us for custom pricing."
    },
    {
      question: "What industries can benefit from SpotzyAI?",
      answer: "SpotzyAI serves diverse industries with specific solutions: (1) Restaurants - reservation management with real-time availability, order taking, customer follow-ups. (2) Healthcare - appointment scheduling, prescription reminders, patient follow-ups. (3) E-commerce - order status, customer support, product inquiries. (4) Call Centers - inbound call handling, outbound campaigns, customer service. (5) Real Estate - property inquiries, showing scheduling, client follow-ups. (6) Hospitality - hotel bookings, concierge services, guest communications. (7) Legal - consultation scheduling, case updates, client screening. (8) Services - appointment booking, reminders, service inquiries. (9) Car Dealerships - test drive scheduling, service appointments, sales inquiries. Any business that handles phone calls can benefit from automation, cost reduction, and improved customer experience."
    },
    {
      question: "Does SpotzyAI offer real-time availability checking?",
      answer: "Yes! This is one of our revolutionary features, particularly valuable for restaurants and service businesses. Unlike traditional systems that take reservations and check availability later, SpotzyAI checks availability in real-time during the phone call. When a customer calls to book a table, our AI immediately accesses your reservation system, checks available time slots, and confirms the booking on the spot. This eliminates double bookings, reduces errors, and provides a seamless customer experience. The same applies to appointment-based businesses - instant availability confirmation during the conversation."
    },
    {
      question: "How quickly can I deploy SpotzyAI?",
      answer: "Deployment time depends on your needs: (1) Basic setup: 10-15 minutes - Sign up, configure basic responses, connect phone number, and go live. (2) Standard deployment: 1-3 hours - Add integrations (calendar, CRM), customize conversation flows, train with FAQs, test thoroughly. (3) Advanced implementation: 1-3 days - Custom integrations, multiple languages, complex workflows, team training. (4) Enterprise/Restaurant: 1-2 weeks - Full B2B project setup including custom dashboard, complete integration, staff training, and optimization. Our platform is designed for rapid deployment, and our support team assists with faster implementation."
    },
    {
      question: "Is SpotzyAI secure and compliant?",
      answer: "Yes, security is our top priority. SpotzyAI features: (1) Bank-level encryption for all data in transit and at rest. (2) SOC 2 Type II certification for enterprise security standards. (3) GDPR compliance for European data protection. (4) HIPAA compliance options for healthcare implementations. (5) Full data sovereignty - your data stays in your chosen region. (6) Regular security audits and penetration testing. (7) Role-based access control for team members. (8) Call recording encryption and secure storage. (9) PCI DSS compliance for payment processing. We take security seriously and continuously update our systems to meet the highest standards."
    },
    {
      question: "What kind of support does SpotzyAI provide?",
      answer: "SpotzyAI offers comprehensive support: (1) Email support for all plans (response within 24 hours). (2) Priority support for Pro and Ultimate plans (response within 4 hours). (3) Dedicated account manager for Ultimate plans and B2B contracts. (4) 24/7 technical support for enterprise customers. (5) Extensive documentation and video tutorials. (6) Live chat support during business hours. (7) Onboarding assistance and training sessions. (8) Regular webinars and best practices workshops. (9) Community forum for peer support and knowledge sharing. (10) For restaurant B2B clients: Full project management, setup assistance, ongoing maintenance, and optimization."
    },
    {
      question: "Can SpotzyAI handle high call volumes?",
      answer: "Absolutely! SpotzyAI is built for scale: (1) Starter and Pro plans handle standard call volumes with intelligent queuing. (2) Ultimate plan supports 1000+ concurrent calls simultaneously. (3) Auto-scaling infrastructure that adjusts to demand peaks automatically. (4) No degradation in call quality regardless of volume. (5) Built on enterprise-grade infrastructure with 99.9% uptime. (6) Load balancing across multiple data centers for reliability. (7) Real-time monitoring and alerts for performance optimization. Whether you're a small business handling a few calls daily or an enterprise with thousands of calls per hour, SpotzyAI scales effortlessly."
    },
    {
      question: "What happens if the AI doesn't understand a customer?",
      answer: "SpotzyAI has multiple fallback mechanisms: (1) Clarification requests - the AI politely asks customers to rephrase or provide more details. (2) Context-aware understanding - uses conversation history to interpret ambiguous requests. (3) Seamless human handoff - transfers complex queries to human staff with full conversation context. (4) Learning from interactions - continuously improves from every conversation. (5) Custom fallback responses - you can define specific fallback behaviors for your business. (6) Multi-language detection - automatically switches if customer speaks a different language. (7) Sentiment analysis - detects frustration and adjusts approach or escalates. The AI is designed to handle edge cases gracefully and always prioritize customer satisfaction."
    },
    {
      question: "Do I need technical knowledge to use SpotzyAI?",
      answer: "No technical knowledge required! SpotzyAI is designed for everyone: (1) No-code dashboard - visual interface for all configurations. (2) Pre-built templates for common use cases (restaurants, healthcare, e-commerce, etc.). (3) Drag-and-drop conversation flow builder. (4) Plain English instructions - no coding or technical jargon. (5) Step-by-step onboarding wizard guides you through setup. (6) Video tutorials for every feature. (7) Live training sessions available. (8) Technical team handles complex integrations for you. While our platform is non-technical, we also provide APIs and SDKs for developers who want advanced customization."
    },
    {
      question: "Can I customize the AI's voice and personality?",
      answer: "Yes! Full customization available: (1) Voice selection - choose from multiple voice options in each language (male, female, different accents). (2) Personality settings - professional, friendly, casual, formal tones. (3) Brand voice alignment - train the AI to match your company's communication style. (4) Custom scripts - define specific responses for your business scenarios. (5) Vocabulary training - teach industry-specific terms and jargon. (6) Response pacing - adjust speaking speed and pause duration. (7) Emotion and enthusiasm levels - from very professional to warm and engaging. The AI represents your brand, so we ensure it sounds exactly how you want it to."
    },
    {
      question: "What analytics and reporting does SpotzyAI provide?",
      answer: "Comprehensive analytics dashboard: (1) Call metrics - total calls, duration, completion rates, peak hours. (2) Conversation insights - common questions, customer intents, sentiment analysis. (3) Performance tracking - resolution rates, escalation frequency, customer satisfaction. (4) Integration data - bookings made, appointments scheduled, conversions. (5) Cost analytics - spend per call, ROI calculations, cost savings vs traditional methods. (6) Language breakdown - calls by language, multilingual performance. (7) Custom reports - export data for deeper analysis. (8) Real-time monitoring - live dashboard of active calls and system health. (9) A/B testing results - compare different conversation flows. All data helps optimize your voice agent's performance continuously."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - SpotzyAI AI Voice Assistant Questions | Pricing, Features, Integration</title>
        <meta name="description" content="Frequently asked questions about SpotzyAI. Learn about pricing, features, integrations, deployment, and how our AI voice assistant platform works for your business." />
        <link rel="canonical" href="https://spotzyai.lovable.app/faq" />
      </Helmet>
      
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-6">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to know about SpotzyAI's AI voice assistant platform
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full glass-card p-6 rounded-2xl text-left transition-all duration-300 hover:shadow-soft"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-lg font-semibold pr-8">{faq.question}</h2>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full glass-strong flex items-center justify-center text-primary">
                          {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground mt-4 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <a 
                  href="/contact" 
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  Contact our team →
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

export default FAQ;
