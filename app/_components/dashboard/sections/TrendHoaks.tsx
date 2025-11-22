"use client";

import { motion } from "motion/react";
import { TrendingUp, AlertTriangle } from "lucide-react";
import { LineChart } from "../components/LineChart";

// Dummy data for trend
const trendData = [
  { label: "Sen", value: 45 },
  { label: "Sel", value: 52 },
  { label: "Rab", value: 48 },
  { label: "Kam", value: 61 },
  { label: "Jum", value: 55 },
  { label: "Sab", value: 68 },
  { label: "Min", value: 72 },
];

export function TrendHoaks() {
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
          <TrendingUp className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Tren Hoaks Kesehatan Nasional
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Grafik kenaikan/penurunan topik hoaks setiap hari/minggu/bulan, topik paling sering ditemukan, dan lonjakan mendadak (spike detection).
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
        <div className="mb-4">
          <h3 className="font-heading text-sm font-semibold text-teal-deep mb-1">
            Tren 7 Hari Terakhir
          </h3>
          <p className="font-body text-xs text-gray-500">Jumlah hoaks terdeteksi per hari</p>
        </div>
        <LineChart data={trendData} color="#0BB586" height={250} />
      </div>

      {/* Top Topics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Vaksin", "COVID-19", "Herbal", "JKN"].map((topic, idx) => (
          <div
            key={idx}
            className="bg-soft-mint/50 rounded-lg p-4 border border-soft-mint"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm font-semibold text-teal-deep">{topic}</span>
              <AlertTriangle className="text-alert-orange" size={16} />
            </div>
            <p className="font-body text-2xl font-bold text-emerald-health">
              {Math.floor(Math.random() * 500) + 100}
            </p>
            <p className="font-body text-xs text-gray-500 mt-1">hoaks terdeteksi</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

