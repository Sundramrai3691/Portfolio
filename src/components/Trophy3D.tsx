import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const Trophy3D = () => {
  const trophyRef = useRef<Mesh>(null);
  const particlesRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (trophyRef.current) {
      trophyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      trophyRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Trophy body */}
      <mesh ref={trophyRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 0.8, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Trophy cup */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial
          color="#9d4edd"
          emissive="#9d4edd"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Trophy base */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.6, 0.7, 0.2, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Floating particles */}
      <mesh ref={particlesRef}>
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const radius = 1.5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i * 0.5) * 0.5;
          
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00d4ff" : "#9d4edd"}
                emissive={i % 2 === 0 ? "#00d4ff" : "#9d4edd"}
                emissiveIntensity={1}
              />
            </mesh>
          );
        })}
      </mesh>

      {/* Lighting */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#00d4ff" />
      <pointLight position={[-2, -2, 2]} intensity={1} color="#9d4edd" />
      <ambientLight intensity={0.3} />
    </group>
  );
};
