"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Laptop({ openProgress }: { openProgress: number }) {
  // Simple laptop base and screen with rotation animation
  return (
    <group position={[0, -1, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#0EE4E4" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 1, -0.9]} rotation={[-Math.PI / 2 * openProgress, 0, 0]} >
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#8478FA" />
      </mesh>
    </group>
  );
}

function Face() {
  // Simple face with glowing eyes
  return (
    <group position={[0, 1.5, -0.8]}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#4ADE80" />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.15, 0.1, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial emissive="#0EE4E4" emissiveIntensity={1} color="#000000" />
      </mesh>
      <mesh position={[0.15, 0.1, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial emissive="#0EE4E4" emissiveIntensity={1} color="#000000" />
      </mesh>
    </group>
  );
}

export function AnimatedAvatar() {
  const [openProgress, setOpenProgress] = useState(0);
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Map scrollY from 0 to 300px to openProgress 0 to 1
      const progress = Math.min(Math.max(scrollY / 300, 0), 1);
      setOpenProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <group ref={groupRef}>
          <Laptop openProgress={openProgress} />
          {openProgress > 0.3 && <Face />}
        </group>
      </Canvas>
    </div>
  );
}
