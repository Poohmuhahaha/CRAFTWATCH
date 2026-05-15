import React, { useState, useRef, useEffect, useLayoutEffect, useId } from "react";
import { Upload, X, RotateCcw, Info, Plus, Minus, CircleSlash, Maximize2, Minimize2 } from "lucide-react";
import svgPaths from "../imports/Section-1-1/svg-n6f01f9iwu";
import { Tooltip, TooltipTrigger, TooltipContent } from "./components/ui/tooltip";
import Lenis from "lenis";

// ── TYPES ─────────────────────────────────────────────────────────────────

type Pill   = { id: string; label: string; price?: string; isNew?: boolean };
type Swatch = { id: string; label: string; color: string; price?: string };
type StrapGroup = { id: string; label: string; price: string; colors: Swatch[] };

// ── CONSTANTS ──────────────────────────────────────────────────────────────

const CASE_SIZES: Pill[] = [
  { id: "40", label: "40mm", price: "Included" },
  { id: "44", label: "44mm", price: "Included" },
  { id: "49", label: "49mm", price: "+$15" },
  { id: "64", label: "64mm", price: "+$30", isNew: true },
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
const CASE_SIZE_PX: Record<string, number> = { "40": 180, "44": 190, "49": 200, "64": 220 };

const getGMT7 = () => {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const g = new Date(utcMs + 7 * 3600000);
  return { h: g.getHours(), m: g.getMinutes(), s: g.getSeconds() };
};

function WristReference({ show, zoom = 1, variant = "skin" }: { show: boolean; zoom?: number; variant?: "skin" | "line" }) {
  // Always render so opacity can transition; SVG fades in/out instead of popping
  const ARM_SCALE = 1.44;
  const w = 1400 * ARM_SCALE * zoom;
  const h = 620 * ARM_SCALE * zoom;
  const isLine = variant === "line";
  const armPath = "M 0 195 Q 200 188, 400 192 Q 600 196, 800 200 Q 1000 204, 1200 200 Q 1340 196, 1400 192 L 1400 426 Q 1340 422, 1200 422 Q 1000 424, 800 422 Q 600 420, 400 422 Q 200 424, 0 420 Z";
  const sleevePath = "M 0 178 L 464 178 Q 480 178, 480 194 L 480 426 Q 480 442, 464 442 L 0 442 Z";
  // Unique IDs per instance so the mobile + desktop wrist SVGs don't collide on `url(#…)` references
  const uid = useId().replace(/:/g, "");
  const skinTopId       = `ws-${uid}`;
  const shadowOverlayId = `wo-${uid}`;
  const sleeveGradId    = `sg-${uid}`;
  const armRightFadeId  = `af-${uid}`;
  const armFadeMaskId   = `am-${uid}`;
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        opacity: show ? 1 : 0,
        willChange: "opacity",
        transition: "opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
      width={w}
      height={h}
      viewBox="0 0 1400 620"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={skinTopId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#f7d8b6" />
          <stop offset="35%" stopColor="#ecc197" />
          <stop offset="100%" stopColor="#b9885a" />
        </linearGradient>
        <linearGradient id={shadowOverlayId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="rgba(255,255,255,0.22)" />
          <stop offset="55%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.26)" />
        </linearGradient>
        <linearGradient id={sleeveGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#1e1d1c" />
          <stop offset="50%"  stopColor="#2a2926" />
          <stop offset="100%" stopColor="#0f0e0d" />
        </linearGradient>
        <linearGradient id={armRightFadeId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="1" />
          <stop offset="78%"  stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </linearGradient>
        <mask id={armFadeMaskId}>
          <rect width="1400" height="620" fill={`url(#${armRightFadeId})`} />
        </mask>
      </defs>

      <g mask={`url(#${armFadeMaskId})`} opacity={isLine ? 1 : 0.9}>
        {isLine ? (
          <path d={armPath} fill="#ffffff" stroke="#1c1c1c" strokeWidth="2" />
        ) : (
          <>
            <path d={armPath} fill={`url(#${skinTopId})`} />
            <path d={armPath} fill={`url(#${shadowOverlayId})`} />
          </>
        )}
      </g>

      {/* ── Sleeve cuff on the LEFT ── */}
      {isLine ? (
        <>
          <path d={sleevePath} fill="#ffffff" stroke="#1c1c1c" strokeWidth="2" />
          <path d="M 466 200 L 466 420" stroke="#1c1c1c" strokeWidth="1.2" fill="none" />
        </>
      ) : (
        <>
          <path d={sleevePath} fill={`url(#${sleeveGradId})`} />
          <path d="M 478 198 L 478 422" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
        </>
      )}
    </svg>
  );
}

// ── WRIST OUTLINE ──────────────────────────────────────────────────────────
// Designer-provided hand + forearm silhouette. Source SVG is 1132×678 but the actual
// drawing only spans roughly y=160–551, so we crop the viewBox vertically to remove
// empty padding. Wrist sits near x≈740 → shift left so it lands on the preview centre.
function WristOutline({
  show,
  baseSize,
  left = "80%",
  top = "35%",
  shiftXPct,
}: {
  show: boolean;
  baseSize: number;
  left?: string;
  top?: string;
  shiftXPct?: number;
}) {
  const uid = useId().replace(/:/g, "");
  const filterId = `wo-filter-${uid}`;
  const fadeGradId = `wo-fadegrad-${uid}`;
  const fadeMaskId = `wo-fademask-${uid}`;
  const SVG_W = 500;
  const VB_Y = 130;
  const VB_H = 430;
  const WRIST_X = 740; // approximate wrist position inside the source viewBox
  // Default shift drags the element so the conceptual wrist (off the right edge of viewBox)
  // lands at `left%`. Callers in narrow/clipped containers can override (e.g. 0 to keep the
  // visible forearm centered on the placement point instead of shifting it offscreen).
  const shiftPct = shiftXPct ?? ((SVG_W / 2) - WRIST_X) / SVG_W * 100;
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        left, top,
        transform: `translate(-50%, -50%) translateX(${shiftPct}%)`,
        zIndex: 0,
        opacity: show ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
        willChange: "opacity",
        overflow: "visible",
      }}
      width={baseSize}
      height={baseSize * (VB_H / SVG_W)}
      viewBox={`0 ${VB_Y} ${SVG_W} ${VB_H}`}
      fill="none"
      aria-hidden="true"
    >
     
      <defs>
        <filter id={filterId} x="2.11487" y="160.615" width="1097.61" height="390.478" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="11" dy="7" />
          <feGaussianBlur stdDeviation="10.9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-4" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.418269 0 0 0 0 0.39625 0 0 0 0 0.271473 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
        {/* Gradient + mask must span the FULL path content area (x=0–1100, paths extend past the viewBox).
            Covering only the viewBox area would mask away everything outside it. */}
        <linearGradient id={fadeGradId} x1="0" y1="0" x2="790" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={fadeMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1100" height="700">
          <rect x="0" y="0" width="1100" height="700" fill={`url(#${fadeGradId})`} />
        </mask>
      </defs>
      <g mask={`url(#${fadeMaskId})`}>
        <g filter={`url(#${filterId})`}>
          <path d="M911.6 313.948C924.782 309.425 945.596 297.819 955.685 288.122C960.546 283.45 967.467 265.905 960.455 260.277C952.808 257.829 935.081 267.74 925.046 269.488C912.837 271.614 904.017 270.402 891.694 271.835C876.774 273.57 865.159 279.265 851.319 282.81C842.129 285.164 830.122 283.805 820.2 287.926C811.866 291.18 805.766 297.644 797.853 301.841C773.918 314.539 748.557 325.096 723.133 334.431C718.197 336.243 715.284 334.357 710.383 333.755C693.076 331.663 675.737 329.844 658.371 328.301C601.797 323.431 548.109 325.878 492.317 316.187C462.441 310.712 432.878 303.663 403.744 295.068C377.388 287.471 351.084 279.215 324.431 272.735C281.605 262.323 239.354 261.114 197.747 245.264C168.059 233.956 148.331 219.701 121.883 202.983C101.846 190.203 81.4253 178.04 60.6414 166.508L7.14494 340.959C31.2799 347.631 57.8244 360.088 80.9993 369.89C93.8472 375.328 108.364 381.453 120.761 387.768C132.12 393.563 141.265 405.431 153.538 410.601C174.883 419.602 199.028 422.741 221.563 427.588C242.85 432.175 263.914 437.807 285.079 442.071C302.712 445.525 320.5 448.114 338.381 449.827C408.173 456.891 481.749 452.998 551.815 449.324L617.806 445.63C625.845 445.172 654.167 442.729 660.341 444.687C700.338 457.356 738.749 480.355 778.709 493.527C797.08 499.584 816.207 503.033 835.024 505.965C850.635 508.395 862.918 508.723 877.99 513.905C890.203 518.035 902.164 522.874 913.804 528.417C922.984 532.853 933.273 540.254 943.885 540.09C949.805 539.815 963.748 537.456 962.574 529.191C961.842 523.451 954.612 514.885 949.493 511.941C939.674 506.3 930.806 497.967 921.13 492.389C912.278 487.285 902.112 484.805 893.915 478.177C896.148 470.782 916.629 477.331 921.337 478.681C948.99 486.607 971.246 505.133 996.707 517.623C1007.76 523.045 1022.06 529.676 1033.74 522.011C1042.54 515.924 1035.81 505.316 1030.22 499.557C1023.85 492.981 1015.37 488.698 1008.09 483.204C994.736 473.886 981.873 463.268 967.494 455.595C960.142 451.656 928.056 442.38 924.631 438.516L924.73 437.11C927.899 433.423 936.819 431.674 941.363 432.586C969.107 438.158 996.696 448.307 1022.9 458.927C1036.46 464.805 1045.76 471.447 1060.6 474.791C1079.07 478.953 1092.46 470.357 1079.68 451.682C1077.05 447.838 1071.68 442.406 1067.51 439.816C1043.56 424.953 1017.5 411.488 991.55 400.466C980.664 396.17 943.544 388.791 931.299 386.665C933.768 384.816 936.523 382.92 939.05 381.115C960.282 380.108 978.441 379.715 999.203 384.525C1005.65 386.019 1013.43 385.95 1020.09 387.585C1030.45 390.129 1040.5 393.848 1051.07 395.48C1081.86 399.304 1090.78 380 1061.12 365.537C1046.53 357.385 1028.68 353.874 1013.57 347.848C987.776 337.554 963.612 340.447 936.838 337.17C927.79 336.062 917.892 333.562 908.705 332.009C897.367 330.091 886.575 328.984 875.051 328.25C879.828 325.532 885.832 322.784 891.083 321.323C899.491 318.983 900.532 318.774 906.765 313.075L911.6 313.948Z" fill="#E3E3E3" />
      </g>
        <path d="M961.065 258.373C958.638 257.596 955.669 257.851 952.694 258.481C949.66 259.123 946.307 260.226 942.969 261.427C941.294 262.03 939.602 262.665 937.942 263.287C936.278 263.911 934.645 264.521 933.067 265.083C929.887 266.215 927.032 267.112 924.702 267.518L924.703 267.518C918.747 268.555 913.608 268.781 908.359 268.922C903.124 269.063 897.734 269.12 891.463 269.849C883.812 270.739 877.034 272.641 870.491 274.739C863.9 276.853 857.666 279.12 850.823 280.873C846.436 281.997 841.384 282.232 835.861 282.713C830.467 283.183 824.731 283.887 819.473 286.063C815.056 287.787 811.274 290.347 807.704 292.904C804.081 295.499 800.721 298.055 796.916 300.074C773.088 312.715 747.818 323.237 722.444 332.554L722.443 332.554C720.37 333.315 718.769 333.303 717.068 333.025C716.164 332.877 715.27 332.661 714.186 332.418C713.13 332.181 711.952 331.933 710.627 331.77L710.623 331.77C693.295 329.675 675.935 327.853 658.548 326.308L658.542 326.308C630.2 323.869 602.549 323.259 575.138 322.054C547.699 320.847 520.439 319.041 492.678 314.22L492.678 314.22C462.871 308.757 433.376 301.725 404.31 293.15L404.297 293.146C378.002 285.566 351.61 277.285 324.903 270.791C303.399 265.563 282 262.638 260.966 259.067C239.882 255.488 219.074 251.248 198.459 243.395C169.012 232.178 149.505 218.078 122.959 201.297L119.191 198.903C100.329 186.974 81.1304 175.589 61.612 164.759L59.4531 163.562L4.62984 342.339L6.61206 342.886C30.5808 349.512 56.9287 361.88 80.2208 371.732L80.2196 371.732C93.0847 377.177 107.533 383.273 119.854 389.549L119.853 389.55C125.289 392.324 130.222 396.565 135.531 400.96C140.594 405.15 145.972 409.453 152.16 412.186L152.761 412.445C174.337 421.542 198.837 424.746 221.143 429.543L221.143 429.542C242.214 434.083 263.59 439.782 284.684 444.031L284.695 444.034C302.392 447.5 320.244 450.099 338.19 451.818L338.19 451.817C408.159 458.898 481.888 454.993 551.92 451.32L551.927 451.32L617.917 447.627L617.919 447.627C622.041 447.392 630.991 446.674 639.869 446.25C644.282 446.039 648.608 445.906 652.199 445.944C655.893 445.984 658.523 446.209 659.736 446.594L659.737 446.594C679.6 452.885 699.092 461.749 718.706 470.736C738.279 479.705 757.977 488.799 778.082 495.426C796.617 501.538 815.881 505.007 834.716 507.941C850.592 510.412 862.491 510.691 877.339 515.796L877.349 515.8C889.488 519.904 901.376 524.715 912.944 530.223L912.945 530.223C915.185 531.305 917.498 532.572 919.93 533.894C922.349 535.207 924.873 536.568 927.453 537.787C932.595 540.216 938.153 542.179 943.916 542.09L943.947 542.089L943.977 542.088C947.06 541.945 952.275 541.264 956.643 539.49C958.824 538.604 960.955 537.38 962.476 535.671C964.048 533.903 964.934 531.641 964.558 528.938L964.512 528.615C963.979 525.271 961.77 521.482 959.251 518.281C956.617 514.933 953.345 511.85 950.49 510.208L950.489 510.207C945.703 507.457 941.127 504.039 936.456 500.541C931.822 497.07 927.089 493.516 922.129 490.656C917.585 488.036 912.665 486.071 908.093 484.029C904.014 482.207 900.126 480.292 896.604 477.719C897.071 477.383 897.775 477.1 898.825 476.916C900.816 476.567 903.48 476.698 906.407 477.129C912.229 477.986 918.365 479.91 920.787 480.604C934.363 484.495 946.664 491.002 958.83 498.164C970.93 505.287 983.005 513.129 995.826 519.418C1001.33 522.119 1007.88 525.244 1014.57 526.68C1021.3 528.125 1028.4 527.907 1034.83 523.682L1034.85 523.669L1034.87 523.656C1037.42 521.895 1038.96 519.71 1039.62 517.262C1040.26 514.853 1040 512.376 1039.29 510.069C1037.87 505.504 1034.55 501.144 1031.66 498.165C1028.32 494.724 1024.47 491.916 1020.61 489.317C1016.7 486.679 1012.88 484.313 1009.3 481.607L1009.27 481.585L1009.24 481.564C996.475 472.661 983.771 462.25 969.792 454.565L968.435 453.83C966.446 452.765 962.922 451.4 958.858 449.927C954.751 448.439 949.915 446.78 945.253 445.14C940.569 443.493 936.05 441.863 932.497 440.409C930.718 439.682 929.217 439.013 928.074 438.422C927.59 438.171 927.208 437.953 926.915 437.77C928.242 436.671 930.428 435.699 933.008 435.065C936.031 434.323 939.082 434.168 940.969 434.547C968.515 440.078 995.955 450.165 1022.13 460.772C1028.87 463.695 1034.4 466.737 1040.4 469.613C1046.35 472.461 1052.53 475.024 1060.16 476.742C1064.96 477.824 1069.5 478.096 1073.44 477.543C1077.37 476.992 1080.82 475.601 1083.25 473.231C1085.73 470.808 1086.97 467.52 1086.68 463.607C1086.39 459.765 1084.64 455.389 1081.33 450.552C1078.57 446.516 1073.01 440.875 1068.56 438.117L1066.31 436.723C1042.89 422.356 1017.56 409.341 992.332 398.626L992.309 398.615L992.284 398.606C986.66 396.386 974.486 393.435 962.359 390.797C952.721 388.7 942.973 386.775 936.272 385.531C937.423 384.716 938.585 383.898 939.727 383.085C960.687 382.101 978.467 381.774 998.752 386.474C1002.12 387.254 1005.81 387.622 1009.36 387.992C1012.96 388.368 1016.43 388.748 1019.61 389.527C1024.75 390.789 1029.77 392.331 1034.96 393.799C1040.11 395.256 1045.35 396.621 1050.76 397.456L1050.79 397.461L1050.82 397.465C1058.71 398.445 1065.35 397.965 1070.4 396.355C1075.43 394.753 1079.14 391.938 1080.63 388.085C1082.14 384.165 1081.11 379.792 1077.99 375.65C1074.88 371.535 1069.6 367.453 1062.05 363.764C1054.59 359.602 1046.34 356.644 1038.16 353.993C1029.9 351.315 1021.78 348.971 1014.32 345.99C1001.15 340.736 988.431 338.864 975.726 337.884C962.904 336.895 950.439 336.82 937.081 335.185C932.639 334.641 927.968 333.752 923.218 332.795C918.494 331.844 913.672 330.821 909.038 330.037L909.039 330.037C899.991 328.507 891.293 327.491 882.316 326.768C885.097 325.485 887.973 324.342 890.663 323.527L891.619 323.25C895.739 322.103 898.333 321.411 900.643 320.243C902.811 319.147 904.67 317.664 907.379 315.218L911.244 315.916L911.756 316.009L912.248 315.84C918.997 313.524 927.616 309.429 935.802 304.708C943.976 299.994 951.859 294.574 957.071 289.564C958.515 288.177 959.978 285.984 961.247 283.503C962.533 280.991 963.69 278.046 964.459 275.057C965.225 272.083 965.635 268.964 965.34 266.138C965.046 263.31 964.017 260.572 961.707 258.718L961.419 258.485L961.065 258.373Z" stroke="#0F0F0F" strokeWidth="4" />
      </g>
    </svg>
  );
}

// ── WRIST IMAGE ────────────────────────────────────────────────────────────
// User-uploaded wrist photo with drag-to-reposition, scale + rotation transforms.
// Replaces the SVG WristReference. baseSize is the natural rendered width before scale,
// so drag deltas in pixels translate cleanly into the same % units the slider produces.
// ── DIAL IMAGE EDITOR ──────────────────────────────────────────────────────
// Instagram-style inline cropper for the uploaded dial image. The dial face is round, so we mirror
// that with a circular viewport. User pans with drag, zooms with wheel (desktop) or pinch (mobile);
// rotation is handled by ±90° buttons. State (scale/offset/rotation) is owned by App and shared with
// the live watch preview on the left — every adjustment updates both surfaces in real time.
function DialImageEditor({
  image, scale, rotation, offsetX, offsetY,
  onScale, onRotation, onOffsetX, onOffsetY, onResetTransform,
}: {
  image: string;
  scale: number; rotation: number; offsetX: number; offsetY: number;
  onScale: (v: number) => void;
  onRotation: (v: number) => void;
  onOffsetX: (v: number) => void;
  onOffsetY: (v: number) => void;
  onResetTransform: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ x: 0, y: 0, ox: 0, oy: 0, active: false });
  const clampOffset = (v: number) => Math.max(-60, Math.min(60, v));

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offsetX, oy: offsetY, active: true };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const px = containerRef.current?.clientWidth || 1;
    const dxPct = ((e.clientX - dragRef.current.x) / px) * 100;
    const dyPct = ((e.clientY - dragRef.current.y) / px) * 100;
    onOffsetX(clampOffset(dragRef.current.ox + dxPct));
    onOffsetY(clampOffset(dragRef.current.oy + dyPct));
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current.active = false;
    try { (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId); } catch {}
  };

  return (
    <div className="flex flex-col gap-3 bg-[#fafafa] border border-[#ede9e2] rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <span className="uppercase tracking-wider text-[#666]" style={{ fontSize: 10, fontWeight: 700 }}>Adjust image</span>
        <button
          type="button"
          onClick={onResetTransform}
          className="text-[#888] hover:text-[#141414] transition-colors"
          style={{ fontSize: 11, fontWeight: 600 }}
        >
          Reset
        </button>
      </div>
      {/* Circular crop preview — drag to pan; zoom via the slider below */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square max-w-[280px] mx-auto rounded-full overflow-hidden bg-black select-none"
        style={{ touchAction: "none", cursor: dragRef.current.active ? "grabbing" : "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          src={image}
          alt="dial preview"
          draggable={false}
          className="absolute inset-0 size-full object-cover pointer-events-none"
          style={{
            transform: `translate(${offsetX}%, ${offsetY}%) scale(${scale / 100}) rotate(${rotation}deg)`,
            transformOrigin: "center",
          }}
        />
        {/* Subtle inset ring to communicate the circular crop boundary */}
        <div className="absolute inset-0 pointer-events-none rounded-full" style={{ boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.18)" }} />
      </div>
      {/* Zoom slider — replaces wheel/pinch zoom which felt unnatural in this context */}
      <label className="flex flex-col gap-1">
        <div className="flex items-center justify-between" style={{ fontSize: 12, fontWeight: 600 }}>
          <span className="text-[#181612]">Zoom</span>
          <span className="text-[#737373] tabular-nums">{scale}%</span>
        </div>
        <input
          type="range"
          min={50}
          max={200}
          step={1}
          value={scale}
          onChange={(e) => onScale(Number(e.target.value))}
          className="w-full accent-[#111]"
        />
      </label>
      {/* Rotation controls — Instagram doesn't have these in profile crop, but watch dials benefit */}
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onRotation(rotation - 90)}
          className="size-9 rounded-full border border-[#ded9d1] text-[#444] hover:bg-black/5 active:scale-[0.96] transition-all flex items-center justify-center"
          aria-label="Rotate -90°"
          title="Rotate -90°"
        >
          <RotateCcw className="size-4" strokeWidth={2} />
        </button>
        <span className="text-[#737373] tabular-nums" style={{ fontSize: 11, fontWeight: 600, minWidth: 56, textAlign: "center" }}>{rotation}°</span>
        <button
          type="button"
          onClick={() => onRotation(rotation + 90)}
          className="size-9 rounded-full border border-[#ded9d1] text-[#444] hover:bg-black/5 active:scale-[0.96] transition-all flex items-center justify-center"
          aria-label="Rotate +90°"
          title="Rotate +90°"
        >
          <RotateCcw className="size-4 -scale-x-100" strokeWidth={2} />
        </button>
      </div>
      <p className="text-[#9e9e9e] text-center" style={{ fontSize: 11 }}>Drag to move · Live preview on the watch</p>
    </div>
  );
}

function WristImage({
  src, show, scale = 100, rotation = 0, offsetX = 0, offsetY = 0, onDrag, baseSize,
}: {
  src: string | null; show: boolean; scale?: number; rotation?: number;
  offsetX?: number; offsetY?: number; onDrag?: (x: number, y: number) => void; baseSize: number;
}) {
  const dragRef = useRef({ x: 0, y: 0, ox: 0, oy: 0, active: false });
  if (!src) return null;
  const onPointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!onDrag) return;
    (e.currentTarget as HTMLImageElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offsetX, oy: offsetY, active: true };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!dragRef.current.active || !onDrag) return;
    const dxPct = ((e.clientX - dragRef.current.x) / baseSize) * 100;
    const dyPct = ((e.clientY - dragRef.current.y) / baseSize) * 100;
    const clamp = (v: number) => Math.max(-150, Math.min(150, v));
    onDrag(clamp(dragRef.current.ox + dxPct), clamp(dragRef.current.oy + dyPct));
  };
  const onPointerUp = (e: React.PointerEvent<HTMLImageElement>) => {
    dragRef.current.active = false;
    try { (e.currentTarget as HTMLImageElement).releasePointerCapture(e.pointerId); } catch {}
  };
  return (
    <img
      src={src}
      alt="wrist"
      draggable={false}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: baseSize,
        height: "auto",
        transform: `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%) scale(${scale / 100}) rotate(${rotation}deg)`,
        transformOrigin: "center",
        zIndex: 0,
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
        cursor: show && onDrag ? "grab" : undefined,
        touchAction: "none",
        userSelect: "none",
      }}
    />
  );
}

