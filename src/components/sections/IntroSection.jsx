import React from 'react'

const IntroSection = () => {
  return (
    <>
      {/* INTRODUCTION SECTION */}
      <section id="information" className="relative px-15 py-20 bg-(--ink) text-white max-[900px]:px-6 max-[900px]:py-15">
        <div className="max-w-160">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            What awaits you
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] mb-5 text-white">
            Six centuries of
            <br/>
            <em className="text-(--crimson) italic">
              living heritage
            </em>
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-white/55 max-w-140">
            From the walled city of Intramuros to the aroma of sinigang, Manila&apos;s identity is woven across history, place, tradition, food, and artistry.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-0.5 mt-15 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div className="py-10 px-6 border border-[rgba(201,168,76,0.15)] cursor-pointer transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--gold) before:scale-x-0 before:transition-transform before:duration-300 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] hover:before:scale-x-100">
            <span className="text-[32px] mb-5 block">
              📜
            </span>

            <div className="font-['Playfair_Display',serif] text-[18px] font-bold text-(--gold) mb-2.5">
              History
            </div>

            <p className="text-[13px] leading-[1.65] text-white/45">
              Key events, colonial eras, and the timeline that shaped Manila from pre-colonial times to the present.
            </p>
          </div>

          <div className="py-10 px-6 border border-[rgba(201,168,76,0.15)] cursor-pointer transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--gold) before:scale-x-0 before:transition-transform before:duration-300 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] hover:before:scale-x-100">
            <span className="text-[32px] mb-5 block">
              🏛️
            </span>

            <div className="font-['Playfair_Display',serif] text-[18px] font-bold text-(--gold) mb-2.5">
              Historical Places
            </div>

            <p className="text-[13px] leading-[1.65] text-white/45">
              Intramuros, Rizal Park, and the heritage sites that stand as living monuments to Manila&apos;s past.
            </p>
          </div>

          <div className="py-10 px-6 border border-[rgba(201,168,76,0.15)] cursor-pointer transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--gold) before:scale-x-0 before:transition-transform before:duration-300 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] hover:before:scale-x-100">
            <span className="text-[32px] mb-5 block">
              🎖️
            </span>

            <div className="font-['Playfair_Display',serif] text-[18px] font-bold text-(--gold) mb-2.5">
              Historical Figures
            </div>

            <p className="text-[13px] leading-[1.65] text-white/45">
              Heroes, reformists, and leaders whose lives defined the Filipino identity and nation.
            </p>
          </div>

          <div className="py-10 px-6 border border-[rgba(201,168,76,0.15)] cursor-pointer transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--gold) before:scale-x-0 before:transition-transform before:duration-300 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] hover:before:scale-x-100">
            <span className="text-[32px] mb-5 block">
              🕯️
            </span>

            <div className="font-['Playfair_Display',serif] text-[18px] font-bold text-(--gold) mb-2.5">
              Traditions
            </div>

            <p className="text-[13px] leading-[1.65] text-white/45">
              Religious processions, festivals of light, and rituals passed down across generations.
            </p>
          </div>

          <div className="py-10 px-6 border border-[rgba(201,168,76,0.15)] cursor-pointer transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--gold) before:scale-x-0 before:transition-transform before:duration-300 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] hover:before:scale-x-100">
            <span className="text-[32px] mb-5 block">
              🍲
            </span>

            <div className="font-['Playfair_Display',serif] text-[18px] font-bold text-(--gold) mb-2.5">
              Food
            </div>

            <p className="text-[13px] leading-[1.65] text-white/45">
              Ulam, kakanin, and street food that tell the story of Manila&apos;s diverse culinary soul.
            </p>
          </div>

          <div className="py-10 px-6 border border-[rgba(201,168,76,0.15)] cursor-pointer transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-(--gold) before:scale-x-0 before:transition-transform before:duration-300 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.4)] hover:before:scale-x-100">
            <span className="text-[32px] mb-5 block">
              🪡
            </span>

            <div className="font-['Playfair_Display',serif] text-[18px] font-bold text-(--gold) mb-2.5">
              Cultural Artifacts
            </div>

            <p className="text-[13px] leading-[1.65] text-white/45">
              Traditional clothing, ornaments, and crafts that embody the artistry of Filipino heritage.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default IntroSection