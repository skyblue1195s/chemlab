import React, { useState, useEffect } from "react";
import { LAB_REAGENTS, LAB_REACTION_RESULTS } from "../data/virtualLabData";
import { CHEMISTRY_QUESTS } from "../data/questsData";
import { DEFAULT_TEMPLATE_WORKSPACES } from "../data/labWorkspacesData";
import {
  LabReagent,
  LabReactionResult,
  ChemistryQuest,
  GlasswareType,
  LabEquipmentConfig,
  LabWorkspace,
} from "../types";
import { LabVesselRenderer } from "./LabVesselRenderer";
import { SavedWorkspacesModal } from "./SavedWorkspacesModal";
import confetti from "canvas-confetti";
import {
  FlaskConical,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Award,
  Plus,
  Flame,
  Search,
  CheckCircle2,
  Beaker,
  Save,
  FolderOpen,
  Thermometer,
  Disc,
  Layers,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const VirtualLab: React.FC<{
  onRewardXP?: (xp: number, label: string) => void;
}> = ({ onRewardXP }) => {
  // Reagents inside the active glassware vessel
  const [inTestTube, setInTestTube] = useState<LabReagent[]>([]);
  const [activeResult, setActiveResult] = useState<LabReactionResult | null>(null);

  // Equipment arrangement state
  const [equipment, setEquipment] = useState<LabEquipmentConfig>({
    glassware: "test-tube",
    burner: "off",
    magneticStirrer: false,
    rubberStopper: false,
    retortStand: false,
    phIndicatorStrip: false,
    temperature: 25,
  });

  // Student experiment notebook memo
  const [labNotes, setLabNotes] = useState<string>("");
  const [isNotesExpanded, setIsNotesExpanded] = useState<boolean>(false);

  // Saved Workspaces state
  const [workspaces, setWorkspaces] = useState<LabWorkspace[]>(() => {
    try {
      const saved = localStorage.getItem("chem_virtual_lab_saved_workspaces");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_TEMPLATE_WORKSPACES;
    } catch {
      return DEFAULT_TEMPLATE_WORKSPACES;
    }
  });

  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string | null>(null);
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState<boolean>(false);
  const [workspaceModalMode, setWorkspaceModalMode] = useState<"save" | "list">("save");
  const [quickSaveFeedback, setQuickSaveFeedback] = useState<string | null>(null);

  // Quests state
  const [quests, setQuests] = useState<ChemistryQuest[]>(CHEMISTRY_QUESTS);
  const [questCategoryFilter, setQuestCategoryFilter] = useState<string>("all");
  const [questSearchQuery, setQuestSearchQuery] = useState<string>("");

  // Reagent search and category filter on shelf
  const [reagentSearch, setReagentSearch] = useState<string>("");
  const [reagentTypeFilter, setReagentTypeFilter] = useState<string>("all");

  // Save workspaces to localStorage
  const persistWorkspaces = (updated: LabWorkspace[]) => {
    setWorkspaces(updated);
    try {
      localStorage.setItem("chem_virtual_lab_saved_workspaces", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save workspaces to localStorage:", e);
    }
  };

  // Adjust temperature dynamically when burner changes
  const handleToggleBurner = () => {
    setEquipment((prev) => {
      let nextBurner: "off" | "low" | "high" = "off";
      let nextTemp = 25;
      if (prev.burner === "off") {
        nextBurner = "low";
        nextTemp = 65;
      } else if (prev.burner === "low") {
        nextBurner = "high";
        nextTemp = 100;
      } else {
        nextBurner = "off";
        nextTemp = 25;
      }
      return {
        ...prev,
        burner: nextBurner,
        temperature: nextTemp,
      };
    });
  };

  const handleAddReagent = (reagent: LabReagent) => {
    if (inTestTube.length >= 2) return;
    if (inTestTube.some((r) => r.id === reagent.id)) return;

    const nextTube = [...inTestTube, reagent];
    setInTestTube(nextTube);

    if (nextTube.length === 2) {
      // Find matching reaction
      const ids = nextTube.map((r) => r.id).sort();
      const key1 = `${ids[0]}+${ids[1]}`;
      const key2 = `${ids[1]}+${ids[0]}`;
      const result = LAB_REACTION_RESULTS[key1] || LAB_REACTION_RESULTS[key2];

      if (result) {
        setActiveResult(result);

        // Check quests
        const matchedQuest = quests.find(
          (q) => !q.completed && (q.requiredResultKey === key1 || q.requiredResultKey === key2)
        );
        if (matchedQuest) {
          confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
          setQuests((prev) =>
            prev.map((q) => (q.id === matchedQuest.id ? { ...q, completed: true } : q))
          );
          if (onRewardXP) {
            onRewardXP(matchedQuest.xpReward, `Hoàn thành nhiệm vụ: ${matchedQuest.title}`);
          }
        }
      } else {
        setActiveResult({
          reactants: ids,
          equation: "Không xảy ra phản ứng hóa học rõ rệt",
          phenomenon: "Hai chất hòa lẫn vào nhau mà không có sự đổi màu, kết tủa hoặc khí thoát ra.",
          liquidColor: nextTube.find((r) => r.isLiquid)?.liquidColorHex || "#f8fafc",
          hasGas: false,
          explanation: "Không thỏa mãn điều kiện xảy ra phản ứng trao đổi ion hoặc phản ứng oxi hóa - khử.",
          type: "neutralization",
        });
      }
    }
  };

  const handleReset = () => {
    setInTestTube([]);
    setActiveResult(null);
    setActiveWorkspaceId(null);
    setEquipment((prev) => ({
      ...prev,
      burner: "off",
      temperature: 25,
    }));
  };

  // Save workspace callback from modal
  const handleSaveWorkspace = (name: string, notes: string, overwriteId?: string) => {
    const now = new Date();
    const timeFormatted = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")} - ${now.getDate()}/${now.getMonth() + 1}`;

    if (overwriteId) {
      // Update existing workspace
      const updated = workspaces.map((w) => {
        if (w.id === overwriteId) {
          return {
            ...w,
            name,
            notes,
            updatedAt: timeFormatted,
            chemicals: inTestTube,
            equipment: { ...equipment },
            activeResult,
          };
        }
        return w;
      });
      persistWorkspaces(updated);
      setActiveWorkspaceId(overwriteId);
      setLabNotes(notes);
      showFeedbackToast("Đã cập nhật không gian thí nghiệm!");
    } else {
      // Create new workspace
      const newWs: LabWorkspace = {
        id: `ws-${Date.now()}`,
        name,
        notes,
        createdAt: timeFormatted,
        updatedAt: timeFormatted,
        isTemplate: false,
        chemicals: inTestTube,
        equipment: { ...equipment },
        activeResult,
      };
      const updated = [newWs, ...workspaces];
      persistWorkspaces(updated);
      setActiveWorkspaceId(newWs.id);
      setLabNotes(notes);
      showFeedbackToast("Đã lưu không gian thí nghiệm mới!");
    }

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    if (onRewardXP) {
      onRewardXP(15, "Lưu không gian thí nghiệm vào sổ tay cá nhân");
    }
  };

  // Quick save if active workspace is loaded
  const handleQuickSaveCurrent = () => {
    const current = workspaces.find((w) => w.id === activeWorkspaceId);
    if (!current || current.isTemplate) {
      setWorkspaceModalMode("save");
      setIsWorkspaceModalOpen(true);
      return;
    }

    handleSaveWorkspace(current.name, labNotes, current.id);
  };

  const showFeedbackToast = (msg: string) => {
    setQuickSaveFeedback(msg);
    setTimeout(() => setQuickSaveFeedback(null), 3000);
  };

  // Load workspace into bench
  const handleLoadWorkspace = (ws: LabWorkspace) => {
    setInTestTube(ws.chemicals || []);
    setEquipment({ ...ws.equipment });
    setActiveResult(ws.activeResult);
    setLabNotes(ws.notes || "");
    setActiveWorkspaceId(ws.id);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.65 } });
    showFeedbackToast(`Đã mở: ${ws.name}`);
  };

  // Delete workspace
  const handleDeleteWorkspace = (id: string) => {
    const updated = workspaces.filter((w) => w.id !== id);
    persistWorkspaces(updated);
    if (activeWorkspaceId === id) {
      setActiveWorkspaceId(null);
    }
  };

  // Duplicate workspace
  const handleDuplicateWorkspace = (ws: LabWorkspace) => {
    const copy: LabWorkspace = {
      ...ws,
      id: `ws-copy-${Date.now()}`,
      name: `${ws.name} (Bản sao)`,
      createdAt: "Vừa nhân bản",
      updatedAt: "Vừa xong",
      isTemplate: false,
    };
    persistWorkspaces([copy, ...workspaces]);
    showFeedbackToast("Đã nhân bản không gian thí nghiệm!");
  };

  // Import workspace from JSON
  const handleImportWorkspace = (ws: LabWorkspace) => {
    const updated = [ws, ...workspaces];
    persistWorkspaces(updated);
    handleLoadWorkspace(ws);
    showFeedbackToast("Nhập file không gian thành công!");
  };

  // Filter reagents on shelf
  const filteredReagents = LAB_REAGENTS.filter((r) => {
    const matchType =
      reagentTypeFilter === "all" || r.type === reagentTypeFilter;
    const matchSearch =
      r.name.toLowerCase().includes(reagentSearch.toLowerCase()) ||
      r.formula.toLowerCase().includes(reagentSearch.toLowerCase()) ||
      r.stateText.toLowerCase().includes(reagentSearch.toLowerCase());
    return matchType && matchSearch;
  });

  const activeWorkspace = workspaces.find((w) => w.id === activeWorkspaceId);

  // Quests filtering
  const filteredQuests = quests.filter((q) => {
    const matchesCategory =
      questCategoryFilter === "all" || q.category === questCategoryFilter;
    const matchesSearch =
      q.title.toLowerCase().includes(questSearchQuery.toLowerCase()) ||
      q.hint.toLowerCase().includes(questSearchQuery.toLowerCase()) ||
      q.categoryLabel.toLowerCase().includes(questSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completedCount = quests.filter((q) => q.completed).length;
  const totalEarnedXP = quests
    .filter((q) => q.completed)
    .reduce((sum, q) => sum + q.xpReward, 0);

  const handleQuickLoadQuest = (quest: ChemistryQuest) => {
    const parts = quest.requiredResultKey.split("+");
    if (parts.length === 2) {
      const r1 = LAB_REAGENTS.find((r) => r.id === parts[0]);
      const r2 = LAB_REAGENTS.find((r) => r.id === parts[1]);
      if (r1 && r2) {
        const nextTube = [r1, r2];
        setInTestTube(nextTube);
        const ids = [r1.id, r2.id].sort();
        const key1 = `${ids[0]}+${ids[1]}`;
        const key2 = `${ids[1]}+${ids[0]}`;
        const result = LAB_REACTION_RESULTS[key1] || LAB_REACTION_RESULTS[key2];
        if (result) {
          setActiveResult(result);
          if (!quest.completed) {
            confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
            setQuests((prev) =>
              prev.map((q) => (q.id === quest.id ? { ...q, completed: true } : q))
            );
            if (onRewardXP) {
              onRewardXP(quest.xpReward, `Hoàn thành nhiệm vụ: ${quest.title}`);
            }
          }
        }
      }
    }
  };

  return (
    <div id="virtual-lab-module" className="flex flex-col gap-6 w-full">
      {/* Toast Feedback */}
      {quickSaveFeedback && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-cyan-500/50 text-cyan-300 text-xs font-bold shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2 backdrop-blur-md animate-fadeIn">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{quickSaveFeedback}</span>
        </div>
      )}

      {/* Main Lab Row */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Left Area: Chemical Shelf & Filters */}
        <div className="w-full lg:w-80 flex flex-col gap-4 bg-slate-900/60 border border-slate-800 p-5 rounded-3xl shrink-0 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-sm text-slate-200">
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Kệ hóa chất phòng Lab</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              {LAB_REAGENTS.length} mẫu
            </span>
          </div>

          {/* Search Shelf */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={reagentSearch}
              onChange={(e) => setReagentSearch(e.target.value)}
              placeholder="Tìm hóa chất, axit, kim loại..."
              className="w-full bg-[#020617] border border-slate-800 text-xs text-slate-100 rounded-xl pl-8 pr-3 py-1.5 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-thin">
            {[
              { id: "all", label: "Tất cả" },
              { id: "metal", label: "Kim loại" },
              { id: "acid", label: "Axit" },
              { id: "base", label: "Bazơ" },
              { id: "salt", label: "Muối" },
              { id: "indicator", label: "Chỉ thị" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setReagentTypeFilter(cat.id)}
                className={`px-2.5 py-1 rounded-lg shrink-0 font-medium transition-colors ${
                  reagentTypeFilter === cat.id
                    ? "bg-cyan-500 text-black font-bold"
                    : "bg-[#020617] text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            Nhấp để thêm hóa chất vào dụng cụ (tối đa 2 chất cùng lúc):
          </p>

          {/* Chemical Cards List */}
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[460px] pr-1">
            {filteredReagents.map((reagent) => {
              const isAdded = inTestTube.some((r) => r.id === reagent.id);
              const isFull = inTestTube.length >= 2;

              return (
                <button
                  key={reagent.id}
                  id={`btn-add-reagent-${reagent.id}`}
                  disabled={isAdded || isFull}
                  onClick={() => handleAddReagent(reagent)}
                  className={`flex items-center justify-between p-2.5 rounded-2xl border text-left text-xs transition-all ${
                    isAdded
                      ? "bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                      : isFull
                      ? "bg-slate-800/30 border-slate-800/80 text-slate-500 cursor-not-allowed"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full ${reagent.color} border border-slate-600 shrink-0 shadow-sm`}
                    />
                    <div>
                      <span className="font-semibold block leading-tight">
                        {reagent.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {reagent.formula} • {reagent.stateText}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 ml-2">
                    {isAdded ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                        Đã thêm
                      </span>
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Safety note */}
          <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-2xl text-[11px] text-amber-300/90 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Thực hành an toàn:</strong> Không gian ảo cho phép thử phản ứng nổ (Na + Nước), khí độc ($NO_2$), axit đặc hoàn toàn an toàn!
            </span>
          </div>
        </div>

        {/* Center Bench: Equipment Arrangement Controls & Visual Stage */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-5 flex flex-col gap-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
            {/* Top Workspace Navigation & Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3.5">
              {/* Active Workspace Status Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> Bàn thực nghiệm
                </span>
                {activeWorkspace ? (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700 flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {activeWorkspace.name}
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500 font-mono">
                    (Không gian tùy biến)
                  </span>
                )}
              </div>

              {/* Workspace Management Buttons */}
              <div className="flex items-center gap-2 flex-wrap justify-end">
                {/* Clean Vessel */}
                <button
                  id="btn-clean-test-tube"
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-700 shadow-sm"
                  title="Xóa hóa chất và làm sạch dụng cụ"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Rửa sạch</span>
                </button>

                {/* Quick Save (if currently working on a custom workspace) */}
                {activeWorkspace && !activeWorkspace.isTemplate && (
                  <button
                    id="btn-quick-save-workspace"
                    onClick={handleQuickSaveCurrent}
                    className="px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 text-xs font-bold flex items-center gap-1 border border-emerald-700 transition-colors shadow-sm"
                    title="Lưu đè cập nhật vào không gian hiện tại"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Lưu nhanh</span>
                  </button>
                )}

                {/* Save Workspace Button (Opens Modal) */}
                <button
                  id="btn-open-save-workspace"
                  onClick={() => {
                    setWorkspaceModalMode("save");
                    setIsWorkspaceModalOpen(true);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Lưu bàn thí nghiệm (+15 XP)</span>
                </button>

                {/* Browse Saved Workspaces Button */}
                <button
                  id="btn-open-saved-workspaces"
                  onClick={() => {
                    setWorkspaceModalMode("list");
                    setIsWorkspaceModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700 shadow-sm"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Đã lưu ({workspaces.length})</span>
                </button>
              </div>
            </div>

            {/* Equipment Arrangement Toolbar Row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-[#020617]/70 p-3 rounded-2xl border border-slate-800/80">
              {/* Glassware Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <span className="text-[11px] text-slate-400 font-mono shrink-0 mr-1">
                  Dụng cụ:
                </span>
                {[
                  { id: "test-tube", label: "Ống nghiệm" },
                  { id: "beaker", label: "Cốc đong 250mL" },
                  { id: "erlenmeyer", label: "Bình tam giác" },
                  { id: "round-bottom", label: "Bình cầu đáy tròn" },
                ].map((g) => (
                  <button
                    key={g.id}
                    id={`btn-select-glassware-${g.id}`}
                    onClick={() =>
                      setEquipment((prev) => ({
                        ...prev,
                        glassware: g.id as GlasswareType,
                      }))
                    }
                    className={`px-3 py-1 rounded-xl whitespace-nowrap transition-all font-medium ${
                      equipment.glassware === g.id
                        ? "bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              {/* Lab Accessories & Controls */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs shrink-0">
                {/* Bunsen Burner Heat Source */}
                <button
                  id="btn-toggle-burner"
                  onClick={handleToggleBurner}
                  className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 font-mono text-xs transition-all ${
                    equipment.burner !== "off"
                      ? "bg-amber-950 text-amber-300 border-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                      : "bg-slate-900 text-slate-400 hover:text-white border-slate-800"
                  }`}
                  title="Bật/Tắt đèn cồn đun nóng dung dịch"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    Đèn cồn:{" "}
                    {equipment.burner === "off"
                      ? "Tắt"
                      : equipment.burner === "low"
                      ? "Vừa (65°C)"
                      : "Mạnh (100°C)"}
                  </span>
                </button>

                {/* Magnetic Stirrer */}
                <button
                  id="btn-toggle-stirrer"
                  onClick={() =>
                    setEquipment((prev) => ({
                      ...prev,
                      magneticStirrer: !prev.magneticStirrer,
                    }))
                  }
                  className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-1 text-xs transition-all ${
                    equipment.magneticStirrer
                      ? "bg-cyan-950 text-cyan-300 border-cyan-600 shadow-[0_0_10px_rgba(34,211,238,0.25)]"
                      : "bg-slate-900 text-slate-400 hover:text-white border-slate-800"
                  }`}
                  title="Bật máy khuấy từ tạo dòng xoáy"
                >
                  <Disc className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Khuấy từ: {equipment.magneticStirrer ? "BẬT" : "TẮT"}</span>
                </button>

                {/* Rubber Stopper + Delivery Tube */}
                <button
                  id="btn-toggle-stopper"
                  onClick={() =>
                    setEquipment((prev) => ({
                      ...prev,
                      rubberStopper: !prev.rubberStopper,
                    }))
                  }
                  className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-1 text-xs transition-all ${
                    equipment.rubberStopper
                      ? "bg-emerald-950 text-emerald-300 border-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.25)]"
                      : "bg-slate-900 text-slate-400 hover:text-white border-slate-800"
                  }`}
                  title="Lắp nút cao su dẫn khí thoát ra ống nghiệm"
                >
                  <span>Nút dẫn khí: {equipment.rubberStopper ? "Lắp" : "Tháo"}</span>
                </button>

                {/* Retort Stand & Clamp */}
                <button
                  id="btn-toggle-stand"
                  onClick={() =>
                    setEquipment((prev) => ({
                      ...prev,
                      retortStand: !prev.retortStand,
                    }))
                  }
                  className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-1 text-xs transition-all ${
                    equipment.retortStand
                      ? "bg-slate-800 text-slate-200 border-slate-600"
                      : "bg-slate-900 text-slate-400 hover:text-white border-slate-800"
                  }`}
                  title="Lắp giá sắt kẹp giữ dụng cụ thí nghiệm"
                >
                  <span>Giá kẹp: {equipment.retortStand ? "Có" : "Không"}</span>
                </button>

                {/* pH Indicator Strip */}
                <button
                  id="btn-toggle-ph-strip"
                  onClick={() =>
                    setEquipment((prev) => ({
                      ...prev,
                      phIndicatorStrip: !prev.phIndicatorStrip,
                    }))
                  }
                  className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-1 text-xs transition-all ${
                    equipment.phIndicatorStrip
                      ? "bg-purple-950 text-purple-300 border-purple-600"
                      : "bg-slate-900 text-slate-400 hover:text-white border-slate-800"
                  }`}
                  title="Nhúng giấy chỉ thị pH đo nồng độ axit/bazơ"
                >
                  <span>Giấy pH</span>
                </button>
              </div>
            </div>

            {/* Central Realistic Glassware Visual Stage */}
            <LabVesselRenderer
              glassware={equipment.glassware}
              chemicals={inTestTube}
              activeResult={activeResult}
              burner={equipment.burner}
              magneticStirrer={equipment.magneticStirrer}
              rubberStopper={equipment.rubberStopper}
              retortStand={equipment.retortStand}
              phIndicatorStrip={equipment.phIndicatorStrip}
              temperature={equipment.temperature}
            />

            {/* Reaction Observation & Scientific Explanation Box */}
            {activeResult && (
              <div className="w-full bg-[#020617]/95 border border-slate-800 p-4 rounded-2xl flex flex-col gap-2 shadow-lg animate-fadeIn">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Hiện tượng quan sát được:
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {activeResult.equation}
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {activeResult.phenomenon}
                </p>
                {activeResult.ionEquation && (
                  <p className="text-xs text-slate-400 font-mono">
                    Phương trình ion thu gọn: {activeResult.ionEquation}
                  </p>
                )}
                <p className="text-[11px] text-slate-400 italic">
                  Giải thích: {activeResult.explanation}
                </p>
              </div>
            )}

            {/* Student Experiment Notebook Memo (Foldable) */}
            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
              <button
                onClick={() => setIsNotesExpanded(!isNotesExpanded)}
                className="w-full px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors bg-slate-900/50"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold font-mono">
                    Sổ tay ghi chú & Nhật ký thí nghiệm
                  </span>
                  {labNotes.trim() && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      Có ghi chú
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <span>{isNotesExpanded ? "Thu gọn" : "Mở rộng"}</span>
                  {isNotesExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              {isNotesExpanded && (
                <div className="p-4 pt-2 border-t border-slate-800/80 space-y-2 animate-fadeIn">
                  <p className="text-[11px] text-slate-400">
                    Ghi lại các giả thuyết, kết quả đo hoặc lưu ý đặc biệt. Nội dung sẽ được lưu cùng với Bàn thí nghiệm:
                  </p>
                  <textarea
                    value={labNotes}
                    onChange={(e) => setLabNotes(e.target.value)}
                    rows={2}
                    placeholder="VD: Khi đun nóng cốc nghiệm ở 65°C với máy khuấy từ, kết tủa Cu(OH)₂ chuyển dần sang màu đen nhanh hơn..."
                    className="w-full bg-[#020617] border border-slate-700 text-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:border-cyan-400"
                  />
                  {activeWorkspace && !activeWorkspace.isTemplate && (
                    <div className="flex justify-end">
                      <button
                        onClick={handleQuickSaveCurrent}
                        className="px-3 py-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-1"
                      >
                        <Save className="w-3 h-3" /> Lưu ghi chú vào không gian này
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Lab Quests System (Gamification Challenge) */}
          <div
            id="virtual-lab-quests"
            className="bg-slate-900/60 border border-slate-800 p-5 rounded-3xl flex flex-col gap-4 shadow-xl"
          >
            {/* Header & Overall Progress */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Hệ Thống Nhiệm Vụ Hóa Học (24 Thử Thách Thực Nghiệm)
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Tự tay phối trộn hóa chất hoặc chọn &quot;Thực hiện ngay&quot; để quan sát hiện tượng và nhận điểm kinh nghiệm XP!
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  {completedCount} / {quests.length} hoàn thành
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                  +{totalEarnedXP} XP đã nhận
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                style={{ width: `${(completedCount / quests.length) * 100}%` }}
              />
            </div>

            {/* Category Filters & Search Controls */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full text-xs">
                {[
                  { id: "all", label: `Tất cả (${quests.length})` },
                  {
                    id: "precipitate",
                    label: `Kết tủa (${quests.filter((q) => q.category === "precipitate").length})`,
                  },
                  {
                    id: "gas",
                    label: `Khí (${quests.filter((q) => q.category === "gas").length})`,
                  },
                  {
                    id: "redox",
                    label: `Oxi hóa-khử (${quests.filter((q) => q.category === "redox").length})`,
                  },
                  {
                    id: "indicator",
                    label: `Chỉ thị (${quests.filter((q) => q.category === "indicator").length})`,
                  },
                  {
                    id: "neutralization",
                    label: `Axit-Bazơ (${quests.filter((q) => q.category === "neutralization").length})`,
                  },
                  {
                    id: "combustion",
                    label: `Cháy nổ (${quests.filter((q) => q.category === "combustion").length})`,
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

              {/* Search Input */}
              <div className="relative shrink-0 md:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={questSearchQuery}
                  onChange={(e) => setQuestSearchQuery(e.target.value)}
                  placeholder="Tìm nhiệm vụ, hóa chất..."
                  className="w-full bg-[#020617]/90 border border-slate-800 rounded-full pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Quests Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-1">
              {filteredQuests.map((quest) => (
                <div
                  key={quest.id}
                  className={`p-4 rounded-2xl border text-xs flex flex-col justify-between gap-3 transition-all ${
                    quest.completed
                      ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                      : "bg-[#020617]/70 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {quest.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        )}
                        <h4 className="font-bold text-slate-100 leading-snug">
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

                    <button
                      id={`btn-do-quest-${quest.id}`}
                      onClick={() => handleQuickLoadQuest(quest)}
                      className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1 transition-all ${
                        quest.completed
                          ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                          : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                      }`}
                    >
                      <Beaker className="w-3 h-3" />
                      <span>{quest.completed ? "Làm lại" : "Thực hiện ngay"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save Workspace & Saved Workspaces Modal */}
      <SavedWorkspacesModal
        isOpen={isWorkspaceModalOpen}
        mode={workspaceModalMode}
        onClose={() => setIsWorkspaceModalOpen(false)}
        workspaces={workspaces}
        activeWorkspaceId={activeWorkspaceId}
        currentChemicals={inTestTube}
        currentEquipment={equipment}
        currentResult={activeResult}
        currentNotes={labNotes}
        onSaveWorkspace={handleSaveWorkspace}
        onLoadWorkspace={handleLoadWorkspace}
        onDeleteWorkspace={handleDeleteWorkspace}
        onDuplicateWorkspace={handleDuplicateWorkspace}
        onImportWorkspace={handleImportWorkspace}
      />
    </div>
  );
};
