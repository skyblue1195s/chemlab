import React, { useState, useEffect } from "react";
import { MoleculeViewer3D } from "./components/MoleculeViewer3D";
import { PeriodicTable } from "./components/PeriodicTable";
import { VirtualLab } from "./components/VirtualLab";
import { ReactionSimulator } from "./components/ReactionSimulator";
import { CurriculumView } from "./components/CurriculumView";
import { GamificationHub } from "./components/GamificationHub";
import { CommunityForum } from "./components/CommunityForum";
import { AITutorChat } from "./components/AITutorChat";
import { THPTExamPractice } from "./components/THPTExamPractice";
import { AuthModal } from "./components/AuthModal";
import { NavigationMenu } from "./components/NavigationMenu";
import { VisitorStatsBadge } from "./components/VisitorStatsBadge";
import {
  subscribeToAuth,
  loadOrCreateUserProfile,
  saveUserProfile,
  FirebaseUserProfile,
} from "./lib/firebase";
import { User } from "firebase/auth";
import { GradeLevel, UserStats, ActiveTab } from "./types";
import {
  Rotate3d,
  Atom,
  FlaskConical,
  Zap,
  BookOpen,
  Trophy,
  MessageSquare,
  Bot,
  Flame,
  Sparkles,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  Cloud,
  LogIn,
  Mail,
} from "lucide-react";
import { usePageSEO } from "./hooks/usePageSEO";
import { useLanguage } from "./i18n/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function App() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("periodic")) return "periodic-table";
      if (hash.includes("lab")) return "virtual-lab";
      if (hash.includes("reaction")) return "reactions";
      if (hash.includes("curriculum")) return "curriculum";
      if (hash.includes("thpt") || hash.includes("exam")) return "thpt-practice";
      if (hash.includes("gamification") || hash.includes("arena")) return "gamification";
      if (hash.includes("community") || hash.includes("forum")) return "community";
      if (hash.includes("ai") || hash.includes("tutor")) return "ai-tutor";
    }
    return "molecules";
  });
  const [currentGrade, setCurrentGrade] = useState<GradeLevel>(10);

  // Dynamic SEO meta, titles, and Open Graph management
  usePageSEO(activeTab, currentGrade, language);

  const [completedConcepts, setCompletedConcepts] = useState<string[]>([
    "g10-c1-1",
  ]);
  const [xpToast, setXpToast] = useState<{ xp: number; label: string } | null>(
    null
  );

  // Firebase Authentication & User Profile state
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<FirebaseUserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const [userStats, setUserStats] = useState<UserStats>({
    xp: 450,
    level: 3,
    title: "Bậc Thầy Axit-Bazơ",
    streakDays: 5,
    badges: [
      {
        id: "b1",
        name: "Bậc Thầy Axit-Bazơ",
        description: "Làm chủ thuyết Bronsted-Lowry và tính toán pH xuất sắc",
        icon: "🧪",
        unlocked: true,
      },
      {
        id: "b2",
        name: "Nhà Giả Kim 3D",
        description: "Khám phá và tương tác xoay 3D với hơn 5 phân tử hóa học",
        icon: "🌐",
        unlocked: true,
      },
      {
        id: "b3",
        name: "Thám Tử Bảng Tuần Hoàn",
        description: "Tra cứu và giải mã bí mật cấu hình e của 10 nguyên tố",
        icon: "⚛️",
        unlocked: true,
      },
      {
        id: "b4",
        name: "Vua Cân Bằng Phương Trình",
        description: "Hoàn thành 5 thử thách cân bằng phản ứng oxi hóa - khử",
        icon: "⚖️",
        unlocked: false,
      },
      {
        id: "b5",
        name: "Nhà Thám Hiểm GDPT 2026",
        description: "Hoàn thành trọn vẹn tất cả bài học của một học kỳ",
        icon: "🎓",
        unlocked: false,
      },
    ],
    completedQuests: ["q1"],
    grade: 10,
  });

  // Subscribe to Firebase Auth changes
  useEffect(() => {
    const unsubscribe = subscribeToAuth(async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const profile = await loadOrCreateUserProfile(user, {
            xp: userStats.xp,
            level: userStats.level,
            streakDays: userStats.streakDays,
            title: userStats.title,
            completedQuests: userStats.completedQuests,
          });
          setUserProfile(profile);
          setUserStats((prev) => ({
            ...prev,
            xp: profile.xp,
            level: profile.level,
            streakDays: profile.streakDays || prev.streakDays,
            title: profile.title || prev.title,
            completedQuests: profile.completedQuests || prev.completedQuests,
          }));
        } catch (err) {
          console.error("Error loading user profile from Firestore:", err);
        }
      } else {
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleRewardXP = (xp: number, label: string) => {
    setUserStats((prev) => {
      const newXp = prev.xp + xp;
      const newLevel = Math.floor(newXp / 150) + 1;
      let newTitle = prev.title;
      if (newLevel >= 4) newTitle = "Nhà Giả Kim Huyền Thoại";
      else if (newLevel >= 3) newTitle = "Bậc Thầy Axit-Bazơ";
      else if (newLevel >= 2) newTitle = "Tập Sự Pha Chế 3D";

      // Sync to Firebase Firestore if logged in
      if (currentUser) {
        saveUserProfile(currentUser.uid, {
          xp: newXp,
          level: newLevel,
          title: newTitle,
        }).catch((err) => console.error("Could not sync XP to Firestore:", err));
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        title: newTitle,
      };
    });

    setXpToast({ xp, label });
    setTimeout(() => {
      setXpToast(null);
    }, 3500);
  };

  const handleCompleteConcept = (conceptId: string, xpEarned: number) => {
    if (!completedConcepts.includes(conceptId)) {
      setCompletedConcepts((prev) => [...prev, conceptId]);
      handleRewardXP(xpEarned, "Hoàn thành xuất sắc bài tập khái niệm");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* XP Toast Notification */}
      {xpToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#020617]/95 text-white px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.35)] flex items-center gap-3 border border-cyan-500/40 backdrop-blur-md animate-bounce">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            <Sparkles className="w-4 h-4 text-cyan-300" />
          </div>
          <div className="text-xs">
            <span className="font-bold text-cyan-400 block tracking-wide">+{xpToast.xp} {t.header.xpGained}</span>
            <span className="text-[11px] text-slate-300">{xpToast.label}</span>
          </div>
        </div>
      )}

      {/* Main Top Header - Immersive UI Style */}
      <header className="sticky top-0 z-40 bg-[#020617]/85 backdrop-blur-md border-b border-slate-800/50 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-3">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Platform Title */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <span className="text-black font-black text-lg">C</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black tracking-tight text-white">
                  CHEM<span className="text-cyan-400">LAB</span> INTERACTIVE 3D
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  GDPT 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t.header.tagline}
              </p>
            </div>
          </div>

          {/* User Gamification Telemetry & Stats */}
          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 shrink-0">
            {/* Level & XP with Mini Progress Bar */}
            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t.header.level} {userStats.level}</span>
                <span className="text-cyan-400 font-mono text-xs font-bold">{userStats.xp} XP</span>
              </div>
              <div className="w-24 sm:w-28 h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-500 rounded-full"
                  style={{ width: `${Math.min(100, ((userStats.xp % 150) / 150) * 100)}%` }}
                />
              </div>
            </div>

            {/* Streak Flame Pill */}
            <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-xs font-bold text-orange-400 shrink-0 whitespace-nowrap">
              <span className="text-orange-400 text-sm leading-none">🔥</span>
              <span className="font-mono">{userStats.streakDays}</span>
              <span className="text-orange-400/80 text-[11px] font-medium hidden sm:inline whitespace-nowrap">{t.header.streak}</span>
            </div>

            {/* Total Visitors Counter Badge */}
            <VisitorStatsBadge variant="header" currentGrade={currentGrade} />

            {/* Gmail Authentication / User Profile Button */}
            {!currentUser ? (
              <button
                id="header-btn-login-gmail"
                onClick={() => setIsAuthModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all animate-pulse shrink-0 whitespace-nowrap"
                title={t.header.loginTitle}
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#020617" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#020617" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#020617" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#020617" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="whitespace-nowrap">{t.header.loginGmail}</span>
              </button>
            ) : (
              <button
                id="header-btn-user-profile"
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-slate-900 border border-emerald-500/40 hover:border-emerald-400 transition-all text-xs group shrink-0 whitespace-nowrap"
                title={t.header.syncTitle}
              >
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "User"}
                    className="w-7 h-7 rounded-full object-cover border border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">
                    {currentUser.displayName ? currentUser.displayName[0] : "HS"}
                  </div>
                )}
                <div className="flex flex-col items-start leading-tight">
                  <span className="font-bold text-white max-w-[85px] truncate text-[11px] group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                    {currentUser.displayName?.split(" ").slice(-1)[0] || t.header.student}
                  </span>
                  <span className="text-[9px] text-emerald-400 flex items-center gap-0.5 whitespace-nowrap">
                    <Cloud className="w-2.5 h-2.5 shrink-0" /> Cloud Sync
                  </span>
                </div>
              </button>
            )}

            {/* Grade Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-900/90 rounded-full border border-slate-800 text-xs shrink-0 whitespace-nowrap">
              {([10, 11, 12] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  id={`header-grade-${g}`}
                  onClick={() => setCurrentGrade(g)}
                  className={`px-3 py-1 rounded-full font-bold text-xs transition-all whitespace-nowrap shrink-0 ${
                    currentGrade === g
                      ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t.header.gradePrefix} {g}
                </button>
              ))}
            </div>

            {/* Language Switcher EN / VN */}
            <LanguageSwitcher variant="header" />
          </div>
        </div>
      </header>

      {/* Grouped Navigation Menu with Dropdown Sub-menus */}
      <NavigationMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentGrade={currentGrade}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-8">
        {activeTab === "molecules" && <MoleculeViewer3D />}

        {activeTab === "periodic-table" && <PeriodicTable />}

        {activeTab === "virtual-lab" && <VirtualLab onRewardXP={handleRewardXP} />}

        {activeTab === "reactions" && <ReactionSimulator onRewardXP={handleRewardXP} />}

        {activeTab === "curriculum" && (
          <CurriculumView
            currentGrade={currentGrade}
            onSelectGrade={setCurrentGrade}
            completedConcepts={completedConcepts}
            onCompleteConcept={handleCompleteConcept}
            onOpenTHPTExam={() => setActiveTab("thpt-practice")}
          />
        )}

        {activeTab === "thpt-practice" && (
          <THPTExamPractice onRewardXP={handleRewardXP} />
        )}

        {activeTab === "gamification" && (
          <GamificationHub
            userStats={userStats}
            onRewardXP={handleRewardXP}
            onNavigateTab={(tab) => setActiveTab(tab as any)}
            currentUser={currentUser}
            userProfile={userProfile}
          />
        )}

        {activeTab === "community" && <CommunityForum onRewardXP={handleRewardXP} />}

        {activeTab === "ai-tutor" && <AITutorChat />}
      </main>

      {/* SEO & Semantic Footer */}
      <footer className="border-t border-slate-900 bg-[#020617] py-10 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 text-xs text-slate-500">
        <div className="w-full space-y-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: App Identity & Description */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-cyan-400 flex items-center justify-center font-black text-black text-base shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                  C
                </div>
                <div>
                  <span className="font-black text-white text-sm tracking-tight">
                    CHEM<span className="text-cyan-400">LAB</span> INTERACTIVE 3D
                  </span>
                  <span className="text-[9px] ml-2 px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                    GDPT 2026
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
                {t.footer.aboutDesc}
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                <VisitorStatsBadge variant="footer" currentGrade={currentGrade} />
              </div>
            </div>

            {/* Column 2: Khám Phá Công Cụ Học Tập */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                {t.footer.toolsTitle}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveTab("molecules")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.molecules3D}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("periodic-table")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.periodicTable}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("virtual-lab")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.virtualLab}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("reactions")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.reactionSim}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("ai-tutor")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.aiTutor}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Luyện Thi & Thi Đua */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                {t.footer.examsTitle}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveTab("thpt-practice")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.thptExams}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("curriculum")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.curriculumMaps}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("gamification")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.leaderboard}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("community")}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    • {t.footer.forum}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Curricula & Copyright */}
          <div className="pt-6 border-t border-slate-900/80 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>
              {t.footer.copyright}
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500">{t.footer.author}:</span>
                <strong className="text-cyan-300 font-semibold">Điều Trần</strong>
              </span>
              <span className="text-slate-700">•</span>
              <a
                href="mailto:khacdieu1195@gmail.com"
                className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                title={t.footer.contactEmail}
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="underline underline-offset-2 font-mono text-[11px]">khacdieu1195@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gmail Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        userProfile={userProfile}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
        }}
        onLogoutSuccess={() => {
          setCurrentUser(null);
          setUserProfile(null);
        }}
      />
    </div>
  );
}
