'use client';

import Link from "next/link";
import LogoutButton from "../LogoutButton";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function SidePanelAdmin(){
    const supabase = createClient();
    const [active, setActive] = useState("act-logs");
    const [userState, setUserState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: {user}} = await supabase.auth.getUser();
            
            const { data } = await supabase
                .from('users')
                .select('*')
                .eq("id", user.id);

            if(data){
                setUserState(data)
            }
        }
        fetchData();
    }, []);

    
    const [ userObj ] = userState;
    
    return(
       <>
        <aside className="w-65 shrink-0 bg-(--ink) border-r border-(--border) flex flex-col sticky top-0 h-screen">
            <div className="pt-7 px-6.5 pb-5.5 border-b border-[rgba(201,168,76,0.15)]">
                <div className="font-['Playfair_Display',serif] text-[22px] font-bold text-(--gold) tracking-[0.03em]">
                    Manila Core
                </div>

                <div className="text-[11px] text-white/35 tracking-[0.15em] uppercase mt-1">
                    Admin Dashboard
                </div>
            </div>

            <div className="mt-4.5 mx-6.5 flex items-center gap-2.5 py-2.5 px-3.5 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)]">
                <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,var(--gold-dark),var(--crimson))] flex items-center justify-center font-['Playfair_Display',serif] text-[13px] font-bold text-white shrink-0 border border-[rgba(201,168,76,0.4)]" id="role-avatar">
                    <img className="rounded-full" src={userObj?.avatar_url} />
                </div>

                <div>
                    <div className="text-[13px] text-white font-medium" id="role-name">
                        {userObj?.username}
                    </div>

                    <div className="text-[10px] tracking-widest uppercase text-(--gold) mt-px" id="role-tag">
                        {userObj?.role}
                    </div>
                </div>
            </div>

            <nav className="flex-1 py-6 px-4 overflow-y-auto">
                <div className="text-[10px] tracking-[0.18em] uppercase text-white/25 px-3 mb-2.5 mt-5.5 first:mt-0">
                    {/*Overview*/}
                </div>

                {/*    
                <Link href={'/admin'} className={`flex items-center gap-3 py-2.75 px-3.5 mb-0.5 rounded-sm cursor-pointer text-[13.5px] border  transition-[background,color,border-color] duration-200 ${active === "dashboard" ? "bg-[rgba(201,168,76,0.1)] text-(--gold) border-[rgba(201,168,76,0.3)]" : "text-white/60 border-transparent hover:bg-[rgba(201,168,76,0.06)] hover:text-white/90"}`} onClick={() => setActive("dashboard")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
                    Dashboard
                </Link>
                */} 

                <div className="text-[10px] tracking-[0.18em] uppercase text-white/25 px-3 mb-2.5 mt-5.5 first:mt-0">
                    Moderation
                </div>

                <Link href={'/admin/activity-logs'} className={`flex items-center gap-3 py-2.75 px-3.5 mb-0.5 rounded-sm cursor-pointer text-[13.5px] border transition-[background,color,border-color] duration-200 ${active === "act-logs" ? "bg-[rgba(201,168,76,0.1)] text-(--gold) border-[rgba(201,168,76,0.3)]" : "text-white/60 border-transparent hover:bg-[rgba(201,168,76,0.06)] hover:text-white/90"}`} onClick={() => setActive("act-logs")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>
                    Activity Logs

                    {/*<span className="ml-auto bg-(--crimson) text-white text-[10px] font-bold py-px px-1.75 rounded-full min-w-4.5 text-center" id="activity-count">
                        12
                    </span>*/}
                </Link>

                <Link href={'/admin/recycling-bin'} className={`flex items-center gap-3 py-2.75 px-3.5 mb-0.5 rounded-sm cursor-pointer  text-[13.5px] border transition-[background,color,border-color] duration-200 ${active === "recycle-bin" ? "bg-[rgba(201,168,76,0.1)] text-(--gold) border-[rgba(201,168,76,0.3)]" : "text-white/60 border-transparent hover:bg-[rgba(201,168,76,0.06)] hover:text-white/90"}`} onClick={() => setActive("recycle-bin")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                    Recycling Bin
                </Link>
            </nav>

            <div className="py-4.5 px-6.5 border-t border-[rgba(201,168,76,0.15)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="15 18 9 12 15 6"/></svg>
                    <LogoutButton />
            </div>
        </aside>
       </>
    );
}