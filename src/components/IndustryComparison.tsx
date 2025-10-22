import { Check, X } from "lucide-react";

const IndustryComparison = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Comparison: Traditional vs SpotzyAI
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Traditional Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">High Monthly Costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Limited Availability</p>
                    <p className="text-sm text-muted-foreground">Business hours only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Training Required</p>
                    <p className="text-sm text-muted-foreground">Weeks of onboarding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Vacation & Sick Days</p>
                    <p className="text-sm text-muted-foreground">Service interruptions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SpotzyAI */}
            <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Recommended
              </div>
              <h3 className="text-2xl font-bold mb-6">With SpotzyAI</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">90% Cost Reduction</p>
                    <p className="text-sm text-muted-foreground">Pay only per call</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">24/7 Availability</p>
                    <p className="text-sm text-muted-foreground">Never miss a call</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Instant Deployment</p>
                    <p className="text-sm text-muted-foreground">Live in minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Always Learning</p>
                    <p className="text-sm text-muted-foreground">Improves with every call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryComparison;
