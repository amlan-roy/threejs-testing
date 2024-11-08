"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Test1() {
  const meshRef = useRef<Mesh>(null);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Canvas>
          <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight color="#ffffff" position={[0, 0, 5]} />
        </Canvas>
      </main>
    </div>
  );
}
