"use client";
import { motion, easeInOut, easeOut } from "motion/react";
import { useState } from "react";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/Tab";
import Analytics from "./Analytics/Analytics";
import Quiz from "./Quiz";
import FactChecker from "./FactChecker";

export default function Solution() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [activeTab, setActiveTab] = useState("fact-checker");

  const tabOptions = [
    { value: "fact-checker", label: "AI Fact-Checker" },
    { value: "quiz", label: "Kuis “Hoaks atau Fakta?”" },
    { value: "analytics", label: "Dashboard Analitik Nasional" },
  ];

  return (
    <section id="about-us" className="bg-white">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col px-4 text-start sm:px-4 sm:text-start lg:items-center lg:px-0 lg:px-25 lg:text-center">
        {/* === Section Title === */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-dark mb-4 text-start text-[44px] font-semibold sm:text-start sm:text-[44px] lg:text-center lg:text-[62px]"
        >
          Apa itu <br className="hidden max-sm:block" />{" "}
          <span className="text-emerald-health font-semibold">SadarSehat?</span>
        </motion.h2>

        {/* === Description === */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-dark-medium-dark mb-16 text-base sm:text-base lg:text-lg"
        >
          SadarSehat adalah platform AI yang membantu masyarakat <br className="hidden max-sm:block" />
          <span className="font-bold italic">
          memverifikasi informasi kesehatan{" "}
          </span>
          secara cepat, akurat, dan berbasis sumber resmi. <br className="hidden xl:block" />Dengan edukasi yang jelas dan transparan, SadarSehat memperkuat literasi kesehatan publik dan mendukung ketahanan layanan JKN.
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeInOut, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          {/* Desktop */}
          {!isMobile ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full px-1">
              <div className="mb-10 flex w-full justify-center">
                <TabsList value={activeTab} className="w-full">
                  {tabOptions.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="fact-checker">
                <FactChecker />
              </TabsContent>
              <TabsContent value="quiz">
                <Quiz />
              </TabsContent>
              <TabsContent value="analytics">
                <Analytics />
              </TabsContent>
            </Tabs>
          ) : (
            // Mobile
            <div className="flex w-full flex-col gap-10">
              <FactChecker />
              <Quiz />
              <Analytics />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
