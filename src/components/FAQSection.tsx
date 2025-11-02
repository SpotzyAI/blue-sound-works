import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is SpotzyAI and how does it work?",
      answer: "SpotzyAI is a no-code AI voice assistant platform that enables businesses to build, deploy, and manage intelligent voice agents for phone calls. Simply configure your agent using our intuitive dashboard, train it with your business logic, and deploy it to handle calls automatically. Our AI understands natural conversation and can integrate with your existing systems."
    },
    {
      question: "How is SpotzyAI different from other AI voice assistants?",
      answer: "SpotzyAI stands out with unique features like real-time availability checking (especially for restaurants), no-code deployment, support for 36 languages with native accents, and the ability to handle 1000+ concurrent calls. We also provide full project setup and maintenance for restaurant clients through our B2B partnership model, including a free reservation dashboard."
    },
    {
      question: "What languages does SpotzyAI support?",
      answer: "SpotzyAI supports 36 languages with native accent recognition and cultural adaptation. This includes major languages like English, Spanish, French, German, Chinese, Japanese, Arabic, and many more. Our AI can seamlessly handle multilingual conversations and switch between languages as needed."
    },
    {
      question: "Can SpotzyAI integrate with my existing systems?",
      answer: "Yes! SpotzyAI integrates with telephony systems, calendars (Google Calendar, Outlook), CRMs (Salesforce, HubSpot), and many other business tools. We provide RESTful APIs and SDKs in 8 programming languages for custom integrations. Our platform is designed to work seamlessly with your existing tech stack."
    },
    {
      question: "How much does SpotzyAI cost?",
      answer: "SpotzyAI offers flexible pricing starting at $19.99/month for the Starter plan (100 included minutes), $99.99/month for the Pro plan (500 included minutes), and $599.99/month for the Ultimate plan (3000 included minutes + 1000 concurrent calls). All plans include core features, with advanced capabilities available on higher tiers. We also offer custom B2B contracts for restaurants."
    },
    {
      question: "What industries can benefit from SpotzyAI?",
      answer: "SpotzyAI serves a wide range of industries including restaurants, healthcare, e-commerce, call centers, real estate, hospitality, legal services, car dealerships, and general service businesses. Any industry that handles phone calls can benefit from our AI voice assistants to improve efficiency, reduce costs, and enhance customer experience."
    },
    {
      question: "Does SpotzyAI offer real-time availability checking?",
      answer: "Yes! This is one of our unique features, especially valuable for restaurants. Our AI can check table availability in real-time during phone calls, not after. This means customers get instant confirmation whether a time slot is available, making the reservation process seamless and professional."
    },
    {
      question: "How quickly can I deploy SpotzyAI?",
      answer: "You can deploy a basic AI voice assistant in minutes using our no-code platform. Simply sign up, configure your agent using our intuitive dashboard, test it with sample calls, and go live. For more complex implementations with custom integrations, deployment typically takes a few hours to a couple of days depending on your requirements."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about SpotzyAI
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card p-6 rounded-2xl text-left transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
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
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="text-primary font-semibold hover:underline"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
