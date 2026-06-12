'use client';

import { useState } from 'react';

import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/utils/supabase/client";
import { ImageResponse } from 'next/server';

export default function ProfilePage(){
    const supabase = createClient();
    
    const handleUpload = async (event) =>{
        const [image, setImage] = useState([]);
        const file = event.target.files[0];
        const filePath = `postImages/${Date.now()}_${file.name}`;

        //uploads image to storage bucket
        const { data, error } = await supabase.storage
            .from("postImages")
            .upload(filePath, file);
        if(error){
            console.log("Upload failed:", error);
            return;
        }

        const { data: {user} } = await supabase.auth.getUser();
        //Actually saves to the db table
        const { error: dbError } = await supabase
            .from("images")
            .update({ image_path: filepath })
            .eq('user_id', user.id);

        //Fetch the saved data
        const { data: userRecord } = await supabase
            .from('users')
            .select('image_path')
            .eq('id', user.id)
            .single();

        const { data: publicUrlData } = supabase.storage
            .from('postImages')
            .getPublicUrl(userRecord.image_path);

        //Rendering to state
        setImage(...image, `${publicUrlData}`);
    }
    return(
        <div className="min-h-screen flex items-center justify-center">
            <h1>
                This is profile page.
            </h1>
            <LogoutButton />
            <input type="file" onChange={handleUpload}/>
            <div>
            </div>
            {image.map((img, index) => {
                <img src={`${publicUrlData}`} key={index}/>
            })}
                
        </div>
    );
}