import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}