"use client";

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const FoodSection = () => {
  const [foodTab, setFoodTab] = useState("Dishes");
  const [foodItem, setFoodItem] = useState("Sinigang");

  return (
    <>
      {/* FOOD SECTION */}
       <section id="food" className="p-(--section-pad) bg-(--cream) relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            Food
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] text-(--ink) mb-5">
            The&nbsp; 
            <em className="text-(--crimson) italic">
              Flavors&nbsp; 
            </em> 
            of Manila
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-(--warm-gray) max-w-140">
            Manila&apos;s cuisine is a living archive — Spanish, Chinese, Malay, and American influences simmered into something entirely its own.
          </p>
        </div>

        <div className="grid grid-cols-[1.2fr_2fr] gap-20 items-start mt-15 max-[900px]:grid-cols-1">
          <div>
            {/* TABS */}
            <div className="flex gap-10 border-b border-(--border) mb-4">
              <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Dishes" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-dish" 
              onClick={() => {
                  setFoodTab("Dishes");
                  setFoodItem("Sinigang");
                }}>
                <span className="text-[15px]">
                  🍲
                </span> 
                Dishes
              </button>

              <button className={`bg-transparent border cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Street Foods" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-street" onClick={() => {
                  setFoodTab("Street Foods");
                  setFoodItem("Isaw");
                }}>
                <span className="text-[15px]">
                  🥢
                </span> 
                Street Foods
              </button>
              
              <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Desserts" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"}`} id="ftab-dessert" 
              onClick={() => {
                  setFoodTab("Desserts");
                  setFoodItem("Halo-Halo");
                }}>
                <span className="text-[15px]">
                  🍮
                </span> 
                Desserts
              </button>

              <button className={`bg-transparent border-0 cursor-pointer font-['DM_Sans',sans] text-[13px] font-medium tracking-widest uppercase px-5.5 pt-2.5 pb-3 -mb-px flex items-center gap-1.75 transition-colors duration-200 hover:text-(--ink) ${foodTab === "Beverages" ? "text-(--ink) border-b-(--gold) border-b-2" : "text-(--warm-gray) border-b-transparent"} w-[38%]`} id="ftab-beverages" 
              onClick={() => {
                  setFoodTab("Beverages");
                  setFoodItem("Halo-Halo");
                }}>
                <span className="text-[15px]">
                  🧋
                </span> 
                Beverages
              </button>
            </div>
    
            {/* DISHES PANEL */}
            <div className={`food-panel ${foodTab === "Dishes" ? "flex flex-col gap-1" : "hidden"}`} id="fpanel-dish">
              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodTab === "Dishes" &&  foodItem === "Sinigang" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Sinigang")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodTab === "Dishes" && foodItem === "Sinigang" ? "text-white" : ""}`}>
                    Sinigang
                  </div>

                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodTab === "Dishes" &&  foodItem === "Sinigang" ? "text-(--gold)" : "text-(--warm-gray) "}`}>
                    Ulam — Sour Soup
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodTab === "Dishes" &&  foodItem === "Sinigang" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Adobo" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Adobo")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Adobo" ? "text-white" : ""}`}>
                    Adobo
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Adobo" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Ulam — Braised
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Adobo" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Mami" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Mami")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Mami" ? "text-white" : ""}`}>
                    Mami
                  </div>

                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Mami" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Ulam — Noodle Soup
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Mami" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Beef Pares" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Beef Pares")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Beef Pares" ? "text-white" : ""}`}>
                    Beef Pares
                  </div>

                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Beef Pares" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Ulam — Beef Stew
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Beef Pares" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Lechon Kawali" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Lechon Kawali")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Lechon Kawali" ? "text-white" : ""}`}>
                    Lechon Kawali
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Lechon Kawali" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Ulam — Crispy Pork
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Lechon Kawali" ? "opacity-100" : ""}`}>→</div>
              </div>
            </div>
    
            {/* STREET FOOD PANEL */}
            <div className={`food-panel ${foodTab === "Street Foods" ? "flex flex-col gap-1" : "hidden"}`} id="fpanel-street">
              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodTab === "Street Foods" && foodItem === "Isaw" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Isaw")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodTab === "Street Foods" && foodItem === "Isaw" ? "text-white" : ""}`}>
                    Isaw
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodTab === "Street Foods" && foodItem === "Isaw" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Street Food — Grilled
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodTab === "Street Foods" && foodItem === "Isaw" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Kwek-Kwek" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Kwek-Kwek")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Kwek-Kwek" ? "text-white" : ""}`}>
                    Kwek-Kwek
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Kwek-Kwek" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Street Food — Fried
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Kwek-Kwek" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Balut" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Balut")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Balut" ? "text-white" : ""}`}>
                    Balut
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Balut" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Street Food — Boiled
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Balut" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Fishball" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Fishball")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Fishball" ? "text-white" : ""}`}>
                    Fishball
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Fishball" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Street Food — Fried
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Fishball" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Taho" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Taho")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Taho" ? "text-white" : ""}`}>
                    Taho
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Taho" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Street Food — Warm
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Taho" ? "opacity-100" : ""}`}>→</div>
              </div>
            </div>
    
            {/* DESSERTS PANEL */}
            <div className={`food-panel ${foodTab === "Desserts" ? "flex flex-col gap-1" : "hidden"}`} id="fpanel-dessert">
              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodTab === "Desserts" && foodItem === "Halo-Halo" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Halo-Halo")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodTab === "Desserts" && foodItem === "Halo-Halo" ? "text-white" : ""}`}>
                    Halo-Halo
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodTab === "Desserts" && foodItem === "Halo-Halo" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Dessert — Chilled
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodTab === "Desserts" &&  foodItem === "Halo-Halo" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Bibingka" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Bibingka")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Bibingka" ? "text-white" : ""}`}>
                    Bibingka
                  </div>

                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Bibingka" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Dessert — Baked
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Bibingka" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Leche Flan" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Leche Flan")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Leche Flan" ? "text-white" : ""}`}>
                    Leche Flan
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Leche Flan" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Dessert — Steamed
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Leche Flan" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Puto Bumbong" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Puto Bumbong")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Puto Bumbong" ? "text-white" : ""}`}>
                    Puto Bumbong
                  </div>
                  
                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Puto Bumbong" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Dessert — Steamed
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Puto Bumbong" ? "opacity-100" : ""}`}>→</div>
              </div>

              <div className={`group p-4.5 px-5 border border-transparent cursor-pointer transition-all duration-200 flex justify-between items-center hover:bg-(--ink) hover:border-(--gold) ${foodItem === "Ube Halaya" ? "border-(--gold) bg-(--ink)" : ""}`} onClick={() => setFoodItem("Ube Halaya")}>
                <div>
                  <div className={`font-['Playfair_Display',serif] text-[17px] text-(--ink) group-hover:text-white ${foodItem === "Ube Halaya" ? "text-white" : ""}`}>
                    Ube Halaya
                  </div>

                  <div className={`text-[12px] tracking-[0.06em] group-hover:text-(--gold) ${foodItem === "Ube Halaya" ? "text-(--gold)" : "text-(--warm-gray)"}`}>
                    Dessert — Jam
                  </div>
                </div>

                <div className={`text-(--gold) opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${foodItem === "Ube Halaya" ? "opacity-100" : ""}`}>→</div>
              </div>
            </div>
          </div>
    
          {/* DETAIL PANEL */}
          <div className="p-10 border border-(--border) bg-white" id="food-detail">
            <div className="w-full aspect-7/4 bg-[linear-gradient(135deg,#2a1a08,#8B1A1A)] mb-7 flex items-center justify-center">
              <span id="food-emoji" className="font-['Playfair_Display',serif] text-[48px] text-[rgba(201,168,76,0.3)]">
                🍲
              </span>
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-3" id="food-tag">
              Ulam
            </div>

            <div className="font-['Playfair_Display',serif] text-[32px] text-(--ink) mb-4" id="food-name">
              Sinigang
            </div>

            <p className="text-[15px] leading-[1.8] text-(--warm-gray)" id="food-desc">
              The quintessential Filipino sour soup — tamarind-broth tender pork, shrimp, or fish simmered with kangkong, radish, and eggplant. Each family has its own version, and the debate over the souring agent never ends.
            </p>

            <div className="mt-7">
              <Link href="javascript:void(0)" className="px-9 py-3.5 bg-(--gold) text-(--ink) font-['DM_Sans', sans] font-medium tracking-widest uppercase no-underline transition-colors duration-200 text-[12px] inline-block hover:bg-(--gold-light)">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FoodSection