import React, { useState, useRef, useEffect } from "react";
import { Upload, X, RotateCcw } from "lucide-react";
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
  { id: "44", label: "44mm", price: "Included" },
  { id: "49", label: "49mm", price: "+$30" },
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
  { id: "i-xii",  label: "I-XII" },
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
const CASE_SIZE_PX: Record<string, number> = { "40": 224, "44": 248, "49": 272 };

// ── NAVBAR ─────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[rgba(222,217,209,0.6)] bg-white/90 backdrop-blur-md">
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

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/80 border border-[rgba(222,217,209,0.9)] rounded-[24px] w-full" style={{ boxShadow: "0px 8px 12px rgba(0,0,0,0.04)", willChange: "transform" }}>
      <div className="px-6 pt-5 pb-1 flex items-baseline gap-3">
        <span className="text-[#141414] tracking-[-0.8px]" style={{ fontSize: 20, fontWeight: 700 }}>{title}</span>
        {hint && <span className="text-[#9e9e9e]" style={{ fontSize: 13, fontWeight: 600 }}>{hint}</span>}
      </div>
      <div className="px-6 pb-6 pt-3">{children}</div>
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
  options, value, onSelect, disabled = false, forcedId, disabledIds = [],
}: {
  options: Swatch[]; value: string[] | string; onSelect: (id: string) => void;
  disabled?: boolean; forcedId?: string; disabledIds?: string[];
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
              isDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-black/5"
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
            {o.price && <span className="text-[#9e9e9e] text-center" style={{ fontSize: 9, fontWeight: 600 }}>{o.price}</span>}
          </button>
        );

        if (isColorBlocked) {
          return (
            <Tooltip key={o.id}>
              <TooltipTrigger asChild>{btn}</TooltipTrigger>
              <TooltipContent side="top">Too similar to dial color</TooltipContent>
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
  const getGMT7 = () => {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const g = new Date(utcMs + 7 * 3600000);
    return { h: g.getHours(), m: g.getMinutes(), s: g.getSeconds() };
  };
  const [time, setTime] = useState(getGMT7);
  useEffect(() => {
    const id = setInterval(() => setTime(getGMT7()), 1000);
    return () => clearInterval(id);
  }, []);

  const secAngle    = time.s * 6;
  const minuteAngle = time.m * 6 + time.s * 0.1;
  const hourAngle   = (time.h % 12) * 30 + time.m * 0.5 + time.s * (0.5 / 60);

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
  const ixii = ["XII","","","III","","","VI","","","IX","",""];
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
                <defs><filter id="ms" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0.3" dy="0.6" stdDeviation="0.4" floodColor="#000" floodOpacity="0.6" /></filter></defs>
                <g filter="url(#ms)">
                  {markerPositions.map((p) => {
                    if (markerType === "dots") return <circle key={p.idx} cx={p.x} cy={p.y} r={2} fill={markerColor} />;
                    let label = "";
                    if (markerType === "arabic") label = String(p.idx === 0 ? 12 : p.idx);
                    else if (markerType === "roman") label = romanNumerals[p.idx];
                    else if (markerType === "i-xii") label = ixii[p.idx];
                    if (!label) return null;
                    return <text key={p.idx} x={p.x} y={p.y} fill={markerColor} fontSize={6} fontWeight={700} textAnchor="middle" dominantBaseline="central">{label}</text>;
                  })}
                </g>
              </svg>
            )}
            <svg className="absolute inset-0 size-full" viewBox="0 0 100 100">
              <defs>
                <filter id="hs" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0.5" dy="1" stdDeviation="0.7" floodColor="#000" floodOpacity="0.65" /></filter>
                <filter id="ss" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0.4" dy="0.8" stdDeviation="0.5" floodColor="#000" floodOpacity="0.55" /></filter>
              </defs>
              <g transform={`rotate(${hourAngle}, 50, 50)`} filter="url(#hs)"><rect x="48" y="26" width="4" height="28" rx="2" fill={handsColor} /></g>
              <g transform={`rotate(${minuteAngle}, 50, 50)`} filter="url(#hs)"><rect x="48.25" y="12" width="3.5" height="42" rx="1.75" fill={handsColor} /></g>
              <circle cx="50" cy="50" r="4.5" fill={handsColor} />
              <circle cx="50" cy="50" r="2" fill="#000" opacity="0.45" />
              <g transform={`rotate(${secAngle}, 50, 50)`} filter="url(#ss)">
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
      <div className="mt-4 text-[#737373] uppercase tracking-[0.16em]" style={{ fontSize: 11, fontWeight: 700 }}>
        GMT+7 · {String(time.h).padStart(2, "0")}:{String(time.m).padStart(2, "0")}:{String(time.s).padStart(2, "0")}
      </div>
    </div>
  );
}

