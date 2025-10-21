import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/IndustryHero";
import IndustryUseCases from "@/components/IndustryUseCases";
import IndustryComparison from "@/components/IndustryComparison";
import { CheckCircle, ShoppingCart, Headphones } from "lucide-react";

const Ecommerce = () => {
  const useCases = [
    {
      icon: CheckCircle,
      title: "Order Confirmation",
      description: "Automate calls to confirm orders placed by customers, ensuring accuracy and prompt processing for every transaction."
    },
    {
      icon: ShoppingCart,
      title: "Abandoned Cart Recovery",
      description: "Follow up with customers who left items in their cart, increasing conversion rates with personalized reminders."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Provide instant support for various requests, from product information to return requests and shipping updates."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <IndustryHero
        badge="E-commerce"
        title="Automate E-commerce Customer Service"
        subtitle="Transform how online stores handle communications by automating phone calls to improve efficiency and increase customer satisfaction. From order confirmations to return management, focus on optimizing sales and growing your business."
        benefits={["Reduce costs by over 50%", "Available 24/7", "Increase conversions"]}
      />
      <IndustryUseCases useCases={useCases} />
      <IndustryComparison />
      <Footer />
    </div>
  );
};

export default Ecommerce;
