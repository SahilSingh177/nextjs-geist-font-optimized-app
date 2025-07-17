"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

// Simple shader material for aurora effect
class AuroraMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color("#0EE4E4") },
        color2: { value: new THREE.Color("#8478FA") },
        color3: { value: new THREE.Color("#4ADE80") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;

        float noise(vec2 p) {
          return fract(sin(dot(p ,vec2(12.9898,78.233))) * 43758.5453);
        }

        void main() {
          float y = vUv.y * 3.0;
          float n = noise(vec2(vUv.x * 10.0, y + time * 0.5));
          float intensity = smoothstep(0.2, 0.8, n);
          vec3 color = mix(color1, color2, vUv.x);
          color = mix(color, color3, intensity);
          gl_FragColor = vec4(color, intensity * 0.6);
        }
      `
    });
  }
}

extend({ AuroraMaterial });

function AuroraPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
      <planeGeometry args={[20, 10, 32, 32]} />
      <auroraMaterial ref={materialRef} />
    </mesh>
  );
}

export function AuroraThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A0F24]">
      <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
        <ambientLight intensity={0.5} />
        <AuroraPlane />
      </Canvas>
    </div>
  );
}
