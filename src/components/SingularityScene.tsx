import { Canvas, useFrame } from "@react-three/fiber";
import { Component, useEffect, useMemo, useRef, useState, type ErrorInfo, type ReactNode } from "react";
import { BufferGeometry, Vector3, type Group } from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.warn("The 3D hero scene could not be rendered.", error, info); }
  render() { return this.state.failed ? <StaticSingularity /> : this.props.children; }
}

function StaticSingularity() {
  return <div className="scene-fallback" role="img" aria-label="Abstract orbital sculpture with an iridescent core" />;
}

function OrbitalCore({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const points = useMemo(() => Array.from({ length: 97 }, (_, i): [number, number, number] => {
    const angle = i / 96 * Math.PI * 2;
    const radius = 1.56 + Math.sin(angle * 3) * 0.08;
    return [Math.cos(angle) * radius, Math.sin(angle) * 0.48, Math.sin(angle * 1.4) * 0.24];
  }), []);
  const orbitGeometry = useMemo(
    () => new BufferGeometry().setFromPoints(points.map((point) => new Vector3(...point))),
    [points],
  );

  useFrame((state, delta) => {
    if (!groupRef.current || reduced) return;
    const { x, y } = state.pointer;
    pointer.current.x += (x * 0.19 - pointer.current.x) * Math.min(delta * 2.2, 1);
    pointer.current.y += (y * 0.14 - pointer.current.y) * Math.min(delta * 2.2, 1);
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.42) * 0.045;
    groupRef.current.rotation.y += delta * 0.075;
    groupRef.current.rotation.x += (pointer.current.y + Math.sin(state.clock.elapsedTime * 0.22) * 0.035 - groupRef.current.rotation.x) * Math.min(delta, 1);
    groupRef.current.rotation.z += (pointer.current.x * 0.12 - groupRef.current.rotation.z) * Math.min(delta, 1);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.92, 4]} />
        <meshPhysicalMaterial color="#c8c2df" emissive="#321b66" emissiveIntensity={0.36} roughness={0.13} metalness={0.78} clearcoat={1} clearcoatRoughness={0.08} iridescence={0.88} iridescenceIOR={1.7} iridescenceThicknessRange={[140, 520]} />
      </mesh>
      <mesh scale={0.56}>
        <icosahedronGeometry args={[0.92, 3]} />
        <meshBasicMaterial color="#c0fff7" toneMapped={false} transparent opacity={0.24} />
      </mesh>
      <mesh rotation={[Math.PI / 2.35, 0.2, 0.4]}>
        <torusGeometry args={[1.43, 0.018, 8, 180, Math.PI * 1.62]} />
        <meshBasicMaterial color="#9b72ff" transparent opacity={0.76} toneMapped={false} />
      </mesh>
      <mesh rotation={[0.18, 0.82, 1.08]}>
        <torusGeometry args={[1.76, 0.009, 6, 180, Math.PI * 1.64]} />
        <meshBasicMaterial color="#55f1de" transparent opacity={0.62} toneMapped={false} />
      </mesh>
      <lineLoop geometry={orbitGeometry}>
        <lineBasicMaterial color="#e0dcff" transparent opacity={0.36} />
      </lineLoop>
      <group rotation={[0.9, 0.1, 0.4]}>
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return <mesh key={i} position={[Math.cos(angle) * 1.62, Math.sin(angle * 1.7) * 0.55, Math.sin(angle) * 0.72]}>
            <sphereGeometry args={[i % 2 ? 0.025 : 0.038, 10, 10]} />
            <meshBasicMaterial color={i % 2 ? "#55f1de" : "#ff75bd"} toneMapped={false} />
          </mesh>;
        })}
      </group>
    </group>
  );
}

export function SingularityScene() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [staticMode, setStaticMode] = useState(prefersReducedMotion);

  useEffect(() => {
    const compact = window.matchMedia("(max-width: 720px), (pointer: coarse)");
    const updateCompact = () => setStaticMode(prefersReducedMotion || compact.matches);
    updateCompact();
    compact.addEventListener("change", updateCompact);
    return () => compact.removeEventListener("change", updateCompact);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting && document.visibilityState === "visible"), { rootMargin: "120px" });
    const onVisibility = () => setActive(document.visibilityState === "visible" && node.getBoundingClientRect().bottom > 0 && node.getBoundingClientRect().top < window.innerHeight);
    observer.observe(node);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, [staticMode]);

  if (staticMode) return <StaticSingularity />;
  return (
    <div ref={container} className="singularity-canvas" aria-hidden="true">
      <SceneBoundary>
        <Canvas camera={{ position: [0, 0, 4.7], fov: 39 }} dpr={[1, 1.25]} frameloop={active ? "always" : "never"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
          <ambientLight intensity={0.48} />
          <directionalLight position={[2, 3, 3]} intensity={1.45} color="#f5efff" />
          <pointLight position={[-2, -1, 2]} intensity={2.2} color="#55f1de" />
          <pointLight position={[2, 1, -2]} intensity={2.5} color="#9b72ff" />
          <OrbitalCore reduced={prefersReducedMotion} />
        </Canvas>
      </SceneBoundary>
    </div>
  );
}
