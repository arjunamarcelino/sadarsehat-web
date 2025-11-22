/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button, { ButtonSize, ButtonVariant } from "@/app/_components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
import { cn } from "@/app/_libs/utils";
import { useLenis } from "lenis/react";
import { useScrollSpy } from "@/app/_hooks/useScrollSpy";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const scrolledY = useRef(0);
  const SCROLL_OFFSET = 100;
  const router = useRouter();

  // ✅ Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const diff = current - scrolledY.current;

      if (current < 60) setIsScrollDown(false);
      else if (diff > SCROLL_OFFSET) {
        setIsScrollDown(true);
        scrolledY.current = current;
      } else if (diff < -SCROLL_OFFSET) {
        setIsScrollDown(false);
        scrolledY.current = current;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        animate={{
          y: isScrollDown ? "-170%" : 0,
          transition: { duration: 0.4 },
        }}
        className="fixed top-0 right-0 left-0 z-40 mt-8 flex w-full justify-center px-4 lg:px-[100px]"
      >
        <div className="relative w-full max-w-[1600px]">
          <div
            style={{ boxShadow: "0px 0px 4px 0px #0000001F" }}
            className="bg-background flex h-18 w-full items-center justify-between rounded-full px-5"
          >
            {/* Logo */}
            <Image src="/images/sadarsehat-logo.png" alt="SadarSehat Logo" width={132} height={44} />

            {/* Desktop Menu */}
            {!isMobile && (
              <div className="flex flex-1 justify-center">
                <NavigationMenu />
              </div>
            )}

            {/* Buttons / Menu Icon */}
            <div className="flex w-[160px] items-center justify-end space-x-2 lg:w-auto lg:space-x-3">
              {!isMobile && (
                <>
                  <Button
                    variant={ButtonVariant.Secondary}
                    size={ButtonSize.Small}
                    className="hover:bg-emerald-health h-[36px] w-[100px] font-semibold ring-2 hover:text-white"
                  >
                    Tonton Demo
                  </Button>
                  <Button
                    variant={ButtonVariant.Primary}
                    size={ButtonSize.Small}
                    className="ring-emerald-health hover:ring-emerald-health/80 h-[36px] w-[100px] font-semibold ring-2"
                    onClick={() => router.push("/verifikasi-hoaks")}
                  >
                    Cek Hoaks
                  </Button>
                </>
              )}

              {isMobile && (
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="hover:bg-soft-mint flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                >
                  {menuOpen ? (
                    <X size={24} className="text-teal-deep" />
                  ) : (
                    <Menu size={24} className="text-teal-deep" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* ✅ Mobile Dropdown  */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={
                menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10, pointerEvents: "none" }
              }
              transition={{ duration: 0.3, ease: easeInOut }}
              className="border-soft-mint absolute top-[calc(100%+12px)] left-0 z-30 flex w-full flex-col items-center overflow-hidden rounded-2xl border bg-white py-4 shadow-xl"
            >
              <MobileNavigationMenu onNavigate={() => setMenuOpen(false)} />
              <div className="border-soft-mint/60 mt-2 flex w-full gap-3 border-t px-6 pt-4">
                <Button
                  variant={ButtonVariant.Secondary}
                  size={ButtonSize.Small}
                  className="hover:bg-emerald-health h-[40px] flex-1 text-[13px] font-semibold ring-2 hover:text-white"
                >
                  Tonton Demo
                </Button>
                <Button
                  variant={ButtonVariant.Primary}
                  size={ButtonSize.Small}
                  className="ring-emerald-health hover:ring-emerald-health/80 h-[40px] flex-1 text-[13px] font-semibold ring-2"
                  onClick={() => {
                    router.push("/verifikasi-hoaks");
                    setMenuOpen(false);
                  }}
                >
                  Cek Hoaks
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
}

/* ================================
   Desktop Navigation Menu
================================ */
function NavigationMenu({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  const pathname = usePathname();
  const lenis = useLenis();
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState<number | null>(() => {
    // Only active on base route with hash
    if (pathname !== "/") return null;
    const idx = NAVIGATION_MENU.findIndex((m) => pathname.endsWith(m.href));
    return idx >= 0 ? idx : null;
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [bgStyle, setBgStyle] = useState<{ left: number; width: number } | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const currentIndex = hoveredIndex ?? activeIndex;

  const setBtnRef = (i: number) => (el: HTMLButtonElement | null) => {
    buttonRefs.current[i] = el;
  };
  const setTextRef = (i: number) => (el: HTMLSpanElement | null) => {
    textRefs.current[i] = el;
  };

  const measure = () => {
    const isHovering = hoveredIndex !== null;
    const isHoveringActive = isHovering && hoveredIndex === activeIndex;
    
    // If no active index and not hovering, hide bgStyle
    if (activeIndex === null && !isHovering) {
      setBgStyle(null);
      return;
    }
    
    const el = isHoveringActive
      ? buttonRefs.current[hoveredIndex!]
      : isHovering
        ? textRefs.current[hoveredIndex!]
        : activeIndex !== null
          ? buttonRefs.current[activeIndex]
          : null;
    if (!el || !navRef.current) {
      setBgStyle(null);
      return;
    }

    const parentRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const expand = isHovering && !isHoveringActive ? 36 : 0;
    const left = rect.left - parentRect.left - expand / 2;
    const width = rect.width + expand;
    setBgStyle({ left, width });
  };

  useLayoutEffect(() => {
    measure();
    const resizeObs = new ResizeObserver(() => measure());
    if (navRef.current) resizeObs.observe(navRef.current);
    window.addEventListener("resize", measure);
    return () => {
      resizeObs.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [currentIndex, hoveredIndex, activeIndex]);

  const sectionIds = NAVIGATION_MENU.map((m) => m.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    // Only update active index if on base route
    if (pathname !== "/") {
      setActiveIndex(null);
      return;
    }
    if (activeSection) {
      const idx = NAVIGATION_MENU.findIndex((m) => m.href === `#${activeSection}`);
      if (idx !== -1) setActiveIndex(idx);
    }
  }, [activeSection, pathname]);

  useEffect(() => {
    // Only update URL hash if on base route
    if (pathname !== "/") return;
    if (!activeSection) return;
    const newUrl = `#${activeSection}`;
    if (window.location.hash !== newUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, [activeSection, pathname]);

  const handleClick = (i: number, href: string) => {
    setPendingIndex(i);

    if (href.startsWith("#") && window.location.pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    setTimeout(() => {
      setActiveIndex(i);
      setPendingIndex(null);
      lenis?.scrollTo(href);
    }, 150);
  };

  return (
    <div
      ref={navRef}
      className={cn("relative flex items-center justify-center overflow-visible", className)}
    >
      {bgStyle && (
        <motion.div
          layout
          initial={false}
          animate={{ x: bgStyle.left, width: bgStyle.width }}
          transition={{ duration: 0.35, ease: easeInOut }}
          className="bg-soft-mint absolute h-[44px] rounded-full"
          style={{ left: 0, top: 0 }}
        />
      )}

      {NAVIGATION_MENU.map((menu, i) => {
        const isActive = activeIndex === i && pathname === "/";
        const isHovered = hoveredIndex === i;
        const isDotVisible = isActive || pendingIndex === i;

        return (
          <button
            key={menu.href}
            ref={setBtnRef(i)}
            onClick={() => handleClick(i, menu.href)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "font-heading relative z-10 flex h-[44px] items-center px-4 text-sm font-semibold transition-colors duration-150 max-md:text-xs",
              itemClassName,
              isActive || isHovered ? "text-emerald-health" : "text-teal-deep",
            )}
          >
            <span className="mr-[5.5px] inline-flex h-[6px] w-[6px] items-center justify-center">
              <motion.span
                className="h-[6px] w-[6px] rounded-full"
                style={{ backgroundColor: "var(--color-emerald-health, #0BB586)" }}
                animate={{
                  scale: isDotVisible ? 1 : 0,
                  opacity: isDotVisible ? 1 : 0,
                }}
                transition={{ duration: 0.15, ease: easeInOut }}
              />
            </span>
            <span ref={setTextRef(i)}>{menu.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ================================
   Mobile Navigation Menu
================================ */
function MobileNavigationMenu({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(() => {
    // Only active on base route with hash
    if (pathname !== "/") return null;
    return null; // Start with no active item
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [bgStyle, setBgStyle] = useState<{ top: number; height: number } | null>(null);
  const lenis = useLenis();
  const router = useRouter();

  const setBtnRef = (i: number) => (el: HTMLButtonElement | null) => {
    buttonRefs.current[i] = el;
  };

  const measure = () => {
    // If no active index and not hovering, hide bgStyle
    if (activeIndex === null && hoveredIndex === null) {
      setBgStyle(null);
      return;
    }
    
    const currentIndex = hoveredIndex ?? activeIndex ?? 0;
    const el = buttonRefs.current[currentIndex];
    if (!el || !navRef.current) {
      setBgStyle(null);
      return;
    }
    const parentRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setBgStyle({ top: rect.top - parentRect.top, height: rect.height });
  };

  useLayoutEffect(() => {
    measure();
    const resizeObs = new ResizeObserver(() => measure());
    if (navRef.current) resizeObs.observe(navRef.current);
    window.addEventListener("resize", measure);
    return () => {
      resizeObs.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [activeIndex, hoveredIndex]);

  const sectionIds = NAVIGATION_MENU.map((m) => m.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    // Only update active index if on base route
    if (pathname !== "/") {
      setActiveIndex(null);
      return;
    }
    if (activeSection) {
      const idx = NAVIGATION_MENU.findIndex((m) => m.href === `#${activeSection}`);
      if (idx !== -1) setActiveIndex(idx);
    }
  }, [activeSection, pathname]);

  useEffect(() => {
    // Only update URL hash if on base route
    if (pathname !== "/") return;
    if (!activeSection) return;
    const newUrl = `#${activeSection}`;
    if (window.location.hash !== newUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, [activeSection, pathname]);

  const handleClick = (i: number, href: string) => {
    setActiveIndex(i);
    setHoveredIndex(null);

    if (href.startsWith("#") && window.location.pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    lenis?.scrollTo(href);
    onNavigate?.();
  };

  return (
    <div ref={navRef} className="relative flex w-full flex-col items-center overflow-hidden px-6">
      {bgStyle && (
        <motion.div
          layout
          initial={false}
          animate={{
            y: bgStyle.top,
            height: bgStyle.height,
            width: "calc(100% - 4rem)",
          }}
          transition={{ duration: 0.35, ease: easeInOut }}
          className="bg-soft-mint absolute left-6 rounded-lg"
        />
      )}

      {NAVIGATION_MENU.map((menu, i) => {
        const isActive = activeIndex === i && pathname === "/";
        const isHovered = hoveredIndex === i;
        const isHighlighted = isActive || isHovered;

        return (
          <button
            key={menu.href}
            ref={setBtnRef(i)}
            onClick={() => handleClick(i, menu.href)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "font-heading relative z-10 flex w-full items-center justify-center rounded-lg py-3 text-[15px] font-semibold transition-colors duration-150",
              isHighlighted ? "text-emerald-health" : "text-teal-deep",
            )}
          >
            <span className="mr-[5.5px] inline-flex h-[6px] w-[6px] items-center justify-center">
              <motion.span
                className="h-[6px] w-[6px] rounded-full"
                style={{ backgroundColor: "var(--color-emerald-health, #0BB586)" }}
                animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.15, ease: easeInOut }}
              />
            </span>
            {menu.label}
          </button>
        );
      })}
    </div>
  );
}

const NAVIGATION_MENU = [
  { label: "Beranda", href: "#intro" },
  { label: "Tentang Kami", href: "#about-us" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Kontak", href: "#contact" },
];
