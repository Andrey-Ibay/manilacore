import Link from 'next/link'

import React from 'react'

const FooterSection = () => {
  return (
    <>
      {/* FOOTER SECTION */}
      <footer className="pt-15 px-15 pb-10 bg-(--ink) border-t border-[rgba(201,168,76,0.2)] max-[900px]:px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-15 mb-15 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div>
            <div className="font-['Playfair_Display',serif] text-[32px] font-black text-(--gold) mb-4">
              Maynila
            </div>

            <p className="text-[14px] leading-[1.7] text-white/40 max-w-70">
              An online heritage portal dedicated to preserving and celebrating the history, culture, and living traditions of the City of Manila.
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-5">
              Explore
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              <li>
                <Link href="#history" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  History
                </Link>
              </li>

              <li>
                <Link href="#places" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  Historical Places
                </Link>
              </li>

              <li>
                <Link href="#figures" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  Historical Figures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-5">
              Culture
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              <li>
                <Link href="#traditions" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  Traditions
                </Link>
              </li>

              <li>
                <Link href="#food" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  Food
                </Link>
              </li>

              <li>
                <Link href="#artifacts" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  Cultural Artifacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-(--gold) mb-5">
              About
            </div>

            <ul className="list-none flex flex-col gap-2.5">
              <li>
                <Link href="#" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  About the Project
                </Link>
              </li>

              <li>
                <Link href="#" className="text-[14px] text-white/45 no-underline transition-colors duration-200 hover:text-(--gold)">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex justify-between items-center max-[480px]:flex-col max-[480px]:gap-3 max-[480px]:text-center">
          <div className="text-[12px] text-white/25 tracking-wider">
            © {new Date().getFullYear()} Maynila Heritage Portal. All rights reserved.
          </div>

          <div className="font-['Playfair_Display',serif] italic text-[13px] text-[rgba(201,168,76,0.4)]">
            &quot;Ang hindi marunong lumingon sa pinanggalingan ay hindi makararating sa paroroonan.&quot;
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection