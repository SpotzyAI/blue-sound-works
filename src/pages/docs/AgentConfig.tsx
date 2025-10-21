import DocsLayout from "@/components/DocsLayout";

const AgentConfig = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Agent Configuration</h1>
        
        <p className="text-lg text-muted-foreground">
          Master advanced configuration options to create sophisticated AI agents tailored to your specific needs.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Basic Configuration</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Agent Identity</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Name:</strong> Internal identifier for your agent</li>
          <li><strong>Display Name:</strong> How the agent introduces itself to callers</li>
          <li><strong>Description:</strong> Brief summary of the agent's purpose</li>
          <li><strong>Tags:</strong> Labels for organizing multiple agents</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Operating Hours</h3>
        <p className="text-muted-foreground">Configure when your agent is active:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Set business hours by day of week</li>
          <li>Configure holiday schedules</li>
          <li>Define timezone for operations</li>
          <li>Set after-hours behavior (voicemail, message, redirect)</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Conversation Settings</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Response Behavior</h3>
        <p className="text-muted-foreground">Control how your agent responds:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Response speed:</strong> Balance between speed and accuracy</li>
          <li><strong>Verbosity:</strong> Brief, normal, or detailed responses</li>
          <li><strong>Confirmation level:</strong> How often agent confirms understanding</li>
          <li><strong>Proactive suggestions:</strong> Whether agent offers additional help</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Interruption Handling</h3>
        <p className="text-muted-foreground">Define how agent handles caller interruptions:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Allow:</strong> Agent stops speaking when interrupted</li>
          <li><strong>Discourage:</strong> Agent continues but acknowledges interruption</li>
          <li><strong>Ignore:</strong> Agent completes statement before responding</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Timeout Settings</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Speech timeout:</strong> How long to wait for caller to speak</li>
          <li><strong>Silence detection:</strong> When to prompt caller after silence</li>
          <li><strong>Call duration limit:</strong> Maximum call length</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Advanced Features</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Call Recording</h3>
        <p className="text-muted-foreground">Configure call recording options:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Enable/disable audio recording</li>
          <li>Automatic recording disclosure</li>
          <li>Retention period settings</li>
          <li>Storage location preferences</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Transcription</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Real-time or post-call transcription</li>
          <li>Language-specific transcription models</li>
          <li>Speaker identification</li>
          <li>Punctuation and formatting options</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Sentiment Analysis</h3>
        <p className="text-muted-foreground">Track caller emotions and satisfaction:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Real-time sentiment detection</li>
          <li>Frustration triggers and alerts</li>
          <li>Automatic escalation based on sentiment</li>
          <li>Post-call satisfaction scoring</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Integration Configuration</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">CRM Integration</h3>
        <p className="text-muted-foreground">Connect with your customer database:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Automatic caller identification</li>
          <li>Customer data retrieval during calls</li>
          <li>Post-call activity logging</li>
          <li>Contact information updates</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Calendar Integration</h3>
        <p className="text-muted-foreground">Enable appointment booking:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Real-time availability checking</li>
          <li>Automatic booking and confirmation</li>
          <li>Reminder scheduling</li>
          <li>Cancellation and rescheduling</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Custom API Connections</h3>
        <p className="text-muted-foreground">Connect to your own systems:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Define custom API endpoints</li>
          <li>Configure authentication methods</li>
          <li>Map request and response data</li>
          <li>Set timeout and retry policies</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Fallback & Error Handling</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Escalation Rules</h3>
        <p className="text-muted-foreground">Define when to transfer to human agents:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Caller request for human agent</li>
          <li>Agent confidence threshold</li>
          <li>Repeated failed attempts</li>
          <li>Detected frustration or urgency</li>
          <li>Specific keywords or topics</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Error Recovery</h3>
        <p className="text-muted-foreground">Handle technical issues gracefully:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Speech recognition errors</li>
          <li>Integration failures</li>
          <li>Network connectivity issues</li>
          <li>System timeout responses</li>
        </ul>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Configuration Best Practices</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Start with default settings and adjust based on performance</li>
            <li>Test all configurations thoroughly before going live</li>
            <li>Document your configuration choices for team reference</li>
            <li>Review and update settings regularly based on analytics</li>
            <li>Use A/B testing to optimize controversial settings</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default AgentConfig;
