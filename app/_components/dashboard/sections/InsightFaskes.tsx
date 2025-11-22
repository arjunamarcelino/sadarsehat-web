"use client";

import { motion } from "motion/react";
import { Hospital, Activity } from "lucide-react";

export function InsightFaskes() {
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
          <Hospital className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Insight Fasilitas Kesehatan
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Bersumber dari verifikasi user yang dilakukan di sekitar faskes atau lewat kiosk edukasi. Hoaks yang paling sering ditanyakan pasien, tren pertanyaan per puskesmas/RS, dan kebutuhan konten edukasi prioritas untuk faskes.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Puskesmas Aktif", value: "1,234", icon: Hospital },
          { label: "RS Terintegrasi", value: "89", icon: Activity },
          { label: "Pertanyaan/Hari", value: "456", icon: Activity },
          { label: "Kiosk Aktif", value: "567", icon: Hospital },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-soft-mint/50 rounded-lg p-4 border border-soft-mint"
          >
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className="text-emerald-health" size={20} />
              <span className="font-body text-xs text-gray-600">{stat.label}</span>
            </div>
            <p className="font-heading text-2xl font-bold text-teal-deep">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Top Questions */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border-2 border-dashed border-emerald-health/30">
        <h3 className="font-heading text-lg font-semibold text-teal-deep mb-4">
          Topik Hoaks Paling Sering Ditanyakan di Faskes
        </h3>
        <div className="space-y-3">
          {[
            "Apakah vaksin COVID-19 aman untuk ibu hamil?",
            "Benarkah obat herbal lebih efektif dari obat dokter?",
            "Apakah JKN bisa digunakan untuk semua penyakit?",
          ].map((question, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border border-soft-mint flex items-start gap-3"
            >
              <div className="bg-emerald-health/10 rounded-full p-2 mt-0.5">
                <span className="font-heading text-sm font-bold text-emerald-health">
                  {idx + 1}
                </span>
              </div>
              <p className="font-body text-sm text-teal-deep flex-1">{question}</p>
              <span className="font-body text-xs text-gray-500">
                {Math.floor(Math.random() * 200) + 50}x
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

