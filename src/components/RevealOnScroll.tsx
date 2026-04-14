import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

const initialTransforms: Record<NonNullable<RevealOnScrollProps["direction"]>, string> = {
  up: "translate3d(0, 32px, 0)",
  left: "translate3d(-32px, 0, 0)",
  right: "translate3d(32px, 0, 0)",
};

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useScrollReveal();

  const style: CSSProperties = {
    opacity: 0,
    transform: initialTransforms[direction],
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
