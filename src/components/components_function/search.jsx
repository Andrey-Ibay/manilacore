"use client";

import React, { useRef, useEffect } from 'react';

const Search = ({ setOpenSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (setOpenSearch) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      return () => clearTimeout(timer); 
    }
  }, [setOpenSearch]);

  return (
    <div className={`fixed inset-0 z-999 bg-[rgba(10,7,2,0.97)] flex flex-col p-0 opacity-100 transition-opacity duration-200" role="dialog" aria-label="Site search`}>
      <div className="flex items-center gap-5 px-15 py-7 border-b border-[rgba(201,168,76,0.15)] shrink-0 max-[900px]:p-5">
        <svg className="text-(--gold) shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>

        <input type="text" className="flex-1 bg-transparent border-0 outline-none font-['Playfair_Display',serif] text-[28px] text-white caret-(--gold) placeholder:text-white/20 max-[900px]:text-[20px]" placeholder="Search Manila's history, food, traditions…" ref={inputRef}/>

        <button className="bg-transparent border border-white/15 text-white/50 cursor-pointer px-4 py-2 text-[12px] tracking-widest font-['DM_Sans',sans-serif] uppercase transition-all duration-200 shrink-0 hover:border-(--gold) hover:text-(--gold)" onClick={() => setOpenSearch(false)}>
          ✕ Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-15 py-10 max-[900px]:py-6 max-[900px]:px-5" id="search-body">
        <div className="flex flex-col items-center justify-center min-h-75 gap-4 text-white/20" id="search-empty">

          <div className="font-['Playfair_Display',serif] text-[24px] text-white/15">
            What are you looking for?
          </div>

          <div className="text-[13px] tracking-[0.08em] text-white/25">
            Try a topic, dish, person, or place
          </div>
          
          <div className="flex flex-wrap gap-2.5 mt-2">           
            <button className="px-4 py-1.5 border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] text-[12px] tracking-widest uppercase cursor-pointer transition-all duration-200 bg-transparent font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]">
              Fort Santiago
            </button>

            <button className="px-4 py-1.5 border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] text-[12px] tracking-widest uppercase cursor-pointer transition-all duration-200 bg-transparent font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]">
              Sinigang
            </button>

            <button className="px-4 py-1.5 border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] text-[12px] tracking-widest uppercase cursor-pointer transition-all duration-200 bg-transparent font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]">
              Black Nazarene
            </button>

            <button className="px-4 py-1.5 border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] text-[12px] tracking-widest uppercase cursor-pointer transition-all duration-200 bg-transparent font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]">
              Barong Tagalog
            </button>

            <button className="px-4 py-1.5 border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] text-[12px] tracking-widest uppercase cursor-pointer transition-all duration-200 bg-transparent font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]">
              Gabriela Silang
            </button>

            <button className="px-4 py-1.5 border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] text-[12px] tracking-widest uppercase cursor-pointer transition-all duration-200 bg-transparent font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]">
              Adobo
            </button>
          </div>
        </div>

        <div id="search-results"></div>
      </div>
    </div>
  )
}

export default Search