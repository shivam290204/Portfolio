import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

declare const gsap: any;
declare const ScrollTrigger: any;

// Using the exact content as requested, but adding the newly generated mockup images.
const projects = [
  {
    title: "Smart FloodWatch",
    description: "Real-time flood monitoring system with interactive geospatial visualization using Leaflet API. Aggregates data from multiple sources to provide live flood risk assessments and alerts, improving emergency response efficiency.",
    techStack: ["React.js", "Node.js", "Leaflet API", "Express.js", "REST APIs"],
    github: "https://github.com/shivam290204/smart_floodwatch",
    link: "https://smart-floodwatch-git-main-shivam-1494s-projects.vercel.app/",
    image: "/project1.png",
  },
  {
    title: "Business Support Portal",
    description: "Responsive enterprise platform with clean modular architecture supporting multiple business workflows. Optimized component lifecycle management to minimize unnecessary re-renders and boost performance.",
    techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "ES6+"],
    github: "https://github.com/shivam290204/---government-website-clone-updated-version",
    link: "https://government-website-clone-updated-ve.vercel.app/",
    image: "/project2.png",
  },
  {
    title: "Research Assistant",
    description: "Full-stack AI-powered research assistant enabling real-time text summarization, paraphrasing, and analysis. Integrates Gemini API with a Spring Boot backend to generate intelligent responses, alongside a Chrome Extension for seamless user interaction and instant content processing directly from web pages.",
    techStack: ["Java", "Spring Boot", "Chrome Extension", "Gemini API", "REST APIs"],
    github: "https://github.com/shivam290204/research-assistant",
    image: "/project3.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".project-fade", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 px-4 sm:px-6 mb-10" data-scroll-section>
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
        <div className="project-fade mb-24 md:mb-32 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center md:justify-start justify-center gap-4">
            <span className="text-primary font-mono text-xl sm:text-2xl font-normal">02.</span>
            Some Things I've Built
            <div className="hidden md:block h-[1px] bg-white/10 w-48 ml-2 mt-1" />
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
                {/* Image Section */}
                <div 
                  className={`col-span-1 md:col-span-7 relative z-10 ${
                    isEven ? "md:col-start-1" : "md:col-start-6"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]"
                  >
                    {/* Dark/color overlay mimicking popular dev portfolio aesthetics */}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-20 mix-blend-multiply" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* Content Section */}
                <div
                  className={`col-span-1 md:col-span-6 relative z-20 flex flex-col ${
                    isEven
                      ? "md:col-start-7 md:items-end text-left md:text-right"
                      : "md:col-start-1 md:items-start text-left"
                  }`}
                >
                  <p className="text-primary font-mono text-sm tracking-widest mb-2 mt-4 md:mt-0">
                    Featured Project
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>

                  {/* Overlapping description card */}
                  <div 
                    className="md:bg-[#0f172a]/95 backdrop-blur-sm md:border border-white/5 rounded-xl md:p-6 mb-6 shadow-xl hover:border-primary/20 transition-all w-full leading-relaxed"
                  >
                    <p className="text-muted-foreground text-[15px] sm:text-base drop-shadow-sm">
                      {project.description}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-4 text-xs font-mono text-muted-foreground mb-8 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.techStack.map((tech) => (
                      <li key={tech} className="whitespace-nowrap hover:text-primary transition-colors cursor-default">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex items-center gap-5 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                      aria-label="GitHub Link"
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 "
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
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
