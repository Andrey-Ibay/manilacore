'use client';

import { useState, useEffect, useRef } from 'react';

import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/utils/supabase/client";
import { processWithGemini } from "@/app/actions/processWithGemini";
import { safetyGuardrail } from '@/app/actions/safetyGuardrail';

export default function ProfilePage(){
    const supabase = createClient();
    const [images, setImages] = useState([]);

    const fileInputRef = useRef(null);

    //Renders the specific files of the corresponding user 
    useEffect(() => {
        const fetchData = async () => {
            const { data: { user }} = await supabase.auth.getUser();
            if(user){
                const { data } = await supabase
                    .from('items')
                    .select('*')
                    .eq('user_id', user.id);
                
                if(data){
                    setImages(data);
                }
            }
        };
        fetchData();
    }, []);

    //Uploads image to storage bucket.
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
    //saves the file from the storage bucket in supabase to the table
    const saveToDatabase = async (filePath, file) => {
    
        //passes the image to Gemini Flash 3.5 for processing
        const geminiCategoryResult = await processWithGemini(file);
        console.log("Gemini output: ", geminiCategoryResult);

        //saves to database
        const { data: {user}} = await supabase.auth.getUser();
        const { data: newRow, error } = await supabase
            .from("items")
            .insert([
                {
                    user_id: user.id,
                    image_path: filePath,
                    category_id: geminiCategoryResult
                }
            ])
            .select()
            .single();

        if (error){
            console.log("Failed to save to database: ", error);
        }else{
            setImages((setImages) => [...images, newRow]);
        }
    }
    const handleUpload = async () =>{

        console.log("Handle Upload starting...");

        //Prepare file for safety check
        const formData = new FormData();
        const files = fileInputRef.current.files;
        const file = files[0];
        formData.append("file", file);

        //Gemini 3.1 Flash Lite as Safety guardrail
        const geminiSafetyCheck = await safetyGuardrail(formData);

        //Proceed if it is safe
        if(geminiSafetyCheck){
            try{
                //takes the file path
                const filePath = await uploadImage(file);

                //passes file path to save in the database
                await saveToDatabase(filePath, file);
                console.log("Success");
                
                
            }catch (error){
                console.error("Upload failed: ", error);
            }
        }else{
            alert("Error: Image was rejected by safety guardrail.")
        }

    }
    //Returns the public url of the image in the data bucket
    const getImageUrl = (filePath) => {
        const { data } = supabase.storage
            .from('postImages')
            .getPublicUrl(filePath);
        
        return data.publicUrl;
    }
    //remove attached file
    const removeFile = () => {
        fileInputRef.current.value = '';
    }

    return(
        <div className="min-h-screen flex items-center justify-center">
            <h1>
                This is profile page.
            </h1>
            <LogoutButton />
            <input type="file" ref={fileInputRef}/>
            <button onClick={handleUpload}>Submit</button>
            <button onClick={removeFile}>Remove File</button>
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