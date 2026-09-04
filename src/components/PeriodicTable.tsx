import React, { useState, useMemo } from "react";
import { PERIODIC_ELEMENTS, CATEGORY_COLORS } from "../data/elements";
import { ElementData } from "../types";
import {
  Search,
  Atom,
  Sparkles,
  Info,
  Layers,
  X,
  Zap,
  Activity,
} from "lucide-react";

export const PeriodicTable: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBlock, setSelectedBlock] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeElement, setActiveElement] = useState<ElementData | null>(
    PERIODIC_ELEMENTS[0] // Default Hydrogen
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filtered elements
  const filteredElements = useMemo(() => {
    return PERIODIC_ELEMENTS.filter((el) => {
      const matchCategory =
        selectedCategory === "all" || el.category === selectedCategory;
      const matchBlock = selectedBlock === "all" || el.block === selectedBlock;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        el.symbol.toLowerCase().includes(q) ||
        el.name.toLowerCase().includes(q) ||
        el.vietnameseName.toLowerCase().includes(q) ||
        el.number.toString() === q;
      return matchCategory && matchBlock && matchSearch;
    });
  }, [selectedCategory, selectedBlock, searchQuery]);

  return (
    <div id="periodic-table-module" className="flex flex-col gap-6 w-full">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#020617]/80 backdrop-blur-md border border-slate-800/60 p-4 rounded-3xl shadow-lg">
        {/* Search Box */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-element"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên nguyên tố, ký hiệu (H, Fe, Cu) hoặc số Z..."
            className="w-full bg-slate-800/80 border border-slate-700 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter by Block */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs">
          <span className="text-slate-400 px-2 font-medium">Phân lớp:</span>
          {["all", "s", "p", "d", "f"].map((block) => (
            <button
              key={block}
              id={`filter-block-${block}`}
              onClick={() => setSelectedBlock(block)}
              className={`px-3 py-1 rounded-xl font-medium transition-all ${
                selectedBlock === block
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {block === "all" ? "Tất cả" : `${block}-block`}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-1.5 text-xs">
        <button
          id="cat-pill-all"
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 rounded-full font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
              : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          }`}
        >
          Tất cả phân loại ({PERIODIC_ELEMENTS.length})
        </button>
        {Object.entries(CATEGORY_COLORS).map(([catKey, catVal]) => {
          const count = PERIODIC_ELEMENTS.filter((e) => e.category === catKey).length;
          if (count === 0) return null;
          const isActive = selectedCategory === catKey;
          return (
            <button
              key={catKey}
              id={`cat-pill-${catKey}`}
              onClick={() => setSelectedCategory(catKey)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                isActive
                  ? `${catVal.bg} ${catVal.text} border ${catVal.border} shadow-sm ring-1 ring-cyan-400/40`
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current opacity-80" />
              {catVal.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Elements Grid View & Inspector Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Elements Grid */}
        <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 p-4 sm:p-5 rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2.5">
            {filteredElements.map((el) => {
              const catStyle = CATEGORY_COLORS[el.category] || {
                bg: "bg-slate-800",
                text: "text-slate-200",
                border: "border-slate-700",
              };
              const isSelected = activeElement?.number === el.number;

              return (
                <button
                  key={el.number}
                  id={`el-card-${el.symbol.toLowerCase()}`}
                  onClick={() => {
                    setActiveElement(el);
                    setIsModalOpen(true);
                  }}
                  className={`flex flex-col p-2.5 rounded-2xl border text-left transition-all duration-200 hover:scale-105 group relative overflow-hidden ${
                    isSelected
                      ? "ring-2 ring-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.35)] bg-slate-800"
                      : `${catStyle.bg} ${catStyle.border} hover:border-slate-500`
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200">
                      {el.number}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-1 rounded bg-slate-800/80 text-slate-400">
                      {el.block}
                    </span>
                  </div>
                  <span className={`text-xl font-bold font-mono tracking-tight my-0.5 ${catStyle.text}`}>
                    {el.symbol}
                  </span>
                  <span className="text-[11px] font-medium text-slate-200 truncate w-full">
                    {el.vietnameseName}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 truncate">
                    {el.atomicMass.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Element Inspector Drawer / Card */}
        {activeElement && (
          <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800 p-5 rounded-3xl flex flex-col gap-4 sticky top-6 shadow-xl">
            {/* Element Hero */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-mono border shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  style={{
                    backgroundColor: `${activeElement.colorHex}20`,
                    borderColor: `${activeElement.colorHex}60`,
                    color: activeElement.colorHex,
                  }}
                >
                  <span className="text-xs opacity-70 leading-none">{activeElement.number}</span>
                  <span className="text-2xl font-black leading-tight">{activeElement.symbol}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {activeElement.vietnameseName}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeElement.name} • Nhóm {activeElement.group} • Chu kỳ {activeElement.period}
                  </p>
                  <span className="inline-block mt-1 text-[10px] px-2.5 py-0.5 rounded-full font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {CATEGORY_COLORS[activeElement.category]?.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Bohr Atomic Model Simulation Animation */}
            <div className="bg-[#020617] border border-slate-800/80 p-4 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.7)]">
              <span className="text-[10px] font-medium text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
                Mô hình nguyên tử Bohr & Lớp e
              </span>

              {/* Concentric Shells SVG Animation */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* Nucleus */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-10 shadow-[0_0_15px_rgba(34,211,238,0.4)] font-mono"
                  style={{ backgroundColor: activeElement.colorHex }}
                >
                  +{activeElement.number}
                </div>

                {/* Shell 1 */}
                <div className="absolute w-20 h-20 rounded-full border border-slate-700/80 animate-spin" style={{ animationDuration: "6s" }}>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>

                {/* Shell 2 */}
                {activeElement.electronsPerShell.length > 1 && (
                  <div className="absolute w-28 h-28 rounded-full border border-slate-700/60 animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }}>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 absolute top-1/2 -left-1 -translate-y-1/2 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400 absolute top-1/2 -right-1 -translate-y-1/2 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </div>
                )}

                {/* Shell 3 */}
                {activeElement.electronsPerShell.length > 2 && (
                  <div className="absolute w-36 h-36 rounded-full border border-slate-700/40 animate-spin" style={{ animationDuration: "14s" }}>
                    <div className="w-2 h-2 rounded-full bg-amber-400 absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  </div>
                )}

                {/* Shell 4 */}
                {activeElement.electronsPerShell.length > 3 && (
                  <div className="absolute w-44 h-44 rounded-full border border-slate-700/20 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }}>
                    <div className="w-2 h-2 rounded-full bg-purple-400 absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                  </div>
                )}
              </div>

              {/* Electron Shell Distribution Text */}
              <div className="text-[11px] font-mono text-slate-300 mt-2 flex items-center gap-1">
                <span className="text-slate-400">Phân bố e:</span>
                <span className="text-cyan-400 font-bold">{activeElement.electronsPerShell.join(" - ")}</span>
              </div>
            </div>

            {/* Atomic Properties Table */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-800/50 border border-slate-700/50 p-2.5 rounded-2xl">
                <span className="text-slate-400 block text-[11px]">Cấu hình electron:</span>
                <span className="font-mono font-semibold text-cyan-400 text-xs">
                  {activeElement.electronConfiguration}
                </span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 p-2.5 rounded-2xl">
                <span className="text-slate-400 block text-[11px]">Độ âm điện (Pauling):</span>
                <span className="font-mono font-semibold text-emerald-400">
                  {activeElement.electronegativity ?? "Không xác định"}
                </span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 p-2.5 rounded-2xl">
                <span className="text-slate-400 block text-[11px]">Bán kính nguyên tử:</span>
                <span className="font-mono font-semibold text-slate-200">
                  {activeElement.atomicRadius ? `${activeElement.atomicRadius} pm` : "N/A"}
                </span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 p-2.5 rounded-2xl">
                <span className="text-slate-400 block text-[11px]">Trạng thái (STP):</span>
                <span className="font-semibold text-slate-200">{activeElement.stateAtSTP}</span>
              </div>
            </div>

            {/* Real World Application */}
            <div className="bg-cyan-950/20 border border-cyan-800/30 p-3.5 rounded-2xl text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ứng dụng thực tế:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{activeElement.realWorldApplication}</p>
            </div>

            {/* Fun Fact */}
            <div className="bg-amber-950/20 border border-amber-800/30 p-3.5 rounded-2xl text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-amber-400">
                <Zap className="w-3.5 h-3.5" />
                <span>Bạn có biết?</span>
              </div>
              <p className="text-amber-200/90 leading-relaxed">{activeElement.funFact}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
