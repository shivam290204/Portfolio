import { useState, useEffect, useRef } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import MinecraftSteveSprite from "@/components/MinecraftSteveSprite";

export interface TimelineMilestone {
  id: string;
  section: "education" | "experience";
  type: "milestone" | "minor";
  pathPercent: number; // 0.0 to 1.0 along the continuous curve
  headline?: string;
  subheadline?: string;
  metadata?: string;
  blurb?: string;
  skills?: string[];
  photo?: {
    src: string;
    caption: string;
    rotationClass: string;
  };
  layoutSide?: "left" | "right"; // Desktop layout: "left" = Text Left & Polaroid Right; "right" = Polaroid Left & Text Right
}

// Config object array so user can easily add/change entries later without touching layout code
export const timelineData: TimelineMilestone[] = [
  // SECTION 1: EDUCATION
  {
    id: "edu-1",
    section: "education",
    type: "milestone",
    pathPercent: 0.12,
    headline: "Class 10 – Guru Tegh Bahadur Public School",
    metadata: "2020 · 70% CBSE",
    photo: {
      src: "/timeline-edu-1.jpg",
      caption: "Class 10 · High School Foundation",
      rotationClass: "-rotate-2"
    },
    layoutSide: "left"
  },
  {
    id: "edu-minor-1",
    section: "education",
    type: "minor",
    pathPercent: 0.23
  },
  {
    id: "edu-2",
    section: "education",
    type: "milestone",
    pathPercent: 0.35,
    headline: "Class 12 – Guru Tegh Bahadur Public School",
    metadata: "2022 · 76% CBSE",
    photo: {
      src: "/timeline-edu-2.jpg",
      caption: "Class 12 · Senior Secondary",
      rotationClass: "rotate-2"
    },
    layoutSide: "right"
  },
  {
    id: "edu-minor-2",
    section: "education",
    type: "minor",
    pathPercent: 0.47
  },
  {
    id: "edu-3",
    section: "education",
    type: "milestone",
    pathPercent: 0.58,
    headline: "B.Tech CSE – HMR Institute of Technology and Management",
    subheadline: "(affiliated to Guru Gobind Singh Indraprastha University)",
    metadata: "2023–2027 · 4th Semester · CGPA 8.67",
    photo: {
      src: "/photo.png",
      caption: "B.Tech CSE · GGSIPU Campus Journey",
      rotationClass: "-rotate-1"
    },
    layoutSide: "left"
  },
  {
    id: "edu-minor-3",
    section: "education",
    type: "minor",
    pathPercent: 0.69
  },

  // SECTION 2: WORK EXPERIENCE
  {
    id: "exp-1",
    section: "experience",
    type: "milestone",
    pathPercent: 0.81,
    headline: "AI Summer Training Intern – CSRBOX & IBM SkillsBuild",
    metadata: "July 2025 – Aug 2025 · Remote",
    blurb: "Trained on Agentic AI systems and autonomous agent frameworks. Explored IBM SkillsBuild AI curriculum covering ML and deep learning, built end-to-end AI-powered mini-projects demonstrating agentic behavior, and mastered prompt engineering, LLM integration, and AI ethics.",
    skills: ["Agentic AI", "Machine Learning", "Python", "LLMs"],
    photo: {
      src: "/ibm-skillsbuild.png",
      caption: "IBM SkillsBuild · AI Agentic Systems",
      rotationClass: "rotate-2"
    },
    layoutSide: "right"
  },
  {
    id: "exp-minor-1",
    section: "experience",
    type: "minor",
    pathPercent: 0.93
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [pathPoints, setPathPoints] = useState<Record<string, { x: number; y: number }>>({});
  const [stevePos, setStevePos] = useState<{ x: number; y: number; flip: boolean }>({
    x: 500,
    y: 0,
    flip: false
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const viewBoxWidth = isMobile ? 400 : 1000;
  const viewBoxHeight = isMobile ? 3200 : 2700;

  // Check window size for responsive curve choice
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute exact (x, y) for each milestone once path mounts/changes
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLen = path.getTotalLength();
    if (totalLen === 0) return;

    const newPoints: Record<string, { x: number; y: number }> = {};
    timelineData.forEach((item) => {
      const pt = path.getPointAtLength(item.pathPercent * totalLen);
      newPoints[item.id] = { x: pt.x, y: pt.y };
    });
    setPathPoints(newPoints);
  }, [isMobile]);

  // Scroll-linked animation for Minecraft Steve sprite
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Scroll progress 0.0 at container top reaching upper mid viewport, 1.0 at bottom
      const startTrigger = windowH * 0.65;
      const endTrigger = -rect.height + windowH * 0.35;
      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const progress = Math.max(0, Math.min(1, rawProgress));

      const path = pathRef.current;
      const totalLen = path.getTotalLength();
      if (totalLen === 0) return;

      const currentPt = path.getPointAtLength(progress * totalLen);
      const nextPt = path.getPointAtLength(Math.min(totalLen, (progress + 0.006) * totalLen));
      const dx = nextPt.x - currentPt.x;

      setStevePos({
        x: currentPt.x,
        y: currentPt.y,
        flip: dx < -0.3
      });
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // SVG curved path definition:
  // Desktop: gentle snaking curve left & right down the center
  // Mobile: simpler vertical snaking path along the left column (X = 60 to 90)
  const desktopPath = "M 500 0 C 320 200, 320 450, 420 580 C 520 710, 680 820, 640 1020 C 600 1220, 320 1350, 420 1580 C 520 1810, 680 1950, 620 2180 C 560 2410, 380 2550, 500 2700";
  const mobilePath = "M 65 0 C 45 300, 95 600, 65 900 C 35 1200, 95 1500, 65 1800 C 35 2100, 95 2400, 65 2700 C 45 2950, 75 3100, 65 3200";
  const currentPathD = isMobile ? mobilePath : desktopPath;

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="relative pt-8 pb-28 px-4 sm:px-6 bg-transparent text-slate-900 overflow-hidden select-none font-sans"
    >

      {/* SECTION 1 HEADER: EDUCATION */}
      <div id="education" className="max-w-6xl mx-auto text-center relative z-20 mb-12 sm:mb-20 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300 shadow-xs text-slate-700 text-xs font-mono tracking-widest uppercase font-bold mb-3">
          <GraduationCap className="w-4 h-4 text-amber-600" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-900 font-normal tracking-tight">
          Education & Experience
        </h2>
      </div>

      {/* TIMELINE CURVE & CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto relative min-h-[3200px] md:min-h-[2700px] z-10">
        {/* SVG Bezier Curve */}
        <svg
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Subtle background shadow line */}
          <path
            d={currentPathD}
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={isMobile ? 3 : 4}
            strokeLinecap="round"
          />
          {/* Main snaking timeline path */}
          <path
            ref={pathRef}
            d={currentPathD}
            fill="none"
            stroke="#334155"
            strokeWidth={isMobile ? 2 : 2.5}
            strokeLinecap="round"
          />
        </svg>

        {/* MINECRAFT STEVE SPRITE (Scroll-Linked Articulated Walking Animation) */}
        <div
          className="absolute z-40 pointer-events-none transition-all duration-100 ease-out flex flex-col items-center"
          style={{
            left: `${(stevePos.x / viewBoxWidth) * 100}%`,
            top: `${(stevePos.y / viewBoxHeight) * 100}%`,
            transform: "translate(-50%, -85%)"
          }}
        >
          <MinecraftSteveSprite
            progress={scrollProgress}
            flip={stevePos.flip}
            className="w-12 h-16 sm:w-14 sm:h-20"
          />
          {/* Pixel shadow right beneath feet */}
          <div className="w-6 h-1.5 bg-slate-900/30 rounded-full blur-[1px] -mt-1.5" />
        </div>

        {/* WAYPOINTS & CONTENT BLOCKS */}
        {timelineData.map((entry) => {
          const pt = pathPoints[entry.id] || { x: viewBoxWidth * 0.5, y: entry.pathPercent * viewBoxHeight };
          const leftPercent = (pt.x / viewBoxWidth) * 100;
          const topPercent = (pt.y / viewBoxHeight) * 100;

          // Minor Waypoints (Hollow gray dots for path rhythm)
          if (entry.type === "minor") {
            return (
              <div
                key={entry.id}
                className="absolute z-20 pointer-events-none w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FAFAFA] border-2 border-slate-400 shadow-2xs -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              />
            );
          }

          // Milestone Waypoints (Filled gold dots + Polaroid/Text blocks)
          const isLeftSide = entry.layoutSide === "left";

          return (
            <div key={entry.id} className="absolute inset-x-0" style={{ top: `${topPercent}%` }}>
              {/* Yellow/Gold Milestone Dot on Curve */}
              <div
                className="absolute z-30 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#eab308] border-2 border-slate-900 shadow-[0_0_12px_rgba(234,179,8,0.6)] -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform cursor-pointer"
                style={{ left: `${leftPercent}%` }}
                title={entry.headline}
              />

              {/* DESKTOP LAYOUT (Alternating Left/Right) */}
              <div className="hidden md:block">
                {isLeftSide ? (
                  <>
                    {/* Serif Text Block on LEFT */}
                    <div
                      className="absolute right-[calc(100%-leftPercent%+3rem)] top-0 -translate-y-1/2 w-[42%] text-right pr-4"
                      style={{ right: `${100 - leftPercent + 3.5}%` }}
                    >
                      <h3 className="font-serif text-2xl lg:text-3xl text-slate-900 font-normal tracking-tight leading-snug">
                        {entry.headline}
                      </h3>
                      {entry.subheadline && (
                        <p className="font-serif italic text-sm lg:text-base text-slate-700 mt-1">
                          {entry.subheadline}
                        </p>
                      )}
                      <span className="block font-mono text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mt-2.5">
                        {entry.metadata}
                      </span>
                      {entry.blurb && (
                        <p className="text-sm text-slate-600 font-light mt-3 leading-relaxed ml-auto max-w-md">
                          {entry.blurb}
                        </p>
                      )}
                      {entry.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-3.5 justify-end">
                          {entry.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase font-semibold bg-slate-900 text-white rounded-full shadow-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Polaroid Photo on RIGHT */}
                    {entry.photo && (
                      <div
                        className="absolute top-0 -translate-y-1/2 z-20"
                        style={{ left: `${leftPercent + 3.5}%` }}
                      >
                        <div
                          className={`bg-white p-3 pb-8 lg:p-4 lg:pb-10 shadow-[0_16px_35px_rgba(0,0,0,0.15)] rounded-2xs border border-slate-300/80 w-64 lg:w-72 transform ${entry.photo.rotationClass} hover:scale-105 hover:z-30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.22)] transition-all duration-500 cursor-pointer group`}
                        >
                          <div className="overflow-hidden rounded-2xs bg-slate-100 aspect-[4/3] w-full flex items-center justify-center">
                            <img
                              src={entry.photo.src}
                              alt={entry.headline}
                              className={`w-full h-full ${entry.photo.src.includes("ibm") ? "object-contain p-4 bg-white" : "object-cover"} filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700`}
                            />
                          </div>
                          <p className="text-center font-mono text-[11px] lg:text-xs text-slate-500 uppercase tracking-widest mt-3 lg:mt-4 font-medium truncate px-1">
                            {entry.photo.caption}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* Polaroid Photo on LEFT */}
                    {entry.photo && (
                      <div
                        className="absolute top-0 -translate-y-1/2 z-20 flex justify-end"
                        style={{ right: `${100 - leftPercent + 3.5}%` }}
                      >
                        <div
                          className={`bg-white p-3 pb-8 lg:p-4 lg:pb-10 shadow-[0_16px_35px_rgba(0,0,0,0.15)] rounded-2xs border border-slate-300/80 w-64 lg:w-72 transform ${entry.photo.rotationClass} hover:scale-105 hover:z-30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.22)] transition-all duration-500 cursor-pointer group`}
                        >
                          <div className="overflow-hidden rounded-2xs bg-slate-100 aspect-[4/3] w-full flex items-center justify-center">
                            <img
                              src={entry.photo.src}
                              alt={entry.headline}
                              className={`w-full h-full ${entry.photo.src.includes("ibm") ? "object-contain p-4 bg-white" : "object-cover"} filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700`}
                            />
                          </div>
                          <p className="text-center font-mono text-[11px] lg:text-xs text-slate-500 uppercase tracking-widest mt-3 lg:mt-4 font-medium truncate px-1">
                            {entry.photo.caption}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Serif Text Block on RIGHT */}
                    <div
                      className="absolute top-0 -translate-y-1/2 w-[42%] text-left pl-4"
                      style={{ left: `${leftPercent + 3.5}%` }}
                    >
                      <h3 className="font-serif text-2xl lg:text-3xl text-slate-900 font-normal tracking-tight leading-snug">
                        {entry.headline}
                      </h3>
                      {entry.subheadline && (
                        <p className="font-serif italic text-sm lg:text-base text-slate-700 mt-1">
                          {entry.subheadline}
                        </p>
                      )}
                      <span className="block font-mono text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mt-2.5">
                        {entry.metadata}
                      </span>
                      {entry.blurb && (
                        <p className="text-sm text-slate-600 font-light mt-3 leading-relaxed mr-auto max-w-md">
                          {entry.blurb}
                        </p>
                      )}
                      {entry.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-3.5 justify-start">
                          {entry.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase font-semibold bg-slate-900 text-white rounded-full shadow-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* MOBILE LAYOUT (Single Column to right of curve at X=65px) */}
              <div className="block md:hidden pl-24 pr-4 -translate-y-1/2">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-normal tracking-tight leading-snug">
                    {entry.headline}
                  </h3>
                  {entry.subheadline && (
                    <p className="font-serif italic text-xs sm:text-sm text-slate-700">
                      {entry.subheadline}
                    </p>
                  )}
                  <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
                    {entry.metadata}
                  </span>
                  {entry.blurb && (
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {entry.blurb}
                    </p>
                  )}
                  {entry.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {entry.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase font-semibold bg-slate-900 text-white rounded-full shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Polaroid below text on mobile */}
                  {entry.photo && (
                    <div className="pt-2">
                      <div
                        className={`bg-white p-2.5 pb-6 sm:p-3 sm:pb-8 shadow-lg rounded-2xs border border-slate-300/80 w-56 sm:w-64 transform ${entry.photo.rotationClass}`}
                      >
                        <div className="overflow-hidden rounded-2xs bg-slate-100 aspect-[4/3] w-full flex items-center justify-center">
                          <img
                            src={entry.photo.src}
                            alt={entry.headline}
                            className={`w-full h-full ${entry.photo.src.includes("ibm") ? "object-contain p-4 bg-white" : "object-cover"} filter contrast-[1.03]`}
                          />
                        </div>
                        <p className="text-center font-mono text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-widest mt-2.5 font-medium truncate">
                          {entry.photo.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

