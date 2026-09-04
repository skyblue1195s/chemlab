import React, { useState, useEffect } from "react";
import { REACTIONS_DATA } from "../data/reactions";
import { ReactionSimulation, GradeLevel } from "../types";
import { ReactionStageVisualizer } from "./ReactionStageVisualizer";
import { ReactionCatalogModal } from "./ReactionCatalogModal";
import { ReactionQuizTab } from "./ReactionQuizTab";
import {
  Sparkles,
  Zap,
  CheckCircle2,
  HelpCircle,
  FlaskConical,
  Search,
  Grid,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Trophy,
  Info,
  Flame,
} from "lucide-react";

interface ReactionSimulatorProps {
  onRewardXP?: (xp: number, label: string) => void;
}

export const ReactionSimulator: React.FC<ReactionSimulatorProps> = ({ onRewardXP }) => {
  const [selectedReactionId, setSelectedReactionId] = useState<string>("fe-cuso4");
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const [activeSubTab, setActiveSubTab] = useState<"mechanism" | "theory" | "realworld" | "quiz">("mechanism");
  const [gradeFilter, setGradeFilter] = useState<number | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const currentReaction: ReactionSimulation =
    REACTIONS_DATA.find((r) => r.id === selectedReactionId) || REACTIONS_DATA[0];

  // Auto-play timer with dynamic speed
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      const intervalMs = Math.round(3000 / playbackSpeed);
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < currentReaction.steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, intervalMs);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, currentReaction.steps.length, playbackSpeed]);

  const handleSelectReaction = (id: string) => {
    setSelectedReactionId(id);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  // Filtered reactions for the horizontal quick scrollbar
  const displayedReactions = REACTIONS_DATA.filter((r) => {
    const matchesGrade = gradeFilter === "all" || r.grade === gradeFilter;
    const matchesCategory = categoryFilter === "all" || r.type === categoryFilter;
    const matchesSearch =
      searchTerm === "" ||
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.equation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGrade && matchesCategory && matchesSearch;
  });

  // Next / Previous reaction navigation
  const currentIndex = REACTIONS_DATA.findIndex((r) => r.id === selectedReactionId);
  const handleNextReaction = () => {
    const nextIdx = (currentIndex + 1) % REACTIONS_DATA.length;
    handleSelectReaction(REACTIONS_DATA[nextIdx].id);
  };
  const handlePrevReaction = () => {
    const prevIdx = (currentIndex - 1 + REACTIONS_DATA.length) % REACTIONS_DATA.length;
    handleSelectReaction(REACTIONS_DATA[prevIdx].id);
  };

  const currentStep = currentReaction.steps[currentStepIndex];

  return (
    <div id="reaction-simulator-module" className="flex flex-col gap-6 w-full">
      {/* Top Header & Search / Catalog Control Bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-slate-900/70 border border-slate-800 p-4 rounded-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0">
            <FlaskConical className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-white">
                Mô Phỏng Phản Ứng Hóa Học Vi Mô
              </h2>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {REACTIONS_DATA.length} phản ứng
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Khám phá cơ chế electron, orbital, liên kết hóa học & ứng dụng thực tiễn Lớp 10, 11, 12
            </p>
          </div>
        </div>

        {/* Quick Search & Open Catalog Button */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="reaction-quick-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm nhanh phản ứng..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          <button
            id="btn-open-catalog-modal"
            onClick={() => setIsCatalogOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Kho Thư Viện ({REACTIONS_DATA.length})</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Quick Horizontal Scrolling Chips Bar */}
      <div className="flex flex-col gap-2.5">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Grade filter pills */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {(["all", 10, 11, 12] as const).map((g) => (
              <button
                key={g}
                id={`btn-filter-grade-${g}`}
                onClick={() => setGradeFilter(g)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  gradeFilter === g
                    ? "bg-cyan-500 text-black shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {g === "all" ? "Tất cả khối lớp" : `Lớp ${g}`}
              </button>
            ))}
          </div>

          {/* Previous & Next fast switcher */}
          <div className="flex items-center gap-1 text-xs">
            <button
              id="btn-prev-reaction"
              onClick={handlePrevReaction}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-all"
              title="Phản ứng trước"
            >
              <ChevronLeft className="w-4 h-4" /> Trước
            </button>
            <span className="text-slate-500 font-mono text-[11px] px-1">
              {currentIndex + 1} / {REACTIONS_DATA.length}
            </span>
            <button
              id="btn-next-reaction"
              onClick={handleNextReaction}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-all"
              title="Phản ứng kế tiếp"
            >
              Tiếp <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Reaction Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {displayedReactions.map((rxn) => {
            const isSelected = selectedReactionId === rxn.id;
            return (
              <button
                key={rxn.id}
                id={`btn-rxn-${rxn.id}`}
                onClick={() => handleSelectReaction(rxn.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border shrink-0 ${
                  isSelected
                    ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {rxn.grade && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                      isSelected ? "bg-black/20 text-black" : "bg-slate-800 text-cyan-300"
                    }`}
                  >
                    K{rxn.grade}
                  </span>
                )}
                <span>{rxn.title.split(":")[0] || rxn.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Hook Hero Banner */}
      <div className="bg-gradient-to-r from-amber-950/20 via-slate-900/60 to-cyan-950/20 border border-slate-800/80 p-5 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Hiện Tượng Thực Nghiệm (Visual Hook)
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                Khơi gợi tò mò
              </span>
            </div>
            <h4 className="text-base font-bold text-white mt-0.5">
              {currentReaction.visualHook.title}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-3xl">
              {currentReaction.visualHook.hookText}
            </p>
          </div>
        </div>

        {/* Chemical Equation Box */}
        <div className="bg-[#020617]/90 border border-slate-800 px-4 py-3 rounded-2xl shrink-0 font-mono text-center shadow-md w-full md:w-auto">
          <span className="text-[10px] text-slate-400 block uppercase font-sans">
            Phương trình phản ứng:
          </span>
          <span className="text-sm font-bold text-cyan-400 block mt-0.5">
            {currentReaction.equation}
          </span>
          {currentReaction.ionEquation && (
            <span className="text-xs text-emerald-400 block mt-0.5">
              {currentReaction.ionEquation}
            </span>
          )}
        </div>
      </div>

      {/* Interactive Simulation Stage */}
      <ReactionStageVisualizer
        reaction={currentReaction}
        currentStepIndex={currentStepIndex}
        currentStep={currentStep}
        isPlaying={isPlaying}
        playbackSpeed={playbackSpeed}
        onStepChange={(idx) => {
          setCurrentStepIndex(idx);
          setIsPlaying(false);
        }}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onReset={() => {
          setCurrentStepIndex(0);
          setIsPlaying(false);
        }}
        onSpeedChange={setPlaybackSpeed}
      />

      {/* Step Selector Cards (Steps 1 to 4) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {currentReaction.steps.map((step, idx) => {
          const isCurrent = idx === currentStepIndex;
          const isPassed = idx < currentStepIndex;

          return (
            <button
              key={step.stepNumber}
              id={`btn-step-${idx}`}
              onClick={() => {
                setCurrentStepIndex(idx);
                setIsPlaying(false);
              }}
              className={`p-3 rounded-2xl border text-left transition-all ${
                isCurrent
                  ? "bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                  : isPassed
                  ? "bg-slate-800/80 border-slate-700 text-slate-300"
                  : "bg-slate-900/40 border-slate-800/80 text-slate-500"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span>Bước {step.stepNumber}</span>
                {isPassed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                )}
              </div>
              <span className="text-xs font-medium line-clamp-1 block">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Comprehensive Sub-Tabs: Mechanism, Theory, Real-World, Quiz */}
      <div className="flex flex-col gap-4 bg-slate-900/40 border border-slate-800/90 rounded-3xl p-5 shadow-lg">
        {/* Tab Headers */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
          <button
            id="subtab-mechanism"
            onClick={() => setActiveSubTab("mechanism")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === "mechanism"
                ? "bg-cyan-500 text-black shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Cơ Chế Vi Mô Bước {currentStep.stepNumber}</span>
          </button>

          <button
            id="subtab-theory"
            onClick={() => setActiveSubTab("theory")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === "theory"
                ? "bg-cyan-500 text-black shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bản Chất Hóa Học & Lý Thuyết</span>
          </button>

          <button
            id="subtab-realworld"
            onClick={() => setActiveSubTab("realworld")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === "realworld"
                ? "bg-cyan-500 text-black shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Ứng Dụng Đời Sống & Thực Tiễn</span>
          </button>

          <button
            id="subtab-quiz"
            onClick={() => setActiveSubTab("quiz")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === "quiz"
                ? "bg-amber-500 text-black shadow-sm"
                : "text-amber-400 hover:text-amber-300 hover:bg-slate-800/60"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Thử Thách Nhanh (+25 XP)</span>
          </button>
        </div>

        {/* Tab 1: Mechanism Details */}
        {activeSubTab === "mechanism" && (
          <div className="flex flex-col gap-3 text-xs leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#020617]/80 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold uppercase font-mono tracking-wider">
                Giai đoạn {currentStep.stepNumber}: {currentStep.title}
              </span>
              <p className="text-slate-300">{currentStep.description}</p>
              {currentStep.electronMovement && (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300 font-mono flex items-center gap-2 mt-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{currentStep.electronMovement}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Theory Deep Dive */}
        {activeSubTab === "theory" && (
          <div className="flex flex-col gap-3 text-xs leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#020617]/80 border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold uppercase font-mono tracking-wider">
                Vì sao phản ứng này quan trọng trong chương trình GDPT?
              </span>
              <p className="text-slate-300 text-sm leading-relaxed">{currentReaction.whyItMatters}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold">
                  Phương trình phân tử:
                </span>
                <span className="font-mono text-cyan-300 font-bold text-xs mt-1 block">
                  {currentReaction.equation}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[11px] text-slate-400 block font-semibold">
                  Phương trình ion thu gọn:
                </span>
                <span className="font-mono text-emerald-300 font-bold text-xs mt-1 block">
                  {currentReaction.ionEquation || "Không có dạng ion"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Real World Example */}
        {activeSubTab === "realworld" && (
          <div className="flex flex-col gap-3 text-xs leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#020617]/80 border border-slate-800 space-y-2">
              <span className="text-sky-400 font-bold uppercase font-mono tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-sky-400" /> Học phản ứng này để làm gì trong đời
                sống?
              </span>
              <p className="text-slate-200 text-sm leading-relaxed">
                {currentReaction.realWorldExample}
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Interactive Quiz with XP */}
        {activeSubTab === "quiz" && (
          <ReactionQuizTab reaction={currentReaction} onRewardXP={onRewardXP} />
        )}
      </div>

      {/* Catalog Modal with all 35 reactions */}
      <ReactionCatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        reactions={REACTIONS_DATA}
        selectedReactionId={selectedReactionId}
        onSelectReaction={handleSelectReaction}
      />
    </div>
  );
};
