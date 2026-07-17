import { useEffect, useState, useRef } from "react";

interface MinecraftSteveSpriteProps {
  progress: number; // 0.0 to 1.0 scroll progress along the path
  flip?: boolean;   // Whether Steve should face left (true) or right (false)
  className?: string;
}

export default function MinecraftSteveSprite({
  progress,
  flip = false,
  className = "w-12 h-16 sm:w-14 sm:h-20"
}: MinecraftSteveSpriteProps) {
  const [walkAngle, setWalkAngle] = useState(0);
  const [bobOffset, setBobOffset] = useState(0);
  const [headTilt, setHeadTilt] = useState(0);

  const prevProgress = useRef(progress);
  const lastMoveTime = useRef(Date.now());
  const animFrameRef = useRef<number | null>(null);

  const currentAngleRef = useRef(0);
  const currentBobRef = useRef(0);
  const currentTiltRef = useRef(0);

  useEffect(() => {
    // Check if progress moved
    if (Math.abs(progress - prevProgress.current) > 0.00005) {
      lastMoveTime.current = Date.now();
      prevProgress.current = progress;
    }
  }, [progress]);

  useEffect(() => {
    let active = true;

    const animate = () => {
      if (!active) return;

      const now = Date.now();
      const timeSinceMove = now - lastMoveTime.current;
      const isMoving = timeSinceMove < 120; // Walking if scrolled in last 120ms

      let targetAngle = 0;
      let targetBob = 0;
      let targetTilt = 0;

      if (isMoving) {
        // Calculate virtual walking distance along the track
        const distance = prevProgress.current * 4000;
        // Frequency of steps
        const stepTime = distance * 0.06;
        
        targetAngle = Math.sin(stepTime) * 38; // -38deg to +38deg swing
        targetBob = Math.abs(Math.sin(stepTime)) * 3.5; // 0 to 3.5px vertical bounce (Minecraft view bobbing)
        targetTilt = Math.cos(stepTime) * 4; // Slight head rotation as he walks
      } else {
        // Idle breathing animation when standing still
        const idleTime = now / 400;
        targetAngle = 0;
        targetBob = Math.sin(idleTime) * 1.2; // Gentle breathing bounce
        targetTilt = Math.sin(idleTime * 0.5) * 2; // Subtle idle head turn
      }

      // Smooth lerp (linear interpolation) for fluid 60FPS motion
      currentAngleRef.current += (targetAngle - currentAngleRef.current) * 0.2;
      currentBobRef.current += (targetBob - currentBobRef.current) * 0.2;
      currentTiltRef.current += (targetTilt - currentTiltRef.current) * 0.15;

      setWalkAngle(currentAngleRef.current);
      setBobOffset(currentBobRef.current);
      setHeadTilt(currentTiltRef.current);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      active = false;
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`relative inline-block select-none pointer-events-none transition-transform duration-75 ${className}`}
      style={{
        transform: `translateY(${-bobOffset}px) ${flip ? "scaleX(-1)" : "scaleX(1)"}`,
        filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.35))"
      }}
    >
      {/* SVG Canvas representing Steve in 3/4 Isometric Side View */}
      <svg
        viewBox="0 0 48 72"
        className="w-full h-full overflow-visible"
        shapeRendering="crispEdges"
      >
        {/* ==================== BACK ARM (Darker Shading) ==================== */}
        <g
          style={{
            transformOrigin: "24px 26px",
            transform: `rotate(${-walkAngle}deg)`
          }}
        >
          {/* Shoulder / Cyan Sleeve */}
          <rect x="20" y="24" width="8" height="8" fill="#008488" />
          <rect x="20" y="24" width="2" height="8" fill="#006c70" />
          {/* Skin Forearm */}
          <rect x="20" y="32" width="8" height="16" fill="#a67958" />
          <rect x="20" y="32" width="2" height="16" fill="#8c6448" />
          {/* Fist detail */}
          <rect x="20" y="46" width="8" height="2" fill="#7a553c" />
        </g>

        {/* ==================== BACK LEG (Darker Shading) ==================== */}
        <g
          style={{
            transformOrigin: "24px 46px",
            transform: `rotate(${walkAngle}deg)`
          }}
        >
          {/* Blue Pants */}
          <rect x="20" y="46" width="8" height="16" fill="#202260" />
          <rect x="20" y="46" width="2" height="16" fill="#18194a" />
          {/* Gray Boot */}
          <rect x="20" y="62" width="10" height="6" fill="#4d4d4d" />
          <rect x="20" y="66" width="10" height="2" fill="#383838" />
        </g>

        {/* ==================== TORSO / BODY ==================== */}
        <g>
          {/* Cyan Shirt */}
          <rect x="18" y="24" width="12" height="14" fill="#00a8b0" />
          {/* Shirt side shadow */}
          <rect x="18" y="24" width="3" height="14" fill="#008c94" />
          <rect x="27" y="24" width="3" height="14" fill="#00bccc" />
          {/* V-neck collar showing skin */}
          <rect x="25" y="24" width="3" height="3" fill="#c8966e" />
          {/* Dark Blue Waistband / Pants Top */}
          <rect x="18" y="38" width="12" height="8" fill="#31348b" />
          <rect x="18" y="38" width="3" height="8" fill="#242668" />
        </g>

        {/* ==================== HEAD ==================== */}
        <g
          style={{
            transformOrigin: "24px 24px",
            transform: `rotate(${headTilt}deg)`
          }}
        >
          {/* Brown Hair Top & Sides */}
          <rect x="16" y="8" width="16" height="6" fill="#493615" />
          <rect x="16" y="8" width="16" height="2" fill="#57411b" />
          {/* Back hair / sideburn area */}
          <rect x="16" y="14" width="4" height="6" fill="#3a2a0f" />
          
          {/* Face Skin */}
          <rect x="20" y="14" width="12" height="10" fill="#c8966e" />
          <rect x="20" y="14" width="2" height="10" fill="#b07b54" />
          <rect x="30" y="14" width="2" height="10" fill="#d8a880" />

          {/* Eyes (White + Indigo Pupil) */}
          <rect x="26" y="16" width="2" height="2" fill="#ffffff" />
          <rect x="28" y="16" width="2" height="2" fill="#4a3b69" />

          {/* Nose & Beard / Mouth */}
          <rect x="26" y="18" width="4" height="2" fill="#5f4327" />
          <rect x="26" y="20" width="6" height="2" fill="#493615" />
          <rect x="26" y="22" width="6" height="2" fill="#3a2a0f" />
        </g>

        {/* ==================== FRONT LEG (Bright Front Shading) ==================== */}
        <g
          style={{
            transformOrigin: "24px 46px",
            transform: `rotate(${-walkAngle}deg)`
          }}
        >
          {/* Blue Pants */}
          <rect x="20" y="46" width="8" height="16" fill="#31348b" />
          <rect x="20" y="46" width="2" height="16" fill="#242668" />
          <rect x="26" y="46" width="2" height="16" fill="#3e42aa" />
          {/* Gray Boot (with slight toe extending to X=31) */}
          <rect x="20" y="62" width="11" height="6" fill="#686868" />
          <rect x="20" y="66" width="11" height="2" fill="#4d4d4d" />
        </g>

        {/* ==================== FRONT ARM (Bright Front Shading) ==================== */}
        <g
          style={{
            transformOrigin: "24px 26px",
            transform: `rotate(${walkAngle}deg)`
          }}
        >
          {/* Shoulder / Cyan Sleeve */}
          <rect x="20" y="24" width="8" height="8" fill="#00a8b0" />
          <rect x="20" y="24" width="2" height="8" fill="#008c94" />
          <rect x="26" y="24" width="2" height="8" fill="#00bccc" />
          {/* Skin Forearm */}
          <rect x="20" y="32" width="8" height="16" fill="#c8966e" />
          <rect x="20" y="32" width="2" height="16" fill="#b07b54" />
          <rect x="26" y="32" width="2" height="16" fill="#d8a880" />
          {/* Fist detail */}
          <rect x="20" y="46" width="8" height="2" fill="#a67958" />
        </g>
      </svg>
    </div>
  );
}
