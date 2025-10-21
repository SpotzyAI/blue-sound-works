import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { UtensilsCrossed, Calendar, Phone } from "lucide-react";

const Restaurant = () => {
  const useCases = [
    {
      icon: UtensilsCrossed,
      title: "Phone Orders",
      description: "AI voice agents take complete phone orders, process payments, and confirm delivery details with natural conversation flow and menu expertise."
    },
    {
      icon: Calendar,
      title: "Table Reservations",
      description: "Automated system manages table bookings, confirms reservations, and handles cancellations while checking real-time availability."
    },
    {
      icon: Phone,
      title: "Customer Support",
      description: "Provide instant answers about menu items, allergens, operating hours, and special offers with personalized customer service."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Restaurant"
        title="AI Call Center for Restaurants"
        subtitle="Revolutionize restaurant operations with AI call center technology. Our AI voice agents handle phone orders, reservations, and customer inquiries 24/7. Automated systems ensure seamless service while reducing wait times and operational costs."
        benefits={["Handle 300% more calls", "24/7 availability", "Zero missed orders"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default Restaurant;
