import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";


interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  image: string;
}

// Portfolio projects updated with the requested GitHub repositories.
const projects: ProjectItem[] = [
  {
    title: "NoobSyte Learning Platform",
    subtitle: "Interactive Java & DSA Learning Environment",
    description: "A production-grade MERN learning platform for beginner-friendly Java and DSA education, with interactive lesson paths, quiz tracking, and a scalable React/Express/Mongo architecture.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Vite"],
    github: "https://github.com/shivam290204/LearningPlatform",
    image: "/project1.png",
  },
  {
    title: "Vyayama",
    subtitle: "Cross-Platform Wellness, Dynamic Mascot & Habit Engine",
    description: "A modern, cross-platform fitness and wellness application built with Flutter & Supabase. Celebrates consistency and habit-building through a dynamic emotional 3D mascot, Snapchat-style exercise photo streaks with on-device ML verification, condition-aware workout planning, and holistic wellness routines.",
    techStack: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL", "Google ML Kit", "HealthKit"],
    github: "https://github.com/shivam290204/Vyayama",
    image: "/vyayama.png",
  },
  {
    title: "PeerPod - Code With Friend",
    subtitle: "Full-Stack Real-Time Code Collaboration & Execution Platform",
    description: "A state-of-the-art collaborative development environment with sub-millisecond CRDT synchronization (Yjs), resizable 3-column workspace, Monaco Editor with live multi-cursor tracking, sandboxed Judge0 code execution, LiveKit voice chat, synchronized Tldraw whiteboard, and stateless JWT security.",
    techStack: ["React", "TypeScript", "Node.js", "WebSockets", "Yjs (CRDTs)", "Monaco Editor", "Tldraw", "LiveKit", "MongoDB", "Judge0"],
    github: "https://github.com/shivam290204/CodeWithFriend",
    image: "/codesync.png",
  },
];

