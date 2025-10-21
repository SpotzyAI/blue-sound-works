import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Globe2, Mic, TrendingUp, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "EN", name: "English", voiceCount: 45, region: "Europe", popular: true },
  { code: "ES", name: "Spanish", voiceCount: 38, region: "Europe", popular: true },
  { code: "FR", name: "French", voiceCount: 32, region: "Europe", popular: true },
  { code: "DE", name: "German", voiceCount: 28, region: "Europe", popular: true },
  { code: "IT", name: "Italian", voiceCount: 25, region: "Europe", popular: true },
  { code: "PT", name: "Portuguese", voiceCount: 24, region: "Europe", popular: true },
  { code: "ZH", name: "Chinese", voiceCount: 30, region: "Asia", popular: true },
  { code: "JA", name: "Japanese", voiceCount: 22, region: "Asia", popular: false },
  { code: "KO", name: "Korean", voiceCount: 20, region: "Asia", popular: false },
  { code: "AR", name: "Arabic", voiceCount: 18, region: "Middle East", popular: false },
  { code: "RU", name: "Russian", voiceCount: 16, region: "Europe", popular: false },
  { code: "NL", name: "Dutch", voiceCount: 15, region: "Europe", popular: false },
  { code: "PL", name: "Polish", voiceCount: 14, region: "Europe", popular: false },
  { code: "TR", name: "Turkish", voiceCount: 12, region: "Middle East", popular: false },
  { code: "SV", name: "Swedish", voiceCount: 11, region: "Europe", popular: false },
  { code: "DA", name: "Danish", voiceCount: 10, region: "Europe", popular: false },
  { code: "NO", name: "Norwegian", voiceCount: 10, region: "Europe", popular: false },
  { code: "FI", name: "Finnish", voiceCount: 9, region: "Europe", popular: false },
  { code: "CS", name: "Czech", voiceCount: 8, region: "Europe", popular: false },
  { code: "HU", name: "Hungarian", voiceCount: 8, region: "Europe", popular: false },
  { code: "RO", name: "Romanian", voiceCount: 7, region: "Europe", popular: false },
  { code: "EL", name: "Greek", voiceCount: 7, region: "Europe", popular: false },
  { code: "HE", name: "Hebrew", voiceCount: 6, region: "Middle East", popular: false },
  { code: "TH", name: "Thai", voiceCount: 6, region: "Asia", popular: false },
];

const popularLanguages = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese"
];

const Languages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredLanguages = languages
    .filter(lang => {
      const matchesSearch = lang.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = regionFilter === "all" || lang.region === regionFilter;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.voiceCount - a.voiceCount;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Globe2 className="h-4 w-4" />
            <span>Global Voice Coverage</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            AI Voice <span className="text-primary">Languages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            Explore 100+ languages with hundreds of natural AI voices powered by advanced neural networks
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Globe2 className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Mic className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">AI Voices</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
          </div>

          {/* Popular Languages */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Most Popular Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularLanguages.map((lang, index) => (
                <Button 
                  key={lang} 
                  variant="secondary" 
                  size="sm"
                  className="hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSearchQuery(lang)}
                >
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
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search languages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-[180px] h-12">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="Middle East">Middle East</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] h-12">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-muted-foreground mt-4 text-center">
              Showing {filteredLanguages.length} of {languages.length} languages
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredLanguages.map((language, index) => (
              <div
                key={language.code}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {language.code}
                  </div>
                  {language.popular && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                      Popular
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{language.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <Globe2 className="h-3 w-3" />
                  {language.region}
                </p>
                
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Mic className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary">{language.voiceCount}</span>
                  <span className="text-muted-foreground">voices</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Explore Voices
                </Button>
              </div>
            ))}
          </div>

          {filteredLanguages.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No languages found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Languages;
