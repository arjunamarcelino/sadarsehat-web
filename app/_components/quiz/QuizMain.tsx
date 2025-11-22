"use client";

import { useState } from "react";
import { QuizLayoutSelector } from "./QuizLayoutSelector";
import { QuizDisplay } from "./QuizDisplay";
import { LayoutType } from "./types";

export function QuizMain() {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>("mobile");

  return (
    <div className="h-full flex px-4 lg:px-[100px]">
      {/* Left Side - Title and Layout Selector */}
      <div className="w-1/2 border-r border-soft-mint flex flex-col pr-6 lg:pr-8 pt-6 lg:pt-8 pb-6 lg:pb-8 overflow-hidden">
        <div className="mb-6 flex-shrink-0">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-teal-deep mb-2">
            Kuis Hoaks atau Fakta?
          </h1>
          <p className="font-body text-base lg:text-lg text-gray-600">
            Pilih layout tampilan dan uji pengetahuan Anda tentang kesehatan
          </p>
        </div>

        <div className="mb-4 flex-shrink-0">
          <QuizLayoutSelector
            selectedLayout={selectedLayout}
            onLayoutChange={setSelectedLayout}
          />
        </div>

        {/* Info */}
        <div className="bg-white rounded-xl p-4 border border-soft-mint shadow-sm flex-shrink-0">
          <div className="text-left">
            <p className="font-body text-sm text-teal-deep font-semibold mb-1">
              Bank soal: 10 pertanyaan
            </p>
            <p className="font-body text-xs text-gray-500">
              Setiap kali Anda menjawab, soal akan diacak dari bank soal
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Device and Quiz */}
      <div className="w-1/2 flex items-center justify-center pl-6 lg:pl-8 overflow-hidden">
        <QuizDisplay layout={selectedLayout} />
      </div>
    </div>
  );
}

