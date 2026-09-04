import React, { useState, useEffect } from "react";
import { UserStats, LeaderboardUser } from "../types";
import { User as FirebaseUser } from "firebase/auth";
import { FirebaseUserProfile } from "../lib/firebase";
import {
  Trophy,
  Flame,
  Zap,
  Award,
  Sparkles,
  Crown,
  Medal,
  Search,
  RefreshCw,
  User,
  CheckCircle2,
  Filter,
  Edit3,
  Camera,
  Star,
  Check,
  X,
} from "lucide-react";

// Preset scientist & chemistry-themed avatar collection for selection
export const PRESET_AVATARS = [
  {
    id: "curie",
    name: "Marie Curie",
    role: "Bác học 2 giải Nobel Hóa học & Vật lý",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "mendeleev",
    name: "Dmitri Mendeleev",
    role: "Cha đẻ Bảng tuần hoàn các nguyên tố",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rutherford",
    name: "Ernest Rutherford",
    role: "Khám phá cấu trúc hạt nhân nguyên tử",
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "bohr",
    name: "Niels Bohr",
    role: "Mô hình quỹ đạo lượng tử electron",
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "franklin",
    name: "Rosalind Franklin",
    role: "Nhà tinh thể học cấu trúc phân tử DNA",
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "lavoisier",
    name: "Antoine Lavoisier",
    role: "Định luật bảo toàn khối lượng",
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "student_f",
    name: "Học Viên Nghiên Cứu (Nữ)",
    role: "Thực nghiệm phòng lab 3D",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "student_m",
    name: "Học Viên Nghiên Cứu (Nam)",
    role: "Chiến binh THPT GDPT 2026",
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "student_bio",
    name: "Nhà Hóa Dược Trẻ",
    role: "Chuyên gia liên kết phân tử",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "student_tech",
    name: "Chuyên Viên Nhiệt Động",
    role: "Bậc thầy tính toán biến thiên enthalpy",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
];

interface LeaderboardSectionProps {
  userStats: UserStats;
  currentUser?: FirebaseUser | null;
  userProfile?: FirebaseUserProfile | null;
  onRewardXP: (xp: number, label: string) => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  userStats,
  currentUser,
  userProfile,
}) => {
  const [leaderboardList, setLeaderboardList] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gradeFilter, setGradeFilter] = useState<"all" | "10" | "11" | "12">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState<boolean>(false);

  // User's custom settings (saved locally or synced with server)
  const [customName, setCustomName] = useState<string>(() => {
    return (
      localStorage.getItem("chemlab_user_display_name") ||
      userProfile?.displayName ||
      currentUser?.displayName ||
      "Bạn (Học viên)"
    );
  });

  const [customAvatar, setCustomAvatar] = useState<string>(() => {
    return (
      localStorage.getItem("chemlab_user_avatar") ||
      userProfile?.photoURL ||
      currentUser?.photoURL ||
      PRESET_AVATARS[6].url
    );
  });

  const [tempName, setTempName] = useState<string>(customName);
  const [tempAvatar, setTempAvatar] = useState<string>(customAvatar);

  const currentUserId = currentUser?.uid || "chem_user_me";

  // Sync / Submit real user stats to server leaderboard
  const syncUserToLeaderboard = async (nameToUse = customName, avatarToUse = customAvatar) => {
    try {
      const response = await fetch("/api/leaderboard/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: currentUserId,
          name: nameToUse,
          avatar: avatarToUse,
          title: userStats.title || "Tập Sự Phòng Lab",
          grade: userStats.grade || 10,
          xp: userStats.xp,
          streak: userStats.streakDays,
          completedCount: (userStats.completedQuests || []).length,
          badge: userStats.badges?.find((b) => b.unlocked)?.name || "Chiến Binh Hóa Học",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.leaderboard) {
          setLeaderboardList(data.leaderboard);
        }
      }
    } catch (err) {
      console.error("Error syncing to leaderboard:", err);
    }
  };

  // Fetch full real leaderboard list
  const fetchLeaderboard = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/leaderboard?userId=${encodeURIComponent(currentUserId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.leaderboard) {
          setLeaderboardList(data.leaderboard);
        }
      }
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // On mount and when userStats change, sync real XP to leaderboard
  useEffect(() => {
    syncUserToLeaderboard().then(() => {
      fetchLeaderboard();
    });
  }, [userStats.xp, userStats.streakDays, userStats.title]);

  // Update name/avatar when user profile changes
  useEffect(() => {
    if (userProfile?.displayName && !localStorage.getItem("chemlab_user_display_name")) {
      setCustomName(userProfile.displayName);
      setTempName(userProfile.displayName);
    }
    if (userProfile?.photoURL && !localStorage.getItem("chemlab_user_avatar")) {
      setCustomAvatar(userProfile.photoURL);
      setTempAvatar(userProfile.photoURL);
    }
  }, [userProfile]);

  // Handle saving customization
  const handleSaveCustomization = () => {
    const trimmedName = tempName.trim() || "Bạn (Học viên)";
    setCustomName(trimmedName);
    setCustomAvatar(tempAvatar);
    localStorage.setItem("chemlab_user_display_name", trimmedName);
    localStorage.setItem("chemlab_user_avatar", tempAvatar);
    syncUserToLeaderboard(trimmedName, tempAvatar);
    setIsCustomizeModalOpen(false);
  };

  // Filtered leaderboard
  const filteredList = leaderboardList
    .filter((item) => {
      const matchesGrade = gradeFilter === "all" || String(item.grade) === gradeFilter;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGrade && matchesSearch;
    })
    .map((item) => ({
      ...item,
      isUser: item.id === currentUserId,
      avatar: item.id === currentUserId ? customAvatar : item.avatar,
      name: item.id === currentUserId ? customName : item.name,
      xp: item.id === currentUserId ? userStats.xp : item.xp,
      streak: item.id === currentUserId ? userStats.streakDays : item.streak,
    }))
    .sort((a, b) => b.xp - a.xp)
    .map((item, idx) => ({
      ...item,
      rank: idx + 1,
    }));

  const myRankItem = filteredList.find((item) => item.isUser);

  // Top 3 Podium winners
  const top1 = filteredList[0];
  const top2 = filteredList[1];
  const top3 = filteredList[2];

  return (
    <div id="tab-content-leaderboard" className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col gap-6 shadow-xl">
      {/* Header & Title */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.25)]">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white tracking-tight">
                  Bảng Xếp Hạng Thi Đua Học Tập Thực Tế
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                  GDPT 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Vinh danh học viên có điểm kinh nghiệm (XP), chuỗi ngày học tập và thành tích thực nghiệm xuất sắc nhất
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            id="btn-customize-profile-leaderboard"
            onClick={() => {
              setTempName(customName);
              setTempAvatar(customAvatar);
              setIsCustomizeModalOpen(true);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-sm group"
          >
            <Edit3 className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Đổi Avatar & Tên</span>
          </button>

          <button
            id="btn-refresh-leaderboard"
            onClick={() => {
              syncUserToLeaderboard();
              fetchLeaderboard();
            }}
            disabled={isLoading}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Làm mới dữ liệu</span>
          </button>
        </div>
      </div>

      {/* User's Current Standing Banner */}
      {myRankItem && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900/80 to-indigo-950/60 border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="relative shrink-0">
              <img
                src={myRankItem.avatar}
                alt={myRankItem.name}
                referrerPolicy="no-referrer"
                className="w-13 h-13 rounded-2xl object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              />
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-cyan-400 text-slate-950 font-black text-[10px] font-mono leading-none">
                #{myRankItem.rank}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">
                  {myRankItem.name} <span className="text-cyan-400 font-semibold">(Hồ sơ của bạn)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                  Lớp {userStats.grade || 10}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-2">
                <span className="text-amber-400 font-medium">{myRankItem.title}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 font-mono">Đã xong {userStats.completedQuests?.length || 1} nhiệm vụ</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 font-mono text-xs w-full sm:w-auto justify-end border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
            <div className="text-center sm:text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Chuỗi học tập</span>
              <span className="text-amber-400 font-bold flex items-center gap-1 justify-center sm:justify-end text-sm">
                <Flame className="w-4 h-4 fill-amber-400" /> {userStats.streakDays} ngày
              </span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center sm:text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Tổng tích lũy</span>
              <span className="text-cyan-400 font-black flex items-center gap-1 justify-center sm:justify-end text-sm">
                <Zap className="w-4 h-4 fill-cyan-400" /> {userStats.xp.toLocaleString("vi-VN")} XP
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Top 3 Podium Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {/* Top 2 - Á Quân */}
        {top2 && (
          <div className="order-2 md:order-1 p-5 rounded-3xl bg-slate-900/50 border border-slate-700/80 flex flex-col items-center text-center relative overflow-hidden group hover:border-slate-500 transition-all shadow-lg">
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-600 font-mono text-[10px] font-bold">
              Á QUÂN #2
            </div>
            <div className="relative mt-2 mb-3">
              <img
                src={top2.avatar}
                alt={top2.name}
                referrerPolicy="no-referrer"
                className="w-18 h-18 rounded-full object-cover border-2 border-slate-300 ring-4 ring-slate-400/20 shadow-[0_0_20px_rgba(203,213,225,0.3)]"
              />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-slate-300 text-slate-950 flex items-center justify-center font-black text-xs shadow-md border-2 border-slate-900">
                🥈
              </div>
            </div>
            <h4 className="font-bold text-white text-sm mt-1">{top2.name}</h4>
            <span className="text-[11px] text-slate-400 mt-0.5">{top2.title}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono mt-2">
              Khối {top2.grade}
            </span>

            <div className="w-full mt-4 pt-3 border-t border-slate-800 flex items-center justify-around font-mono text-xs">
              <span className="text-amber-400 flex items-center gap-1 font-semibold">
                <Flame className="w-3.5 h-3.5" /> {top2.streak}d
              </span>
              <span className="text-cyan-400 font-black">
                {top2.xp.toLocaleString("vi-VN")} XP
              </span>
            </div>
          </div>
        )}

        {/* Top 1 - Quán Quân (Gold Center Spotlight) */}
        {top1 && (
          <div className="order-1 md:order-2 p-6 rounded-3xl bg-gradient-to-b from-amber-950/30 via-slate-900/90 to-slate-950 border-2 border-amber-400/80 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_35px_rgba(251,191,36,0.25)] scale-100 md:-translate-y-2 transition-all">
            <div className="absolute top-3.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              <Crown className="w-3.5 h-3.5 fill-slate-950" /> QUÁN QUÂN #1
            </div>
            <div className="relative mt-8 mb-3">
              <img
                src={top1.avatar}
                alt={top1.name}
                referrerPolicy="no-referrer"
                className="w-22 h-22 rounded-full object-cover border-4 border-amber-400 ring-4 ring-amber-400/30 shadow-[0_0_25px_rgba(251,191,36,0.5)]"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-md border-2 border-slate-900">
                👑
              </div>
            </div>
            <h4 className="font-black text-white text-base mt-1 flex items-center gap-1.5">
              {top1.name}
              {top1.isUser && <span className="text-xs text-amber-400 font-bold">(Bạn)</span>}
            </h4>
            <span className="text-xs font-semibold text-amber-300/90 mt-0.5">{top1.title}</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700 font-mono font-bold">
                Khối {top1.grade}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {top1.completedCount || 24} bài tập
              </span>
            </div>

            <div className="w-full mt-4 pt-3.5 border-t border-amber-900/50 flex items-center justify-around font-mono text-xs">
              <span className="text-amber-400 flex items-center gap-1 font-bold text-sm">
                <Flame className="w-4 h-4 fill-amber-400" /> {top1.streak} ngày streak
              </span>
              <span className="text-cyan-300 font-black text-sm">
                {top1.xp.toLocaleString("vi-VN")} XP
              </span>
            </div>
          </div>
        )}

        {/* Top 3 - Quý Quân */}
        {top3 && (
          <div className="order-3 p-5 rounded-3xl bg-slate-900/50 border border-amber-800/40 flex flex-col items-center text-center relative overflow-hidden group hover:border-amber-700/60 transition-all shadow-lg">
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-amber-950/70 text-amber-400 border border-amber-800 font-mono text-[10px] font-bold">
              QUÝ QUÂN #3
            </div>
            <div className="relative mt-2 mb-3">
              <img
                src={top3.avatar}
                alt={top3.name}
                referrerPolicy="no-referrer"
                className="w-18 h-18 rounded-full object-cover border-2 border-amber-600 ring-4 ring-amber-600/20 shadow-[0_0_20px_rgba(217,119,6,0.3)]"
              />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-xs shadow-md border-2 border-slate-900">
                🥉
              </div>
            </div>
            <h4 className="font-bold text-white text-sm mt-1">{top3.name}</h4>
            <span className="text-[11px] text-slate-400 mt-0.5">{top3.title}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono mt-2">
              Khối {top3.grade}
            </span>

            <div className="w-full mt-4 pt-3 border-t border-slate-800 flex items-center justify-around font-mono text-xs">
              <span className="text-amber-400 flex items-center gap-1 font-semibold">
                <Flame className="w-3.5 h-3.5" /> {top3.streak}d
              </span>
              <span className="text-cyan-400 font-black">
                {top3.xp.toLocaleString("vi-VN")} XP
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        {/* Grade Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {[
            { id: "all", label: `Tất cả khối (${leaderboardList.length})` },
            { id: "10", label: "Khối 10" },
            { id: "11", label: "Khối 11" },
            { id: "12", label: "Khối 12" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setGradeFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 ${
                gradeFilter === tab.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative shrink-0 sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên học viên, danh hiệu..."
            className="w-full bg-[#020617]/90 border border-slate-800 rounded-full pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Full Leaderboard List */}
      <div className="space-y-2.5">
        {filteredList.map((item) => {
          const isGold = item.rank === 1;
          const isSilver = item.rank === 2;
          const isBronze = item.rank === 3;

          return (
            <div
              key={item.id}
              id={`rank-item-${item.rank}`}
              className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                item.isUser
                  ? "bg-cyan-950/40 border-cyan-500/80 shadow-[0_0_20px_rgba(34,211,238,0.2)] ring-1 ring-cyan-400/40"
                  : isGold
                  ? "bg-amber-950/20 border-amber-500/40"
                  : isSilver
                  ? "bg-slate-900/70 border-slate-700/60"
                  : isBronze
                  ? "bg-amber-950/10 border-amber-800/30"
                  : "bg-[#020617]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
              }`}
            >
              {/* Rank + Avatar + Name + Title */}
              <div className="flex items-center gap-3.5">
                {/* Rank Number Badge */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 ${
                    isGold
                      ? "bg-amber-400 text-slate-950 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                      : isSilver
                      ? "bg-slate-200 text-slate-950 shadow-[0_0_10px_rgba(226,232,240,0.5)]"
                      : isBronze
                      ? "bg-amber-600 text-white shadow-[0_0_10px_rgba(217,119,6,0.5)]"
                      : item.isUser
                      ? "bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  #{item.rank}
                </div>

                {/* Avatar with dynamic ring border */}
                <div className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className={`w-11 h-11 rounded-full object-cover border-2 ${
                      isGold
                        ? "border-amber-400 ring-2 ring-amber-400/50"
                        : isSilver
                        ? "border-slate-300 ring-2 ring-slate-400/40"
                        : isBronze
                        ? "border-amber-600 ring-2 ring-amber-600/40"
                        : item.isUser
                        ? "border-cyan-400 ring-2 ring-cyan-400/40"
                        : "border-slate-700"
                    }`}
                  />
                  {item.isUser && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-slate-950 flex items-center justify-center">
                      <Star className="w-2 h-2 text-slate-950 fill-slate-950" />
                    </span>
                  )}
                </div>

                {/* Name and Educational Title (NO SCHOOL) */}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-xs sm:text-sm">
                      {item.name}
                    </span>
                    {item.isUser && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold text-[10px]">
                        Bạn
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      Lớp {item.grade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-xs">
                    <span className="text-cyan-400/90 font-medium text-[11px]">
                      {item.title}
                    </span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="text-slate-400 text-[11px] hidden sm:inline">
                      {item.completedCount || 10} bài tập thực nghiệm
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats: Streak & XP */}
              <div className="flex items-center justify-between sm:justify-end gap-5 font-mono text-xs pl-11 sm:pl-0 border-t sm:border-t-0 border-slate-800/80 pt-2 sm:pt-0">
                <div className="flex items-center gap-1 text-amber-400 font-semibold bg-amber-950/40 px-2.5 py-1 rounded-xl border border-amber-900/50">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{item.streak} ngày</span>
                </div>

                <div className="flex items-center gap-1.5 text-cyan-300 font-black text-sm bg-cyan-950/40 px-3 py-1 rounded-xl border border-cyan-800/60 shadow-sm">
                  <Zap className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                  <span>{item.xp.toLocaleString("vi-VN")} XP</span>
                </div>
              </div>
            </div>
          );
        })}

        {filteredList.length === 0 && (
          <div className="text-center py-10 bg-slate-900/30 rounded-2xl border border-slate-800 text-slate-400 text-xs">
            Không tìm thấy học viên nào phù hợp với bộ lọc hiện tại.
          </div>
        )}
      </div>

      {/* Customize Name & Avatar Modal */}
      {isCustomizeModalOpen && (
        <div
          id="modal-customize-leaderboard-profile"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCustomizeModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-lg bg-[#090e1a] border-2 border-cyan-500/50 rounded-3xl p-6 shadow-[0_0_50px_rgba(34,211,238,0.3)] my-auto max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsCustomizeModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center">
                <Camera className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Cá Nhân Hóa Hồ Sơ & Avatar Thi Đua
                </h3>
                <p className="text-xs text-slate-400">
                  Chọn hình đại diện khoa học và đặt tên hiển thị trên bảng xếp hạng thực tế
                </p>
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-semibold text-slate-300 block">
                Tên hiển thị trên Bảng Xếp Hạng:
              </label>
              <input
                type="text"
                value={tempName}
                maxLength={40}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Nhập họ tên hoặc biệt danh học tập..."
                className="w-full bg-[#020617] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Current Selected Avatar Preview */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 mb-5 flex items-center gap-3.5">
              <img
                src={tempAvatar}
                alt="Selected Avatar Preview"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-white block">
                  Avatar đang chọn
                </span>
                <span className="text-[11px] text-cyan-300">
                  {PRESET_AVATARS.find((a) => a.url === tempAvatar)?.name || "Ảnh hồ sơ tùy chỉnh"}
                </span>
                <p className="text-[10px] text-slate-400">
                  {PRESET_AVATARS.find((a) => a.url === tempAvatar)?.role || "Được đồng bộ với tài khoản của bạn"}
                </p>
              </div>
            </div>

            {/* Google Profile Photo Option (if available) */}
            {(userProfile?.photoURL || currentUser?.photoURL) && (
              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Ảnh tài khoản Google:
                </span>
                <button
                  onClick={() =>
                    setTempAvatar(userProfile?.photoURL || currentUser?.photoURL || "")
                  }
                  className={`w-full p-2.5 rounded-2xl border flex items-center gap-3 text-left transition-all ${
                    tempAvatar === (userProfile?.photoURL || currentUser?.photoURL)
                      ? "bg-cyan-950/60 border-cyan-400 text-white"
                      : "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <img
                    src={userProfile?.photoURL || currentUser?.photoURL}
                    alt="Google Avatar"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-cyan-400/50"
                  />
                  <div className="flex-1">
                    <span className="text-xs font-bold block">Sử dụng ảnh đại diện Google</span>
                    <span className="text-[10px] text-slate-400">
                      {currentUser?.email || "Tài khoản Google liên kết"}
                    </span>
                  </div>
                  {tempAvatar === (userProfile?.photoURL || currentUser?.photoURL) && (
                    <Check className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>
            )}

            {/* Scientist & Student Avatars Grid */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold text-slate-300 block">
                Bộ sưu tập Avatar Nhà Khoa Học & Học Viên Hóa Học:
              </span>
              <div className="grid grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {PRESET_AVATARS.map((av) => {
                  const isSelected = tempAvatar === av.url;
                  return (
                    <button
                      key={av.id}
                      onClick={() => setTempAvatar(av.url)}
                      className={`p-2 rounded-2xl border flex items-center gap-2.5 text-left transition-all ${
                        isSelected
                          ? "bg-cyan-950/70 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                          : "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <img
                        src={av.url}
                        alt={av.name}
                        referrerPolicy="no-referrer"
                        className={`w-10 h-10 rounded-full object-cover border ${
                          isSelected ? "border-cyan-400" : "border-slate-700"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold block truncate">{av.name}</span>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {av.role}
                        </span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setIsCustomizeModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                id="btn-save-custom-avatar"
                onClick={handleSaveCustomization}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                Lưu Thay Đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
