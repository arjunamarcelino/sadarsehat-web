"use client";

import { motion } from "motion/react";
import { CheckCircle2, Link2, FileText, MessageSquare } from "lucide-react";

export function HowToUse() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Tulis Pertanyaan",
      description: "Ketik pertanyaan atau informasi kesehatan yang ingin Anda verifikasi",
    },
    {
      icon: Link2,
      title: "Paste Link",
      description: "Salin dan tempelkan link artikel atau postingan yang ingin dicek",
    },
    {
      icon: FileText,
      title: "Upload File",
      description: "Unggah dokumen, gambar, atau screenshot yang berisi informasi kesehatan",
    },
    {
      icon: CheckCircle2,
      title: "Dapatkan Hasil",
      description: "AI akan menganalisis dan memberikan verifikasi akurat dalam hitungan detik",
    },
  ];

  return (
    <div className="flex h-full flex-col p-5 lg:p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col h-full"
      >
        <div className="mb-3 lg:mb-4 flex-shrink-0">
          <h1 className="font-heading text-2xl lg:text-3xl text-emerald-health mb-1.5 font-semibold">
            Verifikasi Hoaks
          </h1>
          <p className="font-body text-sm lg:text-base text-dark leading-relaxed">
            Gunakan AI untuk memverifikasi informasi kesehatan dengan cepat dan akurat. 
            Lindungi diri Anda dari hoaks dan misinformasi.
          </p>
        </div>

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <h2 className="font-heading text-lg lg:text-xl text-teal-deep mb-3 flex-shrink-0 font-semibold">
            Cara Menggunakan
          </h2>
          
          <div className="flex-1 flex flex-col justify-between space-y-2.5 lg:space-y-2.5 min-h-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-2.5 lg:p-3 rounded-lg bg-soft-mint/30 hover:bg-soft-mint/50 transition-all duration-200 flex-shrink-0 border border-soft-mint/50 hover:border-soft-mint"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-emerald-health flex items-center justify-center">
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-heading text-sm lg:text-base text-teal-deep mb-0.5 font-medium">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs lg:text-sm text-dark leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 lg:mt-4 p-2.5 lg:p-3 rounded-lg bg-warm-sand/50 border border-soft-mint flex-shrink-0">
          <p className="font-body text-xs lg:text-sm text-dark leading-relaxed">
            <span className="font-semibold text-emerald-health">Tips:</span>{" "}
            Semakin lengkap informasi yang Anda berikan, semakin akurat hasil verifikasinya.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

