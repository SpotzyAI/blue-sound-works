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

// Logo URLs mapped to Autocalls integration names
const logoMap: Record<string, string> = {
  "ActiveCampaign": "https://cdn.simpleicons.org/activecampaign",
  "Actual Budget": "https://cdn.simpleicons.org/actualbudget",
  "Acumbamail": "https://cdn.simpleicons.org/acumbamail",
  "Afforai": "https://cdn.simpleicons.org/afforai",
  "Airtable": "https://cdn.simpleicons.org/airtable",
  "Airparser": "https://cdn.simpleicons.org/airparser",
  "AITable": "https://cdn.simpleicons.org/aitable",
  "Amazon S3": "https://cdn.simpleicons.org/amazons3",
  "Amazon SQS": "https://cdn.simpleicons.org/amazonsqs",
  "Aminos": "https://cdn.simpleicons.org/aminos",
  "AnyHook GraphQL": "https://cdn.simpleicons.org/graphql",
  "AnyHook Websocket": "https://cdn.simpleicons.org/websocket",
  "Anthropic Claude": "https://cdn.simpleicons.org/anthropic",
  "Apollo": "https://cdn.simpleicons.org/apollo",
  "Approval": "https://cdn.simpleicons.org/approval",
  "Apify": "https://cdn.simpleicons.org/apify",
  "Asana": "https://cdn.simpleicons.org/asana",
  "AssemblyAI": "https://cdn.simpleicons.org/assemblyai",
  "Azure Communication Services": "https://cdn.simpleicons.org/microsoftazure",
  "Azure OpenAI": "https://cdn.simpleicons.org/microsoftazure",
  "Bannerbear": "https://cdn.simpleicons.org/bannerbear",
  "Baserow": "https://cdn.simpleicons.org/baserow",
  "Beamer": "https://cdn.simpleicons.org/beamer",
  "Bettermode": "https://cdn.simpleicons.org/bettermode",
  "Binance": "https://cdn.simpleicons.org/binance",
  "Blackbaud": "https://cdn.simpleicons.org/blackbaud",
  "Bloomerang": "https://cdn.simpleicons.org/bloomerang",
  "Blockscout": "https://cdn.simpleicons.org/blockscout",
  "Bonjoro": "https://cdn.simpleicons.org/bonjoro",
  "Box": "https://cdn.simpleicons.org/box",
  "Brevo": "https://cdn.simpleicons.org/brevo",
  "Brilliant Directories": "https://cdn.simpleicons.org/brilliantdirectories",
  "Bubble": "https://cdn.simpleicons.org/bubble",
  "Cal.com": "https://cdn.simpleicons.org/caldotcom",
  "Calendly": "https://cdn.simpleicons.org/calendly",
  "Campaign Monitor": "https://cdn.simpleicons.org/campaignmonitor",
  "Captain-data": "https://cdn.simpleicons.org/captaindata",
  "Cartloom": "https://cdn.simpleicons.org/cartloom",
  "Certopus": "https://cdn.simpleicons.org/certopus",
  "Chainalysis Screening API": "https://cdn.simpleicons.org/chainalysis",
  "Chatbase": "https://cdn.simpleicons.org/chatbase",
  "ChargeKeep": "https://cdn.simpleicons.org/chargekeep",
  "Clarifai": "https://cdn.simpleicons.org/clarifai",
  "ClickUp": "https://cdn.simpleicons.org/clickup",
  "Clockodo": "https://cdn.simpleicons.org/clockodo",
  "Coda": "https://cdn.simpleicons.org/coda",
  "Cognito Forms": "https://cdn.simpleicons.org/cognitoforms",
  "Confluence": "https://cdn.simpleicons.org/confluence",
  "Connections": "https://cdn.simpleicons.org/connections",
  "Constant Contact": "https://cdn.simpleicons.org/constantcontact",
  "Contentful": "https://cdn.simpleicons.org/contentful",
  "Contiguity": "https://cdn.simpleicons.org/contiguity",
  "ConvertKit": "https://cdn.simpleicons.org/convertkit",
  "Copy.ai": "https://cdn.simpleicons.org/copyai",
  "CSV": "https://cdn.simpleicons.org/csv",
  "customer.io": "https://cdn.simpleicons.org/customerdotio",
  "Crypto": "https://cdn.simpleicons.org/crypto",
  "Dappier": "https://cdn.simpleicons.org/dappier",
  "Data Mapper": "https://cdn.simpleicons.org/datamapper",
  "Date Helper": "https://cdn.simpleicons.org/date",
  "Data Summarizer": "https://cdn.simpleicons.org/data",
  "Dato CMS": "https://cdn.simpleicons.org/datocms",
  "DeepL": "https://cdn.simpleicons.org/deepl",
  "Delay": "https://cdn.simpleicons.org/delay",
  "Devin AI": "https://cdn.simpleicons.org/devinai",
  "Discourse": "https://cdn.simpleicons.org/discourse",
  "Drip": "https://cdn.simpleicons.org/drip",
  "Dropbox": "https://cdn.simpleicons.org/dropbox",
  "Dust": "https://cdn.simpleicons.org/dust",
  "ElevenLabs": "https://cdn.simpleicons.org/elevenlabs",
  "Ethereum Name Service (ENS)": "https://cdn.simpleicons.org/ethereum",
  "Facebook Leads": "https://cdn.simpleicons.org/facebook",
  "Facebook Pages": "https://cdn.simpleicons.org/facebook",
  "Figma": "https://cdn.simpleicons.org/figma",
  "Files Helper": "https://cdn.simpleicons.org/files",
  "Fireflies.ai": "https://cdn.simpleicons.org/fireflies",
  "Fliqr AI": "https://cdn.simpleicons.org/fliqr",
  "Flowise": "https://cdn.simpleicons.org/flowise",
  "Flowlu": "https://cdn.simpleicons.org/flowlu",
  "Formbricks": "https://cdn.simpleicons.org/formbricks",
  "Frame": "https://cdn.simpleicons.org/frame",
  "Freshdesk": "https://cdn.simpleicons.org/freshdesk",
  "Freshsales": "https://cdn.simpleicons.org/freshsales",
  "Gameball": "https://cdn.simpleicons.org/gameball",
  "GCloud Pub/Sub": "https://cdn.simpleicons.org/googlecloud",
  "GenerateBanners": "https://cdn.simpleicons.org/generatebanners",
  "GhostCMS": "https://cdn.simpleicons.org/ghost",
  "GitHub": "https://cdn.simpleicons.org/github",
  "GitLab": "https://cdn.simpleicons.org/gitlab",
  "Gmail": "https://cdn.simpleicons.org/gmail",
  "GoHighLevel": "https://cdn.simpleicons.org/gohighlevel",
  "Google Calendar": "https://cdn.simpleicons.org/googlecalendar",
  "Google Contacts": "https://cdn.simpleicons.org/googlecontacts",
  "Google Docs": "https://cdn.simpleicons.org/googledocs",
  "Google Drive": "https://cdn.simpleicons.org/googledrive",
  "Google Forms": "https://cdn.simpleicons.org/googleforms",
  "Google Gemini": "https://cdn.simpleicons.org/googlegemini",
  "Google My Business": "https://cdn.simpleicons.org/googlemybusiness",
  "Google Search Console": "https://cdn.simpleicons.org/googlesearchconsole",
  "Google Sheets": "https://cdn.simpleicons.org/googlesheets",
  "Google Tasks": "https://cdn.simpleicons.org/googletasks",
  "Gotify": "https://cdn.simpleicons.org/gotify",
  "Gravity Forms": "https://cdn.simpleicons.org/gravityforms",
  "Grist": "https://cdn.simpleicons.org/grist",
  "Groq": "https://cdn.simpleicons.org/groq",
  "Hacker News": "https://cdn.simpleicons.org/hackernews",
  "Heartbeat": "https://cdn.simpleicons.org/heartbeat",
  "HubSpot": "https://cdn.simpleicons.org/hubspot",
  "HTTP": "https://cdn.simpleicons.org/http",
  "Image AI": "https://cdn.simpleicons.org/ai",
  "Image Helper": "https://cdn.simpleicons.org/image",
  "IMAP": "https://cdn.simpleicons.org/imap",
  "Instagram for Business": "https://cdn.simpleicons.org/instagram",
  "Instasent": "https://cdn.simpleicons.org/instasent",
  "Intercom": "https://cdn.simpleicons.org/intercom",
  "Invoice Ninja": "https://cdn.simpleicons.org/invoiceninja",
  "Jira Cloud": "https://cdn.simpleicons.org/jira",
  "JSON": "https://cdn.simpleicons.org/json",
  "Jotform": "https://cdn.simpleicons.org/jotform",
  "Kimai": "https://cdn.simpleicons.org/kimai",
  "Kizeo Forms": "https://cdn.simpleicons.org/kizeoforms",
  "Kommo": "https://cdn.simpleicons.org/kommo",
  "KrispCall": "https://cdn.simpleicons.org/krispcall",
  "Lever": "https://cdn.simpleicons.org/lever",
  "Line Bot": "https://cdn.simpleicons.org/line",
  "Linear": "https://cdn.simpleicons.org/linear",
  "Linka": "https://cdn.simpleicons.org/linka",
  "LinkedIn": "https://cdn.simpleicons.org/linkedin",
  "LocalAI": "https://cdn.simpleicons.org/localai",
  "LLMRails": "https://cdn.simpleicons.org/llmrails",
  "Mailchain": "https://cdn.simpleicons.org/mailchain",
  "Mailchimp": "https://cdn.simpleicons.org/mailchimp",
  "MailerLite": "https://cdn.simpleicons.org/mailerlite",
  "Maileroo": "https://cdn.simpleicons.org/maileroo",
  "Mailjet": "https://cdn.simpleicons.org/mailjet",
  "Matomo": "https://cdn.simpleicons.org/matomo",
  "Math Helper": "https://cdn.simpleicons.org/math",
  "Matrix": "https://cdn.simpleicons.org/matrix",
  "Mautic": "https://cdn.simpleicons.org/mautic",
  "Mastodon": "https://cdn.simpleicons.org/mastodon",
  "Mem": "https://cdn.simpleicons.org/mem",
  "Mempool": "https://cdn.simpleicons.org/mempool",
  "MessageBird": "https://cdn.simpleicons.org/messagebird",
  "Microsoft Dynamics 365 Business Central": "https://cdn.simpleicons.org/microsoftdynamics365",
  "Microsoft Dynamics CRM": "https://cdn.simpleicons.org/microsoftdynamics365",
  "Microsoft Excel 365": "https://cdn.simpleicons.org/microsoftexcel",
  "Microsoft OneDrive": "https://cdn.simpleicons.org/microsoftonedrive",
  "Microsoft SharePoint": "https://cdn.simpleicons.org/microsoftsharepoint",
  "Microsoft Teams": "https://cdn.simpleicons.org/microsoftteams",
  "Mindee": "https://cdn.simpleicons.org/mindee",
  "Mixpanel": "https://cdn.simpleicons.org/mixpanel",
  "monday.com": "https://cdn.simpleicons.org/mondaydotcom",
  "Motion": "https://cdn.simpleicons.org/motion",
  "Moxie": "https://cdn.simpleicons.org/moxie",
  "NetSuite": "https://cdn.simpleicons.org/netsuite",
  "Nifty": "https://cdn.simpleicons.org/nifty",
  "NocoDB": "https://cdn.simpleicons.org/nocodb",
  "Notion": "https://cdn.simpleicons.org/notion",
  "ntfy": "https://cdn.simpleicons.org/ntfy",
  "Odoo": "https://cdn.simpleicons.org/odoo",
  "Onfleet": "https://cdn.simpleicons.org/onfleet",
  "OpenAI": "https://cdn.simpleicons.org/openai",
  "Pastefy": "https://cdn.simpleicons.org/pastefy",
  "PDF": "https://cdn.simpleicons.org/adobeacrobatreader",
  "Pipedrive": "https://cdn.simpleicons.org/pipedrive",
  "Pocket": "https://cdn.simpleicons.org/pocket",
  "PostHog": "https://cdn.simpleicons.org/posthog",
  "Postmark": "https://cdn.simpleicons.org/postmark",
  "Printful": "https://cdn.simpleicons.org/printful",
  "ProcessKit": "https://cdn.simpleicons.org/processkit",
  "Qonto": "https://cdn.simpleicons.org/qonto",
  "QuickBooks": "https://cdn.simpleicons.org/quickbooks",
  "QuickChart": "https://cdn.simpleicons.org/quickchart",
  "R": "https://cdn.simpleicons.org/r",
  "Readwise": "https://cdn.simpleicons.org/readwise",
  "Redash": "https://cdn.simpleicons.org/redash",
  "Recruit CRM": "https://cdn.simpleicons.org/recruitcrm",
  "Revio": "https://cdn.simpleicons.org/revio",
  "Robly": "https://cdn.simpleicons.org/robly",
  "RSS": "https://cdn.simpleicons.org/rss",
  "Rule": "https://cdn.simpleicons.org/rule",
  "Sage Accounting": "https://cdn.simpleicons.org/sage",
  "Salesforce": "https://cdn.simpleicons.org/salesforce",
  "Salesforce Pardot": "https://cdn.simpleicons.org/salesforce",
  "Salesblink": "https://cdn.simpleicons.org/salesblink",
  "Salesflare": "https://cdn.simpleicons.org/salesflare",
  "Scalenut": "https://cdn.simpleicons.org/scalenut",
  "Scrapfly": "https://cdn.simpleicons.org/scrapfly",
  "Segment": "https://cdn.simpleicons.org/segment",
  "Selzy": "https://cdn.simpleicons.org/selzy",
  "SendFox": "https://cdn.simpleicons.org/sendfox",
  "SendGrid": "https://cdn.simpleicons.org/sendgrid",
  "SendPulse": "https://cdn.simpleicons.org/sendpulse",
  "Sendy": "https://cdn.simpleicons.org/sendy",
  "Senja": "https://cdn.simpleicons.org/senja",
  "Sellsy": "https://cdn.simpleicons.org/sellsy",
  "Serpstat": "https://cdn.simpleicons.org/serpstat",
  "Shopify": "https://cdn.simpleicons.org/shopify",
  "Smartsuite": "https://cdn.simpleicons.org/smartsuite",
  "Stackby": "https://cdn.simpleicons.org/stackby",
  "Stacker": "https://cdn.simpleicons.org/stacker",
  "Storyblok": "https://cdn.simpleicons.org/storyblok",
  "Stripe": "https://cdn.simpleicons.org/stripe",
  "Success.ai": "https://cdn.simpleicons.org/successai",
  "SugarCRM": "https://cdn.simpleicons.org/sugarcrm",
  "SumUp": "https://cdn.simpleicons.org/sumup",
  "Superblocks": "https://cdn.simpleicons.org/superblocks",
  "Superforms": "https://cdn.simpleicons.org/superforms",
  "Superphone": "https://cdn.simpleicons.org/superphone",
  "Supabase": "https://cdn.simpleicons.org/supabase",
  "SurveySparrow": "https://cdn.simpleicons.org/surveysparrow",
  "SysAid": "https://cdn.simpleicons.org/sysaid",
  "Squarespace": "https://cdn.simpleicons.org/squarespace",
  "Tally": "https://cdn.simpleicons.org/tally",
  "TanStack Query": "https://cdn.simpleicons.org/tanstack",
  "Teamleader": "https://cdn.simpleicons.org/teamleader",
  "Teamwork": "https://cdn.simpleicons.org/teamwork",
  "Telegram": "https://cdn.simpleicons.org/telegram",
  "Text": "https://cdn.simpleicons.org/text",
  "TidyCal": "https://cdn.simpleicons.org/tidycal",
  "Trello": "https://cdn.simpleicons.org/trello",
  "TrueLayer": "https://cdn.simpleicons.org/truelayer",
  "Twin Web Agent": "https://cdn.simpleicons.org/twin",
  "Twitter": "https://cdn.simpleicons.org/x",
  "Typeform": "https://cdn.simpleicons.org/typeform",
  "Upgrade.chat": "https://cdn.simpleicons.org/upgradedotchat",
  "User Input": "https://cdn.simpleicons.org/userinput",
  "Utility AI": "https://cdn.simpleicons.org/ai",
  "VBOUT": "https://cdn.simpleicons.org/vbout",
  "Village": "https://cdn.simpleicons.org/village",
  "Vtiger": "https://cdn.simpleicons.org/vtiger",
  "Wachat": "https://cdn.simpleicons.org/wechat",
  "Webflow": "https://cdn.simpleicons.org/webflow",
  "Webhook": "https://cdn.simpleicons.org/webhook",
  "Webling": "https://cdn.simpleicons.org/webling",
  "Wedof": "https://cdn.simpleicons.org/wedof",
  "Whatsable": "https://cdn.simpleicons.org/whatsapp",
  "WhatsApp Business": "https://cdn.simpleicons.org/whatsapp",
  "WooCommerce": "https://cdn.simpleicons.org/woocommerce",
  "WordPress": "https://cdn.simpleicons.org/wordpress",
  "Wootric": "https://cdn.simpleicons.org/wootric",
  "Xero": "https://cdn.simpleicons.org/xero",
  "YouTube": "https://cdn.simpleicons.org/youtube",
  "Zagomail": "https://cdn.simpleicons.org/zagomail",
  "Zendesk": "https://cdn.simpleicons.org/zendesk",
  "ZeroBounce": "https://cdn.simpleicons.org/zerobounce",
  "ZeroLex": "https://cdn.simpleicons.org/zerolex",
  "Zoho Books": "https://cdn.simpleicons.org/zoho",
  "Zoho CRM": "https://cdn.simpleicons.org/zoho",
  "Zoho Inventory": "https://cdn.simpleicons.org/zoho",
  "Zoho Invoice": "https://cdn.simpleicons.org/zoho",
  "Zoo": "https://cdn.simpleicons.org/zoo",
  "Zoom": "https://cdn.simpleicons.org/zoom",
  "ZoomInfo": "https://cdn.simpleicons.org/zoominfo",
  "Zuora": "https://cdn.simpleicons.org/zuora",
};

