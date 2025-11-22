"use client";
import { motion, easeOut } from "motion/react";
import Image from "next/image";

export default function FactChecker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="border-soft-mint flex h-full flex-col rounded-3xl border bg-white p-6 lg:p-10"
    >
      <div className="flex w-full flex-col justify-between gap-[38px] md:flex-col md:gap-16 lg:flex-row lg:items-center">
        {/* Text Section */}
        <div className="text-left lg:pl-[35px]">
          <h3 className="text-black mb-[9px] text-2xl font-semibold sm:text-2xl lg:text-[32px]">
            AI Fact-Checker
          </h3>

          <p className="text-gray-500 text-sm sm:text-sm lg:text-[20px]">
            <span className="lg:font-semibold lg:italic">
              Periksa kebenaran informasi kesehatan
              <br className="sm:hidden" /> dalam hitungan detik.
            </span>{" "}
            AI mengidentifikasi hoaks, misleading, atau fakta <br className="sm:hidden" /> lalu memberikan penjelasan berbasis sumber resmi.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex w-full justify-center lg:justify-center">
          <Image
            src="/images/img-fact-checker.png"
            alt="AI Fact-Checker Illustration"
            width={850}
            height={600}
            sizes="(max-width: 1024px) 66vw, 850px"
            className="h-full w-2/3 object-fill lg:w-[850px] rounded-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
}
