import Card from "../Card";
import { Globe, ShoppingCart, Users2, Info } from "lucide-react";

const SlideCosts = () => {
  const costs = [
    {
      icon: Globe,
      item: "Dominio",
      amount: "$10-$15/año",
      description: "Registro del nombre de dominio de tu tienda.",
    },
    {
      icon: ShoppingCart,
      item: "Plan Shopify",
      amount: "$25/mes",
      description: "Suscripción mensual a la plataforma Shopify.",
    },
    {
      icon: Users2,
      item: "App de Membresías",
      amount: "$20-$25/mes",
      description: "Dependiendo de la aplicación seleccionada.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Costos Fijos del Cliente</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Info className="w-5 h-5 text-secondary" aria-hidden="true" />
            <p className="text-secondary text-sm text-center">
              Estos gastos los tendrá independientemente de Solware
            </p>
          </div>

          {costs.map((cost, index) => {
            const Icon = cost.icon;
            return (
              <Card key={index} variant="glass" className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-semibold text-lg">{cost.item}</h3>
                      <p className="text-foreground/70 text-sm">{cost.description}</p>
                    </div>
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
            Estos costos son pagados directamente a las plataformas correspondientes y son necesarios para el funcionamiento de tu tienda Shopify con sistema de membresías.
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
