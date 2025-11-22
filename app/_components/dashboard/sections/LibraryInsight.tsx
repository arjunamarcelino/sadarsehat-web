"use client";

import { motion } from "motion/react";
import { BookOpen, Eye, CheckCircle } from "lucide-react";

export function LibraryInsight() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 border border-soft-mint shadow-sm"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-emerald-health/10 p-3 rounded-xl">
          <BookOpen className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Library Insight (Myth–Fact Trends)
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Hoaks yang paling banyak diverifikasi, fakta kesehatan yang sering dibaca, dan konten edukasi yang paling banyak diakses.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-soft-mint/50 rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="text-emerald-health" size={24} />
            <span className="font-body text-sm font-semibold text-teal-deep">Hoaks Diverifikasi</span>
          </div>
          <p className="font-heading text-3xl font-bold text-emerald-health mb-1">8,945</p>
          <p className="font-body text-xs text-gray-500">total verifikasi</p>
        </div>

        <div className="bg-emerald-health/10 rounded-xl p-6 border border-emerald-health/20">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="text-emerald-health" size={24} />
            <span className="font-body text-sm font-semibold text-teal-deep">Fakta Terbaca</span>
          </div>
          <p className="font-heading text-3xl font-bold text-emerald-health mb-1">24,567</p>
          <p className="font-body text-xs text-gray-500">total pembacaan</p>
        </div>

        <div className="bg-warm-sand rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="text-teal-deep" size={24} />
            <span className="font-body text-sm font-semibold text-teal-deep">Konten Edukasi</span>
          </div>
          <p className="font-heading text-3xl font-bold text-teal-deep mb-1">1,234</p>
          <p className="font-body text-xs text-gray-500">artikel tersedia</p>
        </div>
      </div>

      {/* Top Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
          <h3 className="font-heading text-lg font-semibold text-teal-deep mb-4">
            Top 5 Hoaks Paling Banyak Diverifikasi
          </h3>
          <div className="space-y-3">
            {[
              "Virus HIV ditularkan melalui keringat",
              "Minum air putih 8 gelas per hari wajib",
              "Vaksin COVID-19 mengubah DNA",
              "Makanan organik selalu lebih sehat",
              "Stres tidak mempengaruhi imunitas",
            ].map((hoax, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3 border border-soft-mint flex items-center gap-3"
              >
                <div className="bg-alert-orange/10 rounded-full p-1.5">
                  <span className="font-heading text-xs font-bold text-alert-orange">
                    {idx + 1}
                  </span>
                </div>
                <p className="font-body text-sm text-teal-deep flex-1">{hoax}</p>
                <span className="font-body text-xs text-gray-500">
                  {Math.floor(Math.random() * 500) + 200}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
          <h3 className="font-heading text-lg font-semibold text-teal-deep mb-4">
            Top 5 Konten Edukasi Paling Banyak Diakses
          </h3>
          <div className="space-y-3">
            {[
              "Panduan Vaksinasi Lengkap",
              "Mitos dan Fakta JKN",
              "Nutrisi Seimbang untuk Keluarga",
              "Kesehatan Ibu dan Anak",
              "Pencegahan Penyakit Menular",
            ].map((content, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3 border border-soft-mint flex items-center gap-3"
              >
                <div className="bg-emerald-health/10 rounded-full p-1.5">
                  <span className="font-heading text-xs font-bold text-emerald-health">
                    {idx + 1}
                  </span>
                </div>
                <p className="font-body text-sm text-teal-deep flex-1">{content}</p>
                <span className="font-body text-xs text-gray-500">
                  {Math.floor(Math.random() * 1000) + 500}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

