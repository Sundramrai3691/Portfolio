import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function OrbitalCore() {
  const groupRef = useRef<Group>(null);

  const points = useMemo(() => {
    const positions: [number, number, number][] = [];

    for (let i = 0; i < 180; i += 1) {
      const angle = (i / 180) * Math.PI * 2;
      const radius = 1.25 + (i % 7) * 0.08;
      positions.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.4,
        Math.sin(angle) * 0.9,
      ]);
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.35;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.75}>
        <mesh>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshPhysicalMaterial
            color="#f3f1ff"
            emissive="#9b72ff"
            emissiveIntensity={0.75}
            roughness={0.18}
            metalness={0.7}
            transparent
            opacity={0.95}
            transmission={0.35}
            thickness={1.2}
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.035, 16, 200]} />
        <meshStandardMaterial color="#7dd7ff" emissive="#55f1de" emissiveIntensity={0.9} />
      </mesh>

      <mesh rotation={[0.25, 0.8, 0.4]}>
        <torusGeometry args={[2.2, 0.03, 16, 220]} />
        <meshStandardMaterial color="#be9cff" emissive="#9b72ff" emissiveIntensity={0.8} />
      </mesh>

      <Line points={points} color="#a8ffd5" lineWidth={0.8} transparent opacity={0.7} />

      <group rotation={[0.9, 0.1, 0.4]}>
        {Array.from({ length: 8 }).map((_, index) => (
          <mesh key={index} position={[Math.cos(index * 0.8) * 1.6, Math.sin(index * 1.3) * 1, (index - 4) * 0.18]}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial color={index % 2 === 0 ? "#55f1de" : "#9b72ff"} emissive={index % 2 === 0 ? "#55f1de" : "#9b72ff"} emissiveIntensity={1.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export function SingularityScene() {
  return (
    <div className="relative aspect-[1/1.1] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(155,114,255,0.2),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(85,241,222,0.15),transparent_30%),rgba(9,10,18,0.9)] shadow-[0_20px_60px_rgba(7,10,20,0.7)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_55%)]" />
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.72} />
        <directionalLight position={[2, 2, 3]} intensity={1.5} color="#d6d8ff" />
        <pointLight position={[-2, -1, 2]} intensity={1.5} color="#55f1de" />
        <pointLight position={[2, 1, -2]} intensity={1.4} color="#9b72ff" />
        <OrbitalCore />
      </Canvas>
    </div>
  );
}
