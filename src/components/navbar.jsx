"use client";

import Link from 'next/link';

import React, { useState } from 'react';

const NavBar = ({ setOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuRendered, setMobileMenuRendered] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(true);
    setMobileMenuRendered(true);

    if (mobileMenuRendered) {
      closeMobileMenu();
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuRendered(false);
  }

  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-100 flex justify-between items-center px-15 py-4 bg-[rgba(26,18,9,0.92)] backdrop-blur-[10px] border-b border-(--border) max-[900px]:px-5 max-[900px]:py-3.5">
        <div className="font-['Playfair_Display',serif] text-[22px] font-bold text-(--gold) tracking-[0.04em]">
          Maynila
          <span className="block text-white font-normal italic text-sm tracking-[0.12em]">
            City of Manila
          </span>
        </div>

        <ul className="flex gap-8 list-none max-[900px]:hidden">
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

        <button className={`hidden flex-col justify-between w-7 h-5 bg-transparent border-0 cursor-pointer p-0 max-[900px]:flex ${mobileMenuOpen ? "open" : ""}`} aria-label="Menu" onClick={() => toggleMobileMenu()}>
          <span className="block w-full h-0.5 bg-(--gold) transition-all duration-300 origin-center"></span>
          <span className="block w-full h-0.5 bg-(--gold) transition-all duration-300 origin-center"></span>
          <span className="block w-full h-0.5 bg-(--gold) transition-all duration-300 origin-center"></span>
        </button>

        <div className="flex items-center gap-2.5 relative">
          {/* SEARCH BUTTON */}
          <button className="bg-transparent border border-[rgba(201,168,76,0.35)] text-white/70 cursor-pointer flex items-center gap-2 px-4 py-2 font-['DM_Sans',sans-serif] text-[13px] tracking-[0.08em] transition-colors duration-200 hover:border-(--gold) hover:text-(--gold) hover:bg-[rgba(201,168,76,0.06)]" aria-label="Search" onClick={() => setOpenSearch(true)}>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/ ></svg>
            Search
          </button>
        </div>

        {/* MOBILE MENU */ }
        <div id="mobile-menu" className={`hidden fixed top-16.25 left-0 right-0 bg-[rgba(20,12,4,0.98)] backdrop-blur-[14px] z-99 px-7 pt-6 pb-8 border-b border-(--border) -translate-y-2.5 opacity-0 pointer-events-none transition-all duration-300 max-[900px]:block ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <ul className="list-none mb-6">
            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#hero" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Home
              </Link>
            </li>
            
            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#history" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                History
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#traditions" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5"> 
                Traditions
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#food" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Food
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#artifacts" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Artifacts
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#places" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Places
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#figures" onClick={() => closeMobileMenu()} className="block py-3.5 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Figures
              </Link>
            </li>
          </ul>

          <div className="flex gap-2.5 pt-1">
            <button className="flex-1 flex items-center justify-center gap-2 p-3 font-['DM_Sans',sans-serif] text-[13px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-200 bg-transparent border border-[rgba(201,168,76,0.35)] text-white/70 hover:border-(--gold) hover:text-(--gold)" onClick={() => setOpenSearch(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar