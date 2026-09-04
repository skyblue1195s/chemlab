import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "footer" | "mobile";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  variant = "header",
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 ${className}`}>
        <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Ngôn ngữ / Language:</span>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            id="mobile-lang-vi"
            onClick={() => setLanguage("vi")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              language === "vi"
                ? "bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>🇻🇳</span>
            <span>VN</span>
          </button>
          <button
            id="mobile-lang-en"
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              language === "en"
                ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="header-language-switcher"
      className={`flex items-center p-1 bg-slate-900/90 rounded-full border border-slate-800 text-xs shrink-0 whitespace-nowrap shadow-sm ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        id="btn-lang-vi"
        onClick={() => setLanguage("vi")}
        className={`px-2.5 py-1 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
          language === "vi"
            ? "bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.35)]"
            : "text-slate-400 hover:text-white hover:bg-slate-800/60"
        }`}
        title="Chuyển sang Tiếng Việt"
      >
        <span className="text-[13px] leading-none">🇻🇳</span>
        <span className="tracking-wide">VN</span>
      </button>
      <button
        id="btn-lang-en"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
          language === "en"
            ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.35)]"
            : "text-slate-400 hover:text-white hover:bg-slate-800/60"
        }`}
        title="Switch to English"
      >
        <span className="text-[13px] leading-none">🇬🇧</span>
        <span className="tracking-wide">EN</span>
      </button>
    </div>
  );
};
