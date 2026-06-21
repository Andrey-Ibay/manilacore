import React,{ useState } from 'react';

const RecycleBinRows = (props) => {
  return (
    <>
      <tr>
        <td className="py-4 px-4.5 text-[13.5px] align-top whitespace-nowrap">
          <div className="text-[11px] text-(--warm-gray) mt-0 tracking-[0.03em]">
            {props.date}
          </div>
        </td>

        <td className="py-4 px-4.5 text-[13.5px] align-top">
          <div className="font-semibold text-(--ink) mb-0.75">
            {props.title}
          </div>

          <div className="text-[12.5px] text-(--warm-gray) leading-normal max-w-95">
            {props.desc}
          </div>
        </td>

        <td className="py-4 px-4.5 text-[13.5px] align-top">
          <div className="flex items-center gap-2">
            <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 border border-[rgba(201,168,76,0.3)] ${props.color}`}>
              {props.initials}
            </div>

            <div className="text-[12.5px] text-(--ink) font-medium">
              {props.deletedBy}
            </div>
          </div>
        </td>

        <td className="py-4 px-4.5 text-[13.5px] align-top">
          <div class="actions-cell">
            <button className="inline-flex items-center gap-1.5 py-3.5 px-3.5 mr-2 bg-transparent border border-[rgba(45,106,79,0.3)] text-[#2d6a4f] cursor-pointer font-['DM_Sans',sans-serif] text-[11.5px] tracking-[0.04em] transition-colors duration-200 hover:bg-[rgba(45,106,79,0.08)] hover:border-[#2d6a4f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.25 h-3.25"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
              Restore
            </button>

            <button className="inline-flex items-center gap-1.5 py-3.5 px-3.5 bg-(--crimson) border border-(--crimson) text-white cursor-pointer font-['DM_Sans',sans-serif] text-[11.5px] tracking-[0.04em] transition-colors duration-200 hover:bg-(--crimson-light) disabled:bg-[rgba(140,123,107,0.15)] disabled:border-[rgba(140,123,107,0.2)] disabled:text-[rgba(140,123,107,0.5)] disabled:cursor-not-allowed disabled:hover:bg-[rgba(140,123,107,0.15)]" disabled={props.isSuper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.25 h-3.25"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              {props.isSuper ? 'Delete Forever' : 'Locked'}
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default RecycleBinRows