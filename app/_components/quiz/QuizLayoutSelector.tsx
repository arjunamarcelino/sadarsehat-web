"use client";

import { LayoutType, LayoutConfig } from "./types";
import { Smartphone, Tablet, Tv, Monitor } from "lucide-react";
import { cn } from "@/app/_libs/utils";

const layoutConfigs: LayoutConfig[] = [
  {
    type: "mobile",
    label: "Mobile",
    width: "375px",
    height: "667px",
    frameClass: "rounded-[2.5rem]",
  },
  {
    type: "tablet",
    label: "Tablet",
    width: "768px",
    height: "1024px",
    frameClass: "rounded-2xl",
  },
  {
    type: "tv-interactive",
    label: "TV Interaktif",
    width: "1920px",
    height: "1080px",
    frameClass: "rounded-lg",
  },
  {
    type: "desktop",
    label: "Desktop",
    width: "1440px",
    height: "900px",
    frameClass: "rounded-lg",
  },
];

interface QuizLayoutSelectorProps {
  selectedLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

export function QuizLayoutSelector({
  selectedLayout,
  onLayoutChange,
}: QuizLayoutSelectorProps) {
  const getIcon = (type: LayoutType) => {
    switch (type) {
      case "mobile":
        return <Smartphone size={20} />;
      case "tablet":
        return <Tablet size={20} />;
      case "tv-interactive":
        return <Tv size={20} />;
      case "desktop":
        return <Monitor size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-soft-mint shadow-sm">
      <h3 className="font-heading text-sm font-semibold text-teal-deep mb-3">
        Pilih Layout Tampilan
      </h3>
      <div className="flex flex-wrap gap-3">
        {layoutConfigs.map((config) => {
          const isSelected = selectedLayout === config.type;
          return (
            <button
              key={config.type}
              onClick={() => onLayoutChange(config.type)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-200",
                isSelected
                  ? "bg-emerald-health text-white ring-2 ring-emerald-health"
                  : "bg-soft-mint text-teal-deep hover:bg-emerald-health/20 hover:text-emerald-health border border-soft-mint"
              )}
            >
              {getIcon(config.type)}
              <span>{config.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { layoutConfigs };

