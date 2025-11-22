import { easeOut } from "motion";
import { motion } from "motion/react";
import Image from "next/image";

export function DesktopGraphic() {
  return (
    <svg
      viewBox="0 0 1200 400"
      className="hidden h-auto w-full md:block"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Gray Line */}
      <motion.line
        x1="300"
        y1="200"
        x2="950"
        y2="200"
        stroke="#D1D5DB"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}
      />

      {/* Glow Line */}
      <motion.line
        x1="350"
        y1="200"
        x2="850"
        y2="200"
        stroke="#35C72C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="80 600"
        animate={{ strokeDashoffset: [0, -680] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
        style={{ filter: "drop-shadow(0 0 10px #35C72C)" }}
      />

      {/* Left Phone */}
      <foreignObject x="0" y="40" width="350" height="320">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/img-analytics-1.png"
            alt="Analytics 1"
            fill
            className="object-cover"
          />
        </div>
      </foreignObject>

      {/* Center Icon */}
      <foreignObject x="520" y="140" width="160" height="160">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <div className="rounded-[13px] border-[#F0F0F0] bg-white p-[6px] shadow-sm">
            <Image src="/images/sadarsehat-icon.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="bg-emerald-health rounded-full px-[12px] py-[6px] text-sm font-semibold text-white shadow-md">
            SadarSehat
          </div>
        </div>
      </foreignObject>

      {/* Right Phone */}
      <foreignObject x="850" y="40" width="350" height="320">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/img-analytics-2.png"
            alt="Analytics 2"
            fill
            className="object-cover"
          />
        </div>
      </foreignObject>
    </svg>
  );
}

export function MobileGraphic() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="block h-auto w-full md:hidden"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Top Phone */}
      <foreignObject x="140" y="-15" width="140" height="140">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/img-analytics-1.png"
            alt="Analytics 1"
            fill
            className="object-cover"
          />
        </div>
      </foreignObject>

      {/* Center Icon */}
      <foreignObject x="255" y="90" width="60" height="60">
        <div className="flex h-full w-full flex-col items-center justify-center gap-0.5">
          <div className="rounded-[6px] border-[#F0F0F0] bg-white p-[4px] shadow-sm">
            <Image src="/images/sadarsehat-icon.png" alt="Logo" width={15} height={15} />
          </div>
          <div className="bg-emerald-health rounded-full px-[5px] py-[2px] text-xs font-semibold text-white shadow-sm max-md:text-[10px] max-sm:text-[9px]">
            SadarSehat
          </div>
        </div>
      </foreignObject>

      {/* Gray Line */}
      <motion.line
        x1="205"
        y1="100"
        x2="205"
        y2="145"
        stroke="#D1D5DB"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: easeOut, delay: 0.2 }}
      />

      {/* Glow Line */}
      <motion.line
        x1="205"
        y1="100"
        x2="205"
        y2="145"
        stroke="#35C72C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="60 300"
        animate={{ strokeDashoffset: [0, -360] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
        style={{ filter: "drop-shadow(0 0 8px #35C72C)" }}
      />

      {/* Bottom Phone */}
      <foreignObject x="130" y="130" width="140" height="140">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/img-analytics-2.png"
            alt="Analytics 2"
            fill
            className="object-cover"
          />
        </div>
      </foreignObject>
    </svg>
  );
}
