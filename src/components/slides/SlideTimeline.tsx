import Card from "../Card";

const SlideTimeline = () => {
  const phases = [
    {
      week: "Week 1",
      title: "Planning and Base Configuration",
      activities:
        "Planning, site structure, Shopify configuration, and membership system foundation.",
    },
    {
      week: "Week 2",
      title: "Visual Development and Integration",
      activities:
        "Visual development, design integration, external apps configuration, and initial product upload.",
    },
    {
      week: "Week 3",
      title: "Testing and Adjustments",
      activities:
        "Internal testing, client review, technical adjustments, and purchase flow validations.",
    },
    {
      week: "Week 4",
      title: "Launch",
      activities: "Official site launch and final operational verification.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-center text-foreground mb-8">
          Development Timeline
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
