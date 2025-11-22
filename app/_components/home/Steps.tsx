"use client";
import { useEffect, useState, useRef } from "react";
import { motion, easeOut } from "motion/react";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const steps = [
  {
    id: 1,
    title: "Unggah Konten",
    description: "Teks, gambar, screenshot, atau dokumen.",
  },
  {
    id: 2,
    title: "Parsing & OCR",
    description: "AI membaca seluruh isi konten secara detail.",
  },
  {
    id: 3,
    title: "Deteksi Kebenaran",
    description: "Klasifikasi: Hoaks, Misleading, Fakta, atau Perlu Klarifikasi.",
  },
  {
    id: 4,
    title: "RAG Retrieval",
    description: "AI mencari referensi dari Kemenkes, BPJS, WHO, jurnal medis, dan sumber terpercaya lainnya.",
  },
  {
    id: 5,
    title: "Penalaran AI",
    description: "Mengolah informasi menjadi pemahaman yang logis dan ringkas.",
  },
  {
    id: 6,
    title: "Penjelasan Edukatif",
    description: "Hasil verifikasi disampaikan dalam bahasa yang mudah dimengerti.",
  },
];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Set active step based on whichever section's top is closest to screen midpoint
  useEffect(() => {
    function updateActiveStep() {
      const midpoint = window.innerHeight * 0.25;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - midpoint);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    }

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <section id="how-it-works" className="relative w-full overflow-hidden bg-white py-25">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-4 lg:px-[100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.3 }}
          className="mx-auto text-center lg:mb-10"
        >
          <h2 className="font-heading text-black mb-4 text-start text-[44px] leading-tight font-semibold sm:mb-4 sm:text-start sm:text-[44px] lg:mb-7 lg:text-center lg:text-[62px]">
            Bagimana Cara Kerja <br className="hidden sm:block" />
            <span className="text-emerald-health">SadarSehat?</span>
          </h2>

          <p className="font-body text-gray-500 text-left text-base sm:text-left sm:text-base lg:text-center lg:text-[22px] max-w-[900px] mx-auto">
            Di balik tampilan sederhana, SadarSehat mengoperasikan rangkaian agen AI yang bekerja secara otomatis dan terpadu untuk memastikan hasil faktual yang akurat dan terpercaya.
          </p>
        </motion.div>

        {/* Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.5 }}
          className="flex w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-white sm:rounded-3xl lg:flex-row lg:border lg:border-soft-mint lg:shadow-sm"
        >
          {/* LEFT – Timeline */}
          <div className="flex w-full flex-col lg:w-1/2">
            {!isMobile ? (
              <Timeline
                sx={{
                  "& .MuiTimelineItem-root": {
                    minHeight: "unset",
                    "&::before": { display: "none" },
                  },
                  "& .MuiTimelineContent-root": { px: 6, py: 6 },
                  "& .MuiTimelineSeparator-root": {
                    marginLeft: "74px",
                    transform: "translateY(50px)",
                  },
                }}
              >
                {steps.map((step, index) => (
                  <TimelineItem key={step.id}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          bgcolor: activeStep === index ? "#0BB586" : "#E6E6E6",
                          transition: "all 0.35s",
                          boxShadow:
                            activeStep === index
                              ? "0 0 0 4px rgba(11,181,134,0.25)"
                              : "0 0 0 4px rgba(230,230,230,0.25)",
                        }}
                      />

                      {index < steps.length - 1 && (
                        <TimelineConnector
                          sx={{
                            // ✅ Only connector directly behind active step is active
                            bgcolor: activeStep - 1 === index ? "#0BB586" : "#E6E6E6",
                            transition: "background-color 0.35s",
                          }}
                        />
                      )}
                    </TimelineSeparator>

                    <TimelineContent
                      ref={(el) => {
                        stepRefs.current[index] = el;
                      }}
                      sx={{ cursor: "default" }}
                    >
                      <div className="mb-6 flex flex-row items-start gap-[26px]">
                        <div
                          className={`h-[27px] w-[80px] flex-shrink-0 rounded-full border py-[4.5px] text-center text-xs font-semibold transition-all ${
                            activeStep === index
                              ? "border-emerald-health bg-emerald-health text-white"
                              : "border-soft-mint bg-white text-gray-500"
                          }`}
                        >
                          Langkah {step.id}
                        </div>

                        <div className="flex flex-col">
                          <h3
                            className={`font-heading mb-[3px] text-base font-semibold transition-colors ${
                              activeStep === index ? "text-black" : "text-gray-500"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`font-body text-sm leading-snug font-medium transition-colors lg:max-w-[370px] ${
                              activeStep === index ? "text-gray-500" : "text-gray-500"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            ) : (
              <div className="flex flex-col gap-6">
                <Timeline
                  sx={{
                    "& .MuiTimelineItem-root": {
                      minHeight: "unset",
                      "&::before": { display: "none" },
                    },
                    "& .MuiTimelineContent-root": { px: 6, py: 6 },
                    "& .MuiTimelineSeparator-root": {
                      marginLeft: "-12px",
                      transform: "translateY(50px)",
                    },
                  }}
                >
                  {steps.map((step, index) => (
                    <TimelineItem key={step.id}>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            bgcolor: activeStep === index ? "#0BB586" : "#E6E6E6",
                            transition: "all 0.35s",
                            boxShadow:
                              activeStep === index
                                ? "0 0 0 4px rgba(11,181,134,0.25)"
                                : "0 0 0 4px rgba(230,230,230,0.25)",
                          }}
                        />

                        {index < steps.length - 1 && (
                          <TimelineConnector
                            sx={{
                              // ✅ Only connector directly behind active step is active
                              bgcolor: activeStep - 1 === index ? "#0BB586" : "#E6E6E6",
                              transition: "background-color 0.35s",
                            }}
                          />
                        )}
                      </TimelineSeparator>

                      <TimelineContent
                        ref={(el) => {
                          stepRefs.current[index] = el;
                        }}
                        sx={{ cursor: "default" }}
                      >
                        <div className="mt-2 flex flex-col items-start gap-4">
                          <div
                            className={`h-[27px] w-[59px] flex-shrink-0 rounded-full border py-[4.5px] text-center text-[10px] font-semibold transition-all ${
                              activeStep === index
                                ? "border-emerald-health bg-emerald-health text-white"
                                : "border-soft-mint bg-white text-gray-500"
                            }`}
                          >
                            Step {step.id}
                          </div>

                          <div className="flex flex-col">
                            <h3
                              className={`font-heading text-sm font-semibold transition-colors ${
                                activeStep === index ? "text-black" : "text-gray-500"
                              }`}
                            >
                              {step.title}
                            </h3>
                            <p
                              className={`font-body mt-1 text-xs leading-snug font-medium transition-colors ${
                                activeStep === index ? "text-gray-500" : "text-gray-500"
                              }`}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex h-[300px] w-[300px] items-center justify-center pt-4 sm:w-[300px] lg:w-1/2">
            <Image
              src="/images/img-steps.png"
              alt="SadarSehat"
              width={500}
              height={500}
              className="relative z-[1] object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
