"use client";

import { motion } from "motion/react";
import { Download, FileDown, Database, FileText } from "lucide-react";
import Button, { ButtonVariant, ButtonSize } from "@/app/_components/ui/Button";

export function EksporIntegrasi() {
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
          <Download className="text-emerald-health" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-teal-deep mb-2">
            Ekspor & Integrasi
          </h2>
          <p className="font-body text-gray-600 mb-4">
            Unduh laporan PDF/CSV, API untuk integrasi dengan Dinkes, RS, atau aplikasi JKN, dan ringkasan eksekutif 1 halaman.
          </p>
        </div>
      </div>

      {/* Export Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-soft-mint/50 rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-4">
            <FileDown className="text-emerald-health" size={24} />
            <h3 className="font-heading text-lg font-semibold text-teal-deep">
              Unduh Laporan
            </h3>
          </div>
          <p className="font-body text-sm text-gray-600 mb-4">
            Ekspor data dalam format PDF atau CSV untuk analisis lebih lanjut.
          </p>
          <div className="flex flex-row gap-4">
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Small}
              className="w-full"
            >
              <FileText size={16} className="mr-2" />
              Unduh PDF
            </Button>
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Small}
              className="w-full"
            >
              <Database size={16} className="mr-2" />
              Unduh CSV
            </Button>
          </div>
        </div>

        <div className="bg-emerald-health/10 rounded-xl p-6 border border-emerald-health/20">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-emerald-health" size={24} />
            <h3 className="font-heading text-lg font-semibold text-teal-deep">
              API Integrasi
            </h3>
          </div>
          <p className="font-body text-sm text-gray-600 mb-4">
            Integrasikan dengan sistem Dinkes, RS, atau aplikasi JKN melalui API.
          </p>
          <Button
            variant={ButtonVariant.Primary}
            size={ButtonSize.Small}
            className="w-full"
          >
            Lihat Dokumentasi API
          </Button>
        </div>

        <div className="bg-warm-sand rounded-xl p-6 border border-soft-mint">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-teal-deep" size={24} />
            <h3 className="font-heading text-lg font-semibold text-teal-deep">
              Ringkasan Eksekutif
            </h3>
          </div>
          <p className="font-body text-sm text-gray-600 mb-4">
            Unduh ringkasan eksekutif 1 halaman untuk presentasi cepat.
          </p>
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Small}
            className="w-full"
          >
            <Download size={16} className="mr-2" />
            Unduh Ringkasan
          </Button>
        </div>
      </div>

      {/* Integration Info */}
      <div className="bg-soft-mint/30 rounded-xl p-6 border border-soft-mint">
        <h3 className="font-heading text-lg font-semibold text-teal-deep mb-4">
          Sistem Terintegrasi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Dinkes Provinsi", "Rumah Sakit", "Aplikasi JKN"].map((system, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border border-soft-mint flex items-center gap-3"
            >
              <div className="bg-emerald-health/10 rounded-lg p-2">
                <Database className="text-emerald-health" size={20} />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-teal-deep">{system}</p>
                <p className="font-body text-xs text-gray-500">Aktif</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

