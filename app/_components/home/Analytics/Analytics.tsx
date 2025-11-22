"use client";
import { motion, easeOut } from "motion/react";
import { DesktopGraphic, MobileGraphic } from "./AnalyticsGraphic";

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: easeOut, delay: 0.4 }}
      className="border-soft-mint flex h-full flex-col-reverse rounded-3xl border bg-white p-6 max-sm:gap-[38px] sm:flex-col-reverse lg:flex-col lg:p-10"
    >
      <div className="flex w-full items-center justify-center">
        <DesktopGraphic />
        <MobileGraphic />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: easeOut, delay: 0.7 }}
        className="text-left lg:mt-6 lg:max-w-[670px]"
      >
        <h3 className="font-heading text-black mb-[9px] text-2xl font-semibold sm:text-2xl lg:text-[32px]">
          Dashboard Analitik Nasional
        </h3>
        <p className="font-body text-gray-500 text-sm sm:text-sm lg:text-[20px]">
          <span className="lg:font-semibold lg:italic">
          Pantau tren hoaks kesehatan di berbagai wilayah.{" "}
          </span>
          Mendukung pemerintah dan faskes dalam mengambil keputusan berbasis data.{" "}
        </p>
      </motion.div>
    </motion.div>
  );
}
