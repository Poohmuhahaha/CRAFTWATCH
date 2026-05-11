import svgPaths from "./svg-iu074k9ci9";

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Case Size</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[123.78px] pb-[2px] pt-px top-[10px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Single choice</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading1 />
        <Container1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#111] content-stretch drop-shadow-[0px_12px_12px_rgba(0,0,0,0.14)] flex items-center justify-center min-h-[44px] pb-[14.5px] pt-[13.5px] px-[17px] relative rounded-[999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">40mm</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[44px] pb-[14.5px] pt-[13.5px] px-[17px] relative rounded-[999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ded9d1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">44mm</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[44px] pb-[14.5px] pt-[13.5px] px-[17px] relative rounded-[999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ded9d1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">49mm</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[0px_10px] items-start relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] relative rounded-[28px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="content-stretch flex flex-col gap-[18px] items-start p-[27px] relative size-full">
        <Container />
        <Container2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Case Color</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
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

function Button3() {
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

function Button4() {
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
      <div aria-hidden="true" className="absolute bg-[#ddd2b8] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow2 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Cream</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1f2d4a] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button6() {
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
      <div aria-hidden="true" className="absolute bg-[#6b7048] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow4 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">OlIVE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#962323] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow5 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">RED</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#c4c4c9] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">SILVER</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#d9a89f] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow7 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">BLUSH</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[12px] items-start p-[25px] relative rounded-[28px] shrink-0 w-[594px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Dial Face</p>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="absolute h-[20px] left-[116.58px] top-[10px] w-[92px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading3 />
        <Container6 />
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

function BackgroundBorderShadow8() {
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

function Button11() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow8 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#efeae0] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow9 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">WHITE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#ddd2b8] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow10 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Cream</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1f2d4a] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow11 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Navy</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow12() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#4a5057] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow12 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Slate</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button11 />
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Hour Marker Type</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#111] content-stretch drop-shadow-[0px_12px_12px_rgba(0,0,0,0.14)] flex flex-col items-center justify-center min-h-[44px] px-[24px] py-[9px] relative rounded-[32px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-[rgba(255,255,255,0.8)] text-center tracking-[-1.6px] whitespace-nowrap">
        <p className="leading-[normal]">1-12</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Arabic</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(0,0,0,0.14)] flex flex-col items-center justify-center min-h-[44px] px-[24px] py-[9px] relative rounded-[32px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ded9d1] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-[rgba(0,0,0,0.8)] text-center tracking-[-1.6px] whitespace-nowrap">
        <p className="leading-[normal]">I-XII</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button17 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Roman</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[66px] min-h-[44px] relative shrink-0 w-[113px]" data-name="Button">
      <div className="absolute inset-[-18.18%_-21.24%_-54.55%_-21.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 114">
          <g filter="url(#filter0_d_1_4923)" id="Button">
            <rect fill="var(--fill-0, white)" height="66" rx="32" shapeRendering="crispEdges" width="113" x="24" y="12" />
            <rect height="65" rx="31.5" shapeRendering="crispEdges" stroke="var(--stroke-0, #DED9D1)" width="112" x="24.5" y="12.5" />
            <path d={svgPaths.p39238b00} fill="var(--fill-0, black)" fillOpacity="0.8" id="." />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="114" id="filter0_d_1_4923" width="161" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="12" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4923" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4923" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button18 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Dots</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white h-[66px] min-h-[44px] relative rounded-[32px] shrink-0 w-[124px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ded9d1] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.14)]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Button19 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Empty</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap items-start justify-between relative size-full">
        <Frame6 />
        <Frame7 />
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[18px] items-start p-[27px] relative rounded-[28px] shrink-0 w-[594px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Hour Marker Colors</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f4ea] content-stretch flex flex-col items-center justify-center left-1/2 rounded-[4.378px] size-[8.757px] top-1/2" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4.378px] shadow-[0px_0px_0px_1.459px_rgba(0,0,0,0.3)] shrink-0 size-[8.757px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function BackgroundBorderShadow13() {
  return (
    <div className="relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1a1815] inset-0 pointer-events-none rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[27.73px]" />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[33.568px] size-[67.137px] top-[-5.84px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#181612] border-[1.459px] border-solid inset-[-1.459px] pointer-events-none rounded-[35.027px]" />
      </div>
      <Background2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow13 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow14() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#efeae0] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow14 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">WHITE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow15() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#bfbfc4] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow15 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Silver</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow16() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#b8924a] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow16 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Gold</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button20 />
        <Button21 />
        <Button22 />
        <Button23 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[12px] items-start p-[25px] relative rounded-[28px] shrink-0 w-[594px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">Hands Color</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f4ea] content-stretch flex flex-col items-center justify-center left-1/2 rounded-[4.378px] size-[8.757px] top-1/2" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4.378px] shadow-[0px_0px_0px_1.459px_rgba(0,0,0,0.3)] shrink-0 size-[8.757px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function BackgroundBorderShadow17() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 rounded-[27.73px] size-[55.461px] top-[9.43px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1a1815] inset-0 pointer-events-none rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[27.73px]" />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[33.568px] size-[67.137px] top-[-5.84px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#181612] border-[1.459px] border-solid inset-[-1.459px] pointer-events-none rounded-[35.027px]" />
      </div>
      <Background3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[108px] min-w-[64.2175521850586px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow17 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[#181612] text-[18px] text-center top-[87.57px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow18() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#efeae0] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow18 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">WHITE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow19() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#bfbfc4] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button26() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow19 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Silver</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow20() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#b8924a] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button27() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow20 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Gold</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button24 />
        <Button25 />
        <Button26 />
        <Button27 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[12px] items-start p-[25px] relative rounded-[28px] shrink-0 w-[594px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[3px] pt-[2px] top-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[26px] tracking-[-1.04px] whitespace-nowrap">
        <p className="leading-[normal]">{`Strap Material & Color`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262.03px] pb-[2px] pt-px top-[10px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Multiple materials / Single active strap</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading7 />
        <Container15 />
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

function Background4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f4ea] content-stretch flex flex-col items-center justify-center left-1/2 rounded-[4.378px] size-[8.757px] top-1/2" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4.378px] shadow-[0px_0px_0px_1.459px_rgba(0,0,0,0.3)] shrink-0 size-[8.757px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function BackgroundBorderShadow21() {
  return (
    <div className="relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1a1815] inset-0 pointer-events-none rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[27.73px]" />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[33.568px] size-[67.137px] top-[-5.84px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#181612] border-[1.459px] border-solid inset-[-1.459px] pointer-events-none rounded-[35.027px]" />
      </div>
      <Background4 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button28() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow21 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow22() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#efeae0] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button29() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow22 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">WHITE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow23() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#b8362c] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button30() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow23 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Silver</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow24() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1f4da6] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button31() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow24 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Navy</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow25() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#d4b438] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button32() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow25 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Yellow</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button28 />
        <Button29 />
        <Button30 />
        <Button31 />
        <Button32 />
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
        <Container16 />
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

function Background5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f4ea] content-stretch flex flex-col items-center justify-center left-1/2 rounded-[4.378px] size-[8.757px] top-1/2" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4.378px] shadow-[0px_0px_0px_1.459px_rgba(0,0,0,0.3)] shrink-0 size-[8.757px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function BackgroundBorderShadow26() {
  return (
    <div className="relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1a1815] inset-0 pointer-events-none rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[27.73px]" />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[33.568px] size-[67.137px] top-[-5.84px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[#181612] border-[1.459px] border-solid inset-[-1.459px] pointer-events-none rounded-[35.027px]" />
      </div>
      <Background5 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button33() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow26 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Black</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow27() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#b59470] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button34() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow27 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Tan</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow28() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#6b4a2e] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button35() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow28 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">Brown</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow29() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#5e1f26] inset-0 rounded-[27.73px]" />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button36() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow29 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal]">burgundy</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative size-full">
        <Button33 />
        <Button34 />
        <Button35 />
        <Button36 />
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
        <Container17 />
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

function BackgroundBorderShadow30() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute inset-0 rounded-[27.73px]" style={{ backgroundImage: "linear-gradient(132.51deg, rgb(26, 24, 21) 23.043%, rgb(154, 154, 154) 64.995%)" }} />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button37() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow30 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Black/ `}</p>
        <p className="leading-[normal] whitespace-pre">Grey</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow31() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute inset-0 rounded-[27.73px]" style={{ backgroundImage: "linear-gradient(134.484deg, rgb(31, 45, 74) 18.134%, rgb(255, 255, 255) 85.018%)" }} />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button38() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow31 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">navy/</p>
        <p className="leading-[normal]">white</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow32() {
  return (
    <div className="pointer-events-none relative rounded-[27.73px] shrink-0 size-[55.461px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute inset-0 rounded-[27.73px]" style={{ backgroundImage: "linear-gradient(134.484deg, rgb(240, 230, 140) 0.15426%, rgb(128, 128, 0) 99.925%)" }} />
      <div aria-hidden="true" className="absolute border-[1.459px] border-[rgba(0,0,0,0.12)] border-solid inset-0 rounded-[27.73px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2.919px_5.838px_0px_rgba(0,0,0,0.08),inset_0px_2.919px_5.838px_0px_rgba(255,255,255,0.18)]" />
    </div>
  );
}

function Button39() {
  return (
    <div className="content-stretch flex flex-col gap-[11.676px] h-[108px] items-center justify-center min-w-[64.2175521850586px] px-[4.378px] relative shrink-0 w-[96px]" data-name="Button">
      <BackgroundBorderShadow32 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#181612] text-[18px] text-center uppercase whitespace-nowrap">
        <p className="leading-[normal] mb-0">olive/</p>
        <p className="leading-[normal]">khaki</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-start flex flex-wrap gap-[21px_16px] items-start pt-[1.459px] relative shrink-0 w-full" data-name="Container">
      <Button37 />
      <Button38 />
      <Button39 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[13.75px] items-start pt-[18px] relative size-full">
        <Paragraph2 />
        <Container19 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[16px] items-start pb-[43px] pt-[27px] px-[27px] relative rounded-[28px] shrink-0 w-[594px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Container14 />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <Container18 />
    </div>
  );
}

function Button40() {
  return (
    <div className="bg-[#ebe7df] relative rounded-[999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] pt-[15px] px-[20px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Reset</p>
        </div>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="bg-[#111] flex-[1_0_0] min-w-px relative rounded-[999px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] pt-[15px] px-[20px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">Copy configuration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[9px] bg-[rgba(255,255,255,0.86)] drop-shadow-[0px_18px_25px_rgba(0,0,0,0.1)] rounded-[24px] shrink-0 sticky top-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[15px] relative size-full">
        <Button40 />
        <Button41 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] shrink-0 sticky top-0 w-[594px]" data-name="Margin">
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%+10px)] top-[100px] w-[594px]">
      <Section />
      <Section1 />
      <div className="bg-[rgba(255,255,255,0.8)] content-stretch drop-shadow-[0px_12px_15px_rgba(0,0,0,0.04)] flex flex-col gap-[13px] items-start p-[25px] relative rounded-[28px] shrink-0 w-[594px]" data-name="Sectio2">
        <div aria-hidden="true" className="absolute border border-[rgba(222,217,209,0.9)] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <Container5 />
        <div className="bg-[#fafafa] relative rounded-[71px] shrink-0 w-[541px]" data-name="Horizontal tabs">
          <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[71px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-[4px] relative size-full">
            <div className="bg-white flex-[1_0_0] h-[36px] min-w-px relative rounded-[51px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)]" data-name="_Tab button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] whitespace-nowrap">Color</p>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] h-[36px] min-w-px relative rounded-[6px]" data-name="_Tab button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">Upload image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container7 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Margin />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[208px] left-[4px] top-[12px] w-[80px]">
      <div className="absolute inset-[-0.48%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 209">
          <g id="Frame 9">
            <line id="Line 1" stroke="var(--stroke-0, #919191)" x2="80" y1="208.5" y2="208.5" />
            <line id="Line 17" stroke="var(--stroke-0, #919191)" x2="80" y1="80.5" y2="80.5" />
            <line id="Line 9" stroke="var(--stroke-0, #919191)" x2="80" y1="144.5" y2="144.5" />
            <line id="Line 18" stroke="var(--stroke-0, #919191)" x1="8" x2="72" y1="16.5" y2="16.5" />
            <line id="Line 5" stroke="var(--stroke-0, #919191)" x2="80" y1="176.5" y2="176.5" />
            <line id="Line 19" stroke="var(--stroke-0, #919191)" x2="80" y1="48.5" y2="48.5" />
            <line id="Line 10" stroke="var(--stroke-0, #919191)" x2="80" y1="112.5" y2="112.5" />
            <line id="Line 3" stroke="var(--stroke-0, #919191)" x2="80" y1="192.5" y2="192.5" />
            <line id="Line 21" stroke="var(--stroke-0, #919191)" x2="80" y1="64.5" y2="64.5" />
            <line id="Line 11" stroke="var(--stroke-0, #919191)" x2="80" y1="128.5" y2="128.5" />
            <line id="Line 22" stroke="var(--stroke-0, #919191)" x1="19" x2="61" y1="0.5" y2="0.5" />
            <line id="Line 6" stroke="var(--stroke-0, #919191)" x2="80" y1="160.5" y2="160.5" />
            <line id="Line 23" stroke="var(--stroke-0, #919191)" x2="80" y1="32.5" y2="32.5" />
            <line id="Line 12" stroke="var(--stroke-0, #919191)" x2="80" y1="96.5" y2="96.5" />
            <line id="Line 2" stroke="var(--stroke-0, #919191)" x2="80" y1="200.5" y2="200.5" />
            <line id="Line 25" stroke="var(--stroke-0, #919191)" x2="80" y1="72.5" y2="72.5" />
            <line id="Line 13" stroke="var(--stroke-0, #919191)" x2="80" y1="136.5" y2="136.5" />
            <line id="Line 26" stroke="var(--stroke-0, #919191)" x1="13" x2="67" y1="8.5" y2="8.5" />
            <line id="Line 7" stroke="var(--stroke-0, #919191)" x2="80" y1="168.5" y2="168.5" />
            <line id="Line 27" stroke="var(--stroke-0, #919191)" x2="80" y1="40.5" y2="40.5" />
            <line id="Line 14" stroke="var(--stroke-0, #919191)" x2="80" y1="104.5" y2="104.5" />
            <line id="Line 4" stroke="var(--stroke-0, #919191)" x2="80" y1="184.5" y2="184.5" />
            <line id="Line 29" stroke="var(--stroke-0, #919191)" x2="80" y1="56.5" y2="56.5" />
            <line id="Line 15" stroke="var(--stroke-0, #919191)" x2="80" y1="120.5" y2="120.5" />
            <line id="Line 8" stroke="var(--stroke-0, #919191)" x2="80" y1="152.5" y2="152.5" />
            <line id="Line 31" stroke="var(--stroke-0, #919191)" x1="4" x2="76" y1="24.5" y2="24.5" />
            <line id="Line 16" stroke="var(--stroke-0, #919191)" x2="80" y1="88.5" y2="88.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[224px] left-[68px] top-0 w-[88px]">
      <div className="absolute bg-[#292929] h-[224px] left-0 rounded-tl-[60px] rounded-tr-[60px] top-0 w-[88px]" />
      <Frame3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4.3px_0px_rgba(255,255,255,0.21)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[292px] left-[4px] top-[12px] w-[80px]">
      <div className="absolute inset-[-0.34%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 293">
          <g id="Frame 9">
            <line id="Line 1" stroke="var(--stroke-0, #919191)" x1="1.81839e-05" x2="80" y1="208.5" y2="208.5" />
            <line id="Line 32" stroke="var(--stroke-0, #919191)" x1="2.51778e-05" x2="80" y1="288.5" y2="288.5" />
            <line id="Line 17" stroke="var(--stroke-0, #919191)" x2="80" y1="80.5" y2="80.5" />
            <line id="Line 9" stroke="var(--stroke-0, #919191)" x1="1.25889e-05" x2="80" y1="144.5" y2="144.5" />
            <line id="Line 33" stroke="var(--stroke-0, #919191)" x1="1.95827e-05" x2="80" y1="224.5" y2="224.5" />
            <line id="Line 18" stroke="var(--stroke-0, #919191)" x1="8" x2="72" y1="16.5" y2="16.5" />
            <line id="Line 5" stroke="var(--stroke-0, #919191)" x1="1.53864e-05" x2="80" y1="176.5" y2="176.5" />
            <line id="Line 34" stroke="var(--stroke-0, #919191)" x1="2.23802e-05" x2="80" y1="256.5" y2="256.5" />
            <line id="Line 19" stroke="var(--stroke-0, #919191)" x2="80" y1="48.5" y2="48.5" />
            <line id="Line 10" stroke="var(--stroke-0, #919191)" x2="80" y1="112.5" y2="112.5" />
            <line id="Line 3" stroke="var(--stroke-0, #919191)" x1="1.67852e-05" x2="80" y1="192.5" y2="192.5" />
            <line id="Line 35" stroke="var(--stroke-0, #919191)" x1="2.3779e-05" x2="80" y1="272.5" y2="272.5" />
            <line id="Line 21" stroke="var(--stroke-0, #919191)" x2="80" y1="64.5" y2="64.5" />
            <line id="Line 11" stroke="var(--stroke-0, #919191)" x2="80" y1="128.5" y2="128.5" />
            <line id="Line 22" stroke="var(--stroke-0, #919191)" x1="19" x2="61" y1="0.5" y2="0.5" />
            <line id="Line 6" stroke="var(--stroke-0, #919191)" x1="1.39876e-05" x2="80" y1="160.5" y2="160.5" />
            <line id="Line 36" stroke="var(--stroke-0, #919191)" x1="2.09815e-05" x2="80" y1="240.5" y2="240.5" />
            <line id="Line 23" stroke="var(--stroke-0, #919191)" x2="80" y1="32.5" y2="32.5" />
            <line id="Line 12" stroke="var(--stroke-0, #919191)" x2="80" y1="96.5" y2="96.5" />
            <line id="Line 2" stroke="var(--stroke-0, #919191)" x1="1.74846e-05" x2="80" y1="200.5" y2="200.5" />
            <line id="Line 37" stroke="var(--stroke-0, #919191)" x1="2.44784e-05" x2="80" y1="280.5" y2="280.5" />
            <line id="Line 25" stroke="var(--stroke-0, #919191)" x2="80" y1="72.5" y2="72.5" />
            <line id="Line 13" stroke="var(--stroke-0, #919191)" x1="1.18895e-05" x2="80" y1="136.5" y2="136.5" />
            <line id="Line 38" stroke="var(--stroke-0, #919191)" x1="1.88833e-05" x2="80" y1="216.5" y2="216.5" />
            <line id="Line 26" stroke="var(--stroke-0, #919191)" x1="13" x2="67" y1="8.5" y2="8.5" />
            <line id="Line 7" stroke="var(--stroke-0, #919191)" x1="1.4687e-05" x2="80" y1="168.5" y2="168.5" />
            <line id="Line 39" stroke="var(--stroke-0, #919191)" x1="2.16808e-05" x2="80" y1="248.5" y2="248.5" />
            <line id="Line 27" stroke="var(--stroke-0, #919191)" x2="80" y1="40.5" y2="40.5" />
            <line id="Line 14" stroke="var(--stroke-0, #919191)" x2="80" y1="104.5" y2="104.5" />
            <line id="Line 4" stroke="var(--stroke-0, #919191)" x1="1.60858e-05" x2="80" y1="184.5" y2="184.5" />
            <line id="Line 40" stroke="var(--stroke-0, #919191)" x1="2.30796e-05" x2="80" y1="264.5" y2="264.5" />
            <line id="Line 29" stroke="var(--stroke-0, #919191)" x2="80" y1="56.5" y2="56.5" />
            <line id="Line 15" stroke="var(--stroke-0, #919191)" x2="80" y1="120.5" y2="120.5" />
            <line id="Line 8" stroke="var(--stroke-0, #919191)" x1="1.32883e-05" x2="80" y1="152.5" y2="152.5" />
            <line id="Line 41" stroke="var(--stroke-0, #919191)" x1="2.02821e-05" x2="80" y1="232.5" y2="232.5" />
            <line id="Line 31" stroke="var(--stroke-0, #919191)" x1="4" x2="76" y1="24.5" y2="24.5" />
            <line id="Line 16" stroke="var(--stroke-0, #919191)" x2="80" y1="88.5" y2="88.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[304px] relative w-[88px]">
      <div className="absolute bg-[#292929] h-[304px] left-0 rounded-tl-[60px] rounded-tr-[60px] top-0 w-[88px]" />
      <Frame5 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_4px_2px_6.8px_0px_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Case() {
  return (
    <div className="absolute h-[250px] left-0 top-[202px] w-[224px]" data-name="Case">
      <div className="absolute inset-[0_-1.79%_-3.2%_-1.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 258">
          <g filter="url(#filter0_d_1_4819)" id="Case">
            <path d={svgPaths.p224ab100} fill="var(--fill-0, black)" id="Rectangle 12" />
            <path d={svgPaths.p2a010600} fill="var(--fill-0, black)" id="Rectangle 16" />
            <path d={svgPaths.p1e77ba80} fill="var(--fill-0, black)" id="Rectangle 13" />
            <path d={svgPaths.pb963e00} fill="var(--fill-0, black)" id="Rectangle 17" />
            <path d={svgPaths.p18ef280} fill="var(--fill-0, black)" id="Ellipse 17" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="258" id="filter0_d_1_4819" width="232" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4819" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4819" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DotsSmallCase() {
  return (
    <div className="absolute left-[19px] size-[186px] top-[234px]" data-name="Dots_Small Case">
      <div className="absolute inset-[0_-2.15%_-4.3%_-2.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194 194">
          <g filter="url(#filter0_d_1_4867)" id="Dots_Small Case">
            <circle cx="186" cy="93" fill="var(--fill-0, black)" id="Ellipse 41" r="4" />
            <circle cx="174.09" cy="137.506" fill="var(--fill-0, black)" id="Ellipse 52" r="4" />
            <circle cx="141.506" cy="170.09" fill="var(--fill-0, black)" id="Ellipse 42" r="4" />
            <circle cx="97" cy="182" fill="var(--fill-0, black)" id="Ellipse 43" r="4" />
            <circle cx="52.4943" cy="170.09" fill="var(--fill-0, black)" id="Ellipse 44" r="4" />
            <circle cx="19.9102" cy="137.506" fill="var(--fill-0, black)" id="Ellipse 45" r="4" />
            <circle cx="8" cy="93" fill="var(--fill-0, black)" id="Ellipse 46" r="4" />
            <circle cx="19.9102" cy="48.4941" fill="var(--fill-0, black)" id="Ellipse 47" r="4" />
            <circle cx="52.4943" cy="15.9102" fill="var(--fill-0, black)" id="Ellipse 48" r="4" />
            <circle cx="97" cy="4" fill="var(--fill-0, black)" id="Ellipse 49" r="4" />
            <circle cx="141.506" cy="15.9102" fill="var(--fill-0, black)" id="Ellipse 50" r="4" />
            <circle cx="174.09" cy="48.4941" fill="var(--fill-0, black)" id="Ellipse 51" r="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="194" id="filter0_d_1_4867" width="194" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4867" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4867" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Hands() {
  return (
    <div className="absolute h-[77.718px] left-[104px] top-[269px] w-[41.348px]" data-name="Hands">
      <div className="absolute inset-[0_-7.9%_-9.35%_-9.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.6162 84.9858">
          <g filter="url(#filter0_d_1_4918)" id="Hands">
            <circle cx="12" cy="58" fill="var(--fill-0, #545454)" id="Ellipse 53" r="8" />
            <rect fill="var(--fill-0, #545454)" height="61" id="Rectangle 22" rx="2" transform="rotate(15 25.788 0)" width="4" x="25.788" />
            <rect fill="var(--fill-0, #545454)" height="38.5068" id="Rectangle 23" rx="2" transform="rotate(120 45.3479 74.2534)" width="4" x="45.3479" y="74.2534" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.7175" id="filter0_d_1_4918" width="49.3479" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4918" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4918" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Watch() {
  return (
    <div className="absolute drop-shadow-[13px_12px_5.3px_rgba(0,0,0,0.25)] h-[734px] left-[184px] top-[145px] w-[224px]" data-name="Watch">
      <Frame2 />
      <div className="absolute flex h-[304px] items-center justify-center left-[68px] top-[430px] w-[88px]">
        <div className="flex-none rotate-180">
          <Frame4 />
        </div>
      </div>
      <Case />
      <div className="absolute left-[11px] size-[202px] top-[226px]" data-name="Dial Background">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
          <g filter="url(#filter0_i_1_4817)" id="Dial Background">
            <circle cx="101" cy="101" fill="var(--fill-0, #FFFDD0)" r="101" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="208.5" id="filter0_i_1_4817" width="202" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_innerShadow_1_4817" />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="3.75" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_4817" />
            </filter>
          </defs>
        </svg>
      </div>
      <DotsSmallCase />
      <Hands />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[191.94px] pb-[11px] pt-px top-[44.61px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] tracking-[1.92px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Live Analog Preview</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[48px] text-center tracking-[-2.4px] whitespace-nowrap">
        <p className="leading-[48px]">Build your watch</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[106.97px] pb-[28px] top-[68.61px]" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[963px] left-[calc(7.14%+12.14px)] overflow-clip rounded-[59px] shadow-[11px_14px_39.6px_-10px_rgba(0,0,0,0.25)] top-[115px] w-[593px]">
      <Watch />
      <Margin1 />
      <Heading1Margin />
    </div>
  );
}

export default function Wireframe() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 2656\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(207.63 0 0 368.67 0 0)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(246,243,238,1)\\' offset=\\'0.42\\'/><stop stop-color=\\'rgba(232,226,216,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Wireframe - 1">
      <Frame />
      <Frame1 />
    </div>
  );
}