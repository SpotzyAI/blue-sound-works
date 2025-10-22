import { Clock, CheckCircle, XCircle } from "lucide-react";

const FeatureShowcase = () => {
  const steps = [
    { number: "1", text: "Customer calls" },
    { number: "2", text: "AI answers instantly" },
    { number: "3", text: "Checks availability in real-time" },
    { number: "4", text: "Confirms or suggests alternatives" },
    { number: "5", text: "Sends automated confirmation" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Revolutionary Technology</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Real-Time Availability Check <span className="text-primary">During The Call</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Not after. Not later. Right now.
            </p>
          </div>

          {/* How It Works Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 hidden md:block" />
              
              {/* Steps */}
              <div className="grid md:grid-cols-5 gap-6 relative z-10">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-glow">
                      {step.number}
                    </div>
                    <p className="font-semibold">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Callout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-destructive/10 border-2 border-destructive/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-destructive/20">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">Traditional Way</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Customer calls → Leave message → Staff checks later → Call back customer → Maybe available → Confirm
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Delayed responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Lost customers during wait</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Multiple back-and-forth calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Staff time wasted</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Language barriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">1 call per time</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Limited hours answering (open hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Staff leaving</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Staff mood swings</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Customers on hold</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-primary/10 border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">SpotzyAI System</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Customer calls → AI answers → Checks real-time → Confirms instantly → Sends SMS confirmation
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Instant availability check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Immediate confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">One call, done</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Zero staff involvement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Emphasis Box */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-hero text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
              "We check availability <span className="underline decoration-4">DURING</span> the conversation, not after it ends"
            </p>
            <p className="text-primary-foreground/80 mt-4 text-lg">
              This is what makes our restaurant solution truly revolutionary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
