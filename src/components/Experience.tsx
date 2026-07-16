import { useRef } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Cpu, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 px-4 sm:px-6 bg-transparent overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="experience-fade mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono tracking-wider uppercase font-bold mb-4 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Education Tree</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="mt-4 w-20 h-1 rounded-full bg-blue-600 mx-auto" />
        </div>

        {/* Tree Timeline Container */}
        <div className="relative">
          {/* Vertical Tree Spine Line (Pure Slate/Black) */}
          <div 
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-slate-900 rounded-full hidden sm:block shadow-[0_0_8px_rgba(15,23,42,0.15)]" 
            style={{ transform: "translateX(-50%)" }} 
          />

          {/* NODE 1: Work Experience (Right branch on desktop, Left branch on mobile) */}
          <div className="experience-fade relative mb-14 sm:mb-20">
            {/* Glowing Tree Node Dot */}
            <div className="hidden sm:flex absolute left-1/2 top-10 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white shadow-[0_0_15px_rgba(37,99,235,0.4)] z-20 items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            </div>

            {/* Card Content (Right Side) */}
            <div className="sm:w-1/2 sm:ml-auto sm:pl-12 md:pl-16">
              <div 
                className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-600 transition-all duration-300"
                data-testid="experience-card-0"
              >
                {/* Header Row with 2-Color Emblem Box */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <div className="relative">
                      <Cpu className="w-7 h-7 text-blue-600" />
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 absolute -top-1 -right-1" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs px-2.5 py-1 rounded-lg font-bold bg-blue-50 text-blue-600 border border-blue-200">
                        Internship
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-lg font-bold bg-slate-900 text-white border border-slate-900 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        Completed
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      AI Summer Training Intern
                    </h3>
                    <div className="text-base font-bold text-blue-600">
                      CSRBOX & IBM SkillsBuild
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap gap-4 mb-5 text-xs font-semibold text-slate-600 bg-slate-50/90 p-3 rounded-xl border border-slate-200/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>July – August 2025</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Remote</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-5 font-normal">
                  Completed an intensive AI Summer Training program focused on <strong className="text-slate-900 font-semibold">Agentic AI systems</strong>. Worked with IBM SkillsBuild curriculum covering advanced AI concepts, machine learning pipelines, and intelligent agent architectures.
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {[
                    "Trained on Agentic AI systems and autonomous agent frameworks",
                    "Explored IBM SkillsBuild AI curriculum covering ML and deep learning",
                    "Built end-to-end AI-powered mini-projects demonstrating agentic behavior",
                    "Learned prompt engineering, LLM integration, and AI ethics"
                  ].map((h, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-sm">
                      <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/60">
                        <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-slate-800 font-medium leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skills chips */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {["Agentic AI", "Machine Learning", "Python", "LLMs", "IBM Watson"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NODE 2: Education (Left branch on desktop) */}
          <div className="experience-fade relative">
            {/* Glowing Tree Node Dot */}
            <div className="hidden sm:flex absolute left-1/2 top-10 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-600 bg-white shadow-[0_0_15px_rgba(37,99,235,0.4)] z-20 items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            </div>

            {/* Card Content (Left Side on Desktop) */}
            <div className="sm:w-1/2 sm:pr-12 md:pr-16">
              <div 
                className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-600 transition-all duration-300" 
                data-testid="education-card"
              >
                {/* Header Row with 2-Color Academic Emblem */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs px-2.5 py-1 rounded-lg font-bold bg-blue-50 text-blue-600 border border-blue-200">
                        Education
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-lg font-bold bg-slate-900 text-white border border-slate-900 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-blue-400" />
                        CGPA: 8.67
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      B.Tech in CSE
                    </h3>
                    <div className="text-base font-bold text-blue-600">
                      HMR Institute of Technology & Management
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap gap-4 mb-5 text-xs font-semibold text-slate-600 bg-slate-50/90 p-3 rounded-xl border border-slate-200/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>2023 - 2027</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Delhi, India (GGSIPU)</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-5 font-normal">
                  Currently pursuing B.Tech in Computer Science & Engineering with strong focus on core system fundamentals, data structures, algorithms, operating systems, and full-stack web applications.
                </p>

                {/* Subject chips */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks", "OOP"].map((subj) => (
                      <span key={subj} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
