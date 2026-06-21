import React from 'react'

const ActLogsRows = (props) => {
  if(props.created_at){

    console.log(props.created_at);
  }
  return (
    <>
      <tr>
        <td className="py-4 px-4.5 text-[13.5px] align-top whitespace-nowrap">
          <div className="font-['Playfair_Display',serif] font-bold text-[13px] text-(--ink)">
            {props.created_at}
          </div>
          
          <div className="text-[11px] text-(--warm-gray) mt-0.5 tracking-[0.03em]">
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
            <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 border border-[rgba(201,168,76,0.3)]`}>
              <div>
                <img src={props.pic}/>
              </div>
            </div>

            <div className="text-[12.5px] text-(--ink) font-medium w-30">
              <div>
                {props.user}
              </div>
            </div>
          </div>
        </td>

        <td className="py-4 px-4.5 text-[13.5px] align-top">
          {/*<span className={`${props.action === "created" ? "text-[#2d6a4f] border-[rgba(45,106,79,0.25)] bg-[rgba(45,106,79,0.06)]" : ""} ${props.action === "edited" ? "text-[#1d3557] border-[rgba(29,53,87,0.25)] bg-[rgba(29,53,87,0.06)]" : ""} ${props.action === "deleted" ? "text-(--crimson) border-[rgba(139,26,26,0.25)] bg-[rgba(139,26,26,0.06)]" : ""} inline-block text-[10px] tracking-[0.08em] uppercase py-0.75 px-2.5 border border-(--border) text-(--gold-dark) bg-[rgba(201,168,76,0.07)] mb-1.5`}>
            {props.action}
          </span>*/}
        </td>

        <td className="py-4 px-4.5 text-[13.5px] align-top">
          <div className="actions-cell">
            <button className="inline-flex items-center gap-1.5 py-1.75 px-3.5 bg-transparent border border-[rgba(139,26,26,0.3)] text-(--crimson) cursor-pointer font-['DM_Sans',sans-serif] text-[11.5px] tracking-[0.04em] transition-[background,border-color] duration-200 hover:bg-[rgba(139,26,26,0.08)] hover:border-(--crimson)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.25 h-3.25"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default ActLogsRows