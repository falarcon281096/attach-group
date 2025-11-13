"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GAAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!GA_ID) return;
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    // Send a pageview on route changes
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", GA_ID, { page_path: url });
    }
  }, [pathname, searchParams, GA_ID]);

  return null;
}