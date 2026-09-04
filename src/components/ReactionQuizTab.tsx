import React, { useState, useEffect } from "react";
import { ReactionSimulation } from "../types";
import { CheckCircle2, XCircle, Trophy, HelpCircle, Sparkles, RotateCcw } from "lucide-react";

interface ReactionQuizTabProps {
  reaction: ReactionSimulation;
  onRewardXP?: (xp: number, label: string) => void;
}

export const ReactionQuizTab: React.FC<ReactionQuizTabProps> = ({ reaction, onRewardXP }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [hasRewarded, setHasRewarded] = useState<boolean>(false);

  // Reset when reaction changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
    setHasRewarded(false);
  }, [reaction.id]);

  const quiz = reaction.quickQuiz;

  if (!quiz) {
    return (
      <div className="p-8 text-center text-slate-500 text-xs bg-slate-900/30 rounded-2xl border border-slate-800">
        Câu hỏi tư duy cho phản ứng này đang được cập nhật!
      </div>
    );
  }

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quiz.correctIndex && !hasRewarded) {
      setHasRewarded(true);
      if (onRewardXP) {
        onRewardXP(25, `Giải mã phản ứng: ${reaction.title}`);
      }
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const isCorrect = selectedOption === quiz.correctIndex;

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-[#020617]/90 border border-slate-800 shadow-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Thử Thách Nhanh - Kiểm Tra Tư Duy</h4>
            <p className="text-[11px] text-slate-400">Trả lời đúng nhận ngay +25 XP vào tài khoản</p>
          </div>
        </div>

        {isAnswered && (
          <button
            id="btn-retry-reaction-quiz"
            onClick={handleReset}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-xl border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Thử lại
          </button>
        )}
      </div>

      {/* Question Text */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
        {quiz.question}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {quiz.options.map((opt, idx) => {
          const isChosen = selectedOption === idx;
          const isOptionCorrect = idx === quiz.correctIndex;

          let btnClass = "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white";

          if (isAnswered) {
            if (isOptionCorrect) {
              btnClass = "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.3)] font-semibold";
            } else if (isChosen && !isCorrect) {
              btnClass = "bg-rose-950/80 border-rose-500 text-rose-200 font-semibold";
            } else {
              btnClass = "bg-slate-900/30 border-slate-800/60 text-slate-600 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              id={`quiz-opt-${idx}`}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 ${btnClass}`}
            >
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1 leading-snug">{opt}</span>
              {isAnswered && isOptionCorrect && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              )}
              {isAnswered && isChosen && !isCorrect && (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {isAnswered && (
        <div
          className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-3 transition-all ${
            isCorrect
              ? "bg-emerald-950/50 border-emerald-500/50 text-emerald-200"
              : "bg-rose-950/50 border-rose-500/50 text-rose-200"
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {isCorrect ? (
              <Sparkles className="w-4 h-4 text-emerald-400" />
            ) : (
              <HelpCircle className="w-4 h-4 text-rose-400" />
            )}
          </div>
          <div>
            <span className="font-bold block mb-1">
              {isCorrect ? "Chính xác! (+25 XP)" : "Chưa chính xác, cùng xem giải thích:"}
            </span>
            <p className="opacity-90">{quiz.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};
