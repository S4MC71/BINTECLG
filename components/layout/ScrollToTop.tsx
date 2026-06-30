"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top of window on page navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // instant transition to avoid animation lags
    });
  }, [pathname]);

  return null;
}
