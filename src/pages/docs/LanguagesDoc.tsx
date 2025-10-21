import DocsLayout from "@/components/DocsLayout";
import { Link } from "react-router-dom";

const LanguagesDoc = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Supported Languages</h1>
        
        <p className="text-lg text-muted-foreground">
          Spotzy.ai supports 100+ languages and regional accents, enabling you to serve customers globally 
          with natural, localized conversations.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
          <h3 className="font-semibold text-primary">Explore All Languages</h3>
          <p className="text-sm text-muted-foreground">
            Browse the complete list on our{" "}
            <Link to="/languages" className="text-primary hover:underline">
              languages page
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Language Features</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Automatic Language Detection</h3>
        <p className="text-muted-foreground">
          Your agent can automatically detect the caller's language and switch to it seamlessly:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Enable multi-language support in agent settings</li>
          <li>Agent detects language from first few words</li>
          <li>Continues conversation in detected language</li>
          <li>Falls back to default language if unsure</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Regional Accents</h3>
        <p className="text-muted-foreground">
          For major languages, multiple regional accents are available:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>English:</strong> US, UK, Australian, Canadian, Indian, and more</li>
          <li><strong>Spanish:</strong> Spain, Mexico, Colombia, Argentina</li>
          <li><strong>French:</strong> France, Canadian, African</li>
          <li><strong>Portuguese:</strong> Brazil, Portugal</li>
          <li><strong>Arabic:</strong> Gulf, Egyptian, Levantine</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Translation Capability</h3>
        <p className="text-muted-foreground">
          Your agent can work across language barriers:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Transcripts available in original language and English</li>
          <li>Real-time translation for notifications and summaries</li>
          <li>Maintain context across language switches</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Most Popular Languages</h2>
        <div className="grid md:grid-cols-3 gap-4 not-prose">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">English</h4>
            <p className="text-sm text-muted-foreground">50+ voice options with various accents</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Spanish</h4>
            <p className="text-sm text-muted-foreground">30+ voices across multiple regions</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Mandarin</h4>
            <p className="text-sm text-muted-foreground">20+ voices including regional dialects</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">French</h4>
            <p className="text-sm text-muted-foreground">25+ voices with regional variants</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">German</h4>
            <p className="text-sm text-muted-foreground">20+ professional voices</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Arabic</h4>
            <p className="text-sm text-muted-foreground">15+ voices including regional accents</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Language Configuration</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Single Language Setup</h3>
        <p className="text-muted-foreground">
          For agents serving one language market:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Select primary language in agent settings</li>
          <li>Choose appropriate regional accent</li>
          <li>Write system prompt in that language</li>
          <li>Test with native speakers</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mt-6">Multi-Language Setup</h3>
        <p className="text-muted-foreground">
          For agents serving multiple languages:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Enable multi-language mode</li>
          <li>Select supported languages (up to 10)</li>
          <li>Configure language detection settings</li>
          <li>Provide system prompts in each language (optional)</li>
          <li>Test language switching</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8">Best Practices</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6">Localization</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Cultural context:</strong> Adapt greetings and formality to local customs</li>
          <li><strong>Date/time formats:</strong> Use local formatting conventions</li>
          <li><strong>Number formats:</strong> Respect regional decimal and thousand separators</li>
          <li><strong>Currency:</strong> Use local currency and formats</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Quality Assurance</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Test with native speakers of each language</li>
          <li>Verify pronunciation of key terms and brand names</li>
          <li>Check that technical terms are handled correctly</li>
          <li>Monitor transcription accuracy for each language</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6">Performance Optimization</h3>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Limit to languages you actually need</li>
          <li>Use language-specific system prompts when possible</li>
          <li>Configure appropriate language detection sensitivity</li>
          <li>Monitor and optimize based on usage analytics</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">Language-Specific Considerations</h2>

        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Right-to-Left Languages (Arabic, Hebrew)</h4>
            <p className="text-sm text-muted-foreground">
              Transcripts automatically display in correct direction. Consider cultural communication norms.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Tonal Languages (Mandarin, Vietnamese)</h4>
            <p className="text-sm text-muted-foreground">
              Our voices accurately reproduce tones. Ensure tone-sensitive words are transcribed correctly.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Languages with Formal/Informal (German, French, Spanish)</h4>
            <p className="text-sm text-muted-foreground">
              Configure your agent's formality level in the system prompt to match your brand.
            </p>
          </div>
        </div>

        <div className="bg-muted border border-border rounded-lg p-6 space-y-4 mt-8">
          <h3 className="font-semibold text-foreground">Need a Language We Don't Support?</h3>
          <p className="text-sm text-muted-foreground">
            We're constantly adding new languages. Contact our team to request support for additional languages.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default LanguagesDoc;
