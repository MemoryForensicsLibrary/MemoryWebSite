const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About
          </h2>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Memory Forensics Library is an open-source project developed for security 
              professionals who need reliable tools for memory analysis. The library 
              provides a robust foundation for building forensic applications that 
              require direct access to system memory.
            </p>
            
            <p>
              Our mission is to provide the security community with a well-documented, 
              efficient, and cross-platform solution for memory inspection tasks. 
              Whether you're analyzing malware, investigating security incidents, or 
              developing security tools, this library offers the primitives you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
