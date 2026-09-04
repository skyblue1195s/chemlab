import React, { useState } from "react";
import { ReactionSimulation, GradeLevel } from "../types";
import {
  Search,
  X,
  FlaskConical,
  Sparkles,
  Zap,
  Flame,
  CheckCircle2,
  Filter,
} from "lucide-react";

interface ReactionCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  reactions: ReactionSimulation[];
  selectedReactionId: string;
  onSelectReaction: (id: string) => void;
}

export const ReactionCatalogModal: React.FC<ReactionCatalogModalProps> = ({
  isOpen,
  onClose,
  reactions,
  selectedReactionId,
  onSelectReaction,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<number | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!isOpen) return null;

  const categories = [
    { id: "all", label: "Tất cả danh mục" },
    { id: "ox-red", label: "Oxi hóa - Khử" },
    { id: "acid-base", label: "Axit - Bazơ - Muối" },
    { id: "organic", label: "Hóa học Hữu cơ" },
    { id: "precipitation", label: "Kết tủa & Trao đổi" },
    { id: "complex", label: "Phức chất" },
    { id: "equilibrium", label: "Cân bằng hóa học" },
    { id: "electrolysis", label: "Điện hóa & Pin" },
  ];

  const filteredReactions = reactions.filter((rxn) => {
    const matchesSearch =
      searchQuery === "" ||
      rxn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rxn.equation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rxn.visualHook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rxn.realWorldExample.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGrade =
      selectedGrade === "all" || rxn.grade === selectedGrade;

    const matchesCategory =
      selectedCategory === "all" || rxn.type === selectedCategory;

    return matchesSearch && matchesGrade && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Kho Thư Viện Mô Phỏng Phản Ứng ({reactions.length} phản ứng)
              </h3>
              <p className="text-xs text-slate-400">
                Lớp 10, 11, 12 Chương trình GDPT mới - Trực quan hóa cơ chế vi mô
              </p>
            </div>
          </div>
          <button
            id="btn-close-reaction-catalog"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-950/40 flex flex-col gap-3">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="input-search-reaction-catalog"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo tên phản ứng, công thức hóa học (CuSO₄, este, kết tủa, điện phân)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* Grade & Category Filters */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Grade Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <span className="text-slate-500 text-[11px] px-2 font-medium">Khối lớp:</span>
              {(["all", 10, 11, 12] as const).map((g) => (
                <button
                  key={g}
                  id={`btn-catalog-grade-${g}`}
                  onClick={() => setSelectedGrade(g)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                    selectedGrade === g
                      ? "bg-cyan-500 text-black shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {g === "all" ? "Tất cả" : `Lớp ${g}`}
                </button>
              ))}
            </div>

            {/* Category Select Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 max-w-full">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all border ${
                    selectedCategory === cat.id
                      ? "bg-slate-700 text-cyan-300 border-cyan-500/50 font-bold"
                      : "bg-slate-900/70 text-slate-400 border-slate-800 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reaction Grid List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredReactions.map((rxn) => {
            const isSelected = rxn.id === selectedReactionId;

            return (
              <div
                key={rxn.id}
                id={`catalog-card-${rxn.id}`}
                onClick={() => {
                  onSelectReaction(rxn.id);
                  onClose();
                }}
                className={`p-4 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-3 group relative ${
                  isSelected
                    ? "bg-cyan-950/40 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      {rxn.grade && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Lớp {rxn.grade}
                        </span>
                      )}
                      {rxn.categoryLabel && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {rxn.categoryLabel}
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <span className="text-[11px] text-cyan-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đang chọn
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {rxn.title}
                  </h4>

                  <div className="mt-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs text-cyan-400">
                    {rxn.equation}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {rxn.visualHook.hookText}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
                  <span className="flex items-center gap-1 text-amber-300/80">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {rxn.steps.length} bước mô phỏng
                  </span>
                  <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                    Bắt đầu mô phỏng →
                  </span>
                </div>
              </div>
            );
          })}

          {filteredReactions.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 text-xs">
              Không tìm thấy phản ứng phù hợp với từ khóa "{searchQuery}". Hãy thử tìm kiếm theo từ
              khóa khác!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
