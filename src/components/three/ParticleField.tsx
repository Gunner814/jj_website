"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export default function ParticleField({ count = 2000, mouse }: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  // Generate particle positions and colors
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorCyan = new THREE.Color("#06b6d4");
    const colorPurple = new THREE.Color("#a855f7");
    const colorBlue = new THREE.Color("#3b82f6");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Distribute particles in a sphere
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random color between cyan, purple, and blue
      const colorChoice = Math.random();
      let color: THREE.Color;
      if (colorChoice < 0.33) {
        color = colorCyan;
      } else if (colorChoice < 0.66) {
        color = colorPurple;
      } else {
        color = colorBlue;
      }

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  // Store original positions for animation
  const originalPositions = useRef(positions.slice());

  // Animation loop
  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();

    // Rotate the entire particle system
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = Math.sin(time * 0.03) * 0.1;

    // React to mouse position
    const targetX = mouse.current.x * 0.5;
    const targetY = mouse.current.y * 0.5;
    mesh.current.rotation.z += (targetX - mesh.current.rotation.z) * 0.02;
    mesh.current.position.y += (targetY * 2 - mesh.current.position.y) * 0.02;

    // Update light position to follow mouse
    if (light.current) {
      light.current.position.x = mouse.current.x * 10;
      light.current.position.y = mouse.current.y * 10;
    }

    // Wave animation for particles
    const positionAttribute = mesh.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;
    const original = originalPositions.current;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = original[i3];
      const y = original[i3 + 1];
      const z = original[i3 + 2];

      // Add wave motion
      array[i3 + 1] = y + Math.sin(time + x * 0.5) * 0.3;
      array[i3] = x + Math.cos(time + z * 0.5) * 0.2;
    }

    positionAttribute.needsUpdate = true;
  });

  // Create geometry with attributes
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <group>
      <pointLight ref={light} color="#06b6d4" intensity={2} distance={20} />
      <pointLight position={[5, 5, 5]} color="#a855f7" intensity={1} distance={15} />
      <pointLight position={[-5, -5, 5]} color="#3b82f6" intensity={1} distance={15} />

      <points ref={mesh} geometry={geometry}>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
