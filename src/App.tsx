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
import DocsIndex from "./pages/docs/Index";
import QuickStart from "./pages/docs/QuickStart";
import CoreConcepts from "./pages/docs/CoreConcepts";
import Features from "./pages/docs/Features";
import FirstAgent from "./pages/docs/FirstAgent";
import VoiceConfig from "./pages/docs/VoiceConfig";
import AgentOverview from "./pages/docs/AgentOverview";
import AgentConfig from "./pages/docs/AgentConfig";
import Training from "./pages/docs/Training";
import IntegrationsDoc from "./pages/docs/IntegrationsDoc";
import CrmIntegration from "./pages/docs/CrmIntegration";
import Api from "./pages/docs/Api";
import LanguagesDoc from "./pages/docs/LanguagesDoc";
import Voices from "./pages/docs/Voices";
import CallQuality from "./pages/docs/troubleshooting/CallQuality";
import TroubleshootingCampaigns from "./pages/docs/troubleshooting/Campaigns";
import TroubleshootingLeads from "./pages/docs/troubleshooting/Leads";
import SetupIssues from "./pages/docs/troubleshooting/SetupIssues";
import GoHighLevel from "./pages/docs/troubleshooting/GoHighLevel";
import SipIntegration from "./pages/docs/troubleshooting/SipIntegration";
import VoiceProblems from "./pages/docs/troubleshooting/VoiceProblems";

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
          <Route path="/docs" element={<DocsIndex />} />
          <Route path="/docs/quick-start" element={<QuickStart />} />
          <Route path="/docs/core-concepts" element={<CoreConcepts />} />
          <Route path="/docs/features" element={<Features />} />
          <Route path="/docs/first-agent" element={<FirstAgent />} />
          <Route path="/docs/voice-config" element={<VoiceConfig />} />
          <Route path="/docs/agent-overview" element={<AgentOverview />} />
          <Route path="/docs/agent-config" element={<AgentConfig />} />
          <Route path="/docs/training" element={<Training />} />
          <Route path="/docs/integrations" element={<IntegrationsDoc />} />
          <Route path="/docs/crm-integration" element={<CrmIntegration />} />
          <Route path="/docs/api" element={<Api />} />
          <Route path="/docs/languages" element={<LanguagesDoc />} />
          <Route path="/docs/voices" element={<Voices />} />
          <Route path="/docs/troubleshooting/call-quality" element={<CallQuality />} />
          <Route path="/docs/troubleshooting/campaigns" element={<TroubleshootingCampaigns />} />
          <Route path="/docs/troubleshooting/leads" element={<TroubleshootingLeads />} />
          <Route path="/docs/troubleshooting/setup-issues" element={<SetupIssues />} />
          <Route path="/docs/troubleshooting/gohighlevel" element={<GoHighLevel />} />
          <Route path="/docs/troubleshooting/sip-integration" element={<SipIntegration />} />
          <Route path="/docs/troubleshooting/voice-problems" element={<VoiceProblems />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
