import Image from "next/image";
import Navbar from "@/components/navbar";
import HomeSection from "@/components/sections/HomeSection";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
    </main>
  );
}
