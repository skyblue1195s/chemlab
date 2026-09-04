import React, { useState } from "react";
import { UserStats, Badge, ChemistryQuest, DailyQuest } from "../types";
import { BALANCING_EQUATIONS, CHEM_RIDDLES, MATCH_PAIRS } from "../data/minigames";
import { CHEMISTRY_QUESTS } from "../data/questsData";
import { DAILY_QUESTS_POOL } from "../data/dailyQuestsData";
import { LeaderboardSection } from "./LeaderboardSection";
import { User as FirebaseUser } from "firebase/auth";
import { FirebaseUserProfile } from "../lib/firebase";
import confetti from "canvas-confetti";
import {
  Flame,
  Award,
  Trophy,
  Zap,
  CheckCircle2,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Shuffle,
  ShieldCheck,
  Star,
  Target,
  Search,
  Filter,
  Beaker,
  Gift,
  RefreshCw,
  Brain,
  Box,
  Bot,
  FlaskConical,
  BookOpen,
  Atom,
  MessageSquare,
  Calendar,
  Check,
  ChevronRight,
  ChevronLeft,
  X,
  AlertCircle,
} from "lucide-react";

export const GamificationHub: React.FC<{
  userStats: UserStats;
  onRewardXP: (xp: number, label: string) => void;
  onNavigateTab?: (tab: string) => void;
  currentUser?: FirebaseUser | null;
  userProfile?: FirebaseUserProfile | null;
}> = ({ userStats, onRewardXP, onNavigateTab, currentUser, userProfile }) => {
  const [activeTab, setActiveTab] = useState<"daily" | "balancer" | "quests" | "riddle" | "badges" | "leaderboard">("daily");
  
  // Daily Quests system state (20 rotating tasks)
  const [dailyQuests, setDailyQuests] = useState<DailyQuest[]>(DAILY_QUESTS_POOL);
  const [rotationOffset, setRotationOffset] = useState<number>(0);
  const [dailyFilter, setDailyFilter] = useState<"active" | "all" | "pending" | "completed">("active");
  const [dailyCategoryFilter, setDailyCategoryFilter] = useState<string>("all");
  const [dailySearchQuery, setDailySearchQuery] = useState<string>("");
  const [bonusChestClaimed, setBonusChestClaimed] = useState<boolean>(false);
  const [justClaimedQuestId, setJustClaimedQuestId] = useState<string | null>(null);

  const [localCompletedQuests, setLocalCompletedQuests] = useState<string[]>(
    userStats.completedQuests || ["q1"]
  );
  const [questCategoryFilter, setQuestCategoryFilter] = useState<string>("all");
  const [questSearchQuery, setQuestSearchQuery] = useState<string>("");

  // Quest Questions Modal state
  const [activeQuizQuest, setActiveQuizQuest] = useState<ChemistryQuest | null>(null);
  const [activeQuizQuestionIdx, setActiveQuizQuestionIdx] = useState<number>(0);
  const [userQuizAnswers, setUserQuizAnswers] = useState<Record<string, number>>({});

  // Equation Balancer Game state (25 questions)
  const [currentEqIdx, setCurrentEqIdx] = useState<number>(0);
  const [userCoeffs, setUserCoeffs] = useState<Record<string, number>>({});
  const [isEqSuccess, setIsEqSuccess] = useState<boolean | null>(null);
  const [eqDifficultyFilter, setEqDifficultyFilter] = useState<string>("all");
  const [solvedEquationIds, setSolvedEquationIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("chem_solved_equations");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Riddle Game state
  const [currentRiddleIdx, setCurrentRiddleIdx] = useState<number>(0);
  const [revealedCluesCount, setRevealedCluesCount] = useState<number>(1);
  const [riddleGuess, setRiddleGuess] = useState<string>("");
  const [isRiddleSolved, setIsRiddleSolved] = useState<boolean | null>(null);
  const [solvedRiddleIds, setSolvedRiddleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("chem_solved_riddles");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const currentEquation = BALANCING_EQUATIONS[currentEqIdx] || BALANCING_EQUATIONS[0];
  const currentRiddle = CHEM_RIDDLES[currentRiddleIdx] || CHEM_RIDDLES[0];

  // Handle equation checking
  const handleCheckEquation = () => {
    let allCorrect = true;

    // Check reactants
    currentEquation.reactants.forEach((r, i) => {
      const val = userCoeffs[`r_${i}`] || 1;
      if (val !== r.correctCoeff) allCorrect = false;
    });
    // Check products
    currentEquation.products.forEach((p, i) => {
      const val = userCoeffs[`p_${i}`] || 1;
      if (val !== p.correctCoeff) allCorrect = false;
    });

    setIsEqSuccess(allCorrect);

    if (allCorrect) {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
      if (!solvedEquationIds.includes(currentEquation.id)) {
        const updated = [...solvedEquationIds, currentEquation.id];
        setSolvedEquationIds(updated);
        try {
          localStorage.setItem("chem_solved_equations", JSON.stringify(updated));
        } catch {}
      }
      onRewardXP(30, `Cân bằng đúng: ${currentEquation.id}`);
    }
  };

  const handleSelectEquation = (idx: number) => {
    setIsEqSuccess(null);
    setUserCoeffs({});
    setCurrentEqIdx(idx);
  };

  const handleNextEquation = () => {
    setIsEqSuccess(null);
    setUserCoeffs({});
    setCurrentEqIdx((prev) => (prev + 1) % BALANCING_EQUATIONS.length);
  };

  const handlePrevEquation = () => {
    setIsEqSuccess(null);
    setUserCoeffs({});
    setCurrentEqIdx((prev) => (prev - 1 + BALANCING_EQUATIONS.length) % BALANCING_EQUATIONS.length);
  };

  // Riddle helper & navigation
  const removeAccents = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .trim();

  const handleSelectRiddle = (idx: number) => {
    setCurrentRiddleIdx(idx);
    setRevealedCluesCount(1);
    setRiddleGuess("");
    setIsRiddleSolved(null);
  };

  const handleNextRiddle = () => {
    setCurrentRiddleIdx((prev) => (prev + 1) % CHEM_RIDDLES.length);
    setRevealedCluesCount(1);
    setRiddleGuess("");
    setIsRiddleSolved(null);
  };

  const handlePrevRiddle = () => {
    setCurrentRiddleIdx((prev) => (prev - 1 + CHEM_RIDDLES.length) % CHEM_RIDDLES.length);
    setRevealedCluesCount(1);
    setRiddleGuess("");
    setIsRiddleSolved(null);
  };

  const handleRandomRiddle = () => {
    const randomIdx = Math.floor(Math.random() * CHEM_RIDDLES.length);
    handleSelectRiddle(randomIdx);
  };

  // Handle Riddle checking
  const handleCheckRiddle = () => {
    if (!riddleGuess.trim()) return;
    const q = riddleGuess.trim().toLowerCase();
    const qClean = removeAccents(q);

    const candidates = [
      currentRiddle.mysteryName.toLowerCase(),
      currentRiddle.symbol.toLowerCase(),
      ...(currentRiddle.aliases || []).map((a) => a.toLowerCase()),
    ];

    const correct = candidates.some((c) => {
      const cClean = removeAccents(c);
      return q === c || qClean === cClean || q.includes(c) || qClean.includes(cClean);
    });

    setIsRiddleSolved(correct);

    if (correct) {
      confetti({ particleCount: 60, spread: 80, origin: { y: 0.7 } });
      if (!solvedRiddleIds.includes(currentRiddle.id)) {
        const updated = [...solvedRiddleIds, currentRiddle.id];
        setSolvedRiddleIds(updated);
        try {
          localStorage.setItem("chem_solved_riddles", JSON.stringify(updated));
        } catch {}
      }
      const xp = Math.max(15, 50 - (revealedCluesCount - 1) * 10);
      onRewardXP(xp, `Giải mã câu đố: ${currentRiddle.mysteryName} (${currentRiddle.symbol})`);
    }
  };

  // Active rotation indices (5 tasks per rotation window out of 20)
  const activeRotationIndices = [
    (rotationOffset * 5) % 20,
    (rotationOffset * 5 + 1) % 20,
    (rotationOffset * 5 + 2) % 20,
    (rotationOffset * 5 + 3) % 20,
    (rotationOffset * 5 + 4) % 20,
  ];

  const activeRotationQuests = dailyQuests.filter((_, idx) =>
    activeRotationIndices.includes(idx)
  );

  const handleIncrementProgress = (questId: string) => {
    setDailyQuests((prev) =>
      prev.map((q) => {
        if (q.id !== questId) return q;
        const nextProgress = Math.min(q.targetProgress, q.currentProgress + 1);
        const isNowComplete = nextProgress >= q.targetProgress;
        if (isNowComplete && !q.completed) {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
        }
        return {
          ...q,
          currentProgress: nextProgress,
          completed: isNowComplete,
        };
      })
    );
  };

  const handleClaimQuest = (quest: DailyQuest) => {
    if (!quest.completed || quest.claimed) return;
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.7 } });
    setDailyQuests((prev) =>
      prev.map((q) => (q.id === quest.id ? { ...q, claimed: true } : q))
    );
    setJustClaimedQuestId(quest.id);
    setTimeout(() => setJustClaimedQuestId(null), 2500);
    onRewardXP(quest.xpReward, `Nhiệm vụ hằng ngày: ${quest.title}`);
  };

  const handleClaimChest = () => {
    if (bonusChestClaimed) return;
    confetti({ particleCount: 100, spread: 100, origin: { y: 0.6 } });
    setBonusChestClaimed(true);
    onRewardXP(50, "Mở Rương Thưởng Ngày (Daily Mystery Chest)");
  };

  const handleRotateDailyQuests = () => {
    setRotationOffset((prev) => (prev + 1) % 4);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
  };

  const renderDailyQuestIcon = (iconName: string) => {
    switch (iconName) {
      case "brain":
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case "box":
        return <Box className="w-5 h-5 text-cyan-400" />;
      case "bot":
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case "flask":
        return <FlaskConical className="w-5 h-5 text-amber-400" />;
      case "book":
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case "atom":
        return <Atom className="w-5 h-5 text-purple-400" />;
      case "flame":
        return <Flame className="w-5 h-5 text-rose-400" />;
      case "zap":
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case "trophy":
        return <Trophy className="w-5 h-5 text-amber-300" />;
      case "message-square":
        return <MessageSquare className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Filtered daily quests
  const filteredDailyQuests = dailyQuests.filter((q, idx) => {
    // Mode filter
    if (dailyFilter === "active" && !activeRotationIndices.includes(idx)) return false;
    if (dailyFilter === "pending" && q.completed) return false;
    if (dailyFilter === "completed" && !q.completed) return false;

    // Category filter
    if (dailyCategoryFilter !== "all" && q.category !== dailyCategoryFilter) return false;

    // Search query
    if (dailySearchQuery.trim()) {
      const matchText = `${q.title} ${q.description} ${q.categoryLabel}`.toLowerCase();
      if (!matchText.includes(dailySearchQuery.toLowerCase())) return false;
    }

    return true;
  });

  const activeCompletedCount = activeRotationQuests.filter((q) => q.completed).length;
  const totalCompletedDailyCount = dailyQuests.filter((q) => q.completed).length;

  return (
    <div id="gamification-module" className="flex flex-col gap-6 w-full">
      {/* User Status Bar: XP, Level, Streak & Badges */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* XP & Level */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-3xl flex items-center gap-3.5 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <Zap className="w-6 h-6" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Cấp độ {userStats.level}</span>
              <span className="text-xs font-mono font-bold text-cyan-400">{userStats.xp} XP</span>
            </div>
            <h4 className="text-sm font-bold text-white truncate">{userStats.title}</h4>
            <div className="w-full bg-slate-800/80 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-cyan-500 h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{ width: `${Math.min(100, userStats.xp % 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Streak Flame */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-3xl flex items-center gap-3.5 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.25)]">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-black text-amber-400 font-mono">
                {userStats.streakDays} Ngày
              </span>
              <span className="text-xs text-amber-300">🔥</span>
            </div>
            <span className="text-xs text-slate-400 block mt-0.5">
              Chuỗi ngày học liên tục
            </span>
          </div>
        </div>

        {/* Badges Unlocked */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-3xl flex items-center gap-3.5 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-lg font-black text-purple-300 font-mono">
              {userStats.badges.filter((b) => b.unlocked).length} / {userStats.badges.length}
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">
              Huy hiệu danh dự đạt được
            </span>
          </div>
        </div>

        {/* Rank / School */}
        <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-3xl flex items-center gap-3.5 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-lg font-black text-emerald-400 font-mono">Hạng #3</span>
            <span className="text-xs text-slate-400 block mt-0.5">
              Bảng thi đua THPT Chuyên
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          id="tab-daily"
          onClick={() => setActiveTab("daily")}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeTab === "daily"
              ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border-amber-300 font-bold shadow-[0_0_15px_rgba(251,191,36,0.4)]"
              : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
          }`}
        >
          <Flame className="w-4 h-4 text-amber-400" /> Nhiệm Vụ Hằng Ngày (Daily Quests)
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950/60 text-amber-300 border border-amber-500/30">
            {activeRotationQuests.filter((q) => q.completed).length}/{activeRotationQuests.length}
          </span>
        </button>
        <button
          id="tab-balancer"
          onClick={() => setActiveTab("balancer")}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeTab === "balancer"
              ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
          }`}
        >
          <Zap className="w-4 h-4" /> Mini-Game Cân Bằng Phương Trình
        </button>
        <button
          id="tab-quests"
          onClick={() => setActiveTab("quests")}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeTab === "quests"
              ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
          }`}
        >
          <Target className="w-4 h-4" /> 24 Nhiệm Vụ Hóa Học
        </button>
        <button
          id="tab-riddle"
          onClick={() => setActiveTab("riddle")}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeTab === "riddle"
              ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
          }`}
        >
          <Sparkles className="w-4 h-4" /> Giải Mã Nguyên Tố Bí Ẩn
        </button>
        <button
          id="tab-badges"
          onClick={() => setActiveTab("badges")}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeTab === "badges"
              ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
          }`}
        >
          <Award className="w-4 h-4" /> Bộ Sưu Tập Huy Hiệu
        </button>
        <button
          id="tab-leaderboard"
          onClick={() => setActiveTab("leaderboard")}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
            activeTab === "leaderboard"
              ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
          }`}
        >
          <Trophy className="w-4 h-4" /> Bảng Xếp Hạng Thi Đua
        </button>
      </div>

      {/* Tab 0: Dynamic Daily Quests (20 Rotating Tasks) */}
      {activeTab === "daily" && (
        <div id="tab-content-daily" className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col gap-6 shadow-xl">
          {/* Header & Rotation Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                    Nhiệm Vụ Hằng Ngày (Dynamic Daily Quests)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Hệ thống 20 thử thách nhỏ xoay tua mỗi ngày: giải trắc nghiệm, tương tác 3D, chat ChemBot, làm thí nghiệm và nhận thưởng XP tức thì!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nhóm {rotationOffset + 1}/4 (5 nhiệm vụ)</span>
              </span>

              <button
                id="btn-rotate-daily-quests"
                onClick={handleRotateDailyQuests}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-700/60 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                title="Xoay tua sang 5 nhiệm vụ ngày kế tiếp"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-[spin_6s_linear_infinite]" />
                <span>Xoay tua nhiệm vụ</span>
              </button>

              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                +{dailyQuests.filter((q) => q.claimed).reduce((acc, q) => acc + q.xpReward, 0)} XP đã nhận
              </span>
            </div>
          </div>

          {/* Daily Mystery Chest Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-cyan-950/40 border border-amber-500/30 p-4 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                <Gift className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white text-sm">
                    Rương Báu Hằng Ngày (Daily Mystery Chest)
                  </h4>
                  <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-700">
                    +50 XP Bonus
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {bonusChestClaimed
                    ? "Bạn đã mở rương xuất sắc hôm nay! Hãy quay lại vào ngày mai."
                    : activeCompletedCount >= 3
                    ? "Tuyệt vời! Bạn đã hoàn thành đủ điều kiện để mở rương quà hôm nay."
                    : `Hoàn thành ít nhất 3 nhiệm vụ hôm nay để mở khóa (Hiện tại: ${activeCompletedCount}/3)`}
                </p>
                {/* Mini bar */}
                <div className="w-48 bg-slate-950 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-800">
                  <div
                    className="bg-amber-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (activeCompletedCount / 3) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            <div>
              {bonusChestClaimed ? (
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-xs font-bold font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Đã mở rương (+50 XP)</span>
                </div>
              ) : activeCompletedCount >= 3 ? (
                <button
                  id="btn-claim-daily-chest"
                  onClick={handleClaimChest}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.6)] transition-all animate-pulse"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Mở Rương Báu (+50 XP)</span>
                </button>
              ) : (
                <div className="text-[11px] font-mono text-slate-500 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
                  Khóa ({activeCompletedCount}/3 nhiệm vụ)
                </div>
              )}
            </div>
          </div>

          {/* View Filter Pills & Category Filters */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Scope View Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1">
                <button
                  onClick={() => setDailyFilter("active")}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    dailyFilter === "active"
                      ? "bg-amber-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                      : "bg-[#020617] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  Hôm nay ({activeRotationQuests.length} nhiệm vụ xoay tua)
                </button>
                <button
                  onClick={() => setDailyFilter("all")}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    dailyFilter === "all"
                      ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                      : "bg-[#020617] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  Tất cả ({dailyQuests.length} nhiệm vụ)
                </button>
                <button
                  onClick={() => setDailyFilter("pending")}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    dailyFilter === "pending"
                      ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                      : "bg-[#020617] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  Chưa xong ({dailyQuests.filter((q) => !q.completed).length})
                </button>
                <button
                  onClick={() => setDailyFilter("completed")}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                    dailyFilter === "completed"
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                      : "bg-[#020617] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  Đã xong ({totalCompletedDailyCount})
                </button>
              </div>

              {/* Search Box */}
              <div className="relative shrink-0 w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={dailySearchQuery}
                  onChange={(e) => setDailySearchQuery(e.target.value)}
                  placeholder="Tìm nhiệm vụ hằng ngày..."
                  className="w-full bg-[#020617]/90 border border-slate-800 rounded-full pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] pb-1">
              {[
                { id: "all", label: "Tất cả chủ đề" },
                { id: "quiz", label: "Trắc nghiệm" },
                { id: "3d", label: "Mô phỏng 3D" },
                { id: "ai", label: "Trợ lý AI ChemBot" },
                { id: "lab", label: "Thí nghiệm ảo" },
                { id: "periodic", label: "Bảng tuần hoàn" },
                { id: "game", label: "Mini-game" },
                { id: "community", label: "Cộng đồng" },
                { id: "theory", label: "Lý thuyết" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setDailyCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all ${
                    dailyCategoryFilter === cat.id
                      ? "bg-slate-700 text-cyan-300 font-bold border border-cyan-500/50"
                      : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Daily Quests Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDailyQuests.map((quest) => {
              const isJustClaimed = justClaimedQuestId === quest.id;

              return (
                <div
                  key={quest.id}
                  className={`relative p-4 rounded-2xl border text-xs flex flex-col justify-between gap-3.5 transition-all duration-300 ${
                    quest.claimed
                      ? "bg-slate-900/30 border-slate-800/60 opacity-85"
                      : quest.completed
                      ? "bg-amber-950/20 border-amber-500/40 shadow-[0_0_15px_rgba(251,191,36,0.15)] ring-1 ring-amber-500/20"
                      : "bg-[#020617]/80 border-slate-800 hover:border-slate-700 shadow-md"
                  }`}
                >
                  {/* Floating Claim Feedback Banner */}
                  {isJustClaimed && (
                    <div className="absolute inset-0 bg-emerald-950/90 border border-emerald-400 rounded-2xl z-20 flex flex-col items-center justify-center gap-1 animate-in fade-in zoom-in duration-300">
                      <Sparkles className="w-8 h-8 text-amber-300 animate-spin" />
                      <span className="font-bold text-white text-sm">+{quest.xpReward} XP!</span>
                      <span className="text-[11px] text-emerald-200">Đã cộng vào thành tích của bạn</span>
                    </div>
                  )}

                  {/* Header Row: Icon, Category, XP */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                        {renderDailyQuestIcon(quest.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/50">
                          {quest.categoryLabel}
                        </span>
                        <h4 className="font-bold text-white mt-1 leading-snug line-clamp-2">
                          {quest.title}
                        </h4>
                      </div>
                    </div>

                    <span className="shrink-0 text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800">
                      +{quest.xpReward} XP
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {quest.description}
                  </p>

                  {/* Progress Bar & Counter */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Tiến độ thực hiện:</span>
                      <span
                        className={`font-bold ${
                          quest.completed ? "text-emerald-400" : "text-cyan-400"
                        }`}
                      >
                        {quest.currentProgress} / {quest.targetProgress} {quest.unit}
                      </span>
                    </div>

                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/80">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          quest.completed
                            ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                            : "bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            (quest.currentProgress / quest.targetProgress) * 100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 gap-2">
                    {quest.claimed ? (
                      <div className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-slate-800/60 text-emerald-400 font-bold text-[11px] border border-emerald-900/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Đã nhận thưởng (+{quest.xpReward} XP)</span>
                      </div>
                    ) : quest.completed ? (
                      <button
                        id={`btn-claim-quest-${quest.id}`}
                        onClick={() => handleClaimQuest(quest)}
                        className="w-full py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-all animate-pulse"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Nhận thưởng (+{quest.xpReward} XP)</span>
                      </button>
                    ) : (
                      <div className="w-full flex items-center justify-between gap-2">
                        {/* Increment Progress Step */}
                        <button
                          id={`btn-step-quest-${quest.id}`}
                          onClick={() => handleIncrementProgress(quest.id)}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-semibold transition-all flex items-center gap-1 shrink-0"
                          title="Tăng tiến độ nhiệm vụ thêm 1 bước"
                        >
                          <span>+1 {quest.unit}</span>
                        </button>

                        {/* Direct Navigation Button to Feature */}
                        {quest.targetTab && onNavigateTab && (
                          <button
                            id={`btn-nav-quest-${quest.id}`}
                            onClick={() => onNavigateTab(quest.targetTab!)}
                            className="flex-1 py-1.5 px-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-semibold transition-all flex items-center justify-center gap-1 truncate"
                          >
                            <span>Mở tính năng</span>
                            <ChevronRight className="w-3 h-3 shrink-0" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 1: Mini-Game Equation Balancer */}
      {activeTab === "balancer" && (
        <div className="bg-slate-900/40 border border-slate-800 p-5 sm:p-6 rounded-3xl flex flex-col gap-6 shadow-xl">
          {/* Top Header & Progress Overview */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold border border-cyan-500/30">
                  25 Thử thách cân bằng
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                  +30 XP / phương trình
                </span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mt-1.5 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-cyan-400" />
                <span>Đấu Trường Cân Bằng Phương Trình Hóa Học</span>
              </h3>
            </div>

            {/* Progress counter */}
            <div className="bg-[#020617]/80 p-3 rounded-2xl border border-slate-800 flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block font-medium">Tiến độ chinh phục</span>
                <span className="text-sm font-mono font-bold text-cyan-300">
                  {solvedEquationIds.length} / {BALANCING_EQUATIONS.length} câu đã giải
                </span>
              </div>
              <div className="w-24 bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                  style={{
                    width: `${Math.round((solvedEquationIds.length / BALANCING_EQUATIONS.length) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Difficulty Filter & Navigation Bar */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* Difficulty filter tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
                {[
                  { id: "all", label: `Tất cả (${BALANCING_EQUATIONS.length})` },
                  { id: "Dễ", label: `Dễ (${BALANCING_EQUATIONS.filter((e) => e.difficulty === "Dễ").length})` },
                  { id: "Trung bình", label: `Trung bình (${BALANCING_EQUATIONS.filter((e) => e.difficulty === "Trung bình").length})` },
                  { id: "Khó", label: `Khó (${BALANCING_EQUATIONS.filter((e) => e.difficulty === "Khó").length})` },
                  { id: "Chuyên gia", label: `Chuyên gia (${BALANCING_EQUATIONS.filter((e) => e.difficulty === "Chuyên gia").length})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setEqDifficultyFilter(tab.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      eqDifficultyFilter === tab.id
                        ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                        : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Prev / Random / Next buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  id="btn-prev-eq"
                  onClick={handlePrevEquation}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 transition-colors"
                  title="Câu trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Câu trước</span>
                </button>

                <button
                  id="btn-random-eq"
                  onClick={() => {
                    const randomIdx = Math.floor(Math.random() * BALANCING_EQUATIONS.length);
                    handleSelectEquation(randomIdx);
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 transition-colors"
                  title="Ngẫu nhiên"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ngẫu nhiên</span>
                </button>

                <button
                  id="btn-next-eq"
                  onClick={handleNextEquation}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 transition-colors"
                  title="Câu tiếp theo"
                >
                  <span className="hidden sm:inline">Câu tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick jump pills 1 to 25 */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
              {BALANCING_EQUATIONS.map((eq, idx) => {
                const isCurrent = currentEqIdx === idx;
                const isSolved = solvedEquationIds.includes(eq.id);
                const matchesFilter = eqDifficultyFilter === "all" || eq.difficulty === eqDifficultyFilter;

                if (!matchesFilter) return null;

                return (
                  <button
                    key={eq.id}
                    onClick={() => handleSelectEquation(idx)}
                    className={`min-w-8 h-8 px-2 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-0.5 transition-all shrink-0 ${
                      isCurrent
                        ? "bg-cyan-500 text-black ring-2 ring-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                        : isSolved
                        ? "bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900/60"
                        : "bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                    title={`Câu ${idx + 1} - ${eq.difficulty}${isSolved ? " (Đã giải đúng)" : ""}`}
                  >
                    <span>{idx + 1}</span>
                    {isSolved && <span className="text-[10px]">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Question Info Header */}
          <div className="flex items-center justify-between bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 font-mono text-xs font-bold border border-cyan-800">
                Câu {currentEqIdx + 1} / {BALANCING_EQUATIONS.length}
              </span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                  currentEquation.difficulty === "Dễ"
                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-800"
                    : currentEquation.difficulty === "Trung bình"
                    ? "bg-cyan-950/60 text-cyan-300 border-cyan-800"
                    : currentEquation.difficulty === "Khó"
                    ? "bg-amber-950/60 text-amber-300 border-amber-800"
                    : "bg-purple-950/60 text-purple-300 border-purple-800"
                }`}
              >
                Độ khó: {currentEquation.difficulty}
              </span>
            </div>

            {solvedEquationIds.includes(currentEquation.id) && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>Đã thăng bằng đúng</span>
              </span>
            )}
          </div>

          {/* Interactive Equation Canvas */}
          <div className="p-6 bg-[#020617] rounded-2xl border border-slate-800 flex flex-wrap items-center justify-center gap-3 font-mono text-base md:text-xl shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]">
            {/* Reactants */}
            {currentEquation.reactants.map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-500 font-bold">+</span>}
                <input
                  id={`coeff-r-${i}`}
                  type="number"
                  min="1"
                  max="50"
                  value={userCoeffs[`r_${i}`] || ""}
                  placeholder="1"
                  onChange={(e) =>
                    setUserCoeffs({
                      ...userCoeffs,
                      [`r_${i}`]: parseInt(e.target.value) || 1,
                    })
                  }
                  className="w-12 h-12 bg-slate-900 border-2 border-cyan-500/60 focus:border-cyan-400 text-cyan-300 text-center font-bold rounded-xl focus:outline-none shadow-inner focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                />
                <span className="text-white font-bold">{r.formula}</span>
              </div>
            ))}

            {/* Arrow */}
            <span className="text-amber-400 font-bold mx-2">→</span>

            {/* Products */}
            {currentEquation.products.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-500 font-bold">+</span>}
                <input
                  id={`coeff-p-${i}`}
                  type="number"
                  min="1"
                  max="50"
                  value={userCoeffs[`p_${i}`] || ""}
                  placeholder="1"
                  onChange={(e) =>
                    setUserCoeffs({
                      ...userCoeffs,
                      [`p_${i}`]: parseInt(e.target.value) || 1,
                    })
                  }
                  className="w-12 h-12 bg-slate-900 border-2 border-emerald-500/60 focus:border-emerald-400 text-emerald-300 text-center font-bold rounded-xl focus:outline-none shadow-inner focus:shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                />
                <span className="text-white font-bold">{p.formula}</span>
              </div>
            ))}
          </div>

          {/* Hint Card */}
          <div className="p-3.5 bg-[#020617]/70 border border-slate-800 rounded-2xl text-xs text-slate-300 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-400 block mb-0.5">Gợi ý tư duy khoa học:</strong>
              <span>{currentEquation.hint}</span>
            </div>
          </div>

          {/* Action Check & Feedback */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                id="btn-check-balance"
                onClick={handleCheckEquation}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Kiểm tra cân bằng (+30 XP)</span>
              </button>

              {isEqSuccess && (
                <button
                  onClick={handleNextEquation}
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse"
                >
                  <span>Câu tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {isEqSuccess !== null && (
              <div
                className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
                  isEqSuccess
                    ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                    : "bg-rose-950/60 border-rose-500 text-rose-300"
                }`}
              >
                {isEqSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Xuất sắc! Phương trình đã được thăng bằng hoàn hảo!</span>
                  </>
                ) : (
                  <>
                    <HelpCircle className="w-4 h-4 text-rose-400" />
                    <span>Chưa chính xác. Hãy kiểm tra lại số nguyên tử ở cả 2 vế!</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Chemistry Riddle Mystery */}
      {activeTab === "riddle" && (
        <div className="bg-slate-900/40 border border-slate-800 p-5 sm:p-6 rounded-3xl flex flex-col gap-6 shadow-xl">
          {/* Top Header & Progress Overview */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                  {CHEM_RIDDLES.length} Bí ẩn Bảng tuần hoàn
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold border border-cyan-500/30">
                  Tối đa +50 XP / câu
                </span>
              </div>
              <h3 className="text-base md:text-xl font-bold text-white mt-1.5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Giải Mã Nguyên Tố Bí Ẩn: "Tôi Là Ai?"</span>
              </h3>
            </div>

            {/* Progress counter */}
            <div className="bg-[#020617]/80 p-3 rounded-2xl border border-slate-800 flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block font-medium">Tiến độ giải mã</span>
                <span className="text-sm font-mono font-bold text-amber-300">
                  {solvedRiddleIds.length} / {CHEM_RIDDLES.length} nguyên tố
                </span>
              </div>
              <div className="w-24 bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                  style={{
                    width: `${Math.round((solvedRiddleIds.length / CHEM_RIDDLES.length) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Bar & Quick Jump Pills */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400 font-medium">
                Chọn câu đố ({currentRiddleIdx + 1}/{CHEM_RIDDLES.length}):
              </span>

              {/* Prev / Random / Next buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  id="btn-prev-riddle"
                  onClick={handlePrevRiddle}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 transition-colors"
                  title="Câu trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Câu trước</span>
                </button>

                <button
                  id="btn-random-riddle"
                  onClick={handleRandomRiddle}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 transition-colors"
                  title="Ngẫu nhiên"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ngẫu nhiên</span>
                </button>

                <button
                  id="btn-next-riddle"
                  onClick={handleNextRiddle}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1 transition-colors"
                  title="Câu tiếp theo"
                >
                  <span className="hidden sm:inline">Câu tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick jump pills 1 to 23 */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
              {CHEM_RIDDLES.map((riddle, idx) => {
                const isCurrent = currentRiddleIdx === idx;
                const isSolved = solvedRiddleIds.includes(riddle.id);

                return (
                  <button
                    key={riddle.id}
                    onClick={() => handleSelectRiddle(idx)}
                    className={`min-w-8 h-8 px-2 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-0.5 transition-all shrink-0 ${
                      isCurrent
                        ? "bg-amber-500 text-black ring-2 ring-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                        : isSolved
                        ? "bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900/60"
                        : "bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                    title={`Câu đố ${idx + 1}${isSolved ? ` - Đã giải mã (${riddle.symbol})` : ""}`}
                  >
                    <span>{idx + 1}</span>
                    {isSolved && <span className="text-[10px]">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Question Info Header */}
          <div className="flex items-center justify-between bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-amber-950 text-amber-300 font-mono text-xs font-bold border border-amber-800">
                Câu đố {currentRiddleIdx + 1} / {CHEM_RIDDLES.length}
              </span>
              <span className="text-xs text-slate-300">
                Điểm thưởng hiện tại: <strong className="text-amber-400">+{Math.max(15, 50 - (revealedCluesCount - 1) * 10)} XP</strong>
              </span>
            </div>

            {solvedRiddleIds.includes(currentRiddle.id) && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>Đã giải mã: {currentRiddle.symbol}</span>
              </span>
            )}
          </div>

          {/* Clues Card */}
          <div className="space-y-3">
            {currentRiddle.clues.slice(0, revealedCluesCount).map((clue, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#020617]/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-3 shadow-md transition-all animate-fadeIn"
              >
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-amber-500/30">
                  {idx + 1}
                </span>
                <p className="leading-relaxed mt-0.5">{clue}</p>
              </div>
            ))}
          </div>

          {/* Reveal Next Clue button */}
          {revealedCluesCount < currentRiddle.clues.length && !isRiddleSolved && (
            <div className="flex justify-between items-center bg-slate-950/40 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400">
                Còn {currentRiddle.clues.length - revealedCluesCount} manh mối chưa mở
              </span>
              <button
                id="btn-reveal-clue"
                onClick={() => setRevealedCluesCount((prev) => prev + 1)}
                className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Mở manh mối {revealedCluesCount + 1} (-10 XP)</span>
              </button>
            </div>
          )}

          {/* Guess Input Form */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              id="input-riddle-guess"
              type="text"
              value={riddleGuess}
              onChange={(e) => setRiddleGuess(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCheckRiddle();
                }
              }}
              placeholder="Nhập tên nguyên tố (tiếng Việt/Anh) hoặc ký hiệu hóa học (VD: Fe, Sắt, Cu, Oxi, Au...)"
              className="flex-1 bg-slate-900/80 border border-slate-700 text-slate-100 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_12px_rgba(245,158,11,0.25)]"
            />
            <button
              id="btn-submit-riddle"
              onClick={handleCheckRiddle}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Đoán ngay</span>
            </button>
          </div>

          {/* Incorrect Guess Notice */}
          {isRiddleSolved === false && (
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/50 text-xs text-rose-300 flex items-center gap-2.5 animate-shake">
              <HelpCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>
                Chưa chính xác rồi! Hãy suy nghĩ thêm, nhập tên tiếng Việt (có dấu hoặc không dấu) hoặc ký hiệu hóa học, hoặc bấm <strong>"Mở manh mối"</strong> để nhận thêm trợ giúp!
              </span>
            </div>
          )}

          {/* Solved Explanation Card */}
          {isRiddleSolved && (
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 space-y-3 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-bold text-sm text-emerald-300 pb-2 border-b border-emerald-900/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Chính xác! Đó chính là {currentRiddle.mysteryName} ({currentRiddle.symbol})!</span>
                </div>
                <button
                  onClick={handleNextRiddle}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                >
                  <span>Câu đố tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                {currentRiddle.explanation}
              </p>

              <div className="pt-2 border-t border-emerald-900/60 text-amber-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Fun Fact thú vị:</strong> {currentRiddle.bonusFunFact}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Badges Collection */}
      {activeTab === "badges" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userStats.badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-3xl border flex items-start gap-3.5 transition-all ${
                badge.unlocked
                  ? "bg-slate-900/60 border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                  : "bg-slate-950/40 border-slate-800/60 opacity-60"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 border ${
                  badge.unlocked
                    ? "bg-cyan-500/20 border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                    : "bg-slate-800 border-slate-700"
                }`}
              >
                {badge.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white">{badge.name}</h4>
                  {badge.unlocked && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold">
                      Đã đạt
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Leaderboard */}
      {activeTab === "leaderboard" && (
        <LeaderboardSection
          userStats={userStats}
          currentUser={currentUser}
          userProfile={userProfile}
          onRewardXP={onRewardXP}
        />
      )}

      {/* Tab 5: 24 Quests & Challenges System */}
      {activeTab === "quests" && (
        <div id="tab-content-quests" className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col gap-6 shadow-xl">
          {/* Header & Stats Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  Hệ Thống 24 Nhiệm Vụ & Thử Thách Hóa Học
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Hoàn thành các nhiệm vụ thực nghiệm, phản ứng hóa học và bài toán thực tế theo chuẩn GDPT 2026 để thăng cấp học vị!
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800 shadow-[0_0_10px_rgba(34,211,238,0.25)]">
                {localCompletedQuests.length} / {CHEMISTRY_QUESTS.length} Hoàn thành
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800 shadow-[0_0_10px_rgba(251,191,36,0.25)]">
                {CHEMISTRY_QUESTS.filter((q) => localCompletedQuests.includes(q.id)).reduce(
                  (acc, q) => acc + q.xpReward,
                  0
                )}{" "}
                XP Đã tích lũy
              </span>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.5)]"
              style={{
                width: `${(localCompletedQuests.length / CHEMISTRY_QUESTS.length) * 100}%`,
              }}
            />
          </div>

          {/* Filter Pills & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {[
                { id: "all", label: `Tất cả (${CHEMISTRY_QUESTS.length})` },
                {
                  id: "precipitate",
                  label: `Kết tủa (${CHEMISTRY_QUESTS.filter((q) => q.category === "precipitate").length})`,
                },
                {
                  id: "gas",
                  label: `Khí (${CHEMISTRY_QUESTS.filter((q) => q.category === "gas").length})`,
                },
                {
                  id: "redox",
                  label: `Oxi hóa-khử (${CHEMISTRY_QUESTS.filter((q) => q.category === "redox").length})`,
                },
                {
                  id: "indicator",
                  label: `Chỉ thị (${CHEMISTRY_QUESTS.filter((q) => q.category === "indicator").length})`,
                },
                {
                  id: "neutralization",
                  label: `Axit-Bazơ (${CHEMISTRY_QUESTS.filter((q) => q.category === "neutralization").length})`,
                },
                {
                  id: "combustion",
                  label: `Cháy nổ (${CHEMISTRY_QUESTS.filter((q) => q.category === "combustion").length})`,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setQuestCategoryFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all font-medium ${
                    questCategoryFilter === tab.id
                      ? "bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                      : "bg-[#020617]/80 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative shrink-0 md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={questSearchQuery}
                onChange={(e) => setQuestSearchQuery(e.target.value)}
                placeholder="Tìm tên nhiệm vụ, gợi ý..."
                className="w-full bg-[#020617]/90 border border-slate-800 rounded-full pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Grid of 24 Quest Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CHEMISTRY_QUESTS.filter((q) => {
              const matchesCategory =
                questCategoryFilter === "all" || q.category === questCategoryFilter;
              const matchesSearch =
                q.title.toLowerCase().includes(questSearchQuery.toLowerCase()) ||
                q.hint.toLowerCase().includes(questSearchQuery.toLowerCase()) ||
                q.categoryLabel.toLowerCase().includes(questSearchQuery.toLowerCase());
              return matchesCategory && matchesSearch;
            }).map((quest) => {
              const isCompleted = localCompletedQuests.includes(quest.id);

              return (
                <div
                  key={quest.id}
                  className={`p-4 rounded-2xl border text-xs flex flex-col justify-between gap-3 transition-all ${
                    isCompleted
                      ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                      : "bg-[#020617]/70 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        )}
                        <h4 className="font-bold text-white leading-snug">
                          {quest.title}
                        </h4>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800">
                        +{quest.xpReward} XP
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed pl-4">
                      {quest.hint}
                    </p>

                    {/* Quest Questions Quick Launcher */}
                    {quest.questions && quest.questions.length > 0 && (
                      <button
                        id={`btn-quest-quiz-${quest.id}`}
                        onClick={() => {
                          setActiveQuizQuest(quest);
                          setActiveQuizQuestionIdx(0);
                        }}
                        className="w-full mt-2 py-2 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/60 text-cyan-200 text-xs flex items-center justify-between transition-all group shadow-sm"
                      >
                        <span className="flex items-center gap-1.5 font-medium">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                          <span>Thử thách {quest.questions.length} câu hỏi nhiệm vụ</span>
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-cyan-400 font-semibold bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-700/50">
                          <span>Làm bài</span>
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px]">
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                        {quest.categoryLabel}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                        Lớp {quest.grade}
                      </span>
                    </div>

                    {isCompleted ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đã hoàn thành
                      </span>
                    ) : (
                      <button
                        id={`btn-complete-quest-${quest.id}`}
                        onClick={() => {
                          confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
                          setLocalCompletedQuests((prev) => [...prev, quest.id]);
                          onRewardXP(quest.xpReward, `Hoàn thành nhiệm vụ: ${quest.title}`);
                        }}
                        className="px-2.5 py-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all flex items-center gap-1"
                      >
                        <span>Nhận thưởng</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Interactive Quest Quiz Modal (5 questions per quest) */}
      {activeQuizQuest && (
        <div
          id="modal-quest-quiz"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveQuizQuest(null);
          }}
        >
          <div className="bg-[#090e1a] border border-cyan-800/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 bg-slate-900/50 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {activeQuizQuest.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    Lớp {activeQuizQuest.grade}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold text-amber-400 bg-amber-950/70 border border-amber-800">
                    +{activeQuizQuest.xpReward} XP
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-2 leading-snug">
                  {activeQuizQuest.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveQuizQuest(null)}
                className="p-1.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Tabs */}
            {activeQuizQuest.questions && activeQuizQuest.questions.length > 0 && (
              <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-2">
                  {activeQuizQuest.questions.map((q, idx) => {
                    const ans = userQuizAnswers[`${activeQuizQuest.id}-${idx}`];
                    const isAnswered = ans !== undefined;
                    const isCorrect = ans === q.correctIndex;
                    const isCurrent = activeQuizQuestionIdx === idx;

                    return (
                      <button
                        key={q.id}
                        onClick={() => setActiveQuizQuestionIdx(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                          isCurrent
                            ? "bg-cyan-500 text-black shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                            : isAnswered
                            ? isCorrect
                              ? "bg-emerald-950 text-emerald-300 border border-emerald-700"
                              : "bg-rose-950 text-rose-300 border border-rose-700"
                            : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                        }`}
                      >
                        <span>Câu {idx + 1}</span>
                        {isAnswered && (
                          <span className="text-[10px]">
                            {isCorrect ? "✓" : "✗"}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="text-xs font-mono text-slate-400 shrink-0">
                  {
                    activeQuizQuest.questions.filter(
                      (_, i) => userQuizAnswers[`${activeQuizQuest.id}-${i}`] !== undefined
                    ).length
                  }
                  / {activeQuizQuest.questions.length} đã trả lời
                </div>
              </div>
            )}

            {/* Question Body */}
            {activeQuizQuest.questions && activeQuizQuest.questions[activeQuizQuestionIdx] && (
              <div className="p-6 overflow-y-auto space-y-5 flex-1">
                {(() => {
                  const currentQ = activeQuizQuest.questions[activeQuizQuestionIdx];
                  const qKey = `${activeQuizQuest.id}-${activeQuizQuestionIdx}`;
                  const selectedOpt = userQuizAnswers[qKey];
                  const isAnswered = selectedOpt !== undefined;

                  return (
                    <div className="space-y-4">
                      {/* Level Badge */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-cyan-400 font-mono">
                          Câu {activeQuizQuestionIdx + 1} trên {activeQuizQuest.questions.length}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-800">
                          {currentQ.level}
                        </span>
                      </div>

                      {/* Question Text */}
                      <p className="text-sm font-medium text-slate-100 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                        {currentQ.questionText}
                      </p>

                      {/* 4 Options */}
                      <div className="space-y-2.5">
                        {currentQ.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          const isOptionCorrect = optIdx === currentQ.correctIndex;

                          let btnClasses =
                            "w-full text-left p-3.5 rounded-2xl border text-xs transition-all flex items-start gap-3 ";
                          if (!isAnswered) {
                            btnClasses +=
                              "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-cyan-500/60 hover:bg-slate-800/60";
                          } else if (isOptionCorrect) {
                            btnClasses +=
                              "bg-emerald-950/60 border-emerald-600 text-emerald-200 font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                          } else if (isOptionSelected && !isOptionCorrect) {
                            btnClasses +=
                              "bg-rose-950/60 border-rose-600 text-rose-200";
                          } else {
                            btnClasses +=
                              "bg-slate-900/30 border-slate-800/60 text-slate-500 opacity-60";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isAnswered}
                              onClick={() => {
                                setUserQuizAnswers((prev) => ({
                                  ...prev,
                                  [qKey]: optIdx,
                                }));
                              }}
                              className={btnClasses}
                            >
                              <span
                                className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center font-mono font-bold text-xs ${
                                  isAnswered && isOptionCorrect
                                    ? "bg-emerald-500 text-black"
                                    : isAnswered && isOptionSelected
                                    ? "bg-rose-500 text-white"
                                    : "bg-slate-800 text-slate-300"
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="leading-relaxed pt-0.5">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation card after answering */}
                      {isAnswered && (
                        <div
                          className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 ${
                            selectedOpt === currentQ.correctIndex
                              ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-200"
                              : "bg-amber-950/30 border-amber-800/60 text-amber-200"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold">
                            {selectedOpt === currentQ.correctIndex ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>Chính xác!</span>
                              </>
                            ) : (
                              <>
                                <AlertCircle className="w-4 h-4 text-amber-400" />
                                <span>Chưa chính xác!</span>
                              </>
                            )}
                          </div>
                          <p className="text-slate-300">
                            <span className="font-semibold text-white">Giải thích khoa học: </span>
                            {currentQ.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Modal Footer Controls */}
            <div className="p-5 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between gap-3">
              <button
                disabled={activeQuizQuestionIdx === 0}
                onClick={() => setActiveQuizQuestionIdx((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              {activeQuizQuest.questions && (
                <div className="flex items-center gap-2">
                  {/* If not on last question, show next question button */}
                  {activeQuizQuestionIdx < activeQuizQuest.questions.length - 1 ? (
                    <button
                      onClick={() =>
                        setActiveQuizQuestionIdx((prev) =>
                          Math.min(activeQuizQuest.questions!.length - 1, prev + 1)
                        )
                      }
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-1.5 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                    >
                      <span>Câu tiếp theo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    /* On last question: Complete button */
                    <button
                      onClick={() => {
                        if (!localCompletedQuests.includes(activeQuizQuest.id)) {
                          confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
                          setLocalCompletedQuests((prev) => [...prev, activeQuizQuest.id]);
                          onRewardXP(
                            activeQuizQuest.xpReward,
                            `Hoàn thành 5 câu hỏi nhiệm vụ: ${activeQuizQuest.title}`
                          );
                        }
                        setActiveQuizQuest(null);
                      }}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-black text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Hoàn thành nhiệm vụ & Đóng</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
