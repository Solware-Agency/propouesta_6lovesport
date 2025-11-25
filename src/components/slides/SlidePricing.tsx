import Card from "../Card";
import { Package, ImageIcon, RefreshCw, Headphones } from "lucide-react";

const SlidePricing = () => {
  const services = [
    {
      icon: Package,
      title: "Carga Mensual de Productos (hasta 50)",
      description: "Subida de nuevas piezas con información curada.",
    },
    {
      icon: ImageIcon,
      title: "Ajustes Visuales y Banners",
      description: "Cambio de imágenes principales o promociones mensuales.",
    },
    {
      icon: RefreshCw,
      title: "Revisión de Navegación y UX",
      description: "Verificación funcional y experiencia de usuario.",
    },
    {
      icon: Headphones,
      title: "Soporte Técnico Básico",
      description: "Asistencia vía Meet o WhatsApp para cambios menores.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Soporte y Mantenimiento
        </h2>

        <div className="text-center mb-6">
          <p className="text-secondary text-sm">Servicio On Demand</p>
          <p className="text-primary text-4xl font-bold mt-2">$100 USD / Mes</p>
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
            Este servicio opcional te permite mantener tu tienda actualizada y funcionando óptimamente, con soporte técnico mensual para cambios y ajustes según tus necesidades.
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
