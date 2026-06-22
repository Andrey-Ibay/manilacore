
'use client';
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import RecycleBinRows from "@/components/admin/RecycleBinRows";

export default function RecyclingBinPage(){
    const supabase = createClient();
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isSuper, setIsSuper] = useState(false);
    const [activityLogs, setActivityLogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('recycling_bin')
                .select('*')
    
            if(data){
                setActivityLogs([...activityLogs, data]);
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        const fetchUserData = async () => {
            const { data: {user}} = await supabase.auth.getUser();

            if(user){
                const { data } = await supabase
                    .from('users')
                    .select('*')
                    .eq("id", user.id)
                    .single();
        
                if(data.role === "superadmin"){
                    setIsSuper(true);
                }
            }
        }
        fetchUserData()
    }, [])
    const deleteRow = async (row) => {
        console.log("Button triggered")
        if(!isSuper){
            return;
        }
        
         const {data : removedRow} = await supabase
            .from('recycling_bin')
            .delete()
            .eq("id", row.id)
        

        const updatedLogs = activityLogs.filter(item => item !== row.id);
        setActivityLogs(updatedLogs);
        console.log("The code block still finished");
    }
    const restoreRow = async (row) => {
        const { data: {user} } = await supabase.auth.getUser();
        const { data : recycleRow, error } = await supabase
            .from('activity_logs')
            .insert([
                {
                    id: row.id,
                    user_id: row.user_id,
                    created_at: row.created_at,
                    image_path: row.image_path,
                    user_name: row.user_name,
                    headers: row.headers,
                    description: row.description,
                    category_id: row.category_id,
                    date: row.date,
                    avatar_url: row.avatar_url,
                    action: row.action,
                }
            ])
        const { data } = await supabase
            .from('items')
            .insert([
                {
                    id: row.id,
                    user_id: row.user_id,
                    created_at: row.created_at,
                    image_path: row.image_path,
                    user_name: row.user_name,
                    headers: row.headers,
                    description: row.description,
                    category_id: row.category_id,
                    date: row.date,
                    avatar_url: row.avatar_url,
                }
            ])
        
        const {data : removedRow} = await supabase
            .from('recycling_bin')
            .delete()
            .eq("id", row.id)
        

        const updatedLogs = activityLogs.filter(item => item.id !== row.id);
        setActivityLogs(updatedLogs);
    }

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState('all');

    let [rows] = activityLogs.filter(item => filter === 'all');
    

    if (search) {
    rows = rows.filter(item =>
      item.headers?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()) ||
      item.deleted_by?.toLowerCase().includes(search.toLowerCase())
    );
  }
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
                                <tr className="last:border-b-0 border-b border-(--border) transition-[background] duration-150">
                                    <th className="w-32.5 text-left px-4.5 py-3.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
                                        Deleted On
                                    </th>

                                    <th className="text-left py-3.5 px-4.5 bg-(--ink) text-white/50 text-[10px] tracking-[0.12em] uppercase font-medium border-b border-[rgba(201,168,76,0.2)]">
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

                            <tbody id="bin-table-body" >
                                {(!rows) ? (
                                    <tr className="text-center py-17.5 px-5 text-(--warm-gray)">
                                        {/*<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[rgba(140,123,107,0.3)] mb-4"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>*/}

                                        <td className="font-['Playfair_Display',serif] text-[18px] text-(--ink) mb-1.5">
                                            No activity found
                                        </td>

                                        <td className="text-[13px]">
                                            Try adjusting your filters or search term.
                                        </td>
                                    </tr>
                                    ) : 
                                    (rows.map((row, index) => (
                                        <RecycleBinRows 
                                            key={index} 
                                            created_at={row.created_at}
                                            date={row.date}
                                            title={row.headers}
                                            desc={row.description}
                                            pic={row.avatar_url}
                                            user={row.user_name}
                                            action={row.action}
                                            restoreRow={restoreRow}
                                            deleted_by={row.deleted_by}
                                            deleteRow={deleteRow}
                                            row={row}
                                            isSuper={isSuper}
                                            /> 
                                        )
                                    ))
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </>
    );
}