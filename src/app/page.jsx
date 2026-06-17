"use client";

import HomeSection from "@/components/sections/HomeSection";
import IntroSection from "@/components/sections/IntroSection";
import HistorySection from "@/components/sections/HistorySection";
import TraditionSection from "@/components/sections/TraditionSection";
import FoodSection from "@/components/sections/FoodSection";
import ArtifactSection from "@/components/sections/ArtifactSection";
import PlacesSection from "@/components/sections/PlacesSection";
import FiguresSection from "@/components/sections/FiguresSection";
import FooterSection from "@/components/sections/FooterSection";

import FullDetails from "@/components/components_function/fullDetail";

import React, { useState } from "react";

export default function Home() {
  const [toggleFullDetails, setToggleFullDetails] = useState(false);

  const [fullData, setFullData] = useState({
    category: '',
    title: '',
    subtitle: '',
    tags: [''],
    esc: '',
    facts: [['']]
  });

  const [detailSlide, setDetailSlide] = useState([
    { img: '', caption: 'First Photo' },
    { img: '', caption: 'Second Photo' },
    { img: '', caption: 'Third Photo' }
  ]);

  return (
    <main>
      <HomeSection />

      <IntroSection />

      <HistorySection setToggleFullDetails={setToggleFullDetails} 
                      setDetailSlide={setDetailSlide} 
                      setFullData={setFullData} /> 

      <ArtifactSection setToggleFullDetails={setToggleFullDetails} 
                       setDetailSlide={setDetailSlide} 
                       setFullData={setFullData} />
                       
      <FiguresSection setToggleFullDetails={setToggleFullDetails} 
                      setDetailSlide={setDetailSlide} 
                      setFullData={setFullData} />

      <FoodSection setToggleFullDetails={setToggleFullDetails} 
                   setDetailSlide={setDetailSlide} 
                   setFullData={setFullData} />

      <TraditionSection setToggleFullDetails={setToggleFullDetails} 
                        setDetailSlide={setDetailSlide} 
                        setFullData={setFullData} />

      <PlacesSection setToggleFullDetails={setToggleFullDetails} 
                     setDetailSlide={setDetailSlide} 
                     setFullData={setFullData} />

      <FooterSection />

      {toggleFullDetails && <FullDetails 
                              setToggleFullDetails={setToggleFullDetails}
                              setDetailSlide={detailSlide} 
                              setFullData={fullData} 
                              />}
    </main>
  );
}
