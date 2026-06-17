import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const HistorySection = () => {
  return (
    <>
      {/* HISTORY SECTION */}
      <section id="history" className="p-(--section-pad) bg-(--cream) relative max-[900px]:py-15 max-[900px]:px-6">
        <div className="max-w-140">
          <div className="text-[11px] tracking-[0.2em] uppercase text-(--gold) mb-3">
            History
          </div>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(32px,4vw,52px)] font-bold leading-[1.15] text-(--ink) mb-5">
            Key Events&nbsp; 
            <em className="italic text-(--crimson)">
              by Year
            </em>
          </h2>

          <div className="w-15 h-0.5 bg-(--gold) my-6"></div>

          <p className="text-[16px] leading-[1.75] text-(--warm-gray) max-w-140">
            A timeline of the pivotal moments that built the city we know as Manila.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20 items-start mt-15 max-[900px]:grid-cols-1">
          <div className="relative">
            <div className="flex gap-6 mb-12 relative">
              <div className="font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-widest min-w-12 pt-0.75">
                1258
              </div>

              <div className="w-2.5 h-2.5 border-2 border-(--gold) rounded-full shrink-0 mt-2 bg-(--cream) relative z-10"></div>

              <div className="absolute left-27 top-3.75 -bottom-12 w-px bg-(--border) z-10"></div>

              <div className="timeline-content">
                <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-(--ink) mb-2 hover:underline cursor-pointer decoration-(--gold) decoration-1 underline-offset-4 hover:text-(--gold)">
                  Kingdom of Maynila Founded
                </h3>

                <p className="text-[14px] leading-[1.7] text-(--warm-gray)">
                  A Tagalog polity under Rajah Sulayman flourishes along the banks of the Pasig River, trading with neighboring kingdoms across Southeast Asia.
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-12 relative">
              <div className="font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-widest min-w-12 pt-0.75">
                1570
              </div>

              <div className="w-2.5 h-2.5 border-2 border-(--gold) rounded-full shrink-0 mt-2 bg-(--cream) relative z-10"></div>

              <div className="absolute left-27 top-3.75 -bottom-12 w-px bg-(--border) z-10"></div>

              <div className="timeline-content">
                <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-(--ink) mb-2 hover:underline cursor-pointer decoration-(--gold) decoration-1 underline-offset-4 hover:text-(--gold)">
                  The Conquest of Maynila
                </h3>

                <p className="text-[14px] leading-[1.7] text-(--warm-gray)">
                  Spanish forces led by Martín de Goiti attacked the palisaded kingdom of Maynila, ruled by Rajah Sulayman. 
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-12 relative">
              <div className="font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-widest min-w-12 pt-0.75">
                1896
              </div>

              <div className="w-2.5 h-2.5 border-2 border-(--gold) rounded-full shrink-0 mt-2 bg-(--cream) relative z-10"></div>

              <div className="absolute left-27 top-3.75 -bottom-12 w-px bg-(--border) z-10"></div>

              <div className="timeline-content">
                <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-(--ink) mb-2 hover:underline cursor-pointer decoration-(--gold) decoration-1 underline-offset-4 hover:text-(--gold)">
                  Philippine Revolution
                </h3>

                <p className="text-[14px] leading-[1.7] text-(--warm-gray)">
                  Andrés Bonifacio and the Katipunan launch the revolution against Spanish colonial rule. Manila becomes the heart of the independence movement.
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-12 relative">
              <div className="font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-widest min-w-12 pt-0.75">
                1945
              </div>

              <div className="w-2.5 h-2.5 border-2 border-(--gold) rounded-full shrink-0 mt-2 bg-(--cream) relative z-10"></div>

              <div className="absolute left-27 top-3.75 -bottom-12 w-px bg-(--border) z-10"></div>

              <div className="timeline-content">
                <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-(--ink) mb-2 hover:underline cursor-pointer decoration-(--gold) decoration-1 underline-offset-4 hover:text-(--gold)">
                  Battle of Manila
                </h3>

                <p className="text-[14px] leading-[1.7] text-(--warm-gray)">
                  The city suffers catastrophic destruction during WWII liberation. The Battle of Manila becomes one of the worst urban destructions of the Pacific War.
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-12 relative">
              <div className="font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-widest min-w-12 pt-0.75">
                1971
              </div>

              <div className="w-2.5 h-2.5 border-2 border-(--gold) rounded-full shrink-0 mt-2 bg-(--cream) relative z-10"></div>

              <div className="absolute left-27 top-3.75 -bottom-12 w-px bg-(--border) z-10"></div>

              <div className="timeline-content">
                <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-(--ink) mb-2 hover:underline cursor-pointer decoration-(--gold) decoration-1 underline-offset-4 hover:text-(--gold)">
                  The Plaza Miranda Bombing
                </h3>

                <p className="text-[14px] leading-[1.7] text-(--warm-gray)">
                   During a political rally of the opposition Liberal Party at Plaza Miranda in Quiapo, Manila, unidentified attackers threw two fragmentation grenades onto the stage.
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-0 relative">
              <div className="font-['Playfair_Display',serif] text-[13px] font-bold text-(--gold) tracking-widest min-w-12 pt-0.75">
                1979
              </div>

              <div className="w-2.5 h-2.5 border-2 border-(--gold) rounded-full shrink-0 mt-2 bg-(--cream) relative z-10"></div>

              <div className="timeline-content">
                <h3 className="font-['Playfair_Display',serif] text-[17px] font-bold text-(--ink) mb-2 hover:underline cursor-pointer decoration-(--gold) decoration-1 underline-offset-4 hover:text-(--gold)">
                  Intramuros Restoration
                </h3>

                <p className="text-[14px] leading-[1.7] text-(--warm-gray)">
                  The Intramuros Administration is created to restore and preserve the historic walled city, beginning decades of careful heritage rehabilitation.
                </p>
              </div>
            </div>
          </div>

          <div className="top-25">
            <div className="aspect-13/12 bg-[url('/assets/history_img/history_1258.png')] bg-cover bg-center bg-no-repeat border border-(--border) relative overflow-hidden flex items-center justify-center">
              <div className="font-['Playfair_Display',serif] text-[13px] text-[rgba(201,168,76,0.3)] tracking-widest text-center p-10">
                ✦<br/><br/>
                Intramuros<br/>
                Walled City of Manila<br/><br/>
                Est. 1571
              </div>
            </div>

            <div className="text-[12px] text-(--warm-gray) tracking-[0.08em] mt-4 border-l-2 border-(--gold) pl-3">
              The walls of Intramuros — built by the Spanish in 1571, still standing today.
            </div>

            <div className="mt-8">
              <Link href="javascript:void(0)" className="btn-primary px-9 py-3.5 bg-(--gold) text-(--ink) font-['Dm_Sans', sans] font-medium tracking-widest uppercase no-underline transition-colors duration-200 text-[12px] inline-block">
                View Full Page Heritage →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HistorySection