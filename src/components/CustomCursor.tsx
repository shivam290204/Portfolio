import { useEffect, useRef } from "react";

declare const gsap: any;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait until GSAP CDN is loaded
    const initCursor = () => {
      if (typeof gsap === "undefined") {
        setTimeout(initCursor, 50);
        return;
      }
      
      const cursor = cursorRef.current;
      if (!cursor) return;

      const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });

      const onMouseMove = (e: MouseEvent) => {
        xTo(e.clientX - 10);
        yTo(e.clientY - 10);
      };

      const playHoverAnimation = (hovering: boolean) => {
        if (hovering) {
          gsap.to(cursor, { scale: 2.5, backgroundColor: "rgba(59,130,246,0.2)", borderColor: "rgba(59,130,246,0.3)", duration: 0.3 });
        } else {
          gsap.to(cursor, { scale: 1, backgroundColor: "transparent", borderColor: "hsl(217 91% 60%)", duration: 0.3 });
        }
      };

      // Use event delegation for dynamically added elements
      const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("a, button, input, textarea, [role='button']")) {
          playHoverAnimation(true);
        }
      };

      const onMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest("a, button, input, textarea, [role='button']")) {
          playHoverAnimation(false);
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseover", onMouseOver);
      window.addEventListener("mouseout", onMouseOut);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseover", onMouseOver);
        window.removeEventListener("mouseout", onMouseOut);
      };
    };
    
    initCursor();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{ transform: "translate(-100px, -100px)" }}
    />
  );
}
