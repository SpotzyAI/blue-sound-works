import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All Categories",
  "Marketing",
  "General",
  "Accounting",
  "Communication",
  "Productivity",
  "Core",
  "Commerce",
  "Artificial intelligence",
  "Developer tools",
  "Business intelligence",
  "Customer support",
  "Content and files",
  "Sales and crm",
  "Forms and surveys",
  "Human resources",
  "Payment processing",
];

// Logo map with SimpleIcons CDN URLs
const logoMap: Record<string, string> = {
  // A
  "ActiveCampaign": "https://cdn.simpleicons.org/activecampaign",
  "Adalo": "https://cdn.simpleicons.org/adalo",
  "Affinity": "https://cdn.simpleicons.org/affinity",
  "Agendor": "https://cdn.simpleicons.org/agendor",
  "Ahrefs": "https://cdn.simpleicons.org/ahrefs",
  "Airtable": "https://cdn.simpleicons.org/airtable",
  "Anthropic": "https://cdn.simpleicons.org/anthropic",
  "AnyHook GraphQL": "https://cdn.simpleicons.org/graphql",
  "API4AI": "https://cdn.simpleicons.org/api",
  "Asana": "https://cdn.simpleicons.org/asana",
  "Atera": "https://cdn.simpleicons.org/atera",
  "Auth0": "https://cdn.simpleicons.org/auth0",
  "Autopilot": "https://cdn.simpleicons.org/autopilot",
  
  // B
  "Bannerbear": "https://cdn.simpleicons.org/bannerbear",
  "Baserow": "https://cdn.simpleicons.org/baserow",
  "Bettermode": "https://cdn.simpleicons.org/bettermode",
  "BigCommerce": "https://cdn.simpleicons.org/bigcommerce",
  "Blogger": "https://cdn.simpleicons.org/blogger",
  "Brave Search": "https://cdn.simpleicons.org/brave",
  "Brex": "https://cdn.simpleicons.org/brex",
  "Brevo": "https://cdn.simpleicons.org/brevo",
  
  // C
  "Cal.com": "https://cdn.simpleicons.org/caldotcom",
  "Calendly": "https://cdn.simpleicons.org/calendly",
  "Chargebee": "https://cdn.simpleicons.org/chargebee",
  "ChatBot": "https://cdn.simpleicons.org/chatbot",
  "Chatkick": "https://cdn.simpleicons.org/chat",
  "Clearout": "https://cdn.simpleicons.org/clearout",
  "ClickSend": "https://cdn.simpleicons.org/clicksend",
  "ClickUp": "https://cdn.simpleicons.org/clickup",
  "Close": "https://cdn.simpleicons.org/close",
  "Cloudflare": "https://cdn.simpleicons.org/cloudflare",
  "Coda": "https://cdn.simpleicons.org/coda",
  "Constant Contact": "https://cdn.simpleicons.org/constantcontact",
  "Contentful": "https://cdn.simpleicons.org/contentful",
  "Copper": "https://cdn.simpleicons.org/copper",
  "Crisp": "https://cdn.simpleicons.org/crisp",
  "Crowdin": "https://cdn.simpleicons.org/crowdin",
  "Customer.io": "https://cdn.simpleicons.org/customerdotio",
  
  // D
  "Dailymotion": "https://cdn.simpleicons.org/dailymotion",
  "Dart": "https://cdn.simpleicons.org/dart",
  "Datadog": "https://cdn.simpleicons.org/datadog",
  "Dato CMS": "https://cdn.simpleicons.org/datocms",
  "DeepL": "https://cdn.simpleicons.org/deepl",
  "Delay": "https://cdn.simpleicons.org/timer",
  "Directus": "https://cdn.simpleicons.org/directus",
  "Discord": "https://cdn.simpleicons.org/discord",
  "Discourse": "https://cdn.simpleicons.org/discourse",
  "Disqus": "https://cdn.simpleicons.org/disqus",
  "Docusign": "https://cdn.simpleicons.org/docusign",
  "Dribbble": "https://cdn.simpleicons.org/dribbble",
  "Dropbox": "https://cdn.simpleicons.org/dropbox",
  "Droxy": "https://cdn.simpleicons.org/robot",
  
  // E
  "ElevenLabs": "https://cdn.simpleicons.org/elevenlabs",
  "EspoCRM": "https://cdn.simpleicons.org/espocrm",
  "Eventbrite": "https://cdn.simpleicons.org/eventbrite",
  "Extract": "https://cdn.simpleicons.org/extract",
  
  // F
  "Facebook Leads": "https://cdn.simpleicons.org/facebook",
  "Facebook Pages": "https://cdn.simpleicons.org/facebook",
  "Figma": "https://cdn.simpleicons.org/figma",
  "Filter": "https://cdn.simpleicons.org/filter",
  "Firebase": "https://cdn.simpleicons.org/firebase",
  "FreshBooks": "https://cdn.simpleicons.org/freshbooks",
  "Freshdesk": "https://cdn.simpleicons.org/freshdesk",
  "Freshping": "https://cdn.simpleicons.org/freshping",
  "Freshsales": "https://cdn.simpleicons.org/freshsales",
  "Freshservice": "https://cdn.simpleicons.org/freshservice",
  "Front": "https://cdn.simpleicons.org/front",
  
  // G
  "Gameball": "https://cdn.simpleicons.org/game",
  "Ghost": "https://cdn.simpleicons.org/ghost",
  "GitHub": "https://cdn.simpleicons.org/github",
  "GitLab": "https://cdn.simpleicons.org/gitlab",
  "Gmail": "https://cdn.simpleicons.org/gmail",
  "GoTo Webinar": "https://cdn.simpleicons.org/gotowebinar",
  "Google Calendar": "https://cdn.simpleicons.org/googlecalendar",
  "Google Contacts": "https://cdn.simpleicons.org/googlecontacts",
  "Google Drive": "https://cdn.simpleicons.org/googledrive",
  "Google Gemini": "https://cdn.simpleicons.org/googlegemini",
  "Google Maps": "https://cdn.simpleicons.org/googlemaps",
  "Google Sheets": "https://cdn.simpleicons.org/googlesheets",
  "Google Tasks": "https://cdn.simpleicons.org/googletasks",
  "Gong": "https://cdn.simpleicons.org/gong",
  "Grist": "https://cdn.simpleicons.org/grist",
  "Groq": "https://cdn.simpleicons.org/groq",
  "Gumroad": "https://cdn.simpleicons.org/gumroad",
  
  // H
  "Harvest": "https://cdn.simpleicons.org/harvest",
  "HelpScout": "https://cdn.simpleicons.org/helpscout",
  "Heroku": "https://cdn.simpleicons.org/heroku",
  "HubSpot": "https://cdn.simpleicons.org/hubspot",
  "Humanitix": "https://cdn.simpleicons.org/humanitix",
  "HTTP": "https://cdn.simpleicons.org/http",
  
  // I
  "If-else": "https://cdn.simpleicons.org/if",
  "Instagram": "https://cdn.simpleicons.org/instagram",
  "Intercom": "https://cdn.simpleicons.org/intercom",
  
  // J
  "Jira": "https://cdn.simpleicons.org/jira",
  "JotForm": "https://cdn.simpleicons.org/jotform",
  "JSON": "https://cdn.simpleicons.org/json",
  
  // K
  "Keap": "https://cdn.simpleicons.org/keap",
  "Klaviyo": "https://cdn.simpleicons.org/klaviyo",
  
  // L
  "LaGrowthMachine": "https://cdn.simpleicons.org/growth",
  "Lemlist": "https://cdn.simpleicons.org/lemlist",
  "Lemonsqueezy": "https://cdn.simpleicons.org/lemonsqueezy",
  "Linear": "https://cdn.simpleicons.org/linear",
  "LinkedIn": "https://cdn.simpleicons.org/linkedin",
  "Loop": "https://cdn.simpleicons.org/loop",
  
  // M
  "Mailchimp": "https://cdn.simpleicons.org/mailchimp",
  "Maileroo": "https://cdn.simpleicons.org/mail",
  "Mailgun": "https://cdn.simpleicons.org/mailgun",
  "Make": "https://cdn.simpleicons.org/make",
  "Mautic": "https://cdn.simpleicons.org/mautic",
  "Medium": "https://cdn.simpleicons.org/medium",
  "Merge": "https://cdn.simpleicons.org/merge",
  "Meta": "https://cdn.simpleicons.org/meta",
  "Metabase": "https://cdn.simpleicons.org/metabase",
  "Microsoft 365": "https://cdn.simpleicons.org/microsoft365",
  "Microsoft Dynamics": "https://cdn.simpleicons.org/microsoftdynamics365",
  "Microsoft Outlook": "https://cdn.simpleicons.org/microsoftoutlook",
  "Microsoft SQL Server": "https://cdn.simpleicons.org/microsoftsqlserver",
  "Microsoft Teams": "https://cdn.simpleicons.org/microsoftteams",
  "Mistral": "https://cdn.simpleicons.org/mistral",
  "Monday": "https://cdn.simpleicons.org/mondaydotcom",
  "MongoDB": "https://cdn.simpleicons.org/mongodb",
  "Motion": "https://cdn.simpleicons.org/motion",
  "MySQL": "https://cdn.simpleicons.org/mysql",
  
  // N
  "NocoDB": "https://cdn.simpleicons.org/nocodb",
  "Notion": "https://cdn.simpleicons.org/notion",
  
  // O
  "Odoo": "https://cdn.simpleicons.org/odoo",
  "OneSignal": "https://cdn.simpleicons.org/onesignal",
  "OneDrive": "https://cdn.simpleicons.org/microsoftonedrive",
  "OpenAI": "https://cdn.simpleicons.org/openai",
  "OpenRouter": "https://cdn.simpleicons.org/openrouter",
  "Orbit": "https://cdn.simpleicons.org/orbit",
  
  // P
  "Paddle": "https://cdn.simpleicons.org/paddle",
  "PayPal": "https://cdn.simpleicons.org/paypal",
  "PDF": "https://cdn.simpleicons.org/adobeacrobatreader",
  "Perplexity": "https://cdn.simpleicons.org/perplexity",
  "Pexels": "https://cdn.simpleicons.org/pexels",
  "Pinecone": "https://cdn.simpleicons.org/pinecone",
  "Pipedrive": "https://cdn.simpleicons.org/pipedrive",
  "Plivo": "https://cdn.simpleicons.org/plivo",
  "Plunk": "https://cdn.simpleicons.org/plunk",
  "Postgres": "https://cdn.simpleicons.org/postgresql",
  "Postmark": "https://cdn.simpleicons.org/postmark",
  "Product Hunt": "https://cdn.simpleicons.org/producthunt",
  
  // Q
  "Qdrant": "https://cdn.simpleicons.org/qdrant",
  "QuickBooks": "https://cdn.simpleicons.org/quickbooks",
  
  // R
  "Reddit": "https://cdn.simpleicons.org/reddit",
  "Resend": "https://cdn.simpleicons.org/resend",
  "RSS Feed": "https://cdn.simpleicons.org/rss",
  
  // S
  "Salesforce": "https://cdn.simpleicons.org/salesforce",
  "Salesloft": "https://cdn.simpleicons.org/salesloft",
  "Schedule": "https://cdn.simpleicons.org/calendar",
  "Segment": "https://cdn.simpleicons.org/segment",
  "Sellsy": "https://cdn.simpleicons.org/sellsy",
  "SendGrid": "https://cdn.simpleicons.org/sendgrid",
  "Sendinblue": "https://cdn.simpleicons.org/brevo",
  "Sendlane": "https://cdn.simpleicons.org/sendlane",
  "ServiceNow": "https://cdn.simpleicons.org/servicenow",
  "SharePoint": "https://cdn.simpleicons.org/microsoftsharepoint",
  "Shopify": "https://cdn.simpleicons.org/shopify",
  "SimplePDF": "https://cdn.simpleicons.org/adobeacrobatreader",
  "Slack": "https://cdn.simpleicons.org/slack",
  "Smartsheet": "https://cdn.simpleicons.org/smartsheet",
  "Snapchat": "https://cdn.simpleicons.org/snapchat",
  "Split": "https://cdn.simpleicons.org/split",
  "Spotify": "https://cdn.simpleicons.org/spotify",
  "Squarespace": "https://cdn.simpleicons.org/squarespace",
  "Stack Exchange": "https://cdn.simpleicons.org/stackexchange",
  "Storyblok": "https://cdn.simpleicons.org/storyblok",
  "Strapi": "https://cdn.simpleicons.org/strapi",
  "Stripe": "https://cdn.simpleicons.org/stripe",
  "Supabase": "https://cdn.simpleicons.org/supabase",
  "SurveyMonkey": "https://cdn.simpleicons.org/surveymonkey",
  "SurveySparrow": "https://cdn.simpleicons.org/surveysparrow",
  
  // T
  "Tableau": "https://cdn.simpleicons.org/tableau",
  "Telegram": "https://cdn.simpleicons.org/telegram",
  "Telnyx": "https://cdn.simpleicons.org/telnyx",
  "Todoist": "https://cdn.simpleicons.org/todoist",
  "Together AI": "https://cdn.simpleicons.org/ai",
  "Trello": "https://cdn.simpleicons.org/trello",
  "Twilio": "https://cdn.simpleicons.org/twilio",
  "Twitter": "https://cdn.simpleicons.org/x",
  "Typebot": "https://cdn.simpleicons.org/typebot",
  "Typeform": "https://cdn.simpleicons.org/typeform",
  
  // U
  "Unisender": "https://cdn.simpleicons.org/unisender",
  "Upstash": "https://cdn.simpleicons.org/upstash",
  "Utility AI": "https://cdn.simpleicons.org/ai",
  
  // V
  "Variables": "https://cdn.simpleicons.org/variable",
  "Vero": "https://cdn.simpleicons.org/vero",
  "Village": "https://cdn.simpleicons.org/village",
  "Vimeo": "https://cdn.simpleicons.org/vimeo",
  "Vonage": "https://cdn.simpleicons.org/vonage",
  "Vtiger": "https://cdn.simpleicons.org/vtiger",
  
  // W
  "Wachat": "https://cdn.simpleicons.org/wechat",
  "Webflow": "https://cdn.simpleicons.org/webflow",
  "Webhook": "https://cdn.simpleicons.org/webhook",
  "Webling": "https://cdn.simpleicons.org/webling",
  "Wedof": "https://cdn.simpleicons.org/wedof",
  "WhatsApp Business": "https://cdn.simpleicons.org/whatsapp",
  "Whatsable": "https://cdn.simpleicons.org/whatsapp",
  "WooCommerce": "https://cdn.simpleicons.org/woocommerce",
  "Wootric": "https://cdn.simpleicons.org/wootric",
  "WordPress": "https://cdn.simpleicons.org/wordpress",
  
  // X
  "Xero": "https://cdn.simpleicons.org/xero",
  "XML": "https://cdn.simpleicons.org/xml",
  
  // Y
  "YouTube": "https://cdn.simpleicons.org/youtube",
  
  // Z
  "Zagomail": "https://cdn.simpleicons.org/mail",
  "Zendesk": "https://cdn.simpleicons.org/zendesk",
  "ZeroBounce": "https://cdn.simpleicons.org/zerobounce",
  "Zoho Books": "https://cdn.simpleicons.org/zoho",
  "Zoho CRM": "https://cdn.simpleicons.org/zoho",
  "Zoho Invoice": "https://cdn.simpleicons.org/zoho",
  "Zoom": "https://cdn.simpleicons.org/zoom",
  "Zoo": "https://cdn.simpleicons.org/zoo",
  "Zuora": "https://cdn.simpleicons.org/zuora",
};

