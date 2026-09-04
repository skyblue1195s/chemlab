import React, { useState, useMemo } from "react";
import { LabWorkspace, LabEquipmentConfig, LabReagent, LabReactionResult } from "../types";
import {
  Save,
  FolderOpen,
  X,
  Trash2,
  Copy,
  Download,
  Upload,
  Clock,
  FlaskConical,
  Flame,
  CheckCircle2,
  Sparkles,
  Search,
  BookOpen,
  ArrowRight,
  Thermometer,
  ShieldAlert,
} from "lucide-react";

interface SavedWorkspacesModalProps {
  isOpen: boolean;
  mode: "save" | "list";
  onClose: () => void;
  workspaces: LabWorkspace[];
  activeWorkspaceId: string | null;
  currentChemicals: LabReagent[];
  currentEquipment: LabEquipmentConfig;
  currentResult: LabReactionResult | null;
  currentNotes: string;
  onSaveWorkspace: (name: string, notes: string, overwriteId?: string) => void;
  onLoadWorkspace: (workspace: LabWorkspace) => void;
  onDeleteWorkspace: (id: string) => void;
  onDuplicateWorkspace: (workspace: LabWorkspace) => void;
  onImportWorkspace: (workspace: LabWorkspace) => void;
}

export const SavedWorkspacesModal: React.FC<SavedWorkspacesModalProps> = ({
  isOpen,
  mode: initialMode,
  onClose,
  workspaces,
  activeWorkspaceId,
  currentChemicals,
  currentEquipment,
  currentResult,
  currentNotes,
  onSaveWorkspace,
  onLoadWorkspace,
  onDeleteWorkspace,
  onDuplicateWorkspace,
  onImportWorkspace,
}) => {
  const [modalMode, setModalMode] = useState<"save" | "list">(initialMode);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterTab, setFilterTab] = useState<"all" | "custom" | "templates">("all");

  // Save form fields
  const defaultSuggestedName = useMemo(() => {
    if (currentChemicals.length === 0) return "Bàn thí nghiệm trống";
    const formulas = currentChemicals.map((c) => c.formula).join(" + ");
    const glasswareLabel =
      currentEquipment.glassware === "test-tube"
        ? "Ống nghiệm"
        : currentEquipment.glassware === "beaker"
        ? "Cốc đong"
        : currentEquipment.glassware === "erlenmeyer"
        ? "Bình tam giác"
        : "Bình cầu";
    return `Thí nghiệm ${formulas} (${glasswareLabel})`;
  }, [currentChemicals, currentEquipment.glassware]);

  const [workspaceName, setWorkspaceName] = useState<string>(defaultSuggestedName);
  const [notesText, setNotesText] = useState<string>(currentNotes || "");
  const [saveAsCopy, setSaveAsCopy] = useState<boolean>(false);

  // Sync default name when opening save mode
  React.useEffect(() => {
    setModalMode(initialMode);
    if (initialMode === "save") {
      setWorkspaceName(defaultSuggestedName);
      setNotesText(currentNotes || "");
      setSaveAsCopy(false);
    }
  }, [initialMode, defaultSuggestedName, currentNotes, isOpen]);

  if (!isOpen) return null;

  const currentLoadedWorkspace = workspaces.find((w) => w.id === activeWorkspaceId);

  const handleSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workspaceName.trim()) return;

    const overwriteId =
      !saveAsCopy && currentLoadedWorkspace && !currentLoadedWorkspace.isTemplate
        ? currentLoadedWorkspace.id
        : undefined;

    onSaveWorkspace(workspaceName.trim(), notesText.trim(), overwriteId);
    onClose();
  };

  const handleExportJSON = (workspace: LabWorkspace) => {
    try {
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(workspace, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute(
        "download",
        `workspace-${workspace.name.replace(/\s+/g, "_").toLowerCase()}.json`
      );
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (err) {
      console.error("Failed to export workspace:", err);
    }
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (parsed && parsed.equipment && Array.isArray(parsed.chemicals)) {
          const imported: LabWorkspace = {
            ...parsed,
            id: `imported-${Date.now()}`,
            name: `${parsed.name || "Không gian nhập"} (Đã nhập)`,
            updatedAt: "Vừa nhập file",
            isTemplate: false,
          };
          onImportWorkspace(imported);
          setModalMode("list");
        } else {
          alert("File không đúng định dạng không gian thí nghiệm hóa học.");
        }
      } catch (error) {
        alert("Lỗi khi đọc file JSON. Vui lòng kiểm tra lại cấu trúc file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const filteredWorkspaces = workspaces
    .filter((w) => {
      if (filterTab === "custom" && w.isTemplate) return false;
      if (filterTab === "templates" && !w.isTemplate) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchName = w.name.toLowerCase().includes(q);
      const matchDesc = (w.description || "").toLowerCase().includes(q);
      const matchNotes = (w.notes || "").toLowerCase().includes(q);
      const matchChemicals = w.chemicals.some(
        (c) =>
          c.formula.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
      );
      return matchName || matchDesc || matchNotes || matchChemicals;
    })
    .sort((a, b) => {
      if (a.isTemplate && !b.isTemplate) return 1;
      if (!a.isTemplate && b.isTemplate) return -1;
      return 0;
    });

  const getGlasswareName = (type: string) => {
    switch (type) {
      case "test-tube":
        return "Ống nghiệm Pyrex";
      case "beaker":
        return "Cốc đong 250mL";
      case "erlenmeyer":
        return "Bình tam giác 250mL";
      case "round-bottom":
        return "Bình cầu đáy tròn";
      default:
        return "Dụng cụ thủy tinh";
    }
  };

  return (
    <div
      id="saved-workspaces-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div
        id="saved-workspaces-modal-content"
        className="bg-[#020617] border border-slate-700/80 w-full max-w-3xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              {modalMode === "save" ? (
                <Save className="w-5 h-5" />
              ) : (
                <FolderOpen className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                {modalMode === "save"
                  ? "Lưu không gian bàn thí nghiệm (Save Workspace)"
                  : "Quản lý không gian thí nghiệm đã lưu"}
              </h3>
              <p className="text-xs text-slate-400">
                Lưu giữ trọn vẹn hóa chất, nhiệt độ, dụng cụ và thiết bị để tiếp tục thực hành bất kỳ lúc nào
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Switch Mode Buttons */}
            <button
              onClick={() => setModalMode(modalMode === "save" ? "list" : "save")}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
            >
              {modalMode === "save"
                ? `Xem danh sách (${workspaces.length})`
                : "Lưu bàn hiện tại"}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MODE 1: SAVE WORKSPACE FORM */}
        {modalMode === "save" && (
          <form
            onSubmit={handleSaveSubmit}
            className="p-6 overflow-y-auto space-y-5 flex-1"
          >
            {/* Active Workspace State Summary Card */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/30 space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-cyan-400 font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Trạng thái thực nghiệm đang lưu:
                </span>
                <span className="text-slate-400 font-mono">
                  {currentChemicals.length} hóa chất trong dụng cụ
                </span>
              </div>

              {/* Chemical Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-400">Hóa chất:</span>
                {currentChemicals.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">
                    Chưa có hóa chất (Dụng cụ sạch)
                  </span>
                ) : (
                  currentChemicals.map((c) => (
                    <span
                      key={c.id}
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 flex items-center gap-1.5 shadow-sm"
                    >
                      <span className={`w-2 h-2 rounded-full ${c.color}`} />
                      {c.formula} ({c.name})
                    </span>
                  ))
                )}
              </div>

              {/* Equipment Arrangement Pills */}
              <div className="flex items-center gap-2 flex-wrap text-[11px] font-mono">
                <span className="text-slate-400">Thiết bị:</span>
                <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                  {getGlasswareName(currentEquipment.glassware)}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-lg border flex items-center gap-1 ${
                    currentEquipment.burner !== "off"
                      ? "bg-amber-950/80 text-amber-300 border-amber-600"
                      : "bg-slate-800 text-slate-400 border-slate-700"
                  }`}
                >
                  <Flame className="w-3 h-3" />
                  Đèn cồn: {currentEquipment.burner === "off" ? "Tắt" : currentEquipment.burner === "low" ? "Lửa vừa" : "Lửa mạnh"} ({currentEquipment.temperature}°C)
                </span>
                {currentEquipment.magneticStirrer && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-700">
                    Máy khuấy từ: BẬT
                  </span>
                )}
                {currentEquipment.rubberStopper && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-700">
                    Nút cao su + Ống dẫn khí
                  </span>
                )}
                {currentEquipment.retortStand && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    Kẹp giá sắt
                  </span>
                )}
              </div>

              {/* Reaction status if any */}
              {currentResult && (
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <span className="text-emerald-400 font-mono font-bold block">
                    {currentResult.equation}
                  </span>
                  <span className="text-slate-300 text-[11px] block mt-0.5">
                    {currentResult.phenomenon}
                  </span>
                </div>
              )}
            </div>

            {/* Input Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-200 block font-mono">
                Tên không gian thí nghiệm *
              </label>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                placeholder="VD: Thí nghiệm Sắt tác dụng Axit HCl..."
                className="w-full bg-[#020617] border border-slate-700 text-slate-100 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>

            {/* Input Notes / Observations */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-200 block font-mono">
                Ghi chú tiến trình & Nhật ký quan sát (Tùy chọn)
              </label>
              <textarea
                value={notesText}
                onChange={(e) => setNotesText(e.target.value)}
                rows={3}
                placeholder="Ghi chép các hiện tượng, giả thuyết, phương trình ion hoặc kết luận cần nhớ..."
                className="w-full bg-[#020617] border border-slate-700 text-slate-100 text-xs rounded-xl p-3 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Checkbox if overwriting loaded workspace */}
            {currentLoadedWorkspace && !currentLoadedWorkspace.isTemplate && (
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Đang thao tác trên không gian: <strong>{currentLoadedWorkspace.name}</strong>
                </span>
                <label className="flex items-center gap-2 cursor-pointer text-cyan-300">
                  <input
                    type="checkbox"
                    checked={saveAsCopy}
                    onChange={(e) => setSaveAsCopy(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-0"
                  />
                  <span>Lưu thành bản sao mới</span>
                </label>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
              >
                <Save className="w-4 h-4" />
                <span>
                  {currentLoadedWorkspace && !currentLoadedWorkspace.isTemplate && !saveAsCopy
                    ? "Cập nhật không gian hiện tại (+15 XP)"
                    : "Lưu không gian mới (+15 XP)"}
                </span>
              </button>
            </div>
          </form>
        )}

        {/* MODE 2: LIST & MANAGE WORKSPACES */}
        {modalMode === "list" && (
          <div className="flex flex-col flex-1 overflow-hidden p-5 space-y-4">
            {/* Search & Tabs Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo tên, hóa chất, thiết bị..."
                  className="w-full bg-[#020617] border border-slate-800 text-slate-100 text-xs rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs shrink-0">
                <button
                  onClick={() => setFilterTab("all")}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    filterTab === "all"
                      ? "bg-cyan-500 text-black font-bold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Tất cả ({workspaces.length})
                </button>
                <button
                  onClick={() => setFilterTab("custom")}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    filterTab === "custom"
                      ? "bg-cyan-500 text-black font-bold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Cá nhân ({workspaces.filter((w) => !w.isTemplate).length})
                </button>
                <button
                  onClick={() => setFilterTab("templates")}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    filterTab === "templates"
                      ? "bg-cyan-500 text-black font-bold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Mẫu chuẩn ({workspaces.filter((w) => w.isTemplate).length})
                </button>
              </div>

              {/* Import Button */}
              <label
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 cursor-pointer shrink-0 transition-colors"
                title="Nhập file JSON không gian thí nghiệm"
              >
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nhập JSON</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileImport}
                  className="hidden"
                />
              </label>
            </div>

            {/* Workspaces Scrollable Cards Grid */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-3 max-h-[460px]">
              {filteredWorkspaces.length === 0 ? (
                <div className="p-8 text-center bg-slate-900/30 rounded-2xl border border-slate-800 text-slate-400 space-y-2">
                  <FlaskConical className="w-8 h-8 text-slate-600 mx-auto" />
                  <p className="text-xs">Không tìm thấy không gian thí nghiệm phù hợp.</p>
                </div>
              ) : (
                filteredWorkspaces.map((workspace) => {
                  const isActive = workspace.id === activeWorkspaceId;
                  return (
                    <div
                      key={workspace.id}
                      className={`p-4 rounded-2xl border text-xs flex flex-col gap-3 transition-all ${
                        isActive
                          ? "bg-cyan-950/20 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                          : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {/* Top Row: Name & Badges */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-white text-sm">
                              {workspace.name}
                            </h4>
                            {workspace.isTemplate && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800 font-mono">
                                Mẫu chuẩn GDPT
                              </span>
                            )}
                            {isActive && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono flex items-center gap-1 font-bold">
                                <CheckCircle2 className="w-3 h-3" /> Đang mở trên bàn
                              </span>
                            )}
                          </div>
                          {workspace.description && (
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              {workspace.description}
                            </p>
                          )}
                        </div>

                        {/* Date */}
                        <span className="text-[10px] text-slate-500 font-mono shrink-0 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {workspace.updatedAt}
                        </span>
                      </div>

                      {/* Middle: Equipment & Chemical Layout Badges */}
                      <div className="flex items-center gap-2 flex-wrap text-[11px]">
                        {/* Glassware */}
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                          {getGlasswareName(workspace.equipment.glassware)}
                        </span>

                        {/* Burner */}
                        {workspace.equipment.burner !== "off" && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-300 border border-amber-800 flex items-center gap-1 font-mono">
                            <Flame className="w-3 h-3" />
                            Đèn cồn ({workspace.equipment.temperature}°C)
                          </span>
                        )}

                        {/* Stirrer */}
                        {workspace.equipment.magneticStirrer && (
                          <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800 font-mono">
                            Khuấy từ
                          </span>
                        )}

                        {/* Stopper */}
                        {workspace.equipment.rubberStopper && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-800 font-mono">
                            Nút dẫn khí
                          </span>
                        )}

                        {/* Stand */}
                        {workspace.equipment.retortStand && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700 font-mono">
                            Giá kẹp
                          </span>
                        )}

                        {/* Chemicals In Vessel */}
                        <span className="text-slate-500">•</span>
                        {workspace.chemicals.length === 0 ? (
                          <span className="text-slate-500 italic">Dụng cụ sạch</span>
                        ) : (
                          workspace.chemicals.map((c) => (
                            <span
                              key={c.id}
                              className="px-2 py-0.5 rounded-md bg-slate-800 text-cyan-400 border border-slate-700 font-mono font-bold flex items-center gap-1"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${c.color}`} />
                              {c.formula}
                            </span>
                          ))
                        )}
                      </div>

                      {/* Reaction Summary if active */}
                      {workspace.activeResult && (
                        <div className="p-2.5 rounded-xl bg-[#020617] border border-slate-800 text-[11px] space-y-1">
                          <span className="font-mono font-bold text-emerald-400 block">
                            {workspace.activeResult.equation}
                          </span>
                          <span className="text-slate-300 block line-clamp-1">
                            {workspace.activeResult.phenomenon}
                          </span>
                        </div>
                      )}

                      {/* Notes / Student observations */}
                      {workspace.notes && (
                        <p className="text-[11px] text-slate-400 italic line-clamp-2 pl-2 border-l-2 border-slate-700">
                          &quot;{workspace.notes}&quot;
                        </p>
                      )}

                      {/* Actions Bottom Bar */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                        <div className="flex items-center gap-2">
                          {/* Export JSON */}
                          <button
                            onClick={() => handleExportJSON(workspace)}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            title="Tải về máy tính dưới dạng file .JSON"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>

                          {/* Duplicate */}
                          <button
                            onClick={() => onDuplicateWorkspace(workspace)}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            title="Tạo bản sao không gian thí nghiệm này"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>

                          {/* Delete (if not template) */}
                          {!workspace.isTemplate && (
                            <button
                              onClick={() => {
                                if (
                                  confirm(
                                    `Bạn có chắc chắn muốn xóa không gian "${workspace.name}"?`
                                  )
                                ) {
                                  onDeleteWorkspace(workspace.id);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-rose-950/60 text-rose-400 hover:bg-rose-900 transition-colors border border-rose-800/60"
                              title="Xóa không gian này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Load / Continue Experiment */}
                        <button
                          onClick={() => {
                            onLoadWorkspace(workspace);
                            onClose();
                          }}
                          className={`px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all text-xs ${
                            isActive
                              ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                              : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                          }`}
                        >
                          <span>{isActive ? "Đang mở (Nạp lại)" : "Tiếp tục thí nghiệm"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