// Complete list of ALL Autocalls integrations
const integrations = [
  { name: "ActiveCampaign", category: "Marketing" },
  { name: "Actual Budget", category: "Accounting" },
  { name: "Acumbamail", category: "General" },
  { name: "Afforai", category: "Artificial intelligence" },
  { name: "Airtable", category: "Productivity" },
  { name: "Airparser", category: "Productivity" },
  { name: "AITable", category: "Productivity" },
  { name: "Amazon S3", category: "Developer tools" },
  { name: "Amazon SQS", category: "General" },
  { name: "Aminos", category: "Artificial intelligence" },
  { name: "AnyHook GraphQL", category: "General" },
  { name: "AnyHook Websocket", category: "General" },
  { name: "Anthropic Claude", category: "Artificial intelligence" },
  { name: "Apollo", category: "General" },
  { name: "Approval", category: "Core" },
  { name: "Apify", category: "Business intelligence" },
  { name: "Asana", category: "Productivity" },
  { name: "AssemblyAI", category: "Artificial intelligence" },
  { name: "Azure Communication Services", category: "Communication" },
  { name: "Azure OpenAI", category: "General" },
  { name: "Bannerbear", category: "Marketing" },
  { name: "Baserow", category: "Productivity" },
  { name: "Beamer", category: "Productivity" },
  { name: "Bettermode", category: "Marketing" },
  { name: "Binance", category: "General" },
  { name: "Blackbaud", category: "General" },
  { name: "Bloomerang", category: "General" },
  { name: "Blockscout", category: "General" },
  { name: "Bonjoro", category: "Customer support" },
  { name: "Box", category: "Content and files" },
  { name: "Brevo", category: "Marketing" },
  { name: "Brilliant Directories", category: "General" },
  { name: "Bubble", category: "Developer tools" },
  { name: "Cal.com", category: "Productivity" },
  { name: "Calendly", category: "Productivity" },
  { name: "Campaign Monitor", category: "Marketing" },
  { name: "Captain-data", category: "General" },
  { name: "Cartloom", category: "Commerce" },
  { name: "Certopus", category: "General" },
  { name: "Chainalysis Screening API", category: "General" },
  { name: "Chatbase", category: "Artificial intelligence" },
  { name: "ChargeKeep", category: "Commerce" },
  { name: "Clarifai", category: "Artificial intelligence" },
  { name: "ClickUp", category: "Productivity" },
  { name: "Clockodo", category: "Productivity" },
  { name: "Coda", category: "Productivity" },
  { name: "Cognito Forms", category: "Productivity" },
  { name: "Confluence", category: "Content and files" },
  { name: "Connections", category: "Core" },
  { name: "Constant Contact", category: "Marketing" },
  { name: "Contentful", category: "Marketing" },
  { name: "Contiguity", category: "Marketing" },
  { name: "ConvertKit", category: "Marketing" },
  { name: "Copy.ai", category: "Artificial intelligence" },
  { name: "CSV", category: "Core" },
  { name: "customer.io", category: "Marketing" },
  { name: "Crypto", category: "Core" },
  { name: "Dappier", category: "Artificial intelligence" },
  { name: "Data Mapper", category: "Core" },
  { name: "Date Helper", category: "Core" },
  { name: "Data Summarizer", category: "Core" },
  { name: "Dato CMS", category: "General" },
  { name: "DeepL", category: "General" },
  { name: "Delay", category: "Core" },
  { name: "Devin AI", category: "Artificial intelligence" },
  { name: "Discourse", category: "Communication" },
  { name: "Drip", category: "Marketing" },
  { name: "Dropbox", category: "Content and files" },
  { name: "Dust", category: "General" },
  { name: "ElevenLabs", category: "Artificial intelligence" },
  { name: "Ethereum Name Service (ENS)", category: "General" },
  { name: "Facebook Leads", category: "Marketing" },
  { name: "Facebook Pages", category: "Marketing" },
  { name: "Figma", category: "General" },
  { name: "Files Helper", category: "Core" },
  { name: "Fireflies.ai", category: "Productivity" },
  { name: "Fliqr AI", category: "Communication" },
  { name: "Flowise", category: "Artificial intelligence" },
  { name: "Flowlu", category: "Sales and crm" },
  { name: "Formbricks", category: "Business intelligence" },
  { name: "Frame", category: "Marketing" },
  { name: "Freshdesk", category: "Customer support" },
  { name: "Freshsales", category: "Sales and crm" },
  { name: "Gameball", category: "General" },
  { name: "GCloud Pub/Sub", category: "Developer tools" },
  { name: "GenerateBanners", category: "Content and files" },
  { name: "GhostCMS", category: "Marketing" },
  { name: "GitHub", category: "Developer tools" },
  { name: "GitLab", category: "Developer tools" },
  { name: "Gmail", category: "Communication" },
  { name: "GoHighLevel", category: "Sales and crm" },
  { name: "Google Calendar", category: "Productivity" },
  { name: "Google Contacts", category: "Sales and crm" },
  { name: "Google Docs", category: "Content and files" },
  { name: "Google Drive", category: "Content and files" },
  { name: "Google Forms", category: "Forms and surveys" },
  { name: "Google Gemini", category: "Artificial intelligence" },
  { name: "Google My Business", category: "Marketing" },
  { name: "Google Search Console", category: "General" },
  { name: "Google Sheets", category: "Productivity" },
  { name: "Google Tasks", category: "Productivity" },
  { name: "Gotify", category: "Developer tools" },
  { name: "Gravity Forms", category: "Forms and surveys" },
  { name: "Grist", category: "Productivity" },
  { name: "Groq", category: "Artificial intelligence" },
  { name: "Hacker News", category: "General" },
  { name: "Heartbeat", category: "Communication" },
  { name: "HubSpot", category: "Sales and crm" },
  { name: "HTTP", category: "Core" },
  { name: "Image AI", category: "Artificial intelligence" },
  { name: "Image Helper", category: "Core" },
  { name: "IMAP", category: "Business intelligence" },
  { name: "Instagram for Business", category: "Business intelligence" },
  { name: "Instasent", category: "Marketing" },
  { name: "Intercom", category: "Customer support" },
  { name: "Invoice Ninja", category: "Accounting" },
  { name: "Jira Cloud", category: "Productivity" },
  { name: "JSON", category: "General" },
  { name: "Jotform", category: "Forms and surveys" },
  { name: "Kimai", category: "Productivity" },
  { name: "Kizeo Forms", category: "Forms and surveys" },
  { name: "Kommo", category: "Communication" },
  { name: "KrispCall", category: "Communication" },
  { name: "Lever", category: "Human resources" },
  { name: "Line Bot", category: "Communication" },
  { name: "Linear", category: "Productivity" },
  { name: "Linka", category: "Sales and crm" },
  { name: "LinkedIn", category: "Marketing" },
  { name: "LocalAI", category: "Artificial intelligence" },
  { name: "LLMRails", category: "Artificial intelligence" },
  { name: "Mailchain", category: "Marketing" },
  { name: "Mailchimp", category: "Marketing" },
  { name: "MailerLite", category: "Marketing" },
  { name: "Maileroo", category: "Marketing" },
  { name: "Mailjet", category: "Marketing" },
  { name: "Matomo", category: "Business intelligence" },
  { name: "Math Helper", category: "Core" },
  { name: "Matrix", category: "Communication" },
  { name: "Mautic", category: "Marketing" },
  { name: "Mastodon", category: "Communication" },
  { name: "Mem", category: "Productivity" },
  { name: "Mempool", category: "General" },
  { name: "MessageBird", category: "Marketing" },
  { name: "Microsoft Dynamics 365 Business Central", category: "Sales and crm" },
  { name: "Microsoft Dynamics CRM", category: "Sales and crm" },
  { name: "Microsoft Excel 365", category: "Productivity" },
  { name: "Microsoft OneDrive", category: "Content and files" },
  { name: "Microsoft SharePoint", category: "Content and files" },
  { name: "Microsoft Teams", category: "Business intelligence" },
  { name: "Mindee", category: "Communication" },
  { name: "Mixpanel", category: "Business intelligence" },
  { name: "monday.com", category: "Productivity" },
  { name: "Motion", category: "Productivity" },
  { name: "Moxie", category: "Sales and crm" },
  { name: "NetSuite", category: "Sales and crm" },
  { name: "Nifty", category: "Productivity" },
  { name: "NocoDB", category: "General" },
  { name: "Notion", category: "Productivity" },
  { name: "ntfy", category: "Communication" },
  { name: "Odoo", category: "General" },
  { name: "Onfleet", category: "General" },
  { name: "OpenAI", category: "Artificial intelligence" },
  { name: "Pastefy", category: "General" },
  { name: "PDF", category: "General" },
  { name: "Pipedrive", category: "Sales and crm" },
  { name: "Pocket", category: "Productivity" },
  { name: "PostHog", category: "Business intelligence" },
  { name: "Postmark", category: "Communication" },
  { name: "Printful", category: "Commerce" },
  { name: "ProcessKit", category: "Productivity" },
  { name: "Qonto", category: "Accounting" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "QuickChart", category: "Developer tools" },
  { name: "R", category: "Developer tools" },
  { name: "Readwise", category: "Productivity" },
  { name: "Redash", category: "Business intelligence" },
  { name: "Recruit CRM", category: "Sales and crm" },
  { name: "Revio", category: "Commerce" },
  { name: "Robly", category: "Marketing" },
  { name: "RSS", category: "General" },
  { name: "Rule", category: "Marketing" },
  { name: "Sage Accounting", category: "Accounting" },
  { name: "Salesforce", category: "Sales and crm" },
  { name: "Salesforce Pardot", category: "Sales and crm" },
  { name: "Salesblink", category: "Sales and crm" },
  { name: "Salesflare", category: "Sales and crm" },
  { name: "Scalenut", category: "Marketing" },
  { name: "Scrapfly", category: "Developer tools" },
  { name: "Segment", category: "General" },
  { name: "Selzy", category: "Marketing" },
  { name: "SendFox", category: "Marketing" },
  { name: "SendGrid", category: "Communication" },
  { name: "SendPulse", category: "Marketing" },
  { name: "Sendy", category: "Marketing" },
  { name: "Senja", category: "Marketing" },
  { name: "Sellsy", category: "Sales and crm" },
  { name: "Serpstat", category: "Marketing" },
  { name: "Shopify", category: "Commerce" },
  { name: "Smartsuite", category: "Productivity" },
  { name: "Stackby", category: "Productivity" },
  { name: "Stacker", category: "Productivity" },
  { name: "Storyblok", category: "Marketing" },
  { name: "Stripe", category: "Commerce" },
  { name: "Success.ai", category: "Marketing" },
  { name: "SugarCRM", category: "Sales and crm" },
  { name: "SumUp", category: "Payment processing" },
  { name: "Superblocks", category: "Developer tools" },
  { name: "Superforms", category: "Forms and surveys" },
  { name: "Superphone", category: "Communication" },
  { name: "Supabase", category: "Developer tools" },
  { name: "SurveySparrow", category: "Forms and surveys" },
  { name: "SysAid", category: "Customer support" },
  { name: "Squarespace", category: "Marketing" },
  { name: "Tally", category: "Forms and surveys" },
  { name: "TanStack Query", category: "Developer tools" },
  { name: "Teamleader", category: "Sales and crm" },
  { name: "Teamwork", category: "Productivity" },
  { name: "Telegram", category: "Communication" },
  { name: "Text", category: "Core" },
  { name: "TidyCal", category: "Productivity" },
  { name: "Trello", category: "Productivity" },
  { name: "TrueLayer", category: "Payment processing" },
  { name: "Twin Web Agent", category: "General" },
  { name: "Twitter", category: "Communication" },
  { name: "Typeform", category: "Forms and surveys" },
  { name: "Upgrade.chat", category: "Sales and crm" },
  { name: "User Input", category: "Core" },
  { name: "Utility AI", category: "Artificial intelligence" },
  { name: "VBOUT", category: "Marketing" },
  { name: "Village", category: "Productivity" },
  { name: "Vtiger", category: "Sales and crm" },
  { name: "Wachat", category: "General" },
  { name: "Webflow", category: "Marketing" },
  { name: "Webhook", category: "Core" },
  { name: "Webling", category: "Productivity" },
  { name: "Wedof", category: "Sales and crm" },
  { name: "Whatsable", category: "General" },
  { name: "WhatsApp Business", category: "General" },
  { name: "WooCommerce", category: "Commerce" },
  { name: "WordPress", category: "Marketing" },
  { name: "Wootric", category: "General" },
  { name: "Xero", category: "Accounting" },
  { name: "YouTube", category: "Content and files" },
  { name: "Zagomail", category: "Marketing" },
  { name: "Zendesk", category: "Customer support" },
  { name: "ZeroBounce", category: "General" },
  { name: "ZeroLex", category: "General" },
  { name: "Zoho Books", category: "Accounting" },
  { name: "Zoho CRM", category: "Sales and crm" },
  { name: "Zoho Inventory", category: "Accounting" },
  { name: "Zoho Invoice", category: "Accounting" },
  { name: "Zoo", category: "Artificial intelligence" },
  { name: "Zoom", category: "Communication" },
  { name: "ZoomInfo", category: "Sales and crm" },
  { name: "Zuora", category: "Sales and crm" },
];

const getLogo = (name: string) => {
  const logoUrl = logoMap[name];
  if (!logoUrl) {
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
      
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Connect with 270+ Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate your favorite platforms and automate your workflow with our no-code platform
          </p>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {getLogo(integration.name)}
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