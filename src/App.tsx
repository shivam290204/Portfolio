import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* 
        Animated background must be outside Locomotive scroll container 
        with position absolute/fixed so it doesn't scroll with the page content 
      */}
      <ThreeBackground />
      {/* Navbar fixed outside scrolling container */}
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <div className="relative w-full z-10 overflow-hidden block pt-24">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
