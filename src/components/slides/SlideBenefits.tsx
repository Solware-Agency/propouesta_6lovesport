import Card from "../Card";
import { ShoppingBag, CreditCard, Package, LayoutDashboard, GraduationCap } from "lucide-react";

const SlideBenefits = () => {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Integrated Membership System",
      description: "Complete private area for members with exclusive benefits, fully integrated with Shopify.",
    },
    {
      icon: CreditCard,
      title: "Configured Payment Gateways",
      description: "Shopify Payments, PayPal, and other payment methods available, ready to process transactions.",
    },
    {
      icon: Package,
      title: "Centralized Digital Inventory",
      description: "Complete product management from a single panel, with stock control and real-time updates.",
    },
    {
      icon: LayoutDashboard,
      title: "Simple Administrative Area",
      description: "Intuitive panel to update products, prices, and content without technical knowledge.",
    },
    {
      icon: GraduationCap,
      title: "Staff Training",
      description: "Complete training for effective use of Shopify and membership system management.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Additional Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary">{benefit.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideBenefits;
