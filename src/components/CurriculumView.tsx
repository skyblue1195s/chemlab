import React, { useState } from "react";
import { CURRICULUM_DATA } from "../data/curriculum";
import { GradeLevel, Chapter, ConceptNode, Question } from "../types";
import confetti from "canvas-confetti";
import {
  BookOpen,
  CheckCircle2,
  Lock,
  Sparkles,
  HelpCircle,
  Award,
  ChevronRight,
  Clock,
  Zap,
  Map,
  ListTree,
  GraduationCap,
  RotateCcw,
  Filter,
} from "lucide-react";

export const CurriculumView: React.FC<{
  currentGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  completedConcepts: string[];
  onCompleteConcept: (conceptId: string, xpEarned: number) => void;
  onOpenTHPTExam?: () => void;
}> = ({
  currentGrade,
  onSelectGrade,
  completedConcepts,
  onCompleteConcept,
  onOpenTHPTExam,
}) => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>("g10-c1-1");
  const [viewMode, setViewMode] = useState<"standard" | "skill-tree">("standard");
  const [practiceScope, setPracticeScope] = useState<"chapter" | "lesson">("chapter");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  const gradeChapters = CURRICULUM_DATA.filter((ch) => ch.grade === currentGrade);

  // Find active concept and chapter
  let currentChapter: Chapter | undefined;
  let currentConcept: ConceptNode | undefined;
  for (const ch of gradeChapters) {
    const found = ch.concepts.find((c) => c.id === selectedConceptId);
    if (found) {
      currentChapter = ch;
      currentConcept = found;
      break;
    }
  }
  if (!currentChapter && gradeChapters[0]) {
    currentChapter = gradeChapters[0];
    currentConcept = gradeChapters[0].concepts[0];
  }

  const allChapterQuestions = currentChapter
    ? currentChapter.concepts.flatMap((c) => c.practiceQuestions)
    : [];

  const rawQuestions =
    practiceScope === "chapter"
      ? allChapterQuestions
      : currentConcept?.practiceQuestions || [];

  const displayedQuestions =
    levelFilter === "all"
      ? rawQuestions
      : rawQuestions.filter((q) => q.level === levelFilter);

  const answeredCount = rawQuestions.filter((q) => quizSubmitted[q.id]).length;
  const correctCount = rawQuestions.filter(
    (q) => quizSubmitted[q.id] && quizAnswers[q.id] === q.correctIndex
  ).length;

  const handleResetQuiz = () => {
    const newAnswers = { ...quizAnswers };
    const newSubmitted = { ...quizSubmitted };
    rawQuestions.forEach((q) => {
      delete newAnswers[q.id];
      delete newSubmitted[q.id];
    });
    setQuizAnswers(newAnswers);
    setQuizSubmitted(newSubmitted);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (quizSubmitted[questionId]) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuestion = (question: Question) => {
    if (quizAnswers[question.id] === undefined) return;
    setQuizSubmitted((prev) => ({ ...prev, [question.id]: true }));

    const isCorrect = quizAnswers[question.id] === question.correctIndex;
    if (isCorrect) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      onCompleteConcept(selectedConceptId, 25);
    }
  };

  return (
    <div id="curriculum-module" className="flex flex-col gap-6 w-full">
      {/* Top Controls: Grade Selector & Skill Tree Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 border border-slate-800 p-4 rounded-3xl shadow-lg">
        {/* Grade Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#020617]/80 rounded-full border border-slate-800">
          {([10, 11, 12] as GradeLevel[]).map((grade) => (
            <button
              key={grade}
              id={`btn-grade-${grade}`}
              onClick={() => {
                onSelectGrade(grade);
                const firstCh = CURRICULUM_DATA.find((c) => c.grade === grade);
                if (firstCh && firstCh.concepts[0]) {
                  setSelectedConceptId(firstCh.concepts[0].id);
                }
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                currentGrade === grade
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Hóa học Lớp {grade}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-[#020617]/80 rounded-full border border-slate-800 text-xs">
          <button
            id="btn-view-standard"
            onClick={() => setViewMode("standard")}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
              viewMode === "standard"
                ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <ListTree className="w-3.5 h-3.5" /> Danh mục chương
          </button>
          <button
            id="btn-view-skilltree"
            onClick={() => setViewMode("skill-tree")}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
              viewMode === "skill-tree"
                ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Map className="w-3.5 h-3.5" /> Cây Kỹ Năng RPG
          </button>
        </div>
      </div>

      {/* THPT 2026 Practice Exam Callout Banner */}
      {onOpenTHPTExam && (
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-cyan-950/60 border border-cyan-500/30 p-4 sm:p-5 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs sm:text-sm font-black text-white">
                  Bộ 05 Đề Luyện Thi Tốt Nghiệp THPT 2026 Chuẩn Cấu Trúc
                </h4>
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-cyan-400 text-black">
                  CẤU TRÚC 3 PHẦN
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Bao gồm: Trắc nghiệm 4 lựa chọn • Đúng/Sai bậc thang (0.1 - 1.0đ) • Trả lời ngắn với lời giải chi tiết.
              </p>
            </div>
          </div>

          <button
            id="btn-jump-to-thpt-from-curriculum"
            onClick={onOpenTHPTExam}
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black text-xs font-black shrink-0 flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all transform hover:scale-105"
          >
            <span>Vào Luyện Thi Ngay</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Skill Tree RPG View Mode */}
      {viewMode === "skill-tree" && (
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Map className="w-5 h-5 text-cyan-400" />
                Bản đồ Cây Kỹ Năng Hóa Học (Chemistry Skill Tree)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Chinh phục từng nút kiến thức để mở khóa bài tiếp theo như trong game nhập vai RPG!
              </p>
            </div>
            <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              Đã mở khóa: {completedConcepts.length} kỹ năng
            </span>
          </div>

          {/* Skill Tree Diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-6 relative">
            {gradeChapters.flatMap((ch) => ch.concepts).map((concept, index, arr) => {
              const isDone = completedConcepts.includes(concept.id);
              const isSelected = selectedConceptId === concept.id;
              const isUnlocked = index === 0 || completedConcepts.includes(arr[index - 1].id);

              return (
                <div key={concept.id} className="flex flex-col items-center gap-2 relative">
                  <button
                    id={`skill-node-${concept.id}`}
                    disabled={!isUnlocked}
                    onClick={() => {
                      setSelectedConceptId(concept.id);
                      setViewMode("standard");
                    }}
                    className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center border-2 transition-all transform hover:scale-105 shadow-lg relative ${
                      isSelected
                        ? "ring-4 ring-cyan-400/30 border-cyan-400 bg-cyan-950/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        : isDone
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : isUnlocked
                        ? "bg-cyan-950/30 border-cyan-500/60 text-cyan-300 hover:border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                        : "bg-slate-900/60 border-slate-800 text-slate-600 opacity-60 cursor-not-allowed"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                    ) : isUnlocked ? (
                      <Zap className="w-7 h-7 text-cyan-400 animate-pulse" />
                    ) : (
                      <Lock className="w-6 h-6 text-slate-600" />
                    )}
                    <span className="text-[10px] font-mono mt-1 font-bold">Lv.{index + 1}</span>
                  </button>

                  <span className="text-xs font-semibold text-center max-w-[120px] text-slate-300 line-clamp-2">
                    {concept.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Standard Chapter & Lesson Content View */}
      {viewMode === "standard" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Chapter/Concept Navigation Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-3 bg-slate-900/40 border border-slate-800 p-5 rounded-3xl shadow-lg max-h-[850px] overflow-y-auto">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Chương trình GDPT 2026 Lớp {currentGrade}
            </h4>

            {gradeChapters.map((chapter) => (
              <div key={chapter.id} className="space-y-1.5">
                <div className="p-2.5 text-xs font-bold text-slate-200 bg-[#020617]/80 rounded-xl border border-slate-800">
                  {chapter.title}
                </div>

                <div className="pl-2 space-y-1">
                  {chapter.concepts.map((concept) => {
                    const isSelected = selectedConceptId === concept.id;
                    const isDone = completedConcepts.includes(concept.id);

                    return (
                      <button
                        key={concept.id}
                        id={`btn-concept-${concept.id}`}
                        onClick={() => setSelectedConceptId(concept.id)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all ${
                          isSelected
                            ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                            : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isDone ? (
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-black" : "text-emerald-400"}`} />
                          ) : (
                            <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? "bg-black" : "bg-slate-600"}`} />
                          )}
                          <span className="truncate">{concept.title}</span>
                        </div>
                        <span className={`text-[10px] shrink-0 ml-1 ${isSelected ? "opacity-90" : "opacity-75"}`}>
                          {concept.estimatedMinutes} phút
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Concept Lesson & Quiz Detailed View */}
          {currentConcept && (
            <div className="lg:col-span-8 flex flex-col gap-5">
              {/* Concept Header */}
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5" /> Gói gọn trong {currentConcept.estimatedMinutes} phút học
                  </span>
                  {completedConcepts.includes(currentConcept.id) && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-black text-white tracking-tight">
                  {currentConcept.title}
                </h2>

                {/* Visual Hook Box */}
                <div className="bg-amber-950/20 border border-amber-800/40 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Visual Hook: {currentConcept.visualHook.question}</span>
                  </div>
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    {currentConcept.visualHook.story}
                  </p>
                </div>

                {/* Key Points / Core Theory */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                    Lý thuyết cốt lõi (Ngắn gọn & Súc tích):
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentConcept.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real-World Context Footer */}
                <div className="p-4 bg-[#020617]/70 border border-slate-800 rounded-2xl text-xs flex items-start gap-2.5 text-slate-300">
                  <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-400 block mb-0.5">Kiến thức này giải thích vì sao:</strong>
                    <span>{currentConcept.realLifeApplication}</span>
                  </div>
                </div>
              </div>

              {/* Practice Questions (4 Cognitive Levels & THPT Exam Structure) */}
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col gap-5">
                {/* Header & Controls */}
                <div className="flex flex-col gap-4 border-b border-slate-800/80 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                          Bài tập tự luyện trắc nghiệm
                          <span className="text-[10px] normal-case font-sans bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 px-2 py-0.5 rounded-full font-semibold">
                            Chuẩn cấu trúc đề THPT 2026
                          </span>
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {practiceScope === "chapter"
                            ? `Toàn bộ câu hỏi ${currentChapter?.title || "chương"} (Đã bổ sung 5 câu chuẩn đề THPT)`
                            : `Câu hỏi bài học: ${currentConcept.title}`}
                        </p>
                      </div>
                    </div>

                    {/* Stats & Reset */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                        <span>Đã làm: <strong className="text-cyan-400">{answeredCount}</strong>/{rawQuestions.length}</span>
                        <span className="text-slate-600">|</span>
                        <span>Đúng: <strong className="text-emerald-400">{correctCount}</strong>/{rawQuestions.length}</span>
                      </div>

                      {answeredCount > 0 && (
                        <button
                          id="btn-reset-chapter-quiz"
                          onClick={handleResetQuiz}
                          title="Làm lại các câu hỏi"
                          className="p-1.5 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1 px-2.5 border border-slate-700/60"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Làm lại</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Scope Tabs: Chapter vs Lesson */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-1.5 p-1 bg-[#020617] rounded-2xl border border-slate-800 text-xs">
                      <button
                        id="btn-scope-chapter"
                        onClick={() => setPracticeScope("chapter")}
                        className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                          practiceScope === "chapter"
                            ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Toàn bộ chương ({allChapterQuestions.length} câu)
                      </button>
                      <button
                        id="btn-scope-lesson"
                        onClick={() => setPracticeScope("lesson")}
                        className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                          practiceScope === "lesson"
                            ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Theo bài học này ({currentConcept.practiceQuestions.length} câu)
                      </button>
                    </div>

                    {/* Cognitive Level Filter */}
                    <div className="flex items-center gap-1 overflow-x-auto text-[11px]">
                      <span className="text-slate-500 flex items-center gap-1 mr-1">
                        <Filter className="w-3 h-3" /> Mức độ:
                      </span>
                      {["all", "Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"].map((lvl) => {
                        const count =
                          lvl === "all"
                            ? rawQuestions.length
                            : rawQuestions.filter((q) => q.level === lvl).length;
                        if (count === 0 && lvl !== "all") return null;

                        return (
                          <button
                            key={lvl}
                            onClick={() => setLevelFilter(lvl)}
                            className={`px-2.5 py-1 rounded-lg border transition-all ${
                              levelFilter === lvl
                                ? "bg-slate-800 border-cyan-500 text-cyan-300 font-semibold"
                                : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {lvl === "all" ? "Tất cả" : lvl} ({count})
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Questions List */}
                <div className="space-y-5">
                  {displayedQuestions.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 text-xs">
                      Không có câu hỏi nào thuộc mức độ này trong phần đang chọn.
                    </div>
                  ) : (
                    displayedQuestions.map((q, qIndex) => {
                      const selectedOpt = quizAnswers[q.id];
                      const isSubmitted = quizSubmitted[q.id];
                      const isCorrect = selectedOpt === q.correctIndex;

                      const levelBadgeColor =
                        q.level === "Nhận biết"
                          ? "bg-blue-950 text-blue-300 border-blue-800"
                          : q.level === "Thông hiểu"
                          ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                          : q.level === "Vận dụng"
                          ? "bg-amber-950 text-amber-300 border-amber-800"
                          : "bg-rose-950 text-rose-300 border-rose-800";

                      return (
                        <div
                          key={q.id}
                          className="bg-[#020617]/80 border border-slate-800/90 p-5 rounded-2xl flex flex-col gap-3 shadow-md transition-all hover:border-slate-700/80"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-200">
                                Câu {qIndex + 1}:
                              </span>
                              <span className="text-[10px] text-cyan-400/80 font-mono bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-900/40">
                                Chuẩn Đề THPT
                              </span>
                            </div>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${levelBadgeColor}`}
                            >
                              Mức độ: {q.level}
                            </span>
                          </div>

                          <p className="text-xs text-slate-200 font-medium leading-relaxed">
                            {q.questionText}
                          </p>

                          {/* Options */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {q.options.map((opt, optIdx) => {
                              let optStyle =
                                "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";
                              if (isSubmitted) {
                                if (optIdx === q.correctIndex) {
                                  optStyle =
                                    "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.3)]";
                                } else if (selectedOpt === optIdx) {
                                  optStyle =
                                    "bg-rose-950/80 border-rose-500 text-rose-200";
                                }
                              } else if (selectedOpt === optIdx) {
                                optStyle =
                                  "bg-cyan-500/20 border-cyan-400 text-cyan-200 font-semibold shadow-[0_0_12px_rgba(34,211,238,0.25)]";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={isSubmitted}
                                  onClick={() => handleSelectOption(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${optStyle}`}
                                >
                                  <span className="font-mono font-bold text-slate-400 shrink-0">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="leading-tight">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Submit Answer Button */}
                          {!isSubmitted && selectedOpt !== undefined && (
                            <div className="flex justify-end mt-1">
                              <button
                                id={`btn-submit-q-${q.id}`}
                                onClick={() => handleSubmitQuestion(q)}
                                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
                              >
                                Kiểm tra đáp án & Giải thích
                              </button>
                            </div>
                          )}

                          {/* Detailed Explanation upon submission */}
                          {isSubmitted && (
                            <div
                              className={`p-3.5 rounded-xl border text-xs leading-relaxed space-y-1 ${
                                isCorrect
                                  ? "bg-emerald-950/30 border-emerald-800/40 text-emerald-200"
                                  : "bg-rose-950/20 border-rose-800/40 text-rose-200"
                              }`}
                            >
                              <div className="font-bold flex items-center gap-1.5">
                                {isCorrect ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    <span>Chính xác! (+25 XP)</span>
                                  </>
                                ) : (
                                  <>
                                    <HelpCircle className="w-4 h-4 text-rose-400" />
                                    <span>
                                      Chưa chính xác. Đáp án đúng là{" "}
                                      {String.fromCharCode(65 + q.correctIndex)}:
                                    </span>
                                  </>
                                )}
                              </div>
                              <p className="text-slate-300">{q.explanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
