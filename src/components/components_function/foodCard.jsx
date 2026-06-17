"use client";

import React, { useState } from 'react';

const foodCard = ({ food, cardType, image, onClick }) => {
  const cardStyles = {
    normal: "pt-[100%]",
    tall: "pt-[130%]",
    wide: "pt-[70%]",
  };

  return (
    <>
       <div className="break-inside-avoid mb-5 bg-white pt-3 px-3 pb-9 shadow-[0_2px_8px_rgba(0,0,0,0.10),0_8px_24px_rgba(0,0,0,0.07)] cursor-pointer block relative transition-[transform,box-shadow] duration-280ms ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:translate-y-1.5 hover:scale-[1.02] hover:rotate-0 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.10)] hover:z-10 duration-300 polaroid" onClick={onClick}>
        <div className={`w-full ${image} bg-cover bg-center flex items-center justify-center relative overflow-hidden`}>
          <div className={`w-full ${cardStyles[cardType]} relative`}>
          </div>
        </div>

        <div className="pt-3.5 px-1">
          <div className="font-['Playfair_Display',serif] text-[16px] font-bold text-(--ink) mb-1 leading-[1.2]">
            {food.title}
          </div>

          <div className="text-[11px] tracking-widest uppercase text-(--gold)">
            {food.subtitle}
          </div>

          {cardType !== "wide" && (
            <div className="text-[12px] leading-[1.6] text-(--warm-gray) mt-1.5">
              {food.description}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default foodCard