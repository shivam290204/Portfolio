import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about", type: "red" },
  { label: "Skills", href: "#skills", type: "white" },
  { label: "Projects", href: "#projects", type: "white" },
  { label: "Experience", href: "#experience", type: "amber" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    if (href === "#home" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] transition-all duration-300 pointer-events-auto">
      {/* 3D Embossed Dock Container matching input_file_0.png exactly */}
      <nav className="flex items-center gap-2 sm:gap-2.5 py-3 px-3 sm:py-3.5 sm:px-4 rounded-[28px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border border-slate-300/80 shadow-[0_14px_35px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-3px_5px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-x-auto no-scrollbar">
        
        {/* HOME Keycap - White with glowing live green dot */}
        <button
          onClick={() => handleNavClick("#home")}
          data-testid="nav-home"
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_0_#cbd5e1,0_5px_10px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white active:translate-y-[2px] active:shadow-[0_2px_0_#cbd5e1,0_3px_5px_rgba(0,0,0,0.1)] transition-all shrink-0 flex items-center gap-1.5 justify-center select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse shrink-0" />
          HOME
        </button>

        {/* Middle Keycaps (About, Skills, Projects, Experience) */}
        {navItems.map((item) => {
          const isAmber = item.type === "amber";
          const isRed = item.type === "red";
          const isActive = activeSection === item.href.slice(1);

          return (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              data-testid={`nav-item-${item.label.toLowerCase()}`}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shrink-0 flex items-center justify-center select-none ${
                isRed
                  ? "bg-gradient-to-b from-[#ff5252] to-[#d32f2f] text-white shadow-[0_4px_0_#991b1b,0_5px_10px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:brightness-105 active:translate-y-[2px] active:shadow-[0_2px_0_#991b1b,0_3px_5px_rgba(0,0,0,0.2)]"
                  : isAmber
                  ? "bg-gradient-to-b from-[#ffca28] to-[#f57c00] text-white shadow-[0_4px_0_#b45309,0_5px_10px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:brightness-105 active:translate-y-[2px] active:shadow-[0_2px_0_#b45309,0_3px_5px_rgba(0,0,0,0.15)]"
                  : isActive
                  ? "bg-gradient-to-b from-slate-100 to-slate-200 text-blue-600 shadow-[0_2px_0_#cbd5e1,inset_0_2px_4px_rgba(0,0,0,0.1)] translate-y-[2px]"
                  : "bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 shadow-[0_4px_0_#cbd5e1,0_5px_10px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white active:translate-y-[2px] active:shadow-[0_2px_0_#cbd5e1,0_3px_5px_rgba(0,0,0,0.1)]"
              }`}
            >
              {item.label}
            </button>
          );
        })}

        {/* CONTACT Keycap - Blue with return arrow ↵ */}
        <button
          onClick={() => handleNavClick("#contact")}
          data-testid="nav-contact"
          className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-xl bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_0_#1e40af,0_5px_10px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:brightness-105 active:translate-y-[2px] active:shadow-[0_2px_0_#1e40af,0_3px_5px_rgba(0,0,0,0.2)] transition-all shrink-0 flex items-center gap-1.5 justify-center select-none"
        >
          <span>CONTACT</span>
          <span className="text-base leading-none">↵</span>
        </button>
      </nav>
    </div>
  );
}
