import { useState } from "react";
import libImg from "@/assets/LogoBrancaSemFundoAzul.png";
import botImg from "@/assets/LogoMemoryCorInvertida.png";
import otherImg from "@/assets/logo.jpg";

const images = [libImg, botImg, otherImg];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

          {/* RIGHT — CAROUSEL (IMAGES ONLY) */}
          <div>
            <div className="overflow-hidden">
              <img
                src={images[activeIndex]}
                alt="Project preview"
                className="w-full h-[320px] object-contain transition-opacity duration-300"
              />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
