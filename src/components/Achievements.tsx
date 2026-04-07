import { useEffect, useRef } from "react";
import { Code2, Trophy, Users, Star, Zap, BookOpen, Award, Target } from "lucide-react";

declare const gsap: any;
declare const ScrollTrigger: any;

const achievements = [
  {
    icon: Code2,
    title: "200+ DSA Problems",
    description: "Solved 200+ Data Structures & Algorithms problems in Java across LeetCode and competitive programming platforms, covering arrays, trees, graphs, DP, and more.",
    stat: "200+",
    statLabel: "Problems Solved",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    hoverBorder: "hover:border-blue-400/40",
    badgeColor: "bg-blue-400/15 text-blue-300",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    description: "Participated in the prestigious Smart India Hackathon (SIH), one of India's largest hackathon initiatives. Worked on innovative solutions to real government problem statements.",
    stat: "SIH",
    statLabel: "National Hackathon",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    hoverBorder: "hover:border-yellow-400/40",
    badgeColor: "bg-yellow-400/15 text-yellow-300",
  },
  {
    icon: BookOpen,
    title: "BIS Member",
    description: "Active member of the Bureau of Indian Standards (BIS) student chapter, contributing to standardization knowledge and participating in standards-related technical activities.",
    stat: "BIS",
    statLabel: "Member",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    hoverBorder: "hover:border-green-400/40",
    badgeColor: "bg-green-400/15 text-green-300",
  },
  {
    icon: Users,
    title: "Team-Based Projects",
    description: "Successfully delivered multiple team-based software projects, demonstrating strong collaborative skills, agile development practices, and effective communication in cross-functional settings.",
    stat: "3+",
    statLabel: "Collaborative Projects",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    hoverBorder: "hover:border-purple-400/40",
    badgeColor: "bg-purple-400/15 text-purple-300",
  },
  {
    icon: Zap,
    title: "AI Summer Training",
    description: "Completed AI Summer Training at CSRBOX & IBM SkillsBuild, earning certification in Agentic AI systems with hands-on experience in building intelligent automation solutions.",
    stat: "IBM",
    statLabel: "Certified",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    hoverBorder: "hover:border-cyan-400/40",
    badgeColor: "bg-cyan-400/15 text-cyan-300",
  },
  {
    icon: Target,
    title: "Full-Stack Projects",
    description: "Built multiple full-stack applications from ideation to deployment — covering real-time data systems, enterprise portals, and AI-integrated utility tools with measurable performance improvements.",
    stat: "3",
    statLabel: "Live Projects",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    hoverBorder: "hover:border-orange-400/40",
    badgeColor: "bg-orange-400/15 text-orange-300",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".achievement-fade", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="relative py-28 px-4 sm:px-6" data-scroll-section>
      <div className="max-w-6xl mx-auto">
        <div className="achievement-fade mb-16 text-center">
          <span className="text-primary text-sm font-mono tracking-widest uppercase">Achievements</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Milestones & <span className="gradient-text">Highlights</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Key accomplishments that reflect my dedication, curiosity, and drive to grow as a developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`achievement-fade glass rounded-2xl p-6 border ${item.border} ${item.hoverBorder} transition-all duration-300 group skill-card relative overflow-hidden`}
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`achievement-${i}`}
            >
              {/* Background glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${item.bg} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`} />

              <div className="relative z-10">
                {/* Icon + stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${item.bg} border ${item.border}`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${item.color}`}>{item.stat}</div>
                    <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>

                <h3 className={`font-bold text-base mb-2 ${item.color}`}>{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
