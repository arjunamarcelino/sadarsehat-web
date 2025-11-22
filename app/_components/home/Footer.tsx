"use client";
import { easeOut, motion } from "motion/react";
import Image from "next/image";
import { FooterContactItem } from "./FooterContactItem";
import { FooterLinkGroup } from "./FooterLinkGroup";


export default function Footer() {
  return (
    <div className="relative flex w-full max-w-[1800px] flex-col overflow-hidden">
      <motion.footer
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="border-soft-mint relative w-full overflow-hidden border-t bg-white"
      >
        <div className="relative z-[2] mx-auto px-4 py-6 sm:px-4 sm:py-6 lg:px-25 lg:pt-25 lg:pb-[42px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-12 sm:gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* LEFT COLUMN */}
            <div className="flex max-w-[480px] flex-col gap-4 sm:gap-4 lg:gap-5">
              <div className="flex items-center">
                <Image
                  src="/images/sadarsehat-logo.png"
                  alt="SadarSehat Logo"
                  width={150}
                  height={80}
                  className="h-[40px] w-[108px] object-cover sm:h-[40px] sm:w-[108px] lg:h-[50px] lg:w-[132px]"
                />
              </div>

              <p className="font-body text-dark text-xs leading-relaxed sm:text-xs lg:py-[2px] lg:text-sm">
                SadarSehat adalah platform AI yang membantu masyarakat memverifikasi informasi kesehatan dengan cepat dan akurat, melindungi dari hoaks dan misinformasi melalui teknologi Agentic AI.
              </p>

              <div className="text-dark flex flex-col gap-3 text-xs max-sm:mt-2 sm:text-xs lg:flex-col lg:text-base">
                <div className="flex gap-4 sm:flex-col-reverse sm:gap-4 lg:flex-col lg:gap-3">
                  <FooterContactItem
                    icon="/images/ic-email.svg"
                    alt="Mail"
                    text="info@sadarsehat.id"
                    href="mailto:info@sadarsehat.id"
                  />

                  <FooterContactItem
                    icon="/images/ic-phone.svg"
                    alt="Call"
                    text="+62 812 3456 7890"
                  />
                </div>

                <FooterContactItem
                  icon="/images/ic-location.svg"
                  alt="Location"
                  text="Jakarta, Indonesia"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col items-start gap-10 lg:mt-11.5 lg:gap-14">
              <div className="grid grid-cols-2 gap-6 lg:gap-[78px]">
                <FooterLinkGroup
                  title="Legal"
                  links={[
                    { label: "Kebijakan Privasi", href: "/" },
                    { label: "Syarat dan Ketentuan", href: "/" },
                  ]}
                />

                <FooterLinkGroup
                  title="Dukungan"
                  links={[{ label: "Hubungi Kami", href: "/#contact" }]}
                />
              </div>
            </div>
          </motion.div>

          <hr className="mt-10 border-t border-soft-mint" />

          {/* BOTTOM SECTION */}
          <div className="mt-4 flex flex-col gap-4">
            <section className="flex flex-row justify-between">
              <p className="text-dark-medium-dark text-[10px] max-sm:font-medium sm:text-[10px] lg:text-sm">
                © 2025 SadarSehat. Hak cipta dilindungi.
              </p>
            </section>
          </div>
        </div>

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-emerald-health/15 absolute top-[120%] left-1/2 h-[700px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] max-md:top-[110%]" />
        </div>
      </motion.footer>
    </div>
  );
}
