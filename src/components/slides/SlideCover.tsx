import Card from "../Card";

const SlideCover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card variant="glass" className="max-w-3xl w-full text-center space-y-6">

        {/* Title */}
        <h1 className="text-foreground">
          Shopify Store with Membership System for 6lovesports
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-semibold">
          Proposal presented by Solware
        </p>

        {/* Description */}
        <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed text-justify">
          Complete development of a professional Shopify store with integrated membership system.
          A digital space where your customers can explore sports products, make purchases,
          and access exclusive membership benefits, all in an automated and centralized way.
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-foreground/40 mt-8">
          © 2025 Solware
        </p>
      </Card>
    </div>
  );
};

export default SlideCover;
