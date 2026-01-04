import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="hero-section py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img
              src={logo}
              alt="Memory Forensics Library"
              className="h-24 w-24 md:h-32 md:w-32 mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Memory Forensics Library
          </h1>
          
          <p 
            className="text-lg md:text-xl text-hero-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Low-level C library for live memory inspection and integrity analysis. 
            Designed for security researchers and forensic analysts.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/docs" className="btn-hero">
              Get Started
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-outline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
