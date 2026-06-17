"use client";

import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NavBar = ({ setToggleForm }) => {
  /* Mobile Menu Toggle Logic */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter()

  const toggleMobileMenu = () => {
    !mobileMenuOpen ? setMobileMenuOpen(true) : setMobileMenuOpen(false);
  }

  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-100 flex justify-between items-center px-15 py-4 bg-[rgba(26,18,9,0.92)] backdrop-blur-[10px] border-b border-(--border) max-[900px]:px-5 max-[900px]:py-3.5">
        <div className="font-['Playfair_Display',serif] text-[22px] max-[900px]:text-[18px] font-bold text-(--gold) tracking-[0.04em]">
          Maynila
          <span className="block text-white font-normal italic text-sm max-[900px]:text-[10px] tracking-[0.12em]">
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
            <Link href="#artifacts" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Artifacts
            </Link>
          </li>
          <li>
            <Link href="#figures" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Figures
            </Link>
          </li>
          <li>
            <Link href="#food" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Foods
            </Link>
          </li>
          <li>
            <Link href="#traditions" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Traditions
            </Link>
          </li>
          <li>
            <Link href="#places" className="text-white/70 no-underline text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-(--gold) max-[900px]:hidden">
              Places
            </Link>
          </li>
        </ul>

        {/* MOBILE NAVIGATION BUTTON */}
        <button className={`hidden flex-col justify-between w-7 h-5 bg-transparent border-0 cursor-pointer p-0 max-[900px]:flex ${mobileMenuOpen ? "open" : ""}`} aria-label="Menu" onClick={toggleMobileMenu}>
          <span className="block w-full h-0.5 bg-(--gold) transition-all duration-300 origin-center"></span>
          <span className="block w-full h-0.5 bg-(--gold) transition-all duration-300 origin-center"></span>
          <span className="block w-full h-0.5 bg-(--gold) transition-all duration-300 origin-center"></span>
        </button>

        <div className="flex items-center gap-2.5 relative">

          <button className="bg-(--gold) border-0 text-(--ink) cursor-pointer flex items-center gap-2 px-4.5 py-2 font-['DM_Sans',sans-serif] text-[13px] font-medium tracking-[0.08em] transition-all duration-200 hover:bg-(--gold-light) hover:-translate-y-px max-[900px]:px-2.5 max-[900px]:py-2" id="nav-login-btn" aria-label="Log in" onClick={() => router.push('/login')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.75 h-3.75 shrink-0"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>

            <span className="max-[900px]:hidden">
              Log In
            </span>
          </button>
        </div>

        {/* MOBILE MENU */ }
        <div id="mobile-menu" className={`hidden fixed top-[53.5px] left-0 right-0 bg-[rgba(20,12,4,0.98)] backdrop-blur-[14px] z-99 px-7 pt-4 pb-8 border-b border-(--border) -translate-y-2.5 opacity-0 pointer-events-none transition-all duration-300 max-[900px]:block ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <ul className="list-none mb-6">
            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#hero" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Home
              </Link>
            </li>
            
            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#history" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                History
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#traditions" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5"> 
                Traditions
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#food" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Food
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#artifacts" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Artifacts
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#places" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Places
              </Link>
            </li>

            <li className="border-b border-[rgba(201,168,76,0.08)]">
              <Link href="#figures" className="block py-3 px-1 text-white/75 no-underline text-[14px] tracking-widest uppercase transition-all duration-200 hover:text-(--gold) hover:pl-2.5">
                Figures
              </Link>
            </li>
          </ul>

          <div className="flex gap-2.5 pt-1">

            <button className="flex-1 flex items-center justify-center gap-2 p-3 font-['DM_Sans',sans-serif] text-[13px] tracking-[0.08em] uppercase cursor-pointer transition-all duration-200 border-[rgba(201,168,76,0.35)] hover:border-(--gold) bg-(--gold) border-0 text-(--ink) font-medium hover:bg-(--gold-light)" id="mobile-login-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar