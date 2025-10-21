import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const languages = [
  { code: "EN", name: "English", voiceCount: 45 },
  { code: "ES", name: "Spanish", voiceCount: 38 },
  { code: "FR", name: "French", voiceCount: 32 },
  { code: "DE", name: "German", voiceCount: 28 },
  { code: "IT", name: "Italian", voiceCount: 25 },
  { code: "PT", name: "Portuguese", voiceCount: 24 },
  { code: "ZH", name: "Chinese", voiceCount: 30 },
  { code: "JA", name: "Japanese", voiceCount: 22 },
  { code: "KO", name: "Korean", voiceCount: 20 },
  { code: "AR", name: "Arabic", voiceCount: 18 },
  { code: "RU", name: "Russian", voiceCount: 16 },
  { code: "NL", name: "Dutch", voiceCount: 15 },
  { code: "PL", name: "Polish", voiceCount: 14 },
  { code: "TR", name: "Turkish", voiceCount: 12 },
  { code: "SV", name: "Swedish", voiceCount: 11 },
  { code: "DA", name: "Danish", voiceCount: 10 },
  { code: "NO", name: "Norwegian", voiceCount: 10 },
  { code: "FI", name: "Finnish", voiceCount: 9 },
  { code: "CS", name: "Czech", voiceCount: 8 },
  { code: "HU", name: "Hungarian", voiceCount: 8 },
  { code: "RO", name: "Romanian", voiceCount: 7 },
  { code: "EL", name: "Greek", voiceCount: 7 },
  { code: "HE", name: "Hebrew", voiceCount: 6 },
  { code: "TH", name: "Thai", voiceCount: 6 },
];

const popularLanguages = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese"
];

const Languages = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Voice <span className="text-primary">Languages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore 100+ languages with hundreds of natural AI voices
          </p>

          {/* Stats */}
          <div className="inline-block bg-card border border-border rounded-xl p-8 shadow-elegant mb-8">
            <div className="text-sm text-muted-foreground mb-2">Global Coverage</div>
            <div className="text-4xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground mt-1">Total Languages</div>
          </div>

          {/* Popular Languages */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Popular Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularLanguages.map((lang) => (
                <Button key={lang} variant="secondary" size="sm">
                  {lang}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredLanguages.map((language) => (
              <div
                key={language.code}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-elegant"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  {language.code}
                </div>
                <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language.voiceCount} voices available
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Voices
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Languages;
