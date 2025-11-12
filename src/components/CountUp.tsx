"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  start?: number;
  duration?: number; // in ms
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
};

// Easing for a smooth finish
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  end,
  start = 0,
  duration = 1500,
  prefix = "",
  suffix = "",
  className,
  onComplete,
}: CountUpProps) {
  const [value, setValue] = useState(start);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const elRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;

    const step = (ts: number) => {
      if (startTimeRef.current == null) {
        startTimeRef.current = ts;
      }
      const progress = Math.min((ts - startTimeRef.current) / duration, 1);
      const eased = easeOutCubic(progress);
      const nextVal = Math.round(start + (end - start) * eased);
      setValue(nextVal);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, duration, start, end]);

  return (
    <span ref={elRef} className={className}>
      {prefix}
      {value.toLocaleString("es-PE")}
      {suffix}
    </span>
  );
}