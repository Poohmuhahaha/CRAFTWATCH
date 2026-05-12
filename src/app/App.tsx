import React, { useState, useRef, useEffect, useLayoutEffect, useId } from "react";
import { Upload, X, RotateCcw, Info, Plus, Minus, Maximize2, Minimize2 } from "lucide-react";
import svgPaths from "../imports/Section-1-1/svg-n6f01f9iwu";
import confetti from "canvas-confetti";
import { Tooltip, TooltipTrigger, TooltipContent } from "./components/ui/tooltip";

// ── TYPES ─────────────────────────────────────────────────────────────────

type Pill   = { id: string; label: string; price?: string };
type Swatch = { id: string; label: string; color: string; price?: string };
type StrapGroup = { id: string; label: string; price: string; colors: Swatch[] };

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const CASE_SIZES: Pill[] = [
  { id: "40", label: "40mm", price: "Included" },
  { id: "49", label: "49mm", price: "+$15" },
  { id: "64", label: "64mm", price: "+$30" },
];

const CASE_COLORS: Swatch[] = [
  { id: "black",  label: "Black",  color: "#1a1815", price: "Included" },
  { id: "white",  label: "White",  color: "#efeae0", price: "Included" },
  { id: "cream",  label: "Cream",  color: "#ddd2b8", price: "Included" },
  { id: "navy",   label: "Navy",   color: "#1f2d4a", price: "Included" },
  { id: "olive",  label: "Olive",  color: "#5b6240", price: "Included" },
  { id: "red",    label: "Red",    color: "#a8302b", price: "+$15" },
  { id: "silver", label: "Silver", color: "#c8ccd1", price: "+$15" },
  { id: "blush",  label: "Blush",  color: "#e6b8b0", price: "+$15" },
];

const DIAL_COLORS: Swatch[] = [
  { id: "black", label: "Black", color: "#1a1815" },
  { id: "white", label: "White", color: "#efeae0" },
  { id: "cream", label: "Cream", color: "#ddd2b8" },
  { id: "navy",  label: "Navy",  color: "#1f2d4a" },
  { id: "slate", label: "Slate", color: "#4a5057" },
];

const HOUR_MARKER_TYPES: Pill[] = [
  { id: "arabic", label: "Arabic" },
  { id: "roman",  label: "Roman" },
  { id: "dots",   label: "Dots" },
  { id: "empty",  label: "Empty" },
];

const METAL_COLORS: Swatch[] = [
  { id: "black",  label: "Black",  color: "#1a1815" },
  { id: "white",  label: "White",  color: "#efeae0" },
  { id: "silver", label: "Silver", color: "#c8ccd1" },
  { id: "gold",   label: "Gold",   color: "#d4af6a" },
];

const SECONDS_COLORS: Swatch[] = [
  { id: "red",    label: "Red",    color: "#d93025" },
  { id: "orange", label: "Orange", color: "#e8720c" },
  { id: "yellow", label: "Yellow", color: "#d4b438" },
  { id: "teal",   label: "Teal",   color: "#1a9e84" },
  { id: "blue",   label: "Blue",   color: "#1a5fd4" },
  { id: "white",  label: "White",  color: "#efeae0" },
];

const STRAP_GROUPS: StrapGroup[] = [
  {
    id: "rubber", label: "Rubber", price: "Included",
    colors: [
      { id: "rubber-black",  label: "Black",  color: "#1a1815" },
      { id: "rubber-white",  label: "White",  color: "#efeae0" },
      { id: "rubber-red",    label: "Red",    color: "#b8362c" },
      { id: "rubber-navy",   label: "Navy",   color: "#1f4da6" },
      { id: "rubber-yellow", label: "Yellow", color: "#d4b438" },
    ],
  },
  {
    id: "leather", label: "Leather", price: "+$25",
    colors: [
      { id: "leather-black",    label: "Black",    color: "#1a1815" },
      { id: "leather-tan",      label: "Tan",      color: "#b59470" },
      { id: "leather-brown",    label: "Brown",    color: "#6b4a2e" },
      { id: "leather-burgundy", label: "Burgundy", color: "#5e1f26" },
    ],
  },
  {
    id: "nylon", label: "Nylon", price: "+$15",
    colors: [
      { id: "nylon-black", label: "Black", color: "#2a2a2a" },
      { id: "nylon-navy",  label: "Navy",  color: "#1f3060" },
      { id: "nylon-olive", label: "Olive", color: "#4a5230" },
    ],
  },
];

const ALL_STRAPS: Swatch[] = STRAP_GROUPS.flatMap((g) => g.colors);
const CASE_SIZE_PX: Record<string, number> = { "40": 180, "49": 200, "64": 220 };

const getGMT7 = () => {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const g = new Date(utcMs + 7 * 3600000);
  return { h: g.getHours(), m: g.getMinutes(), s: g.getSeconds() };
};

