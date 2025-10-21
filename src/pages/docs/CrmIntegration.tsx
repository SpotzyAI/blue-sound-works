import DocsLayout from "@/components/DocsLayout";

const CrmIntegration = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">CRM Integration</h1>
        
        <p className="text-lg text-muted-foreground">
          Connect your CRM to give your AI agents access to customer data and automatically log all call activities.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Supported CRM Systems</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Salesforce</li>
          <li>HubSpot</li>
          <li>Pipedrive</li>
          <li>Zoho CRM</li>
          <li>Microsoft Dynamics 365</li>
          <li>Zendesk Sell</li>
          <li>Freshsales</li>
          <li>Close</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Setup Guide</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Step 1: Connect Your CRM</h3>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Navigate to Integrations in your Spotzy.ai dashboard</li>
          <li>Find your CRM and click "Connect"</li>
          <li>Authenticate with your CRM credentials</li>
          <li>Grant necessary permissions</li>
          <li>Confirm connection</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mt-6">Step 2: Configure Data Mapping</h3>
        <p className="text-muted-foreground">
          Map fields between Spotzy.ai and your CRM:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Contact matching:</strong> How to identify existing contacts (email, phone number)</li>
          <li><strong>Field mapping:</strong> Which CRM fields correspond to call data</li>
          <li><strong>Custom fields:</strong> Any custom fields to populate</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Step 3: Configure Permissions</h3>
        <p className="text-muted-foreground">
          Set what your agent can do with the CRM:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Read permissions:</strong> Look up contact and account information</li>
          <li><strong>Write permissions:</strong> Create or update records</li>
          <li><strong>Activity logging:</strong> Automatically log calls as activities</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">CRM Integration Features</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Automatic Contact Identification</h3>
        <p className="text-muted-foreground">
          When a call comes in:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Agent looks up caller's phone number in CRM</li>
          <li>If found, retrieves contact information</li>
          <li>Uses data to personalize the conversation</li>
          <li>Displays caller information to agent</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mt-6">Activity Logging</h3>
        <p className="text-muted-foreground">
          After each call, automatically create CRM activity with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Call timestamp and duration</li>
          <li>Full conversation transcript</li>
          <li>Call outcome and disposition</li>
          <li>Next steps or follow-up required</li>
          <li>Recording link (if enabled)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Lead Creation</h3>
        <p className="text-muted-foreground">
          For new callers not in your CRM:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Automatically create lead record</li>
          <li>Populate with information gathered during call</li>
          <li>Assign to appropriate owner or queue</li>
          <li>Tag with source (phone call) and campaign</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Data Enrichment</h3>
        <p className="text-muted-foreground">
          Update CRM records with new information:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Add missing phone numbers or emails</li>
          <li>Update contact preferences</li>
          <li>Record pain points and interests</li>
          <li>Update lead scores based on conversation</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Use Case Examples</h2>

        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-3">Sales Follow-Up</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Scenario:</strong> Outbound call to prospect who downloaded whitepaper
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Integration workflow:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Agent retrieves lead information from CRM</li>
              <li>References downloaded whitepaper in greeting</li>
              <li>Qualifies lead based on conversation</li>
              <li>Updates lead score and stage in CRM</li>
              <li>Schedules follow-up activity for sales rep</li>
            </ol>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-3">Customer Support</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Scenario:</strong> Inbound support call from existing customer
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Integration workflow:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Identifies customer by phone number</li>
              <li>Retrieves account status and open tickets</li>
              <li>References previous interactions</li>
              <li>Creates support ticket in CRM</li>
              <li>Updates customer satisfaction score</li>
            </ol>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">System Prompt Example</h2>
        <div className="bg-muted border border-border rounded-lg p-6 space-y-3">
          <h4 className="font-semibold text-foreground">CRM-Enhanced Agent Prompt</h4>
          <pre className="text-xs bg-background p-4 rounded-lg overflow-x-auto">
{`You are a sales development agent for SalesCorp.

CRM Integration Instructions:
1. For every incoming call, look up the caller in Salesforce
2. If found, greet them by name: "Hi [First Name], thanks for calling"
3. Reference their last interaction if within 30 days
4. If not in CRM, collect: name, company, email, and reason for calling
5. After each call, create activity in Salesforce with:
   - Call summary (2-3 sentences)
   - Call outcome (interested/not interested/callback needed)
   - Next steps

Lead Qualification:
- Ask about company size, budget, and timeline
- Update lead score in CRM based on answers
- If qualified, schedule meeting with sales rep
- If not qualified, add to nurture campaign`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Troubleshooting</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Common Issues</h3>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Contact not found</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Cause:</strong> Phone number format mismatch or contact not in CRM<br/>
              <strong>Solution:</strong> Ensure phone numbers are in E.164 format. Configure fallback to create new lead.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Authentication expired</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Cause:</strong> CRM authentication token expired<br/>
              <strong>Solution:</strong> Re-authenticate in integration settings. Enable auto-refresh if available.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Duplicate records created</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Cause:</strong> Matching rules not properly configured<br/>
              <strong>Solution:</strong> Review field mapping. Configure duplicate detection rules.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2 mt-8">
          <h3 className="font-semibold text-primary">Best Practice</h3>
          <p className="text-sm text-muted-foreground">
            Test your CRM integration with sample data before going live. Make several test calls to ensure 
            contact lookup, data updates, and activity logging work correctly.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default CrmIntegration;
