import Card from "../Card";
import { DollarSign, CheckCircle } from "lucide-react";

const SlideInvestment = () => {
  const includedItems = [
    "Custom design integrated by the graphic team (includes designer work: $600)",
    "Complete Shopify implementation",
    "Membership app configuration",
    "Payment methods integration",
    "Initial product upload",
    "Responsive optimization + functional testing",
    "Basic private area for members",
    "Staff training (Shopify usage + membership management)",
    "1 month of post-launch support",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Total Investment</h2>

        <Card variant="glass" className="space-y-6">
          <div className="text-center space-y-4 pb-6 border-b border-border">
            <div className="flex items-center justify-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" aria-hidden="true" />
              <h3 className="text-foreground">Design, Development, and Complete Implementation</h3>
            </div>
            <div className="text-5xl font-bold text-primary">$2,600 USD</div>
            <p className="text-foreground/60 text-sm">One-time investment</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-primary text-lg font-semibold">Includes:</h4>
            <div className="space-y-3">
              {includedItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideInvestment;
