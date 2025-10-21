import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All Categories",
  "Marketing",
  "CRM",
  "Communication",
  "Productivity",
  "Analytics",
  "E-commerce",
  "Customer Support",
  "Payment Processing",
  "Accounting",
  "Business Intelligence",
  "Developer Tools",
  "Forms & Surveys",
  "Human Resources",
  "Project Management",
];

const integrations = [
  // CRM
  { name: "Salesforce", category: "CRM", logo: "🔷" },
  { name: "HubSpot", category: "CRM", logo: "🟠" },
  { name: "Zoho CRM", category: "CRM", logo: "📈" },
  { name: "Pipedrive", category: "CRM", logo: "🔄" },
  { name: "Microsoft Dynamics", category: "CRM", logo: "💼" },
  { name: "Monday CRM", category: "CRM", logo: "🎨" },
  { name: "Copper", category: "CRM", logo: "🔶" },
  { name: "Insightly", category: "CRM", logo: "👁️" },
  { name: "Nutshell", category: "CRM", logo: "🥜" },
  { name: "Keap", category: "CRM", logo: "🔐" },
  
  // Communication
  { name: "Slack", category: "Communication", logo: "💬" },
  { name: "Twilio", category: "Communication", logo: "📱" },
  { name: "Microsoft Teams", category: "Communication", logo: "👥" },
  { name: "Discord", category: "Communication", logo: "🎮" },
  { name: "WhatsApp Business", category: "Communication", logo: "📲" },
  { name: "Telegram", category: "Communication", logo: "✈️" },
  { name: "Vonage", category: "Communication", logo: "📞" },
  { name: "RingCentral", category: "Communication", logo: "🔔" },
  { name: "8x8", category: "Communication", logo: "☎️" },
  { name: "Zoom", category: "Communication", logo: "📹" },
  
  // Marketing
  { name: "Mailchimp", category: "Marketing", logo: "📧" },
  { name: "ActiveCampaign", category: "Marketing", logo: "🎯" },
  { name: "SendGrid", category: "Marketing", logo: "📮" },
  { name: "Constant Contact", category: "Marketing", logo: "📬" },
  { name: "Klaviyo", category: "Marketing", logo: "🎹" },
  { name: "ConvertKit", category: "Marketing", logo: "🔄" },
  { name: "GetResponse", category: "Marketing", logo: "📨" },
  { name: "Campaign Monitor", category: "Marketing", logo: "📊" },
  { name: "Omnisend", category: "Marketing", logo: "🎪" },
  { name: "Drip", category: "Marketing", logo: "💧" },
  
  // E-commerce
  { name: "Shopify", category: "E-commerce", logo: "🛒" },
  { name: "WooCommerce", category: "E-commerce", logo: "🏪" },
  { name: "BigCommerce", category: "E-commerce", logo: "🏬" },
  { name: "Magento", category: "E-commerce", logo: "🛍️" },
  { name: "PrestaShop", category: "E-commerce", logo: "🏭" },
  { name: "Square", category: "E-commerce", logo: "⬜" },
  { name: "Wix Stores", category: "E-commerce", logo: "🎪" },
  { name: "Squarespace Commerce", category: "E-commerce", logo: "⬛" },
  
  // Payment Processing
  { name: "Stripe", category: "Payment Processing", logo: "💳" },
  { name: "PayPal", category: "Payment Processing", logo: "💰" },
  { name: "Braintree", category: "Payment Processing", logo: "🌳" },
  { name: "Authorize.net", category: "Payment Processing", logo: "🔒" },
  { name: "Adyen", category: "Payment Processing", logo: "💎" },
  { name: "Klarna", category: "Payment Processing", logo: "🎀" },
  { name: "Afterpay", category: "Payment Processing", logo: "⏰" },
  { name: "Razorpay", category: "Payment Processing", logo: "⚡" },
  
  // Customer Support
  { name: "Zendesk", category: "Customer Support", logo: "🎧" },
  { name: "Freshdesk", category: "Customer Support", logo: "🆘" },
  { name: "Intercom", category: "Customer Support", logo: "💡" },
  { name: "Help Scout", category: "Customer Support", logo: "🔍" },
  { name: "Drift", category: "Customer Support", logo: "🌊" },
  { name: "LiveChat", category: "Customer Support", logo: "💬" },
  { name: "Tidio", category: "Customer Support", logo: "🎭" },
  { name: "Crisp", category: "Customer Support", logo: "✨" },
  { name: "Front", category: "Customer Support", logo: "📥" },
  { name: "Gorgias", category: "Customer Support", logo: "👾" },
  
  // Productivity
  { name: "Zapier", category: "Productivity", logo: "⚡" },
  { name: "Make (Integromat)", category: "Productivity", logo: "🔧" },
  { name: "Notion", category: "Productivity", logo: "📝" },
  { name: "Airtable", category: "Productivity", logo: "🗂️" },
  { name: "Trello", category: "Productivity", logo: "📋" },
  { name: "Asana", category: "Productivity", logo: "🎯" },
  { name: "Monday.com", category: "Productivity", logo: "📅" },
  { name: "ClickUp", category: "Productivity", logo: "⬆️" },
  { name: "Basecamp", category: "Productivity", logo: "⛺" },
  { name: "Todoist", category: "Productivity", logo: "✅" },
  
  // Analytics
  { name: "Google Analytics", category: "Analytics", logo: "📊" },
  { name: "Mixpanel", category: "Analytics", logo: "📈" },
  { name: "Amplitude", category: "Analytics", logo: "📉" },
  { name: "Segment", category: "Analytics", logo: "🔀" },
  { name: "Heap", category: "Analytics", logo: "⛰️" },
  { name: "Hotjar", category: "Analytics", logo: "🔥" },
  { name: "Crazy Egg", category: "Analytics", logo: "🥚" },
  { name: "Kissmetrics", category: "Analytics", logo: "💋" },
  
  // Accounting
  { name: "QuickBooks", category: "Accounting", logo: "📚" },
  { name: "Xero", category: "Accounting", logo: "💼" },
  { name: "FreshBooks", category: "Accounting", logo: "📗" },
  { name: "Wave", category: "Accounting", logo: "🌊" },
  { name: "Sage", category: "Accounting", logo: "🌿" },
  { name: "Zoho Books", category: "Accounting", logo: "📘" },
  { name: "Bill.com", category: "Accounting", logo: "🧾" },
  
  // Business Intelligence
  { name: "Tableau", category: "Business Intelligence", logo: "📊" },
  { name: "Power BI", category: "Business Intelligence", logo: "⚡" },
  { name: "Looker", category: "Business Intelligence", logo: "🔎" },
  { name: "Metabase", category: "Business Intelligence", logo: "📉" },
  { name: "Domo", category: "Business Intelligence", logo: "🎲" },
  
  // Developer Tools
  { name: "GitHub", category: "Developer Tools", logo: "🐙" },
  { name: "GitLab", category: "Developer Tools", logo: "🦊" },
  { name: "Bitbucket", category: "Developer Tools", logo: "🪣" },
  { name: "Jira", category: "Developer Tools", logo: "🔷" },
  { name: "Linear", category: "Developer Tools", logo: "📐" },
  { name: "Postman", category: "Developer Tools", logo: "📮" },
  { name: "Docker", category: "Developer Tools", logo: "🐋" },
  { name: "Jenkins", category: "Developer Tools", logo: "👨‍🔧" },
  
  // Forms & Surveys
  { name: "Typeform", category: "Forms & Surveys", logo: "📝" },
  { name: "Google Forms", category: "Forms & Surveys", logo: "📋" },
  { name: "SurveyMonkey", category: "Forms & Surveys", logo: "🐵" },
  { name: "Jotform", category: "Forms & Surveys", logo: "📄" },
  { name: "Formstack", category: "Forms & Surveys", logo: "📚" },
  { name: "Wufoo", category: "Forms & Surveys", logo: "🐶" },
  
  // Human Resources
  { name: "BambooHR", category: "Human Resources", logo: "🎋" },
  { name: "Workday", category: "Human Resources", logo: "☀️" },
  { name: "ADP", category: "Human Resources", logo: "👔" },
  { name: "Gusto", category: "Human Resources", logo: "💸" },
  { name: "Greenhouse", category: "Human Resources", logo: "🌱" },
  { name: "Lever", category: "Human Resources", logo: "🎚️" },
  
  // Project Management
  { name: "Jira", category: "Project Management", logo: "🎫" },
  { name: "Linear", category: "Project Management", logo: "📏" },
  { name: "Wrike", category: "Project Management", logo: "📊" },
  { name: "Smartsheet", category: "Project Management", logo: "📑" },
  { name: "TeamGantt", category: "Project Management", logo: "📈" },
];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Integrations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with 250+ popular tools and platforms using our no-code platform
          </p>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Categories Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="max-w-md mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-elegant cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 text-3xl">
                  {integration.logo}
                </div>
                <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium mb-3">
                  {integration.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seamlessly integrate with {integration.name}
                </p>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No integrations found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
