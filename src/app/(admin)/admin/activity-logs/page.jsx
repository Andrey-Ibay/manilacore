
'use client';
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from 'react';

export default function ActivityLogsPage(){
    const [activityLogs, setActivityLogs] = useState([]);
    const supabase = createClient();
    
    useEffect(() => {
        const renderLogs = async () => {
            const { data } = await supabase
                .from('items')
                .select('*')
    
            if(data){
                setActivityLogs([...activityLogs, data]);
            }
        }
        renderLogs();
    }, []);

    const deleteRow = async (row) => {
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
                }
            ])
        
        const {data : removedRow} = await supabase
            .from('items')
            .delete()
            .eq("id", row.id)

        const updatedLogs = activityLogs.filter(item => item !== row.id);
        setActivityLogs(updatedLogs);
    }
    return(
        <div className="flex">
            
                {
                    activityLogs.map((row, index) => (
                        <div key={index} className="flex">
                            <img src={row.avatar_url || "#"} className="rounded-full w-10 h-10 mr-2" />
                            <div>{row.id}</div>
                            <div>{row.user_id}</div>
                            <div>{row.created_at}</div>
                            <div>{row.user_name}</div>
                            <div>{row.image_path}</div>
                            <div>{row.headers}</div>
                            <div>{row.description}</div>
                            <div>{row.category_id}</div>
                            <div>{row.date}</div>
                            <button onClick={deleteRow(row)}>Delete</button>
                        </div>
                    ))
                }
            
        </div>
    );
}