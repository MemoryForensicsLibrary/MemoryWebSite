import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Community from "@/components/Community";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <HowItWorks />
        <WhoIsThisFor />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
