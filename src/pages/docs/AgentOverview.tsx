import DocsLayout from "@/components/DocsLayout";

const AgentOverview = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Agent Overview</h1>
        
        <p className="text-lg text-muted-foreground">
          Learn about AI agents, how they work, and what makes Spotzy.ai agents uniquely powerful.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">What is an AI Voice Agent?</h2>
        <p className="text-muted-foreground">
          An AI voice agent is an intelligent system that can conduct natural phone conversations with humans. 
          Unlike traditional IVR (Interactive Voice Response) systems with rigid menus, AI agents understand 
          natural language, maintain context, and respond intelligently to caller needs.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">How Spotzy.ai Agents Work</h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6">1. Speech Recognition</h3>
        <p className="text-muted-foreground">
          When a caller speaks, their voice is converted to text using advanced speech-to-text technology 
          that handles accents, background noise, and natural speech patterns.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">2. Intent Understanding</h3>
        <p className="text-muted-foreground">
          The AI analyzes the text to understand what the caller wants, the context of their request, 
          and any important details mentioned.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">3. Response Generation</h3>
        <p className="text-muted-foreground">
          Based on your system prompt and the conversation context, the AI generates an appropriate, 
          natural response that addresses the caller's needs.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">4. Text-to-Speech</h3>
        <p className="text-muted-foreground">
          The response text is converted to natural-sounding speech using your selected voice, 
          with proper intonation and emphasis.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">5. Action Execution</h3>
        <p className="text-muted-foreground">
          If needed, the agent executes actions like looking up information, scheduling appointments, 
          or updating records through integrations.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Agent Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Context retention:</strong> Remembers information shared earlier in the conversation</li>
          <li><strong>Multi-turn conversations:</strong> Handles complex back-and-forth exchanges</li>
          <li><strong>Intent recognition:</strong> Understands what callers want even when phrased differently</li>
          <li><strong>Emotion detection:</strong> Recognizes frustration, urgency, or satisfaction in caller's voice</li>
          <li><strong>Information retrieval:</strong> Accesses connected systems to fetch relevant data</li>
          <li><strong>Task execution:</strong> Performs actions like booking appointments or sending emails</li>
          <li><strong>Intelligent routing:</strong> Transfers to human agents when appropriate</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Agent Types</h2>

        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Inbound Agents</h4>
            <p className="text-sm text-muted-foreground">
              Handle incoming calls from customers. Ideal for customer support, order taking, 
              appointment scheduling, and information requests.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Outbound Agents</h4>
            <p className="text-sm text-muted-foreground">
              Make calls to customers or leads. Perfect for appointment reminders, surveys, 
              lead qualification, and customer follow-ups.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Agent Lifecycle</h2>
        
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li><strong>Creation:</strong> Define the agent's purpose and configure basic settings</li>
          <li><strong>Configuration:</strong> Write system prompt, select voice, set parameters</li>
          <li><strong>Testing:</strong> Test with various scenarios and edge cases</li>
          <li><strong>Refinement:</strong> Adjust based on test results and feedback</li>
          <li><strong>Deployment:</strong> Go live with your agent</li>
          <li><strong>Monitoring:</strong> Track performance and gather insights</li>
          <li><strong>Optimization:</strong> Continuously improve based on real-world data</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Start with a clear, specific use case</li>
          <li>Write detailed system prompts with examples</li>
          <li>Test extensively before going live</li>
          <li>Monitor conversations and gather feedback</li>
          <li>Iterate and improve based on real-world performance</li>
          <li>Always provide option to transfer to human agent</li>
          <li>Maintain consistent brand voice and personality</li>
        </ul>
      </div>
    </DocsLayout>
  );
};

export default AgentOverview;
