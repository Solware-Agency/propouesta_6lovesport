import Card from "../Card";
import { Package, ImageIcon, RefreshCw, Headphones } from "lucide-react";

const SlidePricing = () => {
  const services = [
    {
      icon: Package,
      title: "Monthly Product Upload (up to 50)",
      description: "Upload of new items with curated information.",
    },
    {
      icon: ImageIcon,
      title: "Visual Adjustments and Banners",
      description: "Change of main images or monthly promotions.",
    },
    {
      icon: RefreshCw,
      title: "Navigation and UX Review",
      description: "Functional verification and user experience.",
    },
    {
      icon: Headphones,
      title: "Basic Technical Support",
      description: "Assistance via Meet or WhatsApp for minor changes.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Support and Maintenance
        </h2>

        <div className="text-center mb-6">
          <p className="text-secondary text-sm">On Demand Service</p>
          <p className="text-primary text-4xl font-bold mt-2">$100 USD / Month</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} variant="neuo" className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-foreground font-semibold text-base">
                    {service.title}
                  </h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed text-justify">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <Card variant="glass" className="mt-8">
          <p className="text-center text-foreground/70 text-sm leading-relaxed">
            This optional service allows you to keep your store updated and functioning optimally, with monthly technical support for changes and adjustments according to your needs.
          </p>
        </Card>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlidePricing;
