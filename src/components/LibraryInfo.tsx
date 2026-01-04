const LibraryInfo = () => {
  const features = [
    {
      title: "Live Memory Inspection",
      description:
        "Read and analyze memory from running processes without interruption. Supports both user-space and kernel-space analysis on supported platforms.",
    },
    {
      title: "Integrity Analysis",
      description:
        "Detect memory tampering, code injection, and other malicious modifications through comprehensive integrity checking mechanisms.",
    },
    {
      title: "Cross-Platform Support",
      description:
        "Designed to work across major operating systems including Linux, Windows, and macOS, with platform-specific optimizations.",
    },
    {
      title: "Minimal Dependencies",
      description:
        "Written in pure C with minimal external dependencies, ensuring easy integration into existing projects and maximum portability.",
    },
  ];

  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Library
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Memory Forensics Library is built with performance and reliability in mind. 
            It provides a comprehensive API for memory operations that security 
            professionals depend on for their daily work.
          </p>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-background border rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Installation
            </h3>
            <pre className="bg-foreground/5 p-4 rounded overflow-x-auto">
              <code className="text-sm font-mono text-foreground">
{`git clone https://github.com/your-repo/memory-forensics-lib.git
cd memory-forensics-lib
make
sudo make install`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryInfo;
