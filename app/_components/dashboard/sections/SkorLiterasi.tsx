"use client";

import { motion } from "motion/react";
import { Brain, Award } from "lucide-react";
import { BarChart } from "../components/BarChart";

// Dummy data for literacy scores
const literacyData = [
  { label: "DKI Jakarta", value: 78 },
  { label: "Jawa Barat", value: 72 },
  { label: "Jawa Timur", value: 70 },
  { label: "Yogyakarta", value: 75 },
  { label: "Bali", value: 73 },
  { label: "Sumatera Utara", value: 68 },
];

export function SkorLiterasi() {
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
          <Brain className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Skor Literasi Kesehatan Publik
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Berdasarkan hasil kuis &quot;Hoaks atau Fakta?&quot; dari masyarakat atau kiosk puskesmas. Nilai rata-rata literasi tiap wilayah, topik yang sering salah dijawab, dan tingkat pemahaman berdasarkan kelompok usia/sosial.
          </p>
        </div>
      </div>

      {/* Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-emerald-health/10 to-emerald-health/5 rounded-xl p-6 border border-emerald-health/20">
          <div className="flex items-center gap-3 mb-3">
            <Award className="text-emerald-health" size={24} />
            <span className="font-body text-sm font-semibold text-teal-deep">Skor Nasional</span>
          </div>
          <p className="font-heading text-4xl font-bold text-emerald-health mb-1">72.5</p>
          <p className="font-body text-xs text-gray-500">dari 100</p>
        </div>

        <div className="bg-soft-mint/50 rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="text-teal-deep" size={24} />
            <span className="font-body text-sm font-semibold text-teal-deep">Total Partisipan</span>
          </div>
          <p className="font-heading text-4xl font-bold text-teal-deep mb-1">12,450</p>
          <p className="font-body text-xs text-gray-500">pengguna aktif</p>
        </div>

        <div className="bg-warm-sand rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-sm font-semibold text-teal-deep">Topik Sulit</span>
          </div>
          <p className="font-heading text-2xl font-bold text-alert-orange mb-1">Vaksin</p>
          <p className="font-body text-xs text-gray-500">45% salah menjawab</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
        <div className="mb-4">
          <h3 className="font-heading text-sm font-semibold text-teal-deep mb-1">
            Skor Literasi per Provinsi
          </h3>
          <p className="font-body text-xs text-gray-500">Rata-rata skor literasi kesehatan</p>
        </div>
        <BarChart data={literacyData} color="#0BB586" height={250} />
      </div>
    </motion.section>
  );
}

