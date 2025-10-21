import DocsLayout from "@/components/DocsLayout";

const Training = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Training Your Agent</h1>
        
        <p className="text-lg text-muted-foreground">
          Learn how to train and optimize your AI agent for better performance and more natural conversations.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-primary">Important Note</h3>
          <p className="text-sm text-muted-foreground">
            Unlike traditional ML models, Spotzy.ai agents don't require explicit training data. Instead, 
            they improve through prompt engineering, testing, and feedback loops.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Prompt Engineering</h2>
        <p className="text-muted-foreground">
          The system prompt is your primary training tool. A well-crafted prompt teaches the agent how to behave.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Effective Prompt Structure</h3>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><strong>Role definition:</strong> Clearly state who the agent is</li>
          <li><strong>Context:</strong> Provide background about your business</li>
          <li><strong>Responsibilities:</strong> List specific tasks the agent should handle</li>
          <li><strong>Personality:</strong> Define tone, style, and communication approach</li>
          <li><strong>Boundaries:</strong> Specify what the agent should NOT do</li>
          <li><strong>Examples:</strong> Include sample conversations</li>
        </ol>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-3 mt-6">
          <h4 className="font-semibold text-foreground">Example: Before and After</h4>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-destructive mb-2">❌ Weak Prompt:</p>
              <pre className="text-xs bg-background p-3 rounded-lg">
{`You are a customer service agent. Be helpful.`}
              </pre>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-primary mb-2">✅ Strong Prompt:</p>
              <pre className="text-xs bg-background p-3 rounded-lg overflow-x-auto">
{`You are Sarah, a customer service agent for TechCorp, 
a B2B software company. You help customers with:
- Account issues and password resets
- Billing questions and invoice requests
- Product feature inquiries
- Technical troubleshooting (basic level)

Personality: Professional, patient, and solution-oriented
Tone: Conversational but respectful
Response style: Clear, concise, and actionable

Guidelines:
1. Always greet customers warmly
2. Listen carefully and confirm understanding
3. Provide step-by-step instructions when needed
4. Escalate complex technical issues to engineering
5. End calls with "Is there anything else I can help with?"

Example conversation:
Caller: "I can't log into my account"
You: "I'd be happy to help you with that. Can you tell me 
which email address you use for your account?"`}
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Testing & Iteration</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">1. Systematic Testing</h3>
        <p className="text-muted-foreground">Test your agent with various scenarios:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Happy path:</strong> Standard, straightforward conversations</li>
          <li><strong>Edge cases:</strong> Unusual requests or situations</li>
          <li><strong>Hostile callers:</strong> Frustrated or angry customers</li>
          <li><strong>Unclear requests:</strong> Vague or confusing questions</li>
          <li><strong>Multi-step processes:</strong> Complex interactions</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">2. Review Transcripts</h3>
        <p className="text-muted-foreground">After each test call:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Read the full conversation transcript</li>
          <li>Identify where the agent succeeded</li>
          <li>Note areas for improvement</li>
          <li>Look for patterns in mistakes</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">3. Iterative Refinement</h3>
        <p className="text-muted-foreground">Improve based on findings:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Update system prompt with more specific guidance</li>
          <li>Add examples of problematic scenarios</li>
          <li>Clarify boundaries and limitations</li>
          <li>Test again with same scenarios</li>
          <li>Measure improvement</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Knowledge Base Integration</h2>
        <p className="text-muted-foreground">
          Enhance your agent's knowledge by connecting to your documentation:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Upload company knowledge base documents</li>
          <li>Connect to FAQ pages</li>
          <li>Link to product documentation</li>
          <li>Integrate with internal wikis</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Continuous Improvement</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Analytics Review</h3>
        <p className="text-muted-foreground">Monitor key metrics:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Resolution rate:</strong> % of calls successfully handled</li>
          <li><strong>Escalation rate:</strong> % transferred to human agents</li>
          <li><strong>Call duration:</strong> Average length of conversations</li>
          <li><strong>Customer satisfaction:</strong> Post-call ratings</li>
          <li><strong>Common intents:</strong> What callers most frequently want</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Feedback Collection</h3>
        <p className="text-muted-foreground">Gather input from multiple sources:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Customer post-call surveys</li>
          <li>Customer service team feedback</li>
          <li>Transcript analysis</li>
          <li>Failed call reports</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Regular Updates</h3>
        <p className="text-muted-foreground">Keep your agent current:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Update with new product information</li>
          <li>Add seasonal messaging</li>
          <li>Incorporate new policies or procedures</li>
          <li>Refine based on changing customer needs</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Common Training Challenges</h2>

        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Challenge: Agent is too verbose</h4>
            <p className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong></p>
            <p className="text-sm text-muted-foreground">
              Add "Keep responses brief and to the point. Aim for 1-2 sentences when possible" to your prompt.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Challenge: Agent misunderstands requests</h4>
            <p className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong></p>
            <p className="text-sm text-muted-foreground">
              Add confirmation step: "Always confirm your understanding before taking action."
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Challenge: Agent goes off-topic</h4>
            <p className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong></p>
            <p className="text-sm text-muted-foreground">
              Add boundaries: "Only discuss topics related to [X, Y, Z]. Politely redirect other questions."
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Challenge: Agent sounds robotic</h4>
            <p className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong></p>
            <p className="text-sm text-muted-foreground">
              Add personality guidance and use natural language in examples. Try a different voice.
            </p>
          </div>
        </div>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Training Checklist</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>✓ Comprehensive system prompt with examples</li>
            <li>✓ Tested with 10+ different scenarios</li>
            <li>✓ Reviewed and refined based on test results</li>
            <li>✓ Knowledge base connected (if applicable)</li>
            <li>✓ Team training on monitoring and feedback</li>
            <li>✓ Analytics dashboard set up</li>
            <li>✓ Regular review schedule established</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Training;