// Realistic Cut / Torn Paper Sheet Component with stroked cuts and shadows on all sides
function CutPaperSheet({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-full filter drop-shadow-[0_18px_32px_rgba(0,0,0,0.16)] drop-shadow-[0_3px_8px_rgba(0,0,0,0.08)] select-none ${className}`}>
      {/* Top Perforated Torn Edge with Hole Cutout */}
      <div className="w-full h-5 relative -mb-[1px] overflow-hidden">
        <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full fill-white stroke-slate-400">
          <path 
            d="M 0 20 L 0 8 
               L 5 0 L 10 8 L 15 0 L 20 8 L 25 0 L 30 8 L 35 0 L 40 8 L 45 0 L 50 8 
               L 55 0 L 60 8 L 65 0 L 70 8 L 75 0 L 80 8 L 85 0 L 90 8 L 95 0 L 100 8 
               L 105 0 L 110 8 L 115 0 L 120 8 L 125 0 L 130 8 L 135 0 L 140 8 L 145 0 L 150 8 
               L 155 0 L 160 8 L 165 0 L 170 8 L 175 0 L 180 8 L 185 0 L 190 8 L 195 0 L 200 8 
               L 205 0 L 210 8 L 215 0 L 220 8 L 225 0 L 230 8 L 235 0 L 240 8 
               C 242 8, 242 18, 250 18 C 258 18, 258 8, 260 8 
               L 265 0 L 270 8 L 275 0 L 280 8 L 285 0 L 290 8 L 295 0 L 300 8 
               L 305 0 L 310 8 L 315 0 L 320 8 L 325 0 L 330 8 L 335 0 L 340 8 
               L 345 0 L 350 8 L 355 0 L 360 8 L 365 0 L 370 8 L 375 0 L 380 8 
               L 385 0 L 390 8 L 395 0 L 400 8 L 405 0 L 410 8 L 415 0 L 420 8 
               L 425 0 L 430 8 L 435 0 L 440 8 L 445 0 L 450 8 L 455 0 L 460 8 
               L 465 0 L 470 8 L 475 0 L 480 8 L 485 0 L 490 8 L 495 0 L 500 8 
               L 500 20 Z" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main Paper Body with Cut Left & Right Borders */}
      <div className="relative bg-white border-l-[1.5px] border-r-[1.5px] border-slate-400 px-6 sm:px-8 pt-4 sm:pt-5 pb-10 sm:pb-14 text-left">
        {children}
      </div>

      {/* Bottom Torn / Ripped Paper Edge */}
      <div className="w-full h-5 relative -mt-[1px] overflow-hidden">
        <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full fill-white stroke-slate-400">
          <path 
            d="M 0 0 L 0 12 
               L 8 4 L 16 14 L 24 6 L 32 16 L 40 4 L 48 14 L 56 6 L 64 16 L 72 4 L 80 14 L 88 6 L 96 16 L 104 4 L 112 14 L 120 6 L 128 16 L 136 4 L 144 14 L 152 6 L 160 16 L 168 4 L 176 14 L 184 6 L 192 16 L 200 4 L 208 14 L 216 6 L 224 16 L 232 4 L 240 14 L 248 6 L 256 16 L 264 4 L 272 14 L 280 6 L 288 16 L 296 4 L 304 14 L 312 6 L 320 16 L 328 4 L 336 14 L 344 6 L 352 16 L 360 4 L 368 14 L 376 6 L 384 16 L 392 4 L 400 14 L 408 6 L 416 16 L 424 4 L 432 14 L 440 6 L 448 16 L 456 4 L 464 14 L 472 6 L 480 16 L 488 4 L 496 14 L 500 8 
               L 500 0 Z" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={sectionRef} className="relative pt-28 pb-8 px-4 sm:px-6">
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
        <div className="project-fade mb-24 md:mb-32 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 flex items-center md:justify-start justify-center gap-4">
            <span className="text-blue-600 font-mono text-xl sm:text-2xl font-bold">02.</span>
            Some Things I've Built
            <div className="hidden md:block h-[1px] bg-slate-200 w-48 ml-2 mt-1" />
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={project.title}
                className="project-fade relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center group"
                data-testid={`project-card-${i}`}
              >
                {/* Image Section - Positioned in front (z-20) */}
                <div 
                  className={`col-span-1 md:col-span-7 relative z-20 ${
                    isEven ? "md:col-start-1" : "md:col-start-6"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-lg border border-slate-200/80 transition-all duration-300 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] bg-slate-950"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* Content Section - Designed as Dual Crafted Paper Notes tucked behind project image (z-10) */}
                <div
                  className={`col-span-1 md:col-span-6 relative z-10 flex flex-col ${
                    isEven
                      ? "md:col-start-7 md:-ml-6"
                      : "md:col-start-1 md:-mr-6"
                  }`}
                >
                  {/* Top White Paper Note tucked behind project image - Distinctly Tilted Counter-Clockwise */}
                  <CutPaperSheet className="-rotate-[2deg] sm:-rotate-[2.8deg] hover:-rotate-1 transition-transform duration-300 z-10 origin-bottom-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-600 font-mono text-xs tracking-widest uppercase font-bold">
                        Featured Project
                      </span>
                      {/* Playful mini screw doodle */}
                      <svg className="w-3.5 h-3.5 text-slate-400 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2.5" />
                      </svg>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-1 hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 font-mono mb-3">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-slate-800 text-[15px] sm:text-base leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </CutPaperSheet>

                  {/* Overlapping Yellow Lined Sticky Note - Distinctly Tilted Clockwise across the bottom of the white paper */}
                  <div 
                    className="relative -mt-12 sm:-mt-16 ml-1 sm:ml-3 mr-3 sm:mr-6 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.22),0_4px_12px_rgba(0,0,0,0.12)] border border-amber-300/90 p-4 sm:p-5 pb-3 rotate-[2.2deg] sm:rotate-[2.8deg] hover:rotate-1 transition-transform duration-300 z-30 origin-top-left"
                    style={{
                      backgroundColor: "#FFF9B8",
                      backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, rgba(180, 140, 50, 0.16) 24px)"
                    }}
                  >
                    {/* Ring-Binder Punch Holes Row with Torn Slits to Top Edge */}
                    <div className="flex justify-between items-center px-1 pb-3 -mt-1">
                      {[...Array(7)].map((_, idx) => (
                        <div key={idx} className="relative flex flex-col items-center">
                          <div className="w-[1.5px] h-1.5 bg-amber-400/80 mb-[-1px]" />
                          <div 
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-900/25 shadow-[inset_0_1.5px_2.5px_rgba(0,0,0,0.5)] border border-amber-300/80" 
                          />
                        </div>
                      ))}
                    </div>

                    {/* Handwritten Header with Hand-Drawn Arrow */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        {/* Curved Hand-Drawn Arrow Doodle */}
                        <svg className="w-5 h-5 text-slate-800 -rotate-12 shrink-0 drop-shadow-2xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M4 14 C4 6, 12 4, 18 10 M14 10 L18 10 L18 6" />
                        </svg>
                        <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold text-slate-900 tracking-wide select-none">
                          Stack & Links
                        </span>
                      </div>

                      {/* Action Links (GitHub & Live Demo) */}
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-white font-mono text-xs font-bold shadow-xs hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
                          title="View Source on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0077B5] text-white font-mono text-xs font-bold shadow-xs hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
                            title="Open Live Application"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack Pills Laid on the Notebook Lines */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 mb-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/95 border border-amber-300/80 text-[11px] sm:text-xs font-mono font-bold text-slate-800 shadow-2xs hover:bg-white hover:-translate-y-0.5 transition-all cursor-default select-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Torn Edge for Yellow Memo Pad */}
                    <div className="w-full h-2.5 relative mt-1 -mb-1 overflow-hidden opacity-75">
                      <svg viewBox="0 0 500 10" preserveAspectRatio="none" className="w-full h-full fill-amber-300/40">
                        <path 
                          d="M 0 0 L 0 5 L 15 2 L 30 7 L 45 3 L 60 7 L 75 2 L 90 6 L 105 3 L 120 7 L 135 2 L 150 6 L 165 3 L 180 7 L 195 2 L 210 6 L 225 3 L 240 7 L 255 2 L 270 6 L 285 3 L 300 7 L 315 2 L 330 6 L 345 3 L 360 7 L 375 2 L 390 6 L 405 3 L 420 7 L 435 2 L 450 6 L 465 3 L 480 7 L 495 2 L 500 5 L 500 0 Z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
