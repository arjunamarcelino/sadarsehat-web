"use client";
import { easeOut, motion } from "motion/react";
import Image from "next/image";
import Button, { ButtonContent, ButtonSize, ButtonVariant } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";

export default function SadarSehatCTA() {
  const isLarge = useMediaQuery("(min-width: 1380px)");

  return (
    <section className="relative w-full overflow-hidden bg-white py-25">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-4 lg:px-25">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-r text-white"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(48deg,_#006D77_30%,_#0BB586_70%,_#006D77_100%)]" />

          {/* Dotted Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src="/icons/ic-dotted-bg.svg"
              alt=""
              width={700}
              height={700}
              className="absolute top-0 left-0 w-[60vw] max-w-[700px] opacity-100"
            />
            <Image
              src="/icons/ic-dotted-bg.svg"
              alt=""
              width={700}
              height={700}
              className="absolute top-0 right-0 w-[60vw] max-w-[700px] opacity-100 lg:right-[-16vw]"
            />
          </div>

          {/* === Content === */}
          <div
            className={`relative z-[2] flex h-full w-full items-center ${isLarge ? "justify-between" : "justify-center"} lg:gap-6 lg:px-20 lg:py-8 ${
              isLarge ? "flex-row" : "flex-col-reverse gap-12 px-[22px] py-8"
            }`}
          >
            {/* LEFT CONTENT */}
            <div className="flex max-w-[580px] flex-col gap-4 text-left leading-tight">
              <h2 className="font-heading text-[44px] font-semibold sm:text-[44px] lg:mt-[66px] lg:text-[62px]">
                Mulai Verifikasi Hoaks Kesehatan <br className="hidden sm:block" />
                dengan SadarSehat
              </h2>

              <p className={`font-body ${isLarge ? "mb-10" : "mb-12"} text-base leading-relaxed`}>
                SadarSehat membantu masyarakat, tenaga kesehatan, dan pembuat kebijakan
                melawan hoaks kesehatan dengan informasi yang akurat, terverifikasi, dan mudah
                dipahami, sehingga keputusan kesehatan menjadi lebih aman dan bertanggung jawab.
              </p>

              <Button
                size={ButtonSize.Large}
                content={ButtonContent.RightIcon}
                variant={ButtonVariant.Primary}
                rightIcon={<ArrowRight className="h-3.5 w-3.5 text-white" />}
                className="group w-fit h-10 text-sm font-semibold sm:h-10 sm:text-sm lg:h-[50px] lg:text-base"
              >
                Cek Hoaks Sekarang
              </Button>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, ease: easeOut, delay: 0.3 },
                scale: { duration: 0.6, ease: easeOut, delay: 0.3 },
                x: { duration: 0.6, ease: easeOut, delay: 0.3 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`relative flex items-center justify-center ${isLarge ? "justify-end" : "justify-center"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-health/20 blur-3xl rounded-full" />
                <Image
                  src="/images/sadarsehat-icon.png"
                  alt="SadarSehat Star"
                  width={500}
                  height={500}
                  className={`relative h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${isLarge ? "max-w-[442px]" : "aspect-[300/310]"}`}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

