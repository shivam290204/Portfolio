import { useEffect, useRef } from "react";
import { Code2, Trophy, Users, Zap, BookOpen, Target } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    title: "200+ DSA Problems",
    description: "Solved 200+ Data Structures & Algorithms problems in Java across LeetCode and competitive programming platforms, covering arrays, trees, graphs, DP, and more.",
    stat: "200+",
    statLabel: "Problems Solved",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-300",
    badgeColor: "bg-blue-50 text-blue-600",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    description: "Participated in the prestigious Smart India Hackathon (SIH), one of India's largest hackathon initiatives. Worked on innovative solutions to real government problem statements.",
    stat: "SIH",
    statLabel: "National Hackathon",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    hoverBorder: "hover:border-amber-300",
    badgeColor: "bg-amber-50 text-amber-600",
  },
  {
    icon: BookOpen,
    title: "BIS Member",
    description: "Active member of the Bureau of Indian Standards (BIS) student chapter, contributing to standardization knowledge and participating in standards-related technical activities.",
    stat: "BIS",
    statLabel: "Member",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    hoverBorder: "hover:border-emerald-300",
    badgeColor: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Team-Based Projects",
    description: "Successfully delivered multiple team-based software projects, demonstrating strong collaborative skills, agile development practices, and effective communication in cross-functional settings.",
    stat: "3+",
    statLabel: "Collaborative Projects",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    hoverBorder: "hover:border-purple-300",
    badgeColor: "bg-purple-50 text-purple-600",
  },
  {
    icon: Zap,
    title: "AI Summer Training",
    description: "Completed AI Summer Training at CSRBOX & IBM SkillsBuild, earning certification in Agentic AI systems with hands-on experience in building intelligent automation solutions.",
    stat: "IBM",
    statLabel: "Certified",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    hoverBorder: "hover:border-cyan-300",
    badgeColor: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Target,
    title: "Full-Stack Projects",
    description: "Built multiple full-stack applications from ideation to deployment — covering real-time data systems, enterprise portals, and AI-integrated utility tools with measurable performance improvements.",
    stat: "3",
    statLabel: "Live Projects",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-300",
    badgeColor: "bg-orange-50 text-orange-600",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="achievements" ref={sectionRef} className="relative py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="achievement-fade mb-16 text-center">
          <span className="text-blue-600 text-sm font-mono tracking-widest uppercase font-semibold">Achievements</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900">
            Milestones & <span className="gradient-text">Highlights</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Key accomplishments that reflect my dedication, curiosity, and drive to grow as a developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`achievement-fade bg-white/80 backdrop-blur-md rounded-2xl p-6 border ${item.border} ${item.hoverBorder} shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden`}
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`achievement-${i}`}
            >
              <div className="relative z-10">
                {/* Icon + stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${item.bg} border ${item.border}`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${item.color}`}>{item.stat}</div>
                    <div className="text-xs font-medium text-slate-500">{item.statLabel}</div>
                  </div>
                </div>

                <h3 className={`font-bold text-base mb-2 text-slate-900`}>{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
