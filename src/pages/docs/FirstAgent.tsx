import DocsLayout from "@/components/DocsLayout";
import { Button } from "@/components/ui/button";

const FirstAgent = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Creating Your First AI Agent</h1>
        
        <p className="text-lg text-muted-foreground">
          Follow this step-by-step guide to create your first AI voice agent in minutes.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-primary">Prerequisites</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Active Spotzy.ai account</li>
            <li>Clear use case defined</li>
            <li>Sample conversation flows prepared</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 1: Access the Agent Builder</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Log into your Spotzy.ai dashboard</li>
          <li>Click "Create New Agent" in the main navigation</li>
          <li>Choose a template or start from scratch</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 2: Configure Basic Settings</h2>
        <h3 className="text-lg font-semibold text-foreground mt-4">Agent Name</h3>
        <p className="text-muted-foreground">
          Give your agent a descriptive name that reflects its purpose (e.g., "Customer Support Bot", "Appointment Scheduler").
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-4">Agent Description</h3>
        <p className="text-muted-foreground">
          Write a brief description of what your agent does. This helps you manage multiple agents later.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 3: Write the System Prompt</h2>
        <p className="text-muted-foreground">
          The system prompt is the most important part of your agent. It defines the agent's personality, knowledge, and behavior.
        </p>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-3 mt-4">
          <h4 className="font-semibold text-foreground">Example System Prompt</h4>
          <pre className="text-sm bg-background p-4 rounded-lg overflow-x-auto">
{`You are a friendly customer support agent for Acme Corp, 
a software company. Your role is to:

1. Greet customers warmly
2. Listen to their issues or questions
3. Provide helpful, accurate information
4. Escalate complex issues to human support
5. End calls professionally

Personality: Friendly, patient, and professional
Tone: Conversational but respectful
Knowledge: Product features, pricing, and basic troubleshooting`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 4: Select a Voice</h2>
        <p className="text-muted-foreground">
          Choose a voice that matches your brand and audience:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Language:</strong> Select the primary language for your agent</li>
          <li><strong>Gender:</strong> Male, female, or neutral</li>
          <li><strong>Age:</strong> Young, middle-aged, or senior-sounding</li>
          <li><strong>Accent:</strong> Regional or international accents</li>
          <li><strong>Tone:</strong> Warm, professional, energetic, or calm</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 5: Configure Advanced Settings</h2>
        
        <h3 className="text-lg font-semibold text-foreground mt-4">Response Speed</h3>
        <p className="text-muted-foreground">
          Adjust how quickly the agent responds. Faster responses feel more natural but may be less accurate.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-4">Speech Recognition Sensitivity</h3>
        <p className="text-muted-foreground">
          Control how sensitive the agent is to detecting speech. Higher sensitivity works better in noisy environments.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-4">Interruption Handling</h3>
        <p className="text-muted-foreground">
          Choose how the agent handles interruptions from callers (allow, discourage, or ignore).
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 6: Test Your Agent</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Click "Test Agent" to open the testing interface</li>
          <li>Make a test call and have a conversation</li>
          <li>Review the transcript and audio recording</li>
          <li>Refine your system prompt based on the results</li>
          <li>Test again until you're satisfied</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 7: Deploy Your Agent</h2>
        <p className="text-muted-foreground">
          Once testing is complete:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Click "Deploy Agent"</li>
          <li>Get a phone number or connect your existing one</li>
          <li>Configure call routing and business hours</li>
          <li>Go live!</li>
        </ol>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Next Steps</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li><a href="/docs/voice-config" className="text-primary hover:underline">Advanced voice configuration</a></li>
            <li><a href="/docs/integrations" className="text-primary hover:underline">Add integrations</a></li>
            <li><a href="/docs/training" className="text-primary hover:underline">Train your agent</a></li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default FirstAgent;
