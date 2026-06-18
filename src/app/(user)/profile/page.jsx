'use client';

import { useState, useEffect, useRef } from 'react';

import LogoutButton from "@/components/LogoutButton";
import NewsFeed from "@/components/sections/NewsFeed";
import Image from "next/image";
import Skeleton from '@/components/sections/Skeleton';
import { createClient } from "@/utils/supabase/client";
import { processWithGemini } from "@/app/actions/processWithGemini";
import { safetyGuardrail } from '@/app/actions/safetyGuardrail';

export default function ProfilePage(){
    
    const supabase = createClient();

    //State
    const [addCard, setAddCard] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [openedImage, setOpenedImage] = useState(false);
    const [imageKey, setImageKey] = useState({});
    const [images, setImages] = useState([]);
    const [hasPreview, setHasPreview] = useState(false);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [tempImage, setTempImage] = useState("/blank_image.jpg");

    //UseRef hooks for inputs
    const textareaRef = useRef(null);
    const inputHeaderRef = useRef(null);
    const fileInputRef = useRef(null);
    const tempImgHook = useRef("/blank_image.jpg");

    //Renders the specific files of the corresponding user 
    useEffect(() => {
        const fetchData = async () => {
            console.log("useEffect started.")
            const { data: { user }} = await supabase.auth.getUser();
            if(user){
                const { data } = await supabase
                    .from('items')
                    .select('*')
                
                if(data){
                    setImages(data);
                    setUserInfo(user);
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        if(tempImgHook.current){
            setTempImage(tempImgHook.current);
        }
    }, []);

    //fetches data for the newsfeed
    const fetchMoreData = async () => {
        
        const { data } = await supabase
        .from('items')
        .select('*')
        .range(page * 2, (page + 1) * 2 - 1);

        if(data){
            console.log("fetchmoredata function is working");
            setImages((prev) => [...images, ...data]);
            setPage((prev) => prev + 1);
        }
    };

    //For showing a temporary file
    const showPreview = (event) => {
        const file = event.target.files[0];
        if(file){
            tempImgHook.current = URL.createObjectURL(file);
            setHasPreview(true);
        }
    }
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

    const deleteImage = async (id) => {
        const {data} = await supabase
            .from("items")
            .delete()
            .eq('id', id);

        const updatedItems = images.filter(item => item !== id);
        setItems(updatedItems);
    }
    //saves the file from the storage bucket in supabase to the table
    const saveToDatabase = async (filePath, file, desc, head) => {
    
        //passes the image to Gemini Flash 3.5 for processing
        //UNCOMMENT AFTER POPULATION
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
                    category_id: geminiCategoryResult,
                    description: desc,
                    headers: head,
                    user_name: user.user_metadata.full_name,
                    avatar_url: user.user_metadata.avatar_url
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

        //Description and headers
        const description = textareaRef.current.value;
        const header = inputHeaderRef.current.value;

        //Prepare file for safety check
        const formData = new FormData();
        const files = fileInputRef.current.files;
        const file = files[0];
        formData.append("file", file);

        //Gemini 3.1 Flash Lite as Safety guardrail

        //UNCOMMENT AFTER POPULATION
        const geminiSafetyCheck = await safetyGuardrail(formData);

        //Proceed if it is safe
        if(geminiSafetyCheck){
            try{
                //takes the file path
                const filePath = await uploadImage(file);

                //passes file path to save in the database
                await saveToDatabase(filePath, file, description, header);
                console.log("Success");
                
                removeFile();
                setAddCard(false);
                
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
        setHasPreview(false);
    }
    
    return(
        <div className="relative flex w-[80%] h-full justify-center mt-20 pt-20 h-screen relative flex flex-col justify-end px-15 py-20 bg-(--ink) overflow-hidden max-[900px]:px-6! max-[900px]:py-15!">    
            {
                !loading ? (<div className="flex items-center flex-col w-[20%] p-10">
                    <div className="pb-2 flex items-center">
                        <img src={userInfo?.user_metadata?.avatar_url || "#"} className="rounded-full w-10 h-10 mr-2" />
                        <h1>{userInfo?.user_metadata?.full_name || userInfo?.user_metadata?.name || <div className="animate-pulse bg-gray-300 h-5 w-20 rounded-2xl"/>}</h1>
                    </div>
                    <button className="bg-red-600 w-30" onClick={() => setAddCard(true)}>+ New Post</button>
                    <LogoutButton />
                </div>) : (<div className="animate-pulse bg-gray-300 h-[30%] rounded-2xl w-[20%] p-10">
                    <div className="pb-2 flex items-center">
                        <div className="animate-pulse bg-gray-400 rounded-full mr-2 w-10 h-10" />
                        <h1><div className="animate-pulse bg-gray-400 h-5 w-20 rounded-2xl"/></h1>
                    </div>
                    <button><div className="animate-pulse bg-gray-400 h-5 w-30 rounded-2xl"/></button>
                    <button><div className="animate-pulse bg-gray-400 h-5 w-30 rounded-2xl"/></button>
                    
                </div>)
            }
            {
                
                addCard && (<div className="absolute flex bg-blue-600 justify-center items-center">
                    <div>
                        <button onClick={() => {
                            setAddCard(false);
                            removeFile();
                            }
                        }> Exit </button>
                        {
                            (hasPreview === true) ? (<Image src={tempImage} width="300" height="200" alt="Preview"/>) : (<Image src={"/blank_image.jpg"} width="300" height="200" alt="Preview"/>)
                        }
                    </div>
                    <div className="flex flex-col">
                        <input type="file" onChange={showPreview} ref={fileInputRef}/>
                        <input className="bg-grey-100" type="text" ref={inputHeaderRef}placeholder="My post" />
                        <textarea  className="bg-grey-100" ref={textareaRef} placeholder="Something to say?"/>
                        <button onClick={handleUpload}>Post</button>
                        <button onClick={removeFile}>Remove File</button>
                    </div>
                </div>)
            }
            {
                !loading ? (<NewsFeed 
                    userInfo={userInfo}
                    deleteImage={deleteImage}
                    images={images}
                    fetchMoreData={fetchMoreData}
                    getImageUrl={getImageUrl}
                    setOpenedImage={setOpenedImage}
                    setImageKey={setImageKey}
                    imageKey={imageKey}
                    openedImage={openedImage}

                />) : (<div className="animate-pulse bg-gray-300 h-[80%] rounded-2xl ml-10 w-[80%]"/>)
            }
        </div>
        
    );
}