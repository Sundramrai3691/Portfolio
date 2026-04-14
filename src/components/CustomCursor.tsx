import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function isFinePointerDevice() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
}

export default function CustomCursor() {
  const cursorOuter = useRef<HTMLDivElement>(null);
  const cursorInner = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isOnCard, setIsOnCard] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled || !isFinePointerDevice()) {
      return;
    }

    const outer = cursorOuter.current;
    const inner = cursorInner.current;
    if (!outer || !inner) {
      return;
    }

    let outerX = window.innerWidth / 2;
    let outerY = window.innerHeight / 2;
    let targetX = outerX;
    let targetY = outerY;

    const animate = () => {
      outerX += (targetX - outerX) * 0.12;
      outerY += (targetY - outerY) * 0.12;
      outer.style.left = `${outerX}px`;
      outer.style.top = `${outerY}px`;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      inner.style.left = `${event.clientX}px`;
      inner.style.top = `${event.clientY}px`;

      const target = event.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>("[data-cursor]");
      const interactive = target?.closest("a, button, [role='button'], input, textarea, select");

      setIsOnCard(Boolean(card));
      setIsHovering(Boolean(interactive));
      setLabel(card?.getAttribute("data-cursor") ?? "");
    };

    const clear = () => {
      setIsHovering(false);
      setIsOnCard(false);
      setLabel("");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", clear);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", clear);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorOuter}
        className="custom-cursor fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border,backdrop-filter,transform] duration-150"
        style={{
          width: isOnCard ? 88 : isHovering ? 48 : 32,
          height: isOnCard ? 88 : isHovering ? 48 : 32,
          border: isOnCard ? "1.5px solid rgba(0,200,255,0.9)" : "1.5px solid rgba(0,200,255,0.55)",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: isOnCard ? "invert(1)" : "none",
          mixBlendMode: isOnCard ? "difference" : "normal",
        }}
      >
        {isOnCard && label ? (
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white">{label}</span>
        ) : null}
      </div>
      <div
        ref={cursorInner}
        className="custom-cursor fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering || isOnCard ? 0 : 6,
          height: isHovering || isOnCard ? 0 : 6,
          background: "#00C8FF",
          borderRadius: "50%",
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
