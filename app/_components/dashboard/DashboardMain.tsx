"use client";

import { TrendHoaks } from "./sections/TrendHoaks";
import { PetaPersebaran } from "./sections/PetaPersebaran";
import { SkorLiterasi } from "./sections/SkorLiterasi";
import { InsightFaskes } from "./sections/InsightFaskes";
import { EmergingThreat } from "./sections/EmergingThreat";
import { LibraryInsight } from "./sections/LibraryInsight";
import { StatistikVerifikasi } from "./sections/StatistikVerifikasi";
import { RekomendasiKebijakan } from "./sections/RekomendasiKebijakan";
import { EksporIntegrasi } from "./sections/EksporIntegrasi";

export function DashboardMain() {
  return (
    <div className="container mx-auto px-4 lg:px-[100px] py-8 max-w-[1600px]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-teal-deep">
            Dashboard Analitik SadarSehat
          </h1>
        </div>
        <p className="font-body text-lg text-gray-600 max-w-4xl">
          Insight real-time untuk memetakan hoaks kesehatan, literasi masyarakat, dan risiko informasi — skala nasional.
        </p>
        <p className="font-body text-base text-gray-500 mt-2 max-w-4xl">
          Dashboard ini dirancang agar pemerintah, fasilitas kesehatan, dan lembaga terkait dapat melihat kondisi misinformasi kesehatan secara menyeluruh dan mengambil tindakan berbasis data.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        <TrendHoaks />
        <PetaPersebaran />
        <SkorLiterasi />
        <InsightFaskes />
        <EmergingThreat />
        <LibraryInsight />
        <StatistikVerifikasi />
        <RekomendasiKebijakan />
        <EksporIntegrasi />
      </div>
    </div>
  );
}

