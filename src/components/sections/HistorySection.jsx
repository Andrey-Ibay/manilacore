"use client";

import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

const HistorySection = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {
  const HISTORY_SLIDES = [
    { 
      img: "bg-[url('/assets/history_img/history_1258/history_1258.png')]", 
      year:'1258', 
      title:'Kingdom of Maynila', 
      description:'A Tagalog polity under Rajah Sulayman flourishes along the banks of the Pasig River, trading with neighboring kingdoms across Southeast Asia. The Kingdom of Maynila was a Muslim-influenced polity with strong trade ties to Brunei, China, and Java.'
    },
    { 
      img: "bg-[url('/assets/history_img/history_1570/history_1570.png')]", 
      year:'1570', 
      title:'The Conquest of Maynila', 
      description:'Spanish forces led by Martín de Goiti attacked the palisaded kingdom of Maynila, ruled by Rajah Sulayman. After peace negotiations broke down, Goiti\'s heavily armed soldiers defeated the locals and burned the settlement to the ground.'
    },
    { 
      img: "bg-[url('/assets/history_img/history_1896/history_1896.png')]", 
      year:'1896', 
      title:'Philippine Revolution', 
      description:'Andrés Bonifacio and the Katipunan launch the revolution against Spanish colonial rule. Manila becomes the heart of the independence movement, with the Cry of Pugad Lawin igniting the flame and eye of Filipino nationalism.'
    },
    {
      img: "bg-[url('/assets/history_img/history_1945/history_1945.png')]", 
      year:'1945', 
      title:'The Battle of Manila', 
      description:'A month-long urban bloodbath between American-Filipino forces and desperate Japanese defenders. The battle resulted in the near-total destruction of the city\'s architectural heritage—particularly Intramuros—and the horrific massacre of an estimated 100,000 Filipino.'
    },
    {
      img: "bg-[url('/assets/history_img/history_1971/history_1971.png')]", 
      year:'1971', 
      title:'The Plaza Miranda Bombing', 
      description:'During a political rally of the opposition Liberal Party at Plaza Miranda in Quiapo, Manila, unidentified attackers threw two fragmentation grenades onto the stage. The blast killed nine people and injured over a hundred, including several prominent politicians.'
    },
    {
      img: "bg-[url('/assets/history_img/history_1979/history_1979.png')]", 
      year:'1979', 
      title:'Intramuros Restoration Act', 
      description:'The Intramuros Administration is created to restore and preserve the historic walled city, beginning decades of careful heritage rehabilitation. Presidential Decree 1616 declared Intramuros a national cultural and heritage zone.'
    },
  ]

  const [historyCur, setHistoryCur] = useState(0);
  const historySlides = HISTORY_SLIDES.length;

  const [historySlidesUpd, setHistorySlidesUpd] = useState(false);
  
  const historyGoTo = (i) => {
    setHistoryCur(Math.max(0, Math.min(historySlides - 1, i)));
    setHistorySlidesUpd(true);
  }

  const historyMove = (dir) => { 
    historyGoTo(historyCur + dir);
    setHistorySlidesUpd(true); 
  }

  const updateFullData = (i) => {
    if (i === 0) {
      setFullData({
        category:'History · Pre-colonial',
        title:'Kingdom of Maynila Founded',
        subtitle:'c. 1258 · Pasig River Delta',
        tags:['Pre-colonial', 'Tagalog', 'Kingdom', 'Rajah Sulayman'],
        esc:'A Tagalog polity under Rajah Sulayman flourishes along the banks of the Pasig River, trading with neighboring kingdoms across Southeast Asia. The Kingdom of Maynila was a Muslim-influenced polity that had strong trade ties with Brunei, China, Java, and other Southeast Asian kingdoms before the arrival of the Spanish.',
        facts:[['Period', 'c. 1258 – 1571'], ['Ruler', 'Rajah Sulayman III'], ['Location', 'Pasig River Delta'], ['Trade partners', 'Brunei, China, Java']]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/history_img/history_1258/history_1258.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/history_img/history_1258/history_1258_2.png')]", caption: 'Second Photo - AI Generated' },
        { img: "bg-[url('/assets/history_img/history_1258/history_1258_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 1) {
      setFullData({
        category: 'History · Spanish Colonial',
        title: 'The Conquest of Maynila',
        subtitle: '1570 – 1571 · Pasig River Delta',
        tags: ['Spanish Colonization', 'Manila', 'Legazpi Expedition', 'Rajah Sulayman', 'Battle of Bangkusay'],
        esc: 'The Spanish forces under Miguel López de Legazpi and Martín de Goiti launched an expedition to Maynila in 1570, encountering the forces of local rulers Rajah Sulayman, Rajah Matanda, and Lakandula. After initial resistance and the Battle of Bangkusay Channel in 1571, the Spanish successfully established control over Maynila, marking the foundation of Spanish Manila and the beginning of colonial rule in the Philippines.',
        facts: [
          ['Period', '1570 – 1571'],
          ['Spanish Leaders', 'Miguel López de Legazpi, Martín de Goiti'],
          ['Local Rulers', 'Rajah Sulayman III, Rajah Matanda'],
          ['Key Battle', 'Battle of Bangkusay Channel (1571)'],
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/history_img/history_1570/history_1570.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/history_img/history_1570/history_1570_2.png')]", caption: 'Second Photo - AI Generated' },
        { img: "bg-[url('/assets/history_img/history_1570/history_1570_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 2) {
      setFullData({
        category: 'History · Revolution',
        title: 'Philippine Revolution',
        subtitle: '1896 – 1898 · Luzon, Philippines',
        tags: ['Katipunan', 'Andrés Bonifacio', 'Emilio Aguinaldo', 'Spanish Rule', 'Independence Movement'],
        esc: 'The Philippine Revolution was a nationalist uprising against Spanish colonial rule, led by the secret society Katipunan founded by Andrés Bonifacio. It began in 1896 after the discovery of the organization and spread across Luzon. Leadership later shifted to Emilio Aguinaldo, who continued the revolution and declared independence from Spain on June 12, 1898 in Kawit, Cavite. The revolution marked the end of over 300 years of Spanish colonization and paved the way for the First Philippine Republic.',
        facts: [
          ['Start Year', '1896'],
          ['End Year', '1898'],
          ['Key Organization', 'Katipunan (KKK)'],
          ['Key Leaders', 'Andrés Bonifacio, Emilio Aguinaldo'],
          ['Key Event', 'Declaration of Philippine Independence (June 12, 1898)'],
          ['Result', 'End of Spanish rule; establishment of First Philippine Republic']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/history_img/history_1896/history_1896.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/history_img/history_1896/history_1896_2.png')]", caption: 'Second Photo - AI Generated' },
        { img: "bg-[url('/assets/history_img/history_1896/history_1896_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 3) {
      setFullData({
        category: 'History · Colonial Transition',
        title: 'The Battle of Manila',
        subtitle: '1945 · Manila, Philippines',
        tags: ['Spanish-American War', 'American Occupation', 'Intramuros', 'Mock Battle of Manila', 'Spanish Colonial Period'],
        esc: 'The Battle of Manila in 1945 marked the transfer of control of Manila from Spanish to American forces during the Spanish-American War. After the naval victory of Commodore George Dewey at Manila Bay, American ground forces led by General Wesley Merritt advanced toward the city. Spanish Governor-General Fermin Jáudenes agreed to a “mock battle” with American commanders to surrender Manila while avoiding large-scale destruction. On August 13, 1945, Spanish forces surrendered Intramuros, effectively ending Spanish colonial rule in the capital and beginning American occupation.',
        facts: [
          ['Period', 'August 13, 1945'],
          ['Conflict', 'Spanish-American War'],
          ['US Leaders', 'General Wesley Merritt'],
          ['Spanish Leader', 'Governor-General Fermin Jáudenes'],
          ['Key Event', 'Mock Battle of Manila and surrender of Intramuros'],
          ['Outcome', 'American forces take control of Manila']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/history_img/history_1945/history_1945.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/history_img/history_1945/history_1945_2.png')]", caption: 'Second Photo - AI Generated' },
        { img: "bg-[url('/assets/history_img/history_1945/history_1945_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 4) {
      setFullData({
        category: 'History · Modern Political History',
        title: 'The Plaza Miranda Bombing',
        subtitle: '1971 · Quiapo, Manila',
        tags: ['Plaza Miranda', 'Liberal Party', 'Philippine Politics', 'Martial Law Prelude', 'Explosion'],
        esc: 'The Plaza Miranda bombing was a political attack that occurred during a Liberal Party rally at Plaza Miranda in Quiapo, Manila on August 21, 1971. Unknown assailants threw grenades onto the stage, injuring numerous opposition politicians and killing several civilians. The attack severely impacted the Philippine political landscape, as President Ferdinand Marcos suspended the writ of habeas corpus shortly after, citing rising civil unrest. The incident remains controversial, with various groups historically accused but no definitive accountability firmly established.',
        facts: [
          ['Date', 'August 21, 1971'],
          ['Location', 'Plaza Miranda, Quiapo, Manila'],
          ['Event Type', 'Political bombing during rally'],
          ['Victims', 'Liberal Party candidates and civilians'],
          ['Immediate Response', 'Suspension of writ of habeas corpus'],
          ['Historical Impact', 'Escalation toward Martial Law (1972)']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/history_img/history_1971/history_1971.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/history_img/history_1971/history_1971_2.png')]", caption: 'Second Photo - AI Generated' },
        { img: "bg-[url('/assets/history_img/history_1971/history_1971_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 5) {
      setFullData({
        category: 'History · Heritage Preservation',
        title: 'Intramuros Restoration Act',
        subtitle: '1979 · Manila, Philippines',
        tags: ['Intramuros', 'Heritage Conservation', 'Cultural Restoration', 'Marcos Era', 'Intramuros Administration'],
        esc: 'The so-called Intramuros Restoration Act refers to government efforts in the late 20th century to restore and preserve Intramuros, the historic walled city of Manila heavily damaged during World War II. In 1979, the Intramuros Administration was created through Presidential Decree No. 1616 to lead the conservation, development, and rehabilitation of the district. The initiative aimed to rebuild key historical structures, regulate development within the area, and preserve its cultural and colonial-era heritage for future generations.',
        facts: [
          ['Year', '1979'],
          ['Legal Basis', 'Presidential Decree No. 1616'],
          ['Agency Created', 'Intramuros Administration'],
          ['Main Objective', 'Restoration and preservation of Intramuros'],
          ['Location', 'Intramuros, Manila'],
          ['Impact', 'Formalized heritage conservation and redevelopment of the historic district']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/history_img/history_1979/history_1979.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/history_img/history_1979/history_1979_2.png')]", caption: 'Second Photo - AI Generated' },
        { img: "bg-[url('/assets/history_img/history_1979/history_1979_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    }

    setToggleFullDetails(true);
  }

  return (
    <>
       <section id="history" className="p-(--section-pad) bg-(--cream) relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            History
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] text-(--ink) mb-5">
            Key Events&nbsp; 
            <em className="text-(--crimson) italic">
              by Year
            </em>
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-(--warm-gray) max-w-140">
            A timeline of the pivotal moments that built the city we know as Manila.
          </p>
        </div>
    
        <div className="mt-14 relative">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform" style={{
                transform: historySlidesUpd
                  ? `translateX(-${historyCur * 100}%)`
                  : "translateX(0%)"
              }} id="history-track">
    
              {/* Slide Start */}
              {HISTORY_SLIDES.map((slide, i) => (
                <div key={i} className="min-w-full grid grid-cols-2 gap-0 border border-(--border) max-[900px]:grid-cols-1">
                  <div className={`${slide.img} bg-center bg-cover relative overflow-hidden flex flex-col justify-end p-12 px-11 min-h-105 max-[900px]:min-h-65 max-[900px]:p-8 max-[900px]:px-7`}>
                  </div>

                  <div className="bg-(--cream) p-12 px-11 flex flex-col justify-center border-l border-(--border) max-[900px]:p-8 max-[900px]:px-7 max-[900px]:border-l-0 max-[900px]:border-t max-[900px]:border-(--border)">
                    <div className="inline-block font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-[0.12em] border border-(--border) px-4 py-1.5 mb-5 w-fit">
                      {slide.year}
                    </div>

                    <h3 className="font-['Playfair_Display',serif] text-[clamp(20px,2.5vw,26px)] font-bold text-(--ink) mb-4 leading-[1.2]">
                      {slide.title}
                    </h3>

                    <p className="text-[15px] leading-[1.8] text-(--warm-gray) mb-7">
                      {slide.description}
                    </p>

                    <button className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-(--gold) bg-transparent border-0 cursor-pointer font-['DM_Sans',sans-serif] p-0 transition-all duration-200 hover:gap-3.5 hover:text-(--gold-dark)" 
                    onClick={() => updateFullData(i)}>
                      Read full history 
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-[-1.8px]"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>{/* carousel-track */}
          </div>{/* carousel-track-outer */}
    
          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2.5" id="carousel-dots">
              {HISTORY_SLIDES.map((_, i) => (
                <button key={i} className={`${i === historyCur ? "w-12 bg-(--gold)" : "w-7 bg-(--border)"} h-0.75 cursor-pointer border-0 p-0 transition-[background,width] duration-300`} onClick={() => historyGoTo(i)}></button>
              ))}
            </div>

            <div className="font-['Playfair_Display',serif] text-[14px] text-(--warm-gray)">
              <strong id="carousel-cur" className="text-(--ink)">
                {historyCur < 9 ? `0${historyCur + 1}` : historyCur + 1}&nbsp;
              </strong> 
              / 
              <span id="carousel-total">
                &nbsp;{historySlides < 10 ? `0${historySlides}` : historySlides}
              </span>
            </div>

            <div className="flex gap-2.5">
              <button className="w-11 h-11 bg-transparent border border-(--border) text-(--ink) cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-(--ink) hover:border-(--ink) hover:text-(--gold) disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-(--border) disabled:hover:text-(--ink)" id="carousel-prev" onClick={() => historyMove(-1)} disabled={historyCur === 0}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>

              <button className="w-11 h-11 bg-transparent border border-(--border) text-(--ink) cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-(--ink) hover:border-(--ink) hover:text-(--gold) disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-(--border) disabled:hover:text-(--ink)" onClick={() => historyMove(1)} id="carousel-next" disabled={historyCur + 1 === historySlides}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HistorySection