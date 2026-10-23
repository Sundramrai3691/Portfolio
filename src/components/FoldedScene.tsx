import { Canvas, useFrame } from "@react-three/fiber";
import { Component, useEffect, useMemo, useRef, useState, type ErrorInfo, type ReactNode } from "react";
import { BufferAttribute, BufferGeometry, Vector3, type Group } from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.warn("The 3D hero scene could not be rendered.", error, info); }
  render() { return this.state.failed ? <StaticFold /> : this.props.children; }
}

function StaticFold() {
  return <div className="scene-fallback" role="img" aria-label="Folded iridescent ribbon sculpture">
    <svg viewBox="0 0 520 520" aria-hidden="true">
      <defs>
        <linearGradient id="fold-violet" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d8c9ff" /><stop offset=".42" stopColor="#8062d3" /><stop offset="1" stopColor="#242139" /></linearGradient>
        <linearGradient id="fold-mint" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#193d45" /><stop offset=".48" stopColor="#74eedb" /><stop offset="1" stopColor="#d9fff8" /></linearGradient>
        <linearGradient id="fold-rose" x1="1" y1="0" x2="0" y2="1"><stop stopColor="#eac5e5" /><stop offset=".46" stopColor="#8c619e" /><stop offset="1" stopColor="#263044" /></linearGradient>
      </defs>
      <g stroke="#ece8ff" strokeOpacity=".54" strokeWidth="1.2">
        <path fill="url(#fold-violet)" d="M102 128 C156 66 232 71 258 132 C281 185 224 211 178 231 C114 259 101 315 153 339 C189 356 242 322 279 282 C330 228 391 215 424 253 C455 290 418 355 362 394 C305 434 240 438 199 402 C164 371 187 326 230 297 C272 269 320 250 318 215 C315 175 266 164 225 194 C178 229 143 277 97 258 C54 240 62 174 102 128Z" />
        <path fill="url(#fold-mint)" d="M132 102 C181 82 221 118 218 159 C214 205 161 219 126 252 C88 288 102 340 148 355 C195 371 246 330 280 290 C321 242 363 214 399 231 C434 247 428 290 394 319 C354 353 314 380 310 412 C307 445 346 461 381 442 C422 419 443 377 435 344 C426 309 398 292 365 307 C322 327 284 392 235 420 C176 454 118 431 94 384 C69 335 92 290 131 259 C174 225 237 207 242 164 C247 119 198 91 158 111" />
        <path fill="url(#fold-rose)" d="M154 132 C185 108 221 126 228 156 C237 193 202 216 168 239 C121 270 102 309 124 338 C148 371 194 358 229 327 C274 287 307 229 360 220 C404 213 435 242 423 276 C412 307 375 324 344 346 C300 378 276 418 299 440 C320 460 356 450 386 426 C340 469 278 465 251 430 C220 390 244 351 288 318 C329 288 378 271 380 246 C381 228 360 220 339 230 C294 252 269 305 227 340 C180 379 125 383 97 345 C66 303 89 254 133 220 C169 193 200 177 197 153 C195 135 175 127 154 132Z" />
      </g>
      <path d="M113 143 C170 88 231 95 252 145 M117 345 C171 389 224 347 269 295 M341 405 C393 372 425 332 411 306" fill="none" stroke="#f2efff" strokeOpacity=".78" strokeWidth="2" />
    </svg>
  </div>;
}

