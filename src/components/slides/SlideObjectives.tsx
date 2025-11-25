import Card from "../Card";
import { Store, Users, Zap } from "lucide-react";

const SlideObjectives = () => {
  const objectives = [
    {
      icon: Store,
      text: "Centralizar tu operación digital: Crear una tienda Shopify profesional donde tus productos y servicios estén organizados de forma clara, moderna y alineada con la identidad de tu marca. Un espacio donde tus clientes puedan explorar, comprar y acceder a su membresía sin depender de mensajes o atención manual.",
    },
    {
      icon: Users,
      text: "Lanzar un sistema de membresías funcional y escalable: Implementar un área privada para miembros utilizando apps certificadas de Shopify, permitiendo beneficios exclusivos, contenido premium o descuentos especiales según los requerimientos de tu negocio.",
    },
    {
      icon: Zap,
      text: "Simplificar ventas y automatizar procesos: Que tus clientes puedan comprar sin escribirte y que tú puedas gestionar todo desde un panel único, con menos carga operativa y más control de tus ingresos.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Objetivos</h2>

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
