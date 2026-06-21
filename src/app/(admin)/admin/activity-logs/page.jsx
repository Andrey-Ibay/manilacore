'use client';
import { useState } from "react";

import ActLogsRows from "@/components/admin/ActLogsRows";

export default function ActivityLogsPage(){
    // Simulated Activity Logs
    let activityLogs = [
        { id: 1, 
          time: '09:42 AM', 
          date: 'Jun 18, 2026', 
          title: 'Binondo Church', 
          desc: 'Ang ganda pala dito, nakakarelax ang paligid.', 
          user: 'Andrey Ibay', 
          initials: 'AI', 
          color: 'bg-[#8A6B1A]', 
          action: 'created' 
        },
        { id: 2, 
          time: '05:21 PM', 
          date: 'Jun 20, 2026', 
          title: 'Aliwan Festival', 
          desc: 'Ang ganda pala dito, nakakarelax ang paligid.', 
          user: 'Christian David', 
          initials: 'CD', 
          color: 'bg-[#8B1A1A]', 
          action: 'edited' 
        },
        { id: 3, 
          time: '01:30 PM', 
          date: 'Jun 19, 2026', 
          title: 'Fishball', 
          desc: 'Ang sarap talaga kumain ng fishball.', 
          user: 'Michael Estorgio', 
          initials: 'ME', 
          color: 'bg-[#1d3557]', 
          action: 'deleted' 
        },   
    ]

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState("");

    let rows = activityLogs.filter(item => filter === 'all' || item.action === filter);

    if (search) {
        rows = rows.filter(item => 
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.desc.toLowerCase().includes(search.toLowerCase()) ||
            item.user.toLowerCase().includes(search.toLowerCase())
        );
    }

    return(
        <>
            <div className="flex-1 min-w-0 w-full">
                <div className="flex justify-between items-center py-5.5 px-10 bg-[rgba(26,18,9,0.02)] border-b border-(--border)">
                    <div>
                        <div className="font-['Playfair_Display',serif] text-[24px] font-bold text-(--ink)" id="page-title">
                            Activity Logs
                        </div>

                        <div className="text-[13px] text-(--warm-gray) mt-0.5" id="page-sub">
                            Track every post, edit, and deletion made by the community
                        </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                        <div className="flex items-center gap-2 bg-white border border-(--border) py-2 px-3.5 min-w-55">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-(--warm-gray) shrink-0"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>

                            <input type="text" id="search-input" placeholder="Search logs..." className="border-0 outline-none bg-transparent font-['DM_Sans',sans-serif] text-[13px] w-full placeholder:text-[rgba(140,123,107,0.5)]" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 px-10 pb-15">
                <div class="block" id="page-activity">
                    <div className="flex justify-between items-center mb-4.5 gap-4 flex-wrap">
                        <div className="flex gap-2 flex-wrap">
                            <button className="py-1.75 px-4 text-[12px] tracking-[0.04em] border cursor-pointer transition-all duration-200 font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--ink) bg-(--ink) text-(--gold) border-(--ink)" 
                            onClick={() => setFilter('all')}>
                                All
                            </button>

                            <button className="py-1.75 px-4 text-[12px] tracking-[0.04em] border border-(--border) bg-white text-(--warm-gray) cursor-pointer transition-all duration-200 font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--ink)" 
                            onClick={() => setFilter('created')}>
                                Created
                            </button>

                            <button className="py-1.75 px-4 text-[12px] tracking-[0.04em] border border-(--border) bg-white text-(--warm-gray) cursor-pointer transition-all duration-200 font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--ink)" 
                            onClick={() => setFilter('edited')}>
                                Edited
                            </button>

                            <button className="py-1.75 px-4 text-[12px] tracking-[0.04em] border border-(--border) bg-white text-(--warm-gray) cursor-pointer transition-all duration-200 font-['DM_Sans',sans-serif] hover:border-(--gold) hover:text-(--ink)" 
                            onClick={() => setFilter('deleted')}>
                                Deleted
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border border-(--border) overflow-hidden">
                        <table className="w-full border-collapse">
                            <thead className="text-left py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                <tr className="last:border-b-0 border-b border-(--border) transition-[background] duration-150">
                                    <th className="w-32.5 text-left py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Timestamp
                                    </th>

                                    <th className="text-left py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Title &amp; Description
                                    </th>

                                    <th className="w-40 text-left py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        User
                                    </th>

                                    <th className="w-30 text-left py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Action
                                    </th>

                                    <th className="w-30 text-right py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Manage
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="last:border-b-0 border-b border-(--border) transition-[background] duration-150" id="activity-table-body">
                                {rows.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="text-center py-17.5 px-5 text-(--warm-gray)">
                                            <div className="flex flex-col items-center justify-center">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-12 h-12 text-[rgba(140,123,107,0.3)] mb-4"
                                                >
                                                    <circle cx="11" cy="11" r="8" />
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                </svg>

                                                <div className="font-['Playfair_Display',serif] text-[18px] text-(--ink) mb-1.5">
                                                    No activity found
                                                </div>

                                                <div className="text-[13px]">
                                                    Try adjusting your filters or search term.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    rows.map((row, i) => (
                                    <ActLogsRows key={i} {...row} />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </> 
    );
}