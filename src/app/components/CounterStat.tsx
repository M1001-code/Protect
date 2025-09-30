"use client";

import { useEffect, useRef, useState } from "react";

type CounterStatProps = {
  value: number;
  suffix?: string;
  label: string;
  durationMs?: number;
  delayMs?: number;
};

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView } as const;
}

export default function CounterStat({
  value,
  suffix = "",
  label,
  durationMs = 1800,
  delayMs = 0,
}: CounterStatProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startBase = performance.now();
    const formatter = new Intl.NumberFormat("fr-FR");

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - startBase - delayMs;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / durationMs);
      const current = Math.round(value * progress);
      setDisplay(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, durationMs, delayMs]);

  const formatted = new Intl.NumberFormat("fr-FR").format(display);

  return (
    <div ref={ref} className="card animate-in-up p-4" style={{ ['--delay' as any]: `${delayMs}ms` }}>
      <div className="text-2xl font-semibold text-accent number-glow">
        {formatted}
        {suffix}
      </div>
      <p className="mt-1 text-sm opacity-80">{label}</p>
    </div>
  );
}


