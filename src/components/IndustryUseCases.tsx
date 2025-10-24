import { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IndustryUseCasesProps {
  useCases: UseCase[];
}

const IndustryUseCases = ({ useCases }: IndustryUseCasesProps) => {
  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Subtle glass overlay */}
      <div className="absolute inset-0 bg-gradient-glass opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-primary mb-8">Examples of Flows</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4 p-4 rounded-2xl glass-card group-hover:glass-strong w-fit group-hover:animate-glow transition-all duration-300">
                  <useCase.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;
