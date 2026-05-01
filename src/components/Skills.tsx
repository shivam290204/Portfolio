import { useEffect, useRef } from "react";
import { FaJava, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss, SiExpress, SiSpringboot, SiMysql, SiPostgresql, SiVercel, SiC, SiTailwindcss, SiNextdotjs, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "Java", icon: FaJava, color: "hover:text-[#f89820] hover:drop-shadow-[0_0_15px_rgba(248,152,32,0.8)]" },
  { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E] hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.8)]" },
  { name: "React", icon: FaReact, color: "hover:text-[#61DAFB] hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.8)]" },
  { name: "HTML5", icon: SiHtml5, color: "hover:text-[#E34F26] hover:drop-shadow-[0_0_15px_rgba(227,79,38,0.8)]" },
  { name: "CSS3", icon: SiCss, color: "hover:text-[#1572B6] hover:drop-shadow-[0_0_15px_rgba(21,114,182,0.8)]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-[#06B6D4] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" },
  { name: "Node.js", icon: FaNodeJs, color: "hover:text-[#339933] hover:drop-shadow-[0_0_15px_rgba(51,153,51,0.8)]" },
  { name: "Express.js", icon: SiExpress, color: "hover:text-foreground hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" },
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-foreground hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" },
  { name: "Spring Boot", icon: SiSpringboot, color: "hover:text-[#6DB33F] hover:drop-shadow-[0_0_15px_rgba(109,179,63,0.8)]" },
  { name: "Python", icon: FaPython, color: "hover:text-[#3776AB] hover:drop-shadow-[0_0_15px_rgba(55,118,171,0.8)]" },
  { name: "C", icon: SiC, color: "hover:text-[#A8B9CC] hover:drop-shadow-[0_0_15px_rgba(168,185,204,0.8)]" },
  { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1] hover:drop-shadow-[0_0_15px_rgba(68,121,161,0.8)]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1] hover:drop-shadow-[0_0_15px_rgba(65,105,225,0.8)]" },
  { name: "Git", icon: FaGitAlt, color: "hover:text-[#F05032] hover:drop-shadow-[0_0_15px_rgba(240,80,50,0.8)]" },
  { name: "GitHub", icon: FaGithub, color: "hover:text-foreground hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" },
  { name: "Docker", icon: FaDocker, color: "hover:text-[#2496ED] hover:drop-shadow-[0_0_15px_rgba(36,150,237,0.8)]" },
  { name: "VS Code", icon: VscVscode, color: "hover:text-[#007ACC] hover:drop-shadow-[0_0_15px_rgba(0,122,204,0.8)]" },
  { name: "Vercel", icon: SiVercel, color: "hover:text-foreground hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" },
  { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "hover:text-foreground hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" }
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 px-4 sm:px-6 bg-white/1 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        {/* Decorative background blurs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="skill-fade mb-20 text-center">
          <span className="text-primary text-sm font-mono tracking-widest uppercase">Tech Stack</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The core tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Masonry-like Floating Hexagons Grid */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-fade group relative"
              style={{
                animation: `float ${(Math.random() * 2) + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div 
                className={`
                  relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 
                  rounded-2xl glass-dark border border-white/5 
                  transition-all duration-300 ease-out cursor-pointer
                  hover:scale-110 hover:-translate-y-2 hover:bg-white/5 hover:border-white/20
                  ${skill.color}
                `}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground/50 transition-all duration-300 group-hover:text-inherit" />
              </div>

              {/* Minimal Tooltip on Hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-background/90 border border-white/10 backdrop-blur-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20 whitespace-nowrap">
                <span className="text-xs font-medium text-foreground">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
