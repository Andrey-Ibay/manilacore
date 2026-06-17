"use client";

import Image from 'next/image';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';

import PhotoCard from '@/components/components_function/photoCard';

const FullDetails = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {

  // Simulated community photo data per item
  const COMMUNITY_PHOTOS = [
    { emoji: '📸', user: 'Maria S.', initials: 'MS', color: '#8A6B1A' },
    { emoji: '🖼️', user: 'Juan D.',  initials: 'JD', color: '#8B1A1A' },
    { emoji: '📷', user: 'Ana R.',   initials: 'AR', color: '#2d6a4f' },
    { emoji: '🌅', user: 'Carlo M.', initials: 'CM', color: '#1d3557' },
    { emoji: '🏛️', user: 'Liza T.',  initials: 'LT', color: '#6d3b47' },
    { emoji: '✨', user: 'Ben G.',   initials: 'BG', color: '#3d405b' },
    { emoji: '🎑', user: 'Rosa V.',  initials: 'RV', color: '#5c4a1e' },
    { emoji: '🌟', user: 'Mark P.',  initials: 'MP', color: '#7b2d8b' },
  ]

  const DETAIL_SLIDES = [
    {img:'', emoji: '🌟', caption: 'Main View' },
    {img:'', emoji: '🎑', caption: 'Historical Photo' },
    {img:'', emoji: '✨', caption: 'Close-up Detail' },
  ]

  const [detailImgCur, setDetailImgCur] = useState(0);
  const detailImgTotal = DETAIL_SLIDES.length;

  const [detailImgUpdate, setDetailImgUpdate] = useState(false);

  const detailImgGoTo = (i) => {
    setDetailImgCur(Math.max(0, Math.min(detailImgTotal - 1, i)));
    setDetailImgUpdate(true);
  }

  const detailImgMove = (dir) => { 
    detailImgGoTo(detailImgCur + dir);
    setDetailImgUpdate(true); 
  }

  const [fullDetailAnimation, setFullDetailAnimation] = useState(false);
  
  useEffect(() => {
    if (setToggleFullDetails) {
      requestAnimationFrame(() => {
        setFullDetailAnimation(true);
      });
    }
  }, [setToggleFullDetails]);

  const closeFullDetail = () => {
    setFullDetailAnimation(false);
    setTimeout(() => {
      setToggleFullDetails(false);
    }, 380);
  }

  useEffect(() => {
    document.body.style.overflow = setToggleFullDetails ? "hidden" : "auto";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setToggleFullDetails]);

  return (
    <>
      {/* DETAIL OVERLAY */}
      <div id="detail-overlay" className={`fixed inset-0 z-300 bg-[rgba(4,2,1,0.92)] backdrop-blur-lg ${!setToggleFullDetails ? "hidden opacity-0" : ""} ${fullDetailAnimation ? "flex opacity-100" : "flex"} items-center justify-center p-6 opacity-0 pointer-events-all transition-opacity duration-380`}>
        <div className="flex flex-row w-full max-w-305 h-[min(88vh,680px)] bg-(--ink) relative overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)] animate-detailSlideIn max-[900px]:flex-col max-[900px]:h-[92vh] max-[900px]:max-h-[92vh]" id="detail-card">

          {/* ✕ Close Button */}
          <button className="absolute top-4 right-4 z-30 w-9.5 h-9.5 rounded-full bg-[rgba(26,18,9,0.85)] border border-[rgba(201,168,76,0.4)] text-[rgba(255,255,255,0.85)] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[rgba(201,168,76,0.2)] hover:border-(--gold) hover:text-(--crimson) hover:rotate-90 hover:scale-[1.08]" onClick={closeFullDetail} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          {/* Left Column */}
          <div className="flex-1 relative overflow-hidden bg-[#0a0503] flex flex-col min-h-55">
            {/* Slides */}
            <div className="flex-1 flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform" style={{
                transform: detailImgUpdate
                  ? `translateX(-${detailImgCur * 100}%)`
                  : "translateX(0%)"
              }} id="detail-img-track">
              {setDetailSlide.map((slide, i) => (
                  <div key={i} className={`min-w-full ${slide.img} bg-center bg-cover bg-no-repeat h-full relative overflow-hidden flex items-center justify-center `}>
                    <div className="absolute bottom-10 left-5 z-20 bg-[rgba(10,5,2,0.72)] border border-[rgba(201,168,76,0.2)] px-3.5 py-1.25 text-[11px] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.6)]">
                      {slide.caption}
                    </div>
                  </div>
                ))
              }
              
            </div>

            {/* Controls Bar */}
            <div className="shrink-0 h-13 bg-[rgba(10,5,2,0.85)] border-t border-[rgba(201,168,76,0.12)] flex items-center justify-between px-4 gap-3">
              <div className="flex gap-1.75 items-center" id="detail-img-dots">
                {setDetailSlide.map((_, i) => (
                    <button key={i} className={`${i === detailImgCur ? "w-9 bg-(--gold)" : "w-5.5 bg-[rgba(201,168,76,0.2)]"}  h-0.5 border-0 p-0 cursor-pointer  transition-[background,width] duration-300`} onclick="detailImgGoTo(${i})" 
                    onClick={() => detailImgGoTo(i)}></button>
                  ))
                }
              </div>

              <div className="text-[12px] text-[rgba(255,255,255,0.35)] tracking-widest" id="detail-img-counter">
                {detailImgCur + 1} / {detailImgTotal}
              </div>

              <div className="flex gap-1.5">
                <button className={`w-8 h-8 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] text-[rgba(255,255,255,0.6)] flex items-center justify-center transition-colors duration-200 hover:bg-[rgba(201,168,76,0.18)] hover:border-(--gold)] hover:text-(--gold) ${detailImgCur === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"}`} disabled={detailImgCur === 0} id="detail-img-prev" onClick={() => detailImgMove(-1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>

                <button className={`w-8 h-8 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] text-[rgba(255,255,255,0.6)] flex items-center justify-center transition-colors duration-200 hover:bg-[rgba(201,168,76,0.18)] hover:border-(--gold)] hover:text-(--gold) ${detailImgCur === detailImgTotal - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"}`} disabled={detailImgCur === detailImgTotal - 1} id="detail-img-next" onClick={() => detailImgMove(1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-[0_0_660px] flex flex-col overflow-y-auto overflow-x-hidden bg-(--cream) relative z-20 custom-scrollbar max-[900px]:flex-none max-[900px]:max-h-[50%]" id="detail-left">
            <div className="h-0.75 bg-[linear-gradient(90deg,var(--gold-dark),var(--gold),var(--gold-dark))] shrink-0"></div>

            {/* Info */}
            <div className="pt-8 px-9 pb-0 shrink-0 max-[900px]:px-5.5 max-[900px]:pt-6">
              <div className="text-[10px] tracking-[0.22em] uppercase text-(--gold) mb-2" id="d-category">
                {setFullData.category}
              </div>

              <div className="font-['Playfair_Display',serif] text-[clamp(24px,3vw,34px)] font-bold text-(--ink) leading-[1.1] mb-1.75" id="d-title">
                {setFullData.title}
              </div>

              <div className="text-[13px] text-(--warm-gray) tracking-[0.04em] mb-4.5" id="d-subtitle">
                {setFullData.subtitle}
              </div>

              <div className="w-11 h-0.5 bg-(--gold) mb-4.5"></div>

              <div className="flex flex-wrap gap-1.75 mb-4.5" id="d-tags">
                {setFullData?.tags?.map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-0.75 bg-[rgba(201,168,76,0.09)] border border-[rgba(201,168,76,0.22)] text-(--gold) text-[10px] tracking-[0.12em] uppercase">
                    {tag}
                  </span>
                  )
                )}
              </div>

              <p className="text-[14px] leading-[1.85] text-(--ink-mid) mb-0 pb-6 border-b border-(--border)" id="d-desc">
                {setFullData.esc}
              </p>
            </div>

            {/* Facts */}
            <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-0 shrink-0" id="d-facts">
              {setFullData?.facts?.map(([label, value], i) => ( 
                  <div key={i} className="pt-3.5 pr-5 pb-3.5 pl-9 border-r border-b border-(--border) even:border-r-0 even:pl-5 max-[900px]:py-3.25 max-[900px]:px-5.5 max-[900px]:even:pl-5.5">
                    <div className="text-[9px] tracking-[0.15em] uppercase text-(--warm-gray) mb-1">
                      {label}
                    </div>

                    <div className="font-['Playfair_Display',serif] text-[14px] text-(--ink) font-semibold leading-[1.3]">
                      {value}
                    </div>
                  </div>
                ))
              }
            </div>

            {/* Community Gallery */}
            <div className="bg-(--ink) shrink-0 pt-7 px-9 pb-9 max-[900px]:pt-5.5 max-[900px]:px-5.5 max-[900px]:pb-7" id="d-gallery-section">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <div className="font-['Playfair_Display',serif] text-[16px] font-bold text-white">
                    Community Photos
                  </div>

                  <div className="text-[11px] text-[rgba(255,255,255,0.3)] mt-0.5">
                    Shared by Maynila visitors
                  </div>
                </div>

                <div className="text-[10px] tracking-[0.14em] uppercase text-(--gold)" id="d-gallery-count">
                  {COMMUNITY_PHOTOS.length} photos
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3.5 max-[900px]:gap-1.5 max-[480px]:grid-cols-2" id="d-gallery-grid">
                {COMMUNITY_PHOTOS.map((community_photo, index) => (
                  <PhotoCard 
                    key={index} 
                    photo={community_photo} />
                  ))
                }
              </div>

              <div className="flex items-center justify-center gap-2.25 p-2.75 border border-dashed border-[rgba(201,168,76,0.25)] text-[12px] tracking-[0.08em] text-[rgba(255,255,255,0.35)] cursor-pointer transition-colors duration-200 bg-[rgba(201,168,76,0.03)] hover:border-(--gold) hover:text-(--gold)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.75 h-3.75 shrink-0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Share your photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullDetails