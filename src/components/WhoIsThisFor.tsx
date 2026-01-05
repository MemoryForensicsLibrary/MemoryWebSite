const WhoIsThisFor = () => {
  const targets = [
    {
      title: "Security Engineers",
      description:
        "Professionals who need reliable tooling to inspect, validate, and automate memory analysis workflows in real-world environments.",
    },
    {
      title: "Forensic Analysts",
      description:
        "Analysts performing incident response, malware investigations, and post-compromise analysis using live or captured memory data.",
    },
    {
      title: "Researchers",
      description:
        "Security researchers exploring low-level system behavior, memory manipulation techniques, and detection mechanisms.",
    },
    {
      title: "Developers & Tool Builders",
      description:
        "Developers building security products, bots, or platforms that require structured and automated memory forensics data.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Who is this for?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {targets.map((item, index) => (
              <div
                key={index}
                className="border-l-2 border-primary pl-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
