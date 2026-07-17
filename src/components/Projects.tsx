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
                    className="block relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-lg border border-slate-200/80 transition-all duration-300 group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]"
                  >
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all duration-300 z-20" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
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
                  <p className="text-blue-600 font-mono text-sm tracking-widest font-semibold mb-2 mt-4 md:mt-0">
                    Featured Project
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 hover:text-blue-600 transition-colors cursor-pointer">
                    {project.title}
                  </h3>

                  {/* Overlapping description card */}
                  <div 
                    className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-xl p-5 md:p-6 mb-6 shadow-lg hover:border-blue-300 transition-all w-full leading-relaxed relative z-30 mt-[-1rem] md:mt-0"
                  >
                    <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-2 sm:gap-3 text-xs font-mono text-slate-700 mb-8 ${
                      isEven ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.techStack.map((tech) => (
                      <li key={tech} className="whitespace-nowrap px-3 py-1 rounded-md bg-slate-100 border border-slate-200/80 font-medium hover:text-blue-600 transition-colors cursor-default">
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
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-slate-700 font-medium shadow-2xs hover:border-blue-300 hover:bg-white hover:text-blue-600 transition-all duration-200"
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
                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-blue-600 font-medium hover:border-blue-300 hover:bg-blue-100 transition-all duration-200"
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
