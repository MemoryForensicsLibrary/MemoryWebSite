import libImg from "@/assets/LogoMemoryCorInvertida.png";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              About
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">
                  Memory Forensics Library
                </strong>{" "}
                is an open-source, low-level C library designed for live memory
                inspection and runtime analysis.
              </p>

              <p>
                The project provides a minimal and well-documented API that
                enables security researchers to build reliable forensic and
                inspection tooling across platforms.
              </p>

              <p>
                The ecosystem extends beyond the core library, including
                automation tools and supporting components used in real-world
                security workflows.
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={libImg}
              alt="Memory Forensics Library logo"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
