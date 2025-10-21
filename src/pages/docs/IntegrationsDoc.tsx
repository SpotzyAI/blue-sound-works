import DocsLayout from "@/components/DocsLayout";
import { Link } from "react-router-dom";

const IntegrationsDoc = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Integration Overview</h1>
        
        <p className="text-lg text-muted-foreground">
          Connect Spotzy.ai with 265+ tools and services to extend your AI agent's capabilities and 
          streamline your workflows.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-primary">Popular Integrations</h3>
          <p className="text-sm text-muted-foreground">
            View our complete list of{" "}
            <Link to="/integrations" className="text-primary hover:underline">
              265+ integrations
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Integration Categories</h2>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">CRM & Sales</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Salesforce</li>
              <li>• HubSpot</li>
              <li>• Pipedrive</li>
              <li>• Zoho CRM</li>
              <li>• Microsoft Dynamics</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Calendar & Scheduling</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Google Calendar</li>
              <li>• Microsoft Outlook</li>
              <li>• Calendly</li>
              <li>• Acuity Scheduling</li>
              <li>• Cal.com</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Communication</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Slack</li>
              <li>• Microsoft Teams</li>
              <li>• Twilio</li>
              <li>• SendGrid</li>
              <li>• Mailchimp</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">E-commerce</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Shopify</li>
              <li>• WooCommerce</li>
              <li>• BigCommerce</li>
              <li>• Stripe</li>
              <li>• Square</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Databases</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Supabase</li>
              <li>• PostgreSQL</li>
              <li>• MySQL</li>
              <li>• Airtable</li>
              <li>• MongoDB</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Project Management</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Asana</li>
              <li>• Trello</li>
              <li>• Jira</li>
              <li>• Monday.com</li>
              <li>• ClickUp</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">How Integrations Work</h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6">1. Connect Your Account</h3>
        <p className="text-muted-foreground">
          Authenticate with the service you want to integrate using OAuth or API keys. Your credentials 
          are securely encrypted and stored.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">2. Configure Actions</h3>
        <p className="text-muted-foreground">
          Define what actions your agent can perform with the integration:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Read data (lookup customer information, check availability)</li>
          <li>Write data (create records, update fields)</li>
          <li>Execute actions (send emails, book appointments)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">3. Test the Integration</h3>
        <p className="text-muted-foreground">
          Test your integration with sample data to ensure it works correctly before going live.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">4. Update System Prompt</h3>
        <p className="text-muted-foreground">
          Tell your agent how to use the integration by adding instructions to the system prompt:
        </p>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-3 mt-4">
          <h4 className="font-semibold text-foreground">Example: Salesforce Integration</h4>
          <pre className="text-xs bg-background p-3 rounded-lg overflow-x-auto">
{`When a caller provides their email, look up their 
information in Salesforce using the "lookup_contact" action.

If found, greet them by name and reference their account.
If not found, offer to create a new contact record.

After each call, log the activity in Salesforce with:
- Call summary
- Outcome
- Next steps`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Common Integration Use Cases</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Appointment Scheduling</h3>
        <p className="text-muted-foreground">
          Connect calendar tools to let your agent:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Check real-time availability</li>
          <li>Book appointments automatically</li>
          <li>Send confirmation emails</li>
          <li>Handle rescheduling and cancellations</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">CRM Updates</h3>
        <p className="text-muted-foreground">
          Automatically sync call data to your CRM:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Create new leads from inbound calls</li>
          <li>Update contact information</li>
          <li>Log call activities and outcomes</li>
          <li>Move deals through pipeline stages</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Order Processing</h3>
        <p className="text-muted-foreground">
          E-commerce integrations enable:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Order status lookups</li>
          <li>Product availability checks</li>
          <li>Return and refund processing</li>
          <li>Payment processing</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Team Notifications</h3>
        <p className="text-muted-foreground">
          Communication tool integrations allow:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Alert teams to important calls</li>
          <li>Send call summaries to Slack channels</li>
          <li>Notify specific people for escalations</li>
          <li>Share transcripts automatically</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Custom Integrations</h2>
        <p className="text-muted-foreground">
          Don't see the integration you need? Build custom integrations using:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Webhooks:</strong> Send data to your own endpoints</li>
          <li><strong>API Connections:</strong> Connect to any REST API</li>
          <li><strong>Custom Functions:</strong> Write serverless functions for complex logic</li>
        </ul>

        <p className="text-muted-foreground mt-4">
          See the <Link to="/docs/api" className="text-primary hover:underline">API documentation</Link> for 
          details on building custom integrations.
        </p>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Integration Best Practices</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Test integrations thoroughly before going live</li>
            <li>Use read-only access when write access isn't needed</li>
            <li>Implement error handling for integration failures</li>
            <li>Monitor integration usage and performance</li>
            <li>Keep authentication credentials up to date</li>
            <li>Document integration workflows for your team</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default IntegrationsDoc;
