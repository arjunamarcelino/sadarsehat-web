"use client";

import { motion } from "motion/react";
import { BarChart3, FileText, ImageIcon, File } from "lucide-react";
import { PieChart } from "../components/PieChart";

export function StatistikVerifikasi() {
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
          <BarChart3 className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Statistik Verifikasi AI (General Dashboard Metrics)
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Total konten diverifikasi, persentase hoaks vs fakta, format input (teks/gambar/PDF), lama proses verifikasi rata-rata, dan sumber device (mobile/web/kiosk).
          </p>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-emerald-health/10 to-emerald-health/5 rounded-xl p-6 border border-emerald-health/20">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="text-emerald-health" size={24} />
            <span className="font-body text-sm font-semibold text-teal-deep">Total Verifikasi</span>
          </div>
          <p className="font-heading text-3xl font-bold text-emerald-health mb-1">45,678</p>
          <p className="font-body text-xs text-gray-500">konten diverifikasi</p>
        </div>

        <div className="bg-soft-mint/50 rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-sm font-semibold text-teal-deep">Hoaks vs Fakta</span>
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-body text-xs text-gray-600">Hoaks</span>
                <span className="font-body text-xs font-semibold text-alert-orange">68%</span>
              </div>
              <div className="w-full bg-soft-mint rounded-full h-2">
                <div className="bg-alert-orange h-2 rounded-full" style={{ width: "68%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-body text-xs text-gray-600">Fakta</span>
                <span className="font-body text-xs font-semibold text-emerald-health">32%</span>
              </div>
              <div className="w-full bg-soft-mint rounded-full h-2">
                <div className="bg-emerald-health h-2 rounded-full" style={{ width: "32%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-warm-sand rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-sm font-semibold text-teal-deep">Rata-rata Waktu</span>
          </div>
          <p className="font-heading text-3xl font-bold text-teal-deep mb-1">2.3s</p>
          <p className="font-body text-xs text-gray-500">proses verifikasi</p>
        </div>

        <div className="bg-soft-mint/50 rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-sm font-semibold text-teal-deep">Format Input</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="text-emerald-health" size={16} />
              <span className="font-body text-xs text-gray-600">Teks: 65%</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageIcon className="text-emerald-health" size={16} />
              <span className="font-body text-xs text-gray-600">Gambar: 28%</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="text-emerald-health" size={16} />
              <span className="font-body text-xs text-gray-600">PDF: 7%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Device Source */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
        <h3 className="font-heading text-lg font-semibold text-teal-deep mb-4">
          Sumber Device
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <PieChart
              data={[
                { label: "Mobile", value: 52, color: "#0BB586" },
                { label: "Web", value: 35, color: "#006D77" },
                { label: "Kiosk", value: 13, color: "#FF914D" },
              ]}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            {[
              { label: "Mobile", value: "52%", colorClass: "text-emerald-health" },
              { label: "Web", value: "35%", colorClass: "text-teal-deep" },
              { label: "Kiosk", value: "13%", colorClass: "text-alert-orange" },
            ].map((device, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 border border-soft-mint"
              >
                <p className="font-body text-sm text-gray-600 mb-2">{device.label}</p>
                <p className={`font-heading text-2xl font-bold ${device.colorClass}`}>
                  {device.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

