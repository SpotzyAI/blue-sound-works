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

// Logo URLs from CDN (simpleicons or similar)
const logoMap: Record<string, string> = {
  "Salesforce": "https://cdn.simpleicons.org/salesforce",
  "HubSpot": "https://cdn.simpleicons.org/hubspot",
  "Zoho CRM": "https://cdn.simpleicons.org/zoho",
  "Pipedrive": "https://cdn.simpleicons.org/pipedrive",
  "Microsoft Dynamics": "https://cdn.simpleicons.org/microsoft",
  "Monday CRM": "https://cdn.simpleicons.org/monday",
  "Slack": "https://cdn.simpleicons.org/slack",
  "Twilio": "https://cdn.simpleicons.org/twilio",
  "Microsoft Teams": "https://cdn.simpleicons.org/microsoftteams",
  "Discord": "https://cdn.simpleicons.org/discord",
  "WhatsApp Business": "https://cdn.simpleicons.org/whatsapp",
  "Telegram": "https://cdn.simpleicons.org/telegram",
  "Zoom": "https://cdn.simpleicons.org/zoom",
  "Google Meet": "https://cdn.simpleicons.org/googlemeet",
  "Skype": "https://cdn.simpleicons.org/skype",
  "Viber": "https://cdn.simpleicons.org/viber",
  "Line": "https://cdn.simpleicons.org/line",
  "WeChat": "https://cdn.simpleicons.org/wechat",
  "Signal": "https://cdn.simpleicons.org/signal",
  "Mattermost": "https://cdn.simpleicons.org/mattermost",
  "Rocket.Chat": "https://cdn.simpleicons.org/rocketdotchat",
  "Mailchimp": "https://cdn.simpleicons.org/mailchimp",
  "SendGrid": "https://cdn.simpleicons.org/sendgrid",
  "Klaviyo": "https://cdn.simpleicons.org/klaviyo",
  "ConvertKit": "https://cdn.simpleicons.org/convertkit",
  "Drip": "https://cdn.simpleicons.org/drip",
  "AWeber": "https://cdn.simpleicons.org/aweber",
  "MailerLite": "https://cdn.simpleicons.org/mailerlite",
  "Sendinblue": "https://cdn.simpleicons.org/brevo",
  "Mailjet": "https://cdn.simpleicons.org/mailjet",
  "Postmark": "https://cdn.simpleicons.org/postmark",
  "Shopify": "https://cdn.simpleicons.org/shopify",
  "WooCommerce": "https://cdn.simpleicons.org/woo",
  "BigCommerce": "https://cdn.simpleicons.org/bigcommerce",
  "Magento": "https://cdn.simpleicons.org/magento",
  "PrestaShop": "https://cdn.simpleicons.org/prestashop",
  "Square": "https://cdn.simpleicons.org/square",
  "Wix Stores": "https://cdn.simpleicons.org/wix",
  "Squarespace Commerce": "https://cdn.simpleicons.org/squarespace",
  "OpenCart": "https://cdn.simpleicons.org/opencart",
  "Stripe": "https://cdn.simpleicons.org/stripe",
  "PayPal": "https://cdn.simpleicons.org/paypal",
  "Klarna": "https://cdn.simpleicons.org/klarna",
  "Razorpay": "https://cdn.simpleicons.org/razorpay",
  "Zendesk": "https://cdn.simpleicons.org/zendesk",
  "Freshdesk": "https://cdn.simpleicons.org/freshdesk",
  "Intercom": "https://cdn.simpleicons.org/intercom",
  "Drift": "https://cdn.simpleicons.org/drift",
  "LiveChat": "https://cdn.simpleicons.org/livechat",
  "Tidio": "https://cdn.simpleicons.org/tidio",
  "Front": "https://cdn.simpleicons.org/front",
  "Zapier": "https://cdn.simpleicons.org/zapier",
  "Notion": "https://cdn.simpleicons.org/notion",
  "Airtable": "https://cdn.simpleicons.org/airtable",
  "Trello": "https://cdn.simpleicons.org/trello",
  "Asana": "https://cdn.simpleicons.org/asana",
  "Monday.com": "https://cdn.simpleicons.org/mondaydotcom",
  "ClickUp": "https://cdn.simpleicons.org/clickup",
  "Basecamp": "https://cdn.simpleicons.org/basecamp",
  "Todoist": "https://cdn.simpleicons.org/todoist",
  "Evernote": "https://cdn.simpleicons.org/evernote",
  "OneNote": "https://cdn.simpleicons.org/microsoftonenote",
  "Google Workspace": "https://cdn.simpleicons.org/google",
  "Microsoft 365": "https://cdn.simpleicons.org/microsoft",
  "Dropbox": "https://cdn.simpleicons.org/dropbox",
  "Box": "https://cdn.simpleicons.org/box",
  "OneDrive": "https://cdn.simpleicons.org/microsoftonedrive",
  "Google Drive": "https://cdn.simpleicons.org/googledrive",
  "Coda": "https://cdn.simpleicons.org/coda",
  "Confluence": "https://cdn.simpleicons.org/confluence",
  "Google Analytics": "https://cdn.simpleicons.org/googleanalytics",
  "Mixpanel": "https://cdn.simpleicons.org/mixpanel",
  "Amplitude": "https://cdn.simpleicons.org/amplitude",
  "Segment": "https://cdn.simpleicons.org/segment",
  "Heap": "https://cdn.simpleicons.org/heap",
  "Hotjar": "https://cdn.simpleicons.org/hotjar",
  "Matomo": "https://cdn.simpleicons.org/matomo",
  "Adobe Analytics": "https://cdn.simpleicons.org/adobe",
  "Fullstory": "https://cdn.simpleicons.org/fullstory",
  "LogRocket": "https://cdn.simpleicons.org/logrocket",
  "QuickBooks": "https://cdn.simpleicons.org/quickbooks",
  "Xero": "https://cdn.simpleicons.org/xero",
  "FreshBooks": "https://cdn.simpleicons.org/freshbooks",
  "Wave": "https://cdn.simpleicons.org/wave",
  "Sage": "https://cdn.simpleicons.org/sage",
  "Zoho Books": "https://cdn.simpleicons.org/zoho",
  "Tableau": "https://cdn.simpleicons.org/tableau",
  "Power BI": "https://cdn.simpleicons.org/powerbi",
  "Looker": "https://cdn.simpleicons.org/looker",
  "Metabase": "https://cdn.simpleicons.org/metabase",
  "Domo": "https://cdn.simpleicons.org/domo",
  "Sisense": "https://cdn.simpleicons.org/sisense",
  "QlikView": "https://cdn.simpleicons.org/qlik",
  "SAP BusinessObjects": "https://cdn.simpleicons.org/sap",
  "GitHub": "https://cdn.simpleicons.org/github",
  "GitLab": "https://cdn.simpleicons.org/gitlab",
  "Bitbucket": "https://cdn.simpleicons.org/bitbucket",
  "Jira": "https://cdn.simpleicons.org/jira",
  "Linear": "https://cdn.simpleicons.org/linear",
  "Postman": "https://cdn.simpleicons.org/postman",
  "Docker": "https://cdn.simpleicons.org/docker",
  "Jenkins": "https://cdn.simpleicons.org/jenkins",
  "CircleCI": "https://cdn.simpleicons.org/circleci",
  "Travis CI": "https://cdn.simpleicons.org/travisci",
  "Azure DevOps": "https://cdn.simpleicons.org/azuredevops",
  "Kubernetes": "https://cdn.simpleicons.org/kubernetes",
  "Terraform": "https://cdn.simpleicons.org/terraform",
  "Ansible": "https://cdn.simpleicons.org/ansible",
  "Datadog": "https://cdn.simpleicons.org/datadog",
  "New Relic": "https://cdn.simpleicons.org/newrelic",
  "Sentry": "https://cdn.simpleicons.org/sentry",
  "PagerDuty": "https://cdn.simpleicons.org/pagerduty",
  "Splunk": "https://cdn.simpleicons.org/splunk",
  "Typeform": "https://cdn.simpleicons.org/typeform",
  "Google Forms": "https://cdn.simpleicons.org/googleforms",
  "SurveyMonkey": "https://cdn.simpleicons.org/surveymonkey",
  "Jotform": "https://cdn.simpleicons.org/jotform",
  "Formstack": "https://cdn.simpleicons.org/formstack",
  "BambooHR": "https://cdn.simpleicons.org/bamboohr",
  "Workday": "https://cdn.simpleicons.org/workday",
  "ADP": "https://cdn.simpleicons.org/adp",
  "Gusto": "https://cdn.simpleicons.org/gusto",
  "Greenhouse": "https://cdn.simpleicons.org/greenhouse",
  "Lever": "https://cdn.simpleicons.org/lever",
  "SAP SuccessFactors": "https://cdn.simpleicons.org/sap",
  "Smartsheet": "https://cdn.simpleicons.org/smartsheet",
  "Teamwork": "https://cdn.simpleicons.org/teamwork",
};

