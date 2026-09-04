import React from "react";
import { ReactionSimulation, ReactionStep } from "../types";
import {
  ArrowRight,
  Flame,
  Zap,
  RotateCcw,
  Play,
  Pause,
  Thermometer,
  Sparkles,
  Layers,
  Activity,
  Wind,
  Droplets,
} from "lucide-react";

interface ReactionStageVisualizerProps {
  reaction: ReactionSimulation;
  currentStepIndex: number;
  currentStep: ReactionStep;
  isPlaying: boolean;
  playbackSpeed: number;
  onStepChange: (index: number) => void;
  onTogglePlay: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
}

export const ReactionStageVisualizer: React.FC<ReactionStageVisualizerProps> = ({
  reaction,
  currentStepIndex,
  currentStep,
  isPlaying,
  playbackSpeed,
  onStepChange,
  onTogglePlay,
  onReset,
  onSpeedChange,
}) => {
  const config = reaction.visualConfig;
  const isLastStep = currentStepIndex === reaction.steps.length - 1;

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden p-4 sm:p-6 flex flex-col gap-5 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
      {/* Stage Header Info: Enthalpy, Energy Type, Grade */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          {reaction.grade && (
            <span className="px-2.5 py-0.5 rounded-full font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Lớp {reaction.grade}
            </span>
          )}
          {reaction.categoryLabel && (
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {reaction.categoryLabel}
            </span>
          )}
          {reaction.enthalpy && (
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 font-mono flex items-center gap-1">
              <Thermometer className="w-3 h-3 text-amber-400" />
              {reaction.enthalpy}
            </span>
          )}
        </div>

        {/* Playback speed selector */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-slate-800">
          <span className="text-slate-400 text-[11px]">Tốc độ:</span>
          {[1, 1.5, 2].map((s) => (
            <button
              key={s}
              id={`btn-speed-${s}x`}
              onClick={() => onSpeedChange(s)}
              className={`px-2 py-0.5 rounded-lg text-[11px] font-mono font-bold transition-all ${
                playbackSpeed === s
                  ? "bg-cyan-500 text-black shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Stage Canvas */}
      <div className="relative w-full min-h-[280px] sm:min-h-[320px] bg-[#020617] rounded-2xl border border-slate-800/90 flex flex-col items-center justify-center overflow-hidden p-4 sm:p-6 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Reaction-Specific Simulations */}

        {/* 1. Fe + CuSO4 */}
        {reaction.id === "fe-cuso4" && (
          <div className="relative z-10 flex items-center justify-around w-full max-w-xl">
            {/* Iron nail */}
            <div className="flex flex-col items-center">
              <div
                className={`w-14 h-40 rounded-xl transition-all duration-700 flex flex-col items-center justify-between py-2 border shadow-lg ${
                  currentStepIndex >= 3
                    ? "bg-amber-700 border-amber-500 shadow-amber-600/40"
                    : "bg-slate-400 border-slate-300 shadow-slate-400/20"
                }`}
              >
                <span className="text-[10px] font-bold text-slate-900 font-mono">Fe(r)</span>
                {currentStepIndex >= 3 && (
                  <span className="text-[9px] font-bold text-white bg-amber-900/90 px-1.5 py-0.5 rounded animate-pulse">
                    Mạ Cu đỏ cam
                  </span>
                )}
                <span className="text-[10px] text-slate-900 font-mono">Đinh Fe</span>
              </div>
              <span className="text-xs text-slate-300 mt-2 font-medium">Bề mặt đinh sắt</span>
            </div>

            {/* Electron Flow */}
            <div className="flex flex-col items-center gap-1 text-center">
              {currentStepIndex >= 2 ? (
                <div className="flex flex-col items-center animate-bounce">
                  <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                    2e⁻ chuyển dời
                  </span>
                  <span className="text-[11px] text-amber-200 mt-1">Fe → Cu²⁺</span>
                  <ArrowRight className="w-8 h-8 text-amber-400 mt-1" />
                </div>
              ) : (
                <span className="text-xs text-slate-500 italic">Ion Cu²⁺ đang tiếp cận...</span>
              )}
            </div>

            {/* Beaker */}
            <div className="flex flex-col items-center">
              <div
                className={`w-36 h-40 rounded-b-3xl border-2 border-t-0 flex flex-col justify-end p-3 transition-all duration-700 ${
                  currentStepIndex >= 3
                    ? "bg-emerald-500/20 border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                    : "bg-cyan-500/30 border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                }`}
              >
                <div className="flex flex-col items-center gap-1.5 mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full transition-all ${
                      currentStepIndex >= 3
                        ? "bg-emerald-500/30 text-emerald-200 border border-emerald-400"
                        : "bg-cyan-500/40 text-cyan-100 border border-cyan-400"
                    }`}
                  >
                    {currentStepIndex >= 3 ? "Fe²⁺ (Xanh nhạt)" : "Cu²⁺ (Xanh lam)"}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">SO₄²⁻ trơ</span>
                </div>
              </div>
              <span className="text-xs text-slate-300 mt-2 font-medium">Dung dịch muối</span>
            </div>
          </div>
        )}

        {/* 2. Na + Cl2 */}
        {reaction.id === "na-cl2" && (
          <div className="relative z-10 flex items-center justify-around w-full max-w-xl">
            <div className="flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full flex flex-col items-center justify-center font-mono border-2 transition-all duration-700 shadow-lg ${
                  currentStepIndex >= 2
                    ? "bg-purple-950/90 border-purple-400 text-purple-200 shadow-purple-500/40 scale-90"
                    : "bg-rose-950/90 border-rose-400 text-rose-200 shadow-rose-500/40"
                }`}
              >
                <span className="text-base font-bold">
                  {currentStepIndex >= 2 ? "Na⁺" : "Na"}
                </span>
                <span className="text-[11px] text-slate-300">
                  {currentStepIndex >= 2 ? "[Ne] 2,8" : "2,8,1"}
                </span>
              </div>
              <span className="text-xs text-slate-300 mt-2 font-medium">
                {currentStepIndex >= 2 ? "Cation Na⁺ bát tử" : "Nguyên tử Natri"}
              </span>
            </div>

            <div className="flex flex-col items-center">
              {currentStepIndex >= 2 ? (
                <div className="flex flex-col items-center animate-pulse">
                  <span className="text-xs font-mono font-bold text-yellow-300 bg-yellow-950/90 px-3 py-1 rounded-full border border-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                    1e⁻ toàn phần
                  </span>
                  <ArrowRight className="w-8 h-8 text-yellow-400 mt-1" />
                </div>
              ) : (
                <span className="text-xs text-slate-500">Tiếp cận Cl...</span>
              )}
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-28 h-28 rounded-full flex flex-col items-center justify-center font-mono border-2 transition-all duration-700 shadow-lg ${
                  currentStepIndex >= 2
                    ? "bg-emerald-950/90 border-emerald-400 text-emerald-200 shadow-emerald-500/40 scale-105"
                    : "bg-teal-950/90 border-teal-400 text-teal-200 shadow-teal-500/40"
                }`}
              >
                <span className="text-base font-bold">
                  {currentStepIndex >= 2 ? "Cl⁻" : "Cl"}
                </span>
                <span className="text-[11px] text-slate-300">
                  {currentStepIndex >= 2 ? "[Ar] 2,8,8" : "2,8,7"}
                </span>
              </div>
              <span className="text-xs text-slate-300 mt-2 font-medium">
                {currentStepIndex >= 2 ? "Anion Cl⁻ bát tử" : "Nguyên tử Clo"}
              </span>
            </div>
          </div>
        )}

        {/* 3. Ethylene + Br2 */}
        {reaction.id === "c2h4-br2" && (
          <div className="relative z-10 flex items-center justify-around w-full max-w-xl">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700 font-mono text-center shadow-lg">
                <span className="text-lg font-bold text-cyan-400 block">
                  {currentStepIndex >= 2 ? "—CH₂—CH₂—" : "CH₂ = CH₂"}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  {currentStepIndex >= 2 ? "Liên kết π đã bị bẻ gãy" : "Liên kết đôi (1σ + 1π)"}
                </span>
              </div>
              <span className="text-xs text-slate-300 mt-2 font-medium">Khí Ethylene</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-32 h-32 rounded-2xl border-2 flex flex-col items-center justify-center p-3 transition-all duration-700 shadow-lg ${
                  currentStepIndex >= 3
                    ? "bg-slate-800/30 border-slate-700 text-slate-400"
                    : "bg-red-700/40 border-red-500 text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                }`}
              >
                <span className="text-xs font-mono font-bold text-center">
                  {currentStepIndex >= 3 ? "Trong suốt không màu" : "Nước Br₂ màu nâu đỏ"}
                </span>
                <span className="text-[10px] mt-1 text-center opacity-80">
                  {currentStepIndex >= 3 ? "Đã cộng no hoàn toàn" : "Br-Br phân cắt"}
                </span>
              </div>
              <span className="text-xs text-slate-300 mt-2 font-medium">Dung dịch thuốc thử</span>
            </div>
          </div>
        )}

        {/* 4. Daniell Cell (Zn - Cu) */}
        {reaction.id === "galvanic-zn-cu" && (
          <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-xl">
            {/* Voltmeter & Light bulb */}
            <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-2xl">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-yellow-300">
                <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span>Vôn kế: E° = +1.10 V</span>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentStepIndex >= 2
                    ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.6)] animate-pulse"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {currentStepIndex >= 2 ? "💡 Đèn LED Bừng Sáng" : "Chờ đóng mạch..."}
              </div>
            </div>

            {/* Two half-cells */}
            <div className="flex items-center justify-between w-full">
              {/* Zinc Anode */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-36 rounded-b-2xl border-2 border-slate-600 bg-slate-800/50 flex flex-col justify-end p-2">
                  <div className="w-8 h-28 bg-slate-400 rounded mx-auto border border-slate-300 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-black rotate-90">Zn (-)</span>
                  </div>
                  <span className="text-[10px] text-center text-slate-400 mt-1 font-mono">
                    ZnSO₄
                  </span>
                </div>
                <span className="text-xs text-slate-300 mt-1 font-medium">Anot: Zn nhường e</span>
              </div>

              {/* Salt bridge */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-24 h-8 border-4 border-b-0 border-emerald-400/80 rounded-t-xl flex items-center justify-center">
                  <span className="text-[9px] font-mono text-emerald-300 font-bold">KNO₃</span>
                </div>
                <span className="text-[10px] text-emerald-400">Cầu muối</span>
              </div>

              {/* Copper Cathode */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-28 h-36 rounded-b-2xl border-2 border-sky-500 flex flex-col justify-end p-2 transition-all ${
                    currentStepIndex >= 3 ? "bg-sky-500/20" : "bg-sky-500/40"
                  }`}
                >
                  <div
                    className={`w-8 h-28 rounded mx-auto border flex items-center justify-center transition-all ${
                      currentStepIndex >= 3
                        ? "bg-amber-600 border-amber-400 scale-105"
                        : "bg-amber-700 border-amber-600"
                    }`}
                  >
                    <span className="text-[10px] font-bold text-white rotate-90">Cu (+)</span>
                  </div>
                  <span className="text-[10px] text-center text-sky-200 mt-1 font-mono">
                    CuSO₄
                  </span>
                </div>
                <span className="text-xs text-slate-300 mt-1 font-medium">Catot: Cu²⁺ nhận e</span>
              </div>
            </div>
          </div>
        )}

        {/* 5. Generic Dynamic Visualizer for All Reactions */}
        {reaction.id !== "fe-cuso4" &&
          reaction.id !== "na-cl2" &&
          reaction.id !== "c2h4-br2" &&
          reaction.id !== "galvanic-zn-cu" && (
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl text-center gap-4">
              {/* Chemical Equation Badge */}
              <div className="bg-slate-950/90 border border-slate-800 px-4 py-2 rounded-2xl shadow-lg">
                <span className="text-sm sm:text-base font-bold text-cyan-300 font-mono tracking-wide">
                  {reaction.equation}
                </span>
                {reaction.ionEquation && (
                  <span className="text-xs text-emerald-400 font-mono block mt-0.5">
                    {reaction.ionEquation}
                  </span>
                )}
              </div>

              {/* Dynamic Particle Animation Row */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 w-full my-2">
                {/* Reactant A */}
                {config && (
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex flex-col items-center justify-center p-2 border-2 transition-all duration-700 shadow-lg ${
                        isLastStep
                          ? "opacity-50 scale-90 border-slate-700 bg-slate-900"
                          : `${config.reactantA.bgClass} border-cyan-400 shadow-cyan-500/20`
                      }`}
                    >
                      <span className="text-sm sm:text-base font-bold font-mono">
                        {config.reactantA.formula}
                      </span>
                      <span className="text-[10px] opacity-80 mt-0.5 text-center">
                        {config.reactantA.state}
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 mt-1.5 font-medium max-w-[100px] truncate">
                      {config.reactantA.name}
                    </span>
                  </div>
                )}

                {/* Reaction Center Action & Particle Flow */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className="p-3 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse">
                    {config?.particleType === "gas" ? (
                      <Wind className="w-6 h-6 text-sky-400" />
                    ) : config?.particleType === "precipitate" ? (
                      <Droplets className="w-6 h-6 text-emerald-400" />
                    ) : config?.particleType === "heat" ? (
                      <Flame className="w-6 h-6 text-orange-400" />
                    ) : (
                      <Zap className="w-6 h-6 text-yellow-400" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-800">
                    {currentStep.animationState === "initial" && "Trạng thái bắt đầu"}
                    {currentStep.animationState === "approach" && "Va chạm tiếp xúc"}
                    {currentStep.animationState === "transfer" && "Chuyển giao liên kết / e⁻"}
                    {currentStep.animationState === "products" && "Sản phẩm hoàn thành"}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-500" />
                </div>

                {/* Reactant B or Product A */}
                {config && (
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex flex-col items-center justify-center p-2 border-2 transition-all duration-700 shadow-lg ${
                        isLastStep
                          ? `${config.productA.bgClass} border-emerald-400 shadow-emerald-500/30 scale-105`
                          : `${config.reactantB.bgClass} border-slate-700 shadow-slate-800/30`
                      }`}
                    >
                      <span className="text-sm sm:text-base font-bold font-mono">
                        {isLastStep ? config.productA.formula : config.reactantB.formula}
                      </span>
                      <span className="text-[10px] opacity-80 mt-0.5 text-center">
                        {isLastStep ? config.productA.state : config.reactantB.state}
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 mt-1.5 font-medium max-w-[100px] truncate">
                      {isLastStep ? config.productA.name : config.reactantB.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Dynamic Notice Banner */}
              {config?.effectNotice && (
                <div className="text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800/80 px-3.5 py-1.5 rounded-xl flex items-center gap-2 max-w-lg">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{config.effectNotice}</span>
                </div>
              )}
            </div>
          )}

        {/* Reaction Progress Dots Indicator inside Stage */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
          {reaction.steps.map((step, idx) => (
            <button
              key={step.stepNumber}
              id={`stage-dot-${idx}`}
              onClick={() => onStepChange(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentStepIndex
                  ? "bg-cyan-400 w-6 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  : idx < currentStepIndex
                  ? "bg-emerald-400"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              title={`Bước ${step.stepNumber}: ${step.title}`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Controls Bar: Play/Pause, Step Buttons, Reset */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              Bước {currentStep.stepNumber}/{reaction.steps.length}: {currentStep.title}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
            {currentStep.description}
          </p>
          {currentStep.electronMovement && (
            <p className="text-xs text-amber-300 font-mono mt-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{currentStep.electronMovement}</span>
            </p>
          )}
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
          <button
            id="btn-play-pause-reaction"
            onClick={onTogglePlay}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
              isPlaying
                ? "bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/30"
                : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/30"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" /> Tạm dừng
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Phát tự động
              </>
            )}
          </button>
          <button
            id="btn-reset-reaction"
            onClick={onReset}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
            title="Làm lại từ đầu"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
