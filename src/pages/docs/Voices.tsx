import DocsLayout from "@/components/DocsLayout";

const Voices = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Voice Selection</h1>
        
        <p className="text-lg text-muted-foreground">
          Choose from 100+ professional voices to find the perfect match for your AI agent's personality and your brand.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Categories</h2>

        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Professional Voices</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Clear, authoritative voices ideal for business settings
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Corporate communication</li>
              <li>• Legal services</li>
              <li>• Financial services</li>
              <li>• Healthcare</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Friendly Voices</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Warm, approachable voices for customer service
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Customer support</li>
              <li>• Hospitality</li>
              <li>• Retail</li>
              <li>• General service</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Energetic Voices</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Dynamic, enthusiastic voices for sales and marketing
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Sales calls</li>
              <li>• Promotions</li>
              <li>• Event invitations</li>
              <li>• Marketing outreach</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Calm Voices</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Soothing, reassuring voices for sensitive situations
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Healthcare appointments</li>
              <li>• Crisis support</li>
              <li>• Debt collection</li>
              <li>• Complaint handling</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Attributes</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Gender</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Male:</strong> Traditional masculine voice characteristics</li>
          <li><strong>Female:</strong> Traditional feminine voice characteristics</li>
          <li><strong>Neutral:</strong> Gender-neutral voice options</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Research shows different genders perform better in different contexts. Test to find what works for your audience.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Age Range</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Young Adult (20s-30s):</strong> Fresh, relatable, modern sound</li>
          <li><strong>Middle-Aged (40s-50s):</strong> Experienced, trustworthy, authoritative</li>
          <li><strong>Senior (60+):</strong> Mature, wise, reassuring</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Speaking Style</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Conversational:</strong> Natural, casual speaking patterns</li>
          <li><strong>Formal:</strong> Precise articulation, proper grammar emphasis</li>
          <li><strong>Storytelling:</strong> Engaging narrative style with expressive intonation</li>
          <li><strong>News/Broadcast:</strong> Clear, authoritative delivery</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Selection Guide</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Step 1: Define Your Brand Voice</h3>
        <p className="text-muted-foreground">
          Consider your brand's personality:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Formal or casual?</li>
          <li>Traditional or modern?</li>
          <li>Serious or playful?</li>
          <li>Corporate or friendly?</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Step 2: Consider Your Audience</h3>
        <p className="text-muted-foreground">
          Match the voice to your target demographic:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Age range of typical callers</li>
          <li>Industry expectations</li>
          <li>Cultural preferences</li>
          <li>Regional accents (if applicable)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Step 3: Test Multiple Options</h3>
        <p className="text-muted-foreground">
          Don't settle on the first voice:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Shortlist 3-5 voices that match your criteria</li>
          <li>Test each with your actual script</li>
          <li>Gather feedback from team and target audience</li>
          <li>Listen on different devices (mobile, desk phone, headset)</li>
          <li>Make your final selection</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Customization</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Speaking Rate</h3>
        <p className="text-muted-foreground">
          Adjust how fast your agent speaks (0.75x - 1.5x normal speed):
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Slower (0.75x - 0.9x):</strong> Better for complex information, elderly callers, or non-native speakers</li>
          <li><strong>Normal (1.0x):</strong> Default, natural pace</li>
          <li><strong>Faster (1.1x - 1.5x):</strong> More energetic, efficient for simple conversations</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Pitch</h3>
        <p className="text-muted-foreground">
          Fine-tune voice pitch (-5 to +5 semitones):
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Lower pitch can sound more authoritative</li>
          <li>Higher pitch can sound more energetic</li>
          <li>Subtle adjustments (±1-2) usually work best</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Stability</h3>
        <p className="text-muted-foreground">
          Control voice consistency vs. expressiveness:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>High stability:</strong> More consistent, predictable delivery</li>
          <li><strong>Low stability:</strong> More expressive, varied intonation</li>
          <li>Adjust based on your agent's personality</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Industry Examples</h2>

        <div className="space-y-4">
          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Healthcare</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Recommended:</strong> Calm, middle-aged voice with slightly slower speaking rate
            </p>
            <p className="text-sm text-muted-foreground">
              Patients need reassurance. A warm, professional voice builds trust and reduces anxiety.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">E-commerce</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Recommended:</strong> Friendly, young adult voice with upbeat energy
            </p>
            <p className="text-sm text-muted-foreground">
              Customers respond well to enthusiasm. Match the energy of modern shopping experiences.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Legal Services</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Recommended:</strong> Professional, middle-aged voice with formal delivery
            </p>
            <p className="text-sm text-muted-foreground">
              Clients expect gravitas. A mature, authoritative voice establishes credibility.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Restaurant Reservations</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Recommended:</strong> Friendly, conversational voice with warm tone
            </p>
            <p className="text-sm text-muted-foreground">
              Create a welcoming atmosphere. The voice should reflect your restaurant's ambiance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Voice Performance Tips</h2>

        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Test voices over phone connections, not just web players</li>
          <li>Consider how voice sounds in noisy environments</li>
          <li>Make sure voice handles numbers and special terms well</li>
          <li>Verify pronunciation of your company and product names</li>
          <li>Get feedback from actual customers before finalizing</li>
          <li>Monitor customer satisfaction scores by voice</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2 mt-8">
          <h3 className="font-semibold text-primary">Pro Tip</h3>
          <p className="text-sm text-muted-foreground">
            Your voice is a key part of your brand identity. Once you choose a voice, use it consistently 
            across all touchpoints to build recognition and trust.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Voices;
