import React from 'react';
import Link from "next/link";

const navbar = () => {
  return (
    <>
     {/* NAV */}
      <nav className='fixed top-0 left-0 right-0 z-100 flex justify-between items-center px-15 py-4 bg-[rgba(26,18,9,0.92)] backdrop-blur-[10px] border-b border-(--border) max-[900px]:px-6 max-[900px]:py-4'>
        <div className="font-['Playfair_Display',serif] text-[22px] font-bold text-(--gold) tracking-[0.04em]">
          Maynila
          <span className="block text-white font-normal italic text-sm tracking-[0.12em]">
            City of Manila
          </span>
        </div>

        <ul className="flex gap-8 list-none">
          <li>
            <Link href="#hero" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Home
            </Link>
          </li>
          <li>
            <Link href="#history" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              History
            </Link>
          </li>
          <li>
            <Link href="#traditions" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Traditions
            </Link>
          </li>
          <li>
            <Link href="#food" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Food
            </Link>
          </li>
          <li>
            <Link href="#artifacts" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Artifacts
            </Link>
          </li>
          <li>
            <Link href="#places" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Places
            </Link>
          </li>
          <li>
            <Link href="#figures" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Figures
            </Link>
          </li>
        </ul>
        
        <button className="bg-transparent border border-[rgba(201,168,76,0.35)] text-white/70 cursor-pointer flex items-center gap-2 px-4 py-2 font-['DM_Sans',sans-serif] text-[13px] tracking-[0.08em] transition-colors duration-200 hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]" aria-label="Search">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/ ></svg>
          Search
        </button>
      </nav>
    </>
  )
}

export default navbar