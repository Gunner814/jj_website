"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
  geometry?: "icosahedron" | "torus" | "octahedron" | "dodecahedron";
}

function FloatingShape({
  position,
  color,
  speed = 1,
  distort = 0.3,
  size = 1,
  geometry = "icosahedron",
}: FloatingShapeProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();

    mesh.current.rotation.x = time * 0.2 * speed;
    mesh.current.rotation.y = time * 0.3 * speed;
    mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    mesh.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.3;
  });

  const getGeometry = () => {
    switch (geometry) {
      case "torus":
        return <torusGeometry args={[size * 0.7, size * 0.3, 16, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[size, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[size, 0]} />;
      default:
        return <icosahedronGeometry args={[size, 1]} />;
    }
  };

  return (
    <mesh ref={mesh} position={position}>
      {getGeometry()}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      {/* Main shapes around the hero */}
      <FloatingShape
        position={[-6, 2, -5]}
        color="#06b6d4"
        speed={0.8}
        size={1.2}
        geometry="icosahedron"
        distort={0.4}
      />
      <FloatingShape
        position={[6, -1, -4]}
        color="#a855f7"
        speed={1.2}
        size={0.8}
        geometry="torus"
        distort={0.3}
      />
      <FloatingShape
        position={[-4, -3, -6]}
        color="#3b82f6"
        speed={0.6}
        size={1}
        geometry="octahedron"
        distort={0.2}
      />
      <FloatingShape
        position={[5, 3, -7]}
        color="#10b981"
        speed={1}
        size={0.7}
        geometry="dodecahedron"
        distort={0.35}
      />
      <FloatingShape
        position={[0, -4, -3]}
        color="#f59e0b"
        speed={0.9}
        size={0.5}
        geometry="icosahedron"
        distort={0.25}
      />

      {/* Wireframe accents */}
      <mesh position={[-7, 0, -8]} rotation={[0.5, 0.5, 0]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[7, 2, -10]} rotation={[0.3, 0.7, 0]}>
        <octahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
