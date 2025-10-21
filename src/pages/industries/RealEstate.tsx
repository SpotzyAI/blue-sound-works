import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { Calendar, Filter, Magnet } from "lucide-react";

const RealEstate = () => {
  const useCases = [
    {
      icon: Calendar,
      title: "Schedule Viewings",
      description: "Automatically schedule property viewings with customers, integrating seamlessly with your team's calendar for optimal coordination."
    },
    {
      icon: Filter,
      title: "Lead Prequalification",
      description: "Match active properties in your CRM to client preferences, providing personalized and efficient property recommendations."
    },
    {
      icon: Magnet,
      title: "Lead Generation",
      description: "Contact property owners from websites to propose brokerage services, increasing your listings and expanding your portfolio."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Real Estate"
        title="AI Voice Agents for Real Estate"
        subtitle="Transform how real estate agencies handle communications by automating phone calls to improve efficiency. From scheduling viewings to generating leads, our AI solution lets your team focus on closing deals and growing the business."
        benefits={["Reduce costs by over 50%", "Available 24/7", "Never miss a lead"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default RealEstate;
