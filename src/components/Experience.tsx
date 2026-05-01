import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from "lucide-react";


const experiences = [
  {
    role: "AI Summer Training Intern",
    company: "CSRBOX & IBM SkillsBuild",
    period: "July – August 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Completed an intensive AI Summer Training program focused on Agentic AI systems. Worked with IBM SkillsBuild curriculum covering advanced AI concepts, machine learning pipelines, and intelligent agent architectures.",
    highlights: [
      "Trained on Agentic AI systems and autonomous agent frameworks",
      "Explored IBM SkillsBuild AI curriculum covering ML and deep learning",
      "Built end-to-end AI-powered mini-projects demonstrating agentic behavior",
      "Learned prompt engineering, LLM integration, and AI ethics",
    ],
    skills: ["Agentic AI", "Machine Learning", "Python", "LLMs", "IBM Watson"],
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    iconColor: "text-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    logo: "🤖",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 px-4 sm:px-6 bg-white/1">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="experience-fade mb-16 text-center">
          <span className="text-primary text-sm font-mono tracking-widest uppercase">Experience</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line hidden sm:block" style={{ transform: "translateX(-50%)" }} />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="experience-fade relative mb-8 sm:mb-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

              <div className="sm:w-1/2 sm:ml-auto sm:pl-12 md:pl-12">
                <div
                  className={`glass rounded-2xl p-6 sm:p-8 border ${exp.borderColor} ${exp.bgColor} hover:border-opacity-80 transition-all duration-300 group project-card`}
                  data-testid={`experience-card-${i}`}
                >
                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${exp.bgColor} border ${exp.borderColor} flex items-center justify-center text-2xl shrink-0`}>
                      {exp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${exp.badgeBg}`}>
                          {exp.type}
                        </span>
                        <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium bg-green-400/10 text-green-300 border-green-400/20`}>
                          Completed
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <div className={`text-base font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <ChevronRight className={`w-4 h-4 mt-0.5 shrink-0 ${exp.iconColor}`} />
                        <span className="text-muted-foreground">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills used */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education card alongside */}
          <div className="experience-fade mt-8 sm:mt-6">
            <div className="sm:w-1/2 sm:pr-12">
              <div className="glass rounded-2xl p-6 sm:p-8 border border-accent/20 bg-accent/5 hover:border-accent/40 transition-all duration-300 project-card" data-testid="education-card">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl shrink-0">
                    🎓
                  </div>
                  <div>
                    <span className="text-xs px-2.5 py-1 rounded-lg border bg-accent/10 text-purple-300 border-accent/20 font-medium">
                      Education
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">B.Tech CSE</h3>
                    <div className="text-base font-semibold gradient-text-warm">
                      HMR Institute of Technology & Management
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>CGPA: 8.5+</span>
                    <br />
                    <span>(2023 – 2027)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Delhi, India (GGSIPU)</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Currently pursuing B.Tech in Computer Science & Engineering with focus on data structures,
                  algorithms, operating systems, and computer networks. Actively participating in college
                  technical events and national hackathons.
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOP"].map((subj) => (
                    <span key={subj} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-muted-foreground">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
