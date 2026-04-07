import { useMemo } from "react";

const PARTICLE_COUNT = 60;

export default function ThreeBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: i % 4 === 0 ? "hsl(262 83% 65%)" : i % 4 === 1 ? "hsl(217 91% 60%)" : i % 4 === 2 ? "hsl(217 91% 80%)" : "hsl(262 83% 80%)",
      opacity: Math.random() * 0.4 + 0.05,
      duration: Math.random() * 14 + 8,
      delay: Math.random() * 12,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary radial glow — top right */}
      <div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.14), transparent 70%)",
          top: "-15%",
          right: "-10%",
          animation: "blobMove1 14s ease-in-out infinite alternate",
        }}
      />
      {/* Secondary glow — bottom left */}
      <div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, hsl(262 83% 65% / 0.1), transparent 70%)",
          bottom: "0%",
          left: "-8%",
          animation: "blobMove2 17s ease-in-out infinite alternate",
        }}
      />
      {/* Tertiary glow — center */}
      <div
        className="absolute rounded-full blur-[90px]"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, hsl(217 91% 55% / 0.06), transparent 70%)",
          top: "35%",
          left: "35%",
          animation: "blobMove3 20s ease-in-out infinite alternate",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Animated wireframe-like lines (decorative) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "rotateSvg 40s linear infinite" }}
      >
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="75%" cy="20%" r="200" fill="none" stroke="url(#g1)" strokeWidth="1" />
        <circle cx="75%" cy="20%" r="140" fill="none" stroke="url(#g1)" strokeWidth="0.5" />
        <circle cx="20%" cy="75%" r="160" fill="none" stroke="url(#g1)" strokeWidth="0.7" />
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
        @keyframes blobMove3 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, -40px) scale(1.1); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: inherit; }
          25% { transform: translateY(-25px) translateX(12px) scale(1.1); }
          50% { transform: translateY(-12px) translateX(-8px) scale(0.9); }
          75% { transform: translateY(-35px) translateX(6px) scale(1.05); }
        }
        @keyframes rotateSvg {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
