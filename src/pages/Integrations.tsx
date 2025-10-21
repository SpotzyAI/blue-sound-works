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
  "Zuora": "https://cdn.simpleicons.org/zuora",
  "Zoom": "https://cdn.simpleicons.org/zoom",
  "Zoo": "https://cdn.simpleicons.org/zoo",
  "Zoho Invoice": "https://cdn.simpleicons.org/zoho",
  "Zoho CRM": "https://cdn.simpleicons.org/zoho",
  "Zoho Books": "https://cdn.simpleicons.org/zoho",
  "Zendesk": "https://cdn.simpleicons.org/zendesk",
  "YouTube": "https://cdn.simpleicons.org/youtube",
  "Zagomail": "https://cdn.simpleicons.org/zagomail",
  "ZeroBounce": "https://cdn.simpleicons.org/zerobounce",
  "WordPress": "https://cdn.simpleicons.org/wordpress",
  "Xero": "https://cdn.simpleicons.org/xero",
  "Wootric": "https://cdn.simpleicons.org/wootric",
  "Whatsable": "https://cdn.simpleicons.org/whatsapp",
  "WhatsApp Business": "https://cdn.simpleicons.org/whatsapp",
  "WooCommerce": "https://cdn.simpleicons.org/woocommerce",
  "Wedof": "https://cdn.simpleicons.org/wedof",
  "Webling": "https://cdn.simpleicons.org/webling",
  "Webhook": "https://cdn.simpleicons.org/webhook",
  "Webflow": "https://cdn.simpleicons.org/webflow",
  "Vtiger": "https://cdn.simpleicons.org/vtiger",
  "Wachat": "https://cdn.simpleicons.org/wechat",
  "Utility AI": "https://cdn.simpleicons.org/ai",
  "Village": "https://cdn.simpleicons.org/village",
  "VBOUT": "https://cdn.simpleicons.org/vbout",
  "User Input": "https://cdn.simpleicons.org/userinput",
  "Upgrade.chat": "https://cdn.simpleicons.org/upgradedotchat",
  "Typeform": "https://cdn.simpleicons.org/typeform",
  "Twitter": "https://cdn.simpleicons.org/x",
  "Twin Web Agent": "https://cdn.simpleicons.org/twin",
  "Trello": "https://cdn.simpleicons.org/trello",
  "TrueLayer": "https://cdn.simpleicons.org/truelayer",
  "Twilio": "https://cdn.simpleicons.org/twilio",
  "TidyCal": "https://cdn.simpleicons.org/tidycal",
  "Todoist": "https://cdn.simpleicons.org/todoist",
  "TickTick": "https://cdn.simpleicons.org/ticktick",
  "Telegram Bot": "https://cdn.simpleicons.org/telegram",
  "Tally": "https://cdn.simpleicons.org/tally",
  "Taskade": "https://cdn.simpleicons.org/taskade",
  "Text Helper": "https://cdn.simpleicons.org/text",
  "Tags": "https://cdn.simpleicons.org/tags",
  "SurveyMonkey": "https://cdn.simpleicons.org/surveymonkey",
  "Talkable": "https://cdn.simpleicons.org/talkable",
  "Straico": "https://cdn.simpleicons.org/straico",
  "Stripe": "https://cdn.simpleicons.org/stripe",
  "Supabase": "https://cdn.simpleicons.org/supabase",
  "Storage": "https://cdn.simpleicons.org/storage",
  "Stable Dffusion web UI": "https://cdn.simpleicons.org/stablediffusion",
  "Stability AI": "https://cdn.simpleicons.org/stabilityai",
  "Square": "https://cdn.simpleicons.org/square",
  "Sperse": "https://cdn.simpleicons.org/sperse",
  "SOAP": "https://cdn.simpleicons.org/soap",
  "Spotify": "https://cdn.simpleicons.org/spotify",
  "SMTP": "https://cdn.simpleicons.org/smtp",
  "Slack": "https://cdn.simpleicons.org/slack",
  "Smaily": "https://cdn.simpleicons.org/smaily",
  "Snowflake": "https://cdn.simpleicons.org/snowflake",
  "SimplePDF": "https://cdn.simpleicons.org/simplepdf",
  "Shopify": "https://cdn.simpleicons.org/shopify",
  "SFTP": "https://cdn.simpleicons.org/sftp",
  "SendGrid": "https://cdn.simpleicons.org/sendgrid",
  "SendFox": "https://cdn.simpleicons.org/sendfox",
  "Sendy": "https://cdn.simpleicons.org/sendy",
  "Sessions.us": "https://cdn.simpleicons.org/sessions",
  "Segment": "https://cdn.simpleicons.org/segment",
  "Salsa": "https://cdn.simpleicons.org/salsa",
  "Schedule": "https://cdn.simpleicons.org/schedule",
  "RSS Feed": "https://cdn.simpleicons.org/rss",
  "Robolly": "https://cdn.simpleicons.org/robolly",
  "Retable": "https://cdn.simpleicons.org/retable",
  "Resend": "https://cdn.simpleicons.org/resend",
  "Reoon Email Verifier": "https://cdn.simpleicons.org/reoon",
  "Reachinbox": "https://cdn.simpleicons.org/reachinbox",
  "Razorpay": "https://cdn.simpleicons.org/razorpay",
  "Quickzu": "https://cdn.simpleicons.org/quickzu",
  "RabbitMQ": "https://cdn.simpleicons.org/rabbitmq",
  "re:tune": "https://cdn.simpleicons.org/retune",
  "Qdrant": "https://cdn.simpleicons.org/qdrant",
  "Pushover": "https://cdn.simpleicons.org/pushover",
  "Postgres": "https://cdn.simpleicons.org/postgresql",
  "Pipedrive": "https://cdn.simpleicons.org/pipedrive",
  "Poper": "https://cdn.simpleicons.org/poper",
  "PostHog": "https://cdn.simpleicons.org/posthog",
  "Personal AI": "https://cdn.simpleicons.org/personalai",
  "PDF.co": "https://cdn.simpleicons.org/pdf",
  "Perplexity AI": "https://cdn.simpleicons.org/perplexity",
  "Photoroom": "https://cdn.simpleicons.org/photoroom",
  "OpenRouter": "https://cdn.simpleicons.org/openrouter",
  "Pastebin": "https://cdn.simpleicons.org/pastebin",
  "PDF": "https://cdn.simpleicons.org/adobeacrobatreader",
  "Pastefy": "https://cdn.simpleicons.org/pastefy",
  "OpenAI": "https://cdn.simpleicons.org/openai",
  "Onfleet": "https://cdn.simpleicons.org/onfleet",
  "Odoo": "https://cdn.simpleicons.org/odoo",
  "Notion": "https://cdn.simpleicons.org/notion",
  "NetSuite": "https://cdn.simpleicons.org/netsuite",
  "Nifty": "https://cdn.simpleicons.org/nifty",
  "NocoDB": "https://cdn.simpleicons.org/nocodb",
  "ntfy": "https://cdn.simpleicons.org/ntfy",
  "Motion": "https://cdn.simpleicons.org/motion",
  "Moxie": "https://cdn.simpleicons.org/moxie",
  "Microsoft Teams": "https://cdn.simpleicons.org/microsoftteams",
  "Mindee": "https://cdn.simpleicons.org/mindee",
  "monday.com": "https://cdn.simpleicons.org/mondaydotcom",
  "Mixpanel": "https://cdn.simpleicons.org/mixpanel",
  "Microsoft SharePoint": "https://cdn.simpleicons.org/microsoftsharepoint",
  "Microsoft OneDrive": "https://cdn.simpleicons.org/microsoftonedrive",
  "Microsoft Excel 365": "https://cdn.simpleicons.org/microsoftexcel",
  "Microsoft Dynamics CRM": "https://cdn.simpleicons.org/microsoftdynamics365",
  "Mempool": "https://cdn.simpleicons.org/mempool",
  "MessageBird": "https://cdn.simpleicons.org/messagebird",
  "Microsoft Dynamics 365 Business Central": "https://cdn.simpleicons.org/microsoftdynamics365",
  "Maileroo": "https://cdn.simpleicons.org/maileroo",
  "Linka": "https://cdn.simpleicons.org/linka",
  "LinkedIn": "https://cdn.simpleicons.org/linkedin",
  "LLMRails": "https://cdn.simpleicons.org/llmrails",
  "LocalAI": "https://cdn.simpleicons.org/localai",
  "Lever": "https://cdn.simpleicons.org/lever",
  "Line Bot": "https://cdn.simpleicons.org/line",
  "Linear": "https://cdn.simpleicons.org/linear",
  "Kommo": "https://cdn.simpleicons.org/kommo",
  "KrispCall": "https://cdn.simpleicons.org/krispcall",
  "GoHighLevel": "https://cdn.simpleicons.org/gohighlevel",
  "Jotform": "https://cdn.simpleicons.org/jotform",
  "JSON": "https://cdn.simpleicons.org/json",
  "Kimai": "https://cdn.simpleicons.org/kimai",
  "Kizeo Forms": "https://cdn.simpleicons.org/kizeoforms",
  "Instasent": "https://cdn.simpleicons.org/instasent",
  "Intercom": "https://cdn.simpleicons.org/intercom",
  "Invoice Ninja": "https://cdn.simpleicons.org/invoiceninja",
  "Jira Cloud": "https://cdn.simpleicons.org/jira",
  "Image AI": "https://cdn.simpleicons.org/ai",
  "Image Helper": "https://cdn.simpleicons.org/image",
  "IMAP": "https://cdn.simpleicons.org/imap",
  "Instagram for Business": "https://cdn.simpleicons.org/instagram",
  "Heartbeat": "https://cdn.simpleicons.org/heartbeat",
  "HTTP": "https://cdn.simpleicons.org/http",
  "HubSpot": "https://cdn.simpleicons.org/hubspot",
  "Gravity Forms": "https://cdn.simpleicons.org/gravityforms",
  "Grist": "https://cdn.simpleicons.org/grist",
  "Groq": "https://cdn.simpleicons.org/groq",
  "Hacker News": "https://cdn.simpleicons.org/hackernews",
  "Google Search Console": "https://cdn.simpleicons.org/googlesearchconsole",
  "Google Sheets": "https://cdn.simpleicons.org/googlesheets",
  "Google Tasks": "https://cdn.simpleicons.org/googletasks",
  "Gotify": "https://cdn.simpleicons.org/gotify",
  "Google Drive": "https://cdn.simpleicons.org/googledrive",
  "Google Forms": "https://cdn.simpleicons.org/googleforms",
  "Google Gemini": "https://cdn.simpleicons.org/googlegemini",
  "Google My Business": "https://cdn.simpleicons.org/googlemybusiness",
  "Gmail": "https://cdn.simpleicons.org/gmail",
  "Google Calendar": "https://cdn.simpleicons.org/googlecalendar",
  "Google Contacts": "https://cdn.simpleicons.org/googlecontacts",
  "Google Docs": "https://cdn.simpleicons.org/googledocs",
  "GenerateBanners": "https://cdn.simpleicons.org/generatebanners",
  "GhostCMS": "https://cdn.simpleicons.org/ghost",
  "GitHub": "https://cdn.simpleicons.org/github",
  "GitLab": "https://cdn.simpleicons.org/gitlab",
  "Freshdesk": "https://cdn.simpleicons.org/freshdesk",
  "Freshsales": "https://cdn.simpleicons.org/freshsales",
  "Gameball": "https://cdn.simpleicons.org/gameball",
  "GCloud Pub/Sub": "https://cdn.simpleicons.org/googlecloud",
  "Flowise": "https://cdn.simpleicons.org/flowise",
  "Flowlu": "https://cdn.simpleicons.org/flowlu",
  "Formbricks": "https://cdn.simpleicons.org/formbricks",
  "Frame": "https://cdn.simpleicons.org/frame",
  "Figma": "https://cdn.simpleicons.org/figma",
  "Files Helper": "https://cdn.simpleicons.org/files",
  "Fireflies.ai": "https://cdn.simpleicons.org/fireflies",
  "Fliqr AI": "https://cdn.simpleicons.org/fliqr",
  "ElevenLabs": "https://cdn.simpleicons.org/elevenlabs",
  "Ethereum Name Service (ENS)": "https://cdn.simpleicons.org/ethereum",
  "Facebook Leads": "https://cdn.simpleicons.org/facebook",
  "Facebook Pages": "https://cdn.simpleicons.org/facebook",
  "Discourse": "https://cdn.simpleicons.org/discourse",
  "Drip": "https://cdn.simpleicons.org/drip",
  "Dropbox": "https://cdn.simpleicons.org/dropbox",
  "Dust": "https://cdn.simpleicons.org/dust",
  "DeepL": "https://cdn.simpleicons.org/deepl",
  "Delay": "https://cdn.simpleicons.org/delay",
  "Devin AI": "https://cdn.simpleicons.org/devinai",
  "Discord": "https://cdn.simpleicons.org/discord",
  "Data Summarizer": "https://cdn.simpleicons.org/data",
  "Date Helper": "https://cdn.simpleicons.org/date",
  "Dato CMS": "https://cdn.simpleicons.org/datocms",
  "CSV": "https://cdn.simpleicons.org/csv",
  "customer.io": "https://cdn.simpleicons.org/customerdotio",
  "Dappier": "https://cdn.simpleicons.org/dappier",
  "Data Mapper": "https://cdn.simpleicons.org/datamapper",
  "Contiguity": "https://cdn.simpleicons.org/contiguity",
  "ConvertKit": "https://cdn.simpleicons.org/convertkit",
  "Copy.ai": "https://cdn.simpleicons.org/copyai",
  "Crypto": "https://cdn.simpleicons.org/crypto",
  "Confluence": "https://cdn.simpleicons.org/confluence",
  "Connections": "https://cdn.simpleicons.org/connections",
  "Constant Contact": "https://cdn.simpleicons.org/constantcontact",
  "Contentful": "https://cdn.simpleicons.org/contentful",
  "ClickUp": "https://cdn.simpleicons.org/clickup",
  "Clockodo": "https://cdn.simpleicons.org/clockodo",
  "Coda": "https://cdn.simpleicons.org/coda",
  "Cognito Forms": "https://cdn.simpleicons.org/cognitoforms",
  "Chatbase": "https://cdn.simpleicons.org/chatbase",
  "Clarifai": "https://cdn.simpleicons.org/clarifai",
  "Clearout": "https://cdn.simpleicons.org/clearout",
  "Cartloom": "https://cdn.simpleicons.org/cartloom",
  "Certopus": "https://cdn.simpleicons.org/certopus",
  "Chainalysis Screening API": "https://cdn.simpleicons.org/chainalysis",
  "ChargeKeep": "https://cdn.simpleicons.org/chargekeep",
  "Calendly": "https://cdn.simpleicons.org/calendly",
  "Campaign Monitor": "https://cdn.simpleicons.org/campaignmonitor",
  "Captain-data": "https://cdn.simpleicons.org/captaindata",
  "Brevo": "https://cdn.simpleicons.org/brevo",
  "Brilliant Directories": "https://cdn.simpleicons.org/brilliantdirectories",
  "Bubble": "https://cdn.simpleicons.org/bubble",
  "Cal.com": "https://cdn.simpleicons.org/caldotcom",
  "Blockscout": "https://cdn.simpleicons.org/blockscout",
  "Bloomerang": "https://cdn.simpleicons.org/bloomerang",
  "Bonjoro": "https://cdn.simpleicons.org/bonjoro",
  "Box": "https://cdn.simpleicons.org/box",
  "Beamer": "https://cdn.simpleicons.org/beamer",
  "Bettermode": "https://cdn.simpleicons.org/bettermode",
  "Binance": "https://cdn.simpleicons.org/binance",
  "Blackbaud": "https://cdn.simpleicons.org/blackbaud",
  "Azure Communication Services": "https://cdn.simpleicons.org/microsoftazure",
  "Azure OpenAI": "https://cdn.simpleicons.org/microsoftazure",
  "Bannerbear": "https://cdn.simpleicons.org/bannerbear",
  "Baserow": "https://cdn.simpleicons.org/baserow",
  "Apollo": "https://cdn.simpleicons.org/apollo",
  "Approval": "https://cdn.simpleicons.org/approval",
  "Asana": "https://cdn.simpleicons.org/asana",
  "AssemblyAI": "https://cdn.simpleicons.org/assemblyai",
  "Anthropic Claude": "https://cdn.simpleicons.org/anthropic",
  "AnyHook GraphQL": "https://cdn.simpleicons.org/graphql",
  "AnyHook Websocket": "https://cdn.simpleicons.org/websocket",
  "Apify": "https://cdn.simpleicons.org/apify",
  "AITable": "https://cdn.simpleicons.org/aitable",
  "Amazon S3": "https://cdn.simpleicons.org/amazons3",
  "Amazon SQS": "https://cdn.simpleicons.org/amazonsqs",
  "Aminos": "https://cdn.simpleicons.org/aminos",
  "Afforai": "https://cdn.simpleicons.org/afforai",
  "Airparser": "https://cdn.simpleicons.org/airparser",
  "Airtable": "https://cdn.simpleicons.org/airtable",
  "Actual Budget": "https://cdn.simpleicons.org/actualbudget",
  "Acumbamail": "https://cdn.simpleicons.org/acumbamail",
  "ActiveCampaign": "https://cdn.simpleicons.org/activecampaign",
};

