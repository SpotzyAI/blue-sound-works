import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { Calendar, Clock, Bell } from "lucide-react";

const Services = () => {
  const useCases = [
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Automate booking appointments for any service business, from salons to repair shops, with real-time availability checking."
    },
    {
      icon: Bell,
      title: "Appointment Reminders",
      description: "Send automated reminders to reduce no-shows and keep your schedule running smoothly with timely customer notifications."
    },
    {
      icon: Clock,
      title: "Service Inquiries",
      description: "Answer questions about services, pricing, and availability instantly, helping customers make informed decisions quickly."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Services"
        title="AI Voice Agents for Service Industries"
        subtitle="Streamline operations for service businesses with automated phone call handling. From appointment scheduling to customer inquiries, our AI voice agents ensure your team can focus on delivering exceptional service while we handle the calls."
        benefits={["Reduce costs by over 50%", "Available 24/7", "Reduce no-shows"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default Services;
