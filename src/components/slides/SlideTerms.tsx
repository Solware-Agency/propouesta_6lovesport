import Card from "../Card";
import { FileCheck, Clock, CreditCard, Calendar } from "lucide-react";

const SlideTerms = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">Terms and Conditions</h2>

        <div className="space-y-6">
          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Client Requirements</h3>
            </div>
            <ul className="text-foreground/80 text-sm sm:text-base leading-relaxed space-y-2 pl-9">
              <li>• Visual materials (images, texts, prices)</li>
              <li>• Access to Shopify account (or creation of a new one)</li>
              <li>• Confirmation of domain and payment method to integrate</li>
            </ul>
            <p className="text-foreground/70 text-xs italic pl-9">
              Timely delivery of these materials ensures maintaining the established timelines.
            </p>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Payment and Delivery Process</h3>
            </div>
            <div className="text-foreground/80 text-sm sm:text-base leading-relaxed space-y-2 pl-9">
              <p>• Estimated project time: <span className="font-semibold text-primary">4 weeks</span></p>
              <p>• Changes outside the initial scope will have additional cost</p>
            </div>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Payment Method (3 installments)</h3>
            </div>
            <div className="text-foreground/80 text-sm sm:text-base leading-relaxed space-y-2 pl-9">
              <p>• <span className="font-semibold text-primary">40%</span> at project start</p>
              <p>• <span className="font-semibold text-primary">30%</span> with the first functional progress</p>
              <p>• <span className="font-semibold text-primary">30%</span> at completion, prior to site launch</p>
            </div>
          </Card>

          <Card variant="neuo" className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-primary text-lg font-semibold">Validity</h3>
            </div>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed pl-9">
              This proposal is valid for <span className="font-semibold text-primary">45 calendar days</span> from its issuance.
            </p>
          </Card>
        </div>

        <Card variant="glass" className="mt-8">
          <p className="text-center text-foreground/70 text-sm leading-relaxed">
            This proposal represents a complete solution to centralize and professionalize 6lovesports' digital operation, with a scalable system that grows with your business.
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
