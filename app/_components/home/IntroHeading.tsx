"use client";

import { ArrowRight } from "lucide-react";
import Button, { ButtonSize, ButtonContent, ButtonVariant } from "../ui/Button";
import { ShinyBadge } from "@/app/_components/ui/ShinyBadge";
import { useRouter } from "next/navigation";

export function IntroHeading() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col items-start">
      {/* TAGLINE */}

      <ShinyBadge
        text="✦ Melawan Hoaks, Menguatkan Ekosistem Kesehatan Digital"
        disabled={false}
        speed={6}
        className="text-dark-medium-dark mb-9 text-[10px] italic sm:mb-9 lg:mb-6 lg:text-xs"
      />

      {/* HEADLINE */}
      <h1 className="font-heading text-black mb-4 text-start text-[44px] leading-[1.05] font-semibold sm:mb-4 sm:text-[44px] lg:mb-6 lg:text-[58px]">
        <span className="text-emerald-health font-semibold">Platform </span>
        Cerdas Verifikasi Kesehatan
      </h1>

      {/* DESCRIPTION */}
      <p className="font-body text-black mb-9 max-w-[800px] text-start text-base sm:mb-9 sm:text-base lg:mb-16 lg:text-lg">
      Cek kebenaran informasi kesehatan hanya dalam hitungan detik. Didukung Agentic AI untuk memastikan masyarakat mendapatkan fakta yang akurat, terpercaya, dan mudah dipahami.
      </p>

      {/* CTA BUTTON */}

      <Button
        size={ButtonSize.Large}
        content={ButtonContent.RightIcon}
        variant={ButtonVariant.Primary}
        rightIcon={
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:translate-x-1 lg:h-7 lg:w-7">
            <ArrowRight className="text-emerald-health h-3.5 w-3.5" />
          </span>
        }
        className="group h-10 text-sm font-semibold sm:h-10 sm:text-sm lg:h-[50px] lg:text-base"
        onClick={() => router.push("/verifikasi-hoaks")}
      >
        Cek Hoaks Sekarang
      </Button>
    </div>
  );
}
