"use client";

import { motion } from "motion/react";
import { Map } from "lucide-react";

export function PetaPersebaran() {
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
          <Map className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Peta Persebaran Hoaks (Heatmap Indonesia)
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Peta provinsi/kabupaten dengan intensitas hoaks berbeda, distribusi hoaks berdasarkan wilayah, dan pusat penyebaran (hotspot).
          </p>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border-2 border-dashed border-emerald-health/30">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Map className="text-emerald-health mx-auto mb-3" size={64} />
            <p className="font-body text-teal-deep font-semibold">Peta Heatmap Indonesia</p>
            <p className="font-body text-sm text-gray-500 mt-1">Visualisasi peta persebaran hoaks akan ditampilkan di sini</p>
          </div>
        </div>
      </div>

      {/* Top Provinces */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Jawa Barat", "DKI Jakarta", "Jawa Timur"].map((province, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-alert-orange/10 to-alert-orange/5 rounded-lg p-4 border border-alert-orange/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm font-semibold text-teal-deep">{province}</span>
              <div className="w-3 h-3 bg-alert-orange rounded-full"></div>
            </div>
            <p className="font-body text-xl font-bold text-alert-orange">
              {Math.floor(Math.random() * 300) + 200}
            </p>
            <p className="font-body text-xs text-gray-500 mt-1">hotspot hoaks</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

