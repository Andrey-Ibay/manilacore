"use client";

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const ArtifactSection = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {
  const updateFullData = (i) => {
    if (i === 0) {
      setFullData({
        category: 'Artifacts · Traditional Clothing',
        title: 'Barong Tagalog',
        subtitle: '16th century–present · Philippines',
        tags: ['Traditional Wear', 'National Costume', 'Formal Attire', 'Filipino Culture', 'Piña Fabric'],
        esc: 'The Barong Tagalog is the traditional embroidered formal shirt worn by men in the Philippines. It originated during the Spanish colonial period and evolved as a lightweight, untucked garment designed for tropical weather. Traditionally made from fabrics like piña (pineapple fiber) or jusi, it is often decorated with intricate embroidery. The Barong Tagalog is commonly worn during formal events such as weddings, government ceremonies, and cultural celebrations, and is considered the national dress of Filipino men.',
        facts: [
          ['Origin Period', 'Spanish Colonial Era (16th century onward)'],
          ['Material', 'Piña, jusi, organza, or modern blends'],
          ['Type', 'Formal traditional men’s wear'],
          ['Features', 'Lightweight, embroidered, worn untucked'],
          ['Usage', 'Weddings, formal events, state functions'],
          ['Status', 'National dress of the Philippines']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/artifacts_img/barong_tagalog/barong_tagalog.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/artifacts_img/barong_tagalog/barong_tagalog_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/artifacts_img/barong_tagalog/barong_tagalog_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 1) {
      setFullData({
        category: 'Artifacts · Traditional Clothing',
        title: "Baro't Saya",
        subtitle: 'Pre-colonial to present · Philippines',
        tags: ['Traditional Wear', 'Filipino Clothing', 'Women’s Attire', 'Colonial Era', 'Cultural Dress'],
        esc: "The Baro't Saya is the traditional Filipino women's outfit composed of a blouse (baro) and a long skirt (saya). It evolved from pre-colonial clothing styles and was later influenced by Spanish colonial fashion. Over time, it developed into various regional and formal versions such as the Maria Clara dress. The Baro't Saya reflects Filipino identity, modesty, and cultural heritage, and is often worn during cultural events, festivals, and formal ceremonies.",
        facts: [
          ['Origin', 'Pre-colonial Philippines (later influenced during Spanish era)'],
          ['Components', 'Baro (blouse), Saya (skirt), often with pañuelo and tapis'],
          ['Variants', 'Maria Clara dress, regional traditional dresses'],
          ['Material', 'Piña, cotton, jusi, modern fabrics'],
          ['Usage', 'Cultural events, festivals, formal occasions'],
          ['Cultural Significance', 'Represents Filipino heritage and femininity']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/artifacts_img/barot_saya/barot_saya.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/artifacts_img/barot_saya/barot_saya_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/artifacts_img/barot_saya/barot_saya_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 2) {
      setFullData({
        category: 'Artifacts · Traditional Crafts',
        title: 'Parol',
        subtitle: '16th century–present · Philippines',
        tags: ['Christmas', 'Lantern', 'Festivals', 'Simbang Gabi', 'Filipino Tradition'],
        esc: 'The Parol is a traditional Filipino Christmas lantern symbolizing the Star of Bethlehem that guided the Wise Men to the newborn Jesus Christ. Introduced during the Spanish colonial period, it became a deeply rooted symbol of Filipino Christmas celebrations. Parols are traditionally made from bamboo and paper, though modern versions use plastic, capiz shells, and LED lights. They are prominently displayed in homes, streets, and churches during the Christmas season, especially during Simbang Gabi and Christmas festivities.',
        facts: [
          ['Origin', 'Spanish Colonial Period (16th century onward)'],
          ['Symbolism', 'Star of Bethlehem'],
          ['Materials', 'Bamboo, paper, capiz shells, plastic, LED lights'],
          ['Usage', 'Christmas decorations, festivals, Simbang Gabi'],
          ['Shape', 'Star-shaped lantern (commonly 5-pointed)'],
          ['Cultural Role', 'Represents Filipino Christmas spirit and hope']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/artifacts_img/parol/parol.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/artifacts_img/parol/parol_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/artifacts_img/parol/parol_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 3) {
      setFullData({
        category: 'Artifacts · Pre-colonial Archaeology',
        title: 'Gold Pectoral',
        subtitle: 'c. 10th–13th century · Ancient Philippines',
        tags: ['Goldwork', 'Archaeology', 'Butuan', 'Pre-colonial Elite', 'Funerary Ornaments'],
        esc: 'The gold pectoral refers to finely crafted gold chest ornaments used in pre-colonial Philippines, often associated with elite status and ritual or funerary practices. These artifacts have been discovered in archaeological sites such as Butuan and other parts of Mindanao and the Visayas. They reflect the advanced goldsmithing tradition of early Filipino societies and their participation in extensive maritime trade networks across Southeast Asia. Gold pectorals were likely worn by high-status individuals or used as ceremonial grave goods symbolizing wealth, power, and spiritual significance.',
        facts: [
          ['Period', 'c. 900–1300 CE'],
          ['Material', 'Gold'],
          ['Function', 'Status symbol and ritual/funerary ornament'],
          ['Archaeological Sites', 'Butuan, Surigao, and other parts of the Philippines'],
          ['Cultural Context', 'Maritime Southeast Asian trade and elite burial practices'],
          ['Significance', 'Evidence of advanced pre-colonial Philippine goldsmithing']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/artifacts_img/gold_pectoral/gold_pectoral.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/artifacts_img/gold_pectoral/gold_pectoral_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/artifacts_img/gold_pectoral/gold_pectoral_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 4) {
      setFullData({
        category: 'Artifacts · Traditional Textile',
        title: 'Binakol',
        subtitle: 'Ilocos Region · Philippines',
        tags: ['Weaving', 'Inabel', 'Ilocano', 'Textile Art', 'Optical Illusion'],
        esc: 'Binakol is a traditional Ilocano woven textile known for its distinctive geometric patterns that create an optical illusion of movement, often resembling whirlpools or spirals. Traditionally made as part of the inabel weaving tradition, binakol designs were believed to protect the wearer or user by confusing or warding off evil spirits. These textiles are commonly used for blankets, bedcovers, and decorative cloths, showcasing the skilled handweaving heritage of the Ilocos region.',
        facts: [
          ['Origin', 'Ilocos Region, Philippines'],
          ['Material', 'Handwoven cotton'],
          ['Weaving Tradition', 'Inabel textile weaving'],
          ['Technique', 'Handloom (pedal loom weaving)'],
          ['Pattern Style', 'Geometric optical illusion (whirlwind designs)'],
          ['Cultural Belief', 'Protects against evil spirits by confusing them'],
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/artifacts_img/binakol/binakol.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/artifacts_img/binakol/binakol_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/artifacts_img/binakol/binakol_3.png')]", caption: 'Third Photo - AI Generated' }
      ]);
    } else if (i === 5) {
      setFullData({
        category: 'Artifacts · Religious Souvenir',
        title: 'Manila Temple Ornament',
        subtitle: 'Modern · Quezon City, Philippines (LDS Temple Souvenir)',
        tags: ['Christmas Ornament', 'LDS Church', 'Religious Keepsake', 'Manila Temple', 'Souvenir'],
        esc: 'The Manila Temple Ornament is a decorative keepsake inspired by the Manila Philippines Temple of The Church of Jesus Christ of Latter-day Saints. It is commonly produced as a Christmas ornament or collectible item to symbolize faith, remembrance, and connection to the temple. These ornaments often feature a miniature artistic depiction of the temple’s distinctive white architecture and are used in holiday decorations or as personal religious memorabilia by church members.',
        facts: [
          ['Type', 'Decorative religious ornament'],
          ['Inspiration', 'Manila Philippines Temple (LDS Church)'],
          ['Usage', 'Christmas decoration, religious souvenir'],
          ['Material', 'Varies (resin, metal, ceramic, or printed acrylic)'],
          ['Symbolism', 'Faith, remembrance, and temple heritage'],
          ['Common Season', 'Christmas and holiday displays']
        ]
      });

      setDetailSlide([
        { img: "bg-[url('/assets/artifacts_img/manila_temple/manila_temple.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/artifacts_img/manila_temple/manila_temple_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/artifacts_img/manila_temple/manila_temple_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  }  
  return (
    <>
      {/* ARTIFACT SECTION */}
      <section id="artifacts" className="p-(--section-pad) bg-(--ink) text-white relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            Cultural Artifacts
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] mb-5 text-white">
            Crafts of&nbsp; 
            <em className="text-(--crimson) italic">
              Identity
            </em>
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] max-w-140 text-white/50">
            Filipino artisans have long woven culture into cloth and metal. These artifacts carry the memory of a people.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-15 max-[900px]:grid-cols-1">
          <div className="border border-[rgba(201,168,76,0.15)] overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.5)] cursor-pointer " onClick={() => updateFullData(0)}>
            <div className="aspect-6/5 bg-[url('/assets/artifacts_img/barong_tagalog/barong_tagalog.png')] flex items-center justify-center text-[64px] border-b border-[rgba(201,168,76,0.15)]  bg-cover bg-center bg-no-repeat">
            </div>

            <div className="p-6">
              <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-2.5">
                Clothing
              </div>

              <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-2">
                Barong Tagalog
              </div>

              <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65]">
                The embroidered formal shirt woven from piña or jusi fabric — the national formal dress of the Philippines, worn by José Rizal himself.
              </p>
            </div>
          </div>

          <div className="border border-[rgba(201,168,76,0.15)] overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.5)] cursor-pointer" onClick={() => updateFullData(1)}>
            <div className="aspect-6/5 bg-[url('/assets/artifacts_img/barot_saya/barot_saya.png')] flex items-center justify-center text-[64px] border-b border-[rgba(201,168,76,0.15)] bg-cover bg-no-repeat bg-center">
            </div>

            <div className="p-6">
              <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-2.5">
                Clothing
              </div>

              <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-2">
                Baro&apos;t Saya
              </div>

              <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65]">
                The traditional dress of the Filipina — a blouse and wrap skirt combination evolved over centuries, adapted by Manila&apos;s colonial-era mestiza className.
              </p>
            </div>
          </div>

          <div className="border border-[rgba(201,168,76,0.15)] overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.5)] cursor-pointer" onClick={() => updateFullData(2)}>
            <div className="aspect-6/5 bg-[url('/assets/artifacts_img/parol/parol.png')] flex items-center justify-center text-[64px] border-b border-[rgba(201,168,76,0.15)] bg-center bg-cover">
            </div>

            <div className="p-6">
              <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-2.5">
                Ornaments
              </div>

              <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-2">
                Parol
              </div>

              <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65]">
                The parol (derived from the Spanish farol) is an iconic, star-shaped Filipino Christmas lantern.
              </p>
            </div>
          </div>

          <div className="border border-[rgba(201,168,76,0.15)] overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.5)] cursor-pointer" onClick={() => updateFullData(3)}>
            <div className="aspect-6/5 bg-[url('/assets/artifacts_img/gold_pectoral/gold_pectoral.png')] flex items-center justify-center text-[64px] border-b border-[rgba(201,168,76,0.15)] bg-center bg-cover">
            </div>

            <div className="p-6">
              <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-2.5">
                Ornaments
              </div>

              <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-2">
                Gold Pectoral 
              </div>

              <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65]">
                 Intricately crafted gold chest ornaments used by the pre-colonial nobility. These pieces, often discovered in archaeological sites like Butuan.
              </p>
            </div>
          </div>

          <div className="border border-[rgba(201,168,76,0.15)] overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.5)] cursor-pointer" onClick={() => updateFullData(4)}>
            <div className="aspect-6/5 bg-[url('/assets/artifacts_img/binakol/binakol.png')] flex items-center justify-center text-[64px] border-b border-[rgba(201,168,76,0.15)] bg-center bg-cover bg-no-repeat">
            </div>

            <div className="p-6">
              <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-2.5">
                Ornaments
              </div>

              <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-2">
                Binakol
              </div>

              <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65]">
                A distinct, geometric pattern woven into traditional fabrics by the Itneg/Tingguian people. 
              </p>
            </div>
          </div>

          <div className="border border-[rgba(201,168,76,0.15)] overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.5)] cursor-pointer" onClick={() => updateFullData(5)}>
            <div className="aspect-6/5 bg-[url('/assets/artifacts_img/manila_temple/manila_temple.png')] flex items-center justify-center text-[64px] border-b border-[rgba(201,168,76,0.15)] bg-cover bg-no-repeat">
            </div>

            <div className="p-6">
              <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-2.5">
                Ornaments
              </div>

              <div className="font-['Playfair_Display',serif] text-[20px] text-white mb-2">
                Manila Temple
              </div>

              <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65]">
                This beautiful ornament of the Manila, Philippines Temple is made from hand-selected premium birch plywood and measures approximately 3.5 inches in diameter.  
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArtifactSection