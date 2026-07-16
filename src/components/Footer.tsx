import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 px-4 sm:px-6 border-t border-slate-200/80 bg-white/60 backdrop-blur-md" data-scroll-section>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:grid sm:grid-cols-3 items-center gap-4">
          <div className="hidden sm:block" /> {/* empty spacer to balance the button */}

          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 font-medium text-center">
            <span>Created and designed by Shivam Tiwari <br /> All rights reserved © </span>
          </div>

          <div className="flex justify-center sm:justify-end">
            <a
              href="#home"
              data-scroll-to
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all hover:scale-105 shadow-2xs hover:shadow-sm"
              data-testid="footer-back-to-top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