function makeFold(phase: number, widthScale: number) {
  const geometry = new BufferGeometry();
  const longitudinal = 128;
  const cross = 10;
  const positions: number[] = [];
  const indices: number[] = [];
  const point = (t: number) => new Vector3(
    Math.sin(t * 1.35 + phase) * 0.56 + Math.cos(t * 2.05 - phase) * 0.23,
    Math.sin(t + phase * 0.8) * 0.76 + Math.cos(t * 2.1 + phase) * 0.16,
    Math.cos(t * 1.25 - phase) * 0.53 + Math.sin(t * 2.6 + phase) * 0.16,
  );

  for (let i = 0; i <= longitudinal; i += 1) {
    const t = (i / longitudinal) * Math.PI * 2;
    const center = point(t);
    const tangent = point(t + 0.008).sub(point(t - 0.008)).normalize();
    const sideA = new Vector3(0, 0, 1).cross(tangent).normalize();
    if (sideA.lengthSq() < 0.01) sideA.set(1, 0, 0);
    const sideB = tangent.clone().cross(sideA).normalize();
    const twist = t * 1.7 + phase;
    const widthAxis = sideA.multiplyScalar(Math.cos(twist)).add(sideB.multiplyScalar(Math.sin(twist))).normalize();
    const foldAxis = tangent.clone().cross(widthAxis).normalize();
    const width = widthScale * (0.16 + 0.12 * (0.5 + 0.5 * Math.sin(t * 2 + phase)));

    for (let j = 0; j <= cross; j += 1) {
      const u = (j / cross) * 2 - 1;
      const folded = Math.sin(t * 3.2 + phase * 2) * (1 - u * u) * 0.045;
      const vertex = center.clone().addScaledVector(widthAxis, u * width).addScaledVector(foldAxis, folded);
      positions.push(vertex.x, vertex.y, vertex.z);
      if (i < longitudinal && j < cross) {
        const a = i * (cross + 1) + j;
        const b = a + cross + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  }

  geometry.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function FoldedSculpture({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const folds = useMemo(() => [makeFold(0.15, 1.15), makeFold(2.35, 0.82), makeFold(4.2, 0.66)], []);
  const dust = useMemo(() => new BufferGeometry().setFromPoints(Array.from({ length: 18 }, (_, index) => {
    const t = (index / 18) * Math.PI * 2;
    return new Vector3(Math.sin(t * 1.7) * 1.38, Math.cos(t * 2.3) * 1.18, Math.sin(t * 1.1) * 1.1);
  })), []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group || reduced) return;
    const smooth = Math.min(delta * 2, 1);
    pointer.current.x += (state.pointer.x * 0.13 - pointer.current.x) * smooth;
    pointer.current.y += (state.pointer.y * 0.11 - pointer.current.y) * smooth;
    group.rotation.y += (pointer.current.x * 0.13 + Math.sin(state.clock.elapsedTime * 0.2) * 0.025 - group.rotation.y) * smooth;
    group.rotation.x += (-pointer.current.y * 0.1 + Math.sin(state.clock.elapsedTime * 0.16) * 0.018 - group.rotation.x) * smooth;
    group.position.y = Math.sin(state.clock.elapsedTime * 0.34) * 0.025;
  });

  return <group ref={groupRef} rotation={[0.16, -0.22, -0.16]}>
    {folds.map((geometry, index) => <mesh key={index} geometry={geometry} rotation={[index * 0.14, index * -0.19, index * 0.08]}>
      <meshPhysicalMaterial color={index === 1 ? "#a8fff2" : "#c8b7ff"} emissive={index === 1 ? "#063a37" : "#201044"} emissiveIntensity={0.25} side={2} roughness={0.23} metalness={0.62} clearcoat={0.9} clearcoatRoughness={0.18} iridescence={0.88} iridescenceIOR={1.45} iridescenceThicknessRange={[120, 640]} transparent opacity={0.88} />
    </mesh>)}
    <points geometry={dust}><pointsMaterial color="#d5c9ff" size={0.018} transparent opacity={0.55} sizeAttenuation /></points>
  </group>;
}

export function FoldedScene() {
  const reducedMotion = usePrefersReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [staticMode, setStaticMode] = useState(reducedMotion);

  useEffect(() => {
    const compact = window.matchMedia("(max-width: 720px), (pointer: coarse)");
    const update = () => setStaticMode(reducedMotion || compact.matches);
    update();
    compact.addEventListener("change", update);
    return () => compact.removeEventListener("change", update);
  }, [reducedMotion]);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting && document.visibilityState === "visible"), { rootMargin: "120px" });
    const onVisibility = () => setActive(document.visibilityState === "visible" && node.getBoundingClientRect().bottom > 0 && node.getBoundingClientRect().top < window.innerHeight);
    observer.observe(node);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, [staticMode]);

  if (staticMode) return <StaticFold />;
  return <div ref={container} className="singularity-canvas" aria-hidden="true">
    <SceneBoundary><Canvas camera={{ position: [0, 0, 4.7], fov: 39 }} dpr={[1, 1.25]} frameloop={active ? "always" : "never"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
      <ambientLight intensity={0.42} />
      <directionalLight position={[2, 3, 3]} intensity={1.5} color="#f5efff" />
      <pointLight position={[-2, -1, 2]} intensity={2.1} color="#55f1de" />
      <pointLight position={[2, 1, -2]} intensity={2.3} color="#9b72ff" />
      <FoldedSculpture reduced={reducedMotion} />
    </Canvas></SceneBoundary>
  </div>;
}
