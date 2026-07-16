import { useRef, useEffect } from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 px-4 sm:px-6">

      <style>{`
        .contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(.4,0,.2,1);
          text-decoration: none;
        }
        .contact-card:hover {
          background: #ffffff;
          border-color: rgba(59,130,246,0.4);
          box-shadow: 0 12px 35px rgba(59,130,246,0.12);
          transform: translateY(-4px);
        }
      `}</style>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="contact-fade mb-16 text-center">
          <span className="text-blue-600 text-sm font-mono tracking-widest uppercase font-semibold">Get In Touch</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="mt-5 text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind, or just want to say hello? Choose how you'd like to connect.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Email Button */}
          <a
            href="mailto:shivam290204tiwari@gmail.com"
            className="contact-fade group contact-card rounded-2xl p-8 flex flex-col items-center justify-center gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
              <p className="text-slate-500 text-sm">Directly to my inbox</p>
            </div>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/shivam290204"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-fade group contact-card rounded-2xl p-8 flex flex-col items-center justify-center gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-slate-200 group-hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 text-lg mb-1">GitHub</h3>
              <p className="text-slate-500 text-sm">Check out my code</p>
            </div>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/shivam-tiwari-383761292"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-fade group contact-card rounded-2xl p-8 flex flex-col items-center justify-center gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 text-lg mb-1">LinkedIn</h3>
              <p className="text-slate-500 text-sm">Let's connect</p>
            </div>
          </a>

          {/* Twitter Button */}
          <a
            href="https://x.com/Shivam0_0Tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-fade group contact-card rounded-2xl p-8 flex flex-col items-center justify-center gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-slate-200 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 text-lg mb-1">Twitter (X)</h3>
              <p className="text-slate-500 text-sm">Read my thoughts</p>
            </div>
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://drive.google.com/file/d/10y1-Dq8POUWFWd2GA108ZjvS3qmqgdzl/view"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-fade group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/90 border border-slate-200 hover:bg-white hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            <span className="relative z-10 font-bold text-slate-800 text-lg uppercase tracking-[0.2em] ml-1">Resume</span>
            <svg className="relative z-10 w-5 h-5 text-slate-700 group-hover:text-blue-600 group-hover:translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
