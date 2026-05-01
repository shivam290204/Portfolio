import { useState, useEffect, useRef } from "react";
import { MapPin, Code, Briefcase, Users, Trophy, MousePointerClick } from "lucide-react";

export default function About() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // User manually clicks to close instead of relying on IntersectionObserver.

  // Consolidate the previous 7 items into 4 distinct, colorful cards
  // perfectly matching the reference image's color palette and vibe.
  const cards = [
    {
      id: "stats",
      color: "bg-[#E03A3A]", // Vibrant Red
      textColor: "text-white",
      title: "Builder",
      icon: <Code className="w-8 h-8 opacity-90 mb-4" />,
      content: (
        <div className="flex flex-col gap-4 w-full justify-center h-full">
          <div>
            <div className="text-5xl font-black mb-1 drop-shadow-sm">200+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Problems Solved</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-1 drop-shadow-sm">3+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Full-Stack Projects</div>
          </div>
          <p className="text-xs font-semibold opacity-90 mt-2 leading-relaxed">
            Architecting scalable systems and turning complex algorithms into high-performance solutions.
          </p>
        </div>
      )
    },
    {
      id: "leadership",
      color: "bg-[#F4D03F]", // Vibrant Yellow
      textColor: "text-black",
      title: "Leadership",
      icon: <Users className="w-8 h-8 opacity-80 mb-4" />,
      content: (
        <div className="flex flex-col h-full justify-center gap-4 pb-4">
          <div className="text-2xl font-black leading-tight">
            Leading with Vision & Execution
          </div>
          <p className="text-sm font-semibold opacity-80 leading-relaxed">
            Led engineering teams at national hackathons like SIH. I drive technical vision from ideation to winning product deployment.
          </p>
        </div>
      )
    },
    {
      id: "achievements",
      color: "bg-[#F39C12]", // Vibrant Orange
      textColor: "text-white",
      title: "Achievements",
      icon: <Trophy className="w-8 h-8 opacity-90 mb-4" />,
      content: (
        <div className="flex flex-col gap-4 w-full justify-center h-full">
          <div>
            <div className="text-2xl font-black drop-shadow-sm mb-1">SIH & More</div>
            <div className="text-sm font-semibold opacity-90 leading-snug">Hackathon Participant</div>
          </div>
          <div>
            <div className="text-2xl font-black drop-shadow-sm mb-1">IBM Certified</div>
            <div className="text-sm font-semibold opacity-90 leading-snug">AI Summer Training</div>
          </div>
          <p className="text-xs font-semibold opacity-90 mt-2 leading-relaxed">
            Transforming theoretical AI and software engineering knowledge into real-world, award-winning projects.
          </p>
        </div>
      )
    },
    {
      id: "status",
      color: "bg-[#9B59B6]", // Vibrant Purple
      textColor: "text-white",
      title: "Status",
      icon: <Briefcase className="w-8 h-8 opacity-90 mb-4" />,
      content: (
        <div className="flex flex-col h-full justify-between gap-4 pb-2">
          <div className="flex flex-col gap-2">
            <span className="px-3 py-1.5 bg-black/20 rounded-xl text-xs font-bold max-w-fit border border-black/10 shadow-sm">Open to Internships</span>
            <span className="px-3 py-1.5 bg-black/20 rounded-xl text-xs font-bold max-w-fit border border-black/10 shadow-sm">Remote Friendly</span>
          </div>
          <p className="text-xs font-semibold opacity-90 leading-relaxed mb-0">
            Seeking 2025 roles to build impact-driven software.
          </p>
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-5 h-5 drop-shadow-sm" />
              <span className="font-black text-xl drop-shadow-sm">Delhi, India</span>
            </div>
            <span className="text-[11px] opacity-90 font-semibold tracking-wide">GGSIPU · HMR Institute</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen py-24 px-4 sm:px-6 overflow-hidden flex flex-col justify-center items-center bg-black/30">
      
      {/* Header */}
      <div className="text-center mb-10 z-20 pointer-events-none">
        <span className="text-primary text-sm font-mono tracking-widest uppercase">Overview</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">Explore my stats, stack, and current status. Tap the deck to reveal the details.</p>
      </div>

      {/* Interactive Deck Area */}
      <div 
        className={`relative w-full max-w-6xl mx-auto flex items-center justify-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isMobile && isOpened ? "flex-col gap-8 h-auto pb-12 pt-6" : ""}`}
        style={{
          // Maintain a constant static height on Desktop to prevent Locomotive Scroll layout-shift glitches
          height: isMobile ? "auto" : "550px",
          minHeight: isMobile && !isOpened ? "480px" : "auto",
        }}
        onClick={() => setIsOpened(!isOpened)}
      >
        {/* Click indicator */}
        {!isOpened && (
          <div className="absolute top-[10%] sm:top-[15%] right-[10%] sm:right-[30%] z-50 animate-bounce flex flex-col items-center gap-2 pointer-events-none">
            <MousePointerClick className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            <span className="bg-blue-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              Click to Spread!
            </span>
          </div>
        )}

        {cards.map((card, index) => {
          // Closed state (messy stack in the center)
          const stackedX = (index - 1.5) * 15;
          const stackedY = (index) * 10;
          const stackedRotate = (index - 1.5) * 8;
          const stackedTransform = `rotate(${stackedRotate}deg) translate(${stackedX}px, ${stackedY}px)`;
          
          // Opened state (fanned out)
          // Mobile: Vertical stack with slight alternating tilts
          // Desktop: Beautiful horizontal arc
          const mobileSpreadY = (index - 1.5) * 380;
          const spreadX = (index - 1.5) * 270;
          const spreadY = Math.abs(index - 1.5) * 30;
          const spreadRotate = (index - 1.5) * 6;
          
          const openedTransform = `translate(${spreadX}px, ${spreadY}px) rotate(${spreadRotate}deg)`;

          return (
            <div
              key={card.id}
              className={`${isMobile && isOpened ? "relative" : "absolute origin-bottom"} w-[260px] h-[360px] rounded-[32px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/20 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color} ${card.textColor} ${isOpened ? 'hover:scale-105 hover:-translate-y-6' : ''}`}
              style={{
                transform: isOpened ? (isMobile ? 'none' : openedTransform) : stackedTransform,
                zIndex: isOpened ? 10 + index : index, // Optional hover elevation can be handled via CSS hover + z-index
              }}
              onMouseEnter={(e) => {
                if (isOpened) e.currentTarget.style.zIndex = "50";
              }}
              onMouseLeave={(e) => {
                if (isOpened) e.currentTarget.style.zIndex = `${10 + index}`;
              }}
            >
              <div className="mb-4">
                {card.icon}
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-2">
                  {card.title}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                {card.content}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