// ── ORDER REVIEW MODAL ─────────────────────────────────────────────────────

type SummaryLine = { label: string; value: string; dot?: string; price?: string };

function OrderReviewModal({
  open, onClose, onConfirm, lines,
  basePrice, sizePrice, materialPrice, caseColorPrice, dialImagePrice, extraStrapTotal, totalPrice,
}: {
  open: boolean; onClose: () => void; onConfirm: () => void; lines: SummaryLine[];
  basePrice: number; sizePrice: number; materialPrice: number; caseColorPrice: number;
  dialImagePrice: number; extraStrapTotal: number; totalPrice: number;
}) {
  if (!open) return null;
  const breakdown = [
    { label: "Base watch",        amount: basePrice },
    ...(sizePrice      > 0 ? [{ label: "Case size (49mm)",  amount: sizePrice }]      : []),
    ...(materialPrice  > 0 ? [{ label: "Strap material",    amount: materialPrice }]  : []),
    ...(caseColorPrice > 0 ? [{ label: "Case color",        amount: caseColorPrice }] : []),
    ...(dialImagePrice > 0 ? [{ label: "Custom dial image", amount: dialImagePrice }] : []),
    ...(extraStrapTotal > 0 ? [{ label: "Extra straps",     amount: extraStrapTotal }]: []),
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(5px)" }} onClick={onClose}>
      <div className="bg-white w-full sm:max-w-lg rounded-t-[32px] sm:rounded-[32px] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1"><div className="w-9 h-1 rounded-full bg-[#ddd]" /></div>

        <div className="px-7 pt-5 pb-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[#141414] tracking-[-0.8px]" style={{ fontSize: 22, fontWeight: 800 }}>Review Your Order</h2>
            <button type="button" onClick={onClose} className="size-9 flex items-center justify-center rounded-full hover:bg-black/5 transition text-[#9e9e9e]"><X className="size-4" /></button>
          </div>

          {/* Config summary */}
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

          {/* Price breakdown */}
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

// ── FOOTER ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[rgba(222,217,209,0.9)]" style={{ background: "rgba(255,255,255,0.6)" }}>
      <div className="mx-auto max-w-[1280px] px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-baseline mb-2">
            <span className="text-[#141414] tracking-[-0.04em]" style={{ fontSize: 17, fontWeight: 800 }}>CRAFT</span>
            <span className="text-[#737373] tracking-[-0.04em]" style={{ fontSize: 17, fontWeight: 300 }}>WATCH</span>
          </div>
          <p className="text-[#737373]" style={{ fontSize: 13, lineHeight: 1.7 }}>Handcrafted timepieces,<br />built to your specification.</p>
        </div>
        <div>
          <p className="text-[#141414] uppercase tracking-widest mb-3" style={{ fontSize: 10, fontWeight: 700 }}>Navigation</p>
          {["Collection", "About", "Contact", "FAQ"].map((l) => (
            <div key={l} className="mb-2"><a href="#" className="text-[#737373] hover:text-[#141414] transition-colors" style={{ fontSize: 13 }}>{l}</a></div>
          ))}
        </div>
        <div>
          <p className="text-[#141414] uppercase tracking-widest mb-3" style={{ fontSize: 10, fontWeight: 700 }}>Policy</p>
          {["Shipping", "Returns", "Warranty", "Privacy"].map((l) => (
            <div key={l} className="mb-2"><a href="#" className="text-[#737373] hover:text-[#141414] transition-colors" style={{ fontSize: 13 }}>{l}</a></div>
          ))}
        </div>
      </div>
      <div className="border-t border-[rgba(222,217,209,0.9)] py-4">
        <div className="mx-auto max-w-[1280px] px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[#bbb]" style={{ fontSize: 11 }}>© 2026 CRAFTWATCH. All rights reserved.</span>
          <span className="text-[#bbb]" style={{ fontSize: 11 }}>Made with care, built to last.</span>
        </div>
      </div>
    </footer>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────

export default function App() {
  const [caseSize,      setCaseSize]      = useState("40");
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

  const fileRef      = useRef<HTMLInputElement>(null);
  const dialImageRef = useRef<string | null>(null);

  useEffect(() => { return () => { if (dialImageRef.current) URL.revokeObjectURL(dialImageRef.current); }; }, []);

  const imageUploaded = !!dialImage;

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
    setCaseSize("40"); setCaseColor("black"); setDialTab("color"); setDialColor("cream");
    setDialImage(null); setDialImageName(""); setMarkerType("dots"); setMarkerColor("black");
    setHandsColor("silver"); setSecondsColor("red"); setPrimaryStrap("rubber-black"); setExtraStraps([]);
  };

  const handleConfirmOrder = () => {
    setShowReview(false);
    confetti({ particleCount: 130, spread: 80, origin: { y: 0.6 }, colors: ["#111", "#c8ccd1", "#d4af6a", "#a8302b", "#1a9e84"] });
    setShowSuccess(true);
  };

  const addExtraStrap    = (id: string) => setExtraStraps((p) => [...p, id]);
  const removeOneExtraStrap = (id: string) =>
    setExtraStraps((p) => { const i = p.lastIndexOf(id); return i === -1 ? p : [...p.slice(0, i), ...p.slice(i + 1)]; });
  const removeAllExtraStrap = (id: string) => setExtraStraps((p) => p.filter((x) => x !== id));
  const extraStrapUnitPrice = (id: string) => { const m = id.split("-")[0]; return m === "leather" ? 25 : m === "nylon" ? 15 : 10; };

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
  const sizePrice       = caseSize === "49" ? 30 : 0;
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

  return (
    <>
      <Navbar />

      {/* ── Split-panel layout: right side scrolls, left side is static ── */}
      <div
        className="w-full lg:overflow-hidden flex flex-col"
        style={{
          background: "radial-gradient(ellipse at top left, #ffffff 0%, #f6f3ee 42%, #e8e2d8 100%)",
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="flex-1 min-h-0 mx-auto w-full max-w-[1280px] pt-[40px] px-6 lg:px-8 flex flex-col lg:flex-row gap-0 lg:gap-8">

          {/* ── LEFT: static watch panel ── */}
          <div className="hidden lg:flex lg:w-[46%] flex-shrink-0 h-full flex-col items-center gap-10">
            <div className="text-center">
              <h1 className="text-[#141414] tracking-[-1.5px]" style={{ fontSize: 28, fontWeight: 800 }}>Build Your Watch</h1>
              <p className="text-[#9e9e9e] mt-0.5" style={{ fontSize: 13 }}>Configure every detail, preview in real time.</p>
            </div>
            
            <WatchPreview
              caseColor={caseColorHex}
              caseSize={caseSize}
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

            {/* Reset */}
            <button type="button" onClick={handleReset} className="flex items-center gap-1.5 text-[#9e9e9e] hover:text-[#333] transition-colors" style={{ fontSize: 12, fontWeight: 600 }}>
              <RotateCcw className="size-3" /> Reset all
            </button>
          </div>

          {/* ── RIGHT: menu panel (sections scroll, button pinned at bottom) ── */}
          <div className="lg:w-[54%] flex-shrink-0 h-full flex flex-col lg:pr-1">

            {/* Scrollable sections area — outer handles scroll, inner handles layout */}
            <div className="flex-1 min-h-0 overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" }}>
            <div className="flex flex-col gap-3 pb-6 lg:pb-8">

            {/* Mobile: watch preview at top */}
            <div className="flex lg:hidden flex-col items-center gap-4 pb-4">
              <WatchPreview
                caseColor={caseColorHex} caseSize={caseSize} dialColor={dialColorHex}
                dialImage={dialImage} handsColor={handsColorHex} secondsColor={secondsColorHex}
                markerColor={markerColorHex} markerType={markerType} strapColor={strapColorHex}
                strapMaterial={strapMaterial} scale={0.7}
              />
              <div className="text-center">
                <p className="text-[#9e9e9e] uppercase tracking-widest" style={{ fontSize: 10, fontWeight: 700 }}>Estimated Price</p>
                <div className="flex items-baseline justify-center gap-1 mt-0.5">
                  <span className="text-[#141414] tracking-tighter" style={{ fontSize: 36, fontWeight: 800 }}>${totalPrice}</span>
                  <span className="text-[#737373]" style={{ fontSize: 13, fontWeight: 600 }}>USD</span>
                </div>
              </div>
            </div>

            <Section title="Case Size" hint="Single choice">
              <PillRow options={CASE_SIZES} value={caseSize} onChange={setCaseSize} />
            </Section>

            <Section title="Case Color" hint="Single choice">
              <SwatchRow options={CASE_COLORS} value={caseColor} onSelect={setCaseColor} />
            </Section>

            <Section title="Dial Face" hint="Single choice">
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
                <SwatchRow options={DIAL_COLORS} value={dialColor} onSelect={setDialColor} />
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

            <Section title="Hour Marker Type" hint="Single choice">
              <div className={imageUploaded ? "opacity-60 pointer-events-none" : ""}>
                <div className="flex flex-wrap items-start gap-3">
                  {[
                    { id: "arabic", preview: <span className={`text-[34px] tracking-[-1.4px] leading-none ${markerType === "arabic" ? "text-white/80" : "text-black/80"}`}>1-12</span> },
                    { id: "i-xii",  preview: <span className={`text-[34px] tracking-[-1.4px] leading-none ${markerType === "i-xii"  ? "text-white/80" : "text-black/80"}`}>I-XII</span> },
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
                      <button key={id} type="button" onClick={() => setMarkerType(id)} className="flex flex-col gap-1.5 items-center">
                        <div className={`flex items-center justify-center h-[100px] w-[90px] rounded-[24px] transition ${active ? "bg-[#111] shadow-[0px_10px_12px_rgba(0,0,0,0.14)]" : "bg-white border border-[#ded9d1] hover:border-[#111]"}`}>
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

            <Section title="Hour Marker Colors" hint="Single choice">
              <div className={imageUploaded ? "opacity-60 pointer-events-none" : ""}>
                <SwatchRow options={METAL_COLORS} value={markerColor} onSelect={setMarkerColor} disabledIds={disabledMetalColors} />
              </div>
              {imageUploaded && <p className="mt-2 text-[#9e9e9e]" style={{ fontSize: 13 }}>Not shown with a custom dial image.</p>}
            </Section>

            <Section title="Hands Color" hint="Single choice">
              <SwatchRow options={METAL_COLORS} value={handsColor} onSelect={setHandsColor} disabledIds={disabledMetalColors} />
            </Section>

            <Section title="Seconds Hand Color" hint="Single choice">
              <SwatchRow options={SECONDS_COLORS} value={secondsColor} onSelect={setSecondsColor} />
            </Section>

            <Section title="Strap" hint="Main + optional extras">
              <div className="flex flex-col gap-1">
                {STRAP_GROUPS.map((group, gi) => (
                  <div key={group.id} className={`flex flex-col gap-3 pt-3 pb-4 ${gi < STRAP_GROUPS.length - 1 ? "border-b border-dashed border-[#d8cfbc]" : ""}`}>
                    <div className="flex items-center gap-2">
                      <span className="italic text-[#181612]" style={{ fontSize: 17 }}>{group.label}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide ${group.price === "Included" ? "bg-[#f0ede8] text-[#8a8275]" : "bg-[#111] text-white"}`}>{group.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-3">
                      {group.colors.map((o) => {
                        const isPrimary  = primaryStrap === o.id;
                        const extraCount = extraStraps.filter((x) => x === o.id).length;
                        return (
                          <div key={o.id} className="relative flex flex-col items-center gap-1 w-[60px]">
                            <button type="button" title="Set as main strap" onClick={() => setPrimaryStrap(o.id)}
                              className={`relative rounded-full size-[50px] transition-all flex-shrink-0 ${isPrimary ? "ring-2 ring-offset-2 ring-[#111]" : "ring-1 ring-black/10 hover:ring-black/30"}`}
                              style={{ background: o.color, boxShadow: "inset 0px -2.9px 5.8px rgba(0,0,0,0.08), inset 0px 2.9px 5.8px rgba(255,255,255,0.18)" }}>
                              {isPrimary && <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white shadow ring-1 ring-black/30" />}
                            </button>
                            <button type="button" title="Add as extra strap" onClick={(e) => { e.stopPropagation(); addExtraStrap(o.id); }}
                              className="absolute top-0 right-0 min-w-[18px] h-[18px] px-1 rounded-full bg-white border border-[#ded9d1] text-[#333] flex items-center justify-center hover:bg-[#111] hover:text-white hover:border-[#111] transition-all shadow-sm"
                              style={{ fontSize: 10, fontWeight: 800 }}>
                              {extraCount > 0 ? <span style={{ fontSize: 8 }}>+{extraCount}</span> : "+"}
                            </button>
                            <span className="uppercase text-[#181612] text-center leading-tight" style={{ fontSize: 10, fontWeight: 600 }}>{o.label}</span>
                            {isPrimary && <span className="text-[#8a8275] uppercase -mt-0.5" style={{ fontSize: 8, fontWeight: 700 }}>Main</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {extraStraps.length > 0 && (() => {
                  const grouped: Record<string, number> = {};
                  extraStraps.forEach((id) => { grouped[id] = (grouped[id] || 0) + 1; });
                  return (
                    <div className="mt-2 pt-4 border-t border-[#ded9d1]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[#181612] uppercase tracking-wide" style={{ fontSize: 10, fontWeight: 700 }}>Extra Straps</span>
                          <span className="bg-[#111] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">{extraStraps.length}</span>
                        </div>
                        <span className="text-[#8a8275]" style={{ fontSize: 11, fontWeight: 600 }}>+${extraStrapTotal} added</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {Object.entries(grouped).map(([id, count]) => {
                          const strap = ALL_STRAPS.find((s) => s.id === id);
                          const mat = id.split("-")[0];
                          const priceEach = extraStrapUnitPrice(id);
                          if (!strap) return null;
                          return (
                            <div key={id} className="flex items-center gap-3 bg-[#fafaf8] border border-[#ede9e2] rounded-2xl px-4 py-3">
                              <div className="rounded-full size-7 ring-1 ring-black/10 flex-shrink-0" style={{ background: strap.color }} />
                              <div className="flex-1 min-w-0">
                                <div className="text-[#181612] capitalize" style={{ fontSize: 12, fontWeight: 600 }}>{mat.charAt(0).toUpperCase() + mat.slice(1)} · {strap.label}</div>
                                <div className="text-[#8a8275]" style={{ fontSize: 10 }}>${priceEach} each · ${priceEach * count} total</div>
                              </div>
                              <div className="flex items-center gap-1">
                                <button type="button" onClick={() => removeOneExtraStrap(id)} className="size-6 rounded-full border border-[#ded9d1] text-[#333] flex items-center justify-center hover:bg-black/5 transition" style={{ fontSize: 13, lineHeight: 1 }}>−</button>
                                <span className="w-4 text-center text-[#181612]" style={{ fontSize: 12, fontWeight: 700 }}>{count}</span>
                                <button type="button" onClick={() => addExtraStrap(id)} className="size-6 rounded-full border border-[#ded9d1] text-[#333] flex items-center justify-center hover:bg-black/5 transition" style={{ fontSize: 13, lineHeight: 1 }}>+</button>
                              </div>
                              <button type="button" onClick={() => removeAllExtraStrap(id)} className="size-6 rounded-full text-[#aaa] flex items-center justify-center hover:text-[#333] hover:bg-black/5 transition" aria-label="Remove all"><X className="size-3.5" /></button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </Section>

            </div>{/* end flex layout */}
            </div>{/* end scroll container */}

            {/* ── Pinned Order Now button — footer of the menu panel ── */}
            <div className="flex-shrink-0 pt-3 pb-6 pt-6" style={{ background: "linear-gradient(to top, rgba(232,226,216,1) 55%, rgba(232,226,216,0) 100%)" }}>
              <button
                type="button"
                onClick={() => setShowReview(true)}
                className="w-full rounded-full bg-[#111] text-white hover:bg-[#2a2a2a] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.03em", height: 52 }}
              >
                <span>Review &amp; Order</span>
                <span className="bg-white/15 px-3 py-1 rounded-full" style={{ fontSize: 14, fontWeight: 800 }}>${totalPrice}</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />

      <OrderReviewModal
        open={showReview}
        onClose={() => setShowReview(false)}
        onConfirm={handleConfirmOrder}
        lines={summaryLines}
        basePrice={basePrice}
        sizePrice={sizePrice}
        materialPrice={materialPrice}
        caseColorPrice={caseColorPrice}
        dialImagePrice={dialImagePrice}
        extraStrapTotal={extraStrapTotal}
        totalPrice={totalPrice}
      />

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} totalPrice={totalPrice} />
    </>
  );
}
