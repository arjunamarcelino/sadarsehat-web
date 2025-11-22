"use client";

import dynamic from "next/dynamic";
import { useHashScroll } from "@/app/_hooks/useHashScroll";
import { Intro } from "./Intro";

const Problem = dynamic(() => import("./Problem"), { ssr: false });
const Solution = dynamic(() => import("./Solution"), { ssr: false });
const Steps = dynamic(() => import("./Steps"), { ssr: false });
const Benefit = dynamic(() => import("./Benefit"), { ssr: false });
const SadarSehatCTA = dynamic(() => import("./CTA"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export function Hero() {
  useHashScroll(100);

  return (
    <div className="flex flex-col gap-25">
      <Intro />
      <Problem />  
      <Solution />
      <Steps />
      <Benefit />
      <SadarSehatCTA />
      <Footer />
    </div>
  );
}
