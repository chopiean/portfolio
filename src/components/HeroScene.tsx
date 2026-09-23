import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function useAccentColor() {
  return useMemo(() => {
    if (typeof window === "undefined") return "#FF5C8A";
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim();
    return v || "#FF5C8A";
  }, []);
}

function Cluster() {
  const group = useRef<THREE.Group>(null);
  const accent = useAccentColor();
  const ink = "F1EFFF";
  const { pointer } = useThree();

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.18;
    g.rotation.x += (-pointer.y * 0.25 - g.rotation.x) * 0.04;
    g.rotation.z += (pointer.x * 0.15 - g.rotation.z) * 0.04;
  });
  return (
    <group ref={group}>
      {/*Receipt-like card */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh
          position={[-1.05, 0.35, 0]}
          rotation={[0.15, 0.4, -0.08]}
          castShadow
        >
          <boxGeometry args={[1.15, 1.55, 0.08]}></boxGeometry>
          <meshStandardMaterial
            color={"ECE9FF"}
            roughness={0.55}
            metalness={0.05}
          ></meshStandardMaterial>
        </mesh>
      </Float>

      {/* Progress ring  */}
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.3}>
        <mesh position={[1.0, -0.15, 0.4]} rotation={[1.2, 0.2, 0]} castShadow>
          <torusGeometry args={[0.6, 0.16, 24, 64]}></torusGeometry>
          <meshStandardMaterial
            color={accent}
            roughness={0.35}
            metalness={0.15}
          ></meshStandardMaterial>
        </mesh>
      </Float>

      {/* Chart bar */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh
          position={[0.15, 1.0, -0.3]}
          rotation={[0.3, -0.3, 0.1]}
          castShadow
        >
          <boxGeometry args={[0.35, 1.0, 0.35]}></boxGeometry>
          <MeshDistortMaterial
            color={ink}
            roughness={0.4}
            metalness={0.1}
            distort={0.12}
            speed={1.2}
          ></MeshDistortMaterial>
        </mesh>
      </Float>

      {/* Small accent sphere */}
      <Float>
        <mesh position={[-0.6, -0.95, 0.5]} castShadow>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial
            color={accent}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.65}></ambientLight>
      <directionalLight position={[3, 4, 5]} intensity={1.1}></directionalLight>
      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.3}
      ></directionalLight>
      <Suspense fallback={null}>
        <Cluster></Cluster>
      </Suspense>
    </Canvas>
  );
}
