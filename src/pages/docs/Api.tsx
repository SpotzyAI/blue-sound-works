import DocsLayout from "@/components/DocsLayout";

const Api = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">API Reference</h1>
        
        <p className="text-lg text-muted-foreground">
          Use the Spotzy.ai REST API to programmatically create agents, make calls, retrieve transcripts, 
          and integrate with your applications.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-primary">API Base URL</h3>
          <code className="text-sm">https://api.spotzy.ai/v1</code>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Authentication</h2>
        <p className="text-muted-foreground">
          All API requests require authentication using an API key in the request header:
        </p>
        <div className="bg-muted border border-border rounded-lg p-4 mt-4">
          <pre className="text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
          </pre>
        </div>
        <p className="text-muted-foreground mt-4">
          Get your API key from your dashboard under Settings → API Keys.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Endpoints</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Agents</h3>
        
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">GET</span>
              <code className="text-sm">/agents</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">List all agents</p>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-xs overflow-x-auto">
{`curl https://api.spotzy.ai/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              </pre>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">POST</span>
              <code className="text-sm">/agents</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Create a new agent</p>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-xs overflow-x-auto">
{`curl https://api.spotzy.ai/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Customer Support Bot",
    "system_prompt": "You are a helpful customer support agent...",
    "voice_id": "voice_123abc",
    "language": "en-US"
  }'`}
              </pre>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">GET</span>
              <code className="text-sm">/agents/:id</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Get agent details</p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-accent/50 text-accent-foreground text-xs font-mono rounded">PUT</span>
              <code className="text-sm">/agents/:id</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Update an agent</p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs font-mono rounded">DELETE</span>
              <code className="text-sm">/agents/:id</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Delete an agent</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8">Calls</h3>
        
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">POST</span>
              <code className="text-sm">/calls</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Make an outbound call</p>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-xs overflow-x-auto">
{`curl https://api.spotzy.ai/v1/calls \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "agent_123abc",
    "to": "+14155551234",
    "from": "+14155555678",
    "metadata": {
      "customer_id": "cust_789xyz"
    }
  }'`}
              </pre>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">GET</span>
              <code className="text-sm">/calls/:id</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Get call details</p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">GET</span>
              <code className="text-sm">/calls</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">List calls with filters</p>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-xs overflow-x-auto">
{`curl https://api.spotzy.ai/v1/calls?agent_id=agent_123&limit=50 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8">Transcripts</h3>
        
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">GET</span>
              <code className="text-sm">/calls/:id/transcript</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Get call transcript</p>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-xs overflow-x-auto">
{`{
  "call_id": "call_123abc",
  "transcript": [
    {
      "speaker": "agent",
      "text": "Hello, thanks for calling. How can I help you today?",
      "timestamp": 0.5
    },
    {
      "speaker": "caller",
      "text": "Hi, I need help with my account.",
      "timestamp": 3.2
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8">Voices</h3>
        
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">GET</span>
              <code className="text-sm">/voices</code>
            </div>
            <p className="text-sm text-muted-foreground mb-3">List available voices</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Webhooks</h2>
        <p className="text-muted-foreground">
          Configure webhooks to receive real-time notifications about call events.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Supported Events</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><code className="text-sm">call.started</code> - Call initiated</li>
          <li><code className="text-sm">call.completed</code> - Call ended</li>
          <li><code className="text-sm">call.failed</code> - Call failed</li>
          <li><code className="text-sm">transcript.ready</code> - Transcript available</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Webhook Configuration</h3>
        <div className="bg-muted border border-border rounded-lg p-4">
          <pre className="text-xs overflow-x-auto">
{`curl https://api.spotzy.ai/v1/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/spotzy",
    "events": ["call.completed", "transcript.ready"]
  }'`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Rate Limits</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Standard tier: 100 requests per minute</li>
          <li>Professional tier: 1,000 requests per minute</li>
          <li>Enterprise tier: Custom limits</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Error Codes</h2>
        <div className="space-y-3">
          <div className="border border-border rounded-lg p-4">
            <code className="text-sm font-semibold">400 Bad Request</code>
            <p className="text-sm text-muted-foreground mt-1">Invalid request parameters</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <code className="text-sm font-semibold">401 Unauthorized</code>
            <p className="text-sm text-muted-foreground mt-1">Missing or invalid API key</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <code className="text-sm font-semibold">404 Not Found</code>
            <p className="text-sm text-muted-foreground mt-1">Resource not found</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <code className="text-sm font-semibold">429 Too Many Requests</code>
            <p className="text-sm text-muted-foreground mt-1">Rate limit exceeded</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <code className="text-sm font-semibold">500 Internal Server Error</code>
            <p className="text-sm text-muted-foreground mt-1">Server error</p>
          </div>
        </div>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">SDKs & Libraries</h3>
          <p className="text-sm text-muted-foreground">
            Official SDKs available for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Node.js / TypeScript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>PHP</li>
            <li>Go</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Api;
