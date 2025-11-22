"use client";

import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { AreaChart } from "../components/AreaChart";

// Dummy data for spike detection
const spikeData = [
  { label: "00:00", value: 12 },
  { label: "04:00", value: 15 },
  { label: "08:00", value: 18 },
  { label: "12:00", value: 25 },
  { label: "16:00", value: 42 },
  { label: "20:00", value: 38 },
  { label: "24:00", value: 35 },
];

export function EmergingThreat() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 lg:p-8 border border-soft-mint shadow-sm"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-alert-orange/10 p-3 rounded-xl">
          <AlertCircle className="text-alert-orange" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Emerging Threat Detection (AI Alert)
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Sistem AI mendeteksi pola misinformasi baru. &quot;Hoaks baru&quot; yang mulai sering muncul, klaim yang belum ada di library Myth–Fact, peringatan jika terjadi spike 300–500% dalam 24–48 jam, dan korelasi hoaks antartopik.
          </p>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="space-y-4 mb-6">
        {[
          {
            title: "Spike Detected: Topik Vaksin DPT",
            description: "Peningkatan 340% dalam 24 jam terakhir",
            severity: "high",
            time: "2 jam lalu",
          },
          {
            title: "Hoaks Baru: Klaim Obat Herbal",
            description: "Klaim baru yang belum ada di library",
            severity: "medium",
            time: "5 jam lalu",
          },
          {
            title: "Korelasi: JKN + Obat",
            description: "Pola misinformasi terkait JKN dan obat-obatan",
            severity: "low",
            time: "12 jam lalu",
          },
        ].map((alert, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 border-2 ${
              alert.severity === "high"
                ? "bg-alert-orange/10 border-alert-orange"
                : alert.severity === "medium"
                ? "bg-warm-sand border-alert-orange/50"
                : "bg-soft-mint/50 border-soft-mint"
            }`}
          >
            <div className="flex items-start gap-3">
              <AlertCircle
                className={`mt-0.5 ${
                  alert.severity === "high"
                    ? "text-alert-orange"
                    : alert.severity === "medium"
                    ? "text-alert-orange/70"
                    : "text-teal-deep"
                }`}
                size={20}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading text-sm font-semibold text-teal-deep">
                    {alert.title}
                  </h4>
                  <span className="font-body text-xs text-gray-500">{alert.time}</span>
                </div>
                <p className="font-body text-sm text-gray-600">{alert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
        <div className="mb-4">
          <h3 className="font-heading text-sm font-semibold text-teal-deep mb-1">
            Spike Detection - 24 Jam Terakhir
          </h3>
          <p className="font-body text-xs text-gray-500">Deteksi lonjakan hoaks baru</p>
        </div>
        <AreaChart data={spikeData} color="#FF914D" height={200} />
      </div>
    </motion.section>
  );
}

