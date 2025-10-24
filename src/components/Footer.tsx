import { Instagram, Facebook, Mail } from "lucide-react";
import spotzyLogo from "@/assets/spotzy-logo.svg";
const Footer = () => {
  return <footer className="relative bg-gradient-subtle border-t border-border/50 py-16 overflow-hidden">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gradient-glass opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105 w-fit">
              <img src={spotzyLogo} alt="SpotzyAI Logo" className="h-10" />
            </a>
            <p className="text-muted-foreground">Your 24/7 Voice of Excellence</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/spotzyai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass hover:glass-strong hover:text-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/spotzyai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass hover:glass-strong hover:text-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@spotzyai.com" className="w-10 h-10 rounded-lg glass hover:glass-strong hover:text-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="/pricing" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="/#use-cases" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Use Cases</a></li>
              <li><a href="/integrations" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Integrations</a></li>
              <li><a href="/languages" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Languages</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="https://docs.spotzyai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="mailto:support@spotzyai.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></li>
              <li><a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SpotzyAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">Terms</a>
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">Privacy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;