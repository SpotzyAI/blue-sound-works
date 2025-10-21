import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { Calendar, MessageCircle, ThumbsUp } from "lucide-react";

const Healthcare = () => {
  const useCases = [
    {
      icon: Calendar,
      title: "Patient Appointments",
      description: "Schedule and reschedule consultations automatically, syncing with doctors' calendars in real-time for seamless coordination."
    },
    {
      icon: MessageCircle,
      title: "Patient Support",
      description: "Provide 24/7 assistance to patients for various requests, from service information to treatment details and general inquiries."
    },
    {
      icon: ThumbsUp,
      title: "Feedback Collection",
      description: "Request and collect patient feedback after consultations, helping improve services and patient satisfaction continuously."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="Healthcare"
        title="AI Voice Agents for Healthcare"
        subtitle="Transform how clinics and medical offices handle communications by automating phone calls to improve operational efficiency and increase patient satisfaction. From scheduling appointments to sending reminders, our AI solution ensures smooth management."
        benefits={["Reduce costs by over 50%", "Available 24/7", "HIPAA Compliant"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default Healthcare;
