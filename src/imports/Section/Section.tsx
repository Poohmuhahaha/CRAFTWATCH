function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">{`Strap Material & Color`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262.03px] pb-[2px] pt-px top-[10px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Multiple materials / Single active strap</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between leading-[0] relative size-full text-[#181612] whitespace-nowrap">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[19px]">
          <p className="leading-[28.5px]">Rubber</p>
        </div>
        <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[10px] tracking-[1.6px] uppercase">
          <p>
            <span className="leading-[15px]">0</span>
            <span className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[15px] text-[#8a8275]">{` selected`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f4ea] content-stretch flex flex-col items-center justify-center left-1/2 rounded-[4.378px] size-[8.757px] top-1/2" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4.378px] shadow-[0px_0px_0px_1.459px_rgba(0,0,0,0.3)] shrink-0 size-[8.757px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1a1815] inset-0 pointer-events-none rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[27.73px]" />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[33.568px] size-[67.137px] top-[-5.84px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#181612] border-[1.459px] border-solid inset-[-1.459px] pointer-events-none rounded-[35.027px]" />
      </div>
      <Background />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#efeae0] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">WHITE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#b8362c] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Silver</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1f4da6] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Navy</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#d4b438] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow4 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Yellow</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d8cfbc] border-b border-dashed inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[13.75px] items-start pb-[19px] pt-[18px] relative size-full">
        <Paragraph />
        <Container2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between leading-[0] relative size-full text-[#181612] whitespace-nowrap">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[19px]">
          <p className="leading-[28.5px]">Leather</p>
        </div>
        <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[10px] tracking-[1.6px] uppercase">
          <p>
            <span className="leading-[15px]">1</span>
            <span className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[15px] text-[#8a8275]">{` selected`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f4ea] content-stretch flex flex-col items-center justify-center left-1/2 rounded-[4.378px] size-[8.757px] top-1/2" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4.378px] shadow-[0px_0px_0px_1.459px_rgba(0,0,0,0.3)] shrink-0 size-[8.757px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1a1815] inset-0 pointer-events-none rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[27.73px]" />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[33.568px] size-[67.137px] top-[-5.84px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#181612] border-[1.459px] border-solid inset-[-1.459px] pointer-events-none rounded-[35.027px]" />
      </div>
      <Background1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow5 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#b59470] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Tan</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#6b4a2e] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow7 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Brown</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#5e1f26] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow8 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">burgundy</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d8cfbc] border-b border-dashed inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[13.75px] items-start pb-[19px] pt-[18px] relative size-full">
        <Paragraph1 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-baseline justify-between leading-[0] relative shrink-0 text-[#181612] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[19px]">
        <p className="leading-[28.5px]">Nylon</p>
      </div>
      <div className="flex flex-col font-['Geist_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[10px] tracking-[1.6px] uppercase">
        <p>
          <span className="leading-[15px]">0</span>
          <span className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[15px] text-[#8a8275]">{` selected`}</span>
        </p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute inset-0 rounded-[27.73px]" style={{ backgroundImage: "linear-gradient(132.51deg, rgb(26, 24, 21) 23.043%, rgb(154, 154, 154) 64.995%)" }} />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow9 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Black/ `}</p>
        <p className="leading-[normal] whitespace-pre">Grey</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute inset-0 rounded-[27.73px]" style={{ backgroundImage: "linear-gradient(134.484deg, rgb(31, 45, 74) 18.134%, rgb(255, 255, 255) 85.018%)" }} />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow10 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">navy/</p>
        <p className="leading-[normal]">white</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute inset-0 rounded-[27.73px]" style={{ backgroundImage: "linear-gradient(134.484deg, rgb(240, 230, 140) 0.15426%, rgb(128, 128, 0) 99.925%)" }} />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow11 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">olive/</p>
        <p className="leading-[normal]">khaki</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[13.75px] items-start pt-[18px] relative size-full">
        <Paragraph2 />
        <Container5 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] items-start pb-[43px] pt-[27px] px-[27px] relative rounded-[28px] size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Container />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <Container4 />
    </div>
  );
}