const integrations = [
  // CRM
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Zoho CRM", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Microsoft Dynamics", category: "CRM" },
  { name: "Monday CRM", category: "CRM" },
  { name: "Copper", category: "CRM" },
  { name: "Insightly", category: "CRM" },
  { name: "Nutshell", category: "CRM" },
  { name: "Keap", category: "CRM" },
  { name: "Close", category: "CRM" },
  { name: "Nimble", category: "CRM" },
  { name: "Capsule", category: "CRM" },
  { name: "SugarCRM", category: "CRM" },
  { name: "Agile CRM", category: "CRM" },
  
  // Communication
  { name: "Slack", category: "Communication" },
  { name: "Twilio", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Discord", category: "Communication" },
  { name: "WhatsApp Business", category: "Communication" },
  { name: "Telegram", category: "Communication" },
  { name: "Vonage", category: "Communication" },
  { name: "RingCentral", category: "Communication" },
  { name: "8x8", category: "Communication" },
  { name: "Zoom", category: "Communication" },
  { name: "Google Meet", category: "Communication" },
  { name: "GoToMeeting", category: "Communication" },
  { name: "WebEx", category: "Communication" },
  { name: "Skype", category: "Communication" },
  { name: "Viber", category: "Communication" },
  { name: "Line", category: "Communication" },
  { name: "WeChat", category: "Communication" },
  { name: "Signal", category: "Communication" },
  { name: "Mattermost", category: "Communication" },
  { name: "Rocket.Chat", category: "Communication" },
  
  // Marketing
  { name: "Mailchimp", category: "Marketing" },
  { name: "ActiveCampaign", category: "Marketing" },
  { name: "SendGrid", category: "Marketing" },
  { name: "Constant Contact", category: "Marketing" },
  { name: "Klaviyo", category: "Marketing" },
  { name: "ConvertKit", category: "Marketing" },
  { name: "GetResponse", category: "Marketing" },
  { name: "Campaign Monitor", category: "Marketing" },
  { name: "Omnisend", category: "Marketing" },
  { name: "Drip", category: "Marketing" },
  { name: "AWeber", category: "Marketing" },
  { name: "MailerLite", category: "Marketing" },
  { name: "Sendinblue", category: "Marketing" },
  { name: "Moosend", category: "Marketing" },
  { name: "Benchmark Email", category: "Marketing" },
  { name: "EmailOctopus", category: "Marketing" },
  { name: "Mailjet", category: "Marketing" },
  { name: "SendPulse", category: "Marketing" },
  { name: "Elastic Email", category: "Marketing" },
  { name: "Postmark", category: "Marketing" },
  
  // E-commerce
  { name: "Shopify", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "BigCommerce", category: "E-commerce" },
  { name: "Magento", category: "E-commerce" },
  { name: "PrestaShop", category: "E-commerce" },
  { name: "Square", category: "E-commerce" },
  { name: "Wix Stores", category: "E-commerce" },
  { name: "Squarespace Commerce", category: "E-commerce" },
  { name: "OpenCart", category: "E-commerce" },
  { name: "3dcart", category: "E-commerce" },
  { name: "Ecwid", category: "E-commerce" },
  { name: "Shift4Shop", category: "E-commerce" },
  { name: "Volusion", category: "E-commerce" },
  { name: "Big Cartel", category: "E-commerce" },
  { name: "CoreCommerce", category: "E-commerce" },
  
  // Payment Processing
  { name: "Stripe", category: "Payment Processing" },
  { name: "PayPal", category: "Payment Processing" },
  { name: "Braintree", category: "Payment Processing" },
  { name: "Authorize.net", category: "Payment Processing" },
  { name: "Adyen", category: "Payment Processing" },
  { name: "Klarna", category: "Payment Processing" },
  { name: "Afterpay", category: "Payment Processing" },
  { name: "Razorpay", category: "Payment Processing" },
  { name: "Square Payments", category: "Payment Processing" },
  { name: "Worldpay", category: "Payment Processing" },
  { name: "2Checkout", category: "Payment Processing" },
  { name: "Payoneer", category: "Payment Processing" },
  { name: "Skrill", category: "Payment Processing" },
  { name: "Mollie", category: "Payment Processing" },
  { name: "GoCardless", category: "Payment Processing" },
  { name: "PayU", category: "Payment Processing" },
  
  // Customer Support
  { name: "Zendesk", category: "Customer Support" },
  { name: "Freshdesk", category: "Customer Support" },
  { name: "Intercom", category: "Customer Support" },
  { name: "Help Scout", category: "Customer Support" },
  { name: "Drift", category: "Customer Support" },
  { name: "LiveChat", category: "Customer Support" },
  { name: "Tidio", category: "Customer Support" },
  { name: "Crisp", category: "Customer Support" },
  { name: "Front", category: "Customer Support" },
  { name: "Gorgias", category: "Customer Support" },
  { name: "Re:amaze", category: "Customer Support" },
  { name: "Groove", category: "Customer Support" },
  { name: "Helpshift", category: "Customer Support" },
  { name: "Gladly", category: "Customer Support" },
  { name: "Kustomer", category: "Customer Support" },
  { name: "Kayako", category: "Customer Support" },
  { name: "Zoho Desk", category: "Customer Support" },
  { name: "HappyFox", category: "Customer Support" },
  
  // Productivity
  { name: "Zapier", category: "Productivity" },
  { name: "Make (Integromat)", category: "Productivity" },
  { name: "Notion", category: "Productivity" },
  { name: "Airtable", category: "Productivity" },
  { name: "Trello", category: "Productivity" },
  { name: "Asana", category: "Productivity" },
  { name: "Monday.com", category: "Productivity" },
  { name: "ClickUp", category: "Productivity" },
  { name: "Basecamp", category: "Productivity" },
  { name: "Todoist", category: "Productivity" },
  { name: "Evernote", category: "Productivity" },
  { name: "OneNote", category: "Productivity" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Dropbox", category: "Productivity" },
  { name: "Box", category: "Productivity" },
  { name: "OneDrive", category: "Productivity" },
  { name: "Google Drive", category: "Productivity" },
  { name: "Coda", category: "Productivity" },
  { name: "Confluence", category: "Productivity" },
  
  // Analytics
  { name: "Google Analytics", category: "Analytics" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "Amplitude", category: "Analytics" },
  { name: "Segment", category: "Analytics" },
  { name: "Heap", category: "Analytics" },
  { name: "Hotjar", category: "Analytics" },
  { name: "Crazy Egg", category: "Analytics" },
  { name: "Kissmetrics", category: "Analytics" },
  { name: "Piwik PRO", category: "Analytics" },
  { name: "Matomo", category: "Analytics" },
  { name: "Adobe Analytics", category: "Analytics" },
  { name: "Clicky", category: "Analytics" },
  { name: "Woopra", category: "Analytics" },
  { name: "Chartbeat", category: "Analytics" },
  { name: "Fullstory", category: "Analytics" },
  { name: "LogRocket", category: "Analytics" },
  
  // Accounting
  { name: "QuickBooks", category: "Accounting" },
  { name: "Xero", category: "Accounting" },
  { name: "FreshBooks", category: "Accounting" },
  { name: "Wave", category: "Accounting" },
  { name: "Sage", category: "Accounting" },
  { name: "Zoho Books", category: "Accounting" },
  { name: "Bill.com", category: "Accounting" },
  { name: "Expensify", category: "Accounting" },
  { name: "Receipt Bank", category: "Accounting" },
  { name: "KashFlow", category: "Accounting" },
  { name: "MYOB", category: "Accounting" },
  { name: "NetSuite", category: "Accounting" },
  { name: "Odoo", category: "Accounting" },
  
  // Business Intelligence
  { name: "Tableau", category: "Business Intelligence" },
  { name: "Power BI", category: "Business Intelligence" },
  { name: "Looker", category: "Business Intelligence" },
  { name: "Metabase", category: "Business Intelligence" },
  { name: "Domo", category: "Business Intelligence" },
  { name: "Sisense", category: "Business Intelligence" },
  { name: "QlikView", category: "Business Intelligence" },
  { name: "SAP BusinessObjects", category: "Business Intelligence" },
  { name: "MicroStrategy", category: "Business Intelligence" },
  { name: "Yellowfin", category: "Business Intelligence" },
  { name: "Klipfolio", category: "Business Intelligence" },
  { name: "Chartio", category: "Business Intelligence" },
  { name: "Mode Analytics", category: "Business Intelligence" },
  { name: "Redash", category: "Business Intelligence" },
  
  // Developer Tools
  { name: "GitHub", category: "Developer Tools" },
  { name: "GitLab", category: "Developer Tools" },
  { name: "Bitbucket", category: "Developer Tools" },
  { name: "Jira", category: "Developer Tools" },
  { name: "Linear", category: "Developer Tools" },
  { name: "Postman", category: "Developer Tools" },
  { name: "Docker", category: "Developer Tools" },
  { name: "Jenkins", category: "Developer Tools" },
  { name: "CircleCI", category: "Developer Tools" },
  { name: "Travis CI", category: "Developer Tools" },
  { name: "Azure DevOps", category: "Developer Tools" },
  { name: "Kubernetes", category: "Developer Tools" },
  { name: "Terraform", category: "Developer Tools" },
  { name: "Ansible", category: "Developer Tools" },
  { name: "Datadog", category: "Developer Tools" },
  { name: "New Relic", category: "Developer Tools" },
  { name: "Sentry", category: "Developer Tools" },
  { name: "PagerDuty", category: "Developer Tools" },
  { name: "Splunk", category: "Developer Tools" },
  { name: "Sumo Logic", category: "Developer Tools" },
  
  // Forms & Surveys
  { name: "Typeform", category: "Forms & Surveys" },
  { name: "Google Forms", category: "Forms & Surveys" },
  { name: "SurveyMonkey", category: "Forms & Surveys" },
  { name: "Jotform", category: "Forms & Surveys" },
  { name: "Formstack", category: "Forms & Surveys" },
  { name: "Wufoo", category: "Forms & Surveys" },
  { name: "Cognito Forms", category: "Forms & Surveys" },
  { name: "123FormBuilder", category: "Forms & Surveys" },
  { name: "Formsite", category: "Forms & Surveys" },
  { name: "Zoho Forms", category: "Forms & Surveys" },
  { name: "FormAssembly", category: "Forms & Surveys" },
  { name: "Paperform", category: "Forms & Surveys" },
  { name: "SurveyGizmo", category: "Forms & Surveys" },
  { name: "Qualtrics", category: "Forms & Surveys" },
  
  // Human Resources
  { name: "BambooHR", category: "Human Resources" },
  { name: "Workday", category: "Human Resources" },
  { name: "ADP", category: "Human Resources" },
  { name: "Gusto", category: "Human Resources" },
  { name: "Greenhouse", category: "Human Resources" },
  { name: "Lever", category: "Human Resources" },
  { name: "JazzHR", category: "Human Resources" },
  { name: "Workable", category: "Human Resources" },
  { name: "Zenefits", category: "Human Resources" },
  { name: "Namely", category: "Human Resources" },
  { name: "Rippling", category: "Human Resources" },
  { name: "Personio", category: "Human Resources" },
  { name: "HiBob", category: "Human Resources" },
  { name: "CharlieHR", category: "Human Resources" },
  { name: "SAP SuccessFactors", category: "Human Resources" },
  { name: "Paylocity", category: "Human Resources" },
  
  // Project Management
  { name: "Jira", category: "Project Management" },
  { name: "Linear", category: "Project Management" },
  { name: "Wrike", category: "Project Management" },
  { name: "Smartsheet", category: "Project Management" },
  { name: "TeamGantt", category: "Project Management" },
  { name: "Teamwork", category: "Project Management" },
  { name: "Workfront", category: "Project Management" },
  { name: "LiquidPlanner", category: "Project Management" },
  { name: "ProjectManager", category: "Project Management" },
  { name: "Clarizen", category: "Project Management" },
  { name: "ProWorkflow", category: "Project Management" },
  { name: "Mavenlink", category: "Project Management" },
  { name: "Function Point", category: "Project Management" },
  { name: "Podio", category: "Project Management" },
  { name: "Scoro", category: "Project Management" },
  { name: "Freedcamp", category: "Project Management" },
  { name: "Redbooth", category: "Project Management" },
  { name: "Paymo", category: "Project Management" },
  { name: "nTask", category: "Project Management" },
  { name: "ProofHub", category: "Project Management" },
];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLogo = (integrationName: string) => {
    const logoUrl = logoMap[integrationName];
    if (logoUrl) {
      return (
        <img 
          src={logoUrl} 
          alt={`${integrationName} logo`}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            // Fallback to first letter if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const span = document.createElement('span');
            span.className = 'text-2xl font-bold text-primary-foreground';
            span.textContent = integrationName.charAt(0);
            target.parentElement?.appendChild(span);
          }}
        />
      );
    }
    // Fallback to first letter
    return <span className="text-2xl font-bold text-primary-foreground">{integrationName.charAt(0)}</span>;
  };

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
            Connect with 265+ popular tools and platforms using our no-code platform
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
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  {getLogo(integration.name)}
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
