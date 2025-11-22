"use client";
import { useEffect } from "react";

export function useHashScroll(offset: number = 100) {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;

      const element = document.querySelector(hash);
      if (element instanceof HTMLElement) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    // Run once on load (in case user refreshed on a hash page)
    scrollToHash();

    // Run whenever hash changes
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [offset]);
}
