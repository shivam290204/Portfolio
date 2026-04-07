import { Code2, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 px-4 sm:px-6 border-t border-white/5" data-scroll-section>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">



          <a
            href="#home"
            data-scroll-to
            className="p-2.5 rounded-xl glass border border-white/8 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all hover:scale-105"
            data-testid="footer-back-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
