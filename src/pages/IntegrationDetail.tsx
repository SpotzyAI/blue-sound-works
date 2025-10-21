import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, CheckCircle2, XCircle } from "lucide-react";
import { integrationActions, generateBasicActions, ConfigField, Action, Trigger } from "@/data/integrationActions";

// Logo URLs using Clearbit Logo API
const getLogoUrl = (name: string) => {
  const logoMap: Record<string, string> = {
    "Zuora": "https://logo.clearbit.com/zuora.com",
    "Stripe": "https://logo.clearbit.com/stripe.com",
    "HubSpot": "https://logo.clearbit.com/hubspot.com",
    "Slack": "https://logo.clearbit.com/slack.com",
    "Google Drive": "https://logo.clearbit.com/google.com",
    "Salesforce": "https://logo.clearbit.com/salesforce.com",
    "Shopify": "https://logo.clearbit.com/shopify.com",
    "Notion": "https://logo.clearbit.com/notion.so",
    "Airtable": "https://logo.clearbit.com/airtable.com",
    "OpenAI": "https://logo.clearbit.com/openai.com",
    "Gmail": "https://logo.clearbit.com/gmail.com",
    "Mailchimp": "https://logo.clearbit.com/mailchimp.com",
    "Zapier": "https://logo.clearbit.com/zapier.com",
  };
  
  const domain = name.toLowerCase().replace(/\s+/g, '');
  return logoMap[name] || `https://logo.clearbit.com/${domain}.com`;
};

const getFieldTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    "SHORT_TEXT": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "LONG_TEXT": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    "NUMBER": "bg-green-500/10 text-green-600 dark:text-green-400",
    "DATE_TIME": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    "CHECKBOX": "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    "STATIC_DROPDOWN": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    "DYNAMIC_DROPDOWN": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    "OBJECT": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    "ARRAY": "bg-red-500/10 text-red-600 dark:text-red-400",
    "JSON": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    "FILE": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    "SECRET_TEXT": "bg-gray-500/10 text-gray-600 dark:text-gray-400",
  };
  return colors[type] || "bg-gray-500/10 text-gray-600 dark:text-gray-400";
};

const ConfigFieldItem = ({ field }: { field: ConfigField }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className="font-medium text-foreground">{field.name}</span>
        {field.required ? (
          <Badge variant="destructive" className="text-xs">Required</Badge>
        ) : (
          <Badge variant="secondary" className="text-xs">Optional</Badge>
        )}
        <Badge className={`text-xs ${getFieldTypeColor(field.type)}`}>
          {field.type}
        </Badge>
      </div>
      {field.description && (
        <p className="text-sm text-muted-foreground">{field.description}</p>
      )}
      {field.placeholder && (
        <p className="text-xs text-muted-foreground/70 mt-1 italic">
          {field.placeholder}
        </p>
      )}
    </div>
  </div>
);

const ActionCard = ({ action }: { action: Action }) => (
  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
    <CardHeader>
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Play className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl text-primary">{action.name}</CardTitle>
          <CardDescription className="mt-1">{action.description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <h4 className="font-semibold text-sm text-foreground mb-3">Configuration Fields:</h4>
        {action.configFields.length > 0 ? (
          action.configFields.map((field, idx) => (
            <ConfigFieldItem key={idx} field={field} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground italic">No additional configuration required</p>
        )}
      </div>
    </CardContent>
  </Card>
);

const TriggerCard = ({ trigger }: { trigger: Trigger }) => (
  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
    <CardHeader>
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Play className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl text-primary">{trigger.name}</CardTitle>
          <CardDescription className="mt-1">{trigger.description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    {trigger.configFields && trigger.configFields.length > 0 && (
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground mb-3">Configuration Fields:</h4>
          {trigger.configFields.map((field, idx) => (
            <ConfigFieldItem key={idx} field={field} />
          ))}
        </div>
      </CardContent>
    )}
  </Card>
);

const IntegrationDetail = () => {
  const { integrationName } = useParams<{ integrationName: string }>();
  const formattedName = integrationName?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || '';

  // Get integration data or generate basic actions
  const integrationData = integrationActions[formattedName] || 
    generateBasicActions(formattedName, "General");

  const logoUrl = getLogoUrl(formattedName);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <Link 
            to="/integrations" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Integrations
          </Link>

          <div className="flex items-start gap-6 flex-wrap">
            <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-lg flex items-center justify-center">
              <img 
                src={logoUrl} 
                alt={`${formattedName} logo`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${formattedName}&background=random`;
                }}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {formattedName}
                </h1>
                <Badge variant="outline" className="text-sm">
                  {integrationData.category}
                </Badge>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6">
                Seamless integration between {formattedName} and SpotzyAI
              </p>

              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">
                    {integrationData.actionsCount} Actions
                  </span>
                </div>
                {integrationData.triggersCount > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">
                      {integrationData.triggersCount} Triggers
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" variant="default">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/integrations">View All Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
              <p className="text-muted-foreground">
                Automate your {formattedName} processes with intelligent voice agents
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No-Code Platform</h3>
              <p className="text-muted-foreground">
                Set up {formattedName} integration in minutes, not weeks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Get real-time insights from every {formattedName} interaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Actions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available <span className="text-primary">Actions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful actions you can trigger with {formattedName} to automate your workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {integrationData.actions.map((action, idx) => (
              <ActionCard key={idx} action={action} />
            ))}
          </div>
        </div>
      </section>

      {/* Available Triggers Section */}
      {integrationData.triggers.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Available <span className="text-primary">Triggers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Events in {formattedName} that can automatically start your workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrationData.triggers.map((trigger, idx) => (
                <TriggerCard key={idx} trigger={trigger} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to automate with {formattedName}?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start building powerful voice workflows today with our no-code platform
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg">Get Started Now</Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/integrations">Explore More Integrations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationDetail;
