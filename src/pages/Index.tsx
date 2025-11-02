import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Footer from "@/components/Footer";
import AboutSpotzy from "@/components/AboutSpotzy";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import { OrganizationSchema, SoftwareApplicationSchema } from "@/components/StructuredData";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SpotzyAI - Build your First Intelligent Voice Assistant in Minutes for FREE</title>
        <meta name="description" content="Create production-ready AI voice agents with enterprise-grade capabilities. No code required. Deploy at scale with SpotzyAI." />
        <link rel="canonical" href="https://spotzyai.lovable.app/" />
      </Helmet>
      
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <AboutSpotzy />
          <Features />
          <HowItWorks />
          <UseCases />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
