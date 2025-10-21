import { 
  Book, 
  Zap, 
  Sparkles, 
  FileText, 
  Settings, 
  Phone, 
  MessageSquare,
  Users,
  Megaphone,
  Workflow,
  DollarSign,
  Plug,
  Palette,
  Wrench,
  Code,
  Globe
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface DocPage {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export interface DocSection {
  title: string;
  items: DocPage[];
}

export const docsConfig: DocSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "What is Spotzy.ai?", href: "/docs/introduction/what-is-spotzy", icon: Book },
      { title: "How It Works", href: "/docs/introduction/how-it-works", icon: Zap },
      { title: "Key Terminology", href: "/docs/introduction/key-terminology", icon: FileText },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { title: "Quick Start Guide", href: "/docs/getting-started/quick-start", icon: Zap },
      { title: "Account Setup", href: "/docs/getting-started/account-setup", icon: Settings },
    ],
  },
  {
    title: "AI Assistants",
    items: [
      { title: "Overview", href: "/docs/ai-assistants/overview", icon: Sparkles },
      { title: "Creating an Assistant", href: "/docs/ai-assistants/creating", icon: Sparkles },
      { title: "General Settings", href: "/docs/ai-assistants/settings/general", icon: Settings },
      { title: "Prompt & Tools", href: "/docs/ai-assistants/settings/prompt-and-tools", icon: FileText },
      { title: "Voice Configuration", href: "/docs/ai-assistants/settings/voice", icon: Phone },
    ],
  },
  {
    title: "Campaigns",
    items: [
      { title: "Creating Campaigns", href: "/docs/campaigns/creating", icon: Megaphone },
      { title: "Managing Campaigns", href: "/docs/campaigns/managing", icon: Settings },
      { title: "Best Practices", href: "/docs/campaigns/best-practices", icon: Sparkles },
    ],
  },
  {
    title: "Leads",
    items: [
      { title: "Importing Leads", href: "/docs/leads/importing", icon: Users },
      { title: "Managing Leads", href: "/docs/leads/managing", icon: Settings },
      { title: "Lead Variables", href: "/docs/leads/variables", icon: FileText },
    ],
  },
  {
    title: "Phone Numbers",
    items: [
      { title: "Phone Number Setup", href: "/docs/phone-numbers/setup", icon: Phone },
      { title: "Caller ID Configuration", href: "/docs/phone-numbers/caller-id", icon: Phone },
    ],
  },
  {
    title: "Calls",
    items: [
      { title: "Inbound Calls", href: "/docs/calls/inbound", icon: Phone },
      { title: "Outbound Calls", href: "/docs/calls/outbound", icon: Phone },
      { title: "Call Recording", href: "/docs/calls/recording", icon: Phone },
    ],
  },
  {
    title: "Conversation Design",
    items: [
      { title: "Prompt Engineering", href: "/docs/conversation-design/prompt-engineering", icon: MessageSquare },
      { title: "Best Practices", href: "/docs/conversation-design/best-practices", icon: Sparkles },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Overview", href: "/docs/integrations/overview", icon: Plug },
      { title: "CRM Integration", href: "/docs/integrations/crm", icon: Plug },
      { title: "Webhooks", href: "/docs/integrations/webhooks", icon: Workflow },
    ],
  },
  {
    title: "Languages & Voices",
    items: [
      { title: "Supported Languages", href: "/docs/languages-voices/languages", icon: Globe },
      { title: "Voice Selection", href: "/docs/languages-voices/voices", icon: Settings },
    ],
  },
  {
    title: "Pricing",
    items: [
      { title: "Pricing Overview", href: "/docs/pricing/overview", icon: DollarSign },
      { title: "Billing & Credits", href: "/docs/pricing/billing", icon: DollarSign },
    ],
  },
  {
    title: "White Label",
    items: [
      { title: "White Label Program", href: "/docs/white-label/overview", icon: Palette },
      { title: "Customization", href: "/docs/white-label/customization", icon: Settings },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { title: "Call Quality Issues", href: "/docs/troubleshooting/call-quality", icon: Wrench },
      { title: "Campaign Issues", href: "/docs/troubleshooting/campaigns", icon: Wrench },
      { title: "Lead Issues", href: "/docs/troubleshooting/leads", icon: Wrench },
      { title: "Setup Issues", href: "/docs/troubleshooting/setup-issues", icon: Wrench },
      { title: "GoHighLevel Issues", href: "/docs/troubleshooting/gohighlevel", icon: Wrench },
      { title: "SIP Integration Issues", href: "/docs/troubleshooting/sip-integration", icon: Wrench },
      { title: "Voice Problems", href: "/docs/troubleshooting/voice-problems", icon: Wrench },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", href: "/docs/api/authentication", icon: Code },
      { title: "Assistants API", href: "/docs/api/assistants", icon: Code },
      { title: "Calls API", href: "/docs/api/calls", icon: Code },
      { title: "Leads API", href: "/docs/api/leads", icon: Code },
      { title: "Campaigns API", href: "/docs/api/campaigns", icon: Code },
    ],
  },
];
