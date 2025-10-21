import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { Calendar, FileText, Phone } from "lucide-react";

const Legal = () => {
  const useCases = [
    {
      icon: Calendar,
      title: "Client Consultation Scheduling",
      description: "Automate scheduling of client consultations, court dates, and follow-up meetings with secure calendar integration."
    },
    {
      icon: FileText,
      title: "Case Status Updates",
      description: "Provide automated case status updates to clients, keeping them informed without tying up your staff's valuable time."
    },
    {
      icon: Phone,
      title: "Initial Client Screening",
      description: "Pre-screen potential clients, gather basic case information, and route urgent matters to the appropriate attorney."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Legal"
        title="AI Voice Agents for Legal Practices"
        subtitle="Transform how law firms handle client communications with automated phone calls. From scheduling consultations to providing case updates, our AI ensures your legal team can focus on casework while maintaining excellent client communication."
        benefits={["Reduce costs by over 50%", "Available 24/7", "Secure & Compliant"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default Legal;
