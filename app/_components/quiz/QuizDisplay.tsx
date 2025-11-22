"use client";

import { useState, useEffect } from "react";
import { LayoutType } from "./types";
import { layoutConfigs } from "./QuizLayoutSelector";
import { QuizQuestionCard } from "./QuizQuestionCard";
import { quizQuestions } from "./quizData";
import { motion, AnimatePresence } from "motion/react";
import { QuizQuestion } from "./types";

interface QuizDisplayProps {
  layout: LayoutType;
}

// Function to get random question
const getRandomQuestion = (): QuizQuestion => {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  return quizQuestions[randomIndex];
};

export function QuizDisplay({ layout }: QuizDisplayProps) {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(() => getRandomQuestion());
  const [selectedAnswer, setSelectedAnswer] = useState<"Myth" | "Fact" | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const config = layoutConfigs.find((c) => c.type === layout) || layoutConfigs[0];

  const handleAnswerSelect = (answer: "Myth" | "Fact") => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    // Get a new random question (avoid showing the same question immediately)
    let newQuestion = getRandomQuestion();
    while (newQuestion.number === currentQuestion.number && quizQuestions.length > 1) {
      newQuestion = getRandomQuestion();
    }
    
    setCurrentQuestion(newQuestion);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // Calculate scale based on layout to fit in viewport (right side only)
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      if (typeof window === "undefined") return 1;
      
      // Calculate actual available space
      // Container padding: px-4 (16px) on mobile, px-[100px] (100px) on desktop
      const isDesktop = window.innerWidth >= 1024;
      const containerPadding = isDesktop ? 100 : 16;
      
      // Right side padding: pl-6 lg:pl-8 (24px mobile, 32px desktop)
      const rightSidePadding = isDesktop ? 32 : 24;
      
      // Device frame padding (p-4 = 16px on each side = 32px total)
      const deviceFramePadding = 32;
      
      // Right side is 50% of viewport width, minus container padding, right side padding, and device frame padding
      const rightSideWidth = (window.innerWidth * 0.5) - containerPadding - rightSidePadding - deviceFramePadding;
      
      // Height is viewport height minus navbar (120px), vertical padding, and device frame padding
      const verticalPadding = isDesktop ? 64 : 48; // pt-6 lg:pt-8, pb-6 lg:pb-8
      const availableHeight = window.innerHeight - 120 - verticalPadding - deviceFramePadding;
      
      // Use 0.95 to ensure no clipping with safety margin
      const widthScale = (rightSideWidth * 0.95) / parseInt(config.width);
      const heightScale = (availableHeight * 0.95) / parseInt(config.height);
      
      // Use the smaller scale to ensure it fits both dimensions
      return Math.min(widthScale, heightScale);
    };

    setScale(calculateScale());

    const handleResize = () => {
      setScale(calculateScale());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [config.width, config.height, layout]);
  
  const displayWidth = parseInt(config.width) * scale;
  const displayHeight = parseInt(config.height) * scale;

  return (
    <div className="flex items-center justify-center h-full">
      {/* Device Frame */}
      <div
        className="relative bg-gray-800 p-4 shadow-2xl"
        style={{
          width: `${displayWidth + 32}px`,
          height: `${displayHeight + 32}px`,
          borderRadius: config.frameClass.includes("rounded") ? "1rem" : "0.5rem",
        }}
      >
        {/* Screen */}
        <div
          className="bg-white overflow-hidden relative"
          style={{
            width: `${displayWidth}px`,
            height: `${displayHeight}px`,
            borderRadius: config.frameClass.includes("rounded") ? "0.75rem" : "0.25rem",
          }}
        >
          <div
            className="h-full overflow-y-auto"
            style={{ fontSize: `${scale * 16}px` }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <QuizQuestionCard
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  showExplanation={showExplanation}
                  onAnswerSelect={handleAnswerSelect}
                  onNextQuestion={handleNextQuestion}
                  scale={scale}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Device-specific styling */}
        {layout === "mobile" && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
        )}
        {layout === "tv-interactive" && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}

