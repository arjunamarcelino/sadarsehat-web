"use client";
import { easeOut, motion } from "motion/react";
import Image from "next/image";

export default function Benefit() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="w-full max-w-[1800px] px-4 text-start sm:px-4 sm:text-start lg:px-25 lg:text-center">
        {/* === Title === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: easeOut }}
        >
          <h2 className="font-heading text-dark text-start text-[44px] leading-tight font-semibold sm:text-start sm:text-[44px] lg:text-center lg:text-[62px]">
            Dampak Nyata{" "}
            <span className="text-emerald-health text-start text-[44px] leading-tight font-semibold sm:text-start sm:text-[44px] lg:text-center lg:text-[62px]">
              SadarSehat{" "}
            </span>{" "}
            Untuk Ekosistem Kesehatan
          </h2>

          <p className="font-body text-dark-medium-dark mt-4 text-base sm:text-base lg:text-[22px]">
            SadarSehat membantu masyarakat, tenaga kesehatan, dan pembuat kebijakan
            melawan hoaks kesehatan dengan informasi yang akurat, terverifikasi, dan mudah
            dipahami, sehingga keputusan kesehatan menjadi lebih aman dan bertanggung jawab.
          </p>
        </motion.div>

        {/* === Cards Grid === */}
        <div className="mt-16 grid w-full justify-items-center gap-8 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BENEFIT_CARDS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: easeOut,
              }}
              className="flex aspect-[343/350] w-full flex-col items-center text-center"
            >
              {/* === Card === */}
              <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[linear-gradient(25deg,_#FFFFFF_0%,_#B2F2E8_45%,_#0BB586_100%)] shadow-sm">
                <div
                  className="absolute inset-0 z-[0]"
                  style={{
                    backgroundImage: "url('/images/img-join-pattern.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.08,
                  }}
                />

                <div className="absolute top-6 left-6 z-[4]">
                  <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white p-[6px] shadow-lg">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </span>
                </div>

                <Image
                  src={item.img}
                  alt={item.text}
                  fill
                  className="absolute inset-0 z-[1] h-full w-full object-cover"
                />

                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/65 via-black/30 to-transparent" />

                <div className="absolute right-0 bottom-0 left-0 z-[3] p-6">
                  <p className="text-left text-base leading-tight font-semibold text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFIT_CARDS = [
  {
    img: "/images/img-benefit-1.png",
    text: "Peserta JKN dan masyarakat umum yang ingin memastikan informasi kesehatannya benar dan dapat dipercaya.",
    icon: "/images/ic-benefit-1.svg",
  },
  {
    img: "/images/img-benefit-2.png",
    text: "Tenaga kesehatan yang membutuhkan dukungan edukasi terverifikasi untuk mengurangi klarifikasi hoaks berulang.",
    icon: "/images/ic-benefit-2.svg",
  },
  {
    img: "/images/img-benefit-3.png",
    text: "Fasilitas kesehatan dan institusi yang ingin memantau tren misinformasi dan meningkatkan literasi kesehatan di komunitasnya.",
    icon: "/images/ic-benefit-3.svg",
  },
  {
    img: "/images/img-benefit-4.png",
    text: "Pemerintah dan pengambil kebijakan yang memerlukan insight data untuk memperkuat ketahanan ekosistem kesehatan digital.",
    icon: "/images/ic-benefit-4.svg",
  },
];