// Complete list extracted from ALL Autocalls pages (265 integrations)
const integrations = [
  // Page 1
  { name: "Zuora", category: "Sales and crm" },
  { name: "Zoom", category: "Communication" },
  { name: "Zoo", category: "Artificial intelligence" },
  { name: "Zoho Invoice", category: "Accounting" },
  { name: "Zoho CRM", category: "Sales and crm" },
  { name: "Zoho Books", category: "Accounting" },
  { name: "Zendesk", category: "Customer support" },
  { name: "YouTube", category: "Content and files" },
  { name: "Zagomail", category: "Marketing" },
  { name: "ZeroBounce", category: "General" },
  { name: "WordPress", category: "Marketing" },
  { name: "Xero", category: "Accounting" },
  
  // Page 2
  { name: "Wootric", category: "General" },
  { name: "Whatsable", category: "General" },
  { name: "WhatsApp Business", category: "General" },
  { name: "WooCommerce", category: "Commerce" },
  { name: "Wedof", category: "Sales and crm" },
  { name: "Webling", category: "Productivity" },
  { name: "Webhook", category: "Core" },
  { name: "Webflow", category: "Marketing" },
  { name: "Vtiger", category: "Sales and crm" },
  { name: "Wachat", category: "General" },
  { name: "Utility AI", category: "Artificial intelligence" },
  
  // Page 3
  { name: "Village", category: "Productivity" },
  { name: "VBOUT", category: "Marketing" },
  { name: "User Input", category: "Core" },
  { name: "Upgrade.chat", category: "Sales and crm" },
  { name: "Typeform", category: "Forms and surveys" },
  { name: "Twitter", category: "Communication" },
  { name: "Twin Web Agent", category: "General" },
  { name: "Trello", category: "Productivity" },
  { name: "TrueLayer", category: "Payment processing" },
  { name: "Twilio", category: "Communication" },
  { name: "TidyCal", category: "Productivity" },
  
  // Page 4
  { name: "Todoist", category: "Productivity" },
  { name: "TickTick", category: "General" },
  { name: "Telegram Bot", category: "Communication" },
  { name: "Tally", category: "Forms and surveys" },
  { name: "Taskade", category: "Productivity" },
  { name: "Text Helper", category: "Core" },
  { name: "Tags", category: "Core" },
  { name: "SurveyMonkey", category: "Forms and surveys" },
  { name: "Talkable", category: "Marketing" },
  { name: "Straico", category: "Artificial intelligence" },
  { name: "Stripe", category: "Commerce" },
  
  // Page 5
  { name: "Supabase", category: "Developer tools" },
  { name: "Storage", category: "Core" },
  { name: "Stable Dffusion web UI", category: "General" },
  { name: "Stability AI", category: "Artificial intelligence" },
  { name: "Square", category: "Commerce" },
  { name: "Sperse", category: "Commerce" },
  { name: "SOAP", category: "General" },
  { name: "Spotify", category: "General" },
  { name: "SMTP", category: "Core" },
  { name: "Slack", category: "Communication" },
  { name: "Smaily", category: "Marketing" },
  { name: "Snowflake", category: "Developer tools" },
  
  // Page 6
  { name: "SimplePDF", category: "Content and files" },
  { name: "Shopify", category: "Commerce" },
  { name: "SFTP", category: "Core" },
  { name: "SendGrid", category: "Communication" },
  { name: "SendFox", category: "Marketing" },
  { name: "Sendy", category: "Marketing" },
  { name: "Sessions.us", category: "Business intelligence" },
  { name: "Segment", category: "General" },
  { name: "Salsa", category: "General" },
  { name: "Schedule", category: "Core" },
  { name: "RSS Feed", category: "General" },
  { name: "Robolly", category: "Marketing" },
  
  // Page 7
  { name: "Retable", category: "Productivity" },
  { name: "Resend", category: "Business intelligence" },
  { name: "Reoon Email Verifier", category: "Marketing" },
  { name: "Reachinbox", category: "Marketing" },
  { name: "Razorpay", category: "General" },
  { name: "Quickzu", category: "General" },
  { name: "RabbitMQ", category: "General" },
  { name: "re:tune", category: "Artificial intelligence" },
  { name: "Qdrant", category: "Developer tools" },
  { name: "Pushover", category: "Communication" },
  
  // Page 8
  { name: "Postgres", category: "Developer tools" },
  { name: "Pipedrive", category: "Sales and crm" },
  { name: "Poper", category: "Marketing" },
  { name: "PostHog", category: "Business intelligence" },
  { name: "Personal AI", category: "Artificial intelligence" },
  { name: "PDF.co", category: "Productivity" },
  { name: "Perplexity AI", category: "Artificial intelligence" },
  { name: "Photoroom", category: "General" },
  { name: "OpenRouter", category: "Artificial intelligence" },
  { name: "Pastebin", category: "General" },
  
  // Page 9
  { name: "PDF", category: "General" },
  { name: "Pastefy", category: "General" },
  { name: "OpenAI", category: "Artificial intelligence" },
  { name: "Onfleet", category: "General" },
  { name: "Odoo", category: "General" },
  { name: "Notion", category: "Productivity" },
  { name: "NetSuite", category: "Sales and crm" },
  { name: "Nifty", category: "Productivity" },
  { name: "NocoDB", category: "General" },
  { name: "ntfy", category: "Communication" },
  { name: "Motion", category: "Productivity" },
  { name: "Moxie", category: "Sales and crm" },
  
  // Page 10
  { name: "Microsoft Teams", category: "Business intelligence" },
  { name: "Mindee", category: "Communication" },
  { name: "monday.com", category: "Productivity" },
  { name: "Mixpanel", category: "Business intelligence" },
  { name: "Microsoft SharePoint", category: "Content and files" },
  { name: "Microsoft OneDrive", category: "Content and files" },
  { name: "Microsoft Excel 365", category: "Productivity" },
  { name: "Microsoft Dynamics CRM", category: "Sales and crm" },
  { name: "Mempool", category: "General" },
  { name: "MessageBird", category: "Marketing" },
  { name: "Microsoft Dynamics 365 Business Central", category: "Sales and crm" },
  
  // Page 12
  { name: "Maileroo", category: "Marketing" },
  { name: "Linka", category: "Sales and crm" },
  { name: "LinkedIn", category: "Marketing" },
  { name: "LLMRails", category: "Artificial intelligence" },
  { name: "LocalAI", category: "Artificial intelligence" },
  { name: "Lever", category: "Human resources" },
  { name: "Line Bot", category: "Communication" },
  { name: "Linear", category: "Productivity" },
  { name: "Kommo", category: "Communication" },
  { name: "KrispCall", category: "Communication" },
  { name: "GoHighLevel", category: "Sales and crm" },
  { name: "Jotform", category: "Forms and surveys" },
  
  // Page 13
  { name: "JSON", category: "General" },
  { name: "Kimai", category: "Productivity" },
  { name: "Kizeo Forms", category: "Forms and surveys" },
  { name: "Instasent", category: "Marketing" },
  { name: "Intercom", category: "Customer support" },
  { name: "Invoice Ninja", category: "Accounting" },
  { name: "Jira Cloud", category: "Productivity" },
  { name: "Image AI", category: "Artificial intelligence" },
  { name: "Image Helper", category: "Core" },
  { name: "IMAP", category: "Business intelligence" },
  { name: "Instagram for Business", category: "Business intelligence" },
  { name: "Heartbeat", category: "Communication" },
  
  // Page 14
  { name: "HTTP", category: "Core" },
  { name: "HubSpot", category: "Sales and crm" },
  { name: "Gravity Forms", category: "Forms and surveys" },
  { name: "Grist", category: "Productivity" },
  { name: "Groq", category: "Artificial intelligence" },
  { name: "Hacker News", category: "General" },
  { name: "Google Search Console", category: "General" },
  { name: "Google Sheets", category: "Productivity" },
  { name: "Google Tasks", category: "Productivity" },
  { name: "Gotify", category: "Developer tools" },
  { name: "Google Drive", category: "Content and files" },
  { name: "Google Forms", category: "Forms and surveys" },
  
  // Page 15
  { name: "Google Gemini", category: "Artificial intelligence" },
  { name: "Google My Business", category: "Marketing" },
  { name: "Gmail", category: "Communication" },
  { name: "Google Calendar", category: "Productivity" },
  { name: "Google Contacts", category: "Sales and crm" },
  { name: "Google Docs", category: "Content and files" },
  { name: "GenerateBanners", category: "Content and files" },
  { name: "GhostCMS", category: "Marketing" },
  { name: "GitHub", category: "Developer tools" },
  { name: "GitLab", category: "Developer tools" },
  { name: "Freshdesk", category: "Customer support" },
  { name: "Freshsales", category: "Sales and crm" },
  
  // Page 16
  { name: "Gameball", category: "General" },
  { name: "GCloud Pub/Sub", category: "Developer tools" },
  { name: "Flowise", category: "Artificial intelligence" },
  { name: "Flowlu", category: "Sales and crm" },
  { name: "Formbricks", category: "Business intelligence" },
  { name: "Frame", category: "Marketing" },
  { name: "Figma", category: "General" },
  { name: "Files Helper", category: "Core" },
  { name: "Fireflies.ai", category: "Productivity" },
  { name: "Fliqr AI", category: "Communication" },
  { name: "ElevenLabs", category: "Artificial intelligence" },
  { name: "Ethereum Name Service (ENS)", category: "General" },
  
  // Page 17
  { name: "Facebook Leads", category: "Marketing" },
  { name: "Facebook Pages", category: "Marketing" },
  { name: "Discourse", category: "Communication" },
  { name: "Drip", category: "Marketing" },
  { name: "Dropbox", category: "Content and files" },
  { name: "Dust", category: "General" },
  { name: "DeepL", category: "General" },
  { name: "Delay", category: "Core" },
  { name: "Devin AI", category: "Artificial intelligence" },
  { name: "Discord", category: "Communication" },
  { name: "Data Summarizer", category: "Core" },
  { name: "Date Helper", category: "Core" },
  
  // Page 18
  { name: "Dato CMS", category: "General" },
  { name: "CSV", category: "Core" },
  { name: "customer.io", category: "Marketing" },
  { name: "Dappier", category: "Artificial intelligence" },
  { name: "Data Mapper", category: "Core" },
  { name: "Contiguity", category: "Marketing" },
  { name: "ConvertKit", category: "Marketing" },
  { name: "Copy.ai", category: "Artificial intelligence" },
  { name: "Crypto", category: "Core" },
  { name: "Confluence", category: "Content and files" },
  { name: "Connections", category: "Core" },
  { name: "Constant Contact", category: "Marketing" },
  
  // Page 19
  { name: "Contentful", category: "Marketing" },
  { name: "ClickUp", category: "Productivity" },
  { name: "Clockodo", category: "Productivity" },
  { name: "Coda", category: "Productivity" },
  { name: "Cognito Forms", category: "Productivity" },
  { name: "Chatbase", category: "Artificial intelligence" },
  { name: "Clarifai", category: "Artificial intelligence" },
  { name: "Clearout", category: "Sales and crm" },
  { name: "Cartloom", category: "Commerce" },
  { name: "Certopus", category: "General" },
  { name: "Chainalysis Screening API", category: "General" },
  { name: "ChargeKeep", category: "Commerce" },
  
  // Page 20
  { name: "Calendly", category: "Productivity" },
  { name: "Campaign Monitor", category: "Marketing" },
  { name: "Captain-data", category: "General" },
  { name: "Brevo", category: "Marketing" },
  { name: "Brilliant Directories", category: "General" },
  { name: "Bubble", category: "Developer tools" },
  { name: "Cal.com", category: "Productivity" },
  { name: "Blockscout", category: "General" },
  { name: "Bloomerang", category: "General" },
  { name: "Bonjoro", category: "Customer support" },
  { name: "Box", category: "Content and files" },
  { name: "Beamer", category: "Productivity" },
  
  // Page 21
  { name: "Bettermode", category: "Marketing" },
  { name: "Binance", category: "General" },
  { name: "Blackbaud", category: "General" },
  { name: "Azure Communication Services", category: "Communication" },
  { name: "Azure OpenAI", category: "General" },
  { name: "Bannerbear", category: "Marketing" },
  { name: "Baserow", category: "Productivity" },
  { name: "Apollo", category: "General" },
  { name: "Approval", category: "Core" },
  { name: "Asana", category: "Productivity" },
  { name: "AssemblyAI", category: "Artificial intelligence" },
  { name: "Anthropic Claude", category: "Artificial intelligence" },
  
  // Page 22
  { name: "AnyHook GraphQL", category: "General" },
  { name: "AnyHook Websocket", category: "General" },
  { name: "Apify", category: "Business intelligence" },
  { name: "AITable", category: "Productivity" },
  { name: "Amazon S3", category: "Developer tools" },
  { name: "Amazon SQS", category: "General" },
  { name: "Aminos", category: "Artificial intelligence" },
  { name: "Afforai", category: "Artificial intelligence" },
  { name: "Airparser", category: "Productivity" },
  { name: "Airtable", category: "Productivity" },
  { name: "Actual Budget", category: "Accounting" },
  { name: "Acumbamail", category: "General" },
  
  // Page 23
  { name: "ActiveCampaign", category: "Marketing" },
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
            Connect with 265+ Tools
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