"use client";

import { QuizQuestion } from "./types";
import { motion } from "motion/react";
import { CheckCircle2, XCircle, ExternalLink, RefreshCw } from "lucide-react";
import { cn } from "@/app/_libs/utils";
import { useState, useEffect } from "react";

interface QuizQuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: "Myth" | "Fact" | null;
  showExplanation: boolean;
  onAnswerSelect: (answer: "Myth" | "Fact") => void;
  onNextQuestion: () => void;
  scale: number;
}

export function QuizQuestionCard({
  question,
  selectedAnswer,
  showExplanation,
  onAnswerSelect,
  onNextQuestion,
  scale,
}: QuizQuestionCardProps) {
  const [showLongExplanation, setShowLongExplanation] = useState(false);

  // Reset long explanation when question changes
  useEffect(() => {
    setShowLongExplanation(false);
  }, [question.number]);

  const isCorrect = selectedAnswer === question.answer;
  const baseFontSize = 16 * scale;
  const headingSize = baseFontSize * 1.5;
  const bodySize = baseFontSize;

  return (
    <div className="h-full flex flex-col p-6" style={{ padding: `${24 * scale}px` }}>
      {/* Question Number */}
      <div className="mb-4">
        <span
          className="font-heading font-semibold text-emerald-health"
          style={{ fontSize: `${bodySize * 0.875}px` }}
        >
          Soal Acak
        </span>
      </div>

      {/* Question */}
      <h2
        className="font-heading font-bold text-teal-deep mb-6"
        style={{ fontSize: `${headingSize}px`, marginBottom: `${24 * scale}px` }}
      >
        {question.question}
      </h2>

      {/* Answer Buttons */}
      {!showExplanation && (
        <div className="flex flex-col gap-4 flex-1 justify-center" style={{ gap: `${16 * scale}px` }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswerSelect("Myth")}
            disabled={showExplanation}
            className={cn(
              "w-full py-4 rounded-xl font-body font-semibold transition-all duration-200",
              "border-2 border-alert-orange text-alert-orange",
              "hover:bg-alert-orange/10 active:bg-alert-orange/20",
              showExplanation && "opacity-50 cursor-not-allowed"
            )}
            style={{
              padding: `${16 * scale}px ${24 * scale}px`,
              fontSize: `${bodySize}px`,
              borderRadius: `${12 * scale}px`,
            }}
          >
            Myth
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswerSelect("Fact")}
            disabled={showExplanation}
            className={cn(
              "w-full py-4 rounded-xl font-body font-semibold transition-all duration-200",
              "border-2 border-emerald-health text-emerald-health",
              "hover:bg-emerald-health/10 active:bg-emerald-health/20",
              showExplanation && "opacity-50 cursor-not-allowed"
            )}
            style={{
              padding: `${16 * scale}px ${24 * scale}px`,
              fontSize: `${bodySize}px`,
              borderRadius: `${12 * scale}px`,
            }}
          >
            Fact
          </motion.button>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex flex-col"
        >
          <div
            className={cn(
              "p-4 rounded-xl mb-4",
              isCorrect ? "bg-emerald-health/10 border-2 border-emerald-health" : "bg-alert-orange/10 border-2 border-alert-orange"
            )}
            style={{
              padding: `${16 * scale}px`,
              marginBottom: `${16 * scale}px`,
              borderRadius: `${12 * scale}px`,
            }}
          >
            <div className="flex items-center gap-2 mb-3" style={{ gap: `${8 * scale}px`, marginBottom: `${12 * scale}px` }}>
              {isCorrect ? (
                <CheckCircle2 className="text-emerald-health" size={24 * scale} />
              ) : (
                <XCircle className="text-alert-orange" size={24 * scale} />
              )}
              <span
                className={cn(
                  "font-heading font-bold",
                  isCorrect ? "text-emerald-health" : "text-alert-orange"
                )}
                style={{ fontSize: `${bodySize * 1.125}px` }}
              >
                {isCorrect ? "Benar!" : "Salah!"}
              </span>
              <span
                className="font-body text-teal-deep/70 ml-auto"
                style={{ fontSize: `${bodySize * 0.875}px` }}
              >
                Jawaban yang benar: {question.answer}
              </span>
            </div>
            <p
              className="font-body text-teal-deep mb-3 whitespace-pre-line"
              style={{ fontSize: `${bodySize}px`, marginBottom: `${12 * scale}px`, lineHeight: "1.6" }}
            >
              {showLongExplanation ? question.longExplanation : question.briefExplanation}
            </p>
            <button
              onClick={() => setShowLongExplanation(!showLongExplanation)}
              className="text-emerald-health font-body font-semibold underline text-sm hover:no-underline transition-all"
              style={{ fontSize: `${bodySize * 0.875}px` }}
            >
              {showLongExplanation ? "Tampilkan penjelasan singkat" : "Baca penjelasan lengkap"}
            </button>
          </div>

          {/* Sources */}
          <div
            className="bg-soft-mint p-4 rounded-xl mb-4"
            style={{
              padding: `${16 * scale}px`,
              marginBottom: `${16 * scale}px`,
              borderRadius: `${12 * scale}px`,
            }}
          >
            <h3
              className="font-heading font-semibold text-teal-deep mb-2"
              style={{ fontSize: `${bodySize * 0.875}px`, marginBottom: `${8 * scale}px` }}
            >
              Sumber:
            </h3>
            <div className="space-y-1">
              {question.sources.split("\n").map((source, idx) => (
                <a
                  key={idx}
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-health font-body text-sm hover:underline"
                  style={{ fontSize: `${bodySize * 0.875}px`, gap: `${8 * scale}px` }}
                >
                  <ExternalLink size={14 * scale} />
                  <span className="break-all">{source}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Next Question Button */}
      {showExplanation && (
        <div className="mt-auto pt-4 border-t border-soft-mint" style={{ paddingTop: `${16 * scale}px` }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNextQuestion}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-body font-semibold bg-emerald-health text-white hover:bg-emerald-health/80 transition-all"
            style={{
              padding: `${12 * scale}px ${16 * scale}px`,
              fontSize: `${bodySize}px`,
              gap: `${8 * scale}px`,
            }}
          >
            <RefreshCw size={18 * scale} />
            Soal Lainnya
          </motion.button>
        </div>
      )}
    </div>
  );
}

