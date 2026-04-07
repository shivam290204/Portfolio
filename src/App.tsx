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
import CustomCursor from "@/components/CustomCursor";

declare const LocomotiveScroll: any;
declare const gsap: any;
declare const ScrollTrigger: any;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for CDN scripts to load
    const initScroll = () => {
      if (typeof LocomotiveScroll === "undefined" || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        setTimeout(initScroll, 50);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const scrollContainer = containerRef.current;
      if (!scrollContainer) return;

      const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 0.8, // Slightly softer inertia
        class: "is-reveal",
      });

      // Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value: any) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: scrollContainer.style.transform ? "transform" : "fixed"
      });

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();

      return () => {
        locoScroll.destroy();
        ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      };
    };

    initScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      {/* 
        Animated background must be outside Locomotive scroll container 
        with position absolute/fixed so it doesn't scroll with the page content 
      */}
      <ThreeBackground />
      {/* Navbar fixed outside scrolling container */}
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <div id="scroll-container" data-scroll-container ref={containerRef} className="relative w-full z-10 overflow-hidden block pt-24">
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
