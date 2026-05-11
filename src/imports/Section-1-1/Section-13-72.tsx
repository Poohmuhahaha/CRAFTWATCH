import svgPaths from "./svg-n6f01f9iwu";

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Hour Marker Type</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#111] content-stretch drop-shadow-[0px_12px_12px_rgba(0,0,0,0.14)] flex flex-col h-[120px] items-center justify-center min-h-[44px] px-[24px] py-[9px] relative rounded-[32px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-[rgba(255,255,255,0.8)] text-center tracking-[-1.6px] whitespace-nowrap">
        <p className="leading-[normal]">1-12</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Arabic</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(0,0,0,0.14)] flex flex-col h-[120px] items-center justify-center min-h-[44px] px-[24px] py-[9px] relative rounded-[32px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ded9d1] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-[rgba(0,0,0,0.8)] text-center tracking-[-1.6px] whitespace-nowrap">
        <p className="leading-[normal]">I-XII</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Roman</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[120px] min-h-[44px] relative shrink-0 w-[113px]" data-name="Button">
      <div className="absolute inset-[-10%_-21.24%_-30%_-21.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 168">
          <g filter="url(#filter0_d_13_77)" id="Button">
            <rect fill="var(--fill-0, white)" height="120" rx="32" shapeRendering="crispEdges" width="113" x="24" y="12" />
            <rect height="119" rx="31.5" shapeRendering="crispEdges" stroke="var(--stroke-0, #DED9D1)" width="112" x="24.5" y="12.5" />
            <path d={svgPaths.p24df2f00} fill="var(--fill-0, black)" fillOpacity="0.8" id="." />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="168" id="filter0_d_13_77" width="161" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="12" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_13_77" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_13_77" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Dots</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[120px] min-h-[44px] relative rounded-[32px] shrink-0 w-[124px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ded9d1] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.14)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Empty</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap items-start justify-between relative size-full">
        <Frame />
        <Frame1 />
        <Frame2 />
        <Frame3 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[18px] items-start p-[27px] relative rounded-[28px] size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_12px_30px_0px_rgba(0,0,0,0.04)]" />
      <Container />
      <Container1 />
    </div>
  );
}