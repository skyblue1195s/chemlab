import React, { useState, useRef, useEffect } from "react";
import { ActiveTab, GradeLevel } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  Rotate3d,
  Atom,
  FlaskConical,
  Zap,
  BookOpen,
  Trophy,
  MessageSquare,
  Bot,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Layers,
  Compass,
} from "lucide-react";

export interface SubMenuItem {
  id: ActiveTab;
  label: string;
  shortLabel: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeStyle?: string;
}

export interface MenuGroup {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: SubMenuItem[];
  defaultTab: ActiveTab;
}

interface NavigationMenuProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentGrade: GradeLevel;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeTab,
  setActiveTab,
  currentGrade,
}) => {
  const { t, language } = useLanguage();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group Definitions
  const menuGroups: MenuGroup[] = [
    {
      id: "group-simulation",
      label: t.nav.groupSimulation,
      shortLabel: t.nav.groupSimulationShort,
      icon: FlaskConical,
      description: t.nav.groupSimulationDesc,
      defaultTab: "molecules",
      items: [
        {
          id: "molecules",
          label: t.nav.molecules,
          shortLabel: t.nav.moleculesShort,
          description: t.nav.moleculesDesc,
          icon: Rotate3d,
          badge: t.nav.moleculesBadge,
          badgeStyle: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
        },
        {
          id: "periodic-table",
          label: t.nav.periodicTable,
          shortLabel: t.nav.periodicTableShort,
          description: t.nav.periodicTableDesc,
          icon: Atom,
          badge: t.nav.periodicTableBadge,
          badgeStyle: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
        },
        {
          id: "virtual-lab",
          label: t.nav.virtualLab,
          shortLabel: t.nav.virtualLabShort,
          description: t.nav.virtualLabDesc,
          icon: FlaskConical,
          badge: t.nav.virtualLabBadge,
          badgeStyle: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
        },
        {
          id: "reactions",
          label: t.nav.reactions,
          shortLabel: t.nav.reactionsShort,
          description: t.nav.reactionsDesc,
          icon: Zap,
          badge: t.nav.reactionsBadge,
          badgeStyle: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
        },
      ],
    },
    {
      id: "group-curriculum",
      label: t.nav.groupCurriculum,
      shortLabel: t.nav.groupCurriculumShort,
      icon: BookOpen,
      description: t.nav.groupCurriculumDesc,
      defaultTab: "curriculum",
      items: [
        {
          id: "curriculum",
          label: t.nav.curriculum,
          shortLabel: t.nav.curriculumShort,
          description: t.nav.curriculumDesc.replace("{grade}", currentGrade.toString()),
          icon: BookOpen,
          badge: t.nav.curriculumBadge.replace("{grade}", currentGrade.toString()),
          badgeStyle: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40",
        },
        {
          id: "thpt-practice",
          label: t.nav.thptPractice,
          shortLabel: t.nav.thptPracticeShort,
          description: t.nav.thptPracticeDesc,
          icon: GraduationCap,
          badge: t.nav.thptPracticeBadge,
          badgeStyle: "bg-rose-500 text-white font-bold shadow-[0_0_8px_rgba(244,63,94,0.4)]",
        },
      ],
    },
    {
      id: "group-community",
      label: t.nav.groupCommunity,
      shortLabel: t.nav.groupCommunityShort,
      icon: Trophy,
      description: t.nav.groupCommunityDesc,
      defaultTab: "gamification",
      items: [
        {
          id: "gamification",
          label: t.nav.gamification,
          shortLabel: t.nav.gamificationShort,
          description: t.nav.gamificationDesc,
          icon: Trophy,
          badge: t.nav.gamificationBadge,
          badgeStyle: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
        },
        {
          id: "community",
          label: t.nav.community,
          shortLabel: t.nav.communityShort,
          description: t.nav.communityDesc,
          icon: MessageSquare,
          badge: t.nav.communityBadge,
          badgeStyle: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
        },
      ],
    },
  ];

  // Find active group and active sub-item
  const activeGroup = menuGroups.find((g) =>
    g.items.some((item) => item.id === activeTab)
  );
  const activeItem = activeGroup?.items.find((item) => item.id === activeTab);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownId(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdownId(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectTab = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setOpenDropdownId(null);
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (groupId: string) => {
    setOpenDropdownId((prev) => (prev === groupId ? null : groupId));
  };

  return (
    <div id="main-navigation-menu" className="w-full bg-[#020617]/95 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-40">
      {/* Primary Navigation Bar with Group Menus */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 flex items-center justify-between gap-3">
        {/* Left Side: Grouped Menus */}
        <div ref={dropdownRef} className="flex items-center gap-1.5 sm:gap-2">
          {menuGroups.map((group) => {
            const GroupIcon = group.icon;
            const isGroupActive = activeGroup?.id === group.id;
            const isDropdownOpen = openDropdownId === group.id;
            const currentSubItemInGroup = group.items.find((i) => i.id === activeTab);

            return (
              <div key={group.id} className="relative">
                <button
                  id={`btn-menu-group-${group.id}`}
                  onClick={() => toggleDropdown(group.id)}
                  className={`px-3 sm:px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all select-none border whitespace-nowrap shrink-0 ${
                    isGroupActive
                      ? "bg-slate-900 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                      : isDropdownOpen
                      ? "bg-slate-900/80 border-slate-700 text-slate-200"
                      : "bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <GroupIcon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isGroupActive ? "text-cyan-400" : "text-slate-400"
                    }`}
                  />
                  <span className="font-bold hidden md:inline whitespace-nowrap">{group.label}</span>
                  <span className="font-bold md:hidden whitespace-nowrap">{group.shortLabel}</span>

                  {/* If active, display mini pill of active sub-item on larger screens */}
                  {isGroupActive && currentSubItemInGroup && (
                    <span className="hidden xl:inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 whitespace-nowrap shrink-0">
                      {currentSubItemInGroup.shortLabel}
                    </span>
                  )}

                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {/* Sub-menu Dropdown Popover */}
                {isDropdownOpen && (
                  <div
                    id={`dropdown-sub-menu-${group.id}`}
                    className="absolute left-0 mt-2 w-80 sm:w-96 bg-[#020617]/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    {/* Sub-menu Header */}
                    <div className="px-3 py-2 border-b border-slate-800/80 mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        <GroupIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{group.label}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {group.items.length} {language === "en" ? "modules" : "phân hệ"}
                      </span>
                    </div>

                    {/* Sub-menu Items List */}
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon;
                        const isCurrentActive = activeTab === item.id;

                        return (
                          <button
                            key={item.id}
                            id={`sub-item-${item.id}`}
                            onClick={() => handleSelectTab(item.id)}
                            className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group border ${
                              isCurrentActive
                                ? "bg-cyan-950/40 border-cyan-500/40 text-white shadow-inner"
                                : "bg-transparent border-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg shrink-0 transition-colors ${
                                isCurrentActive
                                  ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                                  : "bg-slate-800/80 text-slate-400 group-hover:bg-slate-700 group-hover:text-cyan-400"
                              }`}
                            >
                              <ItemIcon className="w-4 h-4" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1.5">
                                <span className={`text-xs font-bold leading-tight truncate ${isCurrentActive ? "text-cyan-300" : "text-white"}`}>
                                  {item.label}
                                </span>
                                {item.badge && (
                                  <span
                                    className={`text-[9px] px-1.5 py-0.2 rounded-md shrink-0 ${
                                      item.badgeStyle ||
                                      "bg-slate-800 text-slate-300"
                                    }`}
                                  >
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-400 leading-snug mt-0.5 line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Quick Action AI Tutor & Mobile Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* AI ChemBot - Prominent Quick Access Button */}
          <button
            id="nav-btn-quick-ai-tutor"
            onClick={() => handleSelectTab("ai-tutor")}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all border whitespace-nowrap shrink-0 ${
              activeTab === "ai-tutor"
                ? "bg-cyan-400 text-black border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                : "bg-cyan-500/10 text-cyan-300 hover:text-white hover:bg-cyan-500/20 border-cyan-500/30"
            }`}
            title={t.header.quickAiTitle}
          >
            <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">{t.header.quickAi}</span>
            <span className="sm:hidden whitespace-nowrap">{t.header.quickAiShort}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_rgba(52,211,153,0.8)] shrink-0" />
          </button>

          {/* Mobile All-Menu Drawer Trigger Button */}
          <button
            id="btn-mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white lg:hidden shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-rose-400 shrink-0" />
            ) : (
              <Menu className="w-4 h-4 shrink-0" />
            )}
          </button>
        </div>
      </div>

      {/* Secondary Contextual Toolbar: Sub-Menu Quick Switching Ribbon */}
      {activeGroup && (
        <div
          id="contextual-sub-menu-ribbon"
          className="bg-slate-950/80 border-t border-slate-900 border-b border-slate-800/40 w-full"
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 overflow-x-auto flex items-center justify-between gap-4 text-xs">
            {/* Breadcrumb Path */}
            <div className="flex items-center gap-2 text-slate-400 shrink-0 font-mono text-[11px] whitespace-nowrap">
              <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-semibold text-slate-300 whitespace-nowrap">
                {activeGroup.label}
              </span>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-cyan-400 font-bold whitespace-nowrap">
                {activeItem?.label}
              </span>
            </div>

            {/* Sub-menu Pills: Instant 1-click switching within the active group */}
            <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto">
              <span className="text-[10px] text-slate-400 font-mono hidden md:inline uppercase mr-1 whitespace-nowrap">
                {t.nav.ribbonSection}
              </span>
              {activeGroup.items.map((item) => {
                const ItemIcon = item.icon;
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`ribbon-sub-${item.id}`}
                    onClick={() => handleSelectTab(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                      isSelected
                        ? "bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                    }`}
                  >
                    <ItemIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="whitespace-nowrap">{item.shortLabel}</span>
                    {item.badge && isSelected && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/20 font-bold ml-0.5 whitespace-nowrap">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer (Expanded on mobile toggle) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#020617] border-t border-slate-800 p-4 space-y-4 max-h-[75vh] overflow-y-auto"
        >
          {menuGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-slate-900/60 rounded-lg border border-slate-800/80">
                  <GroupIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{group.label}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`mobile-sub-${item.id}`}
                        onClick={() => handleSelectTab(item.id)}
                        className={`p-2.5 rounded-xl text-left flex items-center justify-between gap-3 text-xs border ${
                          isSelected
                            ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                            : "bg-slate-900/40 border-slate-800/70 text-slate-300 hover:bg-slate-800/60 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <ItemIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded ${item.badgeStyle || "bg-slate-800 text-slate-300"}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ChemBot AI item in mobile drawer */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <button
              id="mobile-sub-ai-tutor"
              onClick={() => handleSelectTab("ai-tutor")}
              className={`w-full p-3 rounded-xl text-left flex items-center justify-between gap-3 text-xs border ${
                activeTab === "ai-tutor"
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Bot className="w-4 h-4" />
                <span>{t.header.quickAi}</span>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-400 text-black">
                {t.common.online}
              </span>
            </button>

            {/* Language Switcher in Mobile Drawer */}
            <LanguageSwitcher variant="mobile" />
          </div>
        </div>
      )}
    </div>
  );
};
