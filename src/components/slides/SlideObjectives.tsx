import Card from "../Card";
import { Store, Users } from "lucide-react";

const SlideObjectives = () => {
  const objectives = [
    {
      icon: Store,
      text: "Centralize your digital operation: Create a professional Shopify store where your products and services are organized in a clear, modern way aligned with your brand identity. A space where your customers can explore, purchase, and access their membership without depending on messages or manual attention.",
    },
    {
      icon: Users,
      text: "Launch a functional and scalable membership system: Implement a private members area using certified Shopify apps, allowing exclusive benefits, premium content, or special discounts according to your business requirements.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Objectives</h2>

        <Card variant="glass" className="space-y-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pt-2 text-justify">
                  {objective.text}
                </p>
              </div>
            );
          })}
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideObjectives;
