import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Languages = lazy(() => import("./pages/Languages"));
const Integrations = lazy(() => import("./pages/Integrations"));
const IntegrationDetail = lazy(() => import("./pages/IntegrationDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const Ecommerce = lazy(() => import("./pages/industries/Ecommerce"));
const CallCenter = lazy(() => import("./pages/industries/CallCenter"));
const RealEstate = lazy(() => import("./pages/industries/RealEstate"));
const Services = lazy(() => import("./pages/industries/Services"));
const Hospitality = lazy(() => import("./pages/industries/Hospitality"));
const Legal = lazy(() => import("./pages/industries/Legal"));
const CarDealership = lazy(() => import("./pages/industries/CarDealership"));
const Restaurant = lazy(() => import("./pages/industries/Restaurant"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-primary">Loading...</div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/integration/:integrationName" element={<IntegrationDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/call-center" element={<CallCenter />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/services" element={<Services />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/restaurant" element={<Restaurant />} />
            <Route path="/industries/legal" element={<Legal />} />
            <Route path="/industries/car-dealership" element={<CarDealership />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
