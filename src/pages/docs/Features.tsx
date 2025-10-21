import DocsLayout from "@/components/DocsLayout";
import { Sparkles, Mic, Globe, Zap, Shield, BarChart } from "lucide-react";

const Features = () => {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Key Features</h1>
        
        <p className="text-lg text-muted-foreground">
          Discover the powerful features that make Spotzy.ai the leading AI voice automation platform.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Natural Conversations</h3>
            <p className="text-muted-foreground">
              Our AI agents use advanced language models to conduct natural, context-aware conversations 
              that feel genuinely human.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Mic className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">100+ Natural Voices</h3>
            <p className="text-muted-foreground">
              Choose from our extensive library of natural-sounding voices across multiple languages, 
              accents, and personalities.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Multilingual Support</h3>
            <p className="text-muted-foreground">
              Support customers in 100+ languages with automatic language detection and seamless 
              conversation switching.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Real-Time Processing</h3>
            <p className="text-muted-foreground">
              Ultra-low latency voice processing ensures smooth, natural conversations without awkward pauses.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Bank-level encryption, GDPR compliance, and SOC 2 certification ensure your data stays secure.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
              <BarChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Advanced Analytics</h3>
            <p className="text-muted-foreground">
              Comprehensive dashboards and insights help you optimize performance and improve customer experience.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">Advanced Capabilities</h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6">Intelligent Call Routing</h3>
        <p className="text-muted-foreground">
          Route calls dynamically based on caller intent, time of day, agent availability, and custom business rules.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Context Retention</h3>
        <p className="text-muted-foreground">
          Our agents remember previous conversations and maintain context throughout multi-turn interactions.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Custom Integrations</h3>
        <p className="text-muted-foreground">
          Connect with 265+ tools and services, or build custom integrations using our comprehensive API.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6">Smart Fallbacks</h3>
        <p className="text-muted-foreground">
          Gracefully handle edge cases with configurable fallback behaviors and seamless handoff to human agents.
        </p>
      </div>
    </DocsLayout>
  );
};

export default Features;