function TimeDisplay({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  const [time, setTime] = useState(getGMT7);
  useEffect(() => {
    const id = setInterval(() => setTime(getGMT7()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={`text-[#737373] uppercase tracking-[0.16em] ${className}`} style={{ fontSize: 11, fontWeight: 700, ...style }}>
      GMT+7 · {String(time.h).padStart(2, "0")}:{String(time.m).padStart(2, "0")}:{String(time.s).padStart(2, "0")}
    </div>
  );
}

// ── NAVBAR ─────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="hidden lg:block sticky top-0 z-50 w-full border-b border-[rgba(222,217,209,0.6)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1280px] px-8 h-16 flex items-center justify-between">
        <a href="#" className="select-none flex items-baseline">
          <span className="text-[#141414] tracking-[-0.04em]" style={{ fontSize: 20, fontWeight: 800 }}>CRAFT</span>
          <span className="text-[#737373] tracking-[-0.04em]" style={{ fontSize: 20, fontWeight: 300 }}>WATCH</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Collection", "About", "Contact"].map((l) => (
            <a key={l} href="#" className="text-[#737373] hover:text-[#141414] transition-colors" style={{ fontSize: 14, fontWeight: 600 }}>{l}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ── SECTION ────────────────────────────────────────────────────────────────

function Section({ title, hint, children, info }: {
  title: string; hint?: string; children: React.ReactNode; info?: React.ReactNode;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: "1200px" }}>
      <div
        className="relative transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front face */}
        <div
          className="bg-white/80 border border-[rgba(222,217,209,0.9)] rounded-[24px] w-full"
          style={{ boxShadow: "0px 8px 12px rgba(0,0,0,0.04)", backfaceVisibility: "hidden" }}
        >
          <div className="px-6 pt-5 pb-1 flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-3 min-w-0">
              <span className="text-[#141414] tracking-[-0.8px]" style={{ fontSize: 20, fontWeight: 700 }}>{title}</span>
              {hint && <span className="text-[#9e9e9e]" style={{ fontSize: 13, fontWeight: 600 }}>{hint}</span>}
            </div>
            {info && (
              <button
                type="button"
                onClick={() => setFlipped(true)}
                className="size-7 rounded-full border border-[#ddd5c8] text-[#b8ad9e] hover:text-[#141414] hover:border-[#888] transition-all flex items-center justify-center flex-shrink-0"
                aria-label={`About ${title}`}
              >
                <Info className="size-3.5" />
              </button>
            )}
          </div>
          <div className="px-6 pb-6 pt-3">{children}</div>
        </div>

        {/* Back face */}
        {info && (
          <div
            className="absolute inset-0 bg-[#faf9f6] border border-[rgba(222,217,209,0.9)] rounded-[24px] overflow-auto"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", boxShadow: "0px 8px 12px rgba(0,0,0,0.04)" }}
          >
            <div className="px-6 pt-5 pb-2 flex items-center justify-between gap-2">
              <span className="text-[#141414] tracking-[-0.6px]" style={{ fontSize: 17, fontWeight: 700 }}>{title}</span>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="flex items-center gap-1.5 text-[#9e9e9e] hover:text-[#141414] transition-colors flex-shrink-0"
                style={{ fontSize: 12, fontWeight: 600 }}
              >
                <span>←</span>
                <span>Back</span>
              </button>
            </div>
            <div className="px-6 pb-6 pt-3">{info}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── PILL ROW ───────────────────────────────────────────────────────────────

function PillRow({ options, value, onChange }: { options: Pill[]; value: string; onChange: (id: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`flex flex-col items-center justify-center min-h-[42px] px-4 py-1.5 rounded-full border transition-all ${
              active ? "bg-[#111] text-white border-[#111] shadow-[0px_8px_12px_rgba(0,0,0,0.14)]" : "bg-white text-[#141414] border-[#ded9d1] hover:border-[#111]"
            }`}
            style={{ fontSize: 15 }}
          >
            <span>{o.label}</span>
            {o.price && <span className={`mt-0.5 ${active ? "text-white/60" : "text-[#9e9e9e]"}`} style={{ fontSize: 10, fontWeight: 600 }}>{o.price}</span>}
          </button>
        );
      })}
    </div>
  );
}

// ── SWATCH ROW ─────────────────────────────────────────────────────────────

function SwatchRow({
  options, value, onSelect, disabled = false, forcedId, disabledIds = [], blockedReason,
}: {
  options: Swatch[]; value: string[] | string; onSelect: (id: string) => void;
  disabled?: boolean; forcedId?: string; disabledIds?: string[]; blockedReason?: string;
}) {
  const isSelected = (id: string) => Array.isArray(value) ? value.includes(id) : value === id;
  return (
    <div className="grid gap-x-2 gap-y-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))" }}>
      {options.map((o) => {
        const sel = isSelected(o.id);
        const isForced = forcedId === o.id;
        const isColorBlocked = disabledIds.includes(o.id);
        const isDisabled = (disabled && !isForced) || isColorBlocked;

        const btn = (
          <button
            type="button"
            aria-disabled={isColorBlocked || undefined}
            disabled={!isColorBlocked && isDisabled}
            onClick={() => { if (!isDisabled) onSelect(o.id); }}
            className={`flex flex-col items-center justify-center gap-1 h-[100px] px-1 rounded-xl transition ${
              isColorBlocked ? "opacity-30 cursor-not-allowed grayscale" : isDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-black/5"
            }`}
          >
            <div
              className={`relative rounded-full size-[50px] shadow-[inset_0px_-2.9px_5.8px_rgba(0,0,0,0.08),inset_0px_2.9px_5.8px_rgba(255,255,255,0.18)] ${
                sel ? "ring-2 ring-offset-2 ring-[#111]" : "ring-1 ring-black/10"
              }`}
              style={{ background: o.color }}
            >
              {sel && <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white shadow ring-1 ring-black/30" />}
            </div>
            <span className="uppercase text-[#181612] text-center" style={{ fontSize: 12, fontWeight: 600 }}>{o.label}</span>
            {isColorBlocked && <span className="text-[#b8362c] text-center leading-tight" style={{ fontSize: 9, fontWeight: 700 }}>N/A</span>}
            {!isColorBlocked && o.price && <span className="text-[#9e9e9e] text-center" style={{ fontSize: 9, fontWeight: 600 }}>{o.price}</span>}
          </button>
        );

        if (isColorBlocked) {
          return (
            <Tooltip key={o.id}>
              <TooltipTrigger asChild>{btn}</TooltipTrigger>
              <TooltipContent side="top">{blockedReason ?? "Too similar to dial color"}</TooltipContent>
            </Tooltip>
          );
        }
        return <React.Fragment key={o.id}>{btn}</React.Fragment>;
      })}
    </div>
  );
}

// ── STRAP ──────────────────────────────────────────────────────────────────

function Strap({ width, height, color, material = "rubber", position }: {
  width: number; height: number; color: string; material?: string; position: "top" | "bottom";
}) {
  const tipRadius = width / 2;
  const innerRadius = 10;
  const radius = position === "top"
    ? `${tipRadius}px ${tipRadius}px ${innerRadius}px ${innerRadius}px`
    : `${innerRadius}px ${innerRadius}px ${tipRadius}px ${tipRadius}px`;

  if (material === "rubber") {
    return (
      <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: color, boxShadow: "inset 0 -3px 7px rgba(0,0,0,0.30), inset 4px 0 9px rgba(0,0,0,0.22), inset -4px 0 9px rgba(0,0,0,0.22), 0 10px 22px rgba(0,0,0,0.32)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit", background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.18) 100%)" }} />
      </div>
    );
  }
  if (material === "leather") {
    const grain = "repeating-linear-gradient(47deg, rgba(0,0,0,0.14) 0px, rgba(0,0,0,0.14) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-47deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 6px)";
    return (
      <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: `${grain}, ${color}`, boxShadow: "inset -3px -4px 3px rgba(0,0,0,0.38), inset 3px 3px 2px rgba(255,255,255,0.22), 0 10px 22px rgba(0,0,0,0.32)" }}>
        <div aria-hidden="true" className="absolute pointer-events-none" style={{ inset: 5, borderRadius: "inherit", border: "1.5px dashed rgba(210,185,150,0.72)", boxShadow: "0 0 5px rgba(0,0,0,0.55)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit", background: "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 32%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.28) 100%)" }} />
      </div>
    );
  }
  const ribSpacing = 8;
  const ribCount = Math.ceil(height / ribSpacing) + 1;
  return (
    <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: color, boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.18), inset -3px -4px 6px rgba(0,0,0,0.45), 0 10px 22px rgba(0,0,0,0.32)" }}>
      <svg className="absolute inset-0 pointer-events-none" width={width} height={height} style={{ display: "block" }}>
        {Array.from({ length: ribCount }, (_, i) => (
          <line key={i} x1={0} x2={width} y1={i * ribSpacing + 0.5} y2={i * ribSpacing + 0.5} stroke="rgba(170,170,170,0.55)" strokeWidth={1} />
        ))}
      </svg>
      <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit", background: "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,0.35) 100%), linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 32%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.25) 100%)" }} />
    </div>
  );
}

// ── WATCH PREVIEW ──────────────────────────────────────────────────────────

