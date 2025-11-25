import Card from "../Card";
import { Palette, Smartphone, Navigation, Home, Info, Package, Handshake, MapPin, FileText } from "lucide-react";

const SlideWebsite = () => {
  const designFeatures = [
    {
      icon: Palette,
      text: "Professional design aligned with 6lovesports brand identity, communicating quality, passion for sports, and modern aesthetics.",
    },
    {
      icon: Smartphone,
      text: "Fully responsive layout optimized for desktop, tablet, and mobile devices.",
    },
    {
      icon: Navigation,
      text: "Intuitive navigation with direct access to product catalog, membership area, shopping cart, and account management.",
    },
  ];

  const sections = [
    { icon: Home, title: "Home", desc: "Brand showcase" },
    { icon: Info, title: "About", desc: "Story and values" },
    { icon: Package, title: "Shop", desc: "Product catalog" },
    { icon: Handshake, title: "Membership", desc: "Exclusive benefits" },
    { icon: MapPin, title: "Account", desc: "User dashboard" },
    { icon: FileText, title: "Contact", desc: "Customer support" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-foreground">Store Features</h2>
          <p className="text-secondary text-lg">Conceptual scope of the proposal</p>
        </div>

        {/* Design & UX Section */}
        <div className="space-y-6 mb-10">
          <h3 className="text-primary text-center">Design and User Experience</h3>
          <Card variant="glass" className="space-y-4">
            {designFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-secondary" aria-hidden="true" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed pt-1 text-justify">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </Card>
        </div>

        {/* Suggested Structure Section */}
        <div className="space-y-6">
          <h3 className="text-primary text-center">Suggested Structure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} variant="neuo" className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground">{section.title}</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">{section.desc}</p>
                </Card>
            );
            })}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideWebsite;
