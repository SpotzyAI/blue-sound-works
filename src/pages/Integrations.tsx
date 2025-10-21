import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All Categories",
  "Marketing",
  "CRM",
  "Communication",
  "Productivity",
  "Analytics",
  "E-commerce",
  "Customer Support",
  "Payment Processing",
];

const integrations = [
  { name: "Salesforce", category: "CRM", logo: "🔷" },
  { name: "HubSpot", category: "CRM", logo: "🟠" },
  { name: "Zapier", category: "Productivity", logo: "⚡" },
  { name: "Slack", category: "Communication", logo: "💬" },
  { name: "Shopify", category: "E-commerce", logo: "🛒" },
  { name: "Stripe", category: "Payment Processing", logo: "💳" },
  { name: "Zendesk", category: "Customer Support", logo: "🎧" },
  { name: "Google Analytics", category: "Analytics", logo: "📊" },
  { name: "Mailchimp", category: "Marketing", logo: "📧" },
  { name: "Twilio", category: "Communication", logo: "📱" },
  { name: "Microsoft Teams", category: "Communication", logo: "👥" },
  { name: "Zoho CRM", category: "CRM", logo: "📈" },
  { name: "ActiveCampaign", category: "Marketing", logo: "🎯" },
  { name: "Freshdesk", category: "Customer Support", logo: "🆘" },
  { name: "PayPal", category: "Payment Processing", logo: "💰" },
  { name: "WooCommerce", category: "E-commerce", logo: "🏪" },
  { name: "Intercom", category: "Customer Support", logo: "💡" },
  { name: "Pipedrive", category: "CRM", logo: "🔄" },
];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Integrations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with 250+ popular tools and platforms using our no-code platform
          </p>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Categories Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="max-w-md mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-elegant cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 text-3xl">
                  {integration.logo}
                </div>
                <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium mb-3">
                  {integration.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seamlessly integrate with {integration.name}
                </p>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No integrations found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
