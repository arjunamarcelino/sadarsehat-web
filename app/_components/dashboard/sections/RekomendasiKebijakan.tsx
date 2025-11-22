"use client";

import { motion } from "motion/react";
import { Lightbulb, ArrowRight } from "lucide-react";

export function RekomendasiKebijakan() {
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
          <Lightbulb className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Rekomendasi Kebijakan Berbasis AI
          </h2>
          <p className="font-body text-gray-600 mb-4">
            AI merangkum insight dan menyarankan tindakan. Contoh: &quot;Luncurkan edukasi terkait vaksin DPT di Jawa Barat minggu ini&quot;, &quot;Topik misleading tentang obat herbal meningkat 240%&quot;, &quot;Tambahkan konten gizi anak di library edukasi&quot;.
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {[
          {
            priority: "high",
            title: "Luncurkan Edukasi Vaksin DPT di Jawa Barat",
            description: "Spike 340% dalam 24 jam terakhir. Rekomendasi: Kampanye edukasi intensif di Jawa Barat minggu ini.",
            action: "Prioritas Tinggi",
          },
          {
            priority: "medium",
            title: "Topik Misleading Obat Herbal Meningkat 240%",
            description: "Peningkatan signifikan dalam misinformasi tentang obat herbal. Rekomendasi: Perkuat konten edukasi tentang penggunaan obat herbal yang aman.",
            action: "Perlu Tindakan",
          },
          {
            priority: "low",
            title: "Tambahkan Konten Gizi Anak di Library",
            description: "Berdasarkan analisis permintaan, konten tentang gizi anak sangat diminati namun masih terbatas. Rekomendasi: Ekspansi konten edukasi gizi anak.",
            action: "Pertimbangkan",
          },
        ].map((rec, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 border-2 ${
              rec.priority === "high"
                ? "bg-alert-orange/10 border-alert-orange"
                : rec.priority === "medium"
                ? "bg-warm-sand border-alert-orange/50"
                : "bg-soft-mint/50 border-soft-mint"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2 rounded-lg ${
                  rec.priority === "high"
                    ? "bg-alert-orange/20"
                    : rec.priority === "medium"
                    ? "bg-alert-orange/10"
                    : "bg-emerald-health/10"
                }`}
              >
                <Lightbulb
                  className={
                    rec.priority === "high"
                      ? "text-alert-orange"
                      : rec.priority === "medium"
                      ? "text-alert-orange/70"
                      : "text-emerald-health"
                  }
                  size={24}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading text-lg font-semibold text-teal-deep">
                    {rec.title}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      rec.priority === "high"
                        ? "bg-alert-orange text-white"
                        : rec.priority === "medium"
                        ? "bg-alert-orange/20 text-alert-orange"
                        : "bg-emerald-health/20 text-emerald-health"
                    }`}
                  >
                    {rec.action}
                  </span>
                </div>
                <p className="font-body text-sm text-gray-600 mb-3">{rec.description}</p>
                <button className="flex items-center gap-2 text-emerald-health font-body text-sm font-semibold hover:underline">
                  Lihat Detail
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

