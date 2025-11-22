"use client";
import { motion, AnimatePresence, easeOut } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";

export default function Quiz() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="border-soft-mint flex h-full flex-col-reverse rounded-3xl border bg-white p-6 sm:flex-col-reverse lg:flex-col lg:items-center lg:p-10 lg:text-center"
    >
      <Carousel />

      <div className="lg:mt-10 lg:max-w-[700px]">
        <h3 className="font-heading text-black mb-[9px] text-2xl font-semibold sm:text-2xl lg:text-[32px]">
          Kuis &ldquo;Hoaks atau Fakta?&rdquo;
        </h3>
        <p className="font-body text-gray-500 text-sm sm:text-sm lg:text-[20px]">
        Belajar kesehatan jadi lebih menyenangkan melalui kuis interaktif.{" "}
          <span className="lg:font-semibold lg:italic">
            Cocok untuk masyarakat, sekolah, puskesmas, hingga kampanye publik.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export function Carousel() {
  const [index, setIndex] = useState(0);
  const isLarge = useMediaQuery("(min-width: 1024px)"); // lg breakpoint

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CARDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* === ✅ DESKTOP MODE === */
  if (isLarge) {
    return (
      <motion.div
        initial={{ opacity: 0, y: "4rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="flex w-full flex-col items-center gap-[54px]"
      >
        <div className="relative flex h-[494px] w-full items-end justify-center gap-[33px] overflow-hidden">
          <AnimatePresence>
            {CARDS.map((card, idx) => {
              const offset = ((idx - index + CARDS.length) % CARDS.length) - 1;
              const isActive = offset === 0;
              if (Math.abs(offset) > 1) return null;

              return (
                <motion.div
                  key={card.key}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    x: offset * 340,
                    y: isActive ? 40 : -20,
                    scale: isActive ? 1.47 : 0.95,
                    zIndex: isActive ? 10 : 0,
                    height: isActive ? "420px" : "380px",
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                >
                  {card.component(isActive)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  // 🧩 MOBILE

  return (
    <motion.div
      initial={{ opacity: 0, y: "4rem" }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0.2 },
      }}
      viewport={{ once: true }}
      className="flex w-full flex-col items-center gap-[54px]"
    >
      <div className="relative flex h-[360px] w-full items-center justify-center overflow-visible px-4">
        <AnimatePresence>
          {CARDS.map((card, idx) => {
            const position = (idx - index + CARDS.length) % CARDS.length;

            let y = 0;
            let scale = 1;
            let zIndex = 0;

            // If image is active
            if (position === 0) {
              // Front card
              y = 30;
              scale = 0.9;
              zIndex = 3;
            } else if (position === 1) {
              // Middle card
              y = -10;
              scale = 0.86;
              zIndex = 2;
            } else {
              // Back card
              y = -45;
              scale = 0.7;
              zIndex = 1;
            }

            return (
              <motion.div
                key={card.key}
                className="absolute"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y,
                  scale,
                  zIndex,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              >
                {card.component(position === 0)}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Card({ image, isActive }: { image: string; isActive: boolean }) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-[14px] bg-white shadow-lg ring-10 ring-black/10 transition-all duration-300"
    >
      <div className="relative aspect-[3/2] w-[85vw] max-w-[380px]">
        <Image src={image} alt="Slide" fill className="object-cover" />
      </div>
    </motion.div>
  );
}

const CARDS = [
  {
    key: "card-1",
    component: (isActive: boolean) => (
      <Card image={"/images/img-quiz-1.png"} isActive={isActive} />
    ),
  },
  {
    key: "card-2",
    component: (isActive: boolean) => (
      <Card image={"/images/img-quiz-2.png"} isActive={isActive} />
    ),
  },
  {
    key: "card-3",
    component: (isActive: boolean) => (
      <Card image={"/images/img-quiz-3.png"} isActive={isActive} />
    ),
  },
];
