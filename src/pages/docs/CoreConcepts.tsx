import DocsLayout from "@/components/DocsLayout";

const CoreConcepts = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Core Concepts</h1>
        
        <p className="text-lg text-muted-foreground">
          Understanding these fundamental concepts will help you make the most of Spotzy.ai's powerful 
          AI voice platform.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">AI Voice Agents</h2>
        <p className="text-muted-foreground">
          An AI voice agent is an autonomous system that can conduct natural phone conversations with humans. 
          Unlike traditional IVR systems, our agents use advanced AI to understand context, respond naturally, 
          and handle complex conversations.
        </p>
        <div className="bg-muted border border-border rounded-lg p-6 space-y-2">
          <h4 className="font-semibold text-foreground">Key Characteristics:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Natural language understanding and generation</li>
            <li>Context-aware responses</li>
            <li>Multilingual support (100+ languages)</li>
            <li>Real-time conversation handling</li>
            <li>Integration with business systems</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">System Prompts</h2>
        <p className="text-muted-foreground">
          The system prompt is the foundation of your AI agent's behavior. It defines:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Purpose:</strong> What the agent is designed to do</li>
          <li><strong>Personality:</strong> How the agent communicates (friendly, professional, concise, etc.)</li>
          <li><strong>Knowledge:</strong> What information the agent has access to</li>
          <li><strong>Boundaries:</strong> What the agent should and shouldn't do</li>
          <li><strong>Workflows:</strong> Step-by-step processes the agent follows</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2 mt-4">
          <h4 className="font-semibold text-primary">Best Practice</h4>
          <p className="text-sm text-muted-foreground">
            Write clear, specific system prompts. The more context you provide, the better your agent 
            will perform. Include examples of ideal conversations when possible.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Selection</h2>
        <p className="text-muted-foreground">
          Choose from our library of 100+ natural-sounding voices across multiple languages and accents. 
          Each voice has unique characteristics:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Gender:</strong> Male, female, or neutral</li>
          <li><strong>Age:</strong> Young, middle-aged, or senior</li>
          <li><strong>Accent:</strong> Regional and international accents</li>
          <li><strong>Tone:</strong> Warm, professional, energetic, calm</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Integrations</h2>
        <p className="text-muted-foreground">
          Spotzy.ai integrates with 265+ tools and services to extend your agent's capabilities:
        </p>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">CRM Systems</h4>
            <p className="text-sm text-muted-foreground">
              Salesforce, HubSpot, Zoho, and more. Automatically log calls, update records, 
              and access customer data.
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Calendar & Scheduling</h4>
            <p className="text-sm text-muted-foreground">
              Google Calendar, Calendly, Microsoft Outlook. Book appointments and manage schedules.
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Communication</h4>
            <p className="text-sm text-muted-foreground">
              Slack, Microsoft Teams, email services. Send notifications and updates.
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Databases & Storage</h4>
            <p className="text-sm text-muted-foreground">
              Supabase, PostgreSQL, Airtable. Store and retrieve information during calls.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Call Flow & Logic</h2>
        <p className="text-muted-foreground">
          Design sophisticated call workflows with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Conditional branching:</strong> Different paths based on caller input</li>
          <li><strong>Data collection:</strong> Gather information systematically</li>
          <li><strong>Action triggers:</strong> Execute tasks based on conversation outcomes</li>
          <li><strong>Fallback handling:</strong> Graceful error recovery</li>
          <li><strong>Human handoff:</strong> Transfer to live agents when needed</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Analytics & Monitoring</h2>
        <p className="text-muted-foreground">
          Track your agent's performance with comprehensive analytics:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Call volume and duration</li>
          <li>Success rates and outcomes</li>
          <li>Customer satisfaction scores</li>
          <li>Transcripts and recordings</li>
          <li>Cost per call</li>
          <li>Integration success rates</li>
        </ul>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Next Steps</h3>
          <p className="text-sm text-muted-foreground">
            Ready to start building? Check out these guides:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li><a href="/docs/first-agent" className="text-primary hover:underline">Creating Your First AI Agent</a></li>
            <li><a href="/docs/voice-config" className="text-primary hover:underline">Voice Configuration</a></li>
            <li><a href="/docs/integrations" className="text-primary hover:underline">Setting Up Integrations</a></li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default CoreConcepts;
