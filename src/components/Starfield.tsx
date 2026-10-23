import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const size = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    size();
    window.addEventListener("resize", size, { passive: true });
    const stars = Array.from({ length: 48 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.15 + 0.25,
      speed: Math.random() * 0.12 + 0.025,
      opacity: Math.random() * 0.24 + 0.08,
    }));
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      stars.forEach((star) => {
        context.fillStyle = `rgba(195, 205, 255, ${star.opacity})`;
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fill();
        if (!prefersReducedMotion) {
          star.y += star.speed;
          if (star.y > window.innerHeight) { star.y = 0; star.x = Math.random() * window.innerWidth; }
        }
      });
    };
    let frame = 0;
    const stop = () => { window.cancelAnimationFrame(frame); frame = 0; };
    const animate = () => {
      draw();
      if (!prefersReducedMotion && document.visibilityState === "visible") frame = window.requestAnimationFrame(animate);
    };
    const visibility = () => { stop(); if (document.visibilityState === "visible") animate(); };
    draw();
    if (!prefersReducedMotion && document.visibilityState === "visible") frame = window.requestAnimationFrame(animate);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("resize", size);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 pointer-events-none opacity-45" style={{ zIndex: 0 }} />;
};
