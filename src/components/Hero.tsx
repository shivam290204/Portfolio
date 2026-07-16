import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download, Terminal } from "lucide-react";

declare const gsap: any;

function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex(i => (i + 1) % texts.length);
    }

    setDisplayText(currentText.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span>
      {displayText}
      <span className="cursor-blink opacity-50">|</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof gsap !== "undefined") {
      gsap.fromTo(".hero-text", 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.1 }
      );
      gsap.fromTo(".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8 }
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-transparent pt-28 pb-20 sm:pt-32"
      id="home"
    >
      {/* Subtle ambient gradients */}
      <div className="absolute inset-0 radial-bg pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Centered Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        
        {/* Centered Typography & Intro */}
        <div 
          className="hero-text flex flex-col items-center justify-center text-center w-full"
          style={{
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          {/* Handwritten greeting + Floating 3D Pills + Cursor Arrow matching input_file_0.png exactly */}
          {/* Handwritten greeting + Floating 3D Pills + Cursor Arrow matching input_file_0.png exactly */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4 relative z-20 px-2 max-w-full">
            {/* Left 3D Blue Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_0_#1e40af] -rotate-6 hover:rotate-0 transition-transform duration-200 cursor-default select-none shrink-0">
              Software Engineer
            </div>

            {/* Mouse Cursor Arrow Pointing to 'Hi, I am' */}
            <svg className="hidden sm:block w-6 h-6 sm:w-7 sm:h-7 text-slate-800 -rotate-12 translate-y-1 drop-shadow-md shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" stroke="#ffffff" strokeWidth="1.5" />
            </svg>

            {/* Handwritten 'Hi, I am' */}
            <span className="font-['Caveat'] text-3xl sm:text-5xl font-bold text-slate-800 -rotate-2 select-none tracking-wide px-1 sm:px-2 shrink-0">
              Hi, I am
            </span>

            {/* Right 3D Red Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-gradient-to-b from-red-500 to-red-600 text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_0_#991b1b] rotate-6 hover:rotate-0 transition-transform duration-200 cursor-default select-none shrink-0">
              Full-Stack Dev
            </div>
          </div>

          {/* Massive Retro Pixel/8-Bit Name with 3D Chunky Shadow - Safely contained */}
          <div className="relative my-3 sm:my-5 z-10 flex flex-col xl:flex-row items-center justify-center gap-3 sm:gap-4 max-w-full px-4">
            <h1 className="font-['Pixelify_Sans'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-wide select-none leading-tight drop-shadow-[0_6px_0_#cbd5e1] sm:drop-shadow-[0_10px_0_#cbd5e1] text-center break-words max-w-full">
              Shivam Tiwari
            </h1>

            {/* Floating Amber Pill safely beside/below without outside absolute coordinates */}
            <div className="flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md bg-gradient-to-b from-amber-400 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-[0_3px_0_#b45309] -rotate-6 hover:rotate-0 transition-transform duration-200 select-none shrink-0 cursor-default">
              AI Enthusiast
            </div>
          </div>
  
          
          {/* Light/Technical styled bio box - Centered */}
          <div className="w-full max-w-2xl mx-auto mb-10 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.06)] text-left">
            {/* Top Bar */}
            <div className="flex items-center px-4 py-2.5 bg-slate-100/90 border-b border-slate-200/80">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-2xs" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-2xs" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-2xs" />
              </div>
              <div className="ml-4 flex items-center gap-2 px-3 py-1 bg-white rounded-md text-xs text-slate-600 font-mono border border-slate-200 shadow-2xs">
                <Terminal className="w-3 h-3 text-blue-600" />
                <span>Intro.jsx</span>
              </div>
            </div>
            {/* Content */}
            <div className="p-5 sm:p-7">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                <span className="text-blue-600 font-mono mr-2 font-bold">{">"}</span>
                4th-year CSE student (CGPA: <span className="text-slate-900 font-bold">8.67</span>) at <span className="text-slate-900 font-bold">HMR Institute of Technology & Management</span>, GGSIPU Delhi — building scalable full-stack applications and exploring AI.
              </p>
            </div>
          </div>

          <div className="hero-cta flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-[0_10px_25px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1"
            >
              Let's Build Together
            </a>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://drive.google.com/file/d/10y1-Dq8POUWFWd2GA108ZjvS3qmqgdzl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-white hover:border-blue-300 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
                title="View Resume"
              >
                <Download className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/shivam290204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-white hover:border-blue-300 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/shivam-tiwari-383761292"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-white hover:border-blue-300 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