function WatchPreview({
  caseColor, caseSize, dialColor, dialImage, handsColor, secondsColor, markerColor, markerType, strapColor, strapMaterial, scale = 1,
}: {
  caseColor: string; caseSize: string; dialColor: string; dialImage: string | null;
  handsColor: string; secondsColor: string; markerColor: string; markerType: string;
  strapColor: string; strapMaterial: string; scale?: number;
}) {
  const [time, setTime] = useState(getGMT7);
  useEffect(() => {
    const id = setInterval(() => setTime(getGMT7()), 1000);
    return () => clearInterval(id);
  }, []);

  const secAngle    = time.s * 6;
  const minuteAngle = time.m * 6 + time.s * 0.1;
  const hourAngle   = (time.h % 12) * 30 + time.m * 0.5 + time.s * (0.5 / 60);

  const uid = useId().replace(/:/g, "");
  const msId = `ms-${uid}`;
  const hsId = `hs-${uid}`;
  const ssId = `ss-${uid}`;

  const cs       = Math.round((CASE_SIZE_PX[caseSize] ?? 224) * scale);
  const dialPad  = Math.round(cs * 0.05);
  const strapW   = Math.round(cs * 0.393);
  const strapTopH = Math.round(cs * 1.00);
  const strapBotH = Math.round(cs * 1.36);
  const lugW      = Math.round(cs * 0.045);
  const lugH      = Math.round(cs * 0.115);
  const lugProtrude = Math.round(cs * 0.05);
  const lugInsetX   = (cs - strapW) / 2 - lugW;

  const markerPositions = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    return { x: 50 + 42 * Math.cos(angle), y: 50 + 42 * Math.sin(angle), idx: i };
  });
  const romanNumerals = ["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"];
  const lugBase = { position: "absolute" as const, width: lugW, height: lugH, background: caseColor };

  return (
    <div className="relative flex flex-col items-center" style={{ width: cs + 50 }}>
      <div style={{ marginBottom: -lugProtrude, position: "relative", zIndex: 0 }}>
        <Strap width={strapW} height={strapTopH} color={strapColor} material={strapMaterial} position="top" />
      </div>
      <div className="relative" style={{ width: cs, height: cs, zIndex: 1 }}>
        <div style={{ ...lugBase, left: lugInsetX, top: -lugProtrude, borderRadius: "4px 4px 2px 2px", boxShadow: "inset 2px 0 3px rgba(255,255,255,0.18), inset -1px 0 2px rgba(0,0,0,0.45), 0 -4px 10px rgba(0,0,0,0.28)", zIndex: 0 }} />
        <div style={{ ...lugBase, left: cs - lugInsetX - lugW, top: -lugProtrude, borderRadius: "4px 4px 2px 2px", boxShadow: "inset -2px 0 3px rgba(255,255,255,0.18), inset 1px 0 2px rgba(0,0,0,0.45), 0 -4px 10px rgba(0,0,0,0.28)", zIndex: 0 }} />
        <div style={{ ...lugBase, left: lugInsetX, bottom: -lugProtrude, borderRadius: "2px 2px 4px 4px", boxShadow: "inset 2px 0 3px rgba(255,255,255,0.18), inset -1px 0 2px rgba(0,0,0,0.45), 0 6px 12px rgba(0,0,0,0.32)", zIndex: 0 }} />
        <div style={{ ...lugBase, left: cs - lugInsetX - lugW, bottom: -lugProtrude, borderRadius: "2px 2px 4px 4px", boxShadow: "inset -2px 0 3px rgba(255,255,255,0.18), inset 1px 0 2px rgba(0,0,0,0.45), 0 6px 12px rgba(0,0,0,0.32)", zIndex: 0 }} />
        <div
          className="relative flex items-center justify-center"
          style={{
            width: cs, height: cs, borderRadius: "50%", background: caseColor, padding: dialPad, zIndex: 1,
            boxShadow: "0 28px 50px rgba(0,0,0,0.45), 0 8px 16px rgba(0,0,0,0.30), inset 2px 3px 4px rgba(255,255,255,0.30), inset -3px -5px 8px rgba(0,0,0,0.55), inset 0 0 0 1.5px rgba(0,0,0,0.30)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit", background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)" }} />
          <div className="absolute" style={{ right: -Math.round(cs * 0.035), top: "47%", width: Math.round(cs * 0.045), height: Math.round(cs * 0.085), background: `repeating-linear-gradient(180deg, rgba(0,0,0,0.35) 0 1px, transparent 1px 3px), ${caseColor}`, borderRadius: 3, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.5), 1px 2px 3px rgba(0,0,0,0.5)" }} />
          <div className="relative size-full rounded-full overflow-hidden flex items-center justify-center" style={{ background: dialImage ? "#000" : dialColor, boxShadow: "inset 0 6px 14px rgba(0,0,0,0.75), inset 0 -3px 8px rgba(255,255,255,0.06), inset 0 0 0 2px rgba(0,0,0,0.4)" }}>
            {dialImage && <img src={dialImage} alt="dial" className="absolute inset-0 size-full object-cover" />}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 18%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 35%), linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 40%)" }} />
            {!dialImage && markerType !== "empty" && (
              <svg className="absolute inset-0 size-full" viewBox="0 0 100 100">
                <defs><filter id={msId} x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0.3" dy="0.6" stdDeviation="0.4" floodColor="#000" floodOpacity="0.6" /></filter></defs>
                <g filter={`url(#${msId})`}>
                  {markerPositions.map((p) => {
                    if (markerType === "dots") return <circle key={p.idx} cx={p.x} cy={p.y} r={2} fill={markerColor} />;
                    let label = "";
                    if (markerType === "arabic") label = String(p.idx === 0 ? 12 : p.idx);
                    else if (markerType === "roman") label = romanNumerals[p.idx];
                    if (!label) return null;
                    return <text key={p.idx} x={p.x} y={p.y} fill={markerColor} fontSize={6} fontWeight={700} textAnchor="middle" dominantBaseline="central">{label}</text>;
                  })}
                </g>
              </svg>
            )}
            <svg className="absolute inset-0 size-full" viewBox="0 0 100 100">
              <defs>
                <filter id={hsId} x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0.5" dy="1" stdDeviation="0.7" floodColor="#000" floodOpacity="0.65" /></filter>
                <filter id={ssId} x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0.4" dy="0.8" stdDeviation="0.5" floodColor="#000" floodOpacity="0.55" /></filter>
              </defs>
              <g transform={`rotate(${hourAngle}, 50, 50)`} filter={`url(#${hsId})`}><rect x="48" y="26" width="4" height="28" rx="2" fill={handsColor} /></g>
              <g transform={`rotate(${minuteAngle}, 50, 50)`} filter={`url(#${hsId})`}><rect x="48.25" y="12" width="3.5" height="42" rx="1.75" fill={handsColor} /></g>
              <circle cx="50" cy="50" r="4.5" fill={handsColor} />
              <circle cx="50" cy="50" r="2" fill="#000" opacity="0.45" />
              <g transform={`rotate(${secAngle}, 50, 50)`} filter={`url(#${ssId})`}>
                <line x1="50" y1="64" x2="50" y2="13.5" stroke={secondsColor} strokeWidth="0.9" strokeLinecap="round" />
                <circle cx="50" cy="50" r="2.2" fill={secondsColor} />
                <circle cx="50" cy="50" r="1" fill="#000" opacity="0.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ marginTop: -lugProtrude, position: "relative", zIndex: 0 }}>
        <Strap width={strapW} height={strapBotH} color={strapColor} material={strapMaterial} position="bottom" />
      </div>
    </div>
  );
}

// ── ORDER REVIEW MODAL ─────────────────────────────────────────────────────

type SummaryLine = { label: string; value: string; dot?: string; price?: string };

