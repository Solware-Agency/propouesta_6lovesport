import Card from "../Card";
import { Info } from "lucide-react";

const SlideCosts = () => {
  const costs = [
    {
      item: "Domain",
      amount: "$10-$15/year",
      description: "Registration of your store's domain name.",
    },
    {
      item: "Shopify Plan",
      amount: "$25/month",
      description: "Monthly subscription to the Shopify platform.",
    },
    {
      item: "Membership App",
      amount: "$20-$25/month",
      description: "Depending on the selected application.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Client Fixed Costs</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Info className="w-5 h-5 text-secondary" aria-hidden="true" />
            <p className="text-secondary text-sm text-center">
              These expenses are independent of Solware
            </p>
          </div>

          {costs.map((cost, index) => {
            return (
              <Card key={index} variant="glass" className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold text-lg">{cost.item}</h3>
                    <p className="text-foreground/70 text-sm">{cost.description}</p>
                  </div>
                  <div className="text-primary font-bold text-xl whitespace-nowrap">
                    {cost.amount}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card variant="neuo" className="mt-8 bg-muted/50">
          <p className="text-foreground/80 text-sm text-center leading-relaxed">
            These costs are paid directly to the corresponding platforms and are necessary for the operation of your Shopify store with membership system.
          </p>
        </Card>

        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideCosts;
