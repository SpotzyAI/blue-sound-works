import DocsLayout from "@/components/DocsLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const QuickStart = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Quick Start Guide</h1>
        
        <p className="text-lg text-muted-foreground">
          Get up and running with Spotzy.ai in just a few minutes. This guide will walk you through 
          creating your account, setting up your first AI voice agent, and making your first call.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-primary">Before you begin</h3>
          <p className="text-sm text-muted-foreground">
            Make sure you have a valid email address and a clear use case in mind for your AI voice agent.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 1: Create Your Account</h2>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li>Visit <a href="https://spotzy.ai" className="text-primary hover:underline">spotzy.ai</a> and click "Get Started"</li>
          <li>Enter your email address and create a secure password</li>
          <li>Verify your email through the confirmation link</li>
          <li>Complete your profile setup</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 2: Create Your First AI Agent</h2>
        <p className="text-muted-foreground">
          Once you're logged into your dashboard:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li>Click "Create New Agent" from your dashboard</li>
          <li>Give your agent a descriptive name (e.g., "Customer Support Agent")</li>
          <li>Write a clear system prompt that defines your agent's purpose and behavior</li>
          <li>Select a voice from our library of 100+ natural-sounding voices</li>
          <li>Configure advanced settings like language, response speed, and personality traits</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 3: Test Your Agent</h2>
        <p className="text-muted-foreground">
          Before going live, it's important to test your agent:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li>Use the built-in testing interface to make a test call</li>
          <li>Try different conversation scenarios</li>
          <li>Refine your agent's prompt based on the results</li>
          <li>Adjust voice settings if needed</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Step 4: Go Live</h2>
        <p className="text-muted-foreground">
          When you're satisfied with your agent's performance:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li>Get a phone number from our number pool or port your existing number</li>
          <li>Configure call routing and business hours</li>
          <li>Set up integrations with your CRM or other tools</li>
          <li>Start receiving calls!</li>
        </ol>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Next Steps</h3>
          <p className="text-sm text-muted-foreground">
            Now that you have your first agent running, explore these resources:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Learn about <a href="/docs/core-concepts" className="text-primary hover:underline">core concepts</a></li>
            <li>Explore available <a href="/docs/integrations" className="text-primary hover:underline">integrations</a></li>
            <li>Check out <a href="/docs/agent-config" className="text-primary hover:underline">advanced configuration options</a></li>
            <li>Read the <a href="/docs/api" className="text-primary hover:underline">API documentation</a></li>
          </ul>
        </div>

        <div className="flex gap-4 mt-8 not-prose">
          <Button>
            Get Started Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            View Examples
          </Button>
        </div>
      </div>
    </DocsLayout>
  );
};

export default QuickStart;
