import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Languages from "./pages/Languages";
import Integrations from "./pages/Integrations";
import IntegrationDetail from "./pages/IntegrationDetail";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/industries/Healthcare";
import Ecommerce from "./pages/industries/Ecommerce";
import CallCenter from "./pages/industries/CallCenter";
import RealEstate from "./pages/industries/RealEstate";
import Services from "./pages/industries/Services";
import Restaurant from "./pages/industries/Restaurant";
import Legal from "./pages/industries/Legal";
import CarDealership from "./pages/industries/CarDealership";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/integration/:integrationName" element={<IntegrationDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/call-center" element={<CallCenter />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/services" element={<Services />} />
          <Route path="/industries/restaurant" element={<Restaurant />} />
          <Route path="/industries/legal" element={<Legal />} />
          <Route path="/industries/car-dealership" element={<CarDealership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
