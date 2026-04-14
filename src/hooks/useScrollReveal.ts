import { useEffect, useRef } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal(options: Options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translate3d(0, 0, 0)";
          element.classList.add("is-revealed");

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          element.style.opacity = "0";
          element.style.transform = "translate3d(0, 32px, 0)";
          element.classList.remove("is-revealed");
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return ref;
}
