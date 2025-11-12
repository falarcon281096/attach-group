"use client";

import { useEffect } from "react";

export function useScrollReveal(selector: string = ".scroll-reveal") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [selector]);
}