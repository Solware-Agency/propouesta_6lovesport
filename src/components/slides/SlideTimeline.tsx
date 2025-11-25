import Card from "../Card";

const SlideTimeline = () => {
  const phases = [
    {
      week: "Semana 1",
      title: "Planificación y Configuración Base",
      activities:
        "Planificación, estructura del sitio, configuración de Shopify y base del sistema de membresías.",
    },
    {
      week: "Semana 2",
      title: "Desarrollo Visual e Integración",
      activities:
        "Desarrollo visual, integración de diseño, configuración de apps externas y carga inicial de productos.",
    },
    {
      week: "Semana 3",
      title: "Pruebas y Ajustes",
      activities:
        "Pruebas internas, revisión con el cliente, ajustes técnicos y validaciones de flujo de compra.",
    },
    {
      week: "Semana 4",
      title: "Lanzamiento",
      activities: "Lanzamiento oficial del sitio y verificación operativa final.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Timeline de Desarrollo
        </h2>

        <div className="space-y-4">
          {phases.map((phase, index) => (
            <Card key={index} variant="glass" className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-primary font-bold text-lg">{phase.week}</span>
                <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                  {phase.title}
                </h3>
              </div>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-0 sm:pl-20 text-justify">
                {phase.activities}
              </p>
            </Card>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideTimeline;
