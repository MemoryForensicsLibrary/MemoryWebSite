import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LibraryInfo from "@/components/LibraryInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <LibraryInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
