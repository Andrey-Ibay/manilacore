import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const TraditionSection = ({ setToggleFullDetails, setDetailSlide, setFullData }) => {

  const updateFullData = (i) => {
    if (i === 0) {
      setFullData({
        category: 'Religious',
        title: 'Feast of the Black Nazarene',
        subtitle: 'Annual Procession · Quiapo, Manila',
        tags: ['Religious', 'Procession', 'Miracle', 'Faith', 'Nazareno'],
        esc: 'Devotees believe the statue possesses miraculous healing powers, and the crowd frantically pushes forward to touch the ropes pulling the carriage or to throw towels to be wiped on the image.',
        facts: [
          ['Type', 'Religious Procession'],
          ['Location', 'Quiapo, Manila'],
          ['Primary Focus', 'Miraculous image of Jesus of Nazareth'],
          ['Key Ritual', 'Translacion (transfer of the statue)']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/traditions_img/black_nazarene/black_nazarene.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/traditions_img/black_nazarene/black_nazarene_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/traditions_img/black_nazarene/black_nazarene_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 1) {
      setFullData({
        category: 'Religious',
        title: 'Feast of Santo Niño de Tondo',
        subtitle: 'Annual Celebration · Tondo, Manila',
        tags: ['Religious', 'Child Jesus', 'Festival', 'Tondo', 'Hari ng Tondo'],
        esc: 'As the second-oldest image of the Child Jesus in the Philippines, the Santo Niño of Tondo is affectionately called the "Hari ng Tondo" (King of Tondo) and serves as the divine protector of the city\'s most populous and historically working-class district.',
        facts: [
          ['Type', 'Religious Festival'],
          ['Location', 'Tondo, Manila'],
          ['Title', 'Hari ng Tondo'],
          ['Significance', 'Second-oldest image of the Child Jesus']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/traditions_img/santo_nino/santo_nino.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/traditions_img/santo_nino/santo_nino_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/traditions_img/santo_nino/santo_nino_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 2) {
      setFullData({
        category: 'Festivals',
        title: 'Araw ng Maynila',
        subtitle: 'City Foundation Day · June 24',
        tags: ['Civic Holiday', 'Manila', 'Culture', 'Awards', 'Parade'],
        esc: 'This is the official civic holiday of the Philippine capital. The city government hosts a variety of events, including the Outstanding Manilans Awards, wreath-laying ceremonies at the tombs of the city\'s founders and heroes, civil-military parades, and the Manila Film Festival.',
        facts: [
          ['Type', 'Civic Holiday'],
          ['Date', 'June 24'],
          ['Key Event', 'Outstanding Manilans Awards'],
          ['Tradition', 'Civil-military parades and wreath-laying']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/traditions_img/araw_maynila/araw_maynila.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/traditions_img/araw_maynila/araw_maynila_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/traditions_img/araw_maynila/araw_maynila_3.png')]", caption: 'Third Photo' }
      ]);
    } else if (i === 3) {
      setFullData({
        category: 'Festivals',
        title: 'Aliwan Fiesta',
        subtitle: 'Festival of Champions · CCP Complex',
        tags: ['Culture', 'Heritage', 'Festival', 'Parade', 'Competition'],
        esc: 'Dubbed the "Festival of Champions," Aliwan Fiesta was created to showcase the diverse cultures and heritage of the entire Philippine archipelago in one massive event. It features elaborate floats, thunderous drumbeats, and the crowning of the Reyna ng Aliwan.',
        facts: [
          ['Type', 'Cultural Festival'],
          ['Nickname', 'Festival of Champions'],
          ['Venue', 'CCP Complex'],
          ['Main Highlights', 'Float parade and Reyna ng Aliwan pageant']
        ]
      });
      setDetailSlide([
        { img: "bg-[url('/assets/traditions_img/aliwan_festival/aliwan.png')]", caption: 'First Photo' },
        { img: "bg-[url('/assets/traditions_img/aliwan_festival/aliwan_2.png')]", caption: 'Second Photo' },
        { img: "bg-[url('/assets/traditions_img/aliwan_festival/aliwan_3.png')]", caption: 'Third Photo' }
      ]);
    }

    setToggleFullDetails(true);
  };

  return (
    <>
      {/* TRADITION SECTION */}
      <section id="traditions" className="p-(--section-pad) bg-[#1A0F04] text-white relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            Traditions
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] mb-5 text-white">
            Faith,&nbsp; 
            <em className="text-(--crimson) italic">
              Festival&nbsp;
            </em> 
            & Ritual
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-[rgba(255,255,255,0.5)] max-w-140">
            Manila&apos;s soul is expressed through its living traditions — from solemn processions to joyful street celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-15 max-[900px]:grid-cols-1">
          <div className="p-10 px-9 border border-[rgba(201,168,76,0.12)] transition-colors duration-300 hover:border-[rgba(201,168,76,0.4)]">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-(--gold) border border-[rgba(201,168,76,0.3)] px-3 py-1 mb-5">
              Religious
            </span>

            <div className="font-['Playfair_Display',serif] text-[26px] font-bold text-white mb-3.5">
              Feast of the Black Nazarene
            </div>

            <p className="text-[14px] leading-[1.75] text-[rgba(255,255,255,0.5)] mb-6">
              Devotees believe the statue possesses miraculous healing powers, and the crowd frantically pushes forward to touch the ropes  pulling the carriage or to throw towels to be wiped on the image.

            </p>

            <Link href="javascript:void(0)" className="flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-(--gold) no-underline after:content-['→'] hover:text-(--gold-light)" onClick={() => updateFullData(0)}>
              Read more
            </Link>
          </div>

          <div className="p-10 px-9 border border-[rgba(201,168,76,0.12)] transition-colors duration-300 hover:border-[rgba(201,168,76,0.4)]">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-(--gold) border border-[rgba(201,168,76,0.3)] px-3 py-1 mb-5">
              Religious
            </span>

            <div className="font-['Playfair_Display',serif] text-[26px] font-bold text-white mb-3.5">
              Feast of Santo Niño de Tondo
            </div>

            <p className="text-[14px] leading-[1.75] text-[rgba(255,255,255,0.5)] mb-6">
              As the second-oldest image of the Child Jesus in the Philippines, the Santo Niño of Tondo is affectionately called the &quot;Hari ng Tondo&quot; (King of Tondo) and serves as the divine protector of the city&apos;s most populous and historically working-class district.
            </p>

            <Link href="javascript:void(0)" className="flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-(--gold) no-underline after:content-['→'] hover:text-(--gold-light)" onClick={() => updateFullData(1)}>
              Read more
            </Link>
          </div>

          <div className="p-10 px-9 border border-[rgba(201,168,76,0.12)] transition-colors duration-300 hover:border-[rgba(201,168,76,0.4)]">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-(--gold) border border-[rgba(201,168,76,0.3)] px-3 py-1 mb-5">
              Festivals
            </span>

            <div className="font-['Playfair_Display',serif] text-[26px] font-bold text-white mb-3.5">
              Araw ng Maynila
            </div>

            <p className="text-[14px] leading-[1.75] text-[rgba(255,255,255,0.5)] mb-6">
              This is the official civic holiday of the Philippine capital. The city government hosts a variety of events, including the Outstanding Manilans Awards, wreath-laying ceremonies at the tombs of the city&apos;s founders and heroes, civil-military parades, and the Manila Film Festival.
            </p>

            <Link href="javascript:void(0)" className="flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-(--gold) no-underline after:content-['→'] hover:text-(--gold-light)" onClick={() => updateFullData(2)}>
              Read more
            </Link>
          </div>

          <div className="p-10 px-9 border border-[rgba(201,168,76,0.12)] transition-colors duration-300 hover:border-[rgba(201,168,76,0.4)]">
            <span className="inline-block text-[11px] tracking-[0.15em] uppercase text-(--gold) border border-[rgba(201,168,76,0.3)] px-3 py-1 mb-5">
              Festivals
            </span>

            <div className="font-['Playfair_Display',serif] text-[26px] font-bold text-white mb-3.5">
              Aliwan Fiesta
            </div>

            <p className="text-[14px] leading-[1.75] text-[rgba(255,255,255,0.5)] mb-6">
              Dubbed the &quot;Festival of Champions,&quot; Aliwan Fiesta was created to showcase the diverse cultures and heritage of the entire Philippine archipelago in one massive event. It features elaborate floats, thunderous drumbeats, and the crowning of the Reyna ng Aliwan.
            </p>

            <Link href="javascript:void(0)" className="flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-(--gold) no-underline after:content-['→'] hover:text-(--gold-light)" onClick={() => updateFullData(3)}>
              Read more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default TraditionSection