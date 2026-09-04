import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Users,
  Activity,
  Sparkles,
  X,
  RefreshCw,
  BarChart2,
  Award,
  CheckCircle2,
  Radio,
} from "lucide-react";

export interface VisitorStatsData {
  total: number;
  today: number;
  online: number;
  gradeViews?: {
    grade10: number;
    grade11: number;
    grade12: number;
  };
  lastUpdated?: string;
  isRealtime?: boolean;
}

interface VisitorStatsBadgeProps {
  variant?: "header" | "footer" | "banner";
  currentGrade?: number;
  className?: string;
}

// Generate or retrieve persistent browser session ID
function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem("chemlab_client_sid");
    if (!sid) {
      sid = "sid_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      sessionStorage.setItem("chemlab_client_sid", sid);
    }
    return sid;
  } catch {
    return "sid_default_" + Date.now();
  }
}

export const VisitorStatsBadge: React.FC<VisitorStatsBadgeProps> = ({
  variant = "header",
  currentGrade = 10,
  className = "",
}) => {
  const [stats, setStats] = useState<VisitorStatsData>({
    total: 1,
    today: 1,
    online: 1,
    gradeViews: {
      grade10: 1,
      grade11: 1,
      grade12: 1,
    },
    isRealtime: true,
  });
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sessionIdRef = useRef<string>(getSessionId());

  const fetchStats = async (isHit = false) => {
    try {
      setIsLoading(true);
      const sid = sessionIdRef.current;
      const endpoint = isHit ? "/api/visitors/hit" : `/api/visitors?sessionId=${encodeURIComponent(sid)}`;
      const options: RequestInit = isHit
        ? {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId: sid, grade: currentGrade }),
          }
        : { method: "GET" };

      const res = await fetch(endpoint, options);
      if (res.ok) {
        const data = await res.json();
        setStats(data);
        localStorage.setItem("chemlab_real_visitor_stats", JSON.stringify(data));
      }
    } catch {
      // Offline fallback: keep real count
    } finally {
      setIsLoading(false);
    }
  };

  // Heartbeat to keep live active session accurate
  const sendHeartbeat = async () => {
    try {
      const sid = sessionIdRef.current;
      const res = await fetch("/api/visitors/heartbeat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, grade: currentGrade }),
      });
      if (res.ok) {
        const data = await res.json();
        setStats((prev) => ({
          ...prev,
          online: data.online,
          total: data.total,
          today: data.today,
          gradeViews: data.gradeViews || prev.gradeViews,
        }));
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    // Clear any legacy simulated stats if they exist (>1000)
    try {
      const legacy = localStorage.getItem("chemlab_visitor_stats");
      if (legacy) {
        const parsed = JSON.parse(legacy);
        if (parsed.total > 1000) {
          localStorage.removeItem("chemlab_visitor_stats");
          sessionStorage.removeItem("chemlab_session_recorded");
        }
      }
    } catch {
      // ignore
    }

    // Hit server once per session tab
    const hasRecorded = sessionStorage.getItem("chemlab_hit_recorded");
    if (!hasRecorded) {
      sessionStorage.setItem("chemlab_hit_recorded", "true");
      fetchStats(true);
    } else {
      fetchStats(false);
    }

    // Real-time active heartbeat every 25 seconds
    const interval = setInterval(() => {
      sendHeartbeat();
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  // Update grade interaction on grade change
  useEffect(() => {
    if (currentGrade) {
      sendHeartbeat();
    }
  }, [currentGrade]);

  if (variant === "footer") {
    return (
      <>
        <div
          id="footer-visitor-stats"
          onClick={() => setIsDetailsOpen(true)}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm group ${className}`}
          title="Bấm để xem chi tiết thống kê lượt truy cập thực tế"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-medium text-slate-400">
            Truy cập thực tế:
          </span>
          <span className="font-mono font-bold text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {stats.total.toLocaleString("vi-VN")}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
            <Radio className="w-2.5 h-2.5 animate-pulse text-emerald-400" />
            {stats.online} đang online
          </span>
        </div>

        {isDetailsOpen && (
          <VisitorDetailsModalPortal
            stats={stats}
            onClose={() => setIsDetailsOpen(false)}
            onRefresh={() => fetchStats(false)}
            isLoading={isLoading}
          />
        )}
      </>
    );
  }

  return (
    <>
      <button
        id="header-visitor-count-badge"
        onClick={() => setIsDetailsOpen(true)}
        className={`flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all hover:scale-105 active:scale-95 group ${className}`}
        title="Số người truy cập thực tế • Nhấp để xem phân tích chi tiết"
      >
        <div className="relative flex items-center justify-center">
          <Users className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-white text-xs font-black tracking-tight">
            {stats.total.toLocaleString("vi-VN")}
          </span>
          <span className="text-[10px] text-cyan-400/90 font-semibold hidden md:inline">
            lượt thực tế
          </span>
        </div>
      </button>

      {/* Render via Portal directly to body with ultra-high z-index */}
      {isDetailsOpen && (
        <VisitorDetailsModalPortal
          stats={stats}
          onClose={() => setIsDetailsOpen(false)}
          onRefresh={() => fetchStats(false)}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

interface VisitorDetailsModalProps {
  stats: VisitorStatsData;
  onClose: () => void;
  onRefresh: () => void;
  isLoading: boolean;
}

const VisitorDetailsModalPortal: React.FC<VisitorDetailsModalProps> = ({
  stats,
  onClose,
  onRefresh,
  isLoading,
}) => {
  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Calculate real percentages from real interaction counts
  const g10 = stats.gradeViews?.grade10 || 1;
  const g11 = stats.gradeViews?.grade11 || 1;
  const g12 = stats.gradeViews?.grade12 || 1;
  const totalInteractions = g10 + g11 + g12 || 1;
  const pct10 = Math.round((g10 / totalInteractions) * 100);
  const pct11 = Math.round((g11 / totalInteractions) * 100);
  const pct12 = Math.max(0, 100 - pct10 - pct11);

  const modalContent = (
    <div
      id="visitor-modal-overlay"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      style={{ margin: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="visitor-modal-card"
        className="relative z-10 w-full max-w-lg bg-[#020617] border-2 border-cyan-500/50 rounded-3xl p-6 sm:p-7 shadow-[0_0_60px_rgba(34,211,238,0.35)] text-left my-auto max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="btn-close-visitor-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] shrink-0">
            <Activity className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950">
                ĐẾM THỰC TẾ
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Active Sync
              </span>
            </div>
            <h3 className="text-lg font-black text-white mt-1">
              Thống Kê Truy Cập & Học Tập Thực Tế
            </h3>
            <p className="text-xs text-slate-400">
              Ghi nhận phiên người dùng và lưu lượng học tập thực tế trên hệ thống
            </p>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Total Real Visits */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-center flex flex-col justify-between shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Tổng Lượt Truy Cập
            </span>
            <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono my-1.5">
              {stats.total.toLocaleString("vi-VN")}
            </span>
            <span className="text-[10px] text-cyan-300/80 font-medium">Lượt thực tế</span>
          </div>

          {/* Today's Real Visits */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-center flex flex-col justify-between shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Hôm Nay
            </span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono my-1.5">
              {stats.today.toLocaleString("vi-VN")}
            </span>
            <span className="text-[10px] text-amber-300/80 font-medium">Phiên học tập</span>
          </div>

          {/* Real Online Active Users */}
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center flex flex-col justify-between shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
              Đang Online
            </span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono my-1.5 flex items-center justify-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              {stats.online}
            </span>
            <span className="text-[10px] text-emerald-400 font-medium">Học viên trực tuyến</span>
          </div>
        </div>

        {/* Breakdown by Grade & Real Interactions */}
        <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
          <div className="flex items-center justify-between text-slate-300 font-semibold pb-1 border-b border-slate-800">
            <span className="flex items-center gap-2 text-cyan-400">
              <BarChart2 className="w-4 h-4" /> Tương Tác Theo Khối Lớp GDPT 2026
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Tổng {totalInteractions} lượt xem
            </span>
          </div>

          <div className="space-y-2.5 pt-1">
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Khối 10: Cấu tạo nguyên tử & Bảng tuần hoàn</span>
                <span className="font-mono text-cyan-400 font-bold">
                  {g10} lượt ({pct10}%)
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${pct10}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Khối 11: Cân bằng hóa học & Hydrocarbon</span>
                <span className="font-mono text-purple-400 font-bold">
                  {g11} lượt ({pct11}%)
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-400 rounded-full transition-all duration-500"
                  style={{ width: `${pct11}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Khối 12: Hóa học hữu cơ & Luyện thi THPT</span>
                <span className="font-mono text-amber-400 font-bold">
                  {g12} lượt ({pct12}%)
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${pct12}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Status */}
        <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">Phòng Lab 3D tương tác</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">5 Đề THPT 125 câu chuẩn</span>
          </div>
        </div>

        {/* Real-time verification notice */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300/90 mb-6">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Hệ thống đếm chính xác từng lượt truy cập và phiên học trực tiếp.</span>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <button
            id="btn-refresh-visitor-stats"
            onClick={onRefresh}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 font-medium transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-cyan-400" : ""}`} />
            <span>Làm mới số liệu</span>
          </button>
          <button
            id="btn-close-visitor-modal-action"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );

  // Use createPortal to mount on body, completely bypassing any sticky header or parent stacking contexts
  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};
