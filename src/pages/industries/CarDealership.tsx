import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { Calendar, Wrench, Phone } from "lucide-react";

const CarDealership = () => {
  const useCases = [
    {
      icon: Calendar,
      title: "Test Drive Scheduling",
      description: "Automate test drive appointments and vehicle viewing schedules, ensuring prospects connect with sales staff at optimal times."
    },
    {
      icon: Wrench,
      title: "Service Appointments",
      description: "Schedule service appointments, send reminders, and follow up on completed maintenance to enhance customer retention."
    },
    {
      icon: Phone,
      title: "Lead Follow-up",
      description: "Automatically follow up with leads from online inquiries, ensuring no potential sale slips through the cracks."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Automotive"
        title="AI Voice Agents for Car Dealerships"
        subtitle="Accelerate auto sales and service operations with automated phone call handling. From test drive scheduling to service appointments, our AI voice agents ensure your dealership never misses an opportunity while your team focuses on closing deals."
        benefits={["Reduce costs by over 50%", "Available 24/7", "Increase sales conversions"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default CarDealership;
