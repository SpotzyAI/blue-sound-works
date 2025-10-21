import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Search, 
  Plug2, 
  Zap, 
  TrendingUp, 
  Sparkles,
  Filter,
  LayoutGrid,
  Check
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const popularIntegrations = [
  "Slack", "Google Drive", "Stripe", "OpenAI", "Salesforce", 
  "HubSpot", "Shopify", "Airtable", "Notion", "Zapier"
];

// Logo URLs using Clearbit Logo API (free, no auth required)
const logoMap: Record<string, string> = {
  "ActiveCampaign": "https://logo.clearbit.com/activecampaign.com",
  "Actual Budget": "https://logo.clearbit.com/actualbudget.org",
  "Acumbamail": "https://logo.clearbit.com/acumbamail.com",
  "Afforai": "https://logo.clearbit.com/afforai.com",
  "Airtable": "https://logo.clearbit.com/airtable.com",
  "Airparser": "https://logo.clearbit.com/airparser.com",
  "AITable": "https://logo.clearbit.com/aitable.ai",
  "Amazon S3": "https://logo.clearbit.com/aws.amazon.com",
  "Amazon SQS": "https://logo.clearbit.com/aws.amazon.com",
  "Aminos": "https://logo.clearbit.com/aminos.ai",
  "AnyHook GraphQL": "https://logo.clearbit.com/graphql.org",
  "AnyHook Websocket": "https://cdn.simpleicons.org/websocket",
  "Anthropic Claude": "https://logo.clearbit.com/anthropic.com",
  "Apollo": "https://logo.clearbit.com/apollographql.com",
  "Approval": "https://cdn.simpleicons.org/checkmarx",
  "Apify": "https://logo.clearbit.com/apify.com",
  "Asana": "https://logo.clearbit.com/asana.com",
  "AssemblyAI": "https://logo.clearbit.com/assemblyai.com",
  "Azure Communication Services": "https://logo.clearbit.com/azure.microsoft.com",
  "Azure OpenAI": "https://logo.clearbit.com/azure.microsoft.com",
  "Bannerbear": "https://logo.clearbit.com/bannerbear.com",
  "Baserow": "https://logo.clearbit.com/baserow.io",
  "Beamer": "https://logo.clearbit.com/getbeamer.com",
  "Bettermode": "https://logo.clearbit.com/bettermode.com",
  "Binance": "https://logo.clearbit.com/binance.com",
  "Blackbaud": "https://logo.clearbit.com/blackbaud.com",
  "Bloomerang": "https://logo.clearbit.com/bloomerang.com",
  "Blockscout": "https://logo.clearbit.com/blockscout.com",
  "Bonjoro": "https://logo.clearbit.com/bonjoro.com",
  "Box": "https://logo.clearbit.com/box.com",
  "Brevo": "https://logo.clearbit.com/brevo.com",
  "Brilliant Directories": "https://logo.clearbit.com/brilliantdirectories.com",
  "Bubble": "https://logo.clearbit.com/bubble.io",
  "Cal.com": "https://logo.clearbit.com/cal.com",
  "Calendly": "https://logo.clearbit.com/calendly.com",
  "Campaign Monitor": "https://logo.clearbit.com/campaignmonitor.com",
  "Captain-data": "https://logo.clearbit.com/captaindata.co",
  "Cartloom": "https://logo.clearbit.com/cartloom.com",
  "Certopus": "https://logo.clearbit.com/certopus.com",
  "Chainalysis Screening API": "https://logo.clearbit.com/chainalysis.com",
  "Chatbase": "https://logo.clearbit.com/chatbase.co",
  "ChargeKeep": "https://logo.clearbit.com/chargekeep.com",
  "Clarifai": "https://logo.clearbit.com/clarifai.com",
  "ClickUp": "https://logo.clearbit.com/clickup.com",
  "Clockodo": "https://logo.clearbit.com/clockodo.com",
  "Coda": "https://logo.clearbit.com/coda.io",
  "Cognito Forms": "https://logo.clearbit.com/cognitoforms.com",
  "Confluence": "https://logo.clearbit.com/atlassian.com",
  "Connections": "https://cdn.simpleicons.org/connection",
  "Constant Contact": "https://logo.clearbit.com/constantcontact.com",
  "Contentful": "https://logo.clearbit.com/contentful.com",
  "Contiguity": "https://logo.clearbit.com/contiguity.co",
  "ConvertKit": "https://logo.clearbit.com/convertkit.com",
  "Copy.ai": "https://logo.clearbit.com/copy.ai",
  "CSV": "https://cdn.simpleicons.org/files",
  "customer.io": "https://logo.clearbit.com/customer.io",
  "Crypto": "https://cdn.simpleicons.org/bitcoin",
  "Dappier": "https://logo.clearbit.com/dappier.com",
  "Data Mapper": "https://cdn.simpleicons.org/databricks",
  "Date Helper": "https://cdn.simpleicons.org/calendar",
  "Data Summarizer": "https://cdn.simpleicons.org/databricks",
  "Dato CMS": "https://logo.clearbit.com/datocms.com",
  "DeepL": "https://logo.clearbit.com/deepl.com",
  "Delay": "https://cdn.simpleicons.org/clockify",
  "Devin AI": "https://logo.clearbit.com/devin.ai",
  "Discourse": "https://logo.clearbit.com/discourse.org",
  "Drip": "https://logo.clearbit.com/drip.com",
  "Dropbox": "https://logo.clearbit.com/dropbox.com",
  "Dust": "https://logo.clearbit.com/dust.tt",
  "ElevenLabs": "https://logo.clearbit.com/elevenlabs.io",
  "Ethereum Name Service (ENS)": "https://logo.clearbit.com/ens.domains",
  "Facebook Leads": "https://logo.clearbit.com/facebook.com",
  "Facebook Pages": "https://logo.clearbit.com/facebook.com",
  "Figma": "https://logo.clearbit.com/figma.com",
  "Files Helper": "https://cdn.simpleicons.org/files",
  "Fireflies.ai": "https://logo.clearbit.com/fireflies.ai",
  "Fliqr AI": "https://logo.clearbit.com/fliqr.ai",
  "Flowise": "https://logo.clearbit.com/flowiseai.com",
  "Flowlu": "https://logo.clearbit.com/flowlu.com",
  "Formbricks": "https://logo.clearbit.com/formbricks.com",
  "Frame": "https://logo.clearbit.com/frame.io",
  "Freshdesk": "https://logo.clearbit.com/freshdesk.com",
  "Freshsales": "https://logo.clearbit.com/freshsales.io",
  "Gameball": "https://logo.clearbit.com/gameball.co",
  "GCloud Pub/Sub": "https://logo.clearbit.com/cloud.google.com",
  "GenerateBanners": "https://logo.clearbit.com/generatebanners.com",
  "GhostCMS": "https://logo.clearbit.com/ghost.org",
  "GitHub": "https://logo.clearbit.com/github.com",
  "GitLab": "https://logo.clearbit.com/gitlab.com",
  "Gmail": "https://logo.clearbit.com/gmail.com",
  "GoHighLevel": "https://logo.clearbit.com/gohighlevel.com",
  "Google Calendar": "https://logo.clearbit.com/google.com",
  "Google Contacts": "https://logo.clearbit.com/google.com",
  "Google Docs": "https://logo.clearbit.com/google.com",
  "Google Drive": "https://logo.clearbit.com/google.com",
  "Google Forms": "https://logo.clearbit.com/google.com",
  "Google Gemini": "https://logo.clearbit.com/google.com",
  "Google My Business": "https://logo.clearbit.com/google.com",
  "Google Search Console": "https://logo.clearbit.com/google.com",
  "Google Sheets": "https://logo.clearbit.com/google.com",
  "Google Tasks": "https://logo.clearbit.com/google.com",
  "Gotify": "https://logo.clearbit.com/gotify.net",
  "Gravity Forms": "https://logo.clearbit.com/gravityforms.com",
  "Grist": "https://logo.clearbit.com/getgrist.com",
  "Groq": "https://logo.clearbit.com/groq.com",
  "Hacker News": "https://logo.clearbit.com/ycombinator.com",
  "Heartbeat": "https://logo.clearbit.com/heartbeat.chat",
  "HubSpot": "https://logo.clearbit.com/hubspot.com",
  "HTTP": "https://cdn.simpleicons.org/http",
  "Image AI": "https://cdn.simpleicons.org/adobephotoshop",
  "Image Helper": "https://cdn.simpleicons.org/adobephotoshop",
  "IMAP": "https://cdn.simpleicons.org/email",
  "Instagram for Business": "https://logo.clearbit.com/instagram.com",
  "Instasent": "https://logo.clearbit.com/instasent.com",
  "Intercom": "https://logo.clearbit.com/intercom.com",
  "Invoice Ninja": "https://logo.clearbit.com/invoiceninja.com",
  "Jira Cloud": "https://logo.clearbit.com/atlassian.com",
  "JSON": "https://cdn.simpleicons.org/json",
  "Jotform": "https://logo.clearbit.com/jotform.com",
  "Kimai": "https://logo.clearbit.com/kimai.org",
  "Kizeo Forms": "https://logo.clearbit.com/kizeoforms.com",
  "Kommo": "https://logo.clearbit.com/kommo.com",
  "KrispCall": "https://logo.clearbit.com/krispcall.com",
  "Lever": "https://logo.clearbit.com/lever.co",
  "Line Bot": "https://logo.clearbit.com/line.me",
  "Linear": "https://logo.clearbit.com/linear.app",
  "Linka": "https://logo.clearbit.com/linka.com",
  "LinkedIn": "https://logo.clearbit.com/linkedin.com",
  "LocalAI": "https://logo.clearbit.com/localai.io",
  "LLMRails": "https://logo.clearbit.com/llmrails.com",
  "Mailchain": "https://logo.clearbit.com/mailchain.com",
  "Mailchimp": "https://logo.clearbit.com/mailchimp.com",
  "MailerLite": "https://logo.clearbit.com/mailerlite.com",
  "Maileroo": "https://logo.clearbit.com/maileroo.com",
  "Mailjet": "https://logo.clearbit.com/mailjet.com",
  "Matomo": "https://logo.clearbit.com/matomo.org",
  "Math Helper": "https://cdn.simpleicons.org/symbolab",
  "Matrix": "https://logo.clearbit.com/matrix.org",
  "Mautic": "https://logo.clearbit.com/mautic.org",
  "Mastodon": "https://logo.clearbit.com/joinmastodon.org",
  "Mem": "https://logo.clearbit.com/mem.ai",
  "Mempool": "https://logo.clearbit.com/mempool.space",
  "MessageBird": "https://logo.clearbit.com/messagebird.com",
  "Microsoft Dynamics 365 Business Central": "https://logo.clearbit.com/microsoft.com",
  "Microsoft Dynamics CRM": "https://logo.clearbit.com/microsoft.com",
  "Microsoft Excel 365": "https://logo.clearbit.com/office.com",
  "Microsoft OneDrive": "https://logo.clearbit.com/onedrive.live.com",
  "Microsoft SharePoint": "https://logo.clearbit.com/sharepoint.com",
  "Microsoft Teams": "https://logo.clearbit.com/microsoft.com",
  "Mindee": "https://logo.clearbit.com/mindee.com",
  "Mixpanel": "https://logo.clearbit.com/mixpanel.com",
  "monday.com": "https://logo.clearbit.com/monday.com",
  "Motion": "https://logo.clearbit.com/usemotion.com",
  "Moxie": "https://logo.clearbit.com/moxie.com",
  "NetSuite": "https://logo.clearbit.com/netsuite.com",
  "Nifty": "https://logo.clearbit.com/niftypm.com",
  "NocoDB": "https://logo.clearbit.com/nocodb.com",
  "Notion": "https://logo.clearbit.com/notion.so",
  "ntfy": "https://logo.clearbit.com/ntfy.sh",
  "Odoo": "https://logo.clearbit.com/odoo.com",
  "Onfleet": "https://logo.clearbit.com/onfleet.com",
  "OpenAI": "https://logo.clearbit.com/openai.com",
  "Pastefy": "https://logo.clearbit.com/pastefy.app",
  "PDF": "https://cdn.simpleicons.org/adobeacrobatreader",
  "Pipedrive": "https://logo.clearbit.com/pipedrive.com",
  "Pocket": "https://logo.clearbit.com/getpocket.com",
  "PostHog": "https://logo.clearbit.com/posthog.com",
  "Postmark": "https://logo.clearbit.com/postmarkapp.com",
  "Printful": "https://logo.clearbit.com/printful.com",
  "ProcessKit": "https://logo.clearbit.com/processkit.com",
  "Qonto": "https://logo.clearbit.com/qonto.com",
  "QuickBooks": "https://logo.clearbit.com/quickbooks.intuit.com",
  "QuickChart": "https://logo.clearbit.com/quickchart.io",
  "R": "https://cdn.simpleicons.org/r",
  "Readwise": "https://logo.clearbit.com/readwise.io",
  "Redash": "https://logo.clearbit.com/redash.io",
  "Recruit CRM": "https://logo.clearbit.com/recruitcrm.io",
  "Revio": "https://logo.clearbit.com/revio.com",
  "Robly": "https://logo.clearbit.com/robly.com",
  "RSS": "https://cdn.simpleicons.org/rss",
  "Rule": "https://logo.clearbit.com/rule.se",
  "Sage Accounting": "https://logo.clearbit.com/sage.com",
  "Salesforce": "https://logo.clearbit.com/salesforce.com",
  "Salesforce Pardot": "https://logo.clearbit.com/pardot.com",
  "Salesblink": "https://logo.clearbit.com/salesblink.io",
  "Salesflare": "https://logo.clearbit.com/salesflare.com",
  "Scalenut": "https://logo.clearbit.com/scalenut.com",
  "Scrapfly": "https://logo.clearbit.com/scrapfly.io",
  "Segment": "https://logo.clearbit.com/segment.com",
  "Selzy": "https://logo.clearbit.com/selzy.com",
  "SendFox": "https://logo.clearbit.com/sendfox.com",
  "SendGrid": "https://logo.clearbit.com/sendgrid.com",
  "SendPulse": "https://logo.clearbit.com/sendpulse.com",
  "Sendy": "https://logo.clearbit.com/sendy.co",
  "Senja": "https://logo.clearbit.com/senja.io",
  "Sellsy": "https://logo.clearbit.com/sellsy.com",
  "Serpstat": "https://logo.clearbit.com/serpstat.com",
  "Shopify": "https://logo.clearbit.com/shopify.com",
  "Smartsuite": "https://logo.clearbit.com/smartsuite.com",
  "Stackby": "https://logo.clearbit.com/stackby.com",
  "Stacker": "https://logo.clearbit.com/stackerhq.com",
  "Storyblok": "https://logo.clearbit.com/storyblok.com",
  "Stripe": "https://logo.clearbit.com/stripe.com",
  "Success.ai": "https://logo.clearbit.com/success.ai",
  "SugarCRM": "https://logo.clearbit.com/sugarcrm.com",
  "SumUp": "https://logo.clearbit.com/sumup.com",
  "Superblocks": "https://logo.clearbit.com/superblocks.com",
  "Superforms": "https://logo.clearbit.com/superforms.com",
  "Superphone": "https://logo.clearbit.com/superphone.io",
  "Supabase": "https://logo.clearbit.com/supabase.com",
  "SurveySparrow": "https://logo.clearbit.com/surveysparrow.com",
  "SysAid": "https://logo.clearbit.com/sysaid.com",
  "Squarespace": "https://logo.clearbit.com/squarespace.com",
  "Tally": "https://logo.clearbit.com/tally.so",
  "TanStack Query": "https://logo.clearbit.com/tanstack.com",
  "Teamleader": "https://logo.clearbit.com/teamleader.eu",
  "Teamwork": "https://logo.clearbit.com/teamwork.com",
  "Telegram": "https://logo.clearbit.com/telegram.org",
  "Text": "https://cdn.simpleicons.org/text",
  "TidyCal": "https://logo.clearbit.com/tidycal.com",
  "Trello": "https://logo.clearbit.com/trello.com",
  "TrueLayer": "https://logo.clearbit.com/truelayer.com",
  "Twin Web Agent": "https://logo.clearbit.com/twin.com",
  "Twitter": "https://logo.clearbit.com/twitter.com",
  "Typeform": "https://logo.clearbit.com/typeform.com",
  "Upgrade.chat": "https://logo.clearbit.com/upgrade.chat",
  "User Input": "https://cdn.simpleicons.org/userinput",
  "Utility AI": "https://cdn.simpleicons.org/ai",
  "VBOUT": "https://logo.clearbit.com/vbout.com",
  "Village": "https://logo.clearbit.com/village.app",
  "Vtiger": "https://logo.clearbit.com/vtiger.com",
  "Wachat": "https://logo.clearbit.com/wechat.com",
  "Webflow": "https://logo.clearbit.com/webflow.com",
  "Webhook": "https://cdn.simpleicons.org/webhook",
  "Webling": "https://logo.clearbit.com/webling.ch",
  "Wedof": "https://logo.clearbit.com/wedof.com",
  "Whatsable": "https://logo.clearbit.com/whatsable.com",
  "WhatsApp Business": "https://logo.clearbit.com/whatsapp.com",
  "WooCommerce": "https://logo.clearbit.com/woocommerce.com",
  "WordPress": "https://logo.clearbit.com/wordpress.org",
  "Wootric": "https://logo.clearbit.com/wootric.com",
  "Xero": "https://logo.clearbit.com/xero.com",
  "YouTube": "https://logo.clearbit.com/youtube.com",
  "Zagomail": "https://logo.clearbit.com/zagomail.com",
  "Zendesk": "https://logo.clearbit.com/zendesk.com",
  "ZeroBounce": "https://logo.clearbit.com/zerobounce.net",
  "ZeroLex": "https://logo.clearbit.com/zerolex.com",
  "Zoho Books": "https://logo.clearbit.com/zoho.com",
  "Zoho CRM": "https://logo.clearbit.com/zoho.com",
  "Zoho Inventory": "https://logo.clearbit.com/zoho.com",
  "Zoho Invoice": "https://logo.clearbit.com/zoho.com",
  "Zoo": "https://logo.clearbit.com/zoo.dev",
  "Zoom": "https://logo.clearbit.com/zoom.us",
  "ZoomInfo": "https://logo.clearbit.com/zoominfo.com",
  "Zuora": "https://logo.clearbit.com/zuora.com",
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
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredIntegrations = integrations
    .filter((integration) => {
      const matchesCategory =
        selectedCategory === "All Categories" ||
        integration.category === selectedCategory;
      const matchesSearch = integration.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredIntegrations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedIntegrations = filteredIntegrations.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Plug2 className="h-4 w-4" />
            <span>Seamless Integrations</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Connect with <span className="text-primary">270+</span> Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            Seamlessly integrate your favorite platforms and automate your workflow with our powerful no-code platform
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Plug2 className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">270+</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">1-Click</div>
              <div className="text-sm text-muted-foreground">Setup</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">Real-time</div>
              <div className="text-sm text-muted-foreground">Sync</div>
            </div>
          </div>

          {/* Popular Integrations Preview */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Most Popular
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.slice(1, 7).map((category, index) => (
                <Button 
                  key={category} 
                  variant="secondary" 
                  size="sm"
                  className="hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] h-12">
                    <LayoutGrid className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category)}
                    size="sm"
                    className="transition-all duration-300 hover-scale"
                  >
                    {selectedCategory === category && (
                      <Check className="h-3 w-3 mr-1" />
                    )}
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground text-center">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredIntegrations.length)} of {filteredIntegrations.length} integrations
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedIntegrations.map((integration, index) => (
              <div
                key={integration.name}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <div className="relative mb-4">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {getLogo(integration.name)}
                    <div className="hidden w-16 h-16 bg-primary/10 rounded-xl items-center justify-center text-2xl font-bold text-primary shadow-lg">
                      {integration.name.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                
                <span className="text-xs text-muted-foreground px-3 py-1 bg-muted rounded-full mb-4 inline-flex items-center gap-1">
                  <Plug2 className="h-3 w-3" />
                  {integration.category}
                </span>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  asChild
                >
                  <a href={`/integration/${integration.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    View Details
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No integrations found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Pagination */}
          {filteredIntegrations.length > itemsPerPage && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => setCurrentPage(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;