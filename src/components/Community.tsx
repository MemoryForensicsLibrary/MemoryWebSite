import MemoryWithTrophie from "@/assets/MemoryWithTrophie.png";

const Community = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
          
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Community
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Memory Forensics Library is maintained by security researchers and
              developers focused on low-level systems, operating system internals,
              and memory analysis.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The project evolves through open collaboration, shared research,
              and practical experimentation. Design decisions are driven by
              real-world forensic and security use cases.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The community values technical depth, clarity, and long-term
              maintainability over short-term trends.
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <img
              src={MemoryWithTrophie}
              alt="Memory Forensics Community"
              className="max-w-sm w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;
