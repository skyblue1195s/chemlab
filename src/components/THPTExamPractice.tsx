import React, { useState, useEffect } from "react";
import { THPT_EXAMS } from "../data/thptExams";
import {
  THPTExam,
  THPTMultipleChoiceQuestion,
  THPTTrueFalseQuestion,
  THPTShortAnswerQuestion,
} from "../types";
import confetti from "canvas-confetti";
import {
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  RotateCcw,
  Sparkles,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Play,
  Pause,
  Send,
  AlertCircle,
  FileCheck,
  TrendingUp,
  BarChart2,
} from "lucide-react";

interface THPTExamPracticeProps {
  onRewardXP: (xp: number, label: string) => void;
}

export const THPTExamPractice: React.FC<THPTExamPracticeProps> = ({
  onRewardXP,
}) => {
  const [selectedExamId, setSelectedExamId] = useState<string>(
    THPT_EXAMS[0].id
  );
  const [activePart, setActivePart] = useState<1 | 2 | 3>(1);
  const [currentExam, setCurrentExam] = useState<THPTExam>(THPT_EXAMS[0]);

  // Exam taking state
  const [timeLeft, setTimeLeft] = useState<number>(50 * 60); // 50 mins in seconds
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showSolutionDirectly, setShowSolutionDirectly] =
    useState<boolean>(false);

  // Student answers state
  // Part 1: questionId -> optionIndex (0, 1, 2, 3)
  const [part1Answers, setPart1Answers] = useState<Record<string, number>>({});
  // Part 2: questionId -> { a: boolean, b: boolean, c: boolean, d: boolean }
  const [part2Answers, setPart2Answers] = useState<
    Record<string, Record<string, boolean>>
  >({});
  // Part 3: questionId -> student typed string
  const [part3Answers, setPart3Answers] = useState<Record<string, string>>({});

  // Flagged questions for review
  const [flaggedQuestions, setFlaggedQuestions] = useState<
    Record<string, boolean>
  >({});

  // When selected exam changes, reset states
  useEffect(() => {
    const exam =
      THPT_EXAMS.find((e) => e.id === selectedExamId) || THPT_EXAMS[0];
    setCurrentExam(exam);
    setTimeLeft(exam.timeLimitMinutes * 60);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setPart1Answers({});
    setPart2Answers({});
    setPart3Answers({});
    setFlaggedQuestions({});
    setActivePart(1);
  }, [selectedExamId]);

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, isSubmitted, timeLeft]);

  // Format time mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Toggle flag
  const toggleFlag = (id: string) => {
    setFlaggedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Score Calculation theo chuẩn quy chế Bộ GD&ĐT 2026
  const calculateScores = () => {
    // 1. Phần I: 0.3 điểm mỗi câu đúng (15 câu = 4.5 điểm)
    let part1CorrectCount = 0;
    currentExam.part1.forEach((q) => {
      if (part1Answers[q.id] === q.correctIndex) {
        part1CorrectCount += 1;
      }
    });
    const part1Score = Math.round(part1CorrectCount * 0.3 * 100) / 100;

    // 2. Phần II: Theo barem bậc thang chuẩn 2026:
    // Đúng 1 ý: 0.1đ | Đúng 2 ý: 0.25đ | Đúng 3 ý: 0.5đ | Đúng 4 ý: 1.0đ
    let part2Score = 0;
    const part2Breakdown: Record<string, number> = {};
    currentExam.part2.forEach((q) => {
      const studentObj = part2Answers[q.id] || {};
      let correctSubItems = 0;
      q.items.forEach((item) => {
        if (studentObj[item.statementId] === item.isCorrect) {
          correctSubItems += 1;
        }
      });
      let qScore = 0;
      if (correctSubItems === 1) qScore = 0.1;
      else if (correctSubItems === 2) qScore = 0.25;
      else if (correctSubItems === 3) qScore = 0.5;
      else if (correctSubItems === 4) qScore = 1.0;

      part2Score += qScore;
      part2Breakdown[q.id] = qScore;
    });

    // 3. Phần III: 0.25 điểm mỗi câu đúng
    let part3Score = 0;
    let part3CorrectCount = 0;
    currentExam.part3.forEach((q) => {
      const studentVal = (part3Answers[q.id] || "").trim().toLowerCase();
      const correctVal = q.correctAnswer.trim().toLowerCase();
      const accepted = (q.acceptedAnswers || []).map((a) =>
        a.trim().toLowerCase()
      );
      if (
        studentVal === correctVal ||
        accepted.includes(studentVal) ||
        (parseFloat(studentVal) === parseFloat(correctVal) &&
          !isNaN(parseFloat(studentVal)))
      ) {
        part3Score += 0.25;
        part3CorrectCount += 1;
      }
    });

    const totalRaw = part1Score + part2Score + part3Score;
    // Điểm chuẩn làm tròn 2 chữ số thập phân
    const totalScore = Math.min(10.0, Math.round(totalRaw * 100) / 100);

    return {
      part1Score,
      part1CorrectCount,
      part2Score,
      part2Breakdown,
      part3Score,
      part3CorrectCount,
      totalScore,
    };
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);
    const scores = calculateScores();

    if (scores.totalScore >= 8.0) {
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
      onRewardXP(200, `Xuất sắc đạt ${scores.totalScore}đ THPT Quốc Gia!`);
    } else if (scores.totalScore >= 5.0) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
      onRewardXP(100, `Hoàn thành bài thi THPT đạt ${scores.totalScore}đ!`);
    } else {
      onRewardXP(50, `Cố gắng luyện tập thêm bài thi THPT!`);
    }
  };

  const handleResetExam = () => {
    setTimeLeft(currentExam.timeLimitMinutes * 60);
    setIsTimerRunning(true);
    setIsSubmitted(false);
    setPart1Answers({});
    setPart2Answers({});
    setPart3Answers({});
    setFlaggedQuestions({});
  };

  const scores = calculateScores();

  // Count answered questions in each part
  const answeredPart1Count = Object.keys(part1Answers).length;
  const answeredPart2Count = Object.keys(part2Answers).filter(
    (k) => Object.keys(part2Answers[k] || {}).length === 4
  ).length;
  const answeredPart3Count = Object.keys(part3Answers).filter(
    (k) => part3Answers[k]?.trim().length > 0
  ).length;

  return (
    <div
      id="thpt-exam-practice-hub"
      className="flex flex-col gap-6 w-full"
    >
      {/* Top Banner & Exam Selector Bar */}
      <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-3xl backdrop-blur-md shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <GraduationCap className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                CHUẨN BỘ GD&ĐT 2026
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Chương Trình GDPT 2026
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
              Luyện Thi Tốt Nghiệp THPT Môn Hóa Học
            </h2>
            <p className="text-xs text-slate-400">
              Cấu trúc 3 phần: Trắc nghiệm 4 lựa chọn • Đúng/Sai bậc thang • Trả
              lời ngắn
            </p>
          </div>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
          {/* Timer display */}
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono text-sm font-bold shadow-inner ${
              timeLeft < 300
                ? "bg-rose-950/60 border-rose-600 text-rose-400 animate-pulse"
                : "bg-[#020617] border-slate-800 text-cyan-400"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="ml-1 p-1 hover:text-white transition-colors"
              title={isTimerRunning ? "Tạm dừng" : "Tiếp tục"}
            >
              {isTimerRunning ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Action button: Submit or Retake */}
          {!isSubmitted ? (
            <button
              id="btn-submit-thpt-exam"
              onClick={handleSubmitExam}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Nộp Bài & Chấm Điểm</span>
            </button>
          ) : (
            <button
              id="btn-retake-thpt-exam"
              onClick={handleResetExam}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" />
              <span>Làm Lại Đề Này</span>
            </button>
          )}
        </div>
      </div>

      {/* 5 Exam Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {THPT_EXAMS.map((exam, idx) => {
          const isSelected = exam.id === selectedExamId;
          return (
            <button
              key={exam.id}
              id={`tab-select-exam-${idx + 1}`}
              onClick={() => setSelectedExamId(exam.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 font-mono">
                    ĐỀ SỐ 0{idx + 1}
                  </span>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                      exam.difficultyRating === "Đề Minh Họa"
                        ? "bg-blue-950 text-blue-400 border-blue-800"
                        : exam.difficultyRating === "Phân hóa cao"
                        ? "bg-purple-950 text-purple-400 border-purple-800"
                        : exam.difficultyRating === "Thực chiến 9+"
                        ? "bg-rose-950 text-rose-400 border-rose-800"
                        : "bg-amber-950 text-amber-400 border-amber-800"
                    }`}
                  >
                    {exam.difficultyRating}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-1">
                  {exam.title.split(": ")[1] || exam.title}
                </h4>
                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                  {exam.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/50 text-[10px] text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{exam.timeLimitMinutes} phút</span>
                <span>•</span>
                <span>3 phần thi</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Result Card when submitted */}
      {isSubmitted && (
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/40 border border-cyan-500/40 p-6 rounded-3xl shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
          <div className="flex items-center gap-5">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                <span className="text-2xl font-black text-cyan-300 font-mono">
                  {scores.totalScore}
                </span>
                <span className="text-[10px] text-slate-400 font-bold">
                  / 10.0
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-black text-white">
                  Kết Quả Thi Thử THPT
                </h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {scores.totalScore >= 8.5
                  ? "Xuất sắc! Năng lực hóa học đạt mức 9+, sẵn sàng bứt phá kỳ thi THPT!"
                  : scores.totalScore >= 7.0
                  ? "Rất tốt! Nắm vững kiến thức nền tảng, rèn thêm kỹ năng phần trả lời ngắn!"
                  : scores.totalScore >= 5.0
                  ? "Đạt yêu cầu cơ bản. Hãy xem kỹ phần giải thích chi tiết bên dưới để củng cố!"
                  : "Cần ôn tập kỹ lại các chương lý thuyết trọng tâm và làm lại bài thi!"}
              </p>
            </div>
          </div>

          {/* Breakdown Pills */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-around sm:justify-start">
            <div className="px-4 py-2.5 rounded-2xl bg-[#020617]/80 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium">
                Phần I (Trắc nghiệm)
              </span>
              <span className="text-sm font-black text-cyan-400 font-mono">
                {scores.part1CorrectCount}/{currentExam.part1.length} câu (
                {scores.part1Score}đ)
              </span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-[#020617]/80 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium">
                Phần II (Đúng/Sai)
              </span>
              <span className="text-sm font-black text-purple-400 font-mono">
                {scores.part2Score} điểm
              </span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-[#020617]/80 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium">
                Phần III (Trả lời ngắn)
              </span>
              <span className="text-sm font-black text-emerald-400 font-mono">
                {scores.part3CorrectCount}/{currentExam.part3.length} câu (
                {scores.part3Score}đ)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Exam Section: 3 Parts Tabs + Question View */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left / Main Column: Questions in Active Part */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Part Selection Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#020617]/80 rounded-2xl border border-slate-800">
            <button
              id="tab-part-1"
              onClick={() => setActivePart(1)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activePart === 1
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Phần I: Nhiều lựa chọn</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
                {answeredPart1Count}/{currentExam.part1.length}
              </span>
            </button>

            <button
              id="tab-part-2"
              onClick={() => setActivePart(2)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activePart === 2
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Phần II: Đúng / Sai</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
                {answeredPart2Count}/{currentExam.part2.length}
              </span>
            </button>

            <button
              id="tab-part-3"
              onClick={() => setActivePart(3)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activePart === 3
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Phần III: Trả lời ngắn</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
                {answeredPart3Count}/{currentExam.part3.length}
              </span>
            </button>
          </div>

          {/* ===================== PHẦN I ===================== */}
          {activePart === 1 && (
            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-slate-800/80 px-4 py-3 rounded-2xl flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-200">
                  Phần I: Câu trắc nghiệm nhiều phương án lựa chọn (Thí sinh chọn
                  1 phương án đúng trong 4 phương án A, B, C, D)
                </span>
                <span className="text-cyan-400 font-mono font-bold">
                  0.3 điểm / câu (15 câu = 4.5đ)
                </span>
              </div>

              {currentExam.part1.map((q, idx) => {
                const selectedOpt = part1Answers[q.id];
                const isFlagged = flaggedQuestions[q.id];
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    className="bg-[#020617]/90 border border-slate-800 p-5 rounded-3xl shadow-lg flex flex-col gap-3 relative"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-xl">
                          Câu {q.questionNumber}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          [{q.topic}]
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300">
                          {q.difficulty}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleFlag(q.id)}
                        className={`p-1.5 rounded-xl transition-all ${
                          isFlagged
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                        title="Đánh dấu câu cần xem lại"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {q.questionText}
                    </p>

                    {/* Options grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle =
                          "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";

                        if (isSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle =
                              "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]";
                          } else if (selectedOpt === optIdx) {
                            btnStyle =
                              "bg-rose-950/80 border-rose-500 text-rose-200";
                          }
                        } else if (selectedOpt === optIdx) {
                          btnStyle =
                            "bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold shadow-[0_0_12px_rgba(34,211,238,0.25)]";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isSubmitted}
                            onClick={() =>
                              setPart1Answers((prev) => ({
                                ...prev,
                                [q.id]: optIdx,
                              }))
                            }
                            className={`p-3 rounded-2xl border text-left transition-all flex items-start gap-3 text-xs leading-relaxed ${btnStyle}`}
                          >
                            <span className="font-mono font-bold text-slate-400 shrink-0">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation if submitted */}
                    {isSubmitted && (
                      <div
                        className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 mt-2 ${
                          isCorrect
                            ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-200"
                            : "bg-rose-950/20 border-rose-800/40 text-rose-200"
                        }`}
                      >
                        <div className="font-bold flex items-center gap-1.5">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <span>Chính xác (+0.25 điểm)</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-400" />
                              <span>
                                Chưa đúng. Đáp án đúng là{" "}
                                {String.fromCharCode(65 + q.correctIndex)}
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-slate-300">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ===================== PHẦN II ===================== */}
          {activePart === 2 && (
            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-slate-800/80 px-4 py-3 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">
                  Phần II: Câu trắc nghiệm Đúng / Sai (Thí sinh chọn Đúng hoặc
                  Sai cho từng ý a, b, c, d)
                </span>
                <span className="text-purple-400 font-mono font-bold">
                  Barem: 1 ý: 0.1đ • 2 ý: 0.25đ • 3 ý: 0.5đ • 4 ý: 1.0đ
                </span>
              </div>

              {currentExam.part2.map((q) => {
                const studentAnswers = part2Answers[q.id] || {};
                const isFlagged = flaggedQuestions[q.id];

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    className="bg-[#020617]/90 border border-slate-800 p-5 rounded-3xl shadow-lg flex flex-col gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-xl">
                          Câu {q.questionNumber}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          [{q.topic}]
                        </span>
                      </div>

                      <button
                        onClick={() => toggleFlag(q.id)}
                        className={`p-1.5 rounded-xl transition-all ${
                          isFlagged
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                        title="Đánh dấu câu cần xem lại"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Context Narrative */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {q.contextText}
                    </div>

                    {/* 4 Statements (a, b, c, d) */}
                    <div className="space-y-2.5">
                      {q.items.map((item) => {
                        const selectedVal = studentAnswers[item.statementId];
                        const isAnswerCorrect = selectedVal === item.isCorrect;

                        return (
                          <div
                            key={item.statementId}
                            className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                              isSubmitted
                                ? isAnswerCorrect
                                  ? "bg-emerald-950/20 border-emerald-800/40"
                                  : "bg-rose-950/20 border-rose-800/40"
                                : "bg-slate-900/40 border-slate-800"
                            }`}
                          >
                            <div className="flex items-start gap-2.5 flex-1">
                              <span className="font-bold text-cyan-400 font-mono shrink-0">
                                {item.statementId})
                              </span>
                              <span className="text-slate-200 leading-relaxed">
                                {item.statementText}
                              </span>
                            </div>

                            {/* True / False Toggle Buttons */}
                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                              <button
                                disabled={isSubmitted}
                                onClick={() =>
                                  setPart2Answers((prev) => ({
                                    ...prev,
                                    [q.id]: {
                                      ...(prev[q.id] || {}),
                                      [item.statementId]: true,
                                    },
                                  }))
                                }
                                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                                  selectedVal === true
                                    ? isSubmitted
                                      ? item.isCorrect
                                        ? "bg-emerald-500 text-black font-black shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                        : "bg-rose-500 text-white font-black"
                                      : "bg-cyan-500 text-black font-black shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                                    : "bg-slate-800 text-slate-400 hover:text-white"
                                }`}
                              >
                                Đúng
                              </button>

                              <button
                                disabled={isSubmitted}
                                onClick={() =>
                                  setPart2Answers((prev) => ({
                                    ...prev,
                                    [q.id]: {
                                      ...(prev[q.id] || {}),
                                      [item.statementId]: false,
                                    },
                                  }))
                                }
                                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                                  selectedVal === false
                                    ? isSubmitted
                                      ? !item.isCorrect
                                        ? "bg-emerald-500 text-black font-black shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                        : "bg-rose-500 text-white font-black"
                                      : "bg-rose-500 text-white font-black shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                                    : "bg-slate-800 text-slate-400 hover:text-white"
                                }`}
                              >
                                Sai
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation for all items if submitted */}
                    {isSubmitted && (
                      <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-800/40 text-xs space-y-2">
                        <div className="font-bold text-purple-300 flex items-center justify-between">
                          <span>Lời giải chi tiết từng phát biểu:</span>
                          <span className="font-mono text-cyan-400">
                            Điểm đạt: {scores.part2Breakdown[q.id] || 0} / 1.0 đ
                          </span>
                        </div>
                        <div className="space-y-1 text-slate-300">
                          {q.items.map((it) => (
                            <p key={it.statementId}>
                              <strong className="text-cyan-400">
                                {it.statementId}) [{it.isCorrect ? "Đúng" : "Sai"}]
                              </strong>
                              : {it.explanation}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ===================== PHẦN III ===================== */}
          {activePart === 3 && (
            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-slate-800/80 px-4 py-3 rounded-2xl flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-200">
                  Phần III: Câu trắc nghiệm trả lời ngắn (Thí sinh điền kết quả
                  tính toán số học hoặc từ khóa ngắn)
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  0.25 điểm / câu (6 câu = 1.5đ)
                </span>
              </div>

              {currentExam.part3.map((q) => {
                const studentVal = part3Answers[q.id] || "";
                const isFlagged = flaggedQuestions[q.id];
                const cleanStudent = studentVal.trim().toLowerCase();
                const cleanCorrect = q.correctAnswer.trim().toLowerCase();
                const accepted = (q.acceptedAnswers || []).map((a) =>
                  a.trim().toLowerCase()
                );
                const isCorrect =
                  cleanStudent === cleanCorrect ||
                  accepted.includes(cleanStudent) ||
                  (parseFloat(cleanStudent) === parseFloat(cleanCorrect) &&
                    !isNaN(parseFloat(cleanStudent)));

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    className="bg-[#020617]/90 border border-slate-800 p-5 rounded-3xl shadow-lg flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-xl">
                          Câu {q.questionNumber}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          [{q.topic}]
                        </span>
                      </div>

                      <button
                        onClick={() => toggleFlag(q.id)}
                        className={`p-1.5 rounded-xl transition-all ${
                          isFlagged
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                        title="Đánh dấu câu cần xem lại"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {q.questionText}
                    </p>

                    {/* Short Answer Input Box */}
                    <div className="flex items-center gap-3 mt-1">
                      <div className="relative flex-1 sm:max-w-xs">
                        <input
                          type="text"
                          disabled={isSubmitted}
                          placeholder="Nhập đáp số (vd: 12, 4.5)..."
                          value={studentVal}
                          onChange={(e) =>
                            setPart3Answers((prev) => ({
                              ...prev,
                              [q.id]: e.target.value,
                            }))
                          }
                          className={`w-full px-4 py-2.5 rounded-2xl border text-sm font-mono transition-all outline-none ${
                            isSubmitted
                              ? isCorrect
                                ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                                : "bg-rose-950/60 border-rose-500 text-rose-200"
                              : "bg-slate-900/90 border-slate-700 text-white focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                          }`}
                        />
                        {q.unit && (
                          <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 pointer-events-none">
                            {q.unit}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Solution if submitted */}
                    {isSubmitted && (
                      <div
                        className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 mt-2 ${
                          isCorrect
                            ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-200"
                            : "bg-rose-950/20 border-rose-800/40 text-rose-200"
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>Chính xác (+0.25 điểm)</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-4 h-4 text-rose-400" />
                                <span>
                                  Chưa chính xác. Đáp số đúng:{" "}
                                  <strong className="text-white">
                                    {q.correctAnswer} {q.unit}
                                  </strong>
                                </span>
                              </>
                            )}
                          </span>
                        </div>
                        <p className="text-slate-300">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Question Navigator Matrix & Progress Panel */}
        <div className="w-full lg:w-80 flex flex-col gap-4 shrink-0">
          <div className="bg-[#020617]/90 border border-slate-800 p-5 rounded-3xl shadow-xl sticky top-20 flex flex-col gap-5">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                Ma Trận Tiến Độ Bài Thi
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Nhấn số câu để chuyển nhanh đến câu hỏi tương ứng
              </p>
            </div>

            {/* Part 1 Matrix */}
            <div>
              <span className="text-[11px] font-bold text-cyan-400 block mb-2">
                Phần I ({answeredPart1Count}/{currentExam.part1.length} câu)
              </span>
              <div className="grid grid-cols-5 gap-1.5">
                {currentExam.part1.map((q) => {
                  const isDone = part1Answers[q.id] !== undefined;
                  const isFlagged = flaggedQuestions[q.id];
                  const isCorrect =
                    isSubmitted && part1Answers[q.id] === q.correctIndex;

                  let boxStyle =
                    "bg-slate-900 border-slate-800 text-slate-400 hover:text-white";
                  if (isSubmitted) {
                    boxStyle = isCorrect
                      ? "bg-emerald-950 border-emerald-500 text-emerald-300 font-bold"
                      : "bg-rose-950 border-rose-500 text-rose-300";
                  } else if (isDone) {
                    boxStyle =
                      "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActivePart(1);
                        setTimeout(() => {
                          document
                            .getElementById(`question-card-${q.id}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 50);
                      }}
                      className={`h-8 rounded-xl border text-xs font-mono transition-all flex items-center justify-center relative ${boxStyle}`}
                    >
                      {q.questionNumber}
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Part 2 Matrix */}
            <div>
              <span className="text-[11px] font-bold text-purple-400 block mb-2">
                Phần II ({answeredPart2Count}/{currentExam.part2.length} câu lớn)
              </span>
              <div className="grid grid-cols-4 gap-2">
                {currentExam.part2.map((q) => {
                  const ansObj = part2Answers[q.id] || {};
                  const isFull = Object.keys(ansObj).length === 4;
                  const isFlagged = flaggedQuestions[q.id];

                  let boxStyle =
                    "bg-slate-900 border-slate-800 text-slate-400 hover:text-white";
                  if (isSubmitted) {
                    const score = scores.part2Breakdown[q.id] || 0;
                    boxStyle =
                      score >= 0.5
                        ? "bg-emerald-950 border-emerald-500 text-emerald-300 font-bold"
                        : "bg-purple-950 border-purple-500 text-purple-300";
                  } else if (isFull) {
                    boxStyle =
                      "bg-purple-500/20 border-purple-400 text-purple-300 font-bold";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActivePart(2);
                        setTimeout(() => {
                          document
                            .getElementById(`question-card-${q.id}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 50);
                      }}
                      className={`h-8 rounded-xl border text-xs font-mono transition-all flex items-center justify-center relative ${boxStyle}`}
                    >
                      C{q.questionNumber}
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Part 3 Matrix */}
            <div>
              <span className="text-[11px] font-bold text-emerald-400 block mb-2">
                Phần III ({answeredPart3Count}/{currentExam.part3.length} câu)
              </span>
              <div className="grid grid-cols-4 gap-2">
                {currentExam.part3.map((q) => {
                  const hasAnswer = (part3Answers[q.id] || "").trim().length > 0;
                  const isFlagged = flaggedQuestions[q.id];
                  let boxStyle =
                    "bg-slate-900 border-slate-800 text-slate-400 hover:text-white";

                  if (isSubmitted) {
                    const cleanStudent = (part3Answers[q.id] || "")
                      .trim()
                      .toLowerCase();
                    const cleanCorrect = q.correctAnswer.trim().toLowerCase();
                    const accepted = (q.acceptedAnswers || []).map((a) =>
                      a.trim().toLowerCase()
                    );
                    const isCorrect =
                      cleanStudent === cleanCorrect ||
                      accepted.includes(cleanStudent) ||
                      (parseFloat(cleanStudent) === parseFloat(cleanCorrect) &&
                        !isNaN(parseFloat(cleanStudent)));

                    boxStyle = isCorrect
                      ? "bg-emerald-950 border-emerald-500 text-emerald-300 font-bold"
                      : "bg-rose-950 border-rose-500 text-rose-300";
                  } else if (hasAnswer) {
                    boxStyle =
                      "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActivePart(3);
                        setTimeout(() => {
                          document
                            .getElementById(`question-card-${q.id}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 50);
                      }}
                      className={`h-8 rounded-xl border text-xs font-mono transition-all flex items-center justify-center relative ${boxStyle}`}
                    >
                      C{q.questionNumber}
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Legend guide */}
            <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex flex-wrap gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />{" "}
                Đã chọn
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />{" "}
                Đánh dấu xem lại
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 inline-block" />{" "}
                Chưa làm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
