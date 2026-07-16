import { useMemo, useState, useEffect } from "react";

const BLOCK_COUNT = 45;

export default function ThreeBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingBlocks = useMemo(() => {
    return Array.from({ length: BLOCK_COUNT }).map((_, i) => ({
      id: i,
      // Small block sizes aligning with typical grid units (16px, 24px, 32px, 48px)
      size: i % 4 === 0 ? 24 : i % 4 === 1 ? 32 : i % 4 === 2 ? 16 : 48,
      left: Math.floor(Math.random() * 96),
      top: Math.floor(Math.random() * 96),
      opacity: Math.random() * 0.35 + 0.15,
      duration: Math.random() * 20 + 12,
      delay: Math.random() * 8,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAFA]">
      {/* Base fine CSS grid for guaranteed small block structure */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main image background (block type grid image provided by user, tiled for small block size) */}
      <div
        className="absolute -inset-10 transition-transform duration-300 ease-out opacity-90"
        style={{
          backgroundImage: `url('/block-grid-bg.png')`,
          backgroundSize: "320px auto", // Keeps the image blocks small and crisp
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
          transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)`,
        }}
      />

      {/* Primary subtle ambient glow — top right */}
      <div
        className="absolute rounded-full blur-[140px]"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.07), transparent 70%)",
          top: "-10%",
          right: "-5%",
          animation: "blobMove1 14s ease-in-out infinite alternate",
        }}
      />

      {/* Secondary glow — bottom left */}
      <div
        className="absolute rounded-full blur-[140px]"
        style={{
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%)",
          bottom: "-5%",
          left: "-5%",
          animation: "blobMove2 18s ease-in-out infinite alternate",
        }}
      />

      {/* Floating interactive small technical square blocks */}
      {floatingBlocks.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-xs border border-slate-300/60 bg-slate-200/50 backdrop-blur-[1px] transition-all duration-300"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            top: `${b.top}%`,
            opacity: b.opacity,
            animation: `floatBlock ${b.duration}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* Subtle geometric technical overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80%" cy="25%" r="220" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="80%" cy="25%" r="160" fill="none" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="15%" cy="70%" r="180" fill="none" stroke="#64748b" strokeWidth="0.7" strokeDasharray="4 4" />
      </svg>

      <style>{`
        @keyframes blobMove1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.05); }
          100% { transform: translate(20px, -20px) scale(0.97); }
        }
        @keyframes blobMove2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.08); }
          100% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes floatBlock {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-12px) rotate(2deg) scale(1.02); }
          66% { transform: translateY(-6px) rotate(-1deg) scale(0.99); }
        }
      `}</style>
    </div>
  );
}

