import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";


// Portfolio projects updated with the requested GitHub repositories.
const projects = [
  {
    title: "NoobSyte Learning Platform",
    description: "A production-grade MERN learning platform for beginner-friendly Java and DSA education, with interactive lesson paths, quiz tracking, and a scalable React/Express/Mongo architecture.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Vite"],
    github: "https://github.com/shivam290204/LearningPlatform",
    image: "/project1.png",
  },
  {
    title: "Government Business Support Portal",
    description: "A polished Next.js App Router portal that simulates government business support workflows with Clerk authentication, responsive Tailwind UI, and an H2-backed unified backend.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth", "Spring Boot"],
    github: "https://github.com/shivam290204/---government-website-clone-updated-version",
    demo: "https://government-website-clone-updated-ve.vercel.app/",
    image: "/project2.png",
  },
  {
    title: "CodeSync Collaborative IDE",
    description: "A real-time collaborative developer workspace with Monaco Editor, Yjs CRDT sync, live chat, and a Spring Boot WebSocket relay backend for seamless multi-user editing.",
    techStack: ["Next.js", "TypeScript", "Monaco Editor", "Yjs", "Spring Boot"],
    github: "https://github.com/shivam290204/codesync",
    image: "/project3.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 px-4 sm:px-6 mb-10">
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
                    className="bg-[#0f172a]/90 backdrop-blur-md border border-white/10 md:border-white/5 rounded-xl p-5 md:p-6 mb-6 shadow-xl hover:border-primary/20 transition-all w-full leading-relaxed relative z-30 mt-[-1rem] md:mt-0"
                  >
                    <p className="text-muted-foreground text-[15px] sm:text-base drop-shadow-sm">
                      {project.description}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-2.5 sm:gap-4 text-xs font-mono text-muted-foreground mb-8 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.techStack.map((tech) => (
                      <li key={tech} className="whitespace-nowrap px-2.5 py-1 rounded bg-white/[0.03] border border-white-[0.05] hover:text-primary transition-colors cursor-default">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap items-center gap-4 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      aria-label="GitHub Link"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:border-primary/40 hover:bg-primary/20 transition-all duration-200"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
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
