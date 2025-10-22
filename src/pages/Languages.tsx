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
  { code: "EN", name: "English", voiceCount: 45, region: "Europe", popular: true, flag: "🇬🇧" },
  { code: "ES", name: "Spanish", voiceCount: 38, region: "Europe", popular: true, flag: "🇪🇸" },
  { code: "FR", name: "French", voiceCount: 32, region: "Europe", popular: true, flag: "🇫🇷" },
  { code: "DE", name: "German", voiceCount: 28, region: "Europe", popular: true, flag: "🇩🇪" },
  { code: "IT", name: "Italian", voiceCount: 25, region: "Europe", popular: true, flag: "🇮🇹" },
  { code: "PT", name: "Portuguese", voiceCount: 24, region: "Europe", popular: true, flag: "🇵🇹" },
  { code: "ZH", name: "Chinese", voiceCount: 30, region: "Asia", popular: true, flag: "🇨🇳" },
  { code: "AR", name: "Arabic", voiceCount: 22, region: "Middle East", popular: false, flag: "🇸🇦" },
  { code: "BG", name: "Bulgarian", voiceCount: 8, region: "Europe", popular: false, flag: "🇧🇬" },
  { code: "HR", name: "Croatian", voiceCount: 7, region: "Europe", popular: false, flag: "🇭🇷" },
  { code: "CS", name: "Czech", voiceCount: 9, region: "Europe", popular: false, flag: "🇨🇿" },
  { code: "DA", name: "Danish", voiceCount: 10, region: "Europe", popular: false, flag: "🇩🇰" },
  { code: "NL", name: "Dutch", voiceCount: 15, region: "Europe", popular: false, flag: "🇳🇱" },
  { code: "FI", name: "Finnish", voiceCount: 9, region: "Europe", popular: false, flag: "🇫🇮" },
  { code: "KA", name: "Georgian", voiceCount: 5, region: "Europe", popular: false, flag: "🇬🇪" },
  { code: "EL", name: "Greek", voiceCount: 8, region: "Europe", popular: false, flag: "🇬🇷" },
  { code: "HE", name: "Hebrew", voiceCount: 7, region: "Middle East", popular: false, flag: "🇮🇱" },
  { code: "HI", name: "Hindi", voiceCount: 18, region: "Asia", popular: false, flag: "🇮🇳" },
  { code: "HU", name: "Hungarian", voiceCount: 8, region: "Europe", popular: false, flag: "🇭🇺" },
  { code: "JA", name: "Japanese", voiceCount: 20, region: "Asia", popular: false, flag: "🇯🇵" },
  { code: "KK", name: "Kazakh", voiceCount: 5, region: "Asia", popular: false, flag: "🇰🇿" },
  { code: "LT", name: "Lithuanian", voiceCount: 6, region: "Europe", popular: false, flag: "🇱🇹" },
  { code: "NO", name: "Norwegian", voiceCount: 10, region: "Europe", popular: false, flag: "🇳🇴" },
  { code: "PL", name: "Polish", voiceCount: 14, region: "Europe", popular: false, flag: "🇵🇱" },
  { code: "RO", name: "Romanian", voiceCount: 7, region: "Europe", popular: false, flag: "🇷🇴" },
  { code: "RU", name: "Russian", voiceCount: 16, region: "Europe", popular: false, flag: "🇷🇺" },
  { code: "SL", name: "Slovenian", voiceCount: 6, region: "Europe", popular: false, flag: "🇸🇮" },
  { code: "SV", name: "Swedish", voiceCount: 11, region: "Europe", popular: false, flag: "🇸🇪" },
  { code: "DE-CH", name: "Swiss German", voiceCount: 5, region: "Europe", popular: false, flag: "🇨🇭" },
  { code: "TA", name: "Tamil", voiceCount: 6, region: "Asia", popular: false, flag: "🇮🇳" },
  { code: "TR", name: "Turkish", voiceCount: 12, region: "Middle East", popular: false, flag: "🇹🇷" },
  { code: "UK", name: "Ukrainian", voiceCount: 8, region: "Europe", popular: false, flag: "🇺🇦" },
  { code: "UR", name: "Urdu", voiceCount: 7, region: "Asia", popular: false, flag: "🇵🇰" },
  { code: "UZ", name: "Uzbek", voiceCount: 5, region: "Asia", popular: false, flag: "🇺🇿" },
  { code: "SQ", name: "Albanian", voiceCount: 5, region: "Europe", popular: false, flag: "🇦🇱" },
  { code: "FIL", name: "Filipino", voiceCount: 8, region: "Asia", popular: false, flag: "🇵🇭" },
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
            Explore 36 languages with hundreds of natural AI voices powered by advanced neural networks
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Globe2 className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">36</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredLanguages.map((language, index) => (
              <div
                key={language.code}
                className="group bg-card border border-border rounded-xl p-4 hover:border-primary transition-all duration-300 hover:shadow-sm animate-fade-in flex items-center gap-3"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <div className="text-3xl flex-shrink-0">
                  {language.flag}
                </div>
                
                <h3 className="text-base font-semibold group-hover:text-primary transition-colors">{language.name}</h3>
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
