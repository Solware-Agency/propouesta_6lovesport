import Card from "../Card";
import { FileCheck, Clock, CreditCard, Calendar } from "lucide-react";

const SlideTerms = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Términos y Condiciones</h2>

        <div className="space-y-6">
          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Requisitos del Cliente</h3>
            </div>
            <ul className="text-foreground/80 text-sm sm:text-base leading-relaxed space-y-2 pl-9">
              <li>• Material visual (imágenes, textos, precios)</li>
              <li>• Acceso a la cuenta de Shopify (o creación de una nueva)</li>
              <li>• Confirmación del dominio y método de pago a integrar</li>
            </ul>
            <p className="text-foreground/70 text-xs italic pl-9">
              La entrega oportuna de estos materiales garantiza mantener los tiempos establecidos.
            </p>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Proceso de Pago y Entrega</h3>
            </div>
            <div className="text-foreground/80 text-sm sm:text-base leading-relaxed space-y-2 pl-9">
              <p>• Tiempo estimado del proyecto: <span className="font-semibold text-primary">4 semanas</span></p>
              <p>• Cambios fuera del alcance inicial tendrán costo adicional</p>
            </div>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Forma de Pago (3 cuotas)</h3>
            </div>
            <div className="text-foreground/80 text-sm sm:text-base leading-relaxed space-y-2 pl-9">
              <p>• <span className="font-semibold text-primary">40%</span> al inicio del proyecto</p>
              <p>• <span className="font-semibold text-primary">30%</span> con el primer avance funcional</p>
              <p>• <span className="font-semibold text-primary">30%</span> al finalizar, previo al lanzamiento del sitio</p>
            </div>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Vigencia</h3>
            </div>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-9">
              Esta propuesta es válida por <span className="font-semibold text-primary">45 días calendario</span> desde su emisión.
            </p>
          </Card>
        </div>

        <Card variant="glass" className="mt-8">
          <p className="text-center text-foreground/70 text-sm leading-relaxed">
            Esta propuesta representa una solución completa para centralizar y profesionalizar la operación digital de 6lovesports, con un sistema escalable que crece con tu negocio.
          </p>
        </Card>

        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </div>
    </div>
  );
};

export default SlideTerms;
