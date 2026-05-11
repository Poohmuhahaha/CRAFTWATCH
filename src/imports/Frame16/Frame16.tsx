import svgPaths from "./svg-lxyq40lg48";

function Frame1() {
  return (
    <div className="absolute h-[308px] left-[580px] top-0 w-[272px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 308">
        <g id="Frame 7">
          <path d={svgPaths.p1f6a5700} fill="var(--fill-0, black)" id="Ellipse 21" />
          <path d={svgPaths.pe726500} fill="var(--fill-0, #070707)" id="Rectangle 18" />
          <path d={svgPaths.p3df76c00} fill="var(--fill-0, #070707)" id="Rectangle 20" />
          <path d={svgPaths.p6669000} fill="var(--fill-0, #070707)" id="Rectangle 19" />
          <path d={svgPaths.p198d7680} fill="var(--fill-0, #070707)" id="Rectangle 21" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[280px] left-[272px] top-[14px] w-[248px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 280">
        <g id="Frame 6">
          <path d={svgPaths.p2a63d900} fill="var(--fill-0, black)" id="Ellipse 20" />
          <path d={svgPaths.p18521400} fill="var(--fill-0, #070707)" id="Rectangle 10" />
          <path d={svgPaths.p9341100} fill="var(--fill-0, #070707)" id="Rectangle 14" />
          <path d={svgPaths.p1c452280} fill="var(--fill-0, #070707)" id="Rectangle 11" />
          <path d={svgPaths.p29c69800} fill="var(--fill-0, #070707)" id="Rectangle 15" />
        </g>
      </svg>
    </div>
  );
}

function Case() {
  return (
    <div className="absolute h-[250px] left-0 top-[29px] w-[224px]" data-name="Case">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 250">
        <g id="Case">
          <path d={svgPaths.p3dd09600} fill="var(--fill-0, black)" id="Rectangle 12" />
          <path d={svgPaths.pd275d00} fill="var(--fill-0, black)" id="Rectangle 16" />
          <path d={svgPaths.p39692680} fill="var(--fill-0, black)" id="Rectangle 13" />
          <path d={svgPaths.p2c102300} fill="var(--fill-0, black)" id="Rectangle 17" />
          <path d={svgPaths.p2b2c5380} fill="var(--fill-0, black)" id="Ellipse 17" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Frame1 />
      <Frame />
      <Case />
    </div>
  );
}