function ExtrasPillRow({
  extras,
  className = "",
}: {
  extras: string[];
  className?: string;
}) {
  return (
    <></>
  );
}

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

function Section({ title, hint, children, info, onInfoClick, collapsible = false, defaultOpen = false }: {
  title: string; hint?: string; children: React.ReactNode; info?: React.ReactNode;
  onInfoClick?: (payload: { title: string; content: React.ReactNode }) => void;
  collapsible?: boolean; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!collapsible || defaultOpen);
  const rootRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    const wasOpen = open;
    setOpen(!wasOpen);
    if (!wasOpen) {
      // After expanding: wait 1s (let max-height/opacity transition finish + DOM settle so the new
      // page height is accurate), then smooth-scroll all the way to the bottom.
      setTimeout(() => {
        const lenis = (window as unknown as {
          __lenis?: {
            scrollTo: (target: Element | number, opts?: { duration?: number; lock?: boolean }) => void;
            resize?: () => void;
          };
        }).__lenis;
        // Recompute the absolute page bottom right before scrolling — the collapse animation just
        // changed the document height.
        const docHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        );
        const targetY = Math.max(0, docHeight - window.innerHeight);
        if (lenis) {
          // Refresh Lenis's cached dimensions so it knows the new scroll limit, then scroll to a
          // number target (Lenis 1.3's scrollTo doesn't accept a "bottom" keyword — strings are
          // treated as selectors and silently fail).
          lenis.resize?.();
          lenis.scrollTo(targetY, { duration: 0.9, lock: true });
        } else {
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }, 1000);
    }
  };
  return (
    <div ref={rootRef}>
      <div
        className="bg-white/80 border border-[rgba(222,217,209,0.9)] rounded-[24px] w-full"
        style={{ boxShadow: "0px 8px 12px rgba(0,0,0,0.04)" }}
      >
        <div className={`px-6 ${collapsible && !open ? "py-4" : "pt-5 pb-1"} flex items-center justify-between gap-2`}>
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="text-[#141414] tracking-[-0.8px]" style={{ fontSize: 20, fontWeight: 700 }}>{title}</span>
            {hint && <span className="text-[#9e9e9e]" style={{ fontSize: 13, fontWeight: 600 }}>{hint}</span>}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {info && (
              <button
                type="button"
                onClick={() => onInfoClick?.({ title, content: info })}
                className="size-7 rounded-full border border-[#a39787] text-[#6d6354] hover:text-[#141414] hover:border-[#555] transition-all flex items-center justify-center"
                aria-label={`About ${title}`}
              >
                <Info className="size-3.5" />
              </button>
            )}
            {collapsible && (
              <button
                type="button"
                onClick={handleToggle}
                aria-expanded={open}
                aria-label={open ? `Collapse ${title}` : `Expand ${title}`}
                className="size-7 rounded-full border border-[#a39787] text-[#6d6354] hover:text-[#141414] hover:border-[#555] transition-all flex items-center justify-center"
              >
                {open ? <Minus className="size-3.5" strokeWidth={2.5} /> : <Plus className="size-3.5" strokeWidth={2.5} />}
              </button>
            )}
          </div>
        </div>
        {/* Keep children mounted so the collapse/expand animation runs both directions */}
        <div
          style={{
            maxHeight: (!collapsible || open) ? "5000px" : "0px",
            opacity: (!collapsible || open) ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.5s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
          }}
        >
          <div className="px-6 pb-6 pt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

// ── PREVIEW INFO PANEL ─────────────────────────────────────────────────────
// Shown in the preview area (in place of watch + wrist) when a Section's info button is clicked.
function PreviewInfoPanel({ title, content, onBack }: {
  title: string; content: React.ReactNode; onBack: () => void;
}) {
  return (
    <div className="info-scroll w-full h-full overflow-auto bg-[#faf9f6] border border-[rgba(222,217,209,0.9)] rounded-[24px]" style={{ boxShadow: "0px 8px 12px rgba(0,0,0,0.04)" }}>
      <div className="px-6 pt-5 pb-2 flex items-center justify-between gap-2 sticky top-0 bg-[#faf9f6] z-10">
        <span className="text-[#141414] tracking-[-0.6px]" style={{ fontSize: 20, fontWeight: 700 }}>{title}</span>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 text-[#9e9e9e] hover:text-[#141414] transition-colors flex-shrink-0" style={{ fontSize: 13, fontWeight: 600 }}>
          <span>←</span><span>Back</span>
        </button>
      </div>
      <div className="px-6 pb-6 pt-3">{content}</div>
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
            className={`relative flex flex-col items-center justify-center min-h-[42px] px-4 py-1.5 rounded-full border transition-all ${
              active ? "bg-[#111] text-white border-[#111] shadow-[0px_8px_12px_rgba(0,0,0,0.14)]" : "bg-white text-[#141414] border-[#ded9d1] hover:border-[#111]"
            }`}
            style={{ fontSize: 15 }}
          >
            {o.isNew && (
              <span
                className={`absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full text-[8px] font-bold tracking-wider ${
                  active ? "bg-[#b7121f] text-white" : "bg-[#b7121f] text-white"
                }`}
              >
                NEW
              </span>
            )}
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
  // If ANY swatch in this row has a caption (a price OR an N/A), reserve caption space on EVERY swatch
  // so they all align vertically. If no swatch ever has a caption, drop the caption span entirely so
  // the layout looks identical to the Main Strap (clean centered swatch + label).
  const rowHasCaption = options.some((o) => o.price && o.price.length > 0) || disabledIds.length > 0;
  return (
    <div className="grid gap-x-2 gap-y-8" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))" }}>
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
            className={`flex flex-col items-center justify-center gap-1 ${rowHasCaption ? "h-[116px]" : "h-[100px]"} px-1 rounded-xl transition ${
              isColorBlocked ? "cursor-not-allowed" : isDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-black/5"
            }`}
          >
            <div
              className={`relative rounded-full size-[50px] shadow-[inset_0px_-2.9px_5.8px_rgba(0,0,0,0.08),inset_0px_2.9px_5.8px_rgba(255,255,255,0.18)] ${
                isColorBlocked
                  ? "ring-[1.5px] ring-[#b8362c]/55 grayscale opacity-55"
                  : sel ? "ring-2 ring-offset-2 ring-[#111]" : "ring-1 ring-black/10"
              }`}
              style={{ background: o.color }}
            >
              {sel && <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white shadow ring-1 ring-black/30" />}
              {/* Forbidden indicator — diagonal slash inset slightly from the swatch edge */}
              {isColorBlocked && (
                <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 50 50" aria-hidden="true">
                  <line x1="10" y1="10" x2="40" y2="40" stroke="#b8362c" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />
                </svg>
              )}
            </div>
            <span className="uppercase text-[#181612] text-center mt-2" style={{ fontSize: 12, fontWeight: 600 }}>{o.label}</span>
            {/* Caption — rendered only on rows that need it. When any swatch in the row has a caption,
                all swatches reserve the space (min-h) so positions stay aligned. */}
            {rowHasCaption && (
              <span
                className={`text-center leading-tight min-h-[12px] ${isColorBlocked ? "text-[#b8362c]" : "text-[#9e9e9e]"}`}
                style={{ fontSize: 9, fontWeight: isColorBlocked ? 700 : 600 }}
              >
                {isColorBlocked ? "N/A" : (o.price ?? "")}
              </span>
            )}
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

function Strap({ width, height, color, material = "rubber", position, flatTip = false }: {
  width: number; height: number; color: string; material?: string; position: "top" | "bottom"; flatTip?: boolean;
}) {
  const innerRadius = 10;
  // When flatTip is on (e.g. compactStrap for the wrist comparison view), the outer
  // end of the strap is a square cut instead of a half-circle — looks like the strap
  // is folded straight down behind the wrist, not curling out into the air.
  const tipRadius = flatTip ? innerRadius : width / 2;
  const radius = position === "top"
    ? `${tipRadius}px ${tipRadius}px ${innerRadius}px ${innerRadius}px`
    : `${innerRadius}px ${innerRadius}px ${tipRadius}px ${tipRadius}px`;

  if (material === "rubber") {
    return (
      <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: color, willChange: "height", transition: "height 0.5s cubic-bezier(0.32, 0.72, 0, 1), border-radius 0.5s cubic-bezier(0.32, 0.72, 0, 1)", boxShadow: "inset 0 -3px 7px rgba(0,0,0,0.30), inset 4px 0 9px rgba(0,0,0,0.22), inset -4px 0 9px rgba(0,0,0,0.22), 0 10px 22px rgba(0,0,0,0.32)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit", background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.18) 100%)" }} />
      </div>
    );
  }
  if (material === "leather") {
    const grain = "repeating-linear-gradient(47deg, rgba(0,0,0,0.14) 0px, rgba(0,0,0,0.14) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-47deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 6px)";
    return (
      <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: `${grain}, ${color}`, willChange: "height", transition: "height 0.5s cubic-bezier(0.32, 0.72, 0, 1), border-radius 0.5s cubic-bezier(0.32, 0.72, 0, 1)", boxShadow: "inset -3px -4px 3px rgba(0,0,0,0.38), inset 3px 3px 2px rgba(255,255,255,0.22), 0 10px 22px rgba(0,0,0,0.32)" }}>
        <div aria-hidden="true" className="absolute pointer-events-none" style={{ inset: 5, borderRadius: "inherit", border: "1.5px dashed rgba(210,185,150,0.72)", boxShadow: "0 0 5px rgba(0,0,0,0.55)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit", background: "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0) 32%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.28) 100%)" }} />
      </div>
    );
  }
  const ribSpacing = 8;
  const ribCount = Math.ceil(height / ribSpacing) + 1;
  return (
    <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: color, willChange: "height", transition: "height 0.5s cubic-bezier(0.32, 0.72, 0, 1), border-radius 0.5s cubic-bezier(0.32, 0.72, 0, 1)", boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.18), inset -3px -4px 6px rgba(0,0,0,0.45), 0 10px 22px rgba(0,0,0,0.32)" }}>
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
  dialImageScale = 100, dialImageRotation = 0, dialImageOffsetX = 0, dialImageOffsetY = 0,
  onDialImageDrag, compactStrap = false,
}: {
  caseColor: string; caseSize: string; dialColor: string; dialImage: string | null;
  handsColor: string; secondsColor: string; markerColor: string; markerType: string;
  strapColor: string; strapMaterial: string; scale?: number;
  dialImageScale?: number; dialImageRotation?: number;
  dialImageOffsetX?: number; dialImageOffsetY?: number;
  onDialImageDrag?: (offsetX: number, offsetY: number) => void;
  compactStrap?: boolean;
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
  // Strap lengths shrink as the case grows so the watch's TOTAL EXTENT (top of top strap
  // to bottom of bottom strap) stays constant across all case sizes.
  //   • Normal mode: total anchored to the largest case (64mm) — original 1.10/1.40 ratio.
  //   • Compact mode (Compare Size): total anchored to the SMALLEST case (40mm) with the
  //     compact 0.22 ratio, so straps appear tucked behind the wrist consistently. Bigger
  //     cases get progressively shorter straps to keep the top/bottom extents identical.
  const maxCs = (CASE_SIZE_PX["64"] ?? 220) * scale;
  const minCs = (CASE_SIZE_PX["40"] ?? 180) * scale;
  const TARGET_TOTAL   = maxCs * 4.34;  // total extent (straps + case) constant across sizes — tuned so each strap ≈ 500px at 64mm/1.32 scale
  const TARGET_COMPACT = minCs * 1.34;  // compact total for wrist-compare mode
  const strapsTotal    = Math.max(0, TARGET_TOTAL - cs * 0.9);
  const compactStrapH  = Math.max(0, (TARGET_COMPACT - cs * 0.9) / 2);
  const strapTopH = compactStrap ? Math.round(compactStrapH) : Math.round(strapsTotal / 2);
  const strapBotH = compactStrap ? Math.round(compactStrapH) : Math.round(strapsTotal / 2);
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
        <Strap width={strapW} height={strapTopH} color={strapColor} material={strapMaterial} position="top" flatTip={compactStrap} />
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
            {dialImage && (() => {
              const dragRef = { x: 0, y: 0, ox: dialImageOffsetX, oy: dialImageOffsetY, active: false };
              const onPointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
                if (!onDialImageDrag) return;
                (e.currentTarget as HTMLImageElement).setPointerCapture(e.pointerId);
                dragRef.x = e.clientX; dragRef.y = e.clientY;
                dragRef.ox = dialImageOffsetX; dragRef.oy = dialImageOffsetY;
                dragRef.active = true;
              };
              const onPointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
                if (!dragRef.active || !onDialImageDrag) return;
                const dialPx = (e.currentTarget as HTMLImageElement).clientWidth || 1;
                const dxPct = ((e.clientX - dragRef.x) / dialPx) * 100;
                const dyPct = ((e.clientY - dragRef.y) / dialPx) * 100;
                const clamp = (v: number) => Math.max(-60, Math.min(60, v));
                onDialImageDrag(clamp(dragRef.ox + dxPct), clamp(dragRef.oy + dyPct));
              };
              const onPointerUp = (e: React.PointerEvent<HTMLImageElement>) => {
                dragRef.active = false;
                try { (e.currentTarget as HTMLImageElement).releasePointerCapture(e.pointerId); } catch {}
              };
              return (
                <img
                  src={dialImage}
                  alt="dial"
                  draggable={false}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  className="absolute inset-0 size-full object-cover select-none"
                  style={{
                    cursor: onDialImageDrag ? "grab" : undefined,
                    transform: `translate(${dialImageOffsetX}%, ${dialImageOffsetY}%) scale(${dialImageScale / 100}) rotate(${dialImageRotation}deg)`,
                    transformOrigin: "center center",
                    touchAction: "none",
                  }}
                />
              );
            })()}
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
        <Strap width={strapW} height={strapBotH} color={strapColor} material={strapMaterial} position="bottom" flatTip={compactStrap} />
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
<></>
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
  const [dialImageScale,    setDialImageScale]    = useState<number>(100);
  const [dialImageRotation, setDialImageRotation] = useState<number>(0);
  const [dialImageOffsetX,  setDialImageOffsetX]  = useState<number>(0);
  const [dialImageOffsetY,  setDialImageOffsetY]  = useState<number>(0);
  const resetDialImageTransform = () => {
    setDialImageScale(100);
    setDialImageRotation(0);
    setDialImageOffsetX(0);
    setDialImageOffsetY(0);
  };
  const [markerType,    setMarkerType]    = useState("dots");
  const [markerColor,   setMarkerColor]   = useState("black");
  const [handsColor,    setHandsColor]    = useState("silver");
  const [secondsColor,  setSecondsColor]  = useState("red");
  const [primaryStrap,  setPrimaryStrap]  = useState("rubber-black");
  const [extraStraps,   setExtraStraps]   = useState<string[]>([]);
  const [showReview,    setShowReview]    = useState(false);
  const [showSuccess,   setShowSuccess]   = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  // Increments on every Reset click — re-keys the icon to retrigger the one-shot spin animation.
  const [resetTick, setResetTick] = useState(0);
  const handleResetClick = () => {
    setResetTick((t) => t + 1);
    setResetConfirmClosing(false);
    setShowResetConfirm(true);
  };
  // Drives the exit animation for the confirm modal (Cancel / backdrop click / Reset confirm).
  const [resetConfirmClosing, setResetConfirmClosing] = useState(false);
  const closeResetConfirm = () => {
    setResetConfirmClosing(true);
    setTimeout(() => {
      setShowResetConfirm(false);
      setResetConfirmClosing(false);
    }, 300);
  };
  const [showWrist,     setShowWrist]     = useState(false);
  const [activeInfo,    setActiveInfo]    = useState<{ title: string; content: React.ReactNode } | null>(null);
  // Toggle: clicking the same section's info button while open will close the panel.
  const handleInfoClick = (payload: { title: string; content: React.ReactNode }) => {
    setActiveInfo((prev) => (prev?.title === payload.title ? null : payload));
  };
  // Keep the last info payload mounted briefly after closing so the exit transition can play.
  const [lastInfo, setLastInfo] = useState<{ title: string; content: React.ReactNode } | null>(null);
  useEffect(() => {
    if (activeInfo) { setLastInfo(activeInfo); return; }
    const t = setTimeout(() => setLastInfo(null), 1720);
    return () => clearTimeout(t);
  }, [activeInfo]);
  const [wristImage,    setWristImage]    = useState<string | null>(null);
  const [wristImageName, setWristImageName] = useState<string>("");
  const [wristImageScale,    setWristImageScale]    = useState<number>(100);
  const [wristImageRotation, setWristImageRotation] = useState<number>(0);
  const [wristImageOffsetX,  setWristImageOffsetX]  = useState<number>(0);
  const [wristImageOffsetY,  setWristImageOffsetY]  = useState<number>(0);
  const resetWristImageTransform = () => {
    setWristImageScale(100);
    setWristImageRotation(0);
    setWristImageOffsetX(0);
    setWristImageOffsetY(0);
  };

  const [showZoom,      setShowZoom]      = useState(false);
  const [hideBuyNow,    setHideBuyNow]    = useState(false);
  const [strapTab,      setStrapTab]      = useState("rubber");

  const fileRef            = useRef<HTMLInputElement>(null);
  const wristFileRef       = useRef<HTMLInputElement>(null);
  const wristImageRef      = useRef<string | null>(null);
  const wristAdjustRef     = useRef<HTMLDivElement>(null);
  useEffect(() => { return () => { if (wristImageRef.current) URL.revokeObjectURL(wristImageRef.current); }; }, []);
  const handleWristFile = (file: File | null) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    if (wristImageRef.current) URL.revokeObjectURL(wristImageRef.current);
    wristImageRef.current = url;
    setWristImage(url);
    setWristImageName(file.name);
    // Auto-enable Compare Size so the new photo is visible immediately on the preview.
    setShowWrist(true);
    // Auto-scroll DOWN to the Adjust panel — which only appears after upload — so the user can tweak right away.
    requestAnimationFrame(() => {
      wristAdjustRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };
  const clearWristImage = () => {
    if (wristImageRef.current) { URL.revokeObjectURL(wristImageRef.current); wristImageRef.current = null; }
    setWristImage(null);
    setWristImageName("");
    resetWristImageTransform();
  };
  const dialImageRef       = useRef<string | null>(null);
  const buyNowSentinelRef  = useRef<HTMLDivElement>(null);
  useEffect(() => { return () => { if (dialImageRef.current) URL.revokeObjectURL(dialImageRef.current); }; }, []);

  // Smooth scroll (Lenis) — ~400ms inertia, slightly snappier than Apple's default smooth scroll feel.
  // Expose the instance on window so other components (e.g. Section auto-scroll on expand) can call
  // lenis.scrollTo() — plain window.scrollTo() is intercepted by Lenis and won't move the page.
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Lock body scroll while mobile preview is in zoom (fullscreen) mode
  useEffect(() => {
    if (!showZoom) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [showZoom]);

  // Fade the in-preview BUY NOW button when the page-bottom Review & Order area scrolls into view
  useEffect(() => {
    const el = buyNowSentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => setHideBuyNow(entries[0]?.isIntersecting ?? false),
      { rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
      currEl.style.transition = "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
      currEl.style.transform = "scale(1)";
    };
    flip(watchRefs1, "50% 50%");
    flip(watchRefs2, "50% 50%");
  }, [caseSize]);

  const imageUploaded = !!dialImage;

  const isDefault =
    caseSize === "40" &&
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
    resetDialImageTransform();
  };

  const handleReset = () => {
    if (dialImageRef.current) { URL.revokeObjectURL(dialImageRef.current); dialImageRef.current = null; }
    if (wristImageRef.current) { URL.revokeObjectURL(wristImageRef.current); wristImageRef.current = null; }
    setCaseSize("40"); setCaseColor("black"); setDialTab("color"); setDialColor("cream");
    setDialImage(null); setDialImageName(""); setMarkerType("dots"); setMarkerColor("black");
    setHandsColor("silver"); setSecondsColor("red"); setPrimaryStrap("rubber-black"); setExtraStraps([]); setStrapTab("rubber");
    setWristImage(null); setWristImageName(""); setShowWrist(false);
    resetDialImageTransform();
    resetWristImageTransform();
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
      <div><strong className="text-[#181612]">44mm</strong><span className="text-[#737373]"> — The most popular size. Balanced visibility and comfort for most wrists.</span></div>
      <div><strong className="text-[#181612]">49mm (+$15)</strong><span className="text-[#737373]"> — Bold statement sizing. Best for larger wrists.</span></div>
      <div><strong className="text-[#181612]">64mm (+$30) · NEW</strong><span className="text-[#737373]"> — Oversized statement. Maximum wrist presence.</span></div>
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

      {/* MOBILE: heading + Reset + Zoom — sits above the sticky preview so it scrolls away naturally */}
      <div className="lg:hidden px-4 pt-4 pb-3" style={{ background: "#f2eee8" }}>
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-[#141414] tracking-[-1.2px]" style={{ fontSize: 24, fontWeight: 800 }}>
            Build Your Watch
          </h1>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetClick}
              aria-hidden={isDefault}
              tabIndex={isDefault ? -1 : 0}
              className={`group flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-[#ddd5c8] text-[#666] hover:text-[#141414] hover:border-[#555] hover:bg-black/5 active:bg-black/5 active:scale-[0.97] transition-all flex-shrink-0 ${isDefault ? "opacity-0 pointer-events-none" : ""}`}
              aria-label="Reset all customizations"
            >
              <RotateCcw key={resetTick} className={`size-3.5 transition-transform duration-500 group-hover:rotate-[-200deg] ${resetTick > 0 ? "reset-click-spin" : ""}`} />
              <span style={{ fontSize: 13, fontWeight: 700 }}>Reset</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (!showZoom) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
                setShowZoom((v) => !v);
              }}
              aria-label={showZoom ? "Collapse preview" : "Zoom preview"}
              className="size-9 rounded-full border border-[#ddd5c8] text-[#666] hover:text-[#141414] hover:border-[#555] hover:bg-black/5 active:bg-black/5 transition-all flex items-center justify-center flex-shrink-0"
            >
              {showZoom ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE: sticky watch preview */}
      <div className="lg:hidden sticky top-0 z-20" style={{ background: "#f2eee8" }}>
        <div
          style={{
            position: "relative",
            height: showZoom ? "calc(100vh - 80px)" : 300,
            overflow: "hidden",
            borderRadius: showZoom ? "0px" : "0 0 32px 32px",
            borderLeft: "2px solid rgba(255,255,255,0.88)",
            borderRight: "2px solid rgba(255,255,255,0.88)",
            borderBottom: showZoom ? "none" : "2px solid rgba(255,255,255,0.88)",
            boxShadow: showZoom ? "none" : "0 12px 32px rgba(0,0,0,0.10)",
            willChange: "height, border-radius",
            transition: "height 0.6s cubic-bezier(0.32, 0.72, 0, 1), border-radius 0.6s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.6s cubic-bezier(0.32, 0.72, 0, 1)",
          }}
        >
          {/* Watch view layer — stays in place; info card layer (z-60) covers it when active */}
          <div
            className="absolute inset-0"
            style={{
              pointerEvents: activeInfo ? "none" : "auto",
            }}
          >
            {/* Default Compare Size reference — hand outline. Hidden when user supplies their own photo. */}
            <WristOutline show={showWrist && !wristImage} baseSize={520} />
            {/* User-uploaded wrist photo (mobile) — overrides the outline */}
            <WristImage
              src={wristImage} show={showWrist} baseSize={400}
              scale={wristImageScale} rotation={wristImageRotation}
              offsetX={wristImageOffsetX} offsetY={wristImageOffsetY}
              onDrag={(x, y) => { setWristImageOffsetX(x); setWristImageOffsetY(y); }}
            />

            {/* Watch cluster — all watches share the same absolute-centered position (mirrors desktop FLIP setup) */}
            {CASE_SIZES.map((size) => {
              const isActive = caseSize === size.id;
              return (
                <div
                  key={size.id}
                  className="flex justify-center"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    visibility: isActive ? "visible" : "hidden",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div ref={(el) => { if (el) watchRefs2.current.set(size.id, el); else watchRefs2.current.delete(size.id); }}>
                    <WatchPreview
                      caseColor={caseColorHex} caseSize={size.id} dialColor={dialColorHex}
                      dialImage={dialImage} handsColor={handsColorHex} secondsColor={secondsColorHex}
                      markerColor={markerColorHex} markerType={markerType} strapColor={strapColorHex}
                      strapMaterial={strapMaterial} scale={0.75}
                      compactStrap={showWrist}
                      dialImageScale={dialImageScale} dialImageRotation={dialImageRotation}
                      dialImageOffsetX={dialImageOffsetX} dialImageOffsetY={dialImageOffsetY}
                      onDialImageDrag={(x, y) => { setDialImageOffsetX(x); setDialImageOffsetY(y); }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Row 1 — Price (top-left) + GMT (top-right) */}
            <div style={{ position: "absolute", left: 18, top: 16, zIndex: 30 }}>
              <div className="uppercase text-[#737373] tracking-[1.4px]" style={{ fontSize: 10, fontWeight: 700 }}>Price</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[#111111]" style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>${totalPrice}</span>
                <span className="text-[#737373]" style={{ fontSize: 10, fontWeight: 700 }}>USD</span>
              </div>
            </div>
            <TimeDisplay style={{ position: "absolute", right: 16, top: 16, zIndex: 30 }} />

            {/* Row 2 — Review and Order (bottom-left) + Compare Size (bottom-right) */}
            <button
              type="button"
              onClick={() => setShowReview(true)}
              className="flex items-center"
              style={{
                position: "absolute", left: 18, bottom: 16, zIndex: 30,
                background: "#111111", color: "#ffffff", borderRadius: 999, height: 30, padding: "0 18px",
                fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", border: "none", cursor: "pointer",
                opacity: hideBuyNow ? 0 : 1,
                pointerEvents: hideBuyNow ? "none" : "auto",
                transition: "opacity 0.3s ease",
              }}
            >
              Review and Order
            </button>
            <button
              type="button"
              onClick={() => setShowWrist((v) => !v)}
              aria-pressed={showWrist}
              className={`absolute bottom-4 right-3 flex items-center justify-center h-[30px] px-3 rounded-full border transition-all ${
                showWrist
                  ? "bg-[#111] text-white border-[#111]"
                  : "bg-white/80 backdrop-blur-sm text-[#666] border-[#ddd5c8] hover:text-[#141414]"
              }`}
              style={{ fontSize: 12, fontWeight: 700, zIndex: 30 }}
            >
              Compare size
            </button>
          </div>

          {/* Info panel layer — wrapper always mounted so the initial translateY(-100%) commits to DOM
              before activeInfo flips. Inner content uses activeInfo when open, falls back to lastInfo during exit. */}
          <div
            className="absolute inset-0 z-[60]"
            style={{
              transform: activeInfo ? "translateX(0%)" : "translateX(100%)",
              opacity: activeInfo ? 1 : 0,
              transition: "transform 0.7s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
              pointerEvents: activeInfo ? "auto" : "none",
              willChange: "transform",
            }}
          >
            {(activeInfo ?? lastInfo) && (
              <PreviewInfoPanel
                title={(activeInfo ?? lastInfo)!.title}
                content={(activeInfo ?? lastInfo)!.content}
                onBack={() => setActiveInfo(null)}
              />
            )}
          </div>
        </div>
      </div>

      {/* ── Page layout: left sticky, right flows with page scroll ── */}
      <div className="w-full" style={{ background: "#F2EEE8" }}>
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 flex flex-col lg:flex-row gap-0 lg:gap-8">

          {/* ── LEFT: sticky watch panel — watch + time only; heading moved above category sections ── */}
          <div
            className="hidden lg:flex lg:w-[46%] flex-shrink-0 flex-col items-center justify-center py-10 pt-16 relative"
            style={{ position: "sticky", top: 64, height: "calc(100vh - 64px)", alignSelf: "flex-start" }}
          >
            {/* Watch view — stays in place. The info card layer has an opaque bg and slides down OVER it,
                so there is no need to also slide the watch/wrist away. */}
            <div
              className="flex flex-col items-center gap-3 w-full"
              style={{
                pointerEvents: activeInfo ? "none" : "auto",
              }}
            >
                {/* Outer wrapper breaks out of LEFT panel — wider than panel so wrist can extend without being cropped */}
                <div
                  className="relative"
                  style={{
                    width: "calc(100% + 200px)",
                    marginLeft: "-100px",
                    marginRight: "-100px",
                    overflow: "visible",
                  }}
                >
                  {/* Default Compare Size reference — hand outline. Hidden when user supplies their own photo. */}
                  <WristOutline show={showWrist && !wristImage} baseSize={1100} />
                  {/* User-uploaded wrist photo (desktop) — overrides the outline */}
                  <WristImage
                    src={wristImage} show={showWrist} baseSize={800}
                    scale={wristImageScale} rotation={wristImageRotation}
                    offsetX={wristImageOffsetX} offsetY={wristImageOffsetY}
                    onDrag={(x, y) => { setWristImageOffsetX(x); setWristImageOffsetY(y); }}
                  />
                  {/* Active watch is in flow (drives wrapper's natural height). Inactive ones are
                      absolute at the SAME top:0 position with the same flex centering — so swapping
                      active produces no visible layout shift, only a FLIP scale of the new watch. */}
                  {CASE_SIZES.map((size) => {
                    const isActive = caseSize === size.id;
                    return (
                      <div
                        key={size.id}
                        className="flex justify-center"
                        style={isActive
                          ? { position: "relative", zIndex: 1, pointerEvents: "none" }
                          : { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, visibility: "hidden", pointerEvents: "none" }
                        }
                      >
                        <div
                          ref={(el) => { if (el) watchRefs1.current.set(size.id, el); else watchRefs1.current.delete(size.id); }}
                          style={{ pointerEvents: "auto" }}
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
                            scale={1.32}
                            compactStrap={showWrist}
                            dialImageScale={dialImageScale}
                            dialImageRotation={dialImageRotation}
                            dialImageOffsetX={dialImageOffsetX}
                            dialImageOffsetY={dialImageOffsetY}
                            onDialImageDrag={(x, y) => { setDialImageOffsetX(x); setDialImageOffsetY(y); }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <ExtrasPillRow extras={extraStraps} className="flex-shrink-0" />
                <TimeDisplay className="flex-shrink-0" />
              </div>
              {/* Bottom toolbar — stays in place; info card layer (z-60) covers it when active */}
              <div
                className="absolute flex items-end justify-between gap-4"
                style={{
                  bottom: 64, left: 20, right: 20, zIndex: 50,
                  pointerEvents: activeInfo ? "none" : "auto",
                }}
              >
                <div>
                  <p className="text-[#9e9e9e] uppercase tracking-widest" style={{ fontSize: 9, fontWeight: 700 }}>Price</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-[#141414] tracking-tighter" style={{ fontSize: 36, fontWeight: 800 }}>${totalPrice}</span>
                    <span className="text-[#737373]" style={{ fontSize: 11, fontWeight: 600 }}>USD</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWrist((w) => !w)}
                  aria-pressed={showWrist}
                  className={`w-[160px] flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-full border transition-all flex-shrink-0 ${
                    showWrist
                      ? "bg-[#111] text-white border-[#111]"
                      : "border-[#ddd5c8] bg-white/70 backdrop-blur-sm text-[#666] hover:text-[#141414] hover:border-[#555] hover:bg-white"
                  }`}
                  aria-label="Toggle wrist photo overlay"
                >
                  <span style={{ fontSize: 13, fontWeight: 700 }}>Compare size</span>
                </button>
              </div>

            {/* Info panel layer — wrapper always mounted; uses the full LEFT panel area so the card has
                maximum vertical room for content scrolling */}
            <div
              className="absolute inset-0 z-[60] p-4 pt-20"
              style={{
                transform: activeInfo ? "translateX(0%)" : "translateX(120%)",
                opacity: activeInfo ? 1 : 0,
                transition: "transform 0.7s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
                pointerEvents: activeInfo ? "auto" : "none",
                willChange: "transform",
              }}
            >
              {(activeInfo ?? lastInfo) && (
                <PreviewInfoPanel
                  title={(activeInfo ?? lastInfo)!.title}
                  content={(activeInfo ?? lastInfo)!.content}
                  onBack={() => setActiveInfo(null)}
                />
              )}
            </div>
          </div>

          {/* ── RIGHT: natural page flow. relative+z-10 lifts the cards above any wrist photo overflow,
              but the column itself has NO bg so the photo shows through the spacing/gaps between cards. ── */}
          <div className="lg:w-[54%] flex-shrink-0 lg:pr-1 relative z-10">
            <div className="flex flex-col gap-3 pt-4 pb-4 lg:pt-20">

              {/* Heading + Reset — desktop only (mobile renders its own copy above the sticky preview) */}
              <div className="hidden lg:flex items-center justify-between gap-3 px-1 mb-2">
                <h1
                  className="text-[#141414] tracking-[-1.5px]"
                  style={{ fontSize: 24, fontWeight: 800 }}
                >
                  Build Your Watch
                </h1>
                <button
                  type="button"
                  onClick={handleResetClick}
                  aria-hidden={isDefault}
                  tabIndex={isDefault ? -1 : 0}
                  className={`group flex items-center gap-1.5 h-9 px-3.5 rounded-full border border-[#ddd5c8] text-[#666] hover:text-[#141414] hover:border-[#555] hover:bg-black/5 active:bg-black/5 active:scale-[0.97] transition-all flex-shrink-0 ${isDefault ? "opacity-0 pointer-events-none" : ""}`}
                  aria-label="Reset all customizations"
                >
                  <RotateCcw key={resetTick} className={`size-3.5 transition-transform duration-500 group-hover:rotate-[-200deg] ${resetTick > 0 ? "reset-click-spin" : ""}`} />
                  <span style={{ fontSize: 13, fontWeight: 700 }}>Reset</span>
                </button>
              </div>

              <Section title="Case Size" info={caseSizeInfoPanel} onInfoClick={handleInfoClick}>
                {/* Mobile: card grid (2x2 for 4 sizes) */}
                <div className="lg:hidden grid grid-cols-2 gap-3">
                  {CASE_SIZES.map((size) => {
                    const active = caseSize === size.id;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setCaseSize(size.id)}
                        className={`relative h-20 rounded-[20px] border transition-all flex items-center justify-center ${
                          active
                            ? "bg-[#111] text-white border-[#111] shadow-[0px_8px_12px_rgba(0,0,0,0.14)]"
                            : "bg-white text-[#141414] border-[#ded9d1] hover:border-[#111]"
                        }`}
                      >
                        {size.isNew && (
                          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider bg-[#b7121f] text-white">
                            NEW
                          </span>
                        )}
                        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px" }}>{size.label}</span>
                        {size.price && size.price !== "Included" && (
                          <span
                            className={`absolute bottom-2 ${active ? "text-white/60" : "text-[#9e9e9e]"}`}
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
                {/* Sizing guide — wrap a tape/string around the wrist for ~10s to measure, then pick a size from this guide */}
              </Section>

              <Section title="Case Color" info={caseColorInfoPanel} onInfoClick={handleInfoClick}>
                <SwatchRow options={CASE_COLORS} value={caseColor} onSelect={setCaseColor} />
              </Section>

              <Section title="Dial Face" info={dialFaceInfoPanel} onInfoClick={handleInfoClick}>
                <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-full p-1 flex w-full mb-4">
                  {(["color", "upload"] as const).map((t) => (
                    <button key={t} type="button" onClick={() => setDialTab(t)}
                      className={`flex-1 h-8 rounded-full transition ${dialTab === t ? "bg-white shadow-[0px_1px_3px_rgba(10,13,18,0.1)] text-[#414651]" : "text-[#717680]"}`}
                      style={{ fontSize: 13, fontWeight: 600 }}>
                      {t === "color" ? "Color" : (
                        <span className="flex items-center justify-center gap-1.5">
                          Upload image
                          <span className="mt-0.5 text-[#9e9e9e]" style={{ fontSize: 10, fontWeight: 600 }}>+$25</span>
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
                      <>
                        <div className="bg-white/75 border border-dashed border-[#bfb8ad] rounded-[10px] px-4 py-3 flex items-center gap-3">
                          <img src={dialImage} alt="uploaded dial" className="size-[72px] object-cover shadow-[2px_2px_4px_rgba(0,0,0,0.25)]" />
                          <div className="flex-1 text-center text-black tracking-[-0.04em] truncate" style={{ fontSize: 16 }}>{dialImageName || "uploaded.png"}</div>
                          <button type="button" onClick={clearImage} className="size-9 flex items-center justify-center text-[#33363F] hover:bg-black/5 rounded-full" aria-label="Remove image"><X className="size-4" strokeWidth={2.5} /></button>
                        </div>
                        {/* Instagram-style inline cropper — replaces the 4 sliders. Live preview on the watch. */}
                        <DialImageEditor
                          image={dialImage}
                          scale={dialImageScale}
                          rotation={dialImageRotation}
                          offsetX={dialImageOffsetX}
                          offsetY={dialImageOffsetY}
                          onScale={setDialImageScale}
                          onRotation={setDialImageRotation}
                          onOffsetX={setDialImageOffsetX}
                          onOffsetY={setDialImageOffsetY}
                          onResetTransform={resetDialImageTransform}
                        />
                      </>
                    ) : (
                      <button type="button" onClick={() => fileRef.current?.click()} className="bg-white/75 border border-dashed border-[#bfb8ad] rounded-[10px] px-5 py-5 flex items-center justify-center gap-3 text-black hover:bg-white" style={{ fontSize: 18 }}>
                        <Upload className="size-5" /> Choose File
                      </button>
                    )}
                    {!dialImage && <p className="text-[#9e9e9e]" style={{ fontSize: 13 }}>When an image is uploaded, hour markers become Empty.</p>}
                  </div>
                )}
              </Section>

              <Section title="Hour Marker Type" info={hourMarkerTypeInfoPanel} onInfoClick={handleInfoClick}>
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
                      { id: "empty",  preview: <CircleSlash className={`size-9 ${markerType === "empty" ? "text-white/80" : "text-black/40"}`} strokeWidth={1.5} /> },
                    ].map(({ id, preview }) => {
                      const label = HOUR_MARKER_TYPES.find((m) => m.id === id)?.label ?? id;
                      const active = markerType === id;
                      return (
                        <button key={id} type="button" onClick={() => setMarkerType(id)} className="flex flex-col gap-1.5 items-center w-full lg:w-auto">
                          <div className={`flex items-center justify-center w-full lg:w-[90px] h-20 lg:h-[100px] rounded-[20px] lg:rounded-[24px] transition ${active ? "bg-[#111] shadow-[0px_10px_12px_rgba(0,0,0,0.14)]" : "bg-white border border-[#ded9d1] hover:border-[#111]"}`}>
                            {preview}
                          </div>
                          <span className="text-[#272727]" style={{ fontSize: 14 }}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                {imageUploaded && (
                  <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f0ece4] border border-[#e2ddd1]" style={{ fontSize: 12 }}>
                    <Info className="size-3.5 text-[#888] flex-shrink-0" />
                    <span className="text-[#666]">Hour markers are hidden while a custom dial image is in use.</span>
                  </div>
                )}
              </Section>

              <Section title="Hour Marker Colors" info={hourMarkerColorInfoPanel} onInfoClick={handleInfoClick}>
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

              <Section title="Hands Color" info={handsColorInfoPanel} onInfoClick={handleInfoClick}>
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

              <Section title="Seconds Hand Color" info={secondsColorInfoPanel} onInfoClick={handleInfoClick}>
                <SwatchRow options={SECONDS_COLORS} value={secondsColor} onSelect={setSecondsColor} />
              </Section>

              {/* ── Main Strap: all materials grouped on one page; tap a swatch to set as primary ── */}
              <Section title="Main Strap" info={strapInfoPanel} onInfoClick={handleInfoClick}>
                <div className="flex flex-col gap-5">
                  {STRAP_GROUPS.map((group, idx) => (
                    <div key={group.id} className={idx > 0 ? "pt-5 border-t border-black/10" : ""}>
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-[#181612] uppercase tracking-[0.14em]" style={{ fontSize: 11, fontWeight: 700 }}>{group.label}</span>
                        <span className={`${group.price === "Included" ? "text-[#9e9e9e]" : "text-[#181612]"}`} style={{ fontSize: 11, fontWeight: 600 }}>{group.price}</span>
                      </div>
                      <div className="grid gap-x-2 gap-y-8" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))" }}>
                        {group.colors.map((o) => {
                          const isPrimary = primaryStrap === o.id;
                          return (
                            <button
                              key={o.id}
                              type="button"
                              onClick={() => setPrimaryStrap(o.id)}
                              className="flex flex-col items-center justify-center gap-1 h-[100px] px-1 rounded-xl transition hover:bg-black/5"
                            >
                              <div
                                className={`relative rounded-full size-[50px] shadow-[inset_0px_-2.9px_5.8px_rgba(0,0,0,0.08),inset_0px_2.9px_5.8px_rgba(255,255,255,0.18)] ${isPrimary ? "ring-2 ring-offset-2 ring-[#111]" : "ring-1 ring-black/10"}`}
                                style={{ background: o.color }}
                              >
                                {isPrimary && <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white shadow ring-1 ring-black/30" />}
                              </div>
                              <span className="uppercase text-[#181612] text-center mt-2" style={{ fontSize: 12, fontWeight: 600 }}>{o.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Selected indicator */}
              </Section>

              {/* ── Additional Straps: collapsible card (Section handles the +/− toggle in the header) ── */}
              <Section title="Additional Straps" collapsible>
                <p className="text-[#9e9e9e] mb-3 px-1" style={{ fontSize: 13 }}>Order extra straps to swap later. Each is sold separately and priced by material.</p>
                <div className="flex flex-col gap-5">
                      {STRAP_GROUPS.map((group, idx) => {
                        const perEach = extraStrapUnitPrice(group.colors[0]?.id ?? "");
                        return (
                          <div key={group.id} className={idx > 0 ? "pt-5 border-t border-black/10" : ""}>
                            <div className="flex items-center justify-between mb-2 px-1">
                              <span className="text-[#181612] uppercase tracking-[0.14em]" style={{ fontSize: 11, fontWeight: 700 }}>{group.label}</span>
                              <span className="text-[#181612]" style={{ fontSize: 11, fontWeight: 600 }}>+${perEach}/each</span>
                            </div>
                            <div className="grid gap-x-2 gap-y-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))" }}>
                              {group.colors.map((o) => {
                                const count = extraStraps.filter((x) => x === o.id).length;
                                const active = count > 0;
                                return (
                                  <div key={o.id} className="flex flex-col items-center gap-2 px-1">
                                    <div
                                      className={`relative rounded-full size-[50px] shadow-[inset_0px_-2.9px_5.8px_rgba(0,0,0,0.08),inset_0px_2.9px_5.8px_rgba(255,255,255,0.18)] ${active ? "ring-2 ring-offset-2 ring-[#111]" : "ring-1 ring-black/10"}`}
                                      style={{ background: o.color }}
                                    />
                                    <span className="uppercase text-[#181612] text-center" style={{ fontSize: 12, fontWeight: 600 }}>{o.label}</span>
                                    {/* Unified pill stepper — −/count/+ share one rounded border so the whole control fits the 72px grid cell while keeping tap targets workable on mobile */}
                                    <div className="inline-flex h-7 items-center rounded-full border border-[#ded9d1] bg-white overflow-hidden">
                                      <button
                                        type="button"
                                        onClick={() => removeOneExtraStrap(o.id)}
                                        disabled={count === 0}
                                        aria-label={`Remove one ${o.label}`}
                                        className="h-full px-2 text-[#444] hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent flex items-center transition"
                                      >
                                        <Minus className="size-3" strokeWidth={2.5} />
                                      </button>
                                      <span className="min-w-[14px] text-center text-[#181612] tabular-nums font-bold text-xs">{count}</span>
                                      <button
                                        type="button"
                                        onClick={() => addExtraStrap(o.id)}
                                        aria-label={`Add one ${o.label}`}
                                        className="h-full px-2 text-[#444] hover:bg-black/5 flex items-center transition"
                                      >
                                        <Plus className="size-3" strokeWidth={2.5} />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                  })}
                </div>
                {/* Extras total — styled like Main Strap's "Selected" indicator bar */}
                <div className={`mt-4 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-[#f0ece4] border border-[#e2ddd1] transition-opacity duration-200 ${extraStraps.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <span className="text-[#666] uppercase tracking-wider" style={{ fontSize: 10, fontWeight: 700 }}>Extras</span>
                  <span className="text-[#181612] flex-1" style={{ fontSize: 12, fontWeight: 600 }}>
                    {extraStraps.length} strap{extraStraps.length !== 1 ? "s" : ""} added
                  </span>
                  <span className="text-[#181612]" style={{ fontSize: 13, fontWeight: 700 }}>+${extraStrapTotal}</span>
                </div>
              </Section>

              {/* End-of-menu Review & Order — sits at the bottom of the menu flow (not sticky).
                  Doubles as the IntersectionObserver target that fades the in-preview BUY NOW when it enters view. */}
              <div ref={buyNowSentinelRef} className="mt-2">
                <button
                  type="button"
                  onClick={() => setShowReview(true)}
                  className="w-full rounded-full bg-[#111] text-white hover:bg-[#2a2a2a] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.03em", height: 52 }}
                >
                  <span>Review &amp; Order</span>
                  <span className="lg:hidden bg-white/15 px-3 py-1 rounded-full" style={{ fontSize: 14, fontWeight: 800 }}>${totalPrice}</span>
                </button>
              </div>

            </div>{/* end sections */}
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

      {showResetConfirm && (
        <div
          className={`${resetConfirmClosing ? "reset-backdrop-out" : "reset-backdrop-in"} fixed inset-0 z-[60] flex items-center justify-center p-4`}
          style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(5px)" }}
          onClick={closeResetConfirm}
        >
          <div
            className={`${resetConfirmClosing ? "reset-modal-out" : "reset-modal-in"} bg-white rounded-[24px] w-full max-w-sm p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] flex flex-col gap-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1.5 text-center">
              <h2 className="text-[#141414] tracking-[-0.6px]" style={{ fontSize: 20, fontWeight: 800 }}>Reset all customizations?</h2>
              <p className="text-[#737373]" style={{ fontSize: 13 }}>This will undo every change you've made. You can't undo this action.</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={closeResetConfirm}
                className="flex-1 h-11 rounded-full border border-[#ded9d1] text-[#141414] hover:bg-black/5 active:scale-[0.97] transition-all"
                style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.02em" }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => { handleReset(); closeResetConfirm(); }}
                className="flex-1 h-11 rounded-full bg-[#111] text-white hover:bg-[#333] active:scale-[0.97] transition-all"
                style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.02em" }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
