import React from "react";

import Image from 'next/image';
import Link from 'next/link';

const PlacesSection = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {
  const updateFullData = (i) => {

    if (i === 0) { 
      setFullData({
        category: 'Historical Sites · Defense',
        title: 'Fort Santiago',
        subtitle: 'Est. 1571 · Intramuros, Manila',
        tags: ['Fortress', 'Spanish Colonial', 'Defense', 'Intramuros', 'History'],
        esc: 'Built at the mouth of the Pasig River, Fort Santiago served as the premier defense fortress of the Spanish colonial government in the Philippines. It stands as a citadel that witnessed centuries of conflict, serving as a garrison, prison, and headquarters throughout various colonial regimes.',
        facts: [
          ['Established', '1571'],
          ['Location', 'Intramuros, Manila'],
          ['Primary Function', 'Defense fortress and garrison'],
          ['Historical Significance', 'Witnessed key events of Spanish & American colonial eras']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/places_img/fort_santiago/fort_santiago.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/places_img/fort_santiago/fort_santiago_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/places_img/fort_santiago/fort_santiago_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 1) { 
      setFullData({
        category: 'Historical Sites · Religious',
        title: 'San Agustin Church',
        subtitle: 'Est. 1586 · Intramuros, Manila',
        tags: ['Church', 'Baroque', 'UNESCO', 'Spanish Colonial', 'Stone Church'],
        esc: 'Recognized as the oldest stone church in the Philippines, this stunning Baroque structure is a testament to the enduring influence of the Spanish colonial architecture. It has survived numerous earthquakes and wars, including the Battle of Manila, and remains a UNESCO World Heritage site.',
        facts: [
          ['Established', '1586'],
          ['Architectural Style', 'Baroque'],
          ['Status', 'UNESCO World Heritage Site'],
          ['Claim to Fame', 'Oldest stone church in the Philippines']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/places_img/san_agustin/san_agustin.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/places_img/san_agustin/san_agustin_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/places_img/san_agustin/san_agustin_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 2) {
      setFullData({
        category: 'Historical Sites · Cultural',
        title: 'Binondo',
        subtitle: 'Est. 1594 · Manila',
        tags: ['Chinatown', 'Trade', 'Commerce', 'Cultural Hub', '1594'],
        esc: 'It is historically significant as the world\'s oldest Chinatown (established in 1594). It offers a different perspective on Manila’s history compared to the Spanish colonial sites, serving as a hub for trade, commerce, and the vibrant fusion of Chinese and Filipino cultures.',
        facts: [
          ['Established', '1594'],
          ['Location', 'Manila',],
          ['Distinction', 'World\'s oldest Chinatown'],
          ['Role', 'Center of Chinese-Filipino trade and culture']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/places_img/binondo/binondo.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/places_img/binondo/binondo_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/places_img/binondo/binondo_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 3) {
      setFullData({
        category: 'Historical Sites · Landmarks',
        title: 'Rizal Park',
        subtitle: 'Est. 1820 · Ermita, Manila',
        tags: ['National Park', 'Landmark', 'Rizal Monument', 'Execution Site', 'Recreation'],
        esc: 'It is most famous as the site where Dr. Jose Rizal was executed in 1896. Today, it is a bustling recreational area of the most heavily guarded monument in the country. It serves as a central gathering point for national celebrations and memorial services.',
        facts: [
          ['Established', '1820'],
          ['Location', 'Ermita, Manila'],
          ['Historical Event', 'Site of Dr. Jose Rizal\'s execution'],
          ['Modern Status', 'Major recreational park and national landmark']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/places_img/rizal_park/rizal_park.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/places_img/rizal_park/rizal_park_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/places_img/rizal_park/rizal_park_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 4) {
      setFullData({
        category: 'Historical Sites · Museums',
        title: 'National Museum Complex',
        subtitle: 'Est. 1901 · Manila',
        tags: ['Museum', 'Neoclassical', 'Art', 'Anthropology', 'Education'],
        esc: 'Located just adjacent to Rizal Park, this complex is housed in beautifully preserved neoclassical government buildings. It includes the National Museum of Fine Arts and the National Museum of Anthropology, housing the nation\'s most treasured artifacts and artworks.',
        facts: [
          ['Established', '1901'],
          ['Architecture', 'Neoclassical government buildings'],
          ['Focus', 'Fine Arts, Anthropology, and Natural History'],
          ['Significance', 'Repository of national heritage']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/places_img/national_museum/national_museum.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/places_img/national_museum/national_museum_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/places_img/national_museum/national_museum_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 5) { 
      setFullData({
        category: 'Historical Sites · Landmarks',
        title: 'Paco Park',
        subtitle: 'Est. 1966 (Park conversion) · Manila',
        tags: ['Cemetery', 'Spanish Era', 'Park', 'Garden', 'History'],
        esc: 'Originally built by the Dominicans in the late 18th century, Paco Park served as a municipal cemetery for the Spanish elite and victims of cholera epidemics in the 19th century. It is also the site where the remains of Dr. Jose Rizal were interred before being moved to the monument in Rizal Park.',
        facts: [
          ['Original Purpose', 'Municipal cemetery for Spanish elite'],
          ['Notable History', 'Temporary burial site of Dr. Jose Rizal'],
          ['Conversion', 'Converted into a national park in 1966'],
          ['Setting', 'Popular garden and concert venue today']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/places_img/paco_park/paco_park.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/places_img/paco_park/paco_park_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/places_img/paco_park/paco_park_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  };

  return (
    <>
      {/* HISTORICAL PLACES SECTION */}
      <section id="places" className="p-(--section-pad) bg-(--cream) relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            Heritage Sites
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] text-(--ink) mb-5">
            Places That&nbsp; 
            <em className="text-(--crimson) italic">
              Endure
            </em>
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-(--warm-gray) max-w-140">
            Manila&apos;s landscape is layered with centuries of architecture, spirituality, and memory.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-0 mt-15 border border-(--border) max-[900px]:grid-cols-1">
          <div className="group p-12 px-9 border-r border-(--border) relative overflow-hidden transition-colors duration-300 last:border-r-0 hover:bg-(--ink)">
            <div className="font-['Playfair_Display',serif] text-[64px] font-black text-[rgba(201,168,76,0.1)] absolute top-4 right-5 leading-none group-hover:text-[rgba(201,168,76,0.15)]">
              01
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-4">
              Est. 1571
            </div>

            <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink) mb-3.5 transition-colors duration-300 group-hover:text-white">
              Fort Santiago
            </div>

            <p className="text-[14px] leading-[1.7] text-(--warm-gray) transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
              Built at the mouth of the Pasig River, Fort Santiago served as the premier defense fortress of the Spanish colonial government in the Philippines. 
            </p>

            <div className="mt-5">
              <button className="text-[12px] tracking-[0.12em] uppercase no-underline flex items-center gap-2 text-(--gold) after:content-['→'] hover:text-(--gold-light)  cursor-pointer" onClick={() => updateFullData(0)}>
                Read More
              </button>
            </div>
          </div>

           <div className="group p-12 px-9 border-r border-(--border) relative overflow-hidden transition-colors duration-300 last:border-r-0 hover:bg-(--ink)">
            <div className="font-['Playfair_Display',serif] text-[64px] font-black text-[rgba(201,168,76,0.1)] absolute top-4 right-5 leading-none group-hover:text-[rgba(201,168,76,0.15)]">
              02
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-4">
              Est. 1586
            </div>

            <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink) mb-3.5 transition-colors duration-300 group-hover:text-white">
              San Agustin Church
            </div>

            <p className="text-[14px] leading-[1.7] text-(--warm-gray) transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
              Recognized as the oldest stone church in the Philippines, this stunning Baroque structure is a testament to the enduring influence of the Spanish colonial architecture. 
            </p>

            <div className="mt-5">
              <button className="text-[12px] tracking-[0.12em] uppercase no-underline flex items-center gap-2 text-(--gold) after:content-['→'] hover:text-(--gold-light) cursor-pointer" onClick={() => updateFullData(1)}>
                Read More
              </button>
            </div>
          </div>

          <div className="group p-12 px-9 border-r border-(--border) relative overflow-hidden transition-colors duration-300 last:border-r-0 hover:bg-(--ink)">
            <div className="font-['Playfair_Display',serif] text-[64px] font-black text-[rgba(201,168,76,0.1)] absolute top-4 right-5 leading-none group-hover:text-[rgba(201,168,76,0.15)]">
              03
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-4">
              Est. 1594
            </div>

            <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink) mb-3.5 transition-colors duration-300 group-hover:text-white">
              Binondo
            </div>

            <p className="text-[14px] leading-[1.7] text-(--warm-gray) transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
              It is historically significant as the world’s oldest Chinatown (established in 1594). It offers a different perspective on Manila’s history compared to the Spanish colonial sites.
 
            </p>

            <div className="mt-5">
              <button className="text-[12px] tracking-[0.12em] uppercase no-underline flex items-center gap-2 text-(--gold) after:content-['→'] hover:text-(--gold-light)  cursor-pointer" onClick={() => updateFullData(2)}>
                Read More
              </button>
            </div>
          </div>

          <div className="group p-12 px-9 border-r border-(--border) relative overflow-hidden transition-colors duration-300 last:border-r-0 hover:bg-(--ink)">
            <div className="font-['Playfair_Display',serif] text-[64px] font-black text-[rgba(201,168,76,0.1)] absolute top-4 right-5 leading-none group-hover:text-[rgba(201,168,76,0.15)]">
              04
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-4">
              Est. 1820
            </div>

            <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink) mb-3.5 transition-colors duration-300 group-hover:text-white">
              Rizal Park
            </div>

            <p className="text-[14px] leading-[1.7] text-(--warm-gray) transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
              It is most famous as the site where Dr. Jose Rizal was executed in 1896. Today, it is a bustling recreational area of the most heavily guarded monument in the country.

            </p>

            <div className="mt-5">
              <button  className="text-[12px] tracking-[0.12em] uppercase no-underline flex items-center gap-2 text-(--gold) after:content-['→'] hover:text-(--gold-light)  cursor-pointer" onClick={() => updateFullData(3)}>
                Read More
              </button>
            </div>
          </div>

          <div className="group p-12 px-9 border-r border-(--border) relative overflow-hidden transition-colors duration-300 last:border-r-0 hover:bg-(--ink)">
            <div className="font-['Playfair_Display',serif] text-[64px] font-black text-[rgba(201,168,76,0.1)] absolute top-4 right-5 leading-none group-hover:text-[rgba(201,168,76,0.15)]">
              05
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-4">
              Est. 1901
            </div>

            <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink) mb-3.5 transition-colors duration-300 group-hover:text-white">
              National Museum Complex
            </div>

            <p className="text-[14px] leading-[1.7] text-(--warm-gray) transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
              Located just adjacent to Rizal Park, this complex is housed in beautifully preserved neoclassical government buildings. It includes the National Museum of Fine Arts and Anthropology.
            </p>

            <div className="mt-5">
              <button className="text-[12px] tracking-[0.12em] uppercase no-underline flex items-center gap-2 text-(--gold) after:content-['→'] hover:text-(--gold-light)  cursor-pointer" onClick={() => updateFullData(4)}>
                Read More
              </button>
            </div>
          </div>

          <div className="group p-12 px-9 border-r border-(--border) relative overflow-hidden transition-colors duration-300 last:border-r-0 hover:bg-(--ink)">
            <div className="font-['Playfair_Display',serif] text-[64px] font-black text-[rgba(201,168,76,0.1)] absolute top-4 right-5 leading-none group-hover:text-[rgba(201,168,76,0.15)]">
              06
            </div>

            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-4">
              Est. 1966
            </div>

            <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink) mb-3.5 transition-colors duration-300 group-hover:text-white">
              Paco Park
            </div>

            <p className="text-[14px] leading-[1.7] text-(--warm-gray) transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.55)]">
             Originally built by the Dominicans in the late 18th century, Paco Park served as a municipal cemetery for the Spanish elite and victims of cholera epidemics in the 19th century. 
            </p>

            <div className="mt-5">
              <button className="text-[12px] tracking-[0.12em] uppercase no-underline flex items-center gap-2 text-(--gold) after:content-['→'] hover:text-(--gold-light)  cursor-pointer" onClick={() => updateFullData(5)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlacesSection