import Image from "next/image";
import { motion, easeOut } from "motion/react";
import { IntroHeading } from "./IntroHeading";

export function Intro() {
  return (
    <section id="intro" className="relative flex-col items-center bg-white text-center lg:pb-10">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col px-4 pt-38 sm:pt-38 lg:px-25 lg:pt-44">
        <div className="flex w-full flex-col items-center justify-between gap-20 max-sm:gap-14 lg:flex-row">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}
            className="group relative flex w-full justify-center lg:justify-start"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
              className="relative cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-health/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                alt="SadarSehat Promotion"
                src="/images/sadarsehat-icon.png"
                width={500}
                height={500}
                priority
                className="relative z-10 w-full transition-transform duration-300 lg:w-[500px]"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.4 }}
            className="flex w-full lg:max-w-[565px]"
          >
            <IntroHeading />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
