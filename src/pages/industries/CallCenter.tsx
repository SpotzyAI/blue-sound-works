import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { Phone, Users, BarChart } from "lucide-react";

const CallCenter = () => {
  const useCases = [
    {
      icon: Phone,
      title: "Inbound Call Handling",
      description: "Handle high call volumes efficiently with AI agents that understand context and provide accurate responses instantly."
    },
    {
      icon: Users,
      title: "Outbound Campaigns",
      description: "Execute large-scale outbound campaigns for surveys, follow-ups, and customer engagement with consistent quality."
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track every interaction with detailed analytics and insights to continuously optimize call center operations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Call Center"
        title="AI-Powered Call Center Solutions"
        subtitle="Revolutionize your call center operations with AI voice agents that handle calls with human-like conversation. Scale effortlessly, reduce wait times, and improve customer satisfaction while cutting operational costs significantly."
        benefits={["Handle 10x more calls", "Zero wait times", "Consistent quality"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default CallCenter;