// Complete list of integrations matching Autocalls (265 total)
const integrations = [
  // Marketing (alphabetically)
  { name: "ActiveCampaign", category: "Marketing" },
  { name: "Autopilot", category: "Marketing" },
  { name: "Bettermode", category: "Marketing" },
  { name: "Blogger", category: "Marketing" },
  { name: "Constant Contact", category: "Marketing" },
  { name: "Contentful", category: "Marketing" },
  { name: "Customer.io", category: "Marketing" },
  { name: "Facebook Leads", category: "Marketing" },
  { name: "Facebook Pages", category: "Marketing" },
  { name: "Gong", category: "Marketing" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Instagram", category: "Marketing" },
  { name: "Klaviyo", category: "Marketing" },
  { name: "LaGrowthMachine", category: "Marketing" },
  { name: "Lemlist", category: "Marketing" },
  { name: "LinkedIn", category: "Marketing" },
  { name: "Mailchimp", category: "Marketing" },
  { name: "Maileroo", category: "Marketing" },
  { name: "Mailgun", category: "Marketing" },
  { name: "Mautic", category: "Marketing" },
  { name: "Medium", category: "Marketing" },
  { name: "Postmark", category: "Marketing" },
  { name: "Product Hunt", category: "Marketing" },
  { name: "Reddit", category: "Marketing" },
  { name: "Resend", category: "Marketing" },
  { name: "Salesloft", category: "Marketing" },
  { name: "SendGrid", category: "Marketing" },
  { name: "Sendinblue", category: "Marketing" },
  { name: "Sendlane", category: "Marketing" },
  { name: "Snapchat", category: "Marketing" },
  { name: "Spotify", category: "Marketing" },
  { name: "Squarespace", category: "Marketing" },
  { name: "Twitter", category: "Marketing" },
  { name: "Unisender", category: "Marketing" },
  { name: "Vero", category: "Marketing" },
  { name: "Webflow", category: "Marketing" },
  { name: "WordPress", category: "Marketing" },
  { name: "Zagomail", category: "Marketing" },
  
  // General
  { name: "API4AI", category: "General" },
  { name: "Brave Search", category: "General" },
  { name: "Clearout", category: "General" },
  { name: "Dailymotion", category: "General" },
  { name: "Dato CMS", category: "General" },
  { name: "Gameball", category: "General" },
  { name: "JSON", category: "General" },
  { name: "PDF", category: "General" },
  { name: "RSS Feed", category: "General" },
  { name: "Stack Exchange", category: "General" },
  { name: "Wachat", category: "General" },
  { name: "WhatsApp Business", category: "General" },
  { name: "Whatsable", category: "General" },
  { name: "Wootric", category: "General" },
  { name: "XML", category: "General" },
  { name: "ZeroBounce", category: "General" },
  { name: "AnyHook GraphQL", category: "General" },
  
  // Accounting
  { name: "FreshBooks", category: "Accounting" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "Xero", category: "Accounting" },
  { name: "Zoho Books", category: "Accounting" },
  { name: "Zoho Invoice", category: "Accounting" },
  
  // Communication
  { name: "Discord", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Plivo", category: "Communication" },
  { name: "Slack", category: "Communication" },
  { name: "Telegram", category: "Communication" },
  { name: "Telnyx", category: "Communication" },
  { name: "Twilio", category: "Communication" },
  { name: "Vonage", category: "Communication" },
  { name: "Zoom", category: "Communication" },
  
  // Productivity
  { name: "Airtable", category: "Productivity" },
  { name: "Asana", category: "Productivity" },
  { name: "Cal.com", category: "Productivity" },
  { name: "Calendly", category: "Productivity" },
  { name: "ClickUp", category: "Productivity" },
  { name: "Coda", category: "Productivity" },
  { name: "Dropbox", category: "Productivity" },
  { name: "GitHub", category: "Productivity" },
  { name: "GitLab", category: "Productivity" },
  { name: "Gmail", category: "Productivity" },
  { name: "Google Calendar", category: "Productivity" },
  { name: "Google Contacts", category: "Productivity" },
  { name: "Google Drive", category: "Productivity" },
  { name: "Google Maps", category: "Productivity" },
  { name: "Google Sheets", category: "Productivity" },
  { name: "Google Tasks", category: "Productivity" },
  { name: "GoTo Webinar", category: "Productivity" },
  { name: "Harvest", category: "Productivity" },
  { name: "Jira", category: "Productivity" },
  { name: "Linear", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Microsoft Outlook", category: "Productivity" },
  { name: "Monday", category: "Productivity" },
  { name: "Motion", category: "Productivity" },
  { name: "Notion", category: "Productivity" },
  { name: "OneDrive", category: "Productivity" },
  { name: "SharePoint", category: "Productivity" },
  { name: "Smartsheet", category: "Productivity" },
  { name: "Todoist", category: "Productivity" },
  { name: "Trello", category: "Productivity" },
  { name: "Typeform", category: "Productivity" },
  { name: "Village", category: "Productivity" },
  { name: "Webling", category: "Productivity" },
  
  // Core
  { name: "Delay", category: "Core" },
  { name: "Extract", category: "Core" },
  { name: "Filter", category: "Core" },
  { name: "HTTP", category: "Core" },
  { name: "If-else", category: "Core" },
  { name: "Loop", category: "Core" },
  { name: "Merge", category: "Core" },
  { name: "Schedule", category: "Core" },
  { name: "Split", category: "Core" },
  { name: "Variables", category: "Core" },
  { name: "Webhook", category: "Core" },
  
  // Commerce
  { name: "BigCommerce", category: "Commerce" },
  { name: "Gumroad", category: "Commerce" },
  { name: "Lemonsqueezy", category: "Commerce" },
  { name: "Shopify", category: "Commerce" },
  { name: "WooCommerce", category: "Commerce" },
  
  // Artificial intelligence
  { name: "Anthropic", category: "Artificial intelligence" },
  { name: "Droxy", category: "Artificial intelligence" },
  { name: "ElevenLabs", category: "Artificial intelligence" },
  { name: "Google Gemini", category: "Artificial intelligence" },
  { name: "Groq", category: "Artificial intelligence" },
  { name: "Mistral", category: "Artificial intelligence" },
  { name: "OpenAI", category: "Artificial intelligence" },
  { name: "OpenRouter", category: "Artificial intelligence" },
  { name: "Perplexity", category: "Artificial intelligence" },
  { name: "Together AI", category: "Artificial intelligence" },
  { name: "Utility AI", category: "Artificial intelligence" },
  { name: "Zoo", category: "Artificial intelligence" },
  
  // Developer tools
  { name: "Atera", category: "Developer tools" },
  { name: "Auth0", category: "Developer tools" },
  { name: "Baserow", category: "Developer tools" },
  { name: "Cloudflare", category: "Developer tools" },
  { name: "Dart", category: "Developer tools" },
  { name: "Datadog", category: "Developer tools" },
  { name: "Directus", category: "Developer tools" },
  { name: "Firebase", category: "Developer tools" },
  { name: "Grist", category: "Developer tools" },
  { name: "Heroku", category: "Developer tools" },
  { name: "Meta", category: "Developer tools" },
  { name: "Microsoft SQL Server", category: "Developer tools" },
  { name: "MongoDB", category: "Developer tools" },
  { name: "MySQL", category: "Developer tools" },
  { name: "NocoDB", category: "Developer tools" },
  { name: "Pinecone", category: "Developer tools" },
  { name: "Postgres", category: "Developer tools" },
  { name: "Qdrant", category: "Developer tools" },
  { name: "Supabase", category: "Developer tools" },
  { name: "Upstash", category: "Developer tools" },
  
  // Business intelligence
  { name: "Metabase", category: "Business intelligence" },
  { name: "Tableau", category: "Business intelligence" },
  
  // Customer support
  { name: "ChatBot", category: "Customer support" },
  { name: "Chatkick", category: "Customer support" },
  { name: "Crisp", category: "Customer support" },
  { name: "Freshdesk", category: "Customer support" },
  { name: "Freshping", category: "Customer support" },
  { name: "Freshservice", category: "Customer support" },
  { name: "Front", category: "Customer support" },
  { name: "HelpScout", category: "Customer support" },
  { name: "Intercom", category: "Customer support" },
  { name: "Zendesk", category: "Customer support" },
  
  // Content and files
  { name: "Bannerbear", category: "Content and files" },
  { name: "DeepL", category: "Content and files" },
  { name: "Docusign", category: "Content and files" },
  { name: "Dribbble", category: "Content and files" },
  { name: "Figma", category: "Content and files" },
  { name: "Ghost", category: "Content and files" },
  { name: "Pexels", category: "Content and files" },
  { name: "SimplePDF", category: "Content and files" },
  { name: "Storyblok", category: "Content and files" },
  { name: "Strapi", category: "Content and files" },
  { name: "Vimeo", category: "Content and files" },
  { name: "YouTube", category: "Content and files" },
  
  // Sales and crm
  { name: "Adalo", category: "Sales and crm" },
  { name: "Affinity", category: "Sales and crm" },
  { name: "Agendor", category: "Sales and crm" },
  { name: "Ahrefs", category: "Sales and crm" },
  { name: "Chargebee", category: "Sales and crm" },
  { name: "Close", category: "Sales and crm" },
  { name: "Copper", category: "Sales and crm" },
  { name: "EspoCRM", category: "Sales and crm" },
  { name: "Freshsales", category: "Sales and crm" },
  { name: "Keap", category: "Sales and crm" },
  { name: "Microsoft Dynamics", category: "Sales and crm" },
  { name: "Odoo", category: "Sales and crm" },
  { name: "Orbit", category: "Sales and crm" },
  { name: "Pipedrive", category: "Sales and crm" },
  { name: "Salesforce", category: "Sales and crm" },
  { name: "Sellsy", category: "Sales and crm" },
  { name: "Vtiger", category: "Sales and crm" },
  { name: "Wedof", category: "Sales and crm" },
  { name: "Zoho CRM", category: "Sales and crm" },
  { name: "Zuora", category: "Sales and crm" },
  
  // Forms and surveys
  { name: "Crowdin", category: "Forms and surveys" },
  { name: "Discourse", category: "Forms and surveys" },
  { name: "Disqus", category: "Forms and surveys" },
  { name: "Eventbrite", category: "Forms and surveys" },
  { name: "Humanitix", category: "Forms and surveys" },
  { name: "JotForm", category: "Forms and surveys" },
  { name: "SurveyMonkey", category: "Forms and surveys" },
  { name: "SurveySparrow", category: "Forms and surveys" },
  { name: "Typebot", category: "Forms and surveys" },
  
  // Human resources
  { name: "Brex", category: "Human resources" },
  { name: "ServiceNow", category: "Human resources" },
  
  // Payment processing
  { name: "Brevo", category: "Payment processing" },
  { name: "ClickSend", category: "Payment processing" },
  { name: "Make", category: "Payment processing" },
  { name: "OneSignal", category: "Payment processing" },
  { name: "Paddle", category: "Payment processing" },
  { name: "PayPal", category: "Payment processing" },
  { name: "Plunk", category: "Payment processing" },
  { name: "Segment", category: "Payment processing" },
  { name: "Stripe", category: "Payment processing" },
];

const getLogo = (name: string) => {
  const logoUrl = logoMap[name];
  if (!logoUrl) {
    // Fallback to first letter
    return (
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl font-bold text-primary">
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={logoUrl}
      alt={`${name} logo`}
      className="w-16 h-16 object-contain rounded-lg p-2 bg-background"
      onError={(e) => {
        // On error, replace with fallback
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = 'flex';
      }}
    />
  );
};

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory =
      selectedCategory === "All Categories" ||
      integration.category === selectedCategory;
    const matchesSearch = integration.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Connect with 265+ Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate your favorite platforms and automate your workflow with our no-code platform
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {getLogo(integration.name)}
                  {/* Fallback div that's hidden by default */}
                  <div className="hidden w-16 h-16 bg-primary/10 rounded-lg items-center justify-center text-2xl font-bold text-primary">
                    {integration.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                <span className="text-xs text-muted-foreground px-3 py-1 bg-muted rounded-full">
                  {integration.category}
                </span>
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