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
import WhatIsSpotzy from "./pages/docs/introduction/WhatIsSpotzy";
import HowItWorks from "./pages/docs/introduction/HowItWorks";
import KeyTerminology from "./pages/docs/introduction/KeyTerminology";
import AccountSetup from "./pages/docs/getting-started/AccountSetup";
import Billing from "./pages/docs/getting-started/Billing";
import AssistantsOverview from "./pages/docs/ai-assistants/Overview";
import AssistantsCreating from "./pages/docs/ai-assistants/Creating";
import AssistantsModes from "./pages/docs/ai-assistants/Modes";
import AssistantsTesting from "./pages/docs/ai-assistants/Testing";
import AssistantsConfiguration from "./pages/docs/ai-assistants/Configuration";
import AssistantsGeneral from "./pages/docs/ai-assistants/settings/General";
import AssistantsPromptTools from "./pages/docs/ai-assistants/settings/PromptAndTools";
import AssistantsVoice from "./pages/docs/ai-assistants/settings/Voice";
import CampaignsOverview from "./pages/docs/campaigns/Overview";
import CampaignsCreating from "./pages/docs/campaigns/Creating";
import CampaignsManaging from "./pages/docs/campaigns/Managing";
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
import LeadsOverview from "./pages/docs/leads/Overview";
import LeadsImporting from "./pages/docs/leads/Importing";
import LeadsManaging from "./pages/docs/leads/Managing";
import LeadsCreating from "./pages/docs/leads/Creating";
import LeadsVariables from "./pages/docs/leads/Variables";
import PhoneNumbersOverview from "./pages/docs/phone-numbers/Overview";
import PhoneNumbersTypes from "./pages/docs/phone-numbers/Types";
import PhoneNumbersPurchasing from "./pages/docs/phone-numbers/Purchasing";
import PhoneNumbersSupportedCountries from "./pages/docs/phone-numbers/SupportedCountries";
import InboundCallsBasics from "./pages/docs/inbound-calls/Basics";
import InboundCallsRouting from "./pages/docs/inbound-calls/Routing";
import InboundCallsHandling from "./pages/docs/inbound-calls/Handling";
import OutboundCallsBasics from "./pages/docs/outbound-calls/Basics";
import CampaignsBestPractices from "./pages/docs/campaigns/BestPractices";
import CampaignsScripts from "./pages/docs/campaigns/Scripts";
import PricingOverview from "./pages/docs/pricing/Overview";
import OutboundCallsCallerId from "./pages/docs/outbound-calls/CallerId";
import OutboundCallsVoicemail from "./pages/docs/outbound-calls/Voicemail";
import InboundCallsForwarding from "./pages/docs/inbound-calls/Forwarding";
import ConversationPrompts from "./pages/docs/conversation-design/Prompts";
import ConversationKnowledgeBase from "./pages/docs/conversation-design/KnowledgeBase";
import ConversationInterruptions from "./pages/docs/conversation-design/Interruptions";
import ConversationLanguage from "./pages/docs/conversation-design/Language";

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
          <Route path="/docs/introduction/what-is-spotzy" element={<WhatIsSpotzy />} />
          <Route path="/docs/introduction/how-it-works" element={<HowItWorks />} />
          <Route path="/docs/introduction/key-terminology" element={<KeyTerminology />} />
          <Route path="/docs/getting-started/account-setup" element={<AccountSetup />} />
          <Route path="/docs/getting-started/billing" element={<Billing />} />
          <Route path="/docs/getting-started/quick-start" element={<QuickStart />} />
          <Route path="/docs/ai-assistants/overview" element={<AssistantsOverview />} />
          <Route path="/docs/ai-assistants/creating" element={<AssistantsCreating />} />
          <Route path="/docs/ai-assistants/modes" element={<AssistantsModes />} />
          <Route path="/docs/ai-assistants/testing" element={<AssistantsTesting />} />
          <Route path="/docs/ai-assistants/configuration" element={<AssistantsConfiguration />} />
          <Route path="/docs/ai-assistants/settings/general" element={<AssistantsGeneral />} />
          <Route path="/docs/ai-assistants/settings/prompt-and-tools" element={<AssistantsPromptTools />} />
          <Route path="/docs/ai-assistants/settings/voice" element={<AssistantsVoice />} />
          <Route path="/docs/campaigns/overview" element={<CampaignsOverview />} />
          <Route path="/docs/campaigns/creating" element={<CampaignsCreating />} />
          <Route path="/docs/campaigns/managing" element={<CampaignsManaging />} />
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
          <Route path="/docs/leads/overview" element={<LeadsOverview />} />
          <Route path="/docs/leads/importing" element={<LeadsImporting />} />
          <Route path="/docs/leads/managing" element={<LeadsManaging />} />
          <Route path="/docs/leads/creating" element={<LeadsCreating />} />
          <Route path="/docs/leads/variables" element={<LeadsVariables />} />
          <Route path="/docs/phone-numbers/overview" element={<PhoneNumbersOverview />} />
          <Route path="/docs/phone-numbers/types" element={<PhoneNumbersTypes />} />
          <Route path="/docs/phone-numbers/purchasing" element={<PhoneNumbersPurchasing />} />
          <Route path="/docs/phone-numbers/supported-countries" element={<PhoneNumbersSupportedCountries />} />
          <Route path="/docs/inbound-calls/basics" element={<InboundCallsBasics />} />
          <Route path="/docs/inbound-calls/routing" element={<InboundCallsRouting />} />
          <Route path="/docs/inbound-calls/handling" element={<InboundCallsHandling />} />
          <Route path="/docs/outbound-calls/basics" element={<OutboundCallsBasics />} />
          <Route path="/docs/campaigns/best-practices" element={<CampaignsBestPractices />} />
          <Route path="/docs/campaigns/scripts" element={<CampaignsScripts />} />
          <Route path="/docs/pricing/overview" element={<PricingOverview />} />
          <Route path="/docs/outbound-calls/caller-id" element={<OutboundCallsCallerId />} />
          <Route path="/docs/outbound-calls/voicemail" element={<OutboundCallsVoicemail />} />
          <Route path="/docs/inbound-calls/forwarding" element={<InboundCallsForwarding />} />
          <Route path="/docs/conversation-design/prompts" element={<ConversationPrompts />} />
          <Route path="/docs/conversation-design/knowledge-base" element={<ConversationKnowledgeBase />} />
          <Route path="/docs/conversation-design/interruptions" element={<ConversationInterruptions />} />
          <Route path="/docs/conversation-design/language" element={<ConversationLanguage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
