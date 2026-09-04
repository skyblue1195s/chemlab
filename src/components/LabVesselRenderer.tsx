import React from "react";
import { GlasswareType, LabReagent, LabReactionResult } from "../types";
import { Flame, Wind, Thermometer, ShieldAlert, Sparkles } from "lucide-react";

interface LabVesselRendererProps {
  glassware: GlasswareType;
  chemicals: LabReagent[];
  activeResult: LabReactionResult | null;
  burner: "off" | "low" | "high";
  magneticStirrer: boolean;
  rubberStopper: boolean;
  retortStand: boolean;
  phIndicatorStrip: boolean;
  temperature: number;
}

export const LabVesselRenderer: React.FC<LabVesselRendererProps> = ({
  glassware,
  chemicals,
  activeResult,
  burner,
  magneticStirrer,
  rubberStopper,
  retortStand,
  phIndicatorStrip,
  temperature,
}) => {
  const liquidColor =
    activeResult?.liquidColor ||
    chemicals.find((c) => c.isLiquid)?.liquidColorHex ||
    (chemicals.length > 0 ? "#38bdf8" : "transparent");

  const hasLiquid = chemicals.length > 0;
  const liquidFillPercentage = chemicals.length === 1 ? 40 : chemicals.length >= 2 ? 65 : 0;

  // Calculate approximate pH for indicator strip
  const getPHInfo = () => {
    const hasAcid = chemicals.some((c) => c.type === "acid");
    const hasBase = chemicals.some((c) => c.type === "base");
    if (hasAcid && !hasBase) return { ph: "1.2", label: "Axit mạnh", color: "#ef4444" };
    if (hasBase && !hasAcid) return { ph: "13.5", label: "Bazơ mạnh", color: "#3b82f6" };
    if (hasAcid && hasBase) return { ph: "7.0", label: "Trung tính (Muối)", color: "#10b981" };
    return { ph: "7.0", label: "Trung tính", color: "#10b981" };
  };

  const phInfo = getPHInfo();

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[360px] py-4 select-none">
      {/* Retort Stand (Giá sắt kẹp) if enabled */}
      {retortStand && (
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
          <div className="relative w-80 h-full">
            {/* Heavy Base Plate */}
            <div className="absolute bottom-2 left-6 right-6 h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 rounded-sm border-t border-slate-500 shadow-2xl" />
            {/* Upright Metal Rod */}
            <div className="absolute bottom-5 left-12 w-3.5 top-2 bg-gradient-to-r from-slate-500 via-slate-300 to-slate-600 rounded-t-sm shadow-md border-x border-slate-400" />
            {/* Clamp Arm holding glassware */}
            <div className="absolute top-14 left-12 w-28 h-2.5 bg-gradient-to-b from-slate-400 to-slate-600 rounded-r shadow-md flex items-center justify-end">
              {/* Tightening screw */}
              <div className="w-3 h-5 -ml-1 bg-slate-400 rounded-sm border border-slate-300" />
              {/* Clamp fingers grasping neck */}
              <div className="w-5 h-8 border-2 border-slate-300 rounded-r-full -mr-2 bg-slate-500/80" />
            </div>
          </div>
        </div>
      )}

      {/* Gas Delivery Tube if Rubber Stopper is Active */}
      {rubberStopper && (
        <div className="absolute -top-6 flex flex-col items-center z-30 pointer-events-none">
          {/* Glass Bent Tube */}
          <div className="relative w-36 h-12">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 140 50">
              <path
                d="M 70,50 L 70,15 Q 70,5 80,5 L 130,5 Q 140,5 140,15 L 140,40"
                fill="none"
                stroke="rgba(203, 213, 225, 0.7)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {activeResult?.hasGas && (
                <circle cx="140" cy="40" r="3" fill="#38bdf8" className="animate-ping" />
              )}
            </svg>
            <span className="absolute -right-4 -bottom-3 text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-700 shadow-sm">
              Ống dẫn khí
            </span>
          </div>
        </div>
      )}

      {/* Flame Effect for Na + H2O Reaction or High Energy */}
      {activeResult?.flameEffect && (
        <div className="absolute -top-12 z-30 animate-pulse flex flex-col items-center">
          <Flame className="w-12 h-12 text-yellow-400 filter drop-shadow-[0_0_15px_rgba(250,204,21,0.9)]" />
          <span className="text-[10px] font-bold text-yellow-300 bg-yellow-950/90 px-2.5 py-0.5 rounded-full border border-yellow-500 shadow-lg">
            Phản ứng bốc cháy mãnh liệt!
          </span>
        </div>
      )}

      {/* Rising Gas Bubbles / Vapor Banner */}
      {activeResult?.hasGas && !activeResult?.flameEffect && (
        <div className="absolute -top-10 z-30 flex flex-col items-center gap-1 animate-bounce">
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-200/90 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="w-3 h-3 rounded-full bg-slate-200/90 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="w-2 h-2 rounded-full bg-slate-200/90 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-500 text-cyan-300 font-bold shadow-[0_0_12px_rgba(34,211,238,0.4)]">
            Sủi bọt khí: {activeResult.gasDescription || "Khí thoát ra"}
          </span>
        </div>
      )}

      {/* Steam if Heated High */}
      {temperature >= 80 && (
        <div className="absolute -top-10 z-20 flex gap-4 opacity-70 animate-pulse">
          <Wind className="w-5 h-5 text-slate-300 -rotate-90" />
          <Wind className="w-6 h-6 text-slate-200 -rotate-90" />
          <Wind className="w-5 h-5 text-slate-300 -rotate-90" />
        </div>
      )}

      {/* Main Glassware Center Stage Container */}
      <div className="relative flex flex-col items-center justify-end z-10">
        {/* Stopper Plug on mouth */}
        {rubberStopper && (
          <div className="w-10 h-3 bg-amber-900 border border-amber-950 rounded-t-sm shadow-inner z-20 -mb-0.5" />
        )}

        {/* 1. TEST TUBE (Ống nghiệm) */}
        {glassware === "test-tube" && (
          <div className="w-20 h-64 border-4 border-slate-500/80 rounded-b-full bg-slate-900/25 backdrop-blur-sm relative overflow-hidden flex flex-col justify-end shadow-2xl">
            {/* Glass Rim */}
            <div className="absolute top-0 inset-x-0 h-2 border-b border-slate-400/60 bg-white/10" />

            {/* Test Tube Measurement Marks */}
            <div className="absolute left-1 top-12 bottom-12 flex flex-col justify-between opacity-30 pointer-events-none">
              {[15, 10, 5].map((ml) => (
                <div key={ml} className="flex items-center gap-1">
                  <div className="w-2 h-0.5 bg-white" />
                  <span className="text-[7px] text-white font-mono">{ml}ml</span>
                </div>
              ))}
            </div>

            {/* Liquid */}
            {hasLiquid && (
              <div
                className="w-full transition-all duration-700 relative"
                style={{
                  height: `${liquidFillPercentage}%`,
                  backgroundColor: liquidColor,
                }}
              >
                {/* Meniscus curvature */}
                <div className="absolute -top-1 inset-x-0 h-2 rounded-[50%] bg-white/20 border-t border-white/40" />

                {/* Precipitate */}
                {activeResult?.precipitateColor && (
                  <div
                    className="absolute bottom-2 left-2 right-2 h-8 rounded-b-xl transition-all duration-1000 shadow-inner flex items-center justify-center"
                    style={{ backgroundColor: activeResult.precipitateColor }}
                  >
                    <span className="text-[8px] font-bold text-white opacity-90 drop-shadow">
                      Kết tủa
                    </span>
                  </div>
                )}

                {/* Stirrer Vortex Animation */}
                {magneticStirrer && (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/40 animate-spin" />
                  </div>
                )}

                {/* Gas Bubbles */}
                {activeResult?.hasGas && (
                  <div className="absolute inset-0 flex justify-around items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-white/90 animate-ping delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-ping delay-200" />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 2. BEAKER 250ML (Cốc đong có mỏ) */}
        {glassware === "beaker" && (
          <div className="w-40 h-56 border-4 border-slate-500/80 rounded-b-2xl bg-slate-900/25 backdrop-blur-sm relative overflow-hidden flex flex-col justify-end shadow-2xl">
            {/* Beaker Lip / Pouring Spout */}
            <div className="absolute -top-1 -left-2 w-4 h-2 border-l-2 border-t-2 border-slate-400 rotate-45" />
            <div className="absolute top-0 inset-x-0 h-2 border-b border-slate-400/60 bg-white/10" />

            {/* Graduations */}
            <div className="absolute left-2 top-8 bottom-8 flex flex-col justify-between opacity-40 pointer-events-none">
              {[200, 150, 100, 50].map((ml) => (
                <div key={ml} className="flex items-center gap-1">
                  <div className="w-3 h-0.5 bg-white" />
                  <span className="text-[8px] text-white font-mono">{ml}mL</span>
                </div>
              ))}
            </div>

            {/* Brand Logo Pyrex 250ml */}
            <div className="absolute right-3 top-6 text-right opacity-30 pointer-events-none font-mono">
              <span className="text-[9px] font-bold block text-white">PYREX®</span>
              <span className="text-[7px] text-slate-300">250 mL</span>
            </div>

            {/* Liquid Body */}
            {hasLiquid && (
              <div
                className="w-full transition-all duration-700 relative"
                style={{
                  height: `${liquidFillPercentage}%`,
                  backgroundColor: liquidColor,
                }}
              >
                {/* Surface Meniscus */}
                <div className="absolute -top-1.5 inset-x-0 h-3 rounded-[50%] bg-white/20 border-t border-white/50" />

                {/* Magnetic Stirring Bar sitting at bottom */}
                {magneticStirrer && (
                  <div className="absolute bottom-2 inset-x-0 flex justify-center items-center">
                    <div className="w-7 h-2 bg-white rounded-full shadow-md animate-spin duration-300 border border-slate-400" />
                  </div>
                )}

                {/* Precipitate */}
                {activeResult?.precipitateColor && (
                  <div
                    className="absolute bottom-1 left-2 right-2 h-7 rounded-b-xl transition-all duration-1000 shadow-inner flex items-center justify-center"
                    style={{ backgroundColor: activeResult.precipitateColor }}
                  >
                    <span className="text-[9px] font-bold text-white opacity-90 drop-shadow">
                      Lớp chất rắn kết tủa
                    </span>
                  </div>
                )}

                {/* Gas Bubbles */}
                {activeResult?.hasGas && (
                  <div className="absolute inset-0 flex justify-around items-center">
                    <span className="w-2 h-2 rounded-full bg-white/90 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-ping delay-100" />
                    <span className="w-2 h-2 rounded-full bg-white/90 animate-ping delay-200" />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 3. ERLENMEYER FLASK (Bình tam giác 250mL) */}
        {glassware === "erlenmeyer" && (
          <div className="relative w-44 h-64 flex flex-col items-center justify-end">
            {/* Neck */}
            <div className="w-16 h-16 border-x-4 border-t-4 border-slate-500/80 bg-slate-900/25 backdrop-blur-sm relative z-10" />
            {/* Conical Body (SVG Clip) */}
            <div className="w-44 h-48 -mt-1 relative flex flex-col justify-end overflow-hidden">
              <svg
                viewBox="0 0 176 192"
                className="absolute inset-0 w-full h-full drop-shadow-2xl"
              >
                <defs>
                  <clipPath id="erlenmeyer-clip">
                    <polygon points="56,0 120,0 172,184 4,184" />
                  </clipPath>
                </defs>
                {/* Flask Glass Outline */}
                <polygon
                  points="56,0 120,0 172,184 4,184"
                  fill="rgba(15, 23, 42, 0.25)"
                  stroke="rgba(148, 163, 184, 0.8)"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />

                {/* Liquid Fill Inside Clip */}
                {hasLiquid && (
                  <g clipPath="url(#erlenmeyer-clip)">
                    <rect
                      x="0"
                      y={192 - (liquidFillPercentage * 1.92)}
                      width="176"
                      height={liquidFillPercentage * 1.92}
                      fill={liquidColor}
                      className="transition-all duration-700"
                    />
                    {/* Precipitate layer */}
                    {activeResult?.precipitateColor && (
                      <rect
                        x="0"
                        y="160"
                        width="176"
                        height="32"
                        fill={activeResult.precipitateColor}
                        opacity="0.9"
                      />
                    )}
                  </g>
                )}
              </svg>

              {/* Internal items over liquid */}
              {hasLiquid && magneticStirrer && (
                <div className="absolute bottom-4 inset-x-0 flex justify-center z-10">
                  <div className="w-7 h-2 bg-white rounded-full shadow-md animate-spin border border-slate-400" />
                </div>
              )}

              {/* Gas Bubbles in Erlenmeyer */}
              {hasLiquid && activeResult?.hasGas && (
                <div className="absolute bottom-8 inset-x-8 flex justify-around items-center z-10">
                  <span className="w-2 h-2 rounded-full bg-white/90 animate-ping" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-ping delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-ping delay-200" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. ROUND-BOTTOM FLASK (Bình cầu đáy tròn) */}
        {glassware === "round-bottom" && (
          <div className="relative w-44 h-64 flex flex-col items-center justify-end">
            {/* Long Neck */}
            <div className="w-12 h-20 border-x-4 border-t-4 border-slate-500/80 bg-slate-900/25 backdrop-blur-sm relative z-10" />
            {/* Spherical Bulb */}
            <div className="w-40 h-40 -mt-2 rounded-full border-4 border-slate-500/80 bg-slate-900/25 backdrop-blur-sm relative overflow-hidden flex flex-col justify-end shadow-2xl">
              {hasLiquid && (
                <div
                  className="w-full transition-all duration-700 relative"
                  style={{
                    height: `${liquidFillPercentage}%`,
                    backgroundColor: liquidColor,
                  }}
                >
                  <div className="absolute -top-1.5 inset-x-0 h-3 rounded-[50%] bg-white/20 border-t border-white/40" />

                  {/* Precipitate */}
                  {activeResult?.precipitateColor && (
                    <div
                      className="absolute bottom-1 left-4 right-4 h-7 rounded-b-full transition-all duration-1000 shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: activeResult.precipitateColor }}
                    >
                      <span className="text-[8px] font-bold text-white opacity-90 drop-shadow">
                        Kết tủa
                      </span>
                    </div>
                  )}

                  {/* Gas bubbles */}
                  {activeResult?.hasGas && (
                    <div className="absolute inset-0 flex justify-around items-center">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span className="w-2 h-2 rounded-full bg-white animate-ping delay-100" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* pH Indicator Strip Immersed in Liquid */}
        {phIndicatorStrip && (
          <div className="absolute top-10 right-4 z-20 flex flex-col items-center animate-fadeIn">
            <div className="w-3.5 h-32 rounded-t-sm shadow-xl flex flex-col border border-slate-400 overflow-hidden bg-amber-100">
              {/* Dry Top part */}
              <div className="w-full h-12 bg-amber-200 border-b border-amber-300" />
              {/* Immersed Colorized Indicator tip */}
              <div
                className="w-full flex-1 transition-colors duration-500"
                style={{ backgroundColor: hasLiquid ? phInfo.color : "#fef08a" }}
              />
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-md bg-slate-950/90 border border-slate-700 text-[10px] font-mono font-bold text-white shadow">
              pH: {hasLiquid ? phInfo.ph : "--"}
            </div>
          </div>
        )}

        {/* Lab Thermometer Dipped in Vessel */}
        <div className="absolute top-4 left-6 z-20 flex flex-col items-center">
          <div className="w-2.5 h-36 bg-slate-200/90 rounded-full border border-slate-400 relative overflow-hidden flex flex-col justify-end shadow-md">
            {/* Red Liquid column rising with temperature */}
            <div
              className="w-full bg-rose-600 transition-all duration-500 rounded-b-full"
              style={{ height: `${Math.min(100, Math.max(10, (temperature / 110) * 100))}%` }}
            />
          </div>
          <div className="mt-1 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono font-bold text-rose-400 flex items-center gap-0.5 shadow">
            <Thermometer className="w-2.5 h-2.5" />
            {temperature}°C
          </div>
        </div>
      </div>

      {/* Heat Source: Bunsen Burner / Alcohol Lamp under Vessel */}
      <div className="relative mt-2 flex flex-col items-center z-10">
        {/* Flame visual if ON */}
        {burner !== "off" && (
          <div className="relative -mb-1 flex flex-col items-center">
            <div
              className={`transition-all duration-300 flex items-center justify-center ${
                burner === "high"
                  ? "w-10 h-14 bg-cyan-400/90 rounded-t-full filter drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] animate-pulse"
                  : "w-8 h-10 bg-amber-400/90 rounded-t-full filter drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-pulse"
              }`}
            >
              {/* Inner Flame core */}
              <div
                className={`w-3 h-5 rounded-t-full ${
                  burner === "high" ? "bg-white" : "bg-cyan-300"
                }`}
              />
            </div>
            <span
              className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border shadow -mt-1 z-10 ${
                burner === "high"
                  ? "bg-cyan-950 text-cyan-300 border-cyan-500"
                  : "bg-amber-950 text-amber-300 border-amber-600"
              }`}
            >
              {burner === "high" ? "Lửa mạnh (100°C+)" : "Lửa vừa (~65°C)"}
            </span>
          </div>
        )}

        {/* Burner Brass Metal Body */}
        <div className="w-16 h-8 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 rounded-t-md border-t border-amber-400 shadow-md flex items-center justify-center">
          <div className="w-6 h-2 bg-amber-950 rounded-full" />
        </div>
        {/* Burner Base Plate */}
        <div className="w-24 h-2.5 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 rounded-sm border-t border-slate-500 shadow-lg" />
      </div>

      {/* Reagents Added Badges in Vessel */}
      <div className="mt-4 flex items-center gap-2 flex-wrap justify-center z-10">
        {chemicals.length === 0 ? (
          <span className="text-xs text-slate-500 italic">
            Dụng cụ chưa có hóa chất. Chọn hóa chất từ kệ bên trái để phối trộn!
          </span>
        ) : (
          chemicals.map((r, i) => (
            <span
              key={r.id}
              className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-800/90 text-cyan-400 border border-slate-700 shadow-sm flex items-center gap-1.5"
            >
              <span className={`w-2 h-2 rounded-full ${r.color}`} />
              <span>Chất {i + 1}: {r.formula} ({r.name})</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
};
