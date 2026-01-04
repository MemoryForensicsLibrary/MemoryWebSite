import ilustrateImage from "@/assets/Ilustrate1.png";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How it works
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Memory Forensics Library operates at a low level, extracting raw
              memory data directly from running processes or system contexts.
              This data is normalized and structured for further analysis.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Collected information can be stored, correlated, or streamed to
              external systems such as databases, servers, or security tools.
              This enables long-term analysis, automation, and integration with
              larger forensic pipelines.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The library acts as a core engine — powering bots, monitoring
              services, and forensic platforms without enforcing architectural
              constraints.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={ilustrateImage}
              alt="Memory Forensics workflow illustration"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
