'use client';

import React, { useState } from "react";

export default function RecyclingBinPage(){
    
    return(
        <>

             <div className="flex-1 min-w-0 w-full">
                <div className="flex justify-between items-center py-5.5 px-10 bg-[rgba(26,18,9,0.02)] border-b border-(--border)">
                    <div>
                        <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink)" id="page-title">
                            Recycling Bin
                        </div>

                        <div className="text-[13px] text-(--warm-gray) mt-0.5" id="page-sub">
                            Track every post, edit, and deletion made by the community
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 px-10 pb-15">
                <div className="block" id="page-bin">
                    <div className="flex items-center gap-3 bg-[rgba(139,26,26,0.06)] border border-[rgba(139,26,26,0.2)] px-5 py-3.5 mb-5 text-[13px] text-(--ink-mid)" id="perma-banner">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-(--crimson) shrink-0"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>

                        <span>
                            <strong className="text-(--crimson)">
                                Permanent deletion is restricted.&nbsp;
                            </strong>

                            Only&nbsp; 

                            <strong className="text-(--crimson)">
                                Super Admin&nbsp;
                            </strong> 
                            
                            accounts can permanently erase items from the recycling bin. Admin may restore items only.
                        </span>
                    </div>

                    <div className="flex justify-between items-center mb-4.5 gap-4 flex-wrap">
                        <div className="font-[Playfair_Display] text-[17px] font-bold">
                            Deleted Items
                        </div>
                    </div>

                    <div className="bg-white border border-(--border) overflow-hidden">
                        <table className="w-full border-collapse">
                            <thead className="text-left px-4.5 py-3.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                <tr>
                                    <th className="w-32.5 text-left px-4.5 py-3.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Deleted On
                                    </th>

                                    <th>
                                        Title &amp; Description
                                    </th>

                                    <th className="w-40 text-left px-4.5 py-3.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Deleted By
                                    </th>

                                    <th className="w-60 text-right px-4.5 py-3.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Manage
                                    </th>
                                </tr>
                            </thead>

                            <tbody id="bin-table-body"></tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </>
    );
}