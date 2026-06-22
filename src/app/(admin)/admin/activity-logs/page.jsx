
'use client';
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ActLogsRows from "@/components/admin/ActLogsRows";

export default function ActivityLogsPage(){

    const [activityLogs, setActivityLogs] = useState([]);
    const [actionState, setActionState] = useState("");
    const supabase = createClient();
    
    useEffect(() => {
        const renderLogs = async () => {
            
            const { data } = await supabase
                .from('activity_logs')
                .select('*')
    
            if(data){
                setActivityLogs([...activityLogs, data]);
            }
        }
        renderLogs();
    }, []);

    const deleteRow = async (row) => {
        const { data: {user} } = await supabase.auth.getUser();
        const { data : recycleRow, error } = await supabase
            .from('recycling_bin')
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
                    deleted_by: user.user_metadata.full_name
                }
            ])
        
        const {data : removedRow} = await supabase
            .from('items')
            .delete()
            .eq("id", row.id)

        const {data} = await supabase
            .from('activity_logs')
            .delete()
            .eq("id", row.id)

        const updatedLogs = activityLogs.filter(item => item.id !== row.id);
        setActivityLogs(updatedLogs);
    }
    

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState("");

    let [rows] = activityLogs.filter(item => filter === 'all');
    
    if (search) {
        rows = rows.filter(item => 
            item.headers?.toLowerCase().includes(search.toLowerCase()) ||
            item.description?.toLowerCase().includes(search.toLowerCase()) ||
            item.user_name?.toLowerCase().includes(search.toLowerCase())
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
                <div className="block" id="page-activity">
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
                                        <ActLogsRows 
                                            key={index} 
                                            created_at={row.created_at}
                                            date={row.date}
                                            title={row.headers}
                                            desc={row.description}
                                            pic={row.avatar_url}
                                            user={row.user_name}
                                            action={row.action}
                                            deleteRow={deleteRow}
                                            row={row}
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