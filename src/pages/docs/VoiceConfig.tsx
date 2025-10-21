import DocsLayout from "@/components/DocsLayout";

const VoiceConfig = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Voice Configuration</h1>
        
        <p className="text-lg text-muted-foreground">
          Learn how to select and configure the perfect voice for your AI agent to match your brand and audience.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Library</h2>
        <p className="text-muted-foreground">
          Spotzy.ai offers 100+ professional voices across multiple languages, accents, and styles. Each voice 
          has been carefully selected for naturalness and clarity.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Selection Criteria</h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6">Language & Accent</h3>
        <p className="text-muted-foreground">
          Choose a language and accent that matches your target audience:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>100+ languages supported</li>
          <li>Multiple regional accents available for major languages</li>
          <li>Automatic language detection for multilingual support</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Gender & Age</h3>
        <p className="text-muted-foreground">
          Select a voice that resonates with your brand:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Gender:</strong> Male, female, or gender-neutral options</li>
          <li><strong>Age range:</strong> Young adult, middle-aged, or senior voices</li>
          <li>Each combination creates a different perception and connection with callers</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Tone & Personality</h3>
        <p className="text-muted-foreground">
          Match the voice personality to your use case:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Warm & Friendly:</strong> Ideal for customer service and hospitality</li>
          <li><strong>Professional & Authoritative:</strong> Best for legal, medical, and corporate settings</li>
          <li><strong>Energetic & Upbeat:</strong> Great for sales and marketing calls</li>
          <li><strong>Calm & Reassuring:</strong> Perfect for support and crisis management</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Advanced Voice Settings</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Speaking Speed</h3>
        <p className="text-muted-foreground">
          Adjust the rate of speech (0.75x to 1.5x normal speed). Slower speeds improve clarity for complex 
          information, while faster speeds feel more dynamic.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Pitch Adjustment</h3>
        <p className="text-muted-foreground">
          Fine-tune the voice pitch to create a more unique sound while maintaining naturalness.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Emphasis & Intonation</h3>
        <p className="text-muted-foreground">
          Control how the agent emphasizes important words and uses vocal variety:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Natural emphasis on key information</li>
          <li>Question intonation for queries</li>
          <li>Appropriate pauses for punctuation and breath</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Testing Voices</h2>
        <p className="text-muted-foreground">
          Before deploying:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Preview voices with sample text in the voice selector</li>
          <li>Test with your actual script or system prompt</li>
          <li>Get feedback from team members and target audience</li>
          <li>Compare multiple voice options side by side</li>
          <li>Consider how the voice sounds over different phone connections</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Consistency</h2>
        <p className="text-muted-foreground">
          For the best customer experience:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Use the same voice across all customer touchpoints</li>
          <li>Document your voice choice for team reference</li>
          <li>Consider voice as part of your brand identity</li>
          <li>Update voices consistently if you need to make changes</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2 mt-8">
          <h3 className="font-semibold text-primary">Pro Tip</h3>
          <p className="text-sm text-muted-foreground">
            The best voice for your agent is one that your target audience finds trustworthy and pleasant. 
            Consider running A/B tests with different voices to see which performs best.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default VoiceConfig;
