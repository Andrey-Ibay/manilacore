'use client';

import { useState, useEffect } from 'react';

import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/utils/supabase/client";

export default function ProfilePage(){
    const supabase = createClient();

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase.from('items').select('*');
            console.log("Stored on state : ", [...images, ...data.map(datum => datum)]);
            setImages(images => [...images, ...data.map(datum => datum)]);
        };
        fetchData();
    }, []);

    const uploadImage = async (file) => {
        //formats file
        const fileExtension = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExtension}`;
        const filePath = `postImages/${fileName}`;

        //uploads image to storage bucket
        const { data, error } = await supabase.storage
            .from("postImages")
            .upload(filePath, file);

        if(error){
            console.log("Failed to upload file: ", error);
        }

        return filePath;
    }
    const saveToDatabase = async (filePath, imageName) => {
        const { data, error } = await supabase
            .from("items")
            .insert([
                {
                    image_path: filePath
                }
            ]);

        if (error) console.log("Failed to save to database: ", error);
    }
    const handleUpload = async (event) =>{
        console.log("This triggered.");
        const file = event.target.files[0];

        if(file){
            try{
                const filePath = await uploadImage(file);

                await saveToDatabase(filePath, file.name);
                console.log("Success");

            }catch (error){
                console.error("Upload failed: ", error);
            }
        }else{
            console.log("Something went wrong.");
        }

    }
    const getImageUrl = (filePath) => {
        const { data } = supabase.storage
            .from('postImages')
            .getPublicUrl(filePath);
        
        return data.publicUrl;
    }

    
    return(
        <div className="min-h-screen flex items-center justify-center">
            <h1>
                This is profile page.
            </h1>
            <LogoutButton />
            <input type="file" onChange={handleUpload}/>
            <div>
                {images.map((row) => (
                    <div key={row.id}>
                        <img src={getImageUrl(row.image_path)} className="w-20 h-20"/>
                    </div>
                ))}
            </div>
        </div>
    );
}