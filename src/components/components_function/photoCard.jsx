import React from 'react'

const PhotoCard = ({ photo }) => {
  return (
    <>
      <div className="group aspect-square bg-[#2a1a08] border border-[rgba(201,168,76,0.12)] relative overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-200 hover:border-(--gold) hover:scale-[1.02]">
        <div className="text-[36px] opacity-60">
          {photo.emoji}
        </div>

        <div className="absolute inset-0 bg-[rgba(26,18,9,0)] transition-colors duration-200 flex items-end p-2 group-hover:bg-[rgba(26,18,9,0.55)]">
          <div className="flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className={`w-5.5 h-5.5 rounded-full bg-${photo.color} flex items-center justify-center text-[10px] font-bold text-white shrink-0 border border-[rgba(201,168,76,0.4)]`}>
              {photo.initials}
            </div>

            <div className="text-[11px] text-[rgba(255,255,255,0.9)] font-medium">
              {photo.user}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhotoCard