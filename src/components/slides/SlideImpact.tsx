import Card from "../Card";
import { Award, DollarSign, TrendingUp, Settings } from "lucide-react";

const SlideImpact = () => {
  const impacts = [
    {
      icon: Award,
      title: "Professional Brand Image",
      description: "A modern digital presence strengthens customer trust and positions 6lovesports as a serious, professional brand in the sports industry.",
    },
    {
      icon: DollarSign,
      title: "Increased Revenue Potential",
      description: "24/7 automated sales without manual intervention, allowing customers to purchase anytime, anywhere.",
    },
    {
      icon: TrendingUp,
      title: "Business Scalability",
      description: "Digital infrastructure ready to handle growing customer base, new products, and expanded services without increasing operational burden.",
    },
    {
      icon: Settings,
      title: "Operational Efficiency",
      description: "Centralized platform to manage products, orders, members, and payments from a single dashboard, reducing manual work and errors.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Expected Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-primary text-lg sm:text-xl">{impact.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                  {impact.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideImpact;
