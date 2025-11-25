import Card from "../Card";

const SlideDiagnosis = () => {
  const challenges = [
    {
      title: "No Centralized Digital Platform",
      description:
        "Currently operating through direct messages and manual processes, lacking a professional online store where customers can browse products and make purchases independently.",
    },
    {
      title: "Manual Sales Management",
      description:
        "All sales require direct interaction, creating operational burden and limiting scalability as customer base grows.",
    },
    {
      title: "No Membership System",
      description:
        "There's no platform to manage members, exclusive benefits, or recurring subscriptions in an automated and organized way.",
    },
    {
      title: "Limited Growth Potential",
      description:
        "Without a digital infrastructure, it's difficult to scale the business, launch new products, or offer additional services efficiently."
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Identified Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} variant="neuo" className="space-y-3">
              <h3 className="text-primary">{challenge.title}</h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed text-justify">
                {challenge.description}
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

export default SlideDiagnosis;
