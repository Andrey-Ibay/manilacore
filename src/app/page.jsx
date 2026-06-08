"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import HomeSection from "@/components/sections/HomeSection";
import Search from "@/components/search";

import { useState } from "react";

export default function Home() {
   const [openSearch, setOpenSearch] = useState(false);

  return (
    <main>
      <Navbar setOpenSearch={setOpenSearch} />
      {openSearch && <Search setOpenSearch={setOpenSearch} />}
      <HomeSection />
    </main>
  );
}
