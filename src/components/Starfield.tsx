import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const starCount = prefersReducedMotion ? 70 : 140;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      speed: Math.random() * 0.35 + 0.05,
      opacity: Math.random() * 0.45 + 0.15,
    }));

    const renderFrame = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        context.fillStyle = `rgba(172, 223, 255, ${star.opacity})`;
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fill();

        if (!prefersReducedMotion) {
          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        }
      });
    };

    let frameId = 0;
    const animate = () => {
      renderFrame();
      frameId = window.requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderFrame();
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.cancelAnimationFrame(frameId);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-60" style={{ zIndex: 0 }} />;
};
