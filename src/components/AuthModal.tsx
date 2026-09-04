import React, { useState } from "react";
import { User } from "firebase/auth";
import { signInWithGoogle, signOutUser, FirebaseUserProfile } from "../lib/firebase";
import confetti from "canvas-confetti";
import {
  X,
  LogOut,
  ShieldCheck,
  Cloud,
  Sparkles,
  Trophy,
  Flame,
  Award,
  CheckCircle2,
  AlertCircle,
  Mail,
  UserCheck,
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  userProfile: FirebaseUserProfile | null;
  onLoginSuccess?: (user: User) => void;
  onLogoutSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  userProfile,
  onLoginSuccess,
  onLogoutSuccess,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const user = await signInWithGoogle();
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
      if (onLoginSuccess) onLoginSuccess(user);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      console.error("Sign in failed:", err);
      // Friendly message
      if (err?.code === "auth/popup-closed-by-user") {
        setErrorMsg("Cửa sổ đăng nhập đã được đóng lại. Vui lòng thử lại khi sẵn sàng.");
      } else if (err?.code === "auth/cancelled-popup-request") {
        setErrorMsg("Yêu cầu đăng nhập trước đó đã bị hủy.");
      } else {
        setErrorMsg(err?.message || "Đã xảy ra lỗi khi đăng nhập bằng Google. Vui lòng thử lại.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      await signOutUser();
      if (onLogoutSuccess) onLogoutSuccess();
      onClose();
    } catch (err: any) {
      console.error("Sign out failed:", err);
      setErrorMsg("Không thể đăng xuất. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="auth-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="auth-modal-card"
        className="relative w-full max-w-md bg-[#020617] border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col gap-6"
      >
        {/* Close Button */}
        <button
          id="btn-close-auth-modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {currentUser ? (
          /* User Profile View when Logged In */
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5">
              <div className="relative">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "User"}
                    className="w-14 h-14 rounded-2xl border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-lg">
                    {currentUser.displayName ? currentUser.displayName[0] : "U"}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-base truncate">
                    {currentUser.displayName || "Học viên Hóa học"}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Google
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate mt-0.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{currentUser.email}</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-emerald-400 font-mono">
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Đã đồng bộ Google Cloud Firestore</span>
                </div>
              </div>
            </div>

            {/* Account Progress Telemetry */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Cấp Độ</span>
                <span className="text-base font-black text-cyan-400 font-mono mt-0.5 block">
                  Lv.{userProfile?.level || 1}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Điểm XP</span>
                <span className="text-base font-black text-amber-400 font-mono mt-0.5 block">
                  {userProfile?.xp || 0}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Chuỗi Ngày</span>
                <span className="text-base font-black text-rose-400 font-mono mt-0.5 block">
                  {userProfile?.streakDays || 1}🔥
                </span>
              </div>
            </div>

            {/* Benefits Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Tiến độ học tập được lưu an toàn trên đám mây</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Mỗi khi bạn hoàn thành bài tập, thí nghiệm ảo hoặc nhận thưởng nhiệm vụ ngày, dữ liệu sẽ lập tức được bảo lưu vào Firestore dưới email của bạn.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                id="btn-sign-out"
                onClick={handleSignOut}
                disabled={isLoading}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-rose-400 hover:text-rose-300 border border-rose-900/40 font-semibold text-xs transition-all flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Đăng xuất tài khoản</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              >
                Tiếp tục học
              </button>
            </div>
          </div>
        ) : (
          /* Login Form (Google / Gmail Provider) */
          <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-white text-base tracking-tight">
                  Đăng Nhập Bằng Gmail
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Đồng bộ điểm số, cấp bậc và bài học qua Firebase
                </p>
              </div>
            </div>

            {/* Error banner if any */}
            {errorMsg && (
              <div className="p-3 rounded-2xl bg-rose-950/40 border border-rose-700/50 text-rose-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Feature Perks Checklist */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col gap-2.5 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lưu giữ vĩnh viễn điểm XP, cấp độ và chuỗi streak học tập</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Đồng bộ 20 nhiệm vụ hằng ngày và rương báu trên mọi thiết bị</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lưu lại bảng thành tích và thứ hạng trong Bảng thi đua</span>
              </div>
            </div>

            {/* Main Google Sign-In Button */}
            <button
              id="btn-login-with-google"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-all flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {/* Google G Vector Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isLoading ? "Đang kết nối Google..." : "Tiếp tục với Google (Gmail)"}</span>
            </button>

            <p className="text-center text-[11px] text-slate-500">
              Đăng nhập an toàn bằng OAuth qua Firebase Authentication. Không yêu cầu mật khẩu riêng.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
