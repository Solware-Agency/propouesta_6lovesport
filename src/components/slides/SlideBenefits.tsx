import Card from "../Card";
import { ShoppingBag, CreditCard, Package, LayoutDashboard, GraduationCap } from "lucide-react";

const SlideBenefits = () => {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Sistema de Membresía Integrado",
      description: "Área privada completa para miembros con beneficios exclusivos, totalmente integrada a Shopify.",
    },
    {
      icon: CreditCard,
      title: "Pasarelas de Pago Configuradas",
      description: "Shopify Payments, PayPal y otros métodos de pago disponibles, listos para procesar transacciones.",
    },
    {
      icon: Package,
      title: "Inventario Digital Centralizado",
      description: "Gestión completa de productos desde un solo panel, con control de stock y actualizaciones en tiempo real.",
    },
    {
      icon: LayoutDashboard,
      title: "Área Administrativa Simple",
      description: "Panel intuitivo para actualizar productos, precios y contenido sin conocimientos técnicos.",
    },
    {
      icon: GraduationCap,
      title: "Inducción al Personal",
      description: "Capacitación completa para uso efectivo de Shopify y gestión del sistema de membresías.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Beneficios Adicionales
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
