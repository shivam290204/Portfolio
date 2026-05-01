import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download, Terminal } from "lucide-react";

declare const gsap: any;

const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "Java Developer",
  "AI Enthusiast",
];

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
      gsap.fromTo(".hero-portrait",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.2 }
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
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black py-20 lg:py-0"
      id="home"
    >
      {/* Background glow and grid */}
      <div className="absolute inset-0 radial-bg pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Typography */}
        <div 
          className="hero-text flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%] xl:w-3/5"
          style={{
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <p className="text-xl sm:text-2xl text-white/80 font-light tracking-wide mb-3">
            Hi, I'm <span className="font-semibold text-white">Shivam Tiwari</span>
          </p>
          
          <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-blue-500 leading-[1.1] mb-6 min-h-[100px] lg:min-h-[180px] drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <TypewriterText texts={roles} />
          </div>
          
          {/* GitHub / Terminal styled bio box */}
          <div className="w-full max-w-xl mb-10 rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {/* Top Bar */}
            <div className="flex items-center px-4 py-2.5 bg-[#161b22] border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
              </div>
              <div className="ml-4 flex items-center gap-2 px-3 py-1 bg-[#0d1117] rounded-md text-xs text-white/60 font-mono border border-white/5">
                <Terminal className="w-3 h-3" />
                <span>Intro.jsx</span>
              </div>
            </div>
            {/* Content */}
            <div className="p-5 sm:p-6">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light">
                <span className="text-blue-500 font-mono mr-2">{">"}</span>
                3rd-year CSE student (CGPA: <span className="text-white font-medium">8.5+</span>) at <span className="text-white font-medium">HMR Institute of Technology & Management</span>, GGSIPU Delhi — building scalable full-stack applications and exploring AI.
              </p>
            </div>
          </div>

          <div className="hero-cta flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1"
            >
              Let's Build Together
            </a>
            <div className="flex gap-3">
              <a
                href="https://drive.google.com/file/d/1uWz9eQWzpidw6PTk6PmPAN6RWr1_FuCE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:-translate-y-1 transition-all"
                title="View Resume"
              >
                <Download className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/shivam290204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:-translate-y-1 transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/shivam-tiwari-383761292"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 hover:-translate-y-1 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hero-portrait relative w-full lg:w-[45%] xl:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0 pointer-events-none">
          <div 
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.2)] bg-gradient-to-br from-white/5 to-white/0 overflow-hidden"
            style={{
              transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl mix-blend-overlay" />
            
            <img 
              src="/shivam_enhanced.png" 
              alt="Shivam Tiwari"
              className="w-full h-full object-cover scale-110 object-top"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