function OrderReviewModal({
  open, onClose, onConfirm, lines, caseSize,
  basePrice, sizePrice, materialPrice, caseColorPrice, dialImagePrice, extraStrapTotal, totalPrice,
}: {
  open: boolean; onClose: () => void; onConfirm: () => void; lines: SummaryLine[]; caseSize: string;
  basePrice: number; sizePrice: number; materialPrice: number; caseColorPrice: number;
  dialImagePrice: number; extraStrapTotal: number; totalPrice: number;
}) {
  if (!open) return null;
  const breakdown = [
    { label: "Base watch",        amount: basePrice },
    ...(sizePrice      > 0 ? [{ label: `Case size (${caseSize}mm)`, amount: sizePrice }] : []),
    ...(materialPrice  > 0 ? [{ label: "Strap material",    amount: materialPrice }]  : []),
    ...(caseColorPrice > 0 ? [{ label: "Case color",        amount: caseColorPrice }] : []),
    ...(dialImagePrice > 0 ? [{ label: "Custom dial image", amount: dialImagePrice }] : []),
    ...(extraStrapTotal > 0 ? [{ label: "Extra straps",     amount: extraStrapTotal }]: []),
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(5px)" }} onClick={onClose}>
      <div className="bg-white w-full sm:max-w-lg rounded-t-[32px] sm:rounded-[32px] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sm:hidden flex justify-center pt-3 pb-1"><div className="w-9 h-1 rounded-full bg-[#ddd]" /></div>
        <div className="px-7 pt-5 pb-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[#141414] tracking-[-0.8px]" style={{ fontSize: 22, fontWeight: 800 }}>Review Your Order</h2>
            <button type="button" onClick={onClose} className="size-9 flex items-center justify-center rounded-full hover:bg-black/5 transition text-[#9e9e9e]"><X className="size-4" /></button>
          </div>
          <div className="border border-[rgba(222,217,209,0.9)] rounded-2xl overflow-hidden">
            {lines.map((line, i) => (
              <div key={line.label} className={`flex items-center justify-between px-4 py-3 ${i < lines.length - 1 ? "border-b border-[#f0ece4]" : ""}`}>
                <span className="text-[#737373]" style={{ fontSize: 13, fontWeight: 600 }}>{line.label}</span>
                <div className="flex items-center gap-1.5">
                  {line.dot && <span className="size-3 rounded-full ring-1 ring-black/10 flex-shrink-0" style={{ background: line.dot }} />}
                  <span className="text-[#181612]" style={{ fontSize: 13, fontWeight: 700 }}>{line.value}</span>
                  {line.price && <span className="text-[#9e9e9e]" style={{ fontSize: 11 }}>({line.price})</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#f8f6f2] rounded-2xl px-5 py-4 flex flex-col gap-2">
            <p className="text-[#9e9e9e] uppercase tracking-widest mb-1" style={{ fontSize: 10, fontWeight: 700 }}>Price Breakdown</p>
            {breakdown.map((b) => (
              <div key={b.label} className="flex justify-between">
                <span className="text-[#737373]" style={{ fontSize: 13 }}>{b.label}</span>
                <span className="text-[#737373]" style={{ fontSize: 13 }}>${b.amount}</span>
              </div>
            ))}
            <div className="flex justify-between pt-3 mt-1 border-t border-[#ede9e2]">
              <span className="text-[#141414]" style={{ fontSize: 16, fontWeight: 800 }}>Total</span>
              <span className="text-[#141414]" style={{ fontSize: 16, fontWeight: 800 }}>${totalPrice} USD</span>
            </div>
          </div>
          <p className="text-center text-[#9e9e9e]" style={{ fontSize: 12 }}>
            Estimated delivery: <strong className="text-[#141414]">4–6 weeks</strong>. Payment collected on confirmation.
          </p>
          <button type="button" onClick={onConfirm} className="w-full h-12 rounded-full bg-[#111] text-white hover:bg-[#333] active:scale-[0.98] transition-all" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.04em" }}>
            Confirm &amp; Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

// ── SUCCESS MODAL ──────────────────────────────────────────────────────────

function SuccessModal({ open, onClose, totalPrice }: { open: boolean; onClose: () => void; totalPrice: number }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div className="bg-white rounded-[32px] w-full max-w-sm p-8 shadow-[0_32px_80px_rgba(0,0,0,0.35)] flex flex-col items-center gap-5 text-center" onClick={(e) => e.stopPropagation()}>
        <div className="size-16 rounded-full bg-[#111] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div>
          <h2 className="text-[#141414] tracking-[-1px]" style={{ fontSize: 26, fontWeight: 800 }}>Order Placed!</h2>
          <p className="text-[#737373] mt-1" style={{ fontSize: 14 }}>Your CRAFTWATCH is being crafted.</p>
        </div>
        <div className="bg-[#f8f6f2] rounded-2xl px-6 py-4 w-full">
          <p className="text-[#9e9e9e] uppercase tracking-widest mb-1" style={{ fontSize: 10, fontWeight: 700 }}>Total Charged</p>
          <p className="text-[#141414] tracking-tighter" style={{ fontSize: 32, fontWeight: 800 }}>${totalPrice} USD</p>
        </div>
        <p className="text-[#9e9e9e]" style={{ fontSize: 12 }}>
          Confirmation email on its way.<br />Estimated delivery: <strong className="text-[#141414]">4–6 weeks</strong>.
        </p>
        <button type="button" onClick={onClose} className="w-full h-11 rounded-full bg-[#111] text-white hover:bg-[#333] transition-colors" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>
          Continue Customizing
        </button>
      </div>
    </div>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────

export default function App() {
  const [caseSize,      setCaseSize]      = useState("64");
  const [caseColor,     setCaseColor]     = useState("black");
  const [dialTab,       setDialTab]       = useState<"color" | "upload">("color");
  const [dialColor,     setDialColor]     = useState("cream");
  const [dialImage,     setDialImage]     = useState<string | null>(null);
  const [dialImageName, setDialImageName] = useState<string>("");
  const [markerType,    setMarkerType]    = useState("dots");
  const [markerColor,   setMarkerColor]   = useState("black");
  const [handsColor,    setHandsColor]    = useState("silver");
  const [secondsColor,  setSecondsColor]  = useState("red");
  const [primaryStrap,  setPrimaryStrap]  = useState("rubber-black");
  const [extraStraps,   setExtraStraps]   = useState<string[]>([]);
  const [showReview,    setShowReview]    = useState(false);
  const [showSuccess,   setShowSuccess]   = useState(false);
  const [showZoom,      setShowZoom]      = useState(false);
  const [strapTab,      setStrapTab]      = useState("rubber");

  const fileRef            = useRef<HTMLInputElement>(null);
  const dialImageRef       = useRef<string | null>(null);
  useEffect(() => { return () => { if (dialImageRef.current) URL.revokeObjectURL(dialImageRef.current); }; }, []);

  const watchRefs1       = useRef<Map<string, HTMLDivElement>>(new Map());
  const watchRefs2       = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevSizeRef      = useRef(caseSize);
  const sizeAnimMount    = useRef(true);
  useLayoutEffect(() => {
    if (sizeAnimMount.current) { sizeAnimMount.current = false; return; }
    const prevSize = prevSizeRef.current;
    prevSizeRef.current = caseSize;
    if (prevSize === caseSize) return;
    const flip = (map: React.MutableRefObject<Map<string, HTMLDivElement>>, origin: string) => {
      const prevEl = map.current.get(prevSize);
      const currEl = map.current.get(caseSize);
      if (!prevEl || !currEl) return;
      const prevW = prevEl.getBoundingClientRect().width;
      const currW = currEl.getBoundingClientRect().width;
      if (!prevW || !currW) return;
      const s = prevW / currW;
      currEl.style.transformOrigin = origin;
      currEl.style.transition = "none";
      currEl.style.transform = `scale(${s})`;
      void currEl.offsetHeight;
      currEl.style.transition = "transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      currEl.style.transform = "scale(1)";
    };
    flip(watchRefs1, "50% 0%");
    flip(watchRefs2, "50% 0%");
  }, [caseSize]);

  const imageUploaded = !!dialImage;

  const isDefault =
    caseSize === "64" &&
    caseColor === "black" &&
    dialColor === "cream" &&
    dialImage === null &&
    markerType === "dots" &&
    markerColor === "black" &&
    handsColor === "silver" &&
    secondsColor === "red" &&
    primaryStrap === "rubber-black" &&
    extraStraps.length === 0;

  const handleFile = (file: File | null) => {
    if (!file) return;
    if (dialImageRef.current) URL.revokeObjectURL(dialImageRef.current);
    const url = URL.createObjectURL(file);
    dialImageRef.current = url;
    setDialImage(url);
    setDialImageName(file.name);
    setMarkerType("empty");
  };

  const clearImage = () => {
    if (dialImageRef.current) { URL.revokeObjectURL(dialImageRef.current); dialImageRef.current = null; }
    setDialImage(null);
    setDialImageName("");
  };

  const handleReset = () => {
    if (dialImageRef.current) { URL.revokeObjectURL(dialImageRef.current); dialImageRef.current = null; }
    setCaseSize("64"); setCaseColor("black"); setDialTab("color"); setDialColor("cream");
    setDialImage(null); setDialImageName(""); setMarkerType("dots"); setMarkerColor("black");
    setHandsColor("silver"); setSecondsColor("red"); setPrimaryStrap("rubber-black"); setExtraStraps([]); setStrapTab("rubber");
  };

  const handleDialColorChange = (newColor: string) => {
    setDialColor(newColor);
    const newBlocked = getSimilarColors(newColor);
    if (newBlocked.includes(markerColor)) {
      const fallback = METAL_COLORS.find((c) => !newBlocked.includes(c.id));
      if (fallback) setMarkerColor(fallback.id);
    }
    if (newBlocked.includes(handsColor)) {
      const fallback = METAL_COLORS.find((c) => !newBlocked.includes(c.id));
      if (fallback) setHandsColor(fallback.id);
    }
  };

  const handleConfirmOrder = () => {
    setShowReview(false);
    confetti({ particleCount: 130, spread: 80, origin: { y: 0.6 }, colors: ["#111", "#c8ccd1", "#d4af6a", "#a8302b", "#1a9e84"] });
    setShowSuccess(true);
  };

  const addExtraStrap        = (id: string) => setExtraStraps((p) => [...p, id]);
  const removeOneExtraStrap  = (id: string) =>
    setExtraStraps((p) => { const i = p.lastIndexOf(id); return i === -1 ? p : [...p.slice(0, i), ...p.slice(i + 1)]; });
  const removeAllExtraStrap  = (id: string) => setExtraStraps((p) => p.filter((x) => x !== id));
  const extraStrapUnitPrice  = (id: string) => { const m = id.split("-")[0]; return m === "leather" ? 25 : m === "nylon" ? 15 : 10; };

  // Derived hex
  const dialColorHex    = DIAL_COLORS.find((d) => d.id === dialColor)?.color ?? "#fff";
  const caseColorHex    = CASE_COLORS.find((c) => c.id === caseColor)?.color ?? "#1a1815";
  const markerColorHex  = METAL_COLORS.find((c) => c.id === markerColor)?.color ?? "#000";
  const handsColorHex   = METAL_COLORS.find((c) => c.id === handsColor)?.color ?? "#000";
  const secondsColorHex = SECONDS_COLORS.find((c) => c.id === secondsColor)?.color ?? "#d93025";
  const strapColorHex   = ALL_STRAPS.find((c) => c.id === primaryStrap)?.color ?? "#1a1815";
  const strapMaterial   = primaryStrap.split("-")[0];

  const getSimilarColors = (id: string): string[] =>
    ({ black: ["black","navy","slate"], white: ["white","cream","silver"], cream: ["cream","white"], navy: ["navy","black","slate"], slate: ["slate","black","navy"] }[id] || [id]);
  const disabledMetalColors = dialImage ? [] : getSimilarColors(dialColor);

  // Pricing
  const basePrice       = 120;
  const sizePrice       = caseSize === "64" ? 30 : caseSize === "49" ? 15 : 0;
  const materialPrice   = strapMaterial === "leather" ? 25 : strapMaterial === "nylon" ? 15 : 0;
  const caseColorPrice  = ["red","silver","blush"].includes(caseColor) ? 15 : 0;
  const dialImagePrice  = dialImage ? 25 : 0;
  const extraStrapTotal = extraStraps.reduce((s, id) => s + extraStrapUnitPrice(id), 0);
  const totalPrice      = basePrice + sizePrice + materialPrice + caseColorPrice + dialImagePrice + extraStrapTotal;

  const strapInfo = ALL_STRAPS.find((s) => s.id === primaryStrap);

  // Summary lines for review modal
  const summaryLines: SummaryLine[] = [
    { label: "Case Size",     value: `${caseSize}mm` },
    { label: "Case Color",    value: CASE_COLORS.find((c) => c.id === caseColor)?.label ?? caseColor, dot: caseColorHex },
    { label: "Dial",          value: dialImage ? `Custom image` : (DIAL_COLORS.find((d) => d.id === dialColor)?.label ?? dialColor), dot: dialImage ? undefined : dialColorHex },
    { label: "Hour Markers",  value: dialImage ? "None" : (HOUR_MARKER_TYPES.find((m) => m.id === markerType)?.label ?? markerType) },
    { label: "Hands",         value: METAL_COLORS.find((c) => c.id === handsColor)?.label ?? handsColor, dot: handsColorHex },
    { label: "Seconds",       value: SECONDS_COLORS.find((c) => c.id === secondsColor)?.label ?? secondsColor, dot: secondsColorHex },
    { label: "Main Strap",    value: `${strapMaterial.charAt(0).toUpperCase() + strapMaterial.slice(1)} · ${strapInfo?.label ?? ""}`, dot: strapColorHex },
    ...(extraStraps.length > 0 ? [{ label: "Extra Straps", value: `${extraStraps.length} added`, price: `+$${extraStrapTotal}` }] : []),
  ];

  // ── Info panel content ────────────────────────────────────────────────────

  const caseSizeInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <div><strong className="text-[#181612]">40mm</strong><span className="text-[#737373]"> — Compact and lightweight. Best for wrists under 17 cm.</span></div>
      <div><strong className="text-[#181612]">49mm (+$15)</strong><span className="text-[#737373]"> — Bold statement sizing. Best for larger wrists.</span></div>
      <div><strong className="text-[#181612]">64mm (+$30)</strong><span className="text-[#737373]"> — Oversized statement. Maximum wrist presence.</span></div>
      <p className="text-[#9e9e9e] mt-1" style={{ fontSize: 12 }}>All sizes are measured lug-to-lug. Case material: anodized stainless steel.</p>
    </div>
  );

  const caseColorInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <p className="text-[#737373]">Choose your case finish. Standard colors are included; premium finishes add +$15.</p>
      <div className="flex flex-col gap-1.5 mt-0.5">
        <div><span className="font-semibold text-[#181612]">Included —</span><span className="text-[#737373]"> Black, White, Cream, Navy, Olive</span></div>
        <div><span className="font-semibold text-[#181612]">+$15 —</span><span className="text-[#737373]"> Red, Silver, Blush</span></div>
      </div>
      <p className="text-[#9e9e9e]" style={{ fontSize: 12 }}>All cases are anodized stainless steel.</p>
    </div>
  );

  const dialFaceInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <div><strong className="text-[#181612]">Color</strong><span className="text-[#737373]"> — Pick from 5 refined dial colors. Each pairs differently with markers and hands.</span></div>
      <div><strong className="text-[#181612]">Upload Image (+$25)</strong><span className="text-[#737373]"> — Add custom artwork or photography. Printed on mineral glass insert. Hour markers auto-set to Empty.</span></div>
      <p className="text-[#9e9e9e] mt-0.5" style={{ fontSize: 12 }}>Only one option can be active at a time.</p>
    </div>
  );

  const hourMarkerTypeInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <div><strong className="text-[#181612]">Arabic</strong><span className="text-[#737373]"> — Classic 1–12 numerals. Easy to read.</span></div>
      <div><strong className="text-[#181612]">I–XII</strong><span className="text-[#737373]"> — Minimalist uppercase lettering.</span></div>
      <div><strong className="text-[#181612]">Roman</strong><span className="text-[#737373]"> — Traditional Roman numerals.</span></div>
      <div><strong className="text-[#181612]">Dots</strong><span className="text-[#737373]"> — Clean spherical markers.</span></div>
      <div><strong className="text-[#181612]">Empty</strong><span className="text-[#737373]"> — Bare dial. Auto-selected when using a custom image.</span></div>
    </div>
  );

  const hourMarkerColorInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <p className="text-[#737373]">Choose the metal finish for your hour markers.</p>
      <p className="text-[#737373]">Options marked with <span className="inline-flex items-center justify-center rounded" style={{ color: "rgba(185,40,40,0.85)", fontWeight: 700 }}>✕</span> are blocked — too similar to your dial color, which would make them unreadable.</p>
      <p className="text-[#9e9e9e]" style={{ fontSize: 12 }}>Gold and Silver work well with most dial colors.</p>
    </div>
  );

  const handsColorInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <p className="text-[#737373]">Hands are machined from surgical-grade stainless steel and coated in your chosen finish.</p>
      <div className="flex flex-col gap-1.5">
        <div><strong className="text-[#181612]">Black / White</strong><span className="text-[#737373]"> — Matte finish</span></div>
        <div><strong className="text-[#181612]">Silver / Gold</strong><span className="text-[#737373]"> — Polished finish</span></div>
      </div>
      <p className="text-[#9e9e9e]" style={{ fontSize: 12 }}>Colors too similar to the dial are blocked to maintain contrast.</p>
    </div>
  );

  const secondsColorInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <p className="text-[#737373]">The seconds hand is your accent — it contrasts with the main hands and gives the watch its personality.</p>
      <p className="text-[#737373]">Any color works with any dial and hand combination.</p>
    </div>
  );

  const strapInfoPanel = (
    <div className="flex flex-col gap-2.5" style={{ fontSize: 13 }}>
      <div><strong className="text-[#181612]">Rubber (Included)</strong><span className="text-[#737373]"> — Sweat-resistant, easy to clean. Great for everyday and active wear.</span></div>
      <div><strong className="text-[#181612]">Leather (+$25)</strong><span className="text-[#737373]"> — Full-grain leather. Develops a patina over time. Avoid prolonged water exposure.</span></div>
      <div><strong className="text-[#181612]">Nylon (+$15)</strong><span className="text-[#737373]"> — NATO-style G10 weave. Lightweight and breathable for daily wear.</span></div>
      <p className="text-[#9e9e9e] mt-0.5" style={{ fontSize: 12 }}>Click a color circle to set your main strap. Use <strong className="text-[#444]">Add extra</strong> to order additional straps at the listed price per material.</p>
    </div>
  );

  return (
    <>
      <Navbar />

      {/* MOBILE: sticky header + watch preview */}
      <div className="lg:hidden sticky top-0 z-20" style={{ background: "#f2eee8" }}>
        {/* Frosted header bar */}
        <div style={{ background: "rgba(247,243,237,0.82)", backdropFilter: "blur(9px)", borderBottom: "1px solid rgba(226,221,212,0.7)", padding: "14px 16px 10px 16px" }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="uppercase text-[#74706a] tracking-[1.4px]" style={{ fontSize: 11, fontWeight: 700 }}>Analog Watch</div>
              <div className="text-[#111111] leading-[24px]" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-1.2px" }}>Customizer</div>
            </div>
            <div className="flex items-center gap-2">
              {!isDefault && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="size-9 rounded-full border border-[#ddd5c8] text-[#b8ad9e] hover:text-[#141414] hover:border-[#555] hover:rotate-[-200deg] transition-all duration-500 flex items-center justify-center"
                  aria-label="Reset all"
                >
                  <RotateCcw className="size-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowZoom(true)}
                className="size-9 rounded-full border border-[#ddd5c8] text-[#b8ad9e] hover:text-[#141414] hover:border-[#555] transition-all flex items-center justify-center"
                aria-label="Zoom watch"
              >
                <Maximize2 className="size-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Watch preview section */}
        <div style={{ position: "relative", height: 300, overflow: "hidden", borderRadius: "0 0 32px 32px", borderLeft: "2px solid rgba(255,255,255,0.88)", borderRight: "2px solid rgba(255,255,255,0.88)", borderBottom: "2px solid rgba(255,255,255,0.88)", boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}>
          {/* Watch cluster — centered horizontally, top strap cropped by overflow:hidden */}
          <div style={{ position: "absolute", left: "50%", top: -80, transform: "translateX(-50%)" }}>
            {CASE_SIZES.map((size) => (
              <div
                key={size.id}
                ref={(el) => { if (el) watchRefs2.current.set(size.id, el); else watchRefs2.current.delete(size.id); }}
                style={caseSize !== size.id ? { position: "absolute", visibility: "hidden", pointerEvents: "none" } : {}}
              >
                <WatchPreview
                  caseColor={caseColorHex} caseSize={size.id} dialColor={dialColorHex}
                  dialImage={dialImage} handsColor={handsColorHex} secondsColor={secondsColorHex}
                  markerColor={markerColorHex} markerType={markerType} strapColor={strapColorHex}
                  strapMaterial={strapMaterial} scale={0.75}
                />
              </div>
            ))}
          </div>
          {/* Price — bottom left */}
          <div style={{ position: "absolute", left: 18, bottom: 52 }}>
            <div className="uppercase text-[#737373] tracking-[1.4px]" style={{ fontSize: 10, fontWeight: 700 }}>Price</div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-[#000000]" style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>${totalPrice}</span>
              <span className="text-[#737373]" style={{ fontSize: 10, fontWeight: 700 }}>USD</span>
            </div>
          </div>
          {/* BUY NOW button */}
          <button
            type="button"
            onClick={() => setShowReview(true)}
            className="flex items-center"
            style={{ position: "absolute", left: 18, bottom: 16, background: "#111111", color: "#ffffff", borderRadius: 999, height: 30, padding: "0 18px", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", border: "none", cursor: "pointer" }}
          >
            BUY NOW
          </button>
          {/* GMT+7 — bottom right, fixed regardless of watch size */}
          <TimeDisplay style={{ position: "absolute", right: 16, bottom: 16 }} />
        </div>
      </div>

      {/* Fixed price badge — desktop only, independent of watch wrapper */}
      <div className="hidden lg:block fixed z-30 px-4 pb-24 pt-2.5 pl-60" style={{ bottom: 40, left: 32 }}>
        <p className="text-[#9e9e9e] uppercase tracking-widest" style={{ fontSize: 9, fontWeight: 700 }}>Price</p>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-[#141414] tracking-tighter" style={{ fontSize: 28, fontWeight: 800 }}>${totalPrice}</span>
          <span className="text-[#737373]" style={{ fontSize: 11, fontWeight: 600 }}>USD</span>
        </div>
      </div>

      {/* ── Page layout: left sticky, right flows with page scroll ── */}
      <div className="w-full" style={{ background: "#F2EEE8" }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 flex flex-col lg:flex-row gap-0 lg:gap-8">

          {/* ── LEFT: sticky watch panel ── */}
          <div
            className="hidden lg:flex lg:w-[46%] flex-shrink-0 flex-col items-center gap-8 py-10 pt-16"
            style={{ position: "sticky", top: 64, height: "calc(100vh - 64px)", alignSelf: "flex-start" }}
          >
            {/* Heading + Reset button */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                {/* Counterbalance spacer so h1 stays optically centered with the <p> below */}
                <div className="size-8 flex-shrink-0" aria-hidden="true" />
                <h1 className="text-[#141414] tracking-[-1.5px]" style={{ fontSize: 28, fontWeight: 800 }}>Build Your Watch</h1>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={handleReset}
                      aria-hidden={isDefault}
                      tabIndex={isDefault ? -1 : 0}
                      className={`size-8 rounded-full border border-[#ddd5c8] text-[#b8ad9e] hover:text-[#141414] hover:border-[#555] hover:rotate-[-200deg] transition-all duration-500 flex items-center justify-center flex-shrink-0 ${isDefault ? "opacity-0 pointer-events-none" : ""}`}
                      aria-label="Reset all"
                    >
                      <RotateCcw className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Reset all</TooltipContent>
                </Tooltip>
              </div>
              <p className="text-[#9e9e9e] mt-0.5" style={{ fontSize: 13 }}>Configure every detail, preview in real time.</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div
                className="relative flex justify-center items-start overflow-visible"
                style={{ height: 580 }}
              >
                {CASE_SIZES.map((size) => (
                  <div
                    key={size.id}
                    ref={(el) => { if (el) watchRefs1.current.set(size.id, el); else watchRefs1.current.delete(size.id); }}
                    style={caseSize !== size.id ? { position: "absolute", visibility: "hidden", pointerEvents: "none" } : {}}
                  >
                    <WatchPreview
                      caseColor={caseColorHex}
                      caseSize={size.id}
                      dialColor={dialColorHex}
                      dialImage={dialImage}
                      handsColor={handsColorHex}
                      secondsColor={secondsColorHex}
                      markerColor={markerColorHex}
                      markerType={markerType}
                      strapColor={strapColorHex}
                      strapMaterial={strapMaterial}
                      scale={0.80}
                    />
                  </div>
                ))}
              </div>
              <TimeDisplay className="flex-shrink-0" />
            </div>
          </div>

          {/* ── RIGHT: natural page flow ── */}
          <div className="lg:w-[54%] flex-shrink-0 lg:pr-1">
            <div className="flex flex-col gap-3 pt-4 pb-4 lg:pt-20">

              <Section title="Case Size" info={caseSizeInfoPanel}>
                {/* Mobile: large card grid */}
                <div className="lg:hidden grid grid-cols-3 gap-3">
                  {CASE_SIZES.map((size) => {
                    const active = caseSize === size.id;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setCaseSize(size.id)}
                        className={`relative aspect-[3/4] rounded-[28px] border transition-all flex items-center justify-center ${
                          active
                            ? "bg-[#111] text-white border-[#111] shadow-[0px_8px_12px_rgba(0,0,0,0.14)]"
                            : "bg-white text-[#141414] border-[#ded9d1] hover:border-[#111]"
                        }`}
                      >
                        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px" }}>{size.label}</span>
                        {size.price && size.price !== "Included" && (
                          <span
                            className={`absolute bottom-3 ${active ? "text-white/60" : "text-[#9e9e9e]"}`}
                            style={{ fontSize: 10, fontWeight: 600 }}
                          >
                            {size.price}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* Desktop: original pill row */}
                <div className="hidden lg:block">
                  <PillRow options={CASE_SIZES} value={caseSize} onChange={setCaseSize} />
                </div>
              </Section>

              <Section title="Case Color" info={caseColorInfoPanel}>
                <SwatchRow options={CASE_COLORS} value={caseColor} onSelect={setCaseColor} />
              </Section>

              <Section title="Dial Face" info={dialFaceInfoPanel}>
                <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-full p-1 flex w-full mb-4">
                  {(["color", "upload"] as const).map((t) => (
                    <button key={t} type="button" onClick={() => setDialTab(t)}
                      className={`flex-1 h-8 rounded-full transition ${dialTab === t ? "bg-white shadow-[0px_1px_3px_rgba(10,13,18,0.1)] text-[#414651]" : "text-[#717680]"}`}
                      style={{ fontSize: 13, fontWeight: 600 }}>
                      {t === "color" ? "Color" : (
                        <span className="flex items-center justify-center gap-1.5">
                          Upload image
                          <span className="bg-[#111] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full tracking-wide">+$25</span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                {dialTab === "color" ? (
                  <SwatchRow options={DIAL_COLORS} value={dialColor} onSelect={handleDialColorChange} />
                ) : (
                  <div className="flex flex-col gap-3">
                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0] ?? null)} />
                    {dialImage ? (
                      <div className="bg-white/75 border border-dashed border-[#bfb8ad] rounded-[10px] px-4 py-3 flex items-center gap-3">
                        <img src={dialImage} alt="uploaded dial" className="size-[72px] object-cover shadow-[2px_2px_4px_rgba(0,0,0,0.25)]" />
                        <div className="flex-1 text-center text-black tracking-[-0.04em] truncate" style={{ fontSize: 16 }}>{dialImageName || "uploaded.png"}</div>
                        <button type="button" onClick={clearImage} className="size-9 flex items-center justify-center text-[#33363F] hover:bg-black/5 rounded-full" aria-label="Remove image"><X className="size-4" strokeWidth={2.5} /></button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => fileRef.current?.click()} className="bg-white/75 border border-dashed border-[#bfb8ad] rounded-[10px] px-5 py-5 flex items-center justify-center gap-3 text-black hover:bg-white" style={{ fontSize: 18 }}>
                        <Upload className="size-5" /> Choose File
                      </button>
                    )}
                    <p className="text-[#9e9e9e]" style={{ fontSize: 13 }}>When an image is uploaded, hour markers become Empty.</p>
                  </div>
                )}
              </Section>

              <Section title="Hour Marker Type" info={hourMarkerTypeInfoPanel}>
                <div className={imageUploaded ? "opacity-60 pointer-events-none" : ""}>
                  <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-start gap-3">
                    {[
                      { id: "arabic", preview: <span className={`text-[34px] tracking-[-1.4px] leading-none ${markerType === "arabic" ? "text-white/80" : "text-black/80"}`}>1-12</span> },
                      { id: "roman",  preview: <span className={`text-[28px] tracking-[-0.8px] leading-none ${markerType === "roman"  ? "text-white/80" : "text-black/80"}`}>XII</span> },
                      { id: "dots",   preview: (
                        <svg width="30" height="30" viewBox="62.5 54 36 36" fill="none">
                          <path d={svgPaths.p24df2f00} fill={markerType === "dots" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)"} />
                        </svg>
                      )},
                      { id: "empty",  preview: null },
                    ].map(({ id, preview }) => {
                      const label = HOUR_MARKER_TYPES.find((m) => m.id === id)?.label ?? id;
                      const active = markerType === id;
                      return (
                        <button key={id} type="button" onClick={() => setMarkerType(id)} className="flex flex-col gap-1.5 items-center w-full lg:w-auto">
                          <div className={`flex items-center justify-center w-full lg:w-[90px] aspect-[9/10] lg:aspect-auto lg:h-[100px] rounded-[24px] transition ${active ? "bg-[#111] shadow-[0px_10px_12px_rgba(0,0,0,0.14)]" : "bg-white border border-[#ded9d1] hover:border-[#111]"}`}>
                            {preview}
                          </div>
                          <span className="text-[#272727]" style={{ fontSize: 14 }}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                {imageUploaded && <p className="mt-3 text-[#9e9e9e]" style={{ fontSize: 13 }}>Locked to <strong>Empty</strong> while a dial image is active.</p>}
              </Section>

              <Section title="Hour Marker Colors" info={hourMarkerColorInfoPanel}>
                <div className={imageUploaded ? "opacity-60 pointer-events-none" : ""}>
                  <SwatchRow
                    options={METAL_COLORS} value={markerColor} onSelect={setMarkerColor}
                    disabledIds={disabledMetalColors}
                    blockedReason={`Blends with ${DIAL_COLORS.find((d) => d.id === dialColor)?.label} dial — pick a contrasting color`}
                  />
                </div>
                                  {disabledMetalColors.length > 0 && !imageUploaded && (
                    <div className="py-2.5" style={{ fontSize: 13 }}>
                      <span className="text-[#a49a87]">With a </span>
                      <strong className="text-[#a49a87]">{DIAL_COLORS.find((d) => d.id === dialColor)?.label}</strong>
                      <span className="text-[#a49a87]"> dial, similar-toned colors are blocked — they won't contrast against the dial.</span>
                    </div>
                  )}
                {imageUploaded && <p className="mt-2 text-[#9e9e9e]" style={{ fontSize: 13 }}>Not shown with a custom dial image.</p>}
              </Section>

              <Section title="Hands Color" info={handsColorInfoPanel}>
                <SwatchRow
                  options={METAL_COLORS} value={handsColor} onSelect={setHandsColor}
                  disabledIds={disabledMetalColors}
                  blockedReason={`Blends with ${DIAL_COLORS.find((d) => d.id === dialColor)?.label} dial — pick a contrasting color`}
                  />
                  {disabledMetalColors.length > 0 && !imageUploaded && (
                    <div className="py-2.5" style={{ fontSize: 13 }}>
                      <span className="text-[#a49a87]">With a </span>
                      <strong className="text-[#a49a87]">{DIAL_COLORS.find((d) => d.id === dialColor)?.label}</strong>
                      <span className="text-[#a49a87]"> dial, similar-toned colors are blocked — they won't contrast against the dial.</span>
                    </div>
                  )}
              </Section>

              <Section title="Seconds Hand Color" info={secondsColorInfoPanel}>
                <SwatchRow options={SECONDS_COLORS} value={secondsColor} onSelect={setSecondsColor} />
              </Section>

              <Section title="Strap" info={strapInfoPanel}>
                {/* Material tabs */}
                <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-full p-1 flex w-full mb-4">
                  {STRAP_GROUPS.map((group) => (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setStrapTab(group.id)}
                      className={`flex-1 h-8 rounded-full transition flex items-center justify-center gap-1.5 ${
                        strapTab === group.id
                          ? "bg-white shadow-[0px_1px_3px_rgba(10,13,18,0.1)] text-[#414651]"
                          : "text-[#717680]"
                      }`}
                      style={{ fontSize: 13, fontWeight: 600 }}
                    >
                      <span>{group.label}</span>
                      {group.price !== "Included" && (
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full tracking-wide ${
                          strapTab === group.id ? "bg-[#111] text-white" : "bg-[#e8e4de] text-[#737373]"
                        }`}>{group.price}</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Colors for active tab */}
                {(() => {
                  const group = STRAP_GROUPS.find((g) => g.id === strapTab)!;
                  return (
                    <div className="flex flex-col gap-2" style={{ minHeight: 292 }}>
                      {group.colors.map((o) => {
                        const isPrimary  = primaryStrap === o.id;
                        const extraCount = extraStraps.filter((x) => x === o.id).length;
                        const priceEach  = extraStrapUnitPrice(o.id);
                        return (
                          <div
                            key={o.id}
                            onClick={() => setPrimaryStrap(o.id)}
                            className={`group flex items-center gap-3 rounded-2xl px-4 py-2.5 border transition-all cursor-pointer ${
                              isPrimary ? "bg-[#111] border-[#111]" : "bg-white/60 hover:border-[#888]"
                            }`}
                          >
                            <div className="relative flex-shrink-0">
                              <div
                                className="rounded-full size-8 ring-1 ring-black/10"
                                style={{ background: o.color, boxShadow: "inset 0px -2px 4px rgba(0,0,0,0.08), inset 0px 2px 4px rgba(255,255,255,0.18)" }}
                              />

                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={isPrimary ? "text-white" : "text-[#181612]"} style={{ fontSize: 13, fontWeight: 600 }}>{o.label}</span>
                                {isPrimary && (
                                  <span className="text-white/60 uppercase tracking-widest" style={{ fontSize: 9, fontWeight: 700 }}>Main</span>
                                )}
                              </div>

                            </div>

                            {extraCount > 0 ? (
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); removeOneExtraStrap(o.id); }}
                                  aria-label="Remove one"
                                  className={`size-10 lg:size-6 rounded-full border flex items-center justify-center transition ${
                                    isPrimary ? "border-white/30 text-white/70 hover:bg-white/10" : "border-[#ded9d1] text-[#444] hover:bg-black/5"
                                  }`}
                                >
                                  <Minus className="size-4 lg:size-3" strokeWidth={2.5} />
                                </button>
                                <span className={`w-5 lg:w-4 text-center text-sm lg:text-xs font-bold ${isPrimary ? "text-white" : "text-[#181612]"}`}>{extraCount}</span>
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); addExtraStrap(o.id); }}
                                  aria-label="Add one"
                                  className={`size-10 lg:size-6 rounded-full border flex items-center justify-center transition ${
                                    isPrimary ? "border-white/30 text-white/70 hover:bg-white/10" : "border-[#ded9d1] text-[#444] hover:bg-black/5"
                                  }`}
                                >
                                  <Plus className="size-4 lg:size-3" strokeWidth={2.5} />
                                </button>

                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); addExtraStrap(o.id); }}
                                aria-label="Add extra"
                                className={`flex items-center justify-center flex-shrink-0 rounded-full transition-all
                                  size-10 lg:h-7 lg:w-auto lg:px-3 lg:gap-1
                                  lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100
                                  ${
                                    isPrimary
                                      ? "bg-white/20 text-white active:bg-white/30 lg:bg-transparent lg:text-white/80 lg:border lg:border-white/30 lg:hover:border-white lg:hover:bg-white/10"
                                      : "bg-[#1a1a1a] text-white active:bg-[#333] lg:bg-transparent lg:text-[#555] lg:border lg:border-[#ded9d1] lg:hover:bg-[#111] lg:hover:text-white lg:hover:border-[#111]"
                                  }`}
                              >
                                <Plus className="size-5 lg:size-3 flex-shrink-0" strokeWidth={2.5} />
                                <span className="hidden lg:inline text-[11px] font-bold tracking-wide">Add Extra</span>
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* Extra straps total — always rendered to keep card height static */}
                <div className={`mt-3 flex items-center justify-between px-1 transition-opacity duration-200 ${extraStraps.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <span className="text-[#8a8275]" style={{ fontSize: 12 }}>
                    {extraStraps.length} extra strap{extraStraps.length !== 1 ? "s" : ""} added
                  </span>
                  <span className="text-[#181612]" style={{ fontSize: 13, fontWeight: 700 }}>+${extraStrapTotal}</span>
                </div>
              </Section>

            </div>{/* end sections */}

            {/* Sticky Review & Order — desktop only; mobile uses BUY NOW in the preview area */}
            <div className="hidden lg:block sticky bottom-0 z-10">
              <div className="pb-12" style={{ background: "#F2EEE8", borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                <button
                  type="button"
                  onClick={() => setShowReview(true)}
                  className="w-full rounded-full bg-[#111] text-white hover:bg-[#2a2a2a] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.03em", height: 52 }}
                >
                  <span>Review &amp; Order</span>
                </button>
              </div>
            </div>
          </div>{/* end RIGHT */}
        </div>{/* end columns */}
      </div>{/* end background */}

      <OrderReviewModal
        open={showReview}
        onClose={() => setShowReview(false)}
        onConfirm={handleConfirmOrder}
        lines={summaryLines}
        caseSize={caseSize}
        basePrice={basePrice}
        sizePrice={sizePrice}
        materialPrice={materialPrice}
        caseColorPrice={caseColorPrice}
        dialImagePrice={dialImagePrice}
        extraStrapTotal={extraStrapTotal}
        totalPrice={totalPrice}
      />

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} totalPrice={totalPrice} />

      {showZoom && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col" style={{ background: "#f2eee8" }}>
          {/* Header */}
          <div style={{ background: "rgba(247,243,237,0.95)", backdropFilter: "blur(9px)", borderBottom: "1px solid rgba(226,221,212,0.7)", padding: "14px 16px 10px 16px" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="uppercase text-[#74706a] tracking-[1.4px]" style={{ fontSize: 11, fontWeight: 700 }}>Analog Watch</div>
                <div className="text-[#111111] leading-[24px]" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-1.2px" }}>Customizer</div>
              </div>
              <button
                type="button"
                onClick={() => setShowZoom(false)}
                className="size-9 rounded-full border border-[#ddd5c8] text-[#b8ad9e] hover:text-[#141414] hover:border-[#555] transition-all flex items-center justify-center"
                aria-label="Close zoom"
              >
                <Minimize2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Watch centered */}
          <div className="flex-1 flex items-center justify-center overflow-auto py-6">
            <WatchPreview
              caseColor={caseColorHex} caseSize={caseSize} dialColor={dialColorHex}
              dialImage={dialImage} handsColor={handsColorHex} secondsColor={secondsColorHex}
              markerColor={markerColorHex} markerType={markerType} strapColor={strapColorHex}
              strapMaterial={strapMaterial} scale={0.78}
            />
          </div>

          {/* Price + Buy now bottom left */}
          <div style={{ position: "absolute", left: 18, bottom: 18 }}>
            <div className="uppercase text-[#737373] tracking-[1.4px]" style={{ fontSize: 10, fontWeight: 700 }}>Estimate Price</div>
            <div className="flex items-baseline gap-1 mt-0.5 mb-2">
              <span className="text-[#000000]" style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>${totalPrice}.00</span>
              <span className="text-[#737373]" style={{ fontSize: 10, fontWeight: 700 }}>USD</span>
            </div>
            <button
              type="button"
              onClick={() => { setShowZoom(false); setShowReview(true); }}
              className="flex items-center"
              style={{ background: "#111111", color: "#ffffff", borderRadius: 999, height: 30, padding: "0 18px", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", border: "none", cursor: "pointer" }}
            >
              BUY NOW
            </button>
          </div>
          {/* GMT+7 — bottom right, fixed regardless of watch size */}
          <TimeDisplay style={{ position: "absolute", right: 18, bottom: 18 }} />
        </div>
      )}
    </>
  );
}
