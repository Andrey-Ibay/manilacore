import Link from 'next/link'

import React from 'react'

const HomeSection = () => {
  return (
    <>
      {/* HOME SECTION*/}
      <section className="h-screen relative flex flex-col justify-end px-15 py-20 bg-(--ink) overflow-hidden max-[900px]:px-6! max-[900px]:py-15!">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(139,26,26,0.35)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(201,168,76,0.2)_0%,transparent_50%),linear-gradient(180deg,rgba(26,18,9,0.3)_0%,rgba(26,18,9,0.85)_100%)]">
        </div>

        <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,var(--gold)_0,var(--gold)_1px,transparent_0,transparent_50%)] bg-size-[20px_20px]"></div>

        <div className="absolute top-30 right-15 font-['Playfair_Display',serif] text-[180px] font-black text-[rgba(201,168,76,0.06)] leading-none select-none max-[900px]:text-[100px]">
          1258
        </div>

        <div className="relative text-[12px] tracking-[0.2em] uppercase text-(--gold) mb-5">
          Pearl of the Orient
        </div>

        <h1 className="relative font-['Playfair_Display',serif] text-white font-black leading-[0.95] mb-7 text-[clamp(52px,7vw,96px)]">
          Discover
          <br/>
          <em className="text-(--gold) font-[serif] italic">Manila</em>
        </h1>

        <p className="relative max-w-130 text-[16px] leading-[1.7] text-white/60 mb-11">
          A city where centuries of history, vibrant culture, and living traditions converge at the heart of the Philippine archipelago.
        </p>

        <div className="relative flex items-center gap-4">
          <Link href="#information" className="inline-block px-9 py-3.5 bg-(--gold) text-(--ink) font-['DM_Sans',sans-serif] text-[13px] font-medium tracking-widest uppercase no-underline transition-colors duration-200 hover:bg-(--gold-light)">
            Explore the City
          </Link>
          <Link href="#history" className="inline-block px-9 py-3.5 border border-white/30 text-white/80 text-[13px] font-medium tracking-widest uppercase no-underline transition-colors duration-200 hover:border-(--gold) hover:text-(--gold)">
            Join Community
          </Link>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[11px] tracking-[0.15em] uppercase animate-bounceX after:content-[''] after:w-px after:h-10 after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),transparent)] max-[900px]:-bottom-1 max-[900px]:text-[9.5px] max-[900px]:after:h-4">
          Scroll
        </div>
      </section>
    </>
    
  )
}

export default HomeSection