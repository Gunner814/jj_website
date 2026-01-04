"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";

interface SceneProps {
  className?: string;
}

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Scene({ className = "" }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Touch movement handler
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouse.current.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-10 ${className}`}
    >
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <color attach="background" args={["#030014"]} />
          <fog attach="fog" args={["#030014", 10, 30]} />

          <ambientLight intensity={0.2} />

          <ParticleField count={isMobile ? 800 : 2000} mouse={mouse} />
          <FloatingGeometry />

          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}
