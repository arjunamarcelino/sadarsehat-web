"use client";

import { HowToUse } from "./HowToUse";
import { Chatbot } from "./Chatbot";

export function HoaxVerification() {
  return (
    <div className="flex h-[calc(100vh-120px)] w-full bg-white px-4 lg:px-[100px]">
      {/* Left Side - How to Use */}
      <div className="w-1/2 border-r border-soft-mint overflow-hidden flex-shrink-0 pr-6 lg:pr-8">
        <HowToUse />
      </div>

      {/* Right Side - Chatbot */}
      <div className="w-1/2 overflow-hidden flex-shrink-0 pl-6 lg:pl-8">
        <Chatbot />
      </div>
    </div>
  );
}

