import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const FiguresSection = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {

  const updateFullData = (i) => {
    if (i === 0) {
      setFullData({
        category: 'Heroes · Revolutionary Figures',
        title: 'Gabriela Silang',
        subtitle: '1731 – 1763 · Ilocos, Philippines',
        tags: ['Revolutionary', 'Ilocano Revolt', 'Spanish Colonial Resistance', 'Female Leader', 'Diego Silang'],
        esc: 'Gabriela Silang was a Filipina revolutionary leader known for continuing the Ilocano revolt against Spanish colonial rule after the assassination of her husband, Diego Silang, in 1763. She briefly led the uprising in the Ilocos region, organizing resistance against Spanish forces. Her leadership made her one of the most notable female figures in Philippine history, symbolizing courage and resistance during the colonial era. She was eventually captured and executed by the Spanish authorities in 1763.',
        facts: [
          ['Born', 'March 19, 1731'],
          ['Died', 'September 20, 1763'],
          ['Region', 'Ilocos, Philippines'],
          ['Role', 'Revolutionary leader of Ilocano revolt'],
          ['Associated Movement', 'Ilocano uprising against Spanish rule'],
          ['Legacy', 'National heroine and symbol of female resistance']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/figures_img/gabriela_silang/gabriela_silang.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/figures_img/gabriela_silang/gabriela_silang_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/figures_img/gabriela_silang/gabriela_silang_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 1) {
     setFullData({
        category: 'Heroes · National Heroes',
        title: 'José Rizal',
        subtitle: '1861 – 1896 · Calamba, Laguna',
        tags: ['National Hero', 'Propaganda Movement', 'Noli Me Tangere', 'El Filibusterismo', 'Reformist'],
        esc: 'José Rizal was a Filipino nationalist, writer, physician, and reform advocate whose works inspired the movement for Philippine independence. Through his novels "Noli Me Tangere" and "El Filibusterismo," he exposed abuses under Spanish colonial rule and called for peaceful reforms. Although he did not advocate armed revolution, his writings awakened Filipino nationalism and influenced revolutionary leaders. Rizal was arrested, tried for sedition, and executed by firing squad on December 30, 1896, becoming a martyr and the Philippines’ national hero.',
        facts: [
          ['Born', 'June 19, 1861'],
          ['Died', 'December 30, 1896'],
          ['Birthplace', 'Calamba, Laguna'],
          ['Profession', 'Physician, writer, and reformist'],
          ['Notable Works', 'Noli Me Tangere, El Filibusterismo'],
          ['Legacy', 'National Hero of the Philippines']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/figures_img/jose_rizal/jose_rizal.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/figures_img/jose_rizal/jose_rizal_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/figures_img/jose_rizal/jose_rizal_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 2) {
      setFullData({
        category: 'Heroes · Revolutionary Leaders',
        title: 'Andrés Bonifacio',
        subtitle: '1863 – 1897 · Tondo, Manila',
        tags: ['Katipunan', 'Philippine Revolution', 'Supremo', 'National Hero', 'Revolutionary'],
        esc: 'Andrés Bonifacio was a Filipino revolutionary leader and the founder of the Katipunan, a secret society that sought independence from Spanish colonial rule. Known as the "Supremo" of the Katipunan, he initiated the Philippine Revolution in 1896 after years of advocating for freedom through armed resistance. Bonifacio played a crucial role in uniting Filipinos against colonial oppression and is remembered as one of the foremost heroes of the Philippine independence movement.',
        facts: [
          ['Born', 'November 30, 1863'],
          ['Died', 'May 10, 1897'],
          ['Birthplace', 'Tondo, Manila'],
          ['Organization', 'Katipunan (Kataas-taasan, Kagalang-galangang Katipunan ng mga Anak ng Bayan)'],
          ['Title', 'Supremo of the Katipunan'],
          ['Legacy', 'Father of the Philippine Revolution']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/figures_img/andres_bonifacio/andres_bonifacio.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/figures_img/andres_bonifacio/andres_bonifacio_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/figures_img/andres_bonifacio/andres_bonifacio_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 3) {
      setFullData({
        category: 'Heroes · Revolutionary Leaders',
        title: 'Apolinario Mabini',
        subtitle: '1864 – 1903 · Tanauan, Batangas',
        tags: ['Brains of the Revolution', 'First Philippine Republic', 'Political Thinker', 'Statesman', 'National Hero'],
        esc: 'Apolinario Mabini was a Filipino political philosopher, statesman, and revolutionary leader who served as the chief adviser to Emilio Aguinaldo during the Philippine Revolution and the First Philippine Republic. Despite being paralyzed by polio, he played a crucial role in shaping the republic’s government and policies. His writings on governance, democracy, and national sovereignty earned him the title "Brains of the Revolution" and "Sublime Paralytic." Mabini advocated for an independent Philippines governed by justice, education, and civic virtue.',
        facts: [
          ['Born', 'July 23, 1864'],
          ['Died', 'May 13, 1903'],
          ['Birthplace', 'Tanauan, Batangas'],
          ['Known As', 'Brains of the Revolution; Sublime Paralytic'],
          ['Position', 'First Prime Minister and Chief Adviser of the First Philippine Republic'],
          ['Legacy', 'Leading political thinker of the Philippine independence movement']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/figures_img/apolinario_mabini/apolinario_mabini.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/figures_img/apolinario_mabini/apolinario_mabini_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/figures_img/apolinario_mabini/apolinario_mabini_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  }  

  return (
    <>
      <section id="figures" className="relative max-[900px]:py-15 max-[900px]:px-6 p-(--section-pad) bg-[#0F0A03] text-white">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            Historical Figures
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] mb-5 text-white">
            Heroes of&nbsp; 
            <em className="italic text-(--crimson)">
              Manila
            </em>
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] max-w-140 text-white/50">
            These are the men and women whose lives lit the way for a nation.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-0.5 mt-15 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div className="p-10 px-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(201,168,76,0.08)] transition-colors duration-300 cursor-pointer hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.35)]" onClick={() => updateFullData(0)}>
            <div className="w-20 h-20 rounded-full bg-[url('/assets/figures_img/gabriela_silang/gabriela_silang.png')] flex items-center justify-center font-['Playfair_Display',serif] text-[24px] font-bold text-[rgba(255,255,255,0.9)] mb-6 border border-[rgba(201,168,76,0.2)] bg-cover bg-no-repeat">
            </div>

            <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-1.5">
              Gabriela Silang
            </div>

            <div className="text-[12px] tracking-[0.08em] text-(--gold) mb-3.5">
              Revolutionary Leader · 1731–1763
            </div>

            <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.4)]">
              After her husband Diego&apos;s assassination, Gabriela continued the Ilocano revolt against the Spanish — the first Filipino woman to lead an armed revolution.
            </p>
          </div>

          <div className="p-10 px-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(201,168,76,0.08)] transition-colors duration-300 cursor-pointer hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.35)]" onClick={() => updateFullData(1)}>
            <div className="w-20 h-20 rounded-full bg-[url('/assets/figures_img/jose_rizal/jose_rizal.png')] flex items-center justify-center font-['Playfair_Display',serif] text-[24px] font-bold text-[rgba(255,255,255,0.9)] mb-6 border border-[rgba(201,168,76,0.2)] bg-cover ">
            </div>

            <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-1.5">
              José Rizal
            </div>

            <div className="text-[12px] tracking-[0.08em] text-(--gold) mb-3.5">
              National Hero · 1861–1896
            </div>

            <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.4)]">
              Novelist, polymath, and martyr. Rizal&apos;s Noli Me Tangere ignited the flames of Philippine nationalism. Executed by the Spanish at Bagumbayan.
            </p>
          </div>

          <div className="p-10 px-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(201,168,76,0.08)] transition-colors duration-300 cursor-pointer hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.35)]" onClick={() => updateFullData(2)}>
            <div className="w-20 h-20 rounded-full bg-[url('/assets/figures_img/andres_bonifacio/andres_bonifacio.png')] flex items-center justify-center font-['Playfair_Display',serif] text-[24px] font-bold text-[rgba(255,255,255,0.9)] mb-6 border border-[rgba(201,168,76,0.2)] bg-cover">
            </div>

            <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-1.5">
              Andrés Bonifacio
            </div>

            <div className="text-[12px] tracking-[0.08em] text-(--gold) mb-3.5">
              Katipunan Founder · 1863–1897
            </div>

            <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.4)]">
              Father of the Philippine Revolution. A self-educated laborer who organized the secret Katipunan movement and led the first armed revolt against Spain.
            </p>
          </div>

          <div className="p-10 px-7 bg-[rgba(255,255,255,0.02)] border border-[rgba(201,168,76,0.08)] transition-colors duration-300 cursor-pointer hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.35)]" onClick={() => updateFullData(3)}>
            <div className="w-20 h-20 rounded-full bg-[url('/assets/figures_img/apolinario_mabini/apolinario_mabini.png')] flex items-center justify-center font-['Playfair_Display',serif] text-[24px] font-bold text-[rgba(255,255,255,0.9)] mb-6 border border-[rgba(201,168,76,0.2)] bg-cover">
            </div>

            <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-1.5">
              Apolinario Mabini
            </div>

            <div className="text-[12px] tracking-[0.08em] text-(--gold) mb-3.5">
              Brain of Revolution · 1864–1903
            </div>

            <p className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.4)]">
              A brilliant lawyer and revolutionary, Mabini served as the first Prime Minister of the Philippines and principal adviser to General Emilio Aguinaldo. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FiguresSection