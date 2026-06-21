'use client';
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from 'react';

export default function RecyclingBinPage(){
    const [recyclingBin, setRecyclingBin] = useState([]);
    const supabase = createClient();
    
    useEffect(() => {
        const renderLogs = async () => {
            const { data } = await supabase
                .from('recycling_bin')
                .select('*')
    
            if(data){
                setRecyclingBin([...recyclingBin, data]);
            }
        }
        renderLogs();
    }, []);

    const deleteRow = async (row) => {
        const { data : currentUser } = await supabase
            .from('users')
            .select("*")

        if(currentUser.role === "superadmin"){
            const { data } = await supabase
                .from('recycling_bin')
                .delete()
                .eq("id", row.id)

                console.log("Welcome super admin");
                const updatedRow = recyclingBin.filter(item => item !== row.id);
                setRecyclingBin(updatedRow);
        }else{
            console.log("You are not authorized to perform such actions.")
            return;
        }
    }
    return(
        <div className="flex">
            <h1>
                {
                    activityLogs.map((row) => (
                        <div key={row.id} className="flex">
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
            </h1>
        </div>
    );
}