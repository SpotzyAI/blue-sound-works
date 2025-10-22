import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { UtensilsCrossed, Calendar, Bed } from "lucide-react";

const Hospitality = () => {
  const useCases = [
    {
      icon: Bed,
      title: "Reservations & Bookings",
      description: "Automate hotel room reservations, restaurant table bookings, and event space scheduling with real-time availability checking across all properties."
    },
    {
      icon: Calendar,
      title: "Guest Services",
      description: "Handle guest requests, concierge services, and special arrangements 24/7, ensuring exceptional hospitality experiences at all hours."
    },
    {
      icon: UtensilsCrossed,
      title: "Dining & Room Service",
      description: "Take restaurant reservations, process room service orders, and handle catering inquiries with natural conversation flow and menu expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Hospitality"
        title="AI Voice Agents for Hospitality Industry"
        subtitle="Transform hospitality operations with AI voice automation for hotels, restaurants, and resorts. Our AI agents handle bookings, guest services, and dining inquiries 24/7, delivering exceptional guest experiences while reducing operational costs."
        benefits={["Handle 300% more calls", "24/7 availability", "Enhanced guest satisfaction"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default Hospitality